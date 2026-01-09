'use client'

import { City, cities, getTier1Cities } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface TimeDifferenceTableProps {
  city: City
}

// Phone codes by country
const phoneCodes: Record<string, string> = {
  US: '+1', CA: '+1', GB: '+44', DE: '+49', FR: '+33', JP: '+81',
  CN: '+86', AU: '+61', IN: '+91', BR: '+55', MX: '+52', ES: '+34',
  IT: '+39', NL: '+31', BE: '+32', CH: '+41', AT: '+43', SE: '+46',
  NO: '+47', DK: '+45', FI: '+358', PL: '+48', CZ: '+420', PT: '+351',
  GR: '+30', TR: '+90', RU: '+7', UA: '+380', ZA: '+27', EG: '+20',
  NG: '+234', KE: '+254', AE: '+971', SA: '+966', IL: '+972', PK: '+92',
  BD: '+880', ID: '+62', MY: '+60', SG: '+65', TH: '+66', VN: '+84',
  PH: '+63', KR: '+82', HK: '+852', TW: '+886', NZ: '+64', AR: '+54',
  CL: '+56', CO: '+57', PE: '+51', IE: '+353', HU: '+36', RO: '+40',
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

// Calculate time difference in hours
function getTimeDiffHours(fromCity: City, toCity: City): number {
  const now = new Date()
  const fromTime = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone }))
  const toTime = new Date(now.toLocaleString('en-US', { timeZone: toCity.timezone }))
  
  const diffMs = toTime.getTime() - fromTime.getTime()
  return diffMs / (1000 * 60 * 60)
}

// Format time difference string
function formatTimeDiff(diffHours: number): string {
  // Handle half-hour offsets (India, etc.)
  if (diffHours % 1 !== 0) {
    const hours = Math.floor(Math.abs(diffHours))
    const mins = Math.round((Math.abs(diffHours) % 1) * 60)
    const sign = diffHours >= 0 ? '+' : '-'
    return `${sign}${hours}:${mins.toString().padStart(2, '0')}`
  }
  
  if (diffHours === 0) return 'Same'
  return `${diffHours > 0 ? '+' : ''}${Math.round(diffHours)}h`
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

// Get current hour in city
function getCurrentHour(city: City): number {
  const now = new Date()
  const timeStr = now.toLocaleString('en-US', { timeZone: city.timezone, hour: 'numeric', hour12: false })
  return parseInt(timeStr)
}

// Get time of day icon
function getTimeOfDayIcon(hour: number): string {
  if (hour >= 6 && hour < 12) return '🌅' // Morning
  if (hour >= 12 && hour < 17) return '☀️' // Afternoon  
  if (hour >= 17 && hour < 21) return '🌆' // Evening
  return '🌙' // Night
}

// Calculate meeting overlap
function getMeetingOverlap(diffHours: number): { level: 'high' | 'limited' | 'none'; label: string } {
  const absDiff = Math.abs(diffHours)
  
  if (absDiff <= 3) {
    return { level: 'high', label: 'Good overlap' }
  } else if (absDiff <= 6) {
    return { level: 'limited', label: 'Limited' }
  } else {
    return { level: 'none', label: 'No overlap' }
  }
}

export default function TimeDifferenceTable({ city }: TimeDifferenceTableProps) {
  const { card, textSection, textMeta, textTime, textBody, isLight } = useThemeClasses()
  
  const comparisonCities = getComparisonCities(city)
  
  return (
    <section className={`rounded-2xl border ${card} overflow-hidden`}>
      <div className="p-4 pb-3">
        <h2 className={`flex items-center gap-2 ${textSection}`}>
          <span>🌐</span>
          <span>Time Difference from {city.city}</span>
        </h2>
        <p className={`mt-1 ${textMeta}`}>
          Click any city for detailed comparison
        </p>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-y ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/50 border-slate-700'}`}>
              <th className={`py-2.5 px-3 text-left text-micro uppercase tracking-wider font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>City</th>
              <th className={`py-2.5 px-3 text-center text-micro uppercase tracking-wider font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Now</th>
              <th className={`py-2.5 px-3 text-center text-micro uppercase tracking-wider font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Diff</th>
              <th className={`py-2.5 px-3 text-center text-micro uppercase tracking-wider font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Overlap</th>
              <th className={`py-2.5 px-3 text-right text-micro uppercase tracking-wider font-semibold hidden sm:table-cell ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Dial</th>
            </tr>
          </thead>
          <tbody>
            {comparisonCities.map((targetCity) => {
              const diffHours = getTimeDiffHours(city, targetCity)
              const diff = formatTimeDiff(diffHours)
              const currentTime = getCurrentTime(targetCity)
              const hour = getCurrentHour(targetCity)
              const overlap = getMeetingOverlap(diffHours)
              const phoneCode = phoneCodes[targetCity.countryCode] || ''
              const isAhead = diff.startsWith('+')
              const isSame = diff === 'Same'
              
              return (
                <tr 
                  key={targetCity.slug}
                  className={`border-b transition-colors ${
                    isLight 
                      ? 'border-slate-100 hover:bg-slate-50' 
                      : 'border-slate-800 hover:bg-slate-800/30'
                  }`}
                >
                  {/* City Name + Time of Day Icon */}
                  <td className="py-3 px-3">
                    <a 
                      href={`/${targetCity.slug}`}
                      className={`font-semibold hover:underline flex items-center gap-1.5 ${
                        isLight ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-300'
                      }`}
                    >
                      <span className="text-base">{getTimeOfDayIcon(hour)}</span>
                      <span>{targetCity.city}</span>
                    </a>
                    <span className={`text-meta block mt-0.5 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {targetCity.country}
                    </span>
                  </td>
                  
                  {/* Current Time - Monospace, tabular nums */}
                  <td className={`py-3 px-3 text-center ${textTime}`}>
                    {currentTime}
                  </td>
                  
                  {/* Time Difference */}
                  <td className="py-3 px-3 text-center">
                    <span className={`inline-flex items-center justify-center min-w-[52px] px-2.5 py-1 rounded-full text-xs font-semibold ${
                      isSame 
                        ? isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'
                        : isAhead
                          ? isLight ? 'bg-red-100 text-red-700' : 'bg-red-900/40 text-red-300'
                          : isLight ? 'bg-green-100 text-green-700' : 'bg-green-900/40 text-green-300'
                    }`}>
                      {diff}
                    </span>
                  </td>
                  
                  {/* Meeting Overlap */}
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${
                        overlap.level === 'high' ? 'bg-green-500' :
                        overlap.level === 'limited' ? 'bg-amber-500' : 'bg-red-500'
                      }`} />
                      <span className={`text-meta ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {overlap.label}
                      </span>
                    </div>
                  </td>
                  
                  {/* Dial Code */}
                  <td className={`py-3 px-3 text-right hidden sm:table-cell`}>
                    <span className={`font-mono text-meta tabular-nums ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {phoneCode}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      
      {/* Footer Legend + CTA */}
      <div className={`p-3 border-t flex flex-wrap items-center justify-between gap-2 ${
        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/30 border-slate-700'
      }`}>
        <p className={`text-meta ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" /> Good
          </span>
          <span className="mx-2">·</span>
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> Limited
          </span>
          <span className="mx-2">·</span>
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500" /> None
          </span>
          <span className="ml-2 opacity-70 hidden sm:inline">= Business hours overlap</span>
        </p>
        <a
          href={`/meeting?from=${city.slug}`}
          className={`text-meta font-semibold flex items-center gap-1 ${
            isLight ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
          }`}
        >
          <span>Plan a meeting</span>
          <span>→</span>
        </a>
      </div>
    </section>
  )
}
