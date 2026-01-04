/**
 * City & Country Query Functions
 * Şehir ve ülke verisi üzerinde arama/filtreleme fonksiyonları
 * 
 * Data: @/data
 * Types: @/core/types
 */

// Re-export types for backward compatibility
export type { City, CityInfo, Country, Continent } from '@/core/types'

// Import data from data layer
import { cities as rawCities, countries, amPmCountries, continentLabels } from '@/data'
export type { ContinentFilter } from '@/data'

// Dedupe cities - keep first occurrence, but prefer tier 1 if duplicate exists
const cityMap = new Map<string, import('@/core/types').City>()
rawCities.forEach(city => {
  const existing = cityMap.get(city.slug)
  const cityTier = city.tier ?? 3 // Default to tier 3 if undefined
  const existingTier = existing?.tier ?? 3
  // Keep the one with lower tier (tier 1 > tier 2 > tier 3)
  if (!existing || cityTier < existingTier) {
    cityMap.set(city.slug, city)
  }
})
const cities = Array.from(cityMap.values())

// Re-export data for backward compatibility
export { cities, countries, continentLabels }

// ============ COUNTRY FUNCTIONS ============

/**
 * Slug'a göre ülke bulur
 */
export function getCountryBySlug(slug: string): import('@/core/types').Country | undefined {
  return countries.find(c => c.slug === slug)
}

/**
 * Tüm ülke slug'larını döner
 */
export function getAllCountrySlugs(): string[] {
  return countries.map(c => c.slug)
}

/**
 * Ülke koduna göre şehirleri döner
 */
export function getCitiesByCountryCode(countryCode: string): import('@/core/types').City[] {
  return cities.filter(c => c.countryCode === countryCode)
}

// ============ TIME FORMAT ============

/**
 * Ülkenin 12 saat formatı kullanıp kullanmadığını kontrol eder
 */
export function uses12HourFormat(countryCode: string): boolean {
  return amPmCountries.includes(countryCode as typeof amPmCountries[number])
}

// ============ CONTINENT FUNCTIONS ============

type ContinentFilter = import('@/data/constants').ContinentFilter

/**
 * Kıtaya göre şehirleri döner
 * 'all' seçilirse Tier 1 + seçili Tier 2 şehirlerini döner (24 şehir)
 */
export function getCitiesByContinent(continent: ContinentFilter): import('@/core/types').City[] {
  if (continent === 'all') {
    // Tier 1 şehirler (16 global hub)
    const tier1 = cities.filter(c => c.tier === 1)
    
    // Seçili Tier 2 şehirler - kıtalara dengeli dağıtılmış (8 şehir)
    const tier2Slugs = [
      'mexico-city',    // Americas
      'sao-paulo',      // Americas
      'madrid',         // Europe
      'istanbul',       // Europe
      'bangkok',        // Asia
      'seoul',          // Asia
      'mumbai',         // Asia
      'cairo'           // Africa
    ]
    const tier2 = cities.filter(c => tier2Slugs.includes(c.slug))
    
    return [...tier1, ...tier2]  // 16 + 8 = 24 şehir
  }
  return cities.filter(c => c.continent === continent)
}

// ============ CITY FUNCTIONS ============

/**
 * Tier 1 (global hub) şehirleri döner
 */
export function getTier1Cities(): import('@/core/types').City[] {
  return cities.filter(c => c.tier === 1)
}

/**
 * Tier 2 (major city) şehirleri döner
 */
export function getTier2Cities(): import('@/core/types').City[] {
  return cities.filter(c => c.tier === 2)
}

/**
 * Slug'a göre şehir bulur
 */
export function getCityBySlug(slug: string): import('@/core/types').City | undefined {
  return cities.find(c => c.slug === slug)
}

/**
 * Tüm şehir slug'larını döner
 */
export function getAllSlugs(): string[] {
  return cities.map(c => c.slug)
}

/**
 * Ülke koduna göre şehirleri döner
 */
export function getCitiesByCountry(countryCode: string): import('@/core/types').City[] {
  return cities.filter(c => c.countryCode === countryCode)
}

/**
 * Şehir arar (isim, ülke veya slug'da)
 */
export function searchCities(query: string): import('@/core/types').City[] {
  const q = query.toLowerCase()
  return cities.filter(c => 
    c.city.toLowerCase().includes(q) || 
    c.country.toLowerCase().includes(q) ||
    c.slug.includes(q)
  )
}
