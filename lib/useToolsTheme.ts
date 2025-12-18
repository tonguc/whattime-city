'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { getCityContext } from '@/lib/city-context'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme, Theme } from '@/lib/themes'
import { cities, City } from '@/lib/cities'

// Default coordinates (NYC) - fallback only when no city selected
const DEFAULT_LAT = 40.71
const DEFAULT_LNG = -74.01
const DEFAULT_TZ = 'America/New_York'

interface ToolsThemeResult {
  theme: Theme
  isLight: boolean
  timeOfDay: string
  selectedCity: City | null
}

/**
 * Hook for tools pages - reads city context DIRECTLY from sessionStorage
 * Re-reads on pathname change to catch navigation updates
 */
export function useToolsTheme(): ToolsThemeResult {
  const pathname = usePathname()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [coords, setCoords] = useState({ lat: DEFAULT_LAT, lng: DEFAULT_LNG, timezone: DEFAULT_TZ })
  const [selectedCity, setSelectedCity] = useState<City | null>(null)

  // Read context - runs on mount AND pathname change
  useEffect(() => {
    const ctx = getCityContext()
    if (ctx) {
      setCoords({ lat: ctx.lat, lng: ctx.lng, timezone: ctx.timezone })
      const city = cities.find(c => c.slug === ctx.slug) || null
      setSelectedCity(city)
    }
  }, [pathname])

  // Time ticker
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Calculate theme from coordinates with timezone
  const timeOfDay = getTimeOfDay(currentTime, coords.lat, coords.lng, coords.timezone)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)

  return { theme, isLight, timeOfDay, selectedCity }
}

/**
 * Get the context city for tool dropdowns
 */
export function getContextCity(defaultCityName: string = 'New York'): City {
  if (typeof window !== 'undefined') {
    const ctx = getCityContext()
    if (ctx) {
      const city = cities.find(c => c.slug === ctx.slug)
      if (city) return city
    }
  }
  return cities.find(c => c.city === defaultCityName) || cities[0]
}
