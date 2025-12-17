'use client'

import { useState, useEffect } from 'react'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme, Theme } from '@/lib/themes'
import { getCityContext } from '@/lib/city-context'
import { cities, City } from '@/lib/cities'

// Default coordinates (NYC) - only used when NO context exists
const DEFAULT_LAT = 40.71
const DEFAULT_LNG = -74.01

interface ToolsThemeResult {
  theme: Theme
  isLight: boolean
  timeOfDay: string
  contextCity: City | null
  hasContext: boolean
}

/**
 * Single hook for all tools pages to get theme based on city context.
 * 
 * PRIORITY ORDER:
 * 1. Saved city context from sessionStorage (from city page navigation)
 * 2. Default coordinates (NYC) - NO geolocation, NO browser timezone
 * 
 * This hook NEVER calls geolocation or browser timezone APIs.
 * If a city context exists, it is ALWAYS used.
 */
export function useToolsTheme(): ToolsThemeResult {
  const [contextData, setContextData] = useState({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    city: null as City | null,
    hasContext: false
  })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isInitialized, setIsInitialized] = useState(false)
  
  // Read context ONCE on client mount - this ensures sessionStorage is available
  useEffect(() => {
    const ctx = getCityContext()
    if (ctx) {
      const city = cities.find(c => c.slug === ctx.slug) || null
      setContextData({
        lat: ctx.lat,
        lng: ctx.lng,
        city,
        hasContext: true
      })
    }
    setIsInitialized(true)
  }, [])
  
  // Time ticker
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Calculate theme based on context coordinates (or defaults)
  const timeOfDay = getTimeOfDay(currentTime, contextData.lat, contextData.lng)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)
  
  return {
    theme,
    isLight,
    timeOfDay,
    contextCity: contextData.city,
    hasContext: contextData.hasContext
  }
}

/**
 * Get the initial city for tool dropdowns based on context.
 * Falls back to specified default if no context.
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
