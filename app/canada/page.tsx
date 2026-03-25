import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import CanadaClockClient from './CanadaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Canada Now — All Time Zones · Toronto, Vancouver, Montreal, Calgary',
  description:
    'What time is it in Canada right now? Canada spans 6 time zones from Newfoundland (NST, UTC−3:30) to Pacific (PST, UTC−8). Live Toronto clock, all Canadian time zones, and best time to call.',
  keywords: [
    'time in canada',
    'canada time now',
    'what time is it in canada',
    'canada time',
    'current time in canada',
    'canada time zone',
    'EST canada',
    'toronto time now',
    'vancouver time now',
    'montreal time now',
    'calgary time now',
    'canada time vs uk',
    'time difference canada usa',
    'canada utc offset',
    'canadian time zones',
    'canada time right now',
    'NST newfoundland time',
  ],
  alternates: {
    canonical: 'https://whattime.city/canada/',
  },
  openGraph: {
    title: 'Current Time in Canada — All 6 Time Zones',
    description:
      'Live Canada time. Toronto (EST/EDT), Vancouver (PST/PDT), Montreal (EST/EDT), Calgary (MST/MDT), Halifax (AST/ADT), St. John\'s (NST/NDT). All Canadian time zones live.',
    type: 'website',
    url: 'https://whattime.city/canada/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Canada Now — All Time Zones',
    description:
      'Live Canada time across all 6 time zones. Toronto EST/EDT, Vancouver PST/PDT, Montreal EST, Calgary MST, Halifax AST, St. John\'s NST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Canada right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canada spans six time zones. Toronto and Montreal use EST (UTC−5) or EDT (UTC−4). Vancouver uses PST (UTC−8) or PDT (UTC−7). Calgary uses MST (UTC−7) or MDT (UTC−6). Halifax uses AST (UTC−4) or ADT (UTC−3). St. John\'s uses the unique NST (UTC−3:30) or NDT (UTC−2:30). The live clocks above show all current Canadian times.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Canada have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canada officially observes six time zones: Pacific (PST/PDT, UTC−8/−7), Mountain (MST/MDT, UTC−7/−6), Central (CST/CDT, UTC−6/−5), Eastern (EST/EDT, UTC−5/−4), Atlantic (AST/ADT, UTC−4/−3), and Newfoundland (NST/NDT, UTC−3:30/−2:30). Newfoundland\'s half-hour offset is unique among North American time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Canada observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Canada observes Daylight Saving Time. Exceptions include most of Saskatchewan (which stays on CST/UTC−6 year-round), some parts of British Columbia, and some First Nations communities. The DST switch follows the same schedule as the US: second Sunday in March (spring forward) and first Sunday in November (fall back).',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Toronto in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toronto is in the Eastern Time Zone (ET). In winter, Toronto uses Eastern Standard Time (EST, UTC−5). During Daylight Saving Time (March–November), Toronto uses Eastern Daylight Time (EDT, UTC−4). Toronto shares this time zone with Montreal, Ottawa, and New York City.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Toronto and Vancouver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vancouver (Pacific Time) is always 3 hours behind Toronto (Eastern Time). When it is 12:00 PM (noon) in Toronto, it is 9:00 AM in Vancouver. Both cities switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Canada and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toronto (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During British Summer Time (BST), Toronto is 5 hours behind (because both Canada and the UK also switch DST, roughly cancelling the change). Vancouver (PST, UTC−8) is 8 hours behind London in winter. There are brief transition windows each spring and autumn when the gap shifts by 1 hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Newfoundland have a half-hour time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Newfoundland Standard Time (NST) is UTC−3:30, a 30-minute offset that makes it unique in North America. This unusual offset dates to the 19th century when Newfoundland set its clocks by the mean solar time of its capital, St. John\'s. When Newfoundland joined Canada in 1949, it retained its distinctive time zone rather than aligning with the Atlantic (UTC−4) or Eastern (UTC−5) zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Saskatchewan in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Saskatchewan uses Central Standard Time (CST, UTC−6) year-round and does not observe Daylight Saving Time. This means Saskatchewan is on the same time as Mountain Daylight Time (MDT, UTC−6) in summer — effectively aligned with Alberta in summer and Manitoba in winter.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Canada', item: 'https://whattime.city/canada/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function CanadaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in Canada
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        6 Time Zones · Eastern (UTC−5) · Pacific (UTC−8) · Newfoundland (UTC−3:30)
      </p>

      <CanadaClockClient />
      <CountryFactsSection hubSlug="canada" />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Canada Time Zones Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Canada is the second-largest country in the world by area, spanning roughly 5,000 km from
              east to west. This geographic breadth requires <strong>six standard time zones</strong>,
              including the uniquely unusual <strong>Newfoundland Standard Time (NST, UTC−3:30)</strong> —
              a 30-minute offset found nowhere else in North America.
            </p>
            <p>
              Most provinces follow the same Daylight Saving Time schedule as the US — spring forward on
              the second Sunday in March, fall back on the first Sunday in November. Notable exceptions:
              most of <strong>Saskatchewan stays on CST (UTC−6) year-round</strong>, effectively sharing
              Alberta's time in summer and Manitoba's in winter.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Zone</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Standard</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">DST</th>
                    <th className="text-left py-2 font-medium text-slate-600">Provinces / Cities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { zone: 'Pacific', std: 'PST (UTC−8)', dst: 'PDT (UTC−7)', provinces: 'British Columbia (Vancouver)' },
                    { zone: 'Mountain', std: 'MST (UTC−7)', dst: 'MDT (UTC−6)', provinces: 'Alberta (Calgary, Edmonton); most of SK no DST' },
                    { zone: 'Central', std: 'CST (UTC−6)', dst: 'CDT (UTC−5)', provinces: 'Manitoba (Winnipeg)' },
                    { zone: 'Eastern', std: 'EST (UTC−5)', dst: 'EDT (UTC−4)', provinces: 'Ontario (Toronto, Ottawa), Quebec (Montreal)' },
                    { zone: 'Atlantic', std: 'AST (UTC−4)', dst: 'ADT (UTC−3)', provinces: 'Nova Scotia (Halifax), New Brunswick, PEI' },
                    { zone: 'Newfoundland', std: 'NST (UTC−3:30)', dst: 'NDT (UTC−2:30)', provinces: "Newfoundland & Labrador (St. John's)" },
                  ].map((row) => (
                    <tr key={row.zone}>
                      <td className="py-2 pr-4 font-bold text-slate-700">{row.zone}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.std}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.dst}</td>
                      <td className="py-2 text-slate-600">{row.provinces}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
                <div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div>
                <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Canadian City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Toronto time', href: '/toronto/' },
              { label: 'Vancouver time', href: '/vancouver/' },
              { label: 'Montreal time', href: '/montreal/' },
              { label: 'Calgary time', href: '/calgary/' },
              { label: 'Ottawa time', href: '/ottawa/' },
              { label: 'Halifax time', href: '/halifax/' },
              { label: 'Toronto → London', href: '/time/toronto/london/' },
              { label: 'Canada country info', href: '/country/canada/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        Canada main zones: America/Toronto · America/Vancouver · America/St_Johns and more.
      </footer>
    </ContentPageWrapper>
  )
}
