import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import WashingtonStateClockClient from './WashingtonStateClockClient'

export const metadata: Metadata = {
  title: 'Time in Washington State Now — PST/PDT (UTC−8/−7) · Seattle, Spokane',
  description:
    'What time is it in Washington State right now? Washington uses Pacific Standard Time (PST, UTC−8) in winter and Pacific Daylight Time (PDT, UTC−7) during Daylight Saving Time. Live Seattle clock, WA vs world cities, and best time to call.',
  keywords: [
    'time in washington state', 'washington state time now', 'what time is it in washington state',
    'seattle time', 'washington time zone', 'PST washington', 'PDT washington',
    'pacific time washington', 'current time seattle', 'washington utc-8',
    'washington time vs new york', 'washington time vs chicago', 'washington time vs london',
    'spokane time', 'tacoma time', 'bellevue time', 'pacific standard time',
  ],
  alternates: { canonical: 'https://whattime.city/washington-state/' },
  openGraph: {
    title: 'Current Time in Washington State — PST/PDT (UTC−8/−7)',
    description: 'Live Washington State time. PST (UTC−8) in winter, PDT (UTC−7) during Daylight Saving Time. Seattle, Spokane, Tacoma, Bellevue all on Pacific Time.',
    type: 'website', url: 'https://whattime.city/washington-state/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Washington State right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington State uses Pacific Time — PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. All cities in Washington — Seattle, Spokane, Tacoma, Bellevue, Everett, and Olympia — are on the same time zone. Washington shares Pacific Time with Oregon and California. The live clock above shows the current time in Washington State.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Washington State in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington State is in the Pacific Time Zone. In winter, Washington uses Pacific Standard Time (PST, UTC−8). During Daylight Saving Time (March–November), Washington uses Pacific Daylight Time (PDT, UTC−7). The IANA identifier is America/Los_Angeles. Washington State is distinct from Washington D.C., which is on Eastern Time (EST/EDT, UTC−5/−4) on the opposite coast.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 3 hours ahead of Washington State (Pacific Time). When it is 9:00 AM in Seattle, it is 12:00 PM (noon) in New York. Both states switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round. This difference is important for scheduling calls, as New York business hours start 3 hours earlier than Seattle business hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chicago (Central Time) is always 2 hours ahead of Washington State (Pacific Time). When it is 9:00 AM in Seattle, it is 11:00 AM in Chicago. Both cities switch to Daylight Saving Time on the same dates, so the 2-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seattle (PST, UTC−8) is 8 hours behind London (GMT, UTC+0) in winter. During US and UK Daylight Saving Time (roughly April–October), Seattle (PDT, UTC−7) is typically still 8 hours behind London (BST, UTC+1). There are brief windows each spring and autumn when the gap becomes 7 or 9 hours, because the US and UK switch clocks on different dates. The 8-hour gap makes real-time collaboration between Seattle and London teams challenging.' },
    },
    {
      '@type': 'Question',
      name: 'Does Washington State observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Washington State observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (PST to PDT) and fall back on the first Sunday in November (PDT to PST). Washington State passed legislation in 2019 to permanently adopt PDT (UTC−7) year-round, but this requires federal approval or a multistate agreement. As of 2026, Washington State continues to change clocks twice per year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and Tokyo?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tokyo (JST, UTC+9) is 17 hours ahead of Seattle (PST, UTC−8) in winter. During US Daylight Saving Time (PDT, UTC−7), the difference narrows to 16 hours. Japan has no DST, so the gap shifts only when Washington State changes its clocks. This 16–17 hour difference means that Seattle and Tokyo business days barely overlap — when Seattle opens at 9:00 AM, it is already 2:00 AM the next day in Tokyo.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Washington State', item: 'https://whattime.city/washington-state/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function WashingtonStateTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Washington State</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Pacific Time (PT) · PST (UTC−8) in winter · PDT (UTC−7) during Daylight Saving Time</p>
      <WashingtonStateClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">PST Quick Reference — When it is noon in Seattle</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when PST = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'Los Angeles / San Francisco', tz: 'PST (UTC−8)', local: '12:00 PM', dst: '12:00 PM PDT (same zone)' },
                  { city: 'Denver', tz: 'MST (UTC−7)', local: '1:00 PM', dst: '1:00 PM MDT (gap constant)' },
                  { city: 'Chicago', tz: 'CST (UTC−6)', local: '2:00 PM', dst: '2:00 PM CDT (gap constant)' },
                  { city: 'New York', tz: 'EST (UTC−5)', local: '3:00 PM', dst: '3:00 PM EDT (gap constant)' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '8:00 PM', dst: '8:00 PM BST (gap roughly constant)' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '9:00 PM', dst: '9:00 PM CEST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: 'Midnight', dst: 'No DST' },
                  { city: 'Singapore / Beijing', tz: 'SGT/CST (UTC+8)', local: '4:00 AM next day', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '5:00 AM next day', dst: 'No DST' },
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
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Washington State City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Seattle time', href: '/seattle/' },
              { label: 'Spokane time', href: '/spokane/' },
              { label: 'Tacoma time', href: '/tacoma/' },
              { label: 'Bellevue time', href: '/bellevue/' },
              { label: 'Seattle → New York', href: '/time/seattle/new-york/' },
              { label: 'Seattle → London', href: '/time/seattle/london/' },
              { label: 'Seattle → Tokyo', href: '/time/seattle/tokyo/' },
              { label: 'Seattle → Chicago', href: '/time/seattle/chicago/' },
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
        Time zone data powered by the IANA Time Zone Database. Washington State: America/Los_Angeles (PST UTC−8 / PDT UTC−7).
      </footer>
    </ContentPageWrapper>
  )
}
