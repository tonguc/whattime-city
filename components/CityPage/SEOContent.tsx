'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface SEOContentProps {
  city: City
  seoData?: any
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

// Major cities with slugs for internal linking
const majorCities: Record<string, { slug: string; offset: number }> = {
  'New York': { slug: 'new-york', offset: -5 },
  'London': { slug: 'london', offset: 0 },
  'Tokyo': { slug: 'tokyo', offset: 9 },
  'Sydney': { slug: 'sydney', offset: 11 },
  'Dubai': { slug: 'dubai', offset: 4 },
  'Singapore': { slug: 'singapore', offset: 8 },
  'Paris': { slug: 'paris', offset: 1 },
  'Los Angeles': { slug: 'los-angeles', offset: -8 },
  'Hong Kong': { slug: 'hong-kong', offset: 8 }
}

export default function SEOContent({ city, seoData }: SEOContentProps) {
  const { card, textSection, textBody, isLight } = useThemeClasses()
  
  const offset = getUTCOffset(city.timezone)
  const hasDST = dstCountries[city.countryCode] ?? false
  const tzAbbr = city.timezone.split('/').pop()?.replace('_', ' ') || city.timezone
  
  // Link styling
  const linkClass = isLight 
    ? 'text-blue-600 hover:text-blue-800 hover:underline' 
    : 'text-sky-400 hover:text-sky-300 hover:underline'
  
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
  
  // Get time differences with linked city names
  const getTimeDiffWithLinks = () => {
    const diffs: Array<{ cityName: string; slug: string; diff: number }> = []
    
    Object.entries(majorCities)
      .filter(([_, data]) => data.slug !== city.slug)
      .slice(0, 4)
      .forEach(([cityName, data]) => {
        const diff = cityOffset - data.offset
        diffs.push({ cityName, slug: data.slug, diff })
      })
    
    return diffs
  }
  
  const timeDiffs = getTimeDiffWithLinks()

  // Business context
  const businessHours = city.info?.seoContent?.businessHours || '9:00 AM - 6:00 PM'
  const population = city.info?.population || 'major urban center'
  const currency = city.info?.currency || ''
  const phoneCode = city.info?.phoneCode || ''

  // Format time diff text
  const formatDiff = (diff: number, cityName: string, slug: string) => {
    const cityLink = <Link href={`/${slug}/`} className={linkClass}>{cityName}</Link>
    if (diff === 0) return <span>same time as {cityLink}</span>
    const hours = Math.abs(Math.round(diff))
    const direction = diff > 0 ? 'ahead of' : 'behind'
    return <span>{hours} hours {direction} {cityLink}</span>
  }

  return (
    <section className={`rounded-2xl p-5 border ${card} mt-4`}>
      <h2 className={`mb-4 flex items-center gap-2 ${textSection}`}>
        <span>📍</span>
        <span>About {city.city} Time Zone</span>
      </h2>
      
      <div className={`space-y-4 ${textBody} leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
        {/* Paragraph 1 - Time zone intro with linked city */}
        <p>
          {city.city} is located in the {city.timezone.replace(/_/g, ' ')} time zone ({offset}). 
          As a {population.includes('M') ? 'major metropolitan' : 'significant'} city in {city.country}, {city.city} serves 
          as an important hub for business, tourism, and international communication. 
          {timeDiffs[0] && (
            <span> The local time in {city.city} is {formatDiff(timeDiffs[0].diff, timeDiffs[0].cityName, timeDiffs[0].slug)}.</span>
          )}
        </p>
        
        {/* Paragraph 2 - Business hours with meeting planner link */}
        <p>
          When planning calls or <Link href="/meeting/" className={linkClass}>meetings</Link> with {city.city}, 
          consider that standard business hours are typically {businessHours} local time. {' '}
          {hasDST 
            ? `${city.city} observes Daylight Saving Time, which means the time difference with other locations may vary by one hour depending on the season.`
            : `${city.city} does not observe Daylight Saving Time, so the UTC offset remains constant throughout the year at ${offset}.`
          }
        </p>
        
        {/* Paragraph 3 - City info */}
        <p>
          {city.info 
            ? <>
                {city.city} has a population of approximately {population}
                {city.info.metroPopulation ? ` (${city.info.metroPopulation} in the metro area)` : ''}. 
                {currency && ` The local currency is the ${currency}${city.info.currencySymbol ? ` (${city.info.currencySymbol})` : ''}.`}
                {phoneCode && ` To call ${city.city} from abroad, use the country code ${phoneCode}.`}
                {city.info.language && ` The primary language spoken is ${city.info.language}.`}
              </>
            : <>
                {city.city} is an important city in {city.country}, situated at coordinates {city.lat.toFixed(2)}°N, {city.lng.toFixed(2)}°E. 
                The city follows the {tzAbbr} timezone year-round.
              </>
          }
        </p>
        
        {/* Paragraph 4 - Time differences with multiple linked cities */}
        <p>
          For travelers and remote workers coordinating across <Link href="/time/" className={linkClass}>time zones</Link>, {city.city} time is {' '}
          {timeDiffs.slice(0, 2).map((td, i) => (
            <span key={td.slug}>
              {i > 0 && ', and '}
              {formatDiff(td.diff, td.cityName, td.slug)}
            </span>
          ))}. 
          This makes {city.city} {' '}
          {cityOffset >= -1 && cityOffset <= 3 
            ? 'conveniently aligned with European business hours' 
            : cityOffset >= 8 && cityOffset <= 12 
              ? 'well-positioned for Asia-Pacific business operations' 
              : cityOffset <= -5 
                ? 'ideal for coordinating with North and South American partners' 
                : 'strategically located for global business coordination'
          }. 
          Use our <Link href={`/meeting?from=${city.slug}`} className={linkClass}>Meeting Planner</Link> to find the best overlap times.
        </p>
      </div>
      
      {/* Quick Reference Box */}
      <div className={`mt-5 p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
        <h3 className={`text-sm font-semibold mb-2 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
          Quick Facts: {city.city} Time
        </h3>
        <ul className={`text-sm space-y-1.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <li>• <strong>Time Zone:</strong> {city.timezone} ({offset})</li>
          <li>• <strong>Daylight Saving:</strong> {hasDST ? 'Observed' : 'Not observed'}</li>
          <li>• <strong>Country:</strong> <Link href={`/country/${city.country.toLowerCase().replace(/\s+/g, '-')}/`} className={linkClass}>{city.country}</Link> ({city.countryCode})</li>
          <li>• <strong>Coordinates:</strong> {city.lat.toFixed(2)}°, {city.lng.toFixed(2)}°</li>
          {city.info?.phoneCode && <li>• <strong>Calling Code:</strong> {city.info.phoneCode}</li>}
        </ul>
      </div>
    </section>
  )
}
