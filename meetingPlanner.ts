/**
 * Meeting Planner Utilities
 * City pair karşılaştırmaları ve time difference hesaplamaları
 */

import { City, cities } from '@/lib/cities'

export interface CityPair {
  city1: City
  city2: City
}

export interface TimeDifference {
  hours: number
  minutes: number
  direction: 'ahead' | 'behind'
  totalMinutes: number
}

export interface CompromiseSlot {
  hour: number // UTC hour
  score: number // 0-100
  city1LocalHour: number
  city2LocalHour: number
  city1Status: 'perfect' | 'good' | 'early' | 'late' | 'very-bad'
  city2Status: 'perfect' | 'good' | 'early' | 'late' | 'very-bad'
}

/**
 * Slug'dan city bulur
 */
export function getCityBySlug(slug: string): City | null {
  return cities.find(c => c.slug === slug) || null
}

/**
 * İki slug'dan city pair oluşturur
 */
export function parseCityPair(citiesParam: string): CityPair | null {
  // Format: "london-new-york" or "london-vs-new-york"
  const parts = citiesParam.split('-vs-')
  let city1Slug: string
  let city2Slug: string

  if (parts.length === 2) {
    // "london-vs-new-york" format
    city1Slug = parts[0]
    city2Slug = parts[1]
  } else {
    // "london-new-york" format - split at last dash
    const allParts = citiesParam.split('-')
    if (allParts.length < 2) return null
    
    // Try to find split point (e.g., "new-york-los-angeles" -> "new-york" + "los-angeles")
    // For now, simple approach: assume single-word cities or use existing slugs
    const matchedPairs = findCityPairFromSlug(citiesParam)
    if (!matchedPairs) return null
    
    city1Slug = matchedPairs[0]
    city2Slug = matchedPairs[1]
  }

  const city1 = getCityBySlug(city1Slug)
  const city2 = getCityBySlug(city2Slug)

  if (!city1 || !city2) return null

  return { city1, city2 }
}

/**
 * Combined slug'dan city pair bulur (e.g., "new-york-london" -> ["new-york", "london"])
 */
function findCityPairFromSlug(slug: string): [string, string] | null {
  // Try all possible split points
  const parts = slug.split('-')
  
  for (let i = 1; i < parts.length; i++) {
    const slug1 = parts.slice(0, i).join('-')
    const slug2 = parts.slice(i).join('-')
    
    const city1 = getCityBySlug(slug1)
    const city2 = getCityBySlug(slug2)
    
    if (city1 && city2) {
      return [slug1, slug2]
    }
  }
  
  return null
}

/**
 * İki city slug'ını normalize eder (alphabetical)
 */
export function normalizeCityPair(slug1: string, slug2: string): string {
  const sorted = [slug1, slug2].sort()
  return sorted.join('-')
}

/**
 * City pair için canonical URL oluşturur
 */
export function getCanonicalUrl(city1: City, city2: City): string {
  const normalized = normalizeCityPair(city1.slug, city2.slug)
  return `/meeting/${normalized}/`
}

/**
 * İki şehir arasındaki zaman farkını hesaplar
 */
export function calculateTimeDifference(city1: City, city2: City): TimeDifference {
  // Get current UTC offset for each city (accounting for DST)
  const now = new Date()
  
  const formatter1 = new Intl.DateTimeFormat('en-US', {
    timeZone: city1.timezone,
    timeZoneName: 'short'
  })
  const formatter2 = new Intl.DateTimeFormat('en-US', {
    timeZone: city2.timezone,
    timeZoneName: 'short'
  })
  
  // Calculate offset in minutes
  const getOffset = (timezone: string) => {
    const date = new Date()
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }))
    return (tzDate.getTime() - utcDate.getTime()) / 60000 // minutes
  }
  
  const offset1 = getOffset(city1.timezone)
  const offset2 = getOffset(city2.timezone)
  
  const diffMinutes = Math.abs(offset1 - offset2)
  const hours = Math.floor(diffMinutes / 60)
  const minutes = diffMinutes % 60
  
  return {
    hours,
    minutes,
    direction: offset1 > offset2 ? 'ahead' : 'behind',
    totalMinutes: diffMinutes
  }
}

/**
 * Verilen UTC saatte bir şehrin local saatini hesaplar
 */
export function getLocalHour(city: City, utcHour: number): number {
  const now = new Date()
  now.setUTCHours(utcHour, 0, 0, 0)
  
  const localTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
  return localTime.getHours()
}

/**
 * Bir saatin durumunu değerlendirir (working hours vs not)
 */
function evaluateHourStatus(hour: number): CompromiseSlot['city1Status'] {
  if (hour >= 9 && hour <= 17) return 'perfect' // Core working hours
  if (hour >= 8 && hour < 9) return 'good' // Early but acceptable
  if (hour > 17 && hour <= 19) return 'good' // Late but acceptable
  if (hour >= 7 && hour < 8) return 'early'
  if (hour > 19 && hour <= 21) return 'late'
  return 'very-bad' // Outside reasonable hours
}

/**
 * Slot'un skorunu hesaplar
 */
function calculateSlotScore(
  status1: CompromiseSlot['city1Status'],
  status2: CompromiseSlot['city2Status']
): number {
  const statusScores = {
    'perfect': 40,
    'good': 30,
    'early': 20,
    'late': 15,
    'very-bad': 0
  }
  
  return statusScores[status1] + statusScores[status2]
}

/**
 * İki şehir için en iyi meeting time'ları bulur
 */
export function findBestCompromise(city1: City, city2: City): CompromiseSlot[] {
  const slots: CompromiseSlot[] = []
  
  // Test every hour (0-23 UTC)
  for (let utcHour = 0; utcHour < 24; utcHour++) {
    const city1LocalHour = getLocalHour(city1, utcHour)
    const city2LocalHour = getLocalHour(city2, utcHour)
    
    const city1Status = evaluateHourStatus(city1LocalHour)
    const city2Status = evaluateHourStatus(city2LocalHour)
    const score = calculateSlotScore(city1Status, city2Status)
    
    slots.push({
      hour: utcHour,
      score,
      city1LocalHour,
      city2LocalHour,
      city1Status,
      city2Status
    })
  }
  
  // Sort by score and return top 3
  return slots
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

/**
 * İki şehir için business hours overlap olup olmadığını kontrol eder
 */
export function hasBusinessHoursOverlap(city1: City, city2: City): boolean {
  for (let utcHour = 0; utcHour < 24; utcHour++) {
    const city1LocalHour = getLocalHour(city1, utcHour)
    const city2LocalHour = getLocalHour(city2, utcHour)
    
    const isCity1Working = city1LocalHour >= 9 && city1LocalHour <= 17
    const isCity2Working = city2LocalHour >= 9 && city2LocalHour <= 17
    
    if (isCity1Working && isCity2Working) {
      return true
    }
  }
  
  return false
}

/**
 * Top city pairs generate eder (static generation için)
 */
export function generateTopCityPairs(limit: number = 1000): string[] {
  // Tier 1 and 2 cities only
  const topCities = cities
    .filter(c => c.tier && c.tier <= 2)
    .slice(0, 50) // Top 50 cities
  
  const pairs: string[] = []
  
  for (let i = 0; i < topCities.length && pairs.length < limit; i++) {
    for (let j = i + 1; j < topCities.length && pairs.length < limit; j++) {
      const normalized = normalizeCityPair(topCities[i].slug, topCities[j].slug)
      pairs.push(normalized)
    }
  }
  
  return pairs.slice(0, limit)
}

/**
 * Saat formatlar (12h or 24h)
 */
export function formatHour(hour: number, use12Hour: boolean = false): string {
  if (!use12Hour) {
    return `${hour.toString().padStart(2, '0')}:00`
  }
  
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  return `${displayHour}:00 ${period}`
}

/**
 * Status için emoji/icon döner
 */
export function getStatusIcon(status: CompromiseSlot['city1Status']): string {
  const icons = {
    'perfect': '✅',
    'good': '🟢',
    'early': '🟡',
    'late': '🟡',
    'very-bad': '🔴'
  }
  return icons[status]
}

/**
 * Status için text label döner
 */
export function getStatusLabel(status: CompromiseSlot['city1Status']): string {
  const labels = {
    'perfect': 'Ideal',
    'good': 'Good',
    'early': 'Early',
    'late': 'Late evening',
    'very-bad': 'Outside hours'
  }
  return labels[status]
}
