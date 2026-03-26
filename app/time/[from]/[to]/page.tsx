import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// ✅ FORCE DYNAMIC - Bu sayfa asla pre-render edilmez
// Build süresi: ~25 dakika → ~2 dakika
export const dynamic = 'force-dynamic'

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

  const title = diffHours === 0
    ? `${fromCity.city} to ${toCity.city} Time — Same Time Zone`
    : `${fromCity.city} to ${toCity.city} Time — ${toCity.city} ${diffStr} ${diffHours > 0 ? 'Ahead' : 'Behind'}`

  const fromUtcLabel = `UTC${fromOffset >= 0 ? '+' : ''}${fromOffset % 1 === 0 ? fromOffset : fromOffset.toFixed(1)}`
  const toUtcLabel = `UTC${toOffset >= 0 ? '+' : ''}${toOffset % 1 === 0 ? toOffset : toOffset.toFixed(1)}`

  const description = diffHours === 0
    ? `${fromCity.city} and ${toCity.city} share the same time zone (${fromUtcLabel}). Live clocks, overlap calendar, and conversion table.`
    : callWindow
      ? `${toCity.city} is ${diffStr} ${direction} ${fromCity.city} (${fromUtcLabel} vs ${toUtcLabel}). Best call window: ${callWindow}. Live clock & meeting planner.`
      : `${toCity.city} is ${diffStr} ${direction} ${fromCity.city} (${fromUtcLabel} vs ${toUtcLabel}). No business-hour overlap. Live clocks & async scheduling guide.`

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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Time Difference', item: 'https://whattime.city/time/' },
      { '@type': 'ListItem', position: 3, name: `${fromCity.city} to ${toCity.city}`, item: `https://whattime.city/time/${from}/${to}/` },
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
      title: `${fromCity.city} ↔ ${toCity.city} — ${diffHours === 0 ? 'Same Time Zone' : `${toCity.city} ${diffStr} ${diffHours > 0 ? 'Ahead' : 'Behind'}`}`,
      description,
      type: 'website',
      siteName: 'whattime.city',
      url: `https://whattime.city/time/${from}/${to}/`,
      images: [{ url: 'https://whattime.city/og-image.png', width: 1200, height: 630, alt: `${fromCity.city} to ${toCity.city} Time` }],
    },
    alternates: { canonical: `https://whattime.city/time/${from}/${to}/` },
    robots: { index: true, follow: true },
  }
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Time Difference', item: 'https://whattime.city/time/' },
      { '@type': 'ListItem', position: 3, name: `${fromCity.city} to ${toCity.city}`, item: `https://whattime.city/time/${from}/${to}/` },
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
      <TimeComparisonContent fromCity={fromCity} toCity={toCity} />
    </>
  )
}
