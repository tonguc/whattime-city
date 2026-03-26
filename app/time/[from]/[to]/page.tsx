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

// Pair-specific context for top-traffic city combinations
const PAIR_CONTEXTS: Record<string, string> = {
  'singapore-london': 'Singapore (SGT, UTC+8) does not observe Daylight Saving Time. London alternates between GMT (UTC+0) in winter and BST (UTC+1) in summer, so the gap varies between 7 and 8 hours throughout the year. This corridor is vital for global forex trading — the SGX afternoon session partially overlaps the LSE morning open.',
  'london-singapore': 'London (GMT/BST) is 7–8 hours behind Singapore (SGT, UTC+8). When London switches to British Summer Time, the gap narrows to 7 hours; in winter (GMT) it widens to 8 hours. Singapore maintains no DST, making it a reliable anchor for Asia-Pacific scheduling.',
  'london-sydney': 'London (GMT/BST) and Sydney (AEST/AEDT) sit 9–11 hours apart depending on each city\'s DST cycle. The gap is smallest when both cities are near summer simultaneously and largest when seasons diverge. Business-hour overlap is minimal — the ASX typically closes before the LSE opens each day.',
  'sydney-london': 'Sydney (AEDT/AEST, UTC+10/+11) runs 9–11 hours ahead of London (GMT/BST). The precise gap shifts seasonally as Australia and the UK observe DST on opposite schedules. Calls from Sydney must be placed early morning to reach London during business hours.',
  'new-york-london': 'New York (EST/EDT) is 4–5 hours behind London (GMT/BST). Both cities observe DST but on slightly different schedules, creating a brief period each spring when the gap is 5 hours. The most active window for both the NYSE and LSE occurs when New York opens at 9:30 AM ET — then 2:30 PM in London.',
  'london-new-york': 'London (GMT/BST) is 4–5 hours ahead of New York (EST/EDT). The NYSE opens at 9:30 AM ET (2:30 PM London time), creating a 1.5–2 hour window each afternoon where both the London and New York markets are simultaneously active — the peak of global equity trading volume.',
  'los-angeles-london': 'Los Angeles (PST/PDT) runs 7–8 hours behind London (GMT/BST). The gap is 8 hours in winter and shrinks to 7 hours when both cities are on DST. The LA–London corridor connects Hollywood with British media and entertainment, US tech with UK fintech, and West Coast venture capital with London finance.',
  'london-los-angeles': 'London is 7–8 hours ahead of Los Angeles (PST/PDT). In winter the gap is 8 hours; in summer both cities observe DST, narrowing it to 7–8 hours depending on exact changeover dates. This corridor links entertainment, media, and tech sectors across the Atlantic.',
  'singapore-lagos': 'Singapore (SGT, UTC+8) and Lagos (WAT, UTC+1) are always exactly 7 hours apart — neither city observes Daylight Saving Time. This fixed gap makes scheduling across the Nigeria–Singapore business corridor straightforward and consistent year-round.',
  'lagos-singapore': 'Lagos (WAT, UTC+1) is 7 hours behind Singapore (SGT, UTC+8). Both cities observe no DST, keeping the difference permanently fixed. Nigeria is sub-Saharan Africa\'s largest economy; Singapore serves as Asia\'s primary hub for West African trade finance.',
  'dublin-dubai': 'Dublin alternates between GMT (UTC+0) in winter and IST (Irish Standard Time, UTC+1) in summer. Dubai observes GST (UTC+4) year-round with no DST. The gap is 4 hours in winter and 3 hours in summer. Ireland and the UAE are closely linked through financial services, aviation, and technology industries.',
  'dubai-dublin': 'Dubai (GST, UTC+4) is 3–4 hours ahead of Dublin (GMT/IST). Dubai observes no DST while Ireland moves between GMT and Irish Standard Time, making the gap 4 hours in winter and 3 hours in summer. The UAE is a major destination for Irish financial services and tech exports.',
  'los-angeles-san-francisco': 'Los Angeles and San Francisco are both on Pacific Time — PST (UTC−8) in winter and PDT (UTC−7) in summer. There is no time difference between them at any point in the year, as both cities change clocks on identical schedules.',
  'san-francisco-los-angeles': 'San Francisco and Los Angeles share the Pacific Time Zone (PST/PDT). There is zero time difference between them in winter, summer, or at any other time. Both cities observe DST simultaneously each spring and fall.',
  'tokyo-seattle': 'Tokyo (JST, UTC+9) observes no Daylight Saving Time. Seattle uses PST (UTC−8) in winter and PDT (UTC−7) in summer, making the gap either 17 or 16 hours. Japan\'s technology sector maintains strong ties with Seattle\'s aerospace, gaming, and cloud computing industries.',
  'tokyo-san-francisco': 'Tokyo (JST, UTC+9) is 16–17 hours ahead of San Francisco (PST/PDT). The gap is 17 hours during US standard time and 16 hours during PDT. Japan and Silicon Valley share deep connections in venture capital, semiconductor supply chains, and consumer technology.',
  'delhi-tel-aviv': 'New Delhi (IST, UTC+5:30) is 2.5–3.5 hours ahead of Tel Aviv. Israel observes IST (UTC+2) in winter and IDT (UTC+3) in summer; India\'s IST never changes. The gap is 2.5 hours during Israeli summer and 3.5 hours in winter. India–Israel ties span technology, defense, agriculture, and pharmaceuticals.',
  'san-francisco-dublin': 'San Francisco (PST/PDT, UTC−8/−7) is 8–9 hours behind Dublin (GMT/IST). The gap is 8 hours in winter and shifts as each country enters DST on a slightly different schedule. Ireland hosts the European headquarters of many Silicon Valley tech companies, making this one of the most active transatlantic tech corridors.',
  'sao-paulo-san-francisco': 'São Paulo (BRT, UTC−3) is 5 hours ahead of San Francisco (PST/PDT, UTC−8/−7) during US standard time. Brazil observes limited DST, while the US Pacific coast has a fixed DST schedule; the gap can occasionally be 4 hours. Brazil\'s B3 exchange and São Paulo\'s fintech scene have growing ties with Silicon Valley.',
  'chicago-san-francisco': 'Chicago (CST/CDT) is always exactly 2 hours ahead of San Francisco (PST/PDT). Both cities change their clocks on the same schedule each spring and fall, so the 2-hour gap never changes. Chicago\'s CME Group and San Francisco\'s tech and finance sectors frequently coordinate across this consistent time gap.',
  'new-york-nairobi': 'New York (EST/EDT) is 7–8 hours behind Nairobi (EAT, UTC+3). Nairobi observes no DST, while New York does, causing the gap to change seasonally — 8 hours in winter, 7 hours when New York is on EDT. Kenya and the US maintain important trade, development, and tech sector links through this corridor.',
  'dubai-new-york': 'Dubai (GST, UTC+4) is 8–9 hours ahead of New York (EST/EDT). Dubai observes no DST; New York does. The gap is 9 hours in winter and 8 hours during EDT. Dubai serves as the gateway between New York\'s financial markets and Middle Eastern and South Asian economies.',
  'doha-dubai': 'Doha (AST, UTC+3) and Dubai (GST, UTC+4) are always exactly 1 hour apart, with Dubai ahead. Neither Qatar nor the UAE observes Daylight Saving Time, so the difference is fixed at 60 minutes throughout the entire year — making scheduling across the Gulf perfectly predictable.',
  'doha-johannesburg': 'Doha (AST, UTC+3) is 1 hour ahead of Johannesburg (SAST, UTC+2). Neither Qatar nor South Africa observes Daylight Saving Time, so this 1-hour difference is permanent and unchanging. Qatar and South Africa are linked through energy, investment, and African development finance.',
  'los-angeles-seoul': 'Los Angeles (PST/PDT, UTC−8/−7) is 16–17 hours behind Seoul (KST, UTC+9). South Korea observes no DST, while LA does — making the gap 17 hours in winter and 16 hours in summer. The K-entertainment industry (K-pop, K-drama), gaming, and semiconductor supply chains create significant scheduling demand across this corridor.',
  'lagos-amsterdam': 'Lagos (WAT, UTC+1) and Amsterdam (CET/CEST, UTC+1/+2) share the same UTC offset in winter — zero time difference. In summer, when the Netherlands switches to CEST (UTC+2), Lagos remains on WAT, placing Amsterdam 1 hour ahead. Nigeria and the Netherlands maintain substantial trade ties in energy, agriculture, and logistics.',
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
      <TimeComparisonContent
        fromCity={fromCity}
        toCity={toCity}
        pairContext={PAIR_CONTEXTS[`${from}-${to}`]}
      />
    </>
  )
}
