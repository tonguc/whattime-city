/**
 * Country Types
 * Ülke verisi için type tanımları
 */

import type { Continent } from './city'

export interface CountrySeo {
  businessHours: string
  bestTimeToCall: string
  dstInfo: string
  travelTips: string
  funFacts: string[]
  nearbyCountries: string[]
  majorEvents: string
}

export interface Country {
  code: string
  name: string
  slug: string
  capital: string
  population: string
  currency: string
  currencySymbol: string
  phoneCode: string
  languages: string[]
  continent: Continent
  description: string
  timezones: string[]
  seo?: CountrySeo
}
