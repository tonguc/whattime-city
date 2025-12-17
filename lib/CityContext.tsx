'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme, Theme } from '@/lib/themes'
import { getCityContext } from '@/lib/city-context'

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
  const [coords, setCoords] = useState({ lat: DEFAULT_LAT, lng: DEFAULT_LNG })
  const [currentTime, setCurrentTime] = useState(new Date())

  // Load persisted city on mount - use SAME key as WorldClock (whattime_city_context)
  useEffect(() => {
    const ctx = getCityContext()
    if (ctx) {
      const city = cities.find(c => c.slug === ctx.slug)
      if (city) {
        setSelectedCityState(city)
        setCoords({ lat: ctx.lat, lng: ctx.lng })
      }
    }
  }, [])

  // Time ticker
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Set city (updates coords for theme calculation)
  const setSelectedCity = (city: City) => {
    setSelectedCityState(city)
    setCoords({ lat: city.lat, lng: city.lng })
  }

  // Clear city
  const clearSelectedCity = () => {
    setSelectedCityState(null)
    setCoords({ lat: DEFAULT_LAT, lng: DEFAULT_LNG })
  }

  // Calculate theme based on coords (from selected city or default)
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
