'use client'

import { useCityContext } from '@/lib/CityContext'
import { getCityContext } from '@/lib/city-context'
import { themes, Theme } from '@/lib/themes'
import { cities, City } from '@/lib/cities'

interface ToolsThemeResult {
  theme: Theme
  isLight: boolean
  timeOfDay: string
  selectedCity: City | null
}

/**
 * Hook for tools pages - reads from global CityContext
 * Theme stays consistent across all pages
 */
export function useToolsTheme(): ToolsThemeResult {
  const { theme, isLight, currentTheme, activeCity } = useCityContext()
  
  return { 
    theme, 
    isLight, 
    timeOfDay: currentTheme, 
    selectedCity: activeCity 
  }
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
