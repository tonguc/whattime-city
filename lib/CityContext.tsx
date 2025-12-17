'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme, Theme } from '@/lib/themes'

// Storage key for persistence
const STORAGE_KEY = 'whattime_selected_city'

interface CityContextType {
  selectedCity: City | null
  setSelectedCity: (city: City) => void
  clearSelectedCity: () => void
  theme: Theme
  timeOfDay: string
  isLight: boolean
}

const CityContext = createContext<CityContextType | null>(null)

// Default fallback coordinates (NYC)
const DEFAULT_LAT = 40.71
const DEFAULT_LNG = -74.01

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCityState] = useState<City | null>(null)
  const [userCoords, setUserCoords] = useState({ lat: DEFAULT_LAT, lng: DEFAULT_LNG })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isHydrated, setIsHydrated] = useState(false)

  // Load persisted city on mount (client only)
  useEffect(() => {
    // Try to load from sessionStorage
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const data = JSON.parse(stored)
        const city = cities.find(c => c.slug === data.slug)
        if (city) {
          setSelectedCityState(city)
        }
      } catch (e) {
        console.error('Failed to parse stored city:', e)
      }
    }
    setIsHydrated(true)
  }, [])

  // Time ticker
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Set and persist city
  const setSelectedCity = (city: City) => {
    setSelectedCityState(city)
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      slug: city.slug,
      lat: city.lat,
      lng: city.lng
    }))
  }

  // Clear city
  const clearSelectedCity = () => {
    setSelectedCityState(null)
    sessionStorage.removeItem(STORAGE_KEY)
  }

  // Calculate theme based on:
  // 1. Selected city (if exists)
  // 2. User coordinates (fallback)
  const coords = selectedCity 
    ? { lat: selectedCity.lat, lng: selectedCity.lng }
    : userCoords

  const timeOfDay = getTimeOfDay(currentTime, coords.lat, coords.lng)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)

  return (
    <CityContext.Provider value={{
      selectedCity,
      setSelectedCity,
      clearSelectedCity,
      theme,
      timeOfDay,
      isLight
    }}>
      {children}
    </CityContext.Provider>
  )
}

export function useCityContext() {
  const context = useContext(CityContext)
  if (!context) {
    throw new Error('useCityContext must be used within CityProvider')
  }
  return context
}
