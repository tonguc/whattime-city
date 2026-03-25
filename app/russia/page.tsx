import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import RussiaClockClient from './RussiaClockClient'

export const metadata: Metadata = {
  title: 'Time in Russia Now — MSK (UTC+3) · Moscow · 11 Time Zones · No DST',
  description:
    'What time is it in Russia right now? Russia spans 11 time zones from UTC+2 (Kaliningrad) to UTC+12 (Kamchatka). Moscow Time (MSK, UTC+3) is the national reference. Live clocks for all Russian time zones, and best time to call Moscow.',
  keywords: [
    'time in russia', 'russia time now', 'what time is it in russia',
    'moscow time', 'russia time zone', 'MSK time zone', 'russia utc+3',
    'russia no daylight saving', 'moscow time now', 'russia time zones',
    'russia 11 time zones', 'vladivostok time', 'yekaterinburg time',
    'russia time vs usa', 'russia time vs uk', 'current time moscow',
    'moscow standard time',
  ],
  alternates: { canonical: 'https://whattime.city/russia/' },
  openGraph: {
    title: 'Current Time in Russia — MSK (UTC+3) · 11 Time Zones · No DST since 2014',
    description: 'Live Russia time. Moscow Time (MSK, UTC+3) is the national reference. Russia spans 11 time zones. No Daylight Saving Time since 2014.',
    type: 'website', url: 'https://whattime.city/russia/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Russia right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Russia spans 11 time zones. Moscow, St Petersburg, Murmansk, and Volgograd use Moscow Time (MSK, UTC+3). The live clock above shows Moscow Time, which is the national reference time used for official purposes across Russia. See the full zone table for other Russian cities.' },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Russia have?',
      acceptedAnswer: { '@type': 'Answer', text: 'Russia has 11 time zones, spanning from UTC+2 (Kaliningrad in the west) to UTC+12 (Kamchatka in the far east). This makes Russia the country with the most time zones in the world. Moscow Time (MSK, UTC+3) is used as the official national reference, and train schedules, airline departures, and government broadcasts all use Moscow Time regardless of local time.' },
    },
    {
      '@type': 'Question',
      name: 'Does Russia observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Russia abolished Daylight Saving Time in 2014. Before 2014, Russia had briefly (2011–2014) permanently adopted summer time (UTC+4 for Moscow) to avoid autumn clock changes — but this caused problems with dark winter mornings. In October 2014, Russia returned to standard winter time (Moscow UTC+3) and stopped changing clocks entirely. Since then all Russian time zones are fixed year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Russia (Moscow) and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Moscow (MSK, UTC+3) is 8 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 7 hours. Moscow is 11 hours ahead of Los Angeles (PST, UTC−8) in winter, or 10 hours ahead during PDT. Since Russia has no DST, the difference changes only when the US adjusts its clocks.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Russia (Moscow) and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Moscow (MSK, UTC+3) is 3 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 2 hours. Since Russia abolished DST in 2014, this difference shifts only when the UK changes clocks in late March and late October.' },
    },
    {
      '@type': 'Question',
      name: 'What is Moscow Time (MSK)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Moscow Time (MSK) is UTC+3 and serves as Russia\'s national reference time. All official Russian timetables — railway schedules, airline departures, TV broadcasts, and government communications — use Moscow Time regardless of the local time zone. The IANA identifier is Europe/Moscow. Moscow Time is also used by Turkey (TRT, UTC+3) and several countries in East Africa (EAT, UTC+3).' },
    },
    {
      '@type': 'Question',
      name: 'What time is it in Vladivostok?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vladivostok uses Vladivostok Time (VLAT, UTC+10), which is 7 hours ahead of Moscow Time (MSK, UTC+3). When it is 9:00 AM in Moscow, it is 4:00 PM in Vladivostok. Vladivostok shares UTC+10 with Sydney (AEST) and Yakutsk (YAKT, UTC+9) is 1 hour behind Vladivostok.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Russia', item: 'https://whattime.city/russia/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function RussiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Russia</h1>
      <p className="text-sm text-slate-500 mb-6">Moscow Time (MSK) · UTC+3 · 11 Time Zones · No Daylight Saving Time since 2014</p>
      <RussiaClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Russia Time Zones Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Zone Name</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Abbreviation</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">UTC</th>
                  <th className="text-left py-2 font-medium text-slate-600">Key Cities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Kaliningrad Time', abbr: 'KALT', utc: 'UTC+2', cities: 'Kaliningrad' },
                  { name: 'Moscow Time', abbr: 'MSK', utc: 'UTC+3', cities: 'Moscow, St Petersburg, Murmansk, Volgograd' },
                  { name: 'Samara Time', abbr: 'SAMT', utc: 'UTC+4', cities: 'Samara, Udmurtia, Saratov' },
                  { name: 'Yekaterinburg Time', abbr: 'YEKT', utc: 'UTC+5', cities: 'Yekaterinburg, Chelyabinsk, Tyumen' },
                  { name: 'Omsk Time', abbr: 'OMST', utc: 'UTC+6', cities: 'Omsk' },
                  { name: 'Krasnoyarsk Time', abbr: 'KRAT', utc: 'UTC+7', cities: 'Krasnoyarsk, Novosibirsk, Tomsk' },
                  { name: 'Irkutsk Time', abbr: 'IRKT', utc: 'UTC+8', cities: 'Irkutsk, Ulan-Ude' },
                  { name: 'Yakutsk Time', abbr: 'YAKT', utc: 'UTC+9', cities: 'Yakutsk, Chita' },
                  { name: 'Vladivostok Time', abbr: 'VLAT', utc: 'UTC+10', cities: 'Vladivostok, Khabarovsk' },
                  { name: 'Magadan Time', abbr: 'MAGT', utc: 'UTC+11', cities: 'Magadan, Sakhalin, South Kuril Islands' },
                  { name: 'Kamchatka Time', abbr: 'PETT', utc: 'UTC+12', cities: 'Petropavlovsk-Kamchatsky, Chukotka' },
                ].map(row => (
                  <tr key={row.abbr}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.name}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.abbr}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.utc}</td>
                    <td className="py-2 text-slate-700">{row.cities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Russia City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Moscow time', href: '/moscow/' },
              { label: 'St Petersburg time', href: '/saint-petersburg/' },
              { label: 'Vladivostok time', href: '/vladivostok/' },
              { label: 'Novosibirsk time', href: '/novosibirsk/' },
              { label: 'Moscow → London', href: '/time/moscow/london/' },
              { label: 'Moscow → New York', href: '/time/moscow/new-york/' },
              { label: 'Moscow → Dubai', href: '/time/moscow/dubai/' },
              { label: 'Moscow → Beijing', href: '/time/moscow/beijing/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map(lnk => (
              <Link key={lnk.href} href={lnk.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database. Russia spans 11 IANA zones from Europe/Kaliningrad (UTC+2) to Asia/Kamchatka (UTC+12). No DST since October 2014.
      </footer>
    </ContentPageWrapper>
  )
}
