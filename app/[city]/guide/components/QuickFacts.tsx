'use client'

import Link from 'next/link'
import { GuideConfig, getCallTarget, getRegionDisplayName, CityRegion } from '@/lib/guide-content'

interface QuickFactsProps {
  config: GuideConfig
  isLight: boolean
}

// Helper to format coordinates nicely
function formatCoordinate(value: number, isLat: boolean): string {
  const direction = isLat 
    ? (value >= 0 ? 'N' : 'S') 
    : (value >= 0 ? 'E' : 'W')
  return `${Math.abs(value).toFixed(1)}°${direction}`
}

// Helper to get DST info based on region and city
function getDSTInfo(config: GuideConfig): { status: string; period: string } {
  // Cities that don't observe DST
  const noDSTCities = ['dubai', 'singapore', 'hong-kong', 'tokyo', 'seoul', 'shanghai', 'istanbul']
  
  if (noDSTCities.includes(config.citySlug)) {
    return { status: 'Not observed', period: 'Year-round' }
  }
  
  // Southern hemisphere (DST in Oct-Apr)
  if (config.region === 'OCEANIA') {
    return { status: 'Observed', period: 'Oct → Apr' }
  }
  
  // Northern hemisphere (DST in Mar-Nov)
  return { status: 'Observed', period: 'Mar → Nov' }
}

// Get best overlap info with specific cities and time periods
function getOverlapInfo(region: CityRegion): { morning: { city: string; slug: string; emoji: string }; evening: { city: string; slug: string; emoji: string } } {
  switch (region) {
    case 'AMERICAS':
      return {
        morning: { city: 'London', slug: 'london', emoji: '🇬🇧' },
        evening: { city: 'Tokyo', slug: 'tokyo', emoji: '🇯🇵' }
      }
    case 'EUROPE':
      return {
        morning: { city: 'Singapore', slug: 'singapore', emoji: '🇸🇬' },
        evening: { city: 'New York', slug: 'new-york', emoji: '🇺🇸' }
      }
    case 'MENA':
      return {
        morning: { city: 'Singapore', slug: 'singapore', emoji: '🇸🇬' },
        evening: { city: 'London', slug: 'london', emoji: '🇬🇧' }
      }
    case 'ASIA':
      return {
        morning: { city: 'Sydney', slug: 'sydney', emoji: '🇦🇺' },
        evening: { city: 'London', slug: 'london', emoji: '🇬🇧' }
      }
    case 'OCEANIA':
      return {
        morning: { city: 'Tokyo', slug: 'tokyo', emoji: '🇯🇵' },
        evening: { city: 'Los Angeles', slug: 'los-angeles', emoji: '🇺🇸' }
      }
    default:
      return {
        morning: { city: 'London', slug: 'london', emoji: '🇬🇧' },
        evening: { city: 'New York', slug: 'new-york', emoji: '🇺🇸' }
      }
  }
}

export default function QuickFacts({ config, isLight }: QuickFactsProps) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'
  const pillBg = isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/40 text-blue-300'
  
  const dstInfo = getDSTInfo(config)
  const overlap = getOverlapInfo(config.region)
  const coords = config.coordinates
  const regionName = getRegionDisplayName(config.region)
  
  return (
    <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
      <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
        ⚡ Quick Facts: {config.cityName} Time Zone
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Details</h3>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Zone:</strong> {config.timezoneAbbr} (UTC{config.utcOffset >= 0 ? '+' : ''}{config.utcOffset})</li>
            <li>• <strong>Full Name:</strong> {config.timezoneName}</li>
            <li>• <strong>Daylight Saving:</strong> {dstInfo.status}</li>
            <li>• <strong>DST Period:</strong> {dstInfo.period}</li>
          </ul>
        </div>
        <div>
          <h3 className={`font-medium mb-2 ${headingColor}`}>Location & Region</h3>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Coordinates:</strong> {formatCoordinate(coords.lat, true)}, {formatCoordinate(coords.lng, false)}</li>
            <li>• <strong>Region:</strong> {regionName}</li>
          </ul>
          
          {/* Best Overlap - Visual Pills */}
          <div className="mt-3">
            <p className={`text-xs font-medium mb-2 ${mutedColor}`}>Best Overlap Windows:</p>
            <div className="flex flex-wrap gap-2">
              <Link 
                href={`/time/${config.citySlug}/${overlap.morning.slug}/`}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${pillBg} hover:opacity-80 transition-opacity`}
              >
                <span>{overlap.morning.emoji}</span>
                <span>{overlap.morning.city}</span>
                <span className="opacity-70">(AM)</span>
              </Link>
              <Link 
                href={`/time/${config.citySlug}/${overlap.evening.slug}/`}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${pillBg} hover:opacity-80 transition-opacity`}
              >
                <span>{overlap.evening.emoji}</span>
                <span>{overlap.evening.city}</span>
                <span className="opacity-70">(PM)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={`mt-4 text-sm ${mutedColor}`}>
        Need exact conversions? Try our{' '}
        <Link href="/time/" className={linkColor}>Time Converter</Link>{' '}
        or{' '}
        <Link href="/meeting/" className={linkColor}>Meeting Planner</Link>
      </p>
    </section>
  )
}
