/**
 * Client-safe city utilities
 * Uses cities-core (272KB) instead of cities.ts (2.6MB)
 * Import this in client components instead of @/lib/cities
 */
import { citiesCore } from '@/data/cities-core'
import { amPmCountries, continentLabels } from '@/data/constants'

export type { CityCore } from '@/data/cities-core'
export type { ContinentFilter } from '@/data/constants'
export { continentLabels, citiesCore }

export function getTier1CitiesCore() {
  return citiesCore.filter(c => c.tier === 1)
}

export function getCityCoreBySlug(slug: string) {
  return citiesCore.find(c => c.slug === slug)
}

export function getCityCoreByTimezone(tz: string) {
  return citiesCore.find(c => c.timezone === tz)
}

export function getCitesCoreByContinent(continent: string) {
  if (continent === 'all') return getTier1CitiesCore()
  return citiesCore.filter(c => c.continent === continent)
}

export function getCitesCoreByCountryCode(countryCode: string) {
  return citiesCore.filter(c => c.countryCode === countryCode)
}

export function uses12HourFormatCore(countryCode: string): boolean {
  return (amPmCountries as readonly string[]).includes(countryCode)
}

export function findNearestCityCore(lat: number, lng: number) {
  let nearest = citiesCore[0]
  let minDist = Infinity
  for (const city of citiesCore) {
    const dist = Math.pow(city.lat - lat, 2) + Math.pow(city.lng - lng, 2)
    if (dist < minDist) { minDist = dist; nearest = city }
  }
  return nearest
}
