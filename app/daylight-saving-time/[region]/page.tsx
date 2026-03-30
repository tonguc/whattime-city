import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'

interface Props {
  params: Promise<{ region: string }>
}

const REGIONS = {
  usa: {
    title: 'DST 2026 USA — Spring & Fall Dates',
    description:
      'When do clocks change in the US in 2026? DST starts March 8 and ends November 1. Exceptions: Arizona, Hawaii. Full state-by-state guide.',
    h1: 'Daylight Saving Time 2026 — United States',
    intro:
      'The United States observes Daylight Saving Time (DST) from the second Sunday in March to the first Sunday in November. In 2026, clocks spring forward on March 8 and fall back on November 1.',
    start: 'March 8, 2026',
    startNote: 'Second Sunday in March — clocks spring forward 1 hour at 2:00 AM local time',
    end: 'November 1, 2026',
    endNote: 'First Sunday in November — clocks fall back 1 hour at 2:00 AM local time',
    rule: 'Second Sunday in March → First Sunday in November',
    details: [
      {
        heading: 'Which US states do not observe DST?',
        body: 'Arizona (except the Navajo Nation) and Hawaii do not observe Daylight Saving Time. US territories including Puerto Rico, Guam, the US Virgin Islands, American Samoa, and the Northern Mariana Islands also do not change their clocks.',
      },
      {
        heading: 'How does DST affect US time zones in 2026?',
        body: 'During DST (March 8 – November 1), US time zones shift forward by 1 hour: EST → EDT (UTC-4), CST → CDT (UTC-5), MST → MDT (UTC-6), PST → PDT (UTC-7). When DST ends on November 1, clocks return to standard time.',
      },
      {
        heading: 'Will the US abolish Daylight Saving Time?',
        body: 'The Sunshine Protection Act, which would make DST permanent in the US, has been introduced in Congress multiple times but has not been enacted into law as of 2026. The US continues to observe seasonal clock changes.',
      },
      {
        heading: 'Why does the US observe DST?',
        body: 'The US first adopted DST during World War I to conserve energy. It was standardized nationally by the Uniform Time Act of 1966. The Energy Policy Act of 2005 extended DST to its current March–November schedule, effective 2007.',
      },
    ],
    faq: [
      {
        q: 'When does daylight saving time start in 2026 in the US?',
        a: 'DST begins on Sunday, March 8, 2026. Clocks spring forward 1 hour at 2:00 AM — so 2:00 AM becomes 3:00 AM.',
      },
      {
        q: 'When does daylight saving time end in 2026 in the US?',
        a: 'DST ends on Sunday, November 1, 2026. Clocks fall back 1 hour at 2:00 AM — so 2:00 AM becomes 1:00 AM.',
      },
      {
        q: 'Does Arizona observe daylight saving time?',
        a: 'No. The state of Arizona (with the exception of the Navajo Nation) does not observe DST. Arizona remains on Mountain Standard Time (MST, UTC-7) year-round.',
      },
      {
        q: 'What time do clocks change for DST in the US?',
        a: 'Clocks change at 2:00 AM local time. On the spring-forward date they jump to 3:00 AM; on the fall-back date they return to 1:00 AM.',
      },
      {
        q: 'What time zone is the US in during daylight saving time?',
        a: 'During DST (March 8 – November 1, 2026): Eastern = EDT (UTC-4), Central = CDT (UTC-5), Mountain = MDT (UTC-6), Pacific = PDT (UTC-7).',
      },
    ],
    relatedRegions: ['uk', 'europe', 'australia'],
  },
  uk: {
    title: 'DST 2026 UK — BST Spring & Fall Dates',
    description:
      'When do clocks change in the UK in 2026? BST starts March 29 and ends October 25. Full guide to British Summer Time including history and impact.',
    h1: 'Daylight Saving Time 2026 — United Kingdom',
    intro:
      'The United Kingdom observes British Summer Time (BST, UTC+1) from the last Sunday in March to the last Sunday in October. In 2026, clocks go forward on March 29 and go back on October 25.',
    start: 'March 29, 2026',
    startNote: 'Last Sunday in March — clocks spring forward 1 hour at 1:00 AM GMT → 2:00 AM BST',
    end: 'October 25, 2026',
    endNote: 'Last Sunday in October — clocks fall back 1 hour at 2:00 AM BST → 1:00 AM GMT',
    rule: 'Last Sunday in March → Last Sunday in October',
    details: [
      {
        heading: 'What is British Summer Time (BST)?',
        body: 'British Summer Time (BST) is UTC+1, used in the UK from the last Sunday in March to the last Sunday in October. Outside BST, the UK is on Greenwich Mean Time (GMT, UTC+0). BST was first introduced during World War I in 1916.',
      },
      {
        heading: 'Does the UK have the same DST dates as Europe?',
        body: 'Yes — despite Brexit, the UK continues to align its clock-change dates with the European Union. Both the UK and EU change clocks on the last Sunday in March and the last Sunday in October. In 2026 these dates are March 29 and October 25.',
      },
      {
        heading: 'How does BST affect UK time vs US?',
        body: 'During BST (March 29 – October 25), the UK is at UTC+1 rather than UTC+0. This changes the time difference with the US: London–New York becomes 5h (instead of 5h during EST) because both are in their summer time simultaneously after the US clocks change on March 8.',
      },
      {
        heading: 'Could the UK abolish clock changes?',
        body: 'There has been ongoing political debate about making BST permanent (moving the UK to UTC+1 year-round). However, as of 2026 no legislation has been passed. The Scottish Government has opposed year-round BST due to the very late winter sunrises it would cause in northern Scotland.',
      },
    ],
    faq: [
      {
        q: 'When do the clocks go forward in the UK in 2026?',
        a: 'Clocks go forward 1 hour at 1:00 AM on Sunday, March 29, 2026. The UK moves from GMT (UTC+0) to BST (UTC+1).',
      },
      {
        q: 'When do the clocks go back in the UK in 2026?',
        a: 'Clocks go back 1 hour at 2:00 AM on Sunday, October 25, 2026. The UK moves from BST (UTC+1) back to GMT (UTC+0).',
      },
      {
        q: 'Does Northern Ireland observe BST?',
        a: 'Yes. Northern Ireland, Scotland, Wales, and England all observe British Summer Time on the same schedule — last Sunday in March to last Sunday in October.',
      },
      {
        q: 'What time zone is the UK in during summer?',
        a: 'During British Summer Time (March 29 – October 25, 2026) the UK is at UTC+1. Outside this period it is on GMT (UTC+0).',
      },
      {
        q: 'Is BST the same as CET (Central European Time)?',
        a: 'No. BST is UTC+1, the same offset as CET in winter. However during European summer (CEST), continental Europe is at UTC+2 while the UK remains at UTC+1 — so there is a 1-hour difference between London and Paris/Berlin during summer.',
      },
    ],
    relatedRegions: ['usa', 'europe', 'australia'],
  },
  europe: {
    title: 'DST 2026 Europe — CEST Spring & Fall',
    description:
      'When do clocks change in Europe in 2026? EU clocks spring forward March 29 and fall back October 25. Full guide covering CET, EET, WET zones.',
    h1: 'Daylight Saving Time 2026 — Europe',
    intro:
      'The European Union observes summer time from the last Sunday in March to the last Sunday in October. In 2026, clocks spring forward on March 29 and fall back on October 25. The UK follows the same schedule.',
    start: 'March 29, 2026',
    startNote: 'Last Sunday in March — clocks spring forward 1 hour at 1:00 AM UTC',
    end: 'October 25, 2026',
    endNote: 'Last Sunday in October — clocks fall back 1 hour at 1:00 AM UTC',
    rule: 'Last Sunday in March → Last Sunday in October (EU Directive 2000/84/EC)',
    details: [
      {
        heading: 'European time zones during DST (summer time)',
        body: 'During summer time: Central European Summer Time (CEST, UTC+2) covers Germany, France, Italy, Spain, Netherlands, Belgium, Poland, and most of central Europe. Eastern European Summer Time (EEST, UTC+3) covers Greece, Romania, Bulgaria, Finland, and the Baltic states. Western European Summer Time (WEST, UTC+1) covers Portugal and the Canary Islands.',
      },
      {
        heading: 'Will the EU abolish Daylight Saving Time?',
        body: 'In 2019 the European Parliament voted to end seasonal clock changes, with member states choosing to remain permanently on summer or winter time. However, no final agreement between member states has been reached as of 2026. The EU continues to observe clock changes twice per year.',
      },
      {
        heading: 'Which European countries do not observe DST?',
        body: 'Iceland, Belarus, Russia, and Turkey do not observe Daylight Saving Time and remain on a fixed UTC offset year-round. These countries are not EU member states. Within the EU all member states currently observe DST.',
      },
      {
        heading: 'How does European summer time affect calls with the US?',
        body: 'The US (EST) springs forward on March 8, three weeks before Europe (March 29). During these three weeks (March 8–28) the time difference between New York and London is temporarily 4h instead of 5h, and between New York and Berlin is 5h instead of 6h.',
      },
    ],
    faq: [
      {
        q: 'When do clocks change in Europe in 2026?',
        a: 'EU clocks spring forward on March 29, 2026 at 1:00 AM UTC, and fall back on October 25, 2026 at 1:00 AM UTC.',
      },
      {
        q: 'What time zone is Germany in during summer?',
        a: 'Germany is in Central European Summer Time (CEST, UTC+2) from March 29 to October 25, 2026. Outside this period it is on CET (UTC+1).',
      },
      {
        q: 'What time zone is France in during summer?',
        a: 'France uses Central European Summer Time (CEST, UTC+2) in summer (March 29 – October 25, 2026) and Central European Time (CET, UTC+1) in winter.',
      },
      {
        q: 'Does Russia observe daylight saving time?',
        a: 'No. Russia abolished DST in 2014 and now stays on standard time year-round. Moscow is permanently on UTC+3.',
      },
      {
        q: 'Is European DST the same date as UK DST?',
        a: 'Yes. Both the EU and the UK change clocks on the last Sunday of March and the last Sunday of October. In 2026: March 29 (forward) and October 25 (back).',
      },
    ],
    relatedRegions: ['usa', 'uk', 'australia'],
  },
  australia: {
    title: 'DST 2026 Australia — AEDT Spring & Fall',
    description:
      'When do clocks change in Australia in 2026? DST starts October 4 and ends April 5 (Southern Hemisphere). NSW, VIC, SA, ACT, TAS observe DST. QLD, WA do not.',
    h1: 'Daylight Saving Time 2026 — Australia',
    intro:
      'Australia observes Daylight Saving Time in the Southern Hemisphere summer — clocks spring forward in October and fall back in April. In 2026, DST starts October 4 and ends April 5, 2026 (beginning of the 2025–2026 DST period).',
    start: 'October 4, 2026',
    startNote: 'First Sunday in October — clocks spring forward 1 hour at 2:00 AM AEST → 3:00 AM AEDT',
    end: 'April 5, 2026',
    endNote: 'First Sunday in April — clocks fall back 1 hour at 3:00 AM AEDT → 2:00 AM AEST',
    rule: 'First Sunday in October → First Sunday in April (NSW, VIC, ACT, TAS) · Third Sunday in October (SA)',
    details: [
      {
        heading: 'Which Australian states observe DST?',
        body: 'New South Wales (NSW), Victoria (VIC), Australian Capital Territory (ACT), Tasmania (TAS), and South Australia (SA) observe Daylight Saving Time. Queensland (QLD), Western Australia (WA), and the Northern Territory (NT) do not observe DST and remain on standard time year-round.',
      },
      {
        heading: 'Australian time zones during DST',
        body: 'During DST: AEDT (Australian Eastern Daylight Time) = UTC+11 — NSW, VIC, ACT, TAS. ACDT (Australian Central Daylight Time) = UTC+10:30 — South Australia. Queensland uses AEST (UTC+10) year-round. WA uses AWST (UTC+8) year-round.',
      },
      {
        heading: 'Why does South Australia start DST a week later?',
        body: 'South Australia transitions on the third Sunday in October (not the first), so it starts DST one week after NSW, VIC, ACT, and TAS. This means there is a brief window each October where South Australia is at a different offset from its eastern neighbours.',
      },
      {
        heading: 'How does Australian DST affect calls with the US or UK?',
        body: 'During Australian DST (October–April), Sydney (AEDT, UTC+11) is 16 hours ahead of New York (EST) and 11 hours ahead of London (GMT). When Australia is in summer time and the Northern Hemisphere is in winter standard time, the time gaps are at their widest.',
      },
    ],
    faq: [
      {
        q: 'When does daylight saving time start in Australia in 2026?',
        a: 'Australian DST for the 2026–2027 period starts on Sunday, October 4, 2026 at 2:00 AM AEST in NSW, VIC, ACT, and TAS. Clocks move forward to 3:00 AM (AEDT, UTC+11).',
      },
      {
        q: 'When does daylight saving time end in Australia in 2026?',
        a: 'The 2025–2026 Australian DST period ends on Sunday, April 5, 2026. Clocks fall back from 3:00 AM AEDT to 2:00 AM AEST.',
      },
      {
        q: 'Does Queensland observe daylight saving time?',
        a: 'No. Queensland does not observe DST and stays on AEST (UTC+10) year-round. This creates a 1-hour difference with NSW/VIC during Australian summer.',
      },
      {
        q: 'Does Western Australia observe daylight saving time?',
        a: 'No. Western Australia (Perth) stays on AWST (UTC+8) year-round. WA held a referendum on DST in 2009 and voted against adopting it.',
      },
      {
        q: 'What time zone is Sydney in during summer (DST)?',
        a: 'Sydney is on AEDT (Australian Eastern Daylight Time, UTC+11) during DST from the first Sunday in October to the first Sunday in April.',
      },
    ],
    relatedRegions: ['usa', 'uk', 'europe', 'canada', 'new-zealand'],
  },
  canada: {
    title: 'DST 2026 Canada — Spring & Fall Dates',
    description:
      'When do clocks change in Canada in 2026? DST starts March 8 and ends November 1. Exception: Saskatchewan does not observe DST. Full province-by-province guide.',
    h1: 'Daylight Saving Time 2026 — Canada',
    intro:
      'Canada observes Daylight Saving Time from the second Sunday in March to the first Sunday in November — the same federal schedule as the United States. In 2026, clocks spring forward on March 8 and fall back on November 1. Saskatchewan and parts of British Columbia do not participate.',
    start: 'March 8, 2026',
    startNote: 'Second Sunday in March — clocks spring forward 1 hour at 2:00 AM local time',
    end: 'November 1, 2026',
    endNote: 'First Sunday in November — clocks fall back 1 hour at 2:00 AM local time',
    rule: 'Second Sunday in March → First Sunday in November (most provinces)',
    details: [
      {
        heading: 'Which Canadian provinces do not observe DST?',
        body: 'Saskatchewan is the most notable exception — the province stays on Central Standard Time (CST, UTC-6) year-round and does not observe DST. Most of northeast British Columbia (e.g., Fort St. John) also remains on MST. The Yukon moved to permanent Mountain Standard Time (MST, UTC-7) in 2020, effectively making it permanent "summer time" but without clock changes.',
      },
      {
        heading: 'Canadian time zones during DST (March 8 – November 1)',
        body: 'During DST: Newfoundland = NDT (UTC-2:30), Atlantic = ADT (UTC-3), Eastern = EDT (UTC-4), Central = CDT (UTC-5), Mountain = MDT (UTC-6), Pacific = PDT (UTC-7). Saskatchewan remains at CST (UTC-6) year-round — the same as CDT during summer.',
      },
      {
        heading: 'Does Canada have the same DST dates as the US?',
        body: 'Yes. Canada and the United States coordinate their DST schedule — both spring forward on the second Sunday in March and fall back on the first Sunday in November. This keeps the time differences between Canadian and American cities stable throughout the year.',
      },
      {
        heading: 'Will Canada abolish Daylight Saving Time?',
        body: 'Several Canadian provinces have passed legislation to make DST permanent, including British Columbia, Ontario, and Quebec. However, these laws are conditional on neighbouring US states making the same change. As of 2026, no province has unilaterally ended clock changes, and Canada continues to observe DST.',
      },
    ],
    faq: [
      {
        q: 'When does daylight saving time start in Canada in 2026?',
        a: 'DST begins in Canada on Sunday, March 8, 2026. Clocks spring forward 1 hour at 2:00 AM local time in all observing provinces.',
      },
      {
        q: 'When does daylight saving time end in Canada in 2026?',
        a: 'DST ends on Sunday, November 1, 2026. Clocks fall back 1 hour at 2:00 AM local time.',
      },
      {
        q: 'Does Saskatchewan observe daylight saving time?',
        a: 'No. Saskatchewan stays on Central Standard Time (CST, UTC-6) year-round. During summer, this is the same offset as CDT — so Saskatchewan effectively has permanent "summer time" without any clock changes.',
      },
      {
        q: 'What time zone is Toronto in during daylight saving time?',
        a: 'Toronto (Ontario) is in the Eastern time zone. During DST (March 8 – November 1, 2026) it is on EDT (UTC-4). In winter it returns to EST (UTC-5).',
      },
      {
        q: 'What time zone is Vancouver in during daylight saving time?',
        a: 'Vancouver (British Columbia) is in the Pacific time zone. During DST it is on PDT (UTC-7). In winter it is on PST (UTC-8).',
      },
    ],
    relatedRegions: ['usa', 'uk', 'europe', 'australia'],
  },
  'new-zealand': {
    title: 'DST 2026 New Zealand — NZDT Dates',
    description:
      'When do clocks change in New Zealand in 2026? NZ DST starts September 27 and ends April 5. Full guide to New Zealand Daylight Time (NZDT) and time zone.',
    h1: 'Daylight Saving Time 2026 — New Zealand',
    intro:
      'New Zealand observes Daylight Saving Time in the Southern Hemisphere summer. Clocks spring forward on the last Sunday in September and fall back on the first Sunday in April. In 2026, DST starts September 27 and ends April 5.',
    start: 'September 27, 2026',
    startNote: 'Last Sunday in September — clocks spring forward 1 hour at 2:00 AM NZST → 3:00 AM NZDT',
    end: 'April 5, 2026',
    endNote: 'First Sunday in April — clocks fall back 1 hour at 3:00 AM NZDT → 2:00 AM NZST',
    rule: 'Last Sunday in September → First Sunday in April',
    details: [
      {
        heading: 'New Zealand time zones — NZST and NZDT',
        body: 'New Zealand Standard Time (NZST) is UTC+12. During DST, New Zealand Daylight Time (NZDT) is UTC+13, making New Zealand one of the most advanced time zones on the planet. The Chatham Islands are 45 minutes ahead of the mainland: CHAST (UTC+12:45) in winter and CHADT (UTC+13:45) in summer.',
      },
      {
        heading: 'How does New Zealand DST differ from Australia?',
        body: "New Zealand springs forward in late September, about one week before Australia's DST-observing states (early October). New Zealand and Australia also end DST on the same date — first Sunday in April. During the overlapping period, Sydney (AEDT, UTC+11) is 2 hours behind Auckland (NZDT, UTC+13).",
      },
      {
        heading: 'How does NZ DST affect calls with the UK or US?',
        body: 'During NZ summer (DST): Auckland (NZDT, UTC+13) is 13 hours ahead of London (GMT) and 18 hours ahead of New York (EST). When the Northern Hemisphere switches to summer time, these gaps narrow — London–Auckland becomes 12h, New York–Auckland becomes 17h.',
      },
      {
        heading: 'Does all of New Zealand observe DST?',
        body: 'Yes, DST applies throughout New Zealand including the Chatham Islands. The Chatham Islands maintain their unique 45-minute offset from the mainland in both standard and daylight time.',
      },
    ],
    faq: [
      {
        q: 'When do clocks go forward in New Zealand in 2026?',
        a: 'Clocks spring forward 1 hour at 2:00 AM on Sunday, September 27, 2026. New Zealand moves from NZST (UTC+12) to NZDT (UTC+13).',
      },
      {
        q: 'When do clocks go back in New Zealand in 2026?',
        a: 'Clocks fall back 1 hour at 3:00 AM on Sunday, April 5, 2026. New Zealand returns from NZDT (UTC+13) to NZST (UTC+12).',
      },
      {
        q: 'What time zone is Auckland in during summer?',
        a: 'Auckland is on NZDT (New Zealand Daylight Time, UTC+13) during DST from September 27 to April 5. In winter it is on NZST (UTC+12).',
      },
      {
        q: 'Is New Zealand the first country to observe DST each year?',
        a: "New Zealand is among the first countries to start DST each year due to its eastern longitude. It springs forward in late September, before Australia (early October) and long before the Northern Hemisphere (March).",
      },
      {
        q: 'What is the time difference between New Zealand and the UK during NZ summer?',
        a: 'During NZ DST (September–April) when the UK is on GMT (UTC+0), Auckland (NZDT, UTC+13) is 13 hours ahead of London. Once the UK moves to BST (UTC+1) in late March, the difference narrows to 12 hours.',
      },
    ],
    relatedRegions: ['australia', 'usa', 'uk', 'europe'],
  },
  mexico: {
    title: 'DST 2026 Mexico — Does Mexico Observe DST?',
    description:
      'Does Mexico observe daylight saving time in 2026? Most of Mexico abolished DST in 2022. Only Baja California (border zone) still changes clocks. Full guide.',
    h1: 'Daylight Saving Time in Mexico — 2026 Update',
    intro:
      'Mexico abolished Daylight Saving Time for most of the country in October 2022. As of 2026, only the Baja California border zone continues to observe clock changes, aligned with the US Pacific time schedule. The rest of Mexico stays on a fixed UTC offset year-round.',
    start: 'March 8, 2026',
    startNote: 'Baja California (border zone) only — aligned with US Pacific DST schedule',
    end: 'November 1, 2026',
    endNote: 'Baja California (border zone) only — clocks fall back with US Pacific time',
    rule: 'Most of Mexico: No DST since October 2022 · Baja California border zone: follows US Pacific DST',
    details: [
      {
        heading: 'When did Mexico abolish Daylight Saving Time?',
        body: 'Mexico\'s Congress passed a law in October 2022 eliminating DST for most of the country. The last clock change for most Mexican states was on October 30, 2022. Mexico City, Guadalajara, Monterrey, Cancún, and all other major cities now stay on their standard UTC offset year-round.',
      },
      {
        heading: 'Which part of Mexico still observes DST?',
        body: 'Only the Baja California "border zone" (Municipio de Mexicali and the Tijuana–Ensenada corridor) continues to observe DST, synchronized with the US Pacific time zone. This exception exists to maintain business continuity with California and other US border states. Baja California springs forward on March 8, 2026 and falls back on November 1, 2026.',
      },
      {
        heading: 'What time zone is Mexico City in 2026?',
        body: 'Mexico City is on Central Standard Time (CST, UTC-6) year-round since 2022. There are no clock changes. Previously Mexico City was on CDT (UTC-5) during summer — that no longer applies.',
      },
      {
        heading: 'Mexican time zones in 2026 (no DST)',
        body: 'Most of Mexico: Central Standard Time (CST, UTC-6) · Sonora: Mountain Standard Time (MST, UTC-7) · Baja California Sur & Sinaloa: Mountain Standard Time (MST, UTC-7) · Baja California border zone: Pacific time, follows US DST (PST/PDT, UTC-8/-7).',
      },
    ],
    faq: [
      {
        q: 'Does Mexico observe daylight saving time in 2026?',
        a: 'No — most of Mexico does not observe DST in 2026. Mexico abolished daylight saving time in October 2022. The only exception is the Baja California border zone, which still follows the US Pacific DST schedule.',
      },
      {
        q: 'When did Mexico stop daylight saving time?',
        a: 'Mexico ended DST for most of the country after October 30, 2022, when Congress passed legislation abolishing clock changes. The law took effect immediately.',
      },
      {
        q: 'What time zone is Cancún in?',
        a: 'Cancún is in the Eastern Standard Time zone (EST, UTC-5) year-round. It moved from Central time to Eastern time in 2015, and has not observed DST since then.',
      },
      {
        q: 'What time zone is Tijuana in 2026?',
        a: 'Tijuana (Baja California border zone) still observes DST and is synchronized with California. It is on PST (UTC-8) in winter and PDT (UTC-7) during DST (March 8 – November 1, 2026).',
      },
      {
        q: 'What is the time difference between Mexico City and New York in 2026?',
        a: 'Mexico City is on CST (UTC-6) year-round. New York is on EST (UTC-5) in winter and EDT (UTC-4) in summer. So: winter = 1 hour difference, summer (DST) = 2 hours difference. Mexico City no longer shifts its clocks, so the gap changes based only on New York\'s DST schedule.',
      },
    ],
    relatedRegions: ['usa', 'uk', 'europe', 'canada'],
  },
} as const

type Region = keyof typeof REGIONS

const REGION_LABELS: Record<Region, string> = {
  usa: 'United States',
  uk: 'United Kingdom',
  europe: 'Europe',
  australia: 'Australia',
  canada: 'Canada',
  'new-zealand': 'New Zealand',
  mexico: 'Mexico',
}

export async function generateStaticParams() {
  return Object.keys(REGIONS).map((region) => ({ region }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params
  if (!(region in REGIONS)) return { title: 'Not Found' }
  const data = REGIONS[region as Region]

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Daylight Saving Time', item: 'https://whattime.city/daylight-saving-time/' },
      { '@type': 'ListItem', position: 3, name: REGION_LABELS[region as Region], item: `https://whattime.city/daylight-saving-time/${region}/` },
    ],
  }

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `https://whattime.city/daylight-saving-time/${region}/` },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: `https://whattime.city/daylight-saving-time/${region}/`,
      siteName: 'whattime.city',
    },
  }
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default async function DSTRegionPage({ params }: Props) {
  const { region } = await params
  if (!(region in REGIONS)) notFound()

  const data = REGIONS[region as Region]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Daylight Saving Time', item: 'https://whattime.city/daylight-saving-time/' },
      { '@type': 'ListItem', position: 3, name: REGION_LABELS[region as Region], item: `https://whattime.city/daylight-saving-time/${region}/` },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb nav */}
      <nav className="text-xs text-slate-400 mb-4">
        <Link href="/" className="hover:text-slate-600">Home</Link>
        {' / '}
        <Link href="/daylight-saving-time/" className="hover:text-slate-600">Daylight Saving Time</Link>
        {' / '}
        <span className="text-slate-600">{REGION_LABELS[region as Region]}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">{data.h1}</h1>
      <p className="text-slate-500 text-sm mb-6">{data.intro}</p>

      {/* Key dates card */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">2026 DST Dates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">Clocks Spring Forward</div>
              <div className="text-xl font-bold text-emerald-700">{data.start}</div>
              <div className="text-xs text-emerald-600 mt-1">{data.startNote}</div>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">Clocks Fall Back</div>
              <div className="text-xl font-bold text-amber-700">{data.end}</div>
              <div className="text-xs text-amber-600 mt-1">{data.endNote}</div>
            </div>
          </div>
          <div className="mt-4 px-3 py-2 rounded-lg bg-slate-50 text-xs text-slate-500">
            <strong className="text-slate-600">Rule:</strong> {data.rule}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Daylight Saving Time in {REGION_LABELS[region as Region]} — Details
          </h2>
          <div className="space-y-5">
            {data.details.map((section) => (
              <div key={section.heading}>
                <h3 className="font-semibold text-slate-700 mb-1 text-sm">{section.heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Frequently Asked Questions — DST {REGION_LABELS[region as Region]} 2026
          </h2>
          <div className="space-y-3">
            {data.faq.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-medium text-slate-800 text-sm mb-1">{item.q}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related regions + main page */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">DST in Other Regions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.relatedRegions.map((rel) => (
              <Link
                key={rel}
                href={`/daylight-saving-time/${rel}/`}
                className="p-3 rounded-xl border border-slate-200 text-center text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                {REGION_LABELS[rel as Region]}
              </Link>
            ))}
            <Link
              href="/daylight-saving-time/"
              className="p-3 rounded-xl border border-blue-200 bg-blue-50 text-center text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
            >
              All Regions
            </Link>
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        DST dates sourced from IANA Time Zone Database and official government announcements.
      </footer>
    </ContentPageWrapper>
  )
}
