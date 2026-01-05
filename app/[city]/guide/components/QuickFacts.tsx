'use client'

import Link from 'next/link'
import { GuideConfig, getCallTarget, getRegionDisplayName } from '@/lib/guide-content'

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

// Helper to get best call time suggestion based on region
function getBestCallTime(config: GuideConfig): string {
  switch (config.region) {
    case 'AMERICAS':
      return '2 PM - 5 PM'
    case 'EUROPE':
      return '2 PM - 5 PM'
    case 'MENA':
      return '10 AM - 1 PM'
    case 'ASIA':
      return '5 PM - 8 PM'
    case 'OCEANIA':
      return '4 PM - 7 PM'
    default:
      return '2 PM - 5 PM'
  }
}

export default function QuickFacts({ config, isLight }: QuickFactsProps) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'
  
  const dstInfo = getDSTInfo(config)
  const callTime = getBestCallTime(config)
  const callTarget = getCallTarget(config.region)
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
          <h3 className={`font-medium mb-2 ${headingColor}`}>Location & Calling</h3>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Coordinates:</strong> {formatCoordinate(coords.lat, true)}, {formatCoordinate(coords.lng, false)}</li>
            <li>• <strong>Region:</strong> {regionName}</li>
            <li>• <strong>Best Call Window:</strong> {callTime}</li>
            <li>• <strong>For Overlap:</strong> <Link href={`/${callTarget.targetSlug}/`} className={linkColor}>{callTarget.targetName}</Link> business hours</li>
          </ul>
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
