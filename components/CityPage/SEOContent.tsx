'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface SEOContentProps {
  city: City
  seoData?: any
}

function getNumericOffset(timezone: string): number {
  try {
    const now = new Date()
    const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
    const local = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
    return (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
  } catch { return 0 }
}

function getUTCLabel(timezone: string): string {
  try {
    const diff = getNumericOffset(timezone)
    const sign = diff >= 0 ? '+' : ''
    const hours = Math.floor(Math.abs(diff))
    const mins = Math.round((Math.abs(diff) - hours) * 60)
    return mins > 0
      ? `UTC${sign}${diff >= 0 ? hours : -hours}:${mins.toString().padStart(2, '0')}`
      : `UTC${sign}${diff >= 0 ? hours : -hours}`
  } catch { return 'UTC' }
}

const dstCountries: Record<string, boolean> = {
  'US': true, 'CA': true, 'GB': true, 'DE': true, 'FR': true, 'IT': true, 'ES': true,
  'NL': true, 'BE': true, 'AU': true, 'NZ': true, 'MX': true, 'CL': true, 'BR': false,
  'JP': false, 'CN': false, 'IN': false, 'SG': false, 'AE': false, 'TR': false,
  'KR': false, 'HK': false, 'TH': false, 'VN': false, 'PH': false, 'MY': false
}

const compareTargets: Array<{ slug: string; name: string; timezone: string }> = [
  { slug: 'new-york',    name: 'New York',    timezone: 'America/New_York'    },
  { slug: 'london',      name: 'London',      timezone: 'Europe/London'        },
  { slug: 'tokyo',       name: 'Tokyo',       timezone: 'Asia/Tokyo'           },
  { slug: 'dubai',       name: 'Dubai',       timezone: 'Asia/Dubai'           },
  { slug: 'sydney',      name: 'Sydney',      timezone: 'Australia/Sydney'     },
  { slug: 'singapore',   name: 'Singapore',   timezone: 'Asia/Singapore'       },
  { slug: 'paris',       name: 'Paris',       timezone: 'Europe/Paris'         },
  { slug: 'los-angeles', name: 'Los Angeles', timezone: 'America/Los_Angeles'  },
  { slug: 'chicago',     name: 'Chicago',     timezone: 'America/Chicago'      },
  { slug: 'toronto',     name: 'Toronto',     timezone: 'America/Toronto'      },
  { slug: 'hong-kong',   name: 'Hong Kong',   timezone: 'Asia/Hong_Kong'       },
  { slug: 'berlin',      name: 'Berlin',      timezone: 'Europe/Berlin'        },
  { slug: 'madrid',      name: 'Madrid',      timezone: 'Europe/Madrid'        },
  { slug: 'amsterdam',   name: 'Amsterdam',   timezone: 'Europe/Amsterdam'     },
  { slug: 'mumbai',      name: 'Mumbai',      timezone: 'Asia/Kolkata'         },
  { slug: 'seoul',       name: 'Seoul',       timezone: 'Asia/Seoul'           },
]

export default function SEOContent({ city, seoData }: SEOContentProps) {
  const { card, textSection, textBody, isLight } = useThemeClasses()

  const offset = getUTCLabel(city.timezone)
  const hasDST = dstCountries[city.countryCode] ?? false
  const linkClass = isLight
    ? 'text-blue-600 hover:text-blue-800 hover:underline'
    : 'text-sky-400 hover:text-sky-300 hover:underline'

  const cityOffset = getNumericOffset(city.timezone)

  const contentBlocks: Array<{ title: string; content: string }> = seoData?.content_blocks || []
  const eeatFooter: string = seoData?.eeat_footer || ''

  // Real-time comparison rows — always exactly 15 (3×5 grid, no orphan)
  const comparisonRows = compareTargets
    .filter(t => t.slug !== city.slug)
    .slice(0, 15)
    .map(t => {
      const diff = cityOffset - getNumericOffset(t.timezone)
      const hours = Math.abs(Math.round(diff))
      const diffText = diff === 0
        ? 'Same time'
        : `${hours} hour${hours !== 1 ? 's' : ''} ${diff > 0 ? 'ahead' : 'behind'}`
      return { name: t.name, slug: t.slug, diffText, link: `/time/${city.slug}/${t.slug}/` }
    })

  const cardBase = isLight
    ? 'bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm'
    : 'bg-slate-800/50 border border-slate-700/60 hover:border-sky-600/50'
  const diffTextClass = isLight ? 'text-slate-500' : 'text-slate-400'
  const cityNameClass = isLight ? 'text-blue-600' : 'text-sky-400'

  return (
    <section className={`rounded-2xl p-5 border ${card} mt-4`}>
      <h2 className={`mb-4 flex items-center gap-2 ${textSection}`}>
        <span>📍</span>
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
            {hasDST
              ? ` ${city.city} observes Daylight Saving Time.`
              : ` ${city.city} does not observe Daylight Saving Time, maintaining ${offset} year-round.`}
          </p>
        </div>
      )}

      {/* Time Difference at a Glance — real-time, all cities */}
      <div className={`mt-5 p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
        <h3 className={`text-sm font-semibold mb-3 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
          {city.city} Time Difference at a Glance
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {comparisonRows.map((row, i) => (
            <Link
              key={i}
              href={row.link}
              className={`px-3 py-2.5 rounded-lg text-left transition-all hover:scale-[1.01] ${cardBase}`}
            >
              <div className={`text-sm font-medium leading-snug ${cityNameClass}`}>
                {city.city} vs {row.name}
              </div>
              <div className={`text-xs mt-0.5 tabular-nums ${diffTextClass}`}>
                {row.diffText}
              </div>
            </Link>
          ))}
        </div>
      </div>

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
