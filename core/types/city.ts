/**
 * City Types
 * Şehir verisi için type tanımları
 */

export type Continent = 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'

export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night'

export type Tier = 1 | 2 | 3

export interface Airport {
  code: string
  name: string
  distance: string
}

export interface CityInfo {
  currency: string
  currencySymbol: string
  population: string
  metroPopulation?: string
  phoneCode: string
  language: string
  climate: string
  attractions: string[]
  demographics: string
  // New premium fields
  airports?: Airport[]
  driving?: 'left' | 'right'
  voltage?: string
  plugType?: string
  famousFor?: string
  seoContent?: CitySeoContent
}

export interface CitySeoContent {
  intro: string
  timezoneFacts: string
  bestTimeToVisit: string
  businessHours: string
  timeDifference?: string
  daylightSaving?: string
  localTips?: string
  transportation?: string
  emergencyNumbers?: string
  publicHolidays?: string
}

export interface City {
  slug: string
  city: string
  timezone: string
  country: string
  countryCode: string
  state?: string        // For US cities
  stateCode?: string    // For US cities (MD, CA, TX...)
  lat: number
  lng: number
  tier?: Tier
  continent?: Continent
  info?: CityInfo
}
