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
  const [activeCityLoaded, setActiveCityLoaded] = useState(false)
  
  // Mounted state - prevents SSR/client mismatch
  const [mounted, setMounted] = useState(false)
  
  // Preferences (persisted)
  const [themeMode, setThemeModeState] = useState<'auto' | 'light' | 'dark'>('auto')
  const [clockMode, setClockModeState] = useState<'digital' | 'analog'>('digital')
  const [use12Hour, setUse12HourState] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])
  
  // Set mounted on client and immediately detect city via timezone
  useEffect(() => {
    setMounted(true)
    // Immediately set detectedCity based on timezone to prevent layout shift
    // This runs before geolocation to avoid waiting 3-4 seconds
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const tzCity = cities.find(c => c.timezone === tz) || cities.find(c => c.slug === 'london') || cities[0]
    setDetectedCity(tzCity)
  }, [])
  
  // Timer - update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Load preferences from localStorage (including activeCity)
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
      
      // Load active city from localStorage
      const savedCitySlug = localStorage.getItem('whattime-active-city')
      if (savedCitySlug) {
        const savedCity = cities.find(c => c.slug === savedCitySlug)
        if (savedCity) {
          setActiveCityState(savedCity)
        }
      }
      setActiveCityLoaded(true)
    } catch {
      setActiveCityLoaded(true)
    }
  }, [])
  
  // Detect user location - DELAYED to not block initial render
  useEffect(() => {
    if (!activeCityLoaded) return // Wait for localStorage to load first
    
    // First, use timezone as immediate fallback (no permission needed)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const tzCity = cities.find(c => c.timezone === tz) || cities[0]
    setDetectedCity(tzCity)
    const hasSavedCity = localStorage.getItem('whattime-active-city')
    if (!hasSavedCity) {
      setActiveCityState(tzCity)
      try { localStorage.setItem('whattime-active-city', tzCity.slug) } catch {}
    }
    
    // Then, try geolocation AFTER 3 seconds (non-blocking)
    const geoTimeout = setTimeout(() => {
      if (typeof window !== 'undefined' && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const nearest = findNearestCity(pos.coords.latitude, pos.coords.longitude)
            setDetectedCity(nearest)
            // Only update active city if still using timezone fallback
            const currentSaved = localStorage.getItem('whattime-active-city')
            if (!currentSaved || currentSaved === tzCity.slug) {
              setActiveCityState(nearest)
              try { localStorage.setItem('whattime-active-city', nearest.slug) } catch {}
            }
          },
          () => { /* Already using timezone fallback, no action needed */ },
          { timeout: 5000, maximumAge: 300000 }
        )
      }
    }, 3000) // 3 second delay
    
    return () => clearTimeout(geoTimeout)
  }, [activeCityLoaded])
  
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
    // Persist to localStorage so it survives navigation
    try { localStorage.setItem('whattime-active-city', city.slug) } catch {}
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
  
  // Calculate current theme based on ACTIVE CITY's time
  // This ensures header matches the city being viewed
  // Sydney at 8 PM = dark header, Istanbul at 11 AM = light header
  const activeCityTimeOfDay = getTimeOfDay(time, activeCity.lat, activeCity.lng, activeCity.timezone)
  
  const currentTheme = themeMode === 'auto' 
    ? activeCityTimeOfDay 
    : themeMode  // 'light' veya 'dark' direkt kullan
  
  // SSR: Always light theme to prevent hydration mismatch
  // Client: Use calculated theme
  const theme = mounted ? themes[currentTheme] : themes.day
  const isLight = mounted ? isLightTheme(currentTheme) : true
  
  // Sync data-theme attribute for CSS-first styling
  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', currentTheme)
      // Also set data-light for simpler CSS selectors
      document.documentElement.setAttribute('data-light', String(isLight))
    }
  }, [mounted, currentTheme, isLight])
  
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
    // Return safe default values for SSR/static generation
    const defaultCity = cities.find(c => c.slug === 'london') || cities[0]
    return {
      time: new Date(),
      activeCity: defaultCity,
      setActiveCity: () => {},
      detectedCity: null,
      themeMode: 'auto' as const,
      setThemeMode: () => {},
      currentTheme: 'day' as const,
      theme: themes.day,
      isLight: true,
      clockMode: 'digital' as const,
      setClockMode: () => {},
      use12Hour: false,
      setUse12Hour: () => {},
      favorites: [],
      toggleFavorite: () => {},
      getLocalTime: () => '',
      getLocalDate: () => '',
      getCityTimeOfDay: () => 'day' as TimeOfDay,
    }
  }
  return context
}
