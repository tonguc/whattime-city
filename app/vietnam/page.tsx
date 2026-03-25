import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import VietnamClockClient from './VietnamClockClient'

export const metadata: Metadata = {
  title: 'Time in Vietnam Now — ICT (UTC+7) · Ho Chi Minh City, Hanoi · No DST',
  description:
    'What time is it in Vietnam right now? Vietnam uses Indochina Time (ICT, UTC+7) year-round with no Daylight Saving Time. Live Ho Chi Minh City clock, Vietnam vs world cities, and best time to call.',
  keywords: [
    'time in vietnam', 'vietnam time now', 'what time is it in vietnam',
    'ho chi minh city time', 'hanoi time', 'vietnam time zone', 'ICT time zone',
    'vietnam utc+7', 'vietnam no daylight saving', 'saigon time',
    'vietnam time vs usa', 'vietnam time vs uk', 'vietnam time vs singapore',
    'vietnam time vs australia', 'current time vietnam', 'indochina time',
  ],
  alternates: { canonical: 'https://whattime.city/vietnam/' },
  openGraph: {
    title: 'Current Time in Vietnam — ICT (UTC+7) · No Daylight Saving Time',
    description: 'Live Vietnam time. Indochina Time (ICT, UTC+7) used year-round. No DST. Ho Chi Minh City, Hanoi, Da Nang all on the same time.',
    type: 'website', url: 'https://whattime.city/vietnam/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Vietnam right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vietnam uses Indochina Time (ICT, UTC+7) year-round. All cities — Ho Chi Minh City (Saigon), Hanoi, Da Nang, Hue, Nha Trang, Can Tho — are on the same time zone. Vietnam does not observe Daylight Saving Time. The live clock above shows the current time in Vietnam.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Vietnam in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vietnam is in the Indochina Time (ICT) zone, which is UTC+7. The IANA identifier is Asia/Ho_Chi_Minh. Vietnam shares this UTC+7 offset with Thailand, Cambodia, Laos, and the western part of Indonesia (WIB). Vietnam has not observed Daylight Saving Time since 1975.' },
    },
    {
      '@type': 'Question',
      name: 'Does Vietnam observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Vietnam does not observe Daylight Saving Time. ICT (UTC+7) is used year-round. Vietnam is located near the equator, where the difference in daylight between summer and winter is small, making DST impractical. Vietnam had a brief period of DST from 1981–1983 but has not used it since.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ho Chi Minh City (ICT, UTC+7) is 12 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 11 hours. Vietnam is 15 hours ahead of Los Angeles (PST, UTC−8) in winter, or 14 hours ahead during PDT. Because Vietnam has no DST, the difference changes only when the US adjusts its clocks.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ho Chi Minh City (ICT, UTC+7) is 7 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 6 hours. Since Vietnam has no DST, this difference changes only when the UK adjusts its clocks in late March and late October.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and Singapore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 1 hour ahead of Vietnam (ICT, UTC+7). Despite being close geographically and economically linked in ASEAN, Singapore uses UTC+8 while Vietnam uses UTC+7. When it is 9:00 AM in Ho Chi Minh City, it is 10:00 AM in Singapore. Both countries have no DST, so this difference is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and Australia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sydney (AEST, UTC+10) is 3 hours ahead of Ho Chi Minh City (ICT, UTC+7) in winter. During Australian Eastern Daylight Time (AEDT, UTC+11), the gap widens to 4 hours. Since Vietnam has no DST, the difference shifts only when Australia changes its clocks in October and April.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Vietnam', item: 'https://whattime.city/vietnam/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function VietnamTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Vietnam</h1>
      <p className="text-sm text-slate-500 mb-6">Indochina Time (ICT) · UTC+7 · No Daylight Saving Time</p>
      <VietnamClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">ICT Quick Reference — When it is noon in Ho Chi Minh City</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">UTC Offset</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when ICT = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'Bangkok / Jakarta (WIB)', utc: 'UTC+7', local: '12:00 PM', note: 'same time zone' },
                  { city: 'Singapore / Kuala Lumpur', utc: 'UTC+8', local: '1:00 PM', note: '1h ahead, no DST' },
                  { city: 'Beijing / Hong Kong', utc: 'UTC+8', local: '1:00 PM', note: '1h ahead, no DST' },
                  { city: 'Tokyo / Seoul', utc: 'UTC+9', local: '2:00 PM', note: '2h ahead, no DST' },
                  { city: 'Sydney (AEST)', utc: 'UTC+10', local: '3:00 PM', note: '4h ahead during AEDT' },
                  { city: 'Dubai', utc: 'UTC+4', local: '9:00 AM', note: '3h behind, no DST' },
                  { city: 'London (GMT)', utc: 'UTC+0', local: '5:00 AM', note: '6h behind during BST' },
                  { city: 'New York (EST)', utc: 'UTC−5', local: '12:00 AM midnight', note: '11h behind during EDT' },
                  { city: 'Los Angeles (PST)', utc: 'UTC−8', local: '9:00 PM prev. day', note: '14h behind during PDT' },
                ].map(row => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.utc}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      <span className="ml-2 text-xs text-slate-400">({row.note})</span>
                    </td>
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Vietnam City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Ho Chi Minh City time', href: '/ho-chi-minh-city/' },
              { label: 'Hanoi time', href: '/hanoi/' },
              { label: 'Da Nang time', href: '/da-nang/' },
              { label: 'HCMC → Singapore', href: '/time/ho-chi-minh-city/singapore/' },
              { label: 'HCMC → London', href: '/time/ho-chi-minh-city/london/' },
              { label: 'HCMC → Sydney', href: '/time/ho-chi-minh-city/sydney/' },
              { label: 'HCMC → Tokyo', href: '/time/ho-chi-minh-city/tokyo/' },
              { label: 'HCMC → New York', href: '/time/ho-chi-minh-city/new-york/' },
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
        Time zone data powered by the IANA Time Zone Database. Vietnam: Asia/Ho_Chi_Minh (ICT UTC+7, no DST).
      </footer>
    </ContentPageWrapper>
  )
}
