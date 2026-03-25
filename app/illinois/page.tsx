import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import IllinoisClockClient from './IllinoisClockClient'

export const metadata: Metadata = {
  title: 'Time in Illinois Now — CST/CDT (UTC−6/−5) · Chicago, Springfield',
  description:
    'What time is it in Illinois right now? Illinois uses Central Standard Time (CST, UTC−6) in winter and Central Daylight Time (CDT, UTC−5) during Daylight Saving Time. Live Chicago clock, Illinois vs world cities, and best time to call.',
  keywords: [
    'time in illinois', 'illinois time now', 'what time is it in illinois',
    'chicago time', 'illinois time zone', 'CST illinois', 'CDT illinois',
    'central time illinois', 'current time chicago', 'illinois utc-6',
    'illinois time vs new york', 'illinois time vs california', 'illinois time vs london',
    'chicago time zone', 'springfield illinois time', 'central standard time',
  ],
  alternates: { canonical: 'https://whattime.city/illinois/' },
  openGraph: {
    title: 'Current Time in Illinois — CST/CDT (UTC−6/−5)',
    description: 'Live Illinois time. CST (UTC−6) in winter, CDT (UTC−5) during Daylight Saving Time. Chicago, Springfield, Rockford all on Central Time.',
    type: 'website', url: 'https://whattime.city/illinois/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Illinois right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Illinois uses Central Time — CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. All cities in Illinois — Chicago, Springfield, Rockford, Peoria, Champaign, and Aurora — are on the same time zone. The live clock above shows the current time in Illinois.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Illinois in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Illinois is in the Central Time Zone. In winter, Illinois uses Central Standard Time (CST, UTC−6). During Daylight Saving Time (March–November), Illinois uses Central Daylight Time (CDT, UTC−5). The IANA identifier is America/Chicago. Illinois shares the Central Time Zone with Texas, Minnesota, Wisconsin, Missouri, Iowa, and most of the central United States.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Illinois and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Illinois (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in New York. Both states switch to Daylight Saving Time on the same dates, so the 1-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Illinois and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Illinois (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 7:00 AM in Los Angeles, it is 9:00 AM in Chicago. Both states switch to Daylight Saving Time on the same dates, so the 2-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Illinois and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chicago (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US and UK Daylight Saving Time (when both switch, roughly April–October), Chicago (CDT, UTC−5) is typically 6 hours behind London (BST, UTC+1). There are brief transition windows each spring and autumn when the gap temporarily becomes 5 or 7 hours, because the US and UK switch clocks on different dates.' },
    },
    {
      '@type': 'Question',
      name: 'Does Illinois observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Illinois observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (CST to CDT) and fall back on the first Sunday in November (CDT to CST). As of 2026, Illinois continues to observe DST, though there have been various state legislative discussions about ending the clock-change practice.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Chicago from Europe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chicago business hours (9:00 AM – 6:00 PM CST) correspond to 3:00 PM – Midnight GMT in London, or 4:00 PM – 1:00 AM CET in Berlin and Paris. This means European callers should phone Chicago in the early-to-mid afternoon local time to reach colleagues during standard Chicago business hours. Morning calls from Europe will arrive before Chicago opens for business.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Illinois', item: 'https://whattime.city/illinois/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function IllinoisTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Illinois</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Central Time (CT) · CST (UTC−6) in winter · CDT (UTC−5) during Daylight Saving Time</p>
      <IllinoisClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">CST Quick Reference — When it is noon in Chicago</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when CST = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'New York / Miami', tz: 'EST (UTC−5)', local: '1:00 PM', dst: '1:00 PM EDT (gap constant)' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '10:00 AM', dst: '10:00 AM PDT (gap constant)' },
                  { city: 'Denver', tz: 'MST (UTC−7)', local: '11:00 AM', dst: '11:00 AM MDT (gap constant)' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '6:00 PM', dst: '6:00 PM BST (gap roughly constant)' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '7:00 PM', dst: '7:00 PM CEST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '10:00 PM', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '11:30 PM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '2:00 AM next day', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '3:00 AM next day', dst: 'No DST' },
                ].map(row => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      {row.dst !== 'No DST' && <span className="ml-2 text-xs text-slate-400">({row.dst})</span>}
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
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Illinois City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Chicago time', href: '/chicago/' },
              { label: 'Springfield time', href: '/springfield/' },
              { label: 'Rockford time', href: '/rockford/' },
              { label: 'Chicago → New York', href: '/time/chicago/new-york/' },
              { label: 'Chicago → Los Angeles', href: '/time/chicago/los-angeles/' },
              { label: 'Chicago → London', href: '/time/chicago/london/' },
              { label: 'Chicago → Tokyo', href: '/time/chicago/tokyo/' },
              { label: 'Chicago → Dubai', href: '/time/chicago/dubai/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map(lnk => (
              <Link key={lnk.href} href={lnk.href}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database. Illinois: America/Chicago (CST UTC−6 / CDT UTC−5).
      </footer>
    </ContentPageWrapper>
  )
}
