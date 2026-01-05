'use client'

import { City, cities, getTier1Cities } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface TimeDifferenceTableProps {
  city: City
}

// City-specific comparison targets for maximum relevance
const cityComparisonTargets: Record<string, string[]> = {
  'new-york': ['london', 'los-angeles', 'tokyo', 'paris', 'dubai', 'singapore', 'sydney', 'hong-kong'],
  'london': ['new-york', 'paris', 'tokyo', 'dubai', 'singapore', 'hong-kong', 'sydney', 'los-angeles'],
  'tokyo': ['new-york', 'london', 'singapore', 'hong-kong', 'sydney', 'los-angeles', 'shanghai', 'seoul'],
  'paris': ['new-york', 'london', 'tokyo', 'dubai', 'berlin', 'amsterdam', 'singapore', 'sydney'],
  'dubai': ['london', 'mumbai', 'singapore', 'new-york', 'hong-kong', 'istanbul', 'frankfurt', 'sydney'],
  'singapore': ['hong-kong', 'tokyo', 'sydney', 'london', 'new-york', 'dubai', 'shanghai', 'mumbai'],
  'hong-kong': ['shanghai', 'singapore', 'tokyo', 'london', 'new-york', 'sydney', 'dubai', 'seoul'],
  'sydney': ['tokyo', 'singapore', 'hong-kong', 'los-angeles', 'london', 'new-york', 'seoul', 'auckland'],
  'los-angeles': ['new-york', 'tokyo', 'london', 'sydney', 'chicago', 'singapore', 'hong-kong', 'paris'],
  'istanbul': ['dubai', 'london', 'frankfurt', 'new-york', 'paris', 'mumbai', 'singapore', 'moscow'],
  'chicago': ['new-york', 'los-angeles', 'london', 'tokyo', 'toronto', 'frankfurt', 'sao-paulo', 'hong-kong'],
  'frankfurt': ['london', 'new-york', 'paris', 'tokyo', 'amsterdam', 'dubai', 'singapore', 'zurich'],
  'mumbai': ['dubai', 'singapore', 'london', 'hong-kong', 'new-york', 'tokyo', 'sydney', 'frankfurt'],
  'bangkok': ['singapore', 'hong-kong', 'tokyo', 'sydney', 'london', 'dubai', 'mumbai', 'seoul'],
  'seoul': ['tokyo', 'hong-kong', 'singapore', 'new-york', 'london', 'shanghai', 'sydney', 'los-angeles'],
  'shanghai': ['hong-kong', 'tokyo', 'singapore', 'new-york', 'london', 'sydney', 'seoul', 'dubai'],
  'toronto': ['new-york', 'london', 'los-angeles', 'chicago', 'tokyo', 'paris', 'hong-kong', 'vancouver'],
  'berlin': ['london', 'paris', 'new-york', 'frankfurt', 'amsterdam', 'tokyo', 'dubai', 'warsaw'],
  'amsterdam': ['london', 'paris', 'berlin', 'new-york', 'frankfurt', 'dubai', 'tokyo', 'brussels'],
  'sao-paulo': ['new-york', 'london', 'buenos-aires', 'miami', 'lisbon', 'tokyo', 'mexico-city', 'frankfurt'],
}

// Get comparison cities for a given city
function getComparisonCities(city: City): City[] {
  const targetSlugs = cityComparisonTargets[city.slug]
  
  if (targetSlugs) {
    return targetSlugs
      .map(slug => cities.find(c => c.slug === slug))
      .filter((c): c is City => c !== undefined)
  }
  
  // Default: Tier 1 cities excluding current
  return getTier1Cities()
    .filter(c => c.slug !== city.slug)
    .slice(0, 8)
}

// Calculate time difference
function getTimeDifference(fromCity: City, toCity: City): string {
  const now = new Date()
  const fromTime = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone }))
  const toTime = new Date(now.toLocaleString('en-US', { timeZone: toCity.timezone }))
  
  const diffMs = toTime.getTime() - fromTime.getTime()
  const diffHours = diffMs / (1000 * 60 * 60)
  
  // Handle half-hour offsets (India, etc.)
  if (diffHours % 1 !== 0) {
    const hours = Math.floor(Math.abs(diffHours))
    const mins = Math.round((Math.abs(diffHours) % 1) * 60)
    const sign = diffHours >= 0 ? '+' : '-'
    return `${sign}${hours}:${mins.toString().padStart(2, '0')}`
  }
  
  if (diffHours === 0) return 'Same'
  return `${diffHours > 0 ? '+' : ''}${diffHours}h`
}

// Get current time in city
function getCurrentTime(city: City): string {
  const now = new Date()
  return now.toLocaleString('en-US', { 
    timeZone: city.timezone, 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  })
}

export default function TimeDifferenceTable({ city }: TimeDifferenceTableProps) {
  const { card, text, textMuted, accentText, isLight } = useThemeClasses()
  
  const comparisonCities = getComparisonCities(city)
  
  return (
    <section className={`rounded-2xl p-5 border ${card}`}>
      <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${text}`}>
        🌐 Time Difference from {city.city}
      </h2>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
              <th className={`text-left py-2 px-3 font-medium ${textMuted}`}>City</th>
              <th className={`text-center py-2 px-3 font-medium ${textMuted}`}>Difference</th>
              <th className={`text-right py-2 px-3 font-medium ${textMuted}`}>Current Time</th>
            </tr>
          </thead>
          <tbody>
            {comparisonCities.map((targetCity) => {
              const diff = getTimeDifference(city, targetCity)
              const currentTime = getCurrentTime(targetCity)
              const isAhead = diff.startsWith('+')
              const isSame = diff === 'Same'
              
              return (
                <tr 
                  key={targetCity.slug}
                  className={`border-b last:border-0 ${
                    isLight ? 'border-slate-100 hover:bg-slate-50' : 'border-slate-800 hover:bg-slate-800/50'
                  } transition-colors`}
                >
                  {/* City Name - Internal Link */}
                  <td className="py-3 px-3">
                    <a 
                      href={`/${targetCity.slug}`}
                      className={`font-medium ${accentText} hover:underline`}
                    >
                      {targetCity.city}
                    </a>
                    <span className={`text-xs ml-1 ${textMuted}`}>
                      {targetCity.country}
                    </span>
                  </td>
                  
                  {/* Time Difference */}
                  <td className="py-3 px-3 text-center">
                    <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      isSame 
                        ? isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                        : isAhead
                          ? isLight ? 'bg-red-100 text-red-700' : 'bg-red-900/30 text-red-400'
                          : isLight ? 'bg-green-100 text-green-700' : 'bg-green-900/30 text-green-400'
                    }`}>
                      {diff}
                    </span>
                  </td>
                  
                  {/* Current Time */}
                  <td className={`py-3 px-3 text-right font-mono ${text}`}>
                    {currentTime}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      
      {/* Meeting Planner CTA */}
      <div className={`mt-4 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
        <a 
          href="/meeting"
          className={`inline-flex items-center gap-2 text-sm font-medium ${accentText} hover:underline`}
        >
          <span>📅</span>
          <span>Schedule a meeting across time zones →</span>
        </a>
      </div>
    </section>
  )
}
