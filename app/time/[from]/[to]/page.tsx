import { SITE_URL } from '@/lib/constants'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// ISR: ilk istekte render, sonra 1 saat CDN cache
// force-dynamic Cache-Control:no-store override ediyordu → her bot isteği function çalıştırıyordu
export const revalidate = 3600

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

  const titleFull = diffHours === 0
    ? `${fromCity.city} to ${toCity.city} Time Difference — Same Zone`
    : `${fromCity.city} to ${toCity.city} Time Difference — ${toCity.city} ${diffStr} ${diffHours > 0 ? 'Ahead' : 'Behind'}`
  const titleShort = diffHours === 0
    ? `${fromCity.city} to ${toCity.city} Time Difference`
    : `${fromCity.city} to ${toCity.city} Time Difference — ${diffStr} ${diffHours > 0 ? 'Ahead' : 'Behind'}`
  const title = titleFull.length <= 60 ? titleFull : titleShort

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
  'amsterdam-lagos': 'Amsterdam (CET/CEST, UTC+1/+2) and Lagos (WAT, UTC+1) are at the same time in winter — zero difference. In summer, when the Netherlands moves to CEST (UTC+2), Amsterdam is 1 hour ahead of Lagos. Nigeria is sub-Saharan Africa\'s largest economy; the Amsterdam–Lagos corridor is active in trade finance, energy, and logistics.',
  'london-vancouver': 'London (GMT/BST) is consistently 8 hours ahead of Vancouver (PST/PDT, UTC−8/−7). Both cities observe Daylight Saving Time — the UK in March and British Columbia simultaneously — so the 8-hour gap holds year-round. Vancouver is Canada\'s gateway to the Pacific; the London–Vancouver corridor connects European finance with Pacific Rim trade.',
  'vancouver-london': 'Vancouver (PST/PDT, UTC−8/−7) is 8 hours behind London (GMT/BST) throughout the year. Both cities change clocks on the same spring and autumn schedule, keeping the gap permanently at 8 hours. The corridor spans tech, film production, and trade finance between British Columbia and the UK.',
  'dubai-singapore': 'Dubai (GST, UTC+4) and Singapore (SGT, UTC+8) are always exactly 4 hours apart — Singapore is ahead. Neither the UAE nor Singapore observes Daylight Saving Time, making this a fixed, predictable gap year-round. This corridor is one of the world\'s busiest for aviation, finance, and trade between the Middle East and Southeast Asia.',
  'singapore-dubai': 'Singapore (SGT, UTC+8) is always exactly 4 hours ahead of Dubai (GST, UTC+4). No DST is observed in either country, so the gap is fixed throughout the year. Singapore serves as Asia\'s leading financial hub; Dubai is the gateway to the Middle East and Africa — together a key global trade axis.',
  'los-angeles-sydney': 'Los Angeles (PST/PDT, UTC−8/−7) and Sydney (AEST/AEDT, UTC+10/+11) are 17–19 hours apart, with Sydney always ahead. The gap is smallest in Australian summer/US winter (17h: PST vs AEDT) and largest in Australian winter/US summer (17h: AEST vs PDT). The DST cycles run opposite hemispheres, making the exact gap season-dependent. LA and Sydney lead the Pacific entertainment, tech, and trade corridors.',
  'sydney-los-angeles': 'Sydney (AEST/AEDT, UTC+10/+11) is 17–19 hours ahead of Los Angeles (PST/PDT, UTC−8/−7). Because the DST seasons are reversed — Australia summers while the US winters — the gap varies between 17 and 19 hours. Scheduling between Sydney and LA typically requires one side to work outside business hours.',
  'san-francisco-paris': 'San Francisco (PST/PDT, UTC−8/−7) is 8–9 hours behind Paris (CET/CEST, UTC+1/+2). The gap is 9 hours in winter (CET vs PST) and typically 9 hours in summer (CEST vs PDT), though brief 8-hour windows occur around DST transitions when the two countries change clocks on different dates. The corridor links Silicon Valley with France\'s tech, luxury, and aerospace sectors.',
  'paris-san-francisco': 'Paris (CET/CEST, UTC+1/+2) is 8–9 hours ahead of San Francisco (PST/PDT, UTC−8/−7). In winter Paris is 9 hours ahead; in summer typically 9 hours (with brief 8-hour periods during DST transitions). Paris is Europe\'s largest tech and startup hub after London; San Francisco is the centre of global venture capital.',
  'san-francisco-mexico-city': 'San Francisco (PST/PDT, UTC−8/−7) and Mexico City (CST/CDT, UTC−6/−5) are always exactly 2 hours apart, with Mexico City ahead. Both cities observe Daylight Saving Time on the same US/Mexico schedule, so the 2-hour gap is constant year-round. This corridor connects Silicon Valley with Mexico\'s rapidly growing fintech and manufacturing sectors.',
  'mexico-city-san-francisco': 'Mexico City (CST/CDT, UTC−6/−5) is always exactly 2 hours ahead of San Francisco (PST/PDT, UTC−8/−7). Both observe DST simultaneously, keeping the gap fixed. Mexico City is Latin America\'s largest financial centre; San Francisco is the global hub for venture capital and technology.',
  'los-angeles-paris': 'Los Angeles (PST/PDT, UTC−8/−7) is 8–9 hours behind Paris (CET/CEST, UTC+1/+2). In winter (CET vs PST) the gap is 9 hours; in summer (CEST vs PDT) it narrows briefly but stays at 9 hours for most of the year, with 8-hour windows around DST changeover dates. The corridor spans entertainment, fashion, and technology across the Atlantic.',
  'paris-los-angeles': 'Paris (CET/CEST, UTC+1/+2) is 8–9 hours ahead of Los Angeles (PST/PDT, UTC−8/−7). The 9-hour gap dominates; a brief 8-hour window appears when the US and EU switch clocks on different dates each spring. LA\'s entertainment industry and Paris\'s fashion and luxury sectors maintain significant cross-Atlantic ties.',
  'new-york-tokyo': 'New York (EST/EDT, UTC−5/−4) and Tokyo (JST, UTC+9) are 13–14 hours apart, with Tokyo always ahead. Japan observes no DST, while New York does — the gap is 14 hours in winter (EST) and 13 hours during US Eastern Daylight Time (March–November). New York and Tokyo are two of the world\'s largest financial centres; the NYSE–TSE corridor is central to global equity markets.',
  'tokyo-new-york': 'Tokyo (JST, UTC+9) is 13–14 hours ahead of New York (EST/EDT, UTC−5/−4). Japan does not observe DST; the gap is 14 hours in winter and 13 hours during US Eastern Daylight Time. The Tokyo Stock Exchange opens at 9:00 AM JST — that\'s 8:00 PM EST the previous evening in New York, making overnight coverage essential for this corridor.',
  'london-seattle': 'London (GMT/BST) is consistently 8 hours ahead of Seattle (PST/PDT, UTC−8/−7). Both the UK and the US Pacific Northwest observe DST, and their changeover dates are close enough that the gap stays at 8 hours for the vast majority of the year. Seattle\'s tech industry (Amazon, Boeing, Microsoft) and London\'s financial and tech sectors interact heavily across this 8-hour corridor.',
  'seattle-london': 'Seattle (PST/PDT, UTC−8/−7) is 8 hours behind London (GMT/BST). Both cities change clocks on similar schedules, keeping the gap at 8 hours year-round. Seattle must schedule calls with London early morning (6:00–9:00 AM PST) to reach London during its business hours (2:00–5:00 PM GMT).',
  'los-angeles-toronto': 'Los Angeles (PST/PDT, UTC−8/−7) is always exactly 3 hours behind Toronto (EST/EDT, UTC−5/−4). Both cities observe Daylight Saving Time simultaneously, keeping the gap fixed at 3 hours year-round. This corridor connects LA\'s entertainment and tech industries with Toronto\'s growing financial and media sectors.',
  'toronto-los-angeles': 'Toronto (EST/EDT, UTC−5/−4) is always exactly 3 hours ahead of Los Angeles (PST/PDT, UTC−8/−7). Both observe DST on the same schedule. Toronto is Canada\'s financial capital; LA is North America\'s entertainment hub — the 3-hour gap is one of the most consistent in North American scheduling.',
  'sydney-san-francisco': 'Sydney (AEST/AEDT, UTC+10/+11) is 17–19 hours ahead of San Francisco (PST/PDT, UTC−8/−7). The gap varies because Australia and the US observe DST in opposite seasons: in Australian summer (US winter), the gap is 19 hours; in Australian winter (US summer), it is 17 hours. Coordination often requires evening calls in San Francisco to reach Sydney in the morning.',
  'hong-kong-new-york': 'Hong Kong (HKT, UTC+8) is 13 hours ahead of New York during Eastern Standard Time (November–March) and 12 hours ahead during EDT (March–November). Hong Kong observes no DST, so the gap shifts only when the US changes its clocks. The HK–New York corridor is among the world\'s most active for finance, equity trading, and international banking.',
  'new-york-hong-kong': 'New York (EST/EDT, UTC−5/−4) is 12–13 hours behind Hong Kong (HKT, UTC+8). Hong Kong observes no DST, so the difference is 13 hours in winter (EST) and 12 hours during EDT. The NYSE and HKEX overlap is minimal — Hong Kong trading days are largely complete before New York opens.',
  'tokyo-paris': 'Tokyo (JST, UTC+9) is 8 hours ahead of Paris during Central European Time (CET, UTC+1) and 7 hours ahead during CEST (UTC+2). Japan observes no DST; France observes CET/CEST. The gap is 8 hours in winter and 7 hours in summer. Tokyo and Paris are closely linked through luxury goods, automotive, and technology trade.',
  'paris-tokyo': 'Paris (CET/CEST, UTC+1/+2) is 7–8 hours behind Tokyo (JST, UTC+9). In winter (CET) Tokyo is 8 hours ahead; in summer (CEST) the gap narrows to 7 hours. Japan does not observe DST. French luxury brands (LVMH, Hermès) and Japanese automotive and tech companies are among the most active players across this corridor.',
  'sydney-auckland': 'Sydney (AEST/AEDT, UTC+10/+11) and Auckland (NZST/NZDT, UTC+12/+13) are typically 2 hours apart, with Auckland ahead. Both cities observe DST in the Southern Hemisphere summer, though New Zealand changes clocks in late September while Australia changes in October — creating brief 3-hour gaps. The Tasman corridor is among the most tightly integrated trade and travel routes in the Asia-Pacific.',
  'auckland-sydney': 'Auckland (NZST/NZDT, UTC+12/+13) is typically 2 hours ahead of Sydney (AEST/AEDT, UTC+10/+11). New Zealand and Australia both observe DST, though on slightly different changeover dates — creating brief 3-hour gaps each spring and autumn. The Trans-Tasman relationship is one of the world\'s closest in trade, migration, and financial services.',
  'bangkok-london': 'Bangkok (ICT, UTC+7) is 7 hours ahead of London during GMT (October–March) and 6 hours ahead during British Summer Time (BST, March–October). Thailand observes no DST, so the gap shifts only when the UK changes its clocks. Bangkok is Southeast Asia\'s most visited city and a major hub for international business and tourism.',
  'london-bangkok': 'London (GMT/BST) is 6–7 hours behind Bangkok (ICT, UTC+7). In UK summer (BST) the gap is 6 hours; in winter (GMT) it widens to 7 hours. Thailand does not observe DST. The London–Bangkok corridor is significant for tourism, trade finance, and the growing UK–ASEAN economic relationship.',
  'delhi-boston': 'New Delhi (IST, UTC+5:30) is 10.5 hours ahead of Boston during Eastern Standard Time (November–March) and 9.5 hours ahead during EDT (March–November). India observes no DST; the gap shifts only when the US changes its clocks. The Delhi–Boston corridor is important for technology, pharmaceuticals, and academic collaboration.',
  'boston-delhi': 'Boston (EST/EDT, UTC−5/−4) is 9.5–10.5 hours behind New Delhi (IST, UTC+5:30). India does not observe DST; the gap is 10.5 hours in winter and 9.5 hours in summer (EDT). The best call window from Boston is early morning (7:00–9:00 AM EST), corresponding to 6:30–8:30 PM IST in Delhi.',
  'los-angeles-new-york': 'Los Angeles (PST/PDT, UTC−8/−7) is always exactly 3 hours behind New York (EST/EDT, UTC−5/−4). Both cities observe Daylight Saving Time simultaneously, keeping the 3-hour gap perfectly constant year-round. The LA–New York axis is the backbone of the US entertainment, finance, and media industries — making this the most-scheduled domestic time difference in America.',
  'new-york-los-angeles': 'New York (EST/EDT, UTC−5/−4) is always exactly 3 hours ahead of Los Angeles (PST/PDT, UTC−8/−7). Both cities change clocks on the same spring and fall schedule, so the gap never changes. The NYSE opens at 9:30 AM ET, which is 6:30 AM in Los Angeles — prompting many LA finance professionals to start work very early.',
  'san-francisco-berlin': 'San Francisco (PST/PDT, UTC−8/−7) is 8–9 hours behind Berlin (CET/CEST, UTC+1/+2). In winter the gap is 9 hours; in summer (when both observe DST, though on slightly different dates) it is typically 9 hours with brief 8-hour windows. This corridor connects Silicon Valley with Berlin\'s rapidly growing startup and tech ecosystem — one of Europe\'s top venture capital hubs.',
  'berlin-san-francisco': 'Berlin (CET/CEST, UTC+1/+2) is 8–9 hours ahead of San Francisco (PST/PDT, UTC−8/−7). The gap is 9 hours most of the year, with brief 8-hour windows during DST transitions in spring and autumn. Berlin is Germany\'s tech capital and Europe\'s startup hub; San Francisco leads global venture capital and technology investment.',
  'sydney-zurich': 'Sydney (AEST/AEDT, UTC+10/+11) and Zurich (CET/CEST, UTC+1/+2) are 8–10 hours apart depending on DST cycles. The gap is smallest (8 hours) when Sydney is on AEDT and Zurich is on CEST; it widens to 10 hours when Sydney is on AEST and Zurich is on CET. Australia and Switzerland maintain strong ties through finance, pharmaceuticals, and precision manufacturing.',
  'zurich-sydney': 'Zurich (CET/CEST, UTC+1/+2) is 8–10 hours behind Sydney (AEST/AEDT, UTC+10/+11). Because Australia and Europe observe DST in opposite seasons, the gap varies considerably. Switzerland\'s pharma and banking sectors coordinate with Australia\'s mining and financial services across this variable time gap.',
  'miami-chicago': 'Miami (EST/EDT, UTC−5/−4) and Chicago (CST/CDT, UTC−6/−5) are always exactly 1 hour apart — Miami is ahead. Both cities observe Daylight Saving Time on the same schedule, keeping the gap permanently at 1 hour. Miami serves as the US gateway to Latin America; Chicago is the US heartland\'s financial and logistics capital.',
  'chicago-miami': 'Chicago (CST/CDT, UTC−6/−5) is always exactly 1 hour behind Miami (EST/EDT, UTC−5/−4). Both cities observe DST simultaneously, keeping the gap fixed at 1 hour year-round. Chicago\'s CME Group and Miami\'s international banking and Latin American finance operations frequently coordinate across this consistent time difference.',
  'mumbai-cairo': 'Mumbai (IST, UTC+5:30) is 3 hours and 30 minutes ahead of Cairo (EET, UTC+2) in winter. During Egyptian DST (EEST, UTC+3), Mumbai is 2 hours 30 minutes ahead. India observes no DST. The Mumbai–Cairo corridor is important for India\'s trade ties with the Middle East and North Africa, and for Egyptian remittances from Indian expats in the Gulf region.',
  'cairo-mumbai': 'Cairo (EET/EEST, UTC+2/+3) is 2.5–3.5 hours behind Mumbai (IST, UTC+5:30). Egypt observes DST (EET in winter, EEST in summer); India does not. The gap is 3.5 hours in winter and 2.5 hours during Egyptian summer time. The Cairo–Mumbai connection is significant for trade, IT outsourcing, and travel between the Arab world and South Asia.',
  'frankfurt-tehran': 'Frankfurt (CET/CEST, UTC+1/+2) and Tehran (IRST/IRDT, UTC+3:30/+4:30) differ by 2.5 hours in winter (Frankfurt behind) and 2.5 hours in summer (same gap, as both observe DST). Iran uses a half-hour offset: IRST (UTC+3:30) standard, IRDT (UTC+4:30) DST. Frankfurt and Tehran have important trade ties through German industrial exports and Iranian oil.',
  'tehran-frankfurt': 'Tehran (IRST/IRDT, UTC+3:30/+4:30) is 2.5 hours ahead of Frankfurt (CET/CEST, UTC+1/+2) year-round. Both observe DST, but Iran\'s UTC+3:30 standard offset plus 1-hour DST gives UTC+4:30 in summer. Frankfurt is Europe\'s banking capital and a major hub for German–Iranian trade. Iran\'s IANA identifier is Asia/Tehran.',
  'tokyo-auckland': 'Tokyo (JST, UTC+9) and Auckland (NZST/NZDT, UTC+12/+13) are 3–4 hours apart, with Auckland ahead. Japan observes no DST; New Zealand does — the gap is 3 hours during NZDT (October–April) and 4 hours during NZST (April–October). Japan and New Zealand maintain strong agricultural, tourism, and educational ties across this Trans-Pacific corridor.',
  'auckland-tokyo': 'Auckland (NZST/NZDT, UTC+12/+13) is 3–4 hours ahead of Tokyo (JST, UTC+9). New Zealand observes DST; Japan does not. The gap is 3 hours during New Zealand summer (NZDT) and 4 hours during winter (NZST). Auckland is New Zealand\'s international gateway; Tokyo is Japan\'s business hub — the corridor supports dairy exports, tourism, and Japanese investment in New Zealand.',
  'barcelona-zurich': 'Barcelona (CET/CEST, UTC+1/+2) and Zurich (CET/CEST, UTC+1/+2) share the same time zone — zero time difference. Both use Central European Time and observe EU Daylight Saving Time on identical schedules. Barcelona\'s tech startup scene and Zurich\'s finance and pharma industries coordinate without any time zone adjustment.',
  'zurich-barcelona': 'Zurich (CET/CEST) and Barcelona (CET/CEST) are always at the same time — zero difference throughout the year. Both cities follow the EU-wide DST schedule simultaneously. Switzerland\'s finance sector and Barcelona\'s growing tech and tourism industries operate on identical clocks.',
  'amsterdam-rio-de-janeiro': 'Amsterdam (CET/CEST, UTC+1/+2) is 4–5 hours ahead of Rio de Janeiro (BRT, UTC−3). Brazil observes no DST; the Netherlands does. The gap is 4 hours in summer (CEST) and 5 hours in winter (CET). The Netherlands and Brazil maintain significant trade ties in agriculture, energy, and logistics through the Port of Rotterdam.',
  'rio-de-janeiro-amsterdam': 'Rio de Janeiro (BRT, UTC−3) is 4–5 hours behind Amsterdam (CET/CEST, UTC+1/+2). Brazil observes no DST; the Netherlands does — the gap widens to 5 hours in winter (CET) and narrows to 4 hours in summer (CEST). Brazil is the Netherlands\' largest trade partner in Latin America, with Rotterdam serving as the European gateway for Brazilian exports.',
  'doha-bangkok': 'Doha (AST, UTC+3) and Bangkok (ICT, UTC+7) are always exactly 4 hours apart, with Bangkok ahead. Neither Qatar nor Thailand observes Daylight Saving Time, making this a fixed, predictable gap year-round. The Doha–Bangkok corridor is significant for Qatar Airways routes, Gulf–ASEAN trade, and tourism flows between the Middle East and Southeast Asia.',
  'bangkok-doha': 'Bangkok (ICT, UTC+7) is always exactly 4 hours ahead of Doha (AST, UTC+3). Neither Thailand nor Qatar observes DST, so the gap is permanently fixed. Bangkok is Southeast Asia\'s largest aviation hub; Doha hosts Qatar Airways\' global hub — making this one of the busiest corridors in Middle East–Asia aviation.',
  'barcelona-bangkok': 'Barcelona (CET/CEST, UTC+1/+2) is 5–6 hours behind Bangkok (ICT, UTC+7). Spain observes EU Daylight Saving Time; Thailand observes no DST. The gap is 6 hours in winter (CET) and 5 hours in summer (CEST). Barcelona–Bangkok is a high-volume tourist route linking Spain\'s Mediterranean coastline with Thailand\'s SE Asian tourism industry.',
  'bangkok-barcelona': 'Bangkok (ICT, UTC+7) is 5–6 hours ahead of Barcelona (CET/CEST, UTC+1/+2). Thailand observes no DST; Spain follows EU clock changes. The gap is 5 hours in European summer (CEST) and widens to 6 hours in winter (CET). The Bangkok–Barcelona corridor connects Southeast Asian trade and tourism with Spain\'s manufacturing and services sectors.',
  'san-francisco-beijing': 'San Francisco (PST/PDT, UTC−8/−7) is 15–16 hours behind Beijing (CST, UTC+8). China observes no DST, while San Francisco does — the gap is 16 hours in winter and 15 hours in summer. The SF–Beijing corridor is one of the world\'s most active technology corridors: Silicon Valley venture capital and Chinese tech giants (Alibaba, Tencent, ByteDance) are closely interconnected.',
  'beijing-san-francisco': 'Beijing (CST, UTC+8) is 15–16 hours ahead of San Francisco (PST/PDT, UTC−8/−7). China observes no DST, so the gap is 16 hours during US standard time and 15 hours during PDT. Beijing\'s tech industry — home to Alibaba, Baidu, ByteDance, and Tencent — has deep ties with Silicon Valley. Calls from Beijing must reach San Francisco late the previous evening or early morning.',
  'los-angeles-hong-kong': 'Los Angeles (PST/PDT, UTC−8/−7) and Hong Kong (HKT, UTC+8) are 15–16 hours apart, with Hong Kong ahead. Hong Kong observes no DST; the gap is 16 hours when LA is on PST and 15 hours during PDT. The LA–Hong Kong corridor connects Hollywood and US entertainment with Asia\'s financial hub and the broader Greater Bay Area tech ecosystem.',
  'hong-kong-los-angeles': 'Hong Kong (HKT, UTC+8) is 15–16 hours ahead of Los Angeles (PST/PDT, UTC−8/−7). HK observes no DST; the gap is 16 hours when LA is on PST and 15 hours during PDT. Hong Kong\'s HKEX and LA\'s entertainment and venture capital sectors coordinate across this corridor stretching nearly two-thirds of the globe.',
  'rome-seattle': 'Rome (CET/CEST, UTC+1/+2) is 9 hours ahead of Seattle (PST/PDT, UTC−8/−7) for most of the year. Both cities observe DST, though the EU changes clocks slightly earlier than the US Pacific Northwest — creating brief 8-hour windows each spring and autumn. Italy and Seattle maintain ties in aerospace, design, food, and cloud computing.',
  'seattle-rome': 'Seattle (PST/PDT, UTC−8/−7) is 9 hours behind Rome (CET/CEST, UTC+1/+2). The gap holds at 9 hours most of the year, with brief 8-hour windows around DST changeover dates. Seattle\'s aerospace and cloud computing industries (Boeing, Amazon, Microsoft) maintain European operations with strong Italian industrial ties.',
  'nairobi-doha': 'Nairobi (EAT, UTC+3) and Doha (AST, UTC+3) share the same UTC offset — zero time difference throughout the year. Neither Kenya nor Qatar observes Daylight Saving Time, making scheduling between the two cities perfectly straightforward. Qatar has made significant investment in East Africa; the Nairobi–Doha route serves as Africa\'s gateway to the Gulf.',
  'doha-nairobi': 'Doha (AST, UTC+3) and Nairobi (EAT, UTC+3) are always at the same time — both maintain UTC+3 year-round with no DST. Qatar Airways operates extensive routes connecting Doha to Nairobi; Qatar\'s sovereign wealth fund has invested significantly in Kenya\'s infrastructure. The Doha–Nairobi corridor represents the growing Gulf–East Africa business relationship.',
  'singapore-shenzhen': 'Singapore (SGT, UTC+8) and Shenzhen (CST, UTC+8) share the same time zone — zero time difference. Neither city observes Daylight Saving Time. Singapore serves as the financial hub for Southeast Asia; Shenzhen is China\'s technology manufacturing capital (home to Huawei, Tencent, and DJI). The two cities are closely linked through electronics supply chains and cross-border investment.',
  'shenzhen-singapore': 'Shenzhen (CST, UTC+8) and Singapore (SGT, UTC+8) are at the same UTC offset year-round — no time difference at any point. Neither China nor Singapore observes DST. Shenzhen\'s Qianhai Special Economic Zone and Singapore\'s finance and tech sector are deeply interconnected through the Greater Bay Area strategy.',
  'guangzhou-singapore': 'Guangzhou (CST, UTC+8) and Singapore (SGT, UTC+8) share the same time zone — zero difference. Both maintain UTC+8 year-round without DST. Guangzhou is China\'s third-largest city and a major trade hub; Singapore is ASEAN\'s primary financial centre. The two are closely linked through Cantonese diaspora networks and South China Sea trade routes.',
  'singapore-guangzhou': 'Singapore (SGT, UTC+8) and Guangzhou (CST, UTC+8) are always at the same time. Both maintain UTC+8 year-round — neither observes DST. Singapore is home to a large Cantonese-speaking community with historical ties to Guangdong Province. The Singapore–Guangzhou corridor spans manufacturing, finance, and deep cultural connections.',
  'barcelona-san-francisco': 'Barcelona (CET/CEST, UTC+1/+2) is 9 hours ahead of San Francisco (PST/PDT, UTC−8/−7) for most of the year. Both observe DST, though Europe changes clocks slightly earlier than the US — creating brief 8-hour windows each spring. Barcelona\'s tech startup scene, fashion, and design industries have growing ties with Silicon Valley\'s innovation ecosystem.',
  'san-francisco-barcelona': 'San Francisco (PST/PDT, UTC−8/−7) is 9 hours behind Barcelona (CET/CEST, UTC+1/+2). The 9-hour gap is consistent most of the year; brief 8-hour windows appear when DST transitions occur on different dates. Many Silicon Valley companies use Barcelona as a European hub due to its talent pool, infrastructure, and quality of life.',
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
    </>
  )
}
