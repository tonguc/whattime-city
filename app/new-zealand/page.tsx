import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NewZealandClockClient from './NewZealandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in New Zealand Now — NZST/NZDT (UTC+12/+13) · Auckland, Wellington · Chatham Islands',
  description:
    'What time is it in New Zealand right now? New Zealand uses NZST (UTC+12) in winter and NZDT (UTC+13) during Daylight Saving Time — opposite to the Northern Hemisphere. Chatham Islands are 45 minutes ahead. Live Auckland clock and world comparison.',
  keywords: [
    'time in new zealand', 'new zealand time now', 'what time is it in new zealand',
    'auckland time', 'wellington time', 'new zealand time zone', 'NZST', 'NZDT',
    'new zealand utc+12', 'new zealand daylight saving', 'nz time vs usa',
    'nz time vs uk', 'nz time vs australia', 'chatham islands time',
    'new zealand time vs india', 'current time auckland', 'nzst nzdt',
  ],
  alternates: { canonical: 'https://whattime.city/new-zealand/' },
  openGraph: {
    title: 'Current Time in New Zealand — NZST (UTC+12) / NZDT (UTC+13) · Chatham +45min',
    description: 'Live New Zealand time. NZST (UTC+12) in winter, NZDT (UTC+13) in summer (Southern Hemisphere DST). Chatham Islands are 45 minutes ahead of the NZ mainland.',
    type: 'website', url: 'https://whattime.city/new-zealand/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in New Zealand right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'New Zealand uses New Zealand Standard Time (NZST, UTC+12) in winter and New Zealand Daylight Time (NZDT, UTC+13) during Daylight Saving Time. Auckland, Wellington, Christchurch, and Dunedin are all on the same time. The Chatham Islands use CHAST (UTC+12:45) in winter and CHADT (UTC+13:45) in summer — always 45 minutes ahead of the mainland. The live clock above shows the current time in Auckland.' },
    },
    {
      '@type': 'Question',
      name: 'When does New Zealand observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'New Zealand observes Daylight Saving Time in the Southern Hemisphere summer — the opposite of Northern Hemisphere countries. Clocks spring forward 1 hour on the last Sunday of September (NZST to NZDT, UTC+12 to UTC+13) and fall back on the first Sunday of April (NZDT to NZST). This means New Zealand\'s DST season runs from late September through early April.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New Zealand and Australia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Auckland (NZST, UTC+12) is 2 hours ahead of Sydney (AEST, UTC+10) during New Zealand\'s winter. During New Zealand\'s summer (NZDT, UTC+13), Auckland is 2–3 hours ahead of Sydney, depending on whether Australia is also on daylight time. Since both countries observe DST but on different schedules (Southern Hemisphere), the gap varies between 2 and 3 hours across the year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New Zealand and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Auckland (NZST, UTC+12) is 12 hours ahead of London (GMT, UTC+0) in the UK winter. When New Zealand is on NZDT (UTC+13), Auckland is 13 hours ahead of London. During UK Summer Time (BST, UTC+1), the gap narrows by 1 hour. The combined effect means the NZ–UK difference ranges from 11 to 13 hours across the year depending on which DST regime each country is in.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New Zealand and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Auckland (NZST, UTC+12) is 17 hours ahead of New York (EST, UTC−5) in winter. This effectively means that when it is Monday morning in New York, it is already Tuesday in Auckland. The difference can range from 16 to 19 hours depending on which countries are on daylight time. New Zealand is sometimes said to be "almost a day ahead" of the US East Coast.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone are the Chatham Islands in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Chatham Islands (Pitt Island, Chatham Island) use Chatham Standard Time (CHAST, UTC+12:45) in winter and Chatham Daylight Time (CHADT, UTC+13:45) during Daylight Saving Time. They are always exactly 45 minutes ahead of the New Zealand mainland. The 45-minute offset makes Chatham one of the few places in the world with a non-standard quarter-hour offset. The IANA identifier is Pacific/Chatham.' },
    },
    {
      '@type': 'Question',
      name: 'Is New Zealand the first country to see the new day?',
      acceptedAnswer: { '@type': 'Answer', text: 'New Zealand (UTC+12 in winter, UTC+13 during NZDT) is among the first inhabited places to see each new day. During NZDT (UTC+13), New Zealand and the independent state of Samoa (UTC+13) share the earliest standard time on Earth. The Chatham Islands (UTC+13:45 during CHADT) are technically even further ahead. The uninhabited Line Islands (Kiribati) at UTC+14 see midnight first but have very few permanent inhabitants.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in New Zealand', item: 'https://whattime.city/new-zealand/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function NewZealandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in New Zealand</h1>
      <p className="text-sm text-slate-500 mb-6">NZST (UTC+12) in winter · NZDT (UTC+13) in summer · Chatham Islands +45 min ahead</p>
      <NewZealandClockClient />
      <CountryFactsSection hubSlug="new-zealand" />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">New Zealand Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">NZ Winter (Apr–Sep)</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">NZ Summer (Sep–Apr)</th>
                  <th className="text-left py-2 font-medium text-slate-600">Cities / Islands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { region: 'New Zealand mainland', winter: 'NZST (UTC+12)', summer: 'NZDT (UTC+13)', cities: 'Auckland, Wellington, Christchurch, Dunedin, Hamilton' },
                  { region: 'Chatham Islands', winter: 'CHAST (UTC+12:45)', summer: 'CHADT (UTC+13:45)', cities: 'Chatham Island, Pitt Island (45 min ahead of mainland)' },
                ].map(row => (
                  <tr key={row.region}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.region}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.winter}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.summer}</td>
                    <td className="py-2 text-slate-700">{row.cities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">DST in New Zealand runs from the last Sunday in September to the first Sunday in April — opposite to the Northern Hemisphere. During NZ summer, clocks are at UTC+13 (mainland) and UTC+13:45 (Chatham).</p>
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">New Zealand City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Auckland time', href: '/auckland/' },
              { label: 'Wellington time', href: '/wellington/' },
              { label: 'Christchurch time', href: '/christchurch/' },
              { label: 'Auckland → Sydney', href: '/time/auckland/sydney/' },
              { label: 'Auckland → London', href: '/time/auckland/london/' },
              { label: 'Auckland → New York', href: '/time/auckland/new-york/' },
              { label: 'Auckland → Singapore', href: '/time/auckland/singapore/' },
              { label: 'Auckland → Tokyo', href: '/time/auckland/tokyo/' },
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
        Time zone data powered by the IANA Time Zone Database. New Zealand: Pacific/Auckland (NZST UTC+12 / NZDT UTC+13) · Pacific/Chatham (CHAST UTC+12:45 / CHADT UTC+13:45).
      </footer>
    </ContentPageWrapper>
  )
}
