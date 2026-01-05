'use client'

import Link from 'next/link'
import { GuideConfig, CityRegion, getTableCities } from '@/lib/guide-content'

interface CityComparisonTableProps {
  config: GuideConfig
  isLight: boolean
}

// City data for time calculations and display
const CITY_DATA: Record<string, { icon: string; name: string; utcOffset: number; dstOffset?: number }> = {
  // Americas
  'new-york': { icon: '🗽', name: 'New York', utcOffset: -5, dstOffset: -4 },
  'los-angeles': { icon: '🌴', name: 'Los Angeles', utcOffset: -8, dstOffset: -7 },
  'toronto': { icon: '🍁', name: 'Toronto', utcOffset: -5, dstOffset: -4 },
  'sao-paulo': { icon: '⚽', name: 'São Paulo', utcOffset: -3 },
  
  // Europe
  'london': { icon: '🎡', name: 'London', utcOffset: 0, dstOffset: 1 },
  'paris': { icon: '🗼', name: 'Paris', utcOffset: 1, dstOffset: 2 },
  'berlin': { icon: '🐻', name: 'Berlin', utcOffset: 1, dstOffset: 2 },
  'amsterdam': { icon: '🌷', name: 'Amsterdam', utcOffset: 1, dstOffset: 2 },
  'frankfurt': { icon: '🏦', name: 'Frankfurt', utcOffset: 1, dstOffset: 2 },
  'moscow': { icon: '🏰', name: 'Moscow', utcOffset: 3 },
  
  // MENA (Middle East & Turkey)
  'istanbul': { icon: '🕌', name: 'Istanbul', utcOffset: 3 },
  'dubai': { icon: '🏙️', name: 'Dubai', utcOffset: 4 },
  'riyadh': { icon: '🕋', name: 'Riyadh', utcOffset: 3 },
  'mumbai': { icon: '🏛️', name: 'Mumbai', utcOffset: 5.5 },
  
  // Asia
  'singapore': { icon: '🦁', name: 'Singapore', utcOffset: 8 },
  'hong-kong': { icon: '🌃', name: 'Hong Kong', utcOffset: 8 },
  'shanghai': { icon: '🏙️', name: 'Shanghai', utcOffset: 8 },
  'taipei': { icon: '🏯', name: 'Taipei', utcOffset: 8 },
  'seoul': { icon: '🏯', name: 'Seoul', utcOffset: 9 },
  'tokyo': { icon: '🍣', name: 'Tokyo', utcOffset: 9 },
  
  // Oceania
  'sydney': { icon: '🦘', name: 'Sydney', utcOffset: 10, dstOffset: 11 },
  'auckland': { icon: '🥝', name: 'Auckland', utcOffset: 12, dstOffset: 13 },
}

// Calculate time difference between current city and target city
function getTimeDifference(sourceOffset: number, targetOffset: number): string {
  const diff = targetOffset - sourceOffset
  if (diff === 0) return 'Same time'
  const sign = diff > 0 ? '+' : ''
  const absHours = Math.abs(diff)
  
  // Handle half-hour offsets (e.g., Mumbai +5.5)
  if (absHours % 1 !== 0) {
    const wholeHours = Math.floor(absHours)
    const minutes = Math.round((absHours % 1) * 60)
    return `${sign}${diff > 0 ? '' : '-'}${wholeHours}:${minutes.toString().padStart(2, '0')}`
  }
  
  const suffix = absHours === 1 ? 'hour' : 'hours'
  return `${sign}${diff} ${suffix}`
}

// Calculate what time it is in target city when it's noon in source city
function getTimeAtNoon(sourceOffset: number, targetOffset: number): string {
  const diff = targetOffset - sourceOffset
  let totalMinutes = 12 * 60 + diff * 60 // Convert to minutes for precision
  
  // Handle day changes
  let dayNote = ''
  if (totalMinutes < 0) {
    totalMinutes += 24 * 60
    dayNote = ' (prev)'
  } else if (totalMinutes >= 24 * 60) {
    totalMinutes -= 24 * 60
    dayNote = ' (+1)'
  }
  
  const hour = Math.floor(totalMinutes / 60)
  const minutes = Math.round(totalMinutes % 60)
  
  // Format time
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour)
  const minuteStr = minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : ':00'
  
  return `${displayHour}${minuteStr} ${period}${dayNote}`
}

export default function CityComparisonTable({ config, isLight }: CityComparisonTableProps) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'
  
  // Get region-based cities for this city
  const tableCities = getTableCities(config.citySlug, config.region)
  
  return (
    <section className="mb-10">
      <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
        {config.cityName} Time vs Major Cities
      </h2>
      <div className={`overflow-x-auto rounded-xl ${cardBg}`}>
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
              <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>City</th>
              <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>Difference</th>
              <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>When it's 12 PM in {config.cityName}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            {tableCities.map(citySlug => {
              const cityData = CITY_DATA[citySlug]
              if (!cityData) return null
              
              const diff = getTimeDifference(config.utcOffset, cityData.utcOffset)
              const timeAtNoon = getTimeAtNoon(config.utcOffset, cityData.utcOffset)
              
              return (
                <tr key={citySlug}>
                  <td className="px-4 py-3">
                    {cityData.icon}{' '}
                    <Link 
                      href={`/time/${config.citySlug}/${citySlug}/`} 
                      className={linkColor}
                    >
                      {cityData.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{diff}</td>
                  <td className="px-4 py-3">{timeAtNoon}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className={`mt-3 text-sm ${mutedColor}`}>
        * Times shown use standard time. During DST transitions, differences may vary by 1 hour.{' '}
        <Link href={`/time/${config.citySlug}/london/`} className={linkColor}>
          See detailed time differences →
        </Link>
      </p>
    </section>
  )
}
