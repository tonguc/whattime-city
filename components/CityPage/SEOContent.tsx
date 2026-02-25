'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface SEOContentProps {
  city: City
  seoData?: any
}

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

const dstCountries: Record<string, boolean> = {
  'US': true, 'CA': true, 'GB': true, 'DE': true, 'FR': true, 'IT': true, 'ES': true,
  'NL': true, 'BE': true, 'AU': true, 'NZ': true, 'MX': true, 'CL': true, 'BR': false,
  'JP': false, 'CN': false, 'IN': false, 'SG': false, 'AE': false, 'TR': false,
  'KR': false, 'HK': false, 'TH': false, 'VN': false, 'PH': false, 'MY': false
}

const majorCities: Record<string, { slug: string; offset: number }> = {
  'New York': { slug: 'new-york', offset: -5 },
  'London': { slug: 'london', offset: 0 },
  'Tokyo': { slug: 'tokyo', offset: 9 },
  'Sydney': { slug: 'sydney', offset: 11 },
  'Dubai': { slug: 'dubai', offset: 4 },
  'Singapore': { slug: 'singapore', offset: 8 },
  'Paris': { slug: 'paris', offset: 1 },
  'Los Angeles': { slug: 'los-angeles', offset: -8 },
}

export default function SEOContent({ city, seoData }: SEOContentProps) {
  const { card, textSection, textBody, isLight } = useThemeClasses()
  const offset = getUTCOffset(city.timezone)
  const hasDST = dstCountries[city.countryCode] ?? false
  const linkClass = isLight
    ? 'text-blue-600 hover:text-blue-800 hover:underline'
    : 'text-sky-400 hover:text-sky-300 hover:underline'

  const cityOffset = (() => {
    try {
      const now = new Date()
      const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
      const local = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
      return (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
    } catch { return 0 }
  })()

  const timeDiffs = Object.entries(majorCities)
    .filter(([_, d]) => d.slug !== city.slug)
    .slice(0, 4)
    .map(([name, d]) => ({ cityName: name, slug: d.slug, diff: cityOffset - d.offset }))

  const formatDiff = (diff: number, cityName: string, slug: string) => {
    const cityLink = <Link href={`/${slug}/`} className={linkClass}>{cityName}</Link>
    if (diff === 0) return <span>same time as {cityLink}</span>
    const hours = Math.abs(Math.round(diff))
    return <span>{hours} hours {diff > 0 ? 'ahead of' : 'behind'} {cityLink}</span>
  }

  const contentBlocks: Array<{ title: string; content: string }> = seoData?.content_blocks || []
  const timeDiffTable: Array<{ city: string; slug: string; difference: string; link: string }> = seoData?.time_difference_table || []
  const eeatFooter: string = seoData?.eeat_footer || ''

  return (
    <section className={`rounded-2xl p-5 border ${card} mt-4`}>
      <h2 className={`mb-4 flex items-center gap-2 ${textSection}`}>
        <span>About {city.city} Time Zone</span>
      </h2>

      {contentBlocks.length > 0 ? (
        <div className={`space-y-5 ${textBody} leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          {contentBlocks.map((block, i) => (
            <div key={i}>
              <h3 className={`font-semibold mb-2 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>{block.title}</h3>
              <p>{block.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={`space-y-4 ${textBody} leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          <p>
            {city.city} is in the {city.timezone.replace(/_/g, ' ')} time zone ({offset}).
            {timeDiffs[0] && <span> {city.city} time is {formatDiff(timeDiffs[0].diff, timeDiffs[0].cityName, timeDiffs[0].slug)}.</span>}
          </p>
          <p>
            {hasDST ? `${city.city} observes Daylight Saving Time.` : `${city.city} does not observe Daylight Saving Time, maintaining ${offset} year-round.`}
          </p>
        </div>
      )}

      {timeDiffTable.length > 0 && (
        <div className="mt-5 overflow-x-auto">
          <h3 className={`font-semibold mb-3 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>{city.city} Time Differences</h3>
          <table className={`w-full text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <th className="text-left py-2 pr-4">City</th>
                <th className="text-left py-2">Difference</th>
              </tr>
            </thead>
            <tbody>
              {timeDiffTable.map((row, i) => (
                <tr key={i} className={`border-b ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
                  <td className="py-2 pr-4"><Link href={row.link} className={linkClass}>{row.city}</Link></td>
                  <td className="py-2">{row.difference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className={`mt-5 p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
        <h3 className={`text-sm font-semibold mb-2 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>Quick Facts: {city.city} Time</h3>
        <ul className={`text-sm space-y-1.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <li><strong>Time Zone:</strong> {seoData?.timezone_facts?.full_name || city.timezone} ({seoData?.timezone_facts?.utc_offset || offset})</li>
          <li><strong>Daylight Saving:</strong> {seoData?.timezone_facts?.dst_observed === false ? 'Not observed' : hasDST ? 'Observed' : 'Not observed'}</li>
          <li><strong>Country:</strong> <Link href={`/country/${city.country.toLowerCase().replace(/\s+/g, '-')}/`} className={linkClass}>{city.country}</Link></li>
          <li><strong>Coordinates:</strong> {city.lat.toFixed(2)}, {city.lng.toFixed(2)}</li>
          {city.info?.phoneCode && <li><strong>Calling Code:</strong> {city.info.phoneCode}</li>}
        </ul>
      </div>

      {eeatFooter && (
        <p className={`mt-4 text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{eeatFooter}</p>
      )}
    </section>
  )
}
