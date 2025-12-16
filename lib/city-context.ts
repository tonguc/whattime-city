// City context management for preserving selected city across navigation

export interface CityContext {
  slug: string
  city: string
  lat: number
  lng: number
  timezone: string
}

const STORAGE_KEY = 'whattime_city_context'

// Save city context to sessionStorage
export function saveCityContext(context: CityContext): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context))
  }
}

// Get city context from sessionStorage
export function getCityContext(): CityContext | null {
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        return null
      }
    }
  }
  return null
}

// Clear city context
export function clearCityContext(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(STORAGE_KEY)
  }
}

// Check if city context exists
export function hasCityContext(): boolean {
  return getCityContext() !== null
}
