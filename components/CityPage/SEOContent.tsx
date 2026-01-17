'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface SEOContentProps {
  city: City
}

// UTC offset calculation
function getUTCOffset(timezone: string): string {
  try {
    const now = new Date()
    const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
    const local = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
    const diff = (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
    const sign = diff >= 0 ? '+' : ''
    const hours = Math.floor(Math.abs(diff))
    const mins = Math.round((Math.abs(diff) - hours) * 60)
    return mins > 0 ? `UTC${sign}${diff >= 0 ? hours : -hours}:${mins.toString().padStart(2, '0')}` : `UTC${sign}${diff >= 0 ? hours : -hours}`
  } catch {
    return 'UTC'
  }
}

// DST info
const dstCountries: Record<string, boolean> = {
  'US': true, 'CA': true, 'GB': true, 'DE': true, 'FR': true, 'IT': true, 'ES': true,
  'NL': true, 'BE': true, 'AU': true, 'NZ': true, 'MX': true, 'CL': true, 'BR': false,
  'JP': false, 'CN': false, 'IN': false, 'SG': false, 'AE': false, 'TR': false,
  'KR': false, 'HK': false, 'TH': false, 'VN': false, 'PH': false, 'MY': false
}

// Major city time differences for context
const majorCityOffsets: Record<string, number> = {
  'new-york': -5, 'london': 0, 'tokyo': 9, 'sydney': 11, 'dubai': 4,
  'singapore': 8, 'paris': 1, 'los-angeles': -8, 'hong-kong': 8
}

export default function SEOContent({ city }: SEOContentProps) {
  const { card, textSection, textBody, isLight } = useThemeClasses()
  
  const offset = getUTCOffset(city.timezone)
  const hasDST = dstCountries[city.countryCode] ?? false
  const tzAbbr = city.timezone.split('/').pop()?.replace('_', ' ') || city.timezone
  
  // Calculate time differences with major cities
  const cityOffset = (() => {
    try {
      const now = new Date()
      const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
      const local = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
      return (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
    } catch {
      return 0
    }
  })()
  
  const timeDiffs = Object.entries(majorCityOffsets)
    .filter(([slug]) => slug !== city.slug)
    .slice(0, 4)
    .map(([slug, offset]) => {
      const diff = cityOffset - offset
      const cityName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      if (diff === 0) return `same time as ${cityName}`
      return diff > 0 ? `${Math.abs(diff)} hours ahead of ${cityName}` : `${Math.abs(diff)} hours behind ${cityName}`
    })

  // Business context
  const businessHours = city.info?.businessHours || '9:00 AM - 6:00 PM'
  const population = city.info?.population || 'major urban center'
  const currency = city.info?.currency || ''
  const phoneCode = city.info?.phoneCode || ''
  
  // Generate keyword-rich paragraphs
  const paragraph1 = `${city.city} is located in the ${city.timezone.replace(/_/g, ' ')} time zone (${offset}). As a ${population.includes('M') ? 'major metropolitan' : 'significant'} city in ${city.country}, ${city.city} serves as an important hub for business, tourism, and international communication. The local time in ${city.city} is ${timeDiffs[0] || 'in the ' + tzAbbr + ' zone'}.`
  
  const paragraph2 = `When planning calls or meetings with ${city.city}, consider that standard business hours are typically ${businessHours} local time. ${hasDST ? `${city.city} observes Daylight Saving Time, which means the time difference with other locations may vary by one hour depending on the season.` : `${city.city} does not observe Daylight Saving Time, so the UTC offset remains constant throughout the year at ${offset}.`}`
  
  const paragraph3 = city.info 
    ? `${city.city} has a population of approximately ${population}${city.info.metroPopulation ? ` (${city.info.metroPopulation} in the metro area)` : ''}. ${currency ? `The local currency is the ${currency}${city.info.currencySymbol ? ` (${city.info.currencySymbol})` : ''}.` : ''} ${phoneCode ? `To call ${city.city} from abroad, use the country code ${phoneCode}.` : ''} ${city.info.language ? `The primary language spoken is ${city.info.language}.` : ''}`
    : `${city.city} is an important city in ${city.country}, situated at coordinates ${city.lat.toFixed(2)}°N, ${city.lng.toFixed(2)}°E. The city follows the ${tzAbbr} timezone year-round.`
  
  const paragraph4 = `For travelers and remote workers coordinating across time zones, ${city.city} time is ${timeDiffs.slice(0, 2).join(', and ')}. This makes ${city.city} ${cityOffset >= -1 && cityOffset <= 3 ? 'conveniently aligned with European business hours' : cityOffset >= 8 && cityOffset <= 12 ? 'well-positioned for Asia-Pacific business operations' : cityOffset <= -5 ? 'ideal for coordinating with North and South American partners' : 'strategically located for global business coordination'}.`

  return (
    <section className={`rounded-2xl p-5 border ${card} mt-4`}>
      <h2 className={`mb-4 flex items-center gap-2 ${textSection}`}>
        <span>📍</span>
        <span>About {city.city} Time Zone</span>
      </h2>
      
      <div className={`space-y-4 ${textBody} leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
      </div>
      
      {/* Quick Reference Box */}
      <div className={`mt-5 p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
        <h3 className={`text-sm font-semibold mb-2 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
          Quick Facts: {city.city} Time
        </h3>
        <ul className={`text-sm space-y-1.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <li>• <strong>Time Zone:</strong> {city.timezone} ({offset})</li>
          <li>• <strong>Daylight Saving:</strong> {hasDST ? 'Observed' : 'Not observed'}</li>
          <li>• <strong>Country:</strong> {city.country} ({city.countryCode})</li>
          <li>• <strong>Coordinates:</strong> {city.lat.toFixed(2)}°, {city.lng.toFixed(2)}°</li>
          {city.info?.phoneCode && <li>• <strong>Calling Code:</strong> {city.info.phoneCode}</li>}
        </ul>
      </div>
    </section>
  )
}
