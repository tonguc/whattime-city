'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay, TimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme, Theme } from '@/lib/themes'

// Find nearest city to coordinates
function findNearestCity(lat: number, lng: number): City {
  let nearest = cities[0]
  let minDist = Infinity
  for (const city of cities) {
    const dist = Math.pow(city.lat - lat, 2) + Math.pow(city.lng - lng, 2)
    if (dist < minDist) { minDist = dist; nearest = city }
  }
  return nearest
}

interface CityContextType {
  // Time
  time: Date
  
  // Active city (determines theme)
  activeCity: City
  setActiveCity: (city: City) => void
  
  // Detected city (user's location)
  detectedCity: City | null
  
  // Theme
  themeMode: 'auto' | 'light' | 'dark'
  setThemeMode: (mode: 'auto' | 'light' | 'dark') => void
  currentTheme: TimeOfDay | 'light' | 'dark'
  theme: Theme
  isLight: boolean
  
  // Clock preferences
  clockMode: 'digital' | 'analog'
  setClockMode: (mode: 'digital' | 'analog') => void
  use12Hour: boolean
  setUse12Hour: (use: boolean) => void
  
  // Favorites
  favorites: string[]
  toggleFavorite: (slug: string) => void
  
  // Helpers
  getLocalTime: (city: City) => string
  getLocalDate: (city: City) => string
  getCityTimeOfDay: (city: City) => TimeOfDay
}

const CityContext = createContext<CityContextType | null>(null)

export function CityProvider({ children }: { children: ReactNode }) {
  // Core state
  const [time, setTime] = useState(new Date())
  const [activeCity, setActiveCityState] = useState<City>(() => cities.find(c => c.slug === 'london') || cities[0])
  const [detectedCity, setDetectedCity] = useState<City | null>(null)
  
  // Preferences (persisted)
  const [themeMode, setThemeModeState] = useState<'auto' | 'light' | 'dark'>('auto')
  const [clockMode, setClockModeState] = useState<'digital' | 'analog'>('digital')
  const [use12Hour, setUse12HourState] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])
  
  // Timer - update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Load preferences from localStorage
  useEffect(() => {
    try {
      const tm = localStorage.getItem('whattime-theme-mode')
      if (tm === 'auto' || tm === 'light' || tm === 'dark') setThemeModeState(tm)
      
      const cm = localStorage.getItem('whattime-clock-mode')
      if (cm === 'analog' || cm === 'digital') setClockModeState(cm)
      
      const h = localStorage.getItem('whattime-12hour')
      if (h === 'true') setUse12HourState(true)
      
      const f = localStorage.getItem('whattime-favorites')
      if (f) setFavorites(JSON.parse(f))
    } catch {}
  }, [])
  
  // Detect user location
  useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const nearest = findNearestCity(pos.coords.latitude, pos.coords.longitude)
          setDetectedCity(nearest)
          // Only set active city if still default
          setActiveCityState(prev => prev.slug === 'london' ? nearest : prev)
        },
        () => {
          // Fallback to timezone
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
          const tzCity = cities.find(c => c.timezone === tz) || cities[0]
          setDetectedCity(tzCity)
          setActiveCityState(prev => prev.slug === 'london' ? tzCity : prev)
        },
        { timeout: 5000, maximumAge: 300000 }
      )
    }
  }, [])
  
  // Setters that persist to localStorage
  const setThemeMode = (mode: 'auto' | 'light' | 'dark') => {
    setThemeModeState(mode)
    try { localStorage.setItem('whattime-theme-mode', mode) } catch {}
  }
  
  const setClockMode = (mode: 'digital' | 'analog') => {
    setClockModeState(mode)
    try { localStorage.setItem('whattime-clock-mode', mode) } catch {}
  }
  
  const setUse12Hour = (use: boolean) => {
    setUse12HourState(use)
    try { localStorage.setItem('whattime-12hour', String(use)) } catch {}
  }
  
  const setActiveCity = (city: City) => {
    setActiveCityState(city)
  }
  
  const toggleFavorite = (slug: string) => {
    setFavorites(prev => {
      const newFavs = prev.includes(slug) 
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
      try { localStorage.setItem('whattime-favorites', JSON.stringify(newFavs)) } catch {}
      return newFavs
    })
  }
  
  // Calculate current theme based on active city
  const autoTheme = getTimeOfDay(time, activeCity.lat, activeCity.lng, activeCity.timezone)
  const currentTheme: TimeOfDay | 'light' | 'dark' = themeMode === 'auto' 
    ? autoTheme 
    : themeMode  // 'light' veya 'dark' direkt kullan
  const theme = themes[currentTheme]
  const isLight = isLightTheme(currentTheme)
  
  // Helper functions
  const getLocalTime = (city: City) => {
    return time.toLocaleTimeString('en-US', { 
      timeZone: city.timezone, 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: use12Hour 
    })
  }
  
  const getLocalDate = (city: City) => {
    return time.toLocaleDateString('en-US', { 
      timeZone: city.timezone, 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  
  const getCityTimeOfDay = (city: City): TimeOfDay => {
    return getTimeOfDay(time, city.lat, city.lng, city.timezone)
  }
  
  return (
    <CityContext.Provider value={{
      time,
      activeCity,
      setActiveCity,
      detectedCity,
      themeMode,
      setThemeMode,
      currentTheme,
      theme,
      isLight,
      clockMode,
      setClockMode,
      use12Hour,
      setUse12Hour,
      favorites,
      toggleFavorite,
      getLocalTime,
      getLocalDate,
      getCityTimeOfDay,
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
