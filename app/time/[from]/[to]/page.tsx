import { SITE_URL } from '@/lib/constants'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'
import { PAIR_CONTEXTS } from '@/data/pairContexts'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// ISR: ilk istekte render, sonra 24 saat cache.
// force-dynamic Cache-Control:no-store override ediyordu → her bot isteği function çalıştırıyordu.
// revalidate 3600→86400: içerik deterministik zaman matematiği, sadece DST sınırında
// değişir. 24 saat, ISR write sayısını ~24× düşürür (Vercel maliyet kalemi).
export const revalidate = 86400
export const dynamicParams = true  // explicit: non-pre-rendered pairs generated on first request

// Helper: Slug'dan şehir bulma
function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

// Server-side UTC offset hesaplama (DST-aware)
function getUTCOffset(timezone: string): number {
  const now = new Date()
  const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
  const local = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
  return (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
}

function formatDiff(hours: number): string {
  const abs = Math.abs(hours)
  const h = Math.floor(abs)
  const m = Math.round((abs - h) * 60)
  return m > 0 ? `${h}h ${m}min` : `${h} hour${h !== 1 ? 's' : ''}`
}

function countBusinessOverlap(diffHours: number): number {
  let count = 0
  for (let h = 9; h < 17; h++) {
    const toH = (h + diffHours + 24) % 24
    if (toH >= 9 && toH < 17) count++
  }
  return count
}

function getBestCallWindow(fromOffset: number, toOffset: number, fromCityName: string): string | null {
  const diff = toOffset - fromOffset
  const overlaps: number[] = []
  for (let h = 9; h < 17; h++) {
    const toH = (h + diff + 48) % 24
    if (toH >= 9 && toH < 17) overlaps.push(h)
  }
  if (overlaps.length === 0) return null
  const startH = overlaps[0]
  const endH = overlaps[overlaps.length - 1] + 1
  const fmt = (h: number) => `${h > 12 ? h - 12 : h === 0 ? 12 : h}${h < 12 ? 'AM' : 'PM'}`
  return `${fmt(startH)}–${fmt(endH)} ${fromCityName} time`
}

// 12-hour AM/PM formatter, supports half-hour offsets (IST UTC+5:30)
function fmt12(hour: number, minute: number = 0): string {
  const h = ((hour % 24) + 24) % 24
  const period = h < 12 ? 'AM' : 'PM'
  const hh = h === 0 ? 12 : h > 12 ? h - 12 : h
  return minute === 0
    ? `${hh}:00 ${period}`
    : `${hh}:${String(minute).padStart(2, '0')} ${period}`
}

// Convert a wall-clock hour in fromCity to the corresponding wall-clock time in toCity,
// returning a formatted string with optional day delta ("(+1 day)" / "(-1 day)").
function convertHour(fromHour: number, diffHours: number): { time: string; dayDelta: string } {
  const intDiff = Math.trunc(diffHours)
  const fracMinutes = Math.round((diffHours - intDiff) * 60)
  const total = fromHour * 60 + intDiff * 60 + fracMinutes
  const dayDelta = total >= 24 * 60 ? '(+1 day)' : total < 0 ? '(−1 day)' : ''
  const normalized = ((total % (24 * 60)) + 24 * 60) % (24 * 60)
  const h = Math.floor(normalized / 60)
  const m = normalized % 60
  return { time: fmt12(h, m), dayDelta }
}

// Dinamik SEO Metadata
export async function generateMetadata({ params }: TimeComparePageProps): Promise<Metadata> {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)

  if (!fromCity || !toCity) {
    return {
      title: 'City Not Found - whattime.city',
      description: 'The requested city comparison could not be found.',
      robots: { index: false, follow: false },
    }
  }

  const fromOffset = getUTCOffset(fromCity.timezone)
  const toOffset = getUTCOffset(toCity.timezone)
  const diffHours = toOffset - fromOffset
  const absDiff = Math.abs(diffHours)
  const direction = diffHours > 0 ? 'ahead of' : diffHours < 0 ? 'behind' : 'same as'
  const diffStr = formatDiff(absDiff)
  const overlapHours = countBusinessOverlap(diffHours)

  const callWindow = getBestCallWindow(fromOffset, toOffset, fromCity.city)

  const titleFull = diffHours === 0
    ? `${fromCity.city} to ${toCity.city} Time Difference — Same Zone`
    : `${fromCity.city} to ${toCity.city} Time Difference — ${toCity.city} ${diffStr} ${diffHours > 0 ? 'Ahead' : 'Behind'}`
  const titleShort = diffHours === 0
    ? `${fromCity.city} to ${toCity.city} Time Difference`
    : `${fromCity.city} to ${toCity.city} Time Difference — ${diffStr} ${diffHours > 0 ? 'Ahead' : 'Behind'}`
  const title = titleFull.length <= 60 ? titleFull : titleShort

  const fromUtcLabel = `UTC${fromOffset >= 0 ? '+' : ''}${fromOffset % 1 === 0 ? fromOffset : fromOffset.toFixed(1)}`
  const toUtcLabel = `UTC${toOffset >= 0 ? '+' : ''}${toOffset % 1 === 0 ? toOffset : toOffset.toFixed(1)}`

  // Include country names when from and to are in different countries —
  // catches queries like "lagos netherlands time difference".
  const countryHint = fromCity.country !== toCity.country
    ? ` ${fromCity.country}→${toCity.country}.`
    : ''
  const description = diffHours === 0
    ? `${fromCity.city} and ${toCity.city} share the same time zone (${fromUtcLabel}).${countryHint} Live clocks, conversion table, AM/PM examples.`
    : callWindow
      ? `${toCity.city} is ${diffStr} ${direction} ${fromCity.city} (${fromUtcLabel} vs ${toUtcLabel}).${countryHint} 8 AM, 9 AM, noon conversion shown. Best call window: ${callWindow}.`
      : `${toCity.city} is ${diffStr} ${direction} ${fromCity.city} (${fromUtcLabel} vs ${toUtcLabel}).${countryHint} 8 AM & noon conversion table. No business-hour overlap.`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the time difference between ${fromCity.city} and ${toCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: diffHours === 0
            ? `${fromCity.city} and ${toCity.city} are in the same time zone — no difference.`
            : `${toCity.city} is ${diffStr} ${direction} ${fromCity.city}. When it is noon in ${fromCity.city}, it is ${String((12 + diffHours + 24) % 24).padStart(2, '0')}:00 in ${toCity.city}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the best time to call between ${fromCity.city} and ${toCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: overlapHours > 0
            ? `There are ${overlapHours} overlapping business hours (9 AM–5 PM) between ${fromCity.city} and ${toCity.city}. Schedule calls during that window for the best experience.`
            : `There is no standard business-hour overlap between ${fromCity.city} and ${toCity.city}. Consider early morning or late evening calls, or use async communication.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is ${toCity.city} ahead or behind ${fromCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: diffHours === 0
            ? `${fromCity.city} and ${toCity.city} are at the same UTC offset.`
            : `${toCity.city} is ${diffStr} ${direction} ${fromCity.city} (UTC${toOffset >= 0 ? '+' : ''}${toOffset} vs UTC${fromOffset >= 0 ? '+' : ''}${fromOffset}).`,
        },
      },
      {
        '@type': 'Question',
        name: `What time zone is ${fromCity.city} in?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${fromCity.city} is in the ${fromCity.timezone.replace(/_/g, ' ')} time zone (UTC${fromOffset >= 0 ? '+' : ''}${fromOffset}).`,
        },
      },
      {
        '@type': 'Question',
        name: `What time zone is ${toCity.city} in?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${toCity.city} is in the ${toCity.timezone.replace(/_/g, ' ')} time zone (UTC${toOffset >= 0 ? '+' : ''}${toOffset}).`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Time Difference', item: `${SITE_URL}/time/` },
      { '@type': 'ListItem', position: 3, name: `${fromCity.city} to ${toCity.city}`, item: `${SITE_URL}/time/${from}/${to}/` },
    ],
  }

  return {
    title,
    description,
    keywords: [
      `${fromCity.city} ${toCity.city} time difference`,
      `${fromCity.city} to ${toCity.city} time`,
      `time in ${fromCity.city} vs ${toCity.city}`,
      `best time to call ${toCity.city} from ${fromCity.city}`,
      `${fromCity.city} ${toCity.city} time converter`,
    ],
    openGraph: {
      title: `${fromCity.city} to ${toCity.city} Time Difference — ${diffHours === 0 ? 'Same Zone' : `${toCity.city} ${diffStr} ${diffHours > 0 ? 'Ahead' : 'Behind'}`}`,
      description,
      type: 'website',
      siteName: 'whattime.city',
      url: `${SITE_URL}/time/${from}/${to}/`,
      images: [{ url: `${SITE_URL}/og-image.svg`, width: 1200, height: 630, alt: `${fromCity.city} to ${toCity.city} Time` }],
    },
    alternates: { canonical: `${SITE_URL}/time/${from}/${to}/` },
    robots: { index: true, follow: true },
  }
}

// Pair-specific context lives in data/pairContexts.ts (imported at top of file)
// so the sitemap can pull it without evaluating this page module.

// Pre-render every pair that has a PAIR_CONTEXTS entry — these are the
// pairs we've intentionally written narrative content for, and the ones
// most likely to receive organic impressions. Other pairs fall back to
// ISR (revalidate=3600) on first request.
//
// Slug splitting: city slugs may themselves contain hyphens
// (new-york, san-francisco, mexico-city, tel-aviv, hong-kong, rio-de-janeiro,
// sao-paulo, st-louis, ...). We iterate hyphen positions and accept the
// first split where both halves are known city slugs.
const KNOWN_SLUGS: Set<string> = new Set(cities.map(c => c.slug))

function splitPairKey(key: string): { from: string; to: string } | null {
  const parts = key.split('-')
  for (let i = 1; i < parts.length; i++) {
    const from = parts.slice(0, i).join('-')
    const to = parts.slice(i).join('-')
    if (KNOWN_SLUGS.has(from) && KNOWN_SLUGS.has(to)) return { from, to }
  }
  return null
}

export async function generateStaticParams() {
  const pairs: { from: string; to: string }[] = []
  for (const key of Object.keys(PAIR_CONTEXTS)) {
    const p = splitPairKey(key)
    if (p) pairs.push(p)
  }
  return pairs
}

// Ana Sayfa Bileşeni
export default async function TimeComparePage({ params }: TimeComparePageProps) {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)

  if (!fromCity || !toCity) {
    notFound()
  }

  const fromOffset = getUTCOffset(fromCity.timezone)
  const toOffset = getUTCOffset(toCity.timezone)
  const diffHours = toOffset - fromOffset
  const absDiff = Math.abs(diffHours)
  const direction = diffHours > 0 ? 'ahead of' : diffHours < 0 ? 'behind' : 'same as'
  const diffStr = formatDiff(absDiff)
  const overlapHours = countBusinessOverlap(diffHours)

  // Server-rendered conversion examples — explicit AM/PM text targeting
  // long-tail queries like "8am delhi to boston conversion".
  const conversionRows = [8, 9, 10, 12, 14, 17, 20, 23].map(h => {
    const to = convertHour(h, diffHours)
    return { fromTime: fmt12(h), toTime: to.time, dayDelta: to.dayDelta }
  })

  const conversionParagraph = diffHours === 0
    ? `${fromCity.city} and ${toCity.city} share the same UTC offset, so every hour matches one-to-one. 8:00 AM in ${fromCity.city} is 8:00 AM in ${toCity.city}; noon in ${fromCity.city} is noon in ${toCity.city}.`
    : [
        `8:00 AM in ${fromCity.city} = ${convertHour(8, diffHours).time} in ${toCity.city} ${convertHour(8, diffHours).dayDelta}.`,
        `9:00 AM in ${fromCity.city} = ${convertHour(9, diffHours).time} in ${toCity.city} ${convertHour(9, diffHours).dayDelta}.`,
        `12:00 PM (noon) in ${fromCity.city} = ${convertHour(12, diffHours).time} in ${toCity.city} ${convertHour(12, diffHours).dayDelta}.`,
        `5:00 PM in ${fromCity.city} = ${convertHour(17, diffHours).time} in ${toCity.city} ${convertHour(17, diffHours).dayDelta}.`,
        `9:00 PM in ${fromCity.city} = ${convertHour(21, diffHours).time} in ${toCity.city} ${convertHour(21, diffHours).dayDelta}.`,
      ].map(s => s.replace(/\s+\./g, '.').replace(/\s+/g, ' ').trim()).join(' ')

  const countryLine = fromCity.country === toCity.country
    ? `Both ${fromCity.city} and ${toCity.city} are located in ${fromCity.country}.`
    : `${fromCity.city} is in ${fromCity.country}; ${toCity.city} is in ${toCity.country}.`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the time difference between ${fromCity.city} and ${toCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: diffHours === 0
            ? `${fromCity.city} (${fromCity.country}) and ${toCity.city} (${toCity.country}) are in the same time zone — no difference. ${countryLine}`
            : `${toCity.city} is ${diffStr} ${direction} ${fromCity.city}. When it is noon (12:00 PM) in ${fromCity.city}, it is ${convertHour(12, diffHours).time} in ${toCity.city} ${convertHour(12, diffHours).dayDelta}. ${countryLine}`.replace(/\s+/g, ' ').trim(),
        },
      },
      {
        '@type': 'Question',
        name: `What time is 8 AM in ${fromCity.city} when in ${toCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `8:00 AM in ${fromCity.city} is ${convertHour(8, diffHours).time} in ${toCity.city} ${convertHour(8, diffHours).dayDelta}. 9:00 AM in ${fromCity.city} is ${convertHour(9, diffHours).time} in ${toCity.city}.`.replace(/\s+/g, ' ').trim(),
        },
      },
      {
        '@type': 'Question',
        name: `What time is 9 AM in ${fromCity.city} when in ${toCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `9:00 AM in ${fromCity.city} converts to ${convertHour(9, diffHours).time} in ${toCity.city} ${convertHour(9, diffHours).dayDelta}. 12:00 PM in ${fromCity.city} is ${convertHour(12, diffHours).time} in ${toCity.city}.`.replace(/\s+/g, ' ').trim(),
        },
      },
      {
        '@type': 'Question',
        name: `What is the best time to call between ${fromCity.city} and ${toCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: overlapHours > 0
            ? `There are ${overlapHours} overlapping business hours (9 AM–5 PM) between ${fromCity.city} and ${toCity.city}. Schedule calls during that window for the best experience.`
            : `There is no standard business-hour overlap between ${fromCity.city} and ${toCity.city}. Consider early morning or late evening calls, or use async communication.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is ${toCity.city} ahead or behind ${fromCity.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: diffHours === 0
            ? `${fromCity.city} and ${toCity.city} are at the same UTC offset.`
            : `${toCity.city} is ${diffStr} ${direction} ${fromCity.city} (UTC${toOffset >= 0 ? '+' : ''}${toOffset} vs UTC${fromOffset >= 0 ? '+' : ''}${fromOffset}).`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the time difference between ${fromCity.country} and ${toCity.country}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: fromCity.country === toCity.country
            ? `${fromCity.city} and ${toCity.city} are both in ${fromCity.country}, with ${diffHours === 0 ? 'no time difference' : `a ${diffStr} difference between regions`}.`
            : `Using ${fromCity.city} (${fromCity.country}) and ${toCity.city} (${toCity.country}) as reference points: ${toCity.city} is ${diffStr} ${direction} ${fromCity.city}. Note that ${fromCity.country} or ${toCity.country} may span multiple time zones — this comparison uses these specific cities.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time zone is ${fromCity.city} in?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${fromCity.city} is in the ${fromCity.timezone.replace(/_/g, ' ')} time zone (UTC${fromOffset >= 0 ? '+' : ''}${fromOffset}).`,
        },
      },
      {
        '@type': 'Question',
        name: `What time zone is ${toCity.city} in?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${toCity.city} is in the ${toCity.timezone.replace(/_/g, ' ')} time zone (UTC${toOffset >= 0 ? '+' : ''}${toOffset}).`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Time Difference', item: `${SITE_URL}/time/` },
      { '@type': 'ListItem', position: 3, name: `${fromCity.city} to ${toCity.city}`, item: `${SITE_URL}/time/${from}/${to}/` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TimeComparisonContent
        fromCity={fromCity}
        toCity={toCity}
        pairContext={PAIR_CONTEXTS[`${from}-${to}`]}
      />
      {/*
        Server-rendered conversion block — pure SSR content.
        Targets long-tail queries: "8am X to Y conversion", "X to Y time difference",
        "Country1 to Country2 time difference". Lives below the interactive widget
        so Google sees explicit AM/PM text and country mentions in the HTML source.
      */}
      <section
        aria-label="Conversion examples and country reference"
        className="max-w-6xl mx-auto px-4 pb-12 -mt-4 text-sm leading-relaxed"
      >
        <div className="rounded-2xl border border-slate-200/30 bg-white/5 backdrop-blur p-6 space-y-4">
          <h2 className="text-base font-semibold text-slate-200">
            {fromCity.city} to {toCity.city} — Hour-by-Hour Conversion
          </h2>
          <p className="text-slate-300/90">{countryLine}</p>
          <p className="text-slate-300/90">{conversionParagraph}</p>
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-300/20">
                <th className="py-2 pr-4 font-medium text-slate-400">{fromCity.city} ({fromCity.country})</th>
                <th className="py-2 font-medium text-slate-400">{toCity.city} ({toCity.country})</th>
              </tr>
            </thead>
            <tbody>
              {conversionRows.map((r, i) => (
                <tr key={i} className="border-b border-slate-300/10">
                  <td className="py-1.5 pr-4 text-slate-200">{r.fromTime}</td>
                  <td className="py-1.5 text-slate-200">{r.toTime} {r.dayDelta}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-400 pt-2">
            Time difference between {fromCity.country} ({fromCity.city}) and {toCity.country} ({toCity.city}):
            {' '}{diffHours === 0 ? 'none — same UTC offset.' : `${toCity.city} is ${diffStr} ${direction} ${fromCity.city}.`}
            {' '}DST observance and exact offsets are computed live from the IANA tz database.
          </p>
        </div>
      </section>
    </>
  )
}
