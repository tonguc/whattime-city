/**
 * City/Country Constants
 * Statik sabit değerler
 * 
 * @example
 * import { continentLabels, amPmCountries, tier1Slugs } from '@/data/constants'
 */

import type { Continent } from '@/core/types'

// Continent filter type (includes 'all' for UI)
export type ContinentFilter = 'all' | Continent

// Continent display labels
export const continentLabels: Record<ContinentFilter, string> = {
  all: 'Top Cities',
  americas: 'Americas',
  europe: 'Europe',
  asia: 'Asia',
  africa: 'Africa',
  oceania: 'Oceania'
}

// Countries that use 12-hour (AM/PM) time format
export const amPmCountries = [
  'US', 'CA', 'AU', 'PH', 'MY', 'IN', 'PK', 'BD', 'EG', 'SA', 'CO', 'MX'
] as const

// Tier 1: Global financial/cultural hubs - shown on homepage
export const tier1Slugs = [
  'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore', 
  'hong-kong', 'shanghai', 'sydney', 'los-angeles', 'toronto', 'berlin'
] as const
