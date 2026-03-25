import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import OhioClockClient from './OhioClockClient'

export const metadata: Metadata = {
  title: 'Time in Ohio Now — EST/EDT (UTC−5/−4) · Columbus, Cleveland, Cincinnati',
  description:
    'What time is it in Ohio right now? Ohio uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during Daylight Saving Time. Live Columbus clock, Ohio vs world cities, and best time to call.',
  keywords: [
    'time in ohio', 'ohio time now', 'what time is it in ohio',
    'columbus time', 'cleveland time', 'cincinnati time', 'ohio time zone',
    'EST ohio', 'EDT ohio', 'eastern time ohio', 'ohio utc-5',
    'ohio time vs california', 'ohio time vs chicago', 'ohio time vs london',
    'current time ohio', 'eastern standard time ohio',
  ],
  alternates: { canonical: 'https://whattime.city/ohio/' },
  openGraph: {
    title: 'Current Time in Ohio — EST/EDT (UTC−5/−4)',
    description: 'Live Ohio time. EST (UTC−5) in winter, EDT (UTC−4) during Daylight Saving Time. Columbus, Cleveland, Cincinnati, Akron all on Eastern Time.',
    type: 'website', url: 'https://whattime.city/ohio/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Ohio right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities in Ohio — Columbus, Cleveland, Cincinnati, Akron, Toledo, and Dayton — are on the same time zone. The live clock above shows the current time in Ohio.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Ohio in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio is in the Eastern Time Zone. In winter, Ohio uses Eastern Standard Time (EST, UTC−5). During Daylight Saving Time (March–November), Ohio uses Eastern Daylight Time (EDT, UTC−4). The IANA identifier is America/New_York. Ohio shares Eastern Time with New York, Florida, Georgia, Pennsylvania, and most of the eastern United States.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Ohio and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in Columbus. Both states switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Ohio and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in Columbus or Cleveland. Both switch to Daylight Saving Time on the same dates, so this 1-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'Does Ohio observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ohio observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday of March (EST to EDT) and fall back on the first Sunday of November (EDT to EST). As of 2026, Ohio continues to observe DST in line with federal US timekeeping rules.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Ohio and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Columbus (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK Daylight Saving Time, Columbus (EDT, UTC−4) is typically 5–6 hours behind London (BST, UTC+1), depending on the brief transition periods in spring and autumn when the two regions change clocks on slightly different dates.' },
    },
    {
      '@type': 'Question',
      name: 'Is Ohio on Eastern or Central Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio is entirely on Eastern Time (EST/EDT). No part of Ohio uses Central Time. Ohio borders Indiana (which mostly uses Eastern Time) and Michigan (also Eastern Time). Despite Ohio\'s position in the Midwest, the entire state has been on Eastern Time since 1883.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Ohio', item: 'https://whattime.city/ohio/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function OhioTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Ohio</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time</p>
      <OhioClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">EST Quick Reference — When it is noon in Columbus</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when EST = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'Chicago', tz: 'CST (UTC−6)', local: '11:00 AM', note: 'CDT in summer (gap constant)' },
                  { city: 'Denver', tz: 'MST (UTC−7)', local: '10:00 AM', note: 'MDT in summer (gap constant)' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '9:00 AM', note: 'PDT in summer (gap constant)' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '5:00 PM', note: '6:00 PM BST in UK summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '6:00 PM', note: '7:00 PM CEST in EU summer' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '9:00 PM', note: 'No DST' },
                  { city: 'Mumbai', tz: 'IST (UTC+5:30)', local: '10:30 PM', note: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '1:00 AM next day', note: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '2:00 AM next day', note: 'No DST' },
                ].map(row => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Ohio City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Columbus time', href: '/columbus/' },
              { label: 'Cleveland time', href: '/cleveland/' },
              { label: 'Cincinnati time', href: '/cincinnati/' },
              { label: 'Columbus → Chicago', href: '/time/columbus/chicago/' },
              { label: 'Columbus → Los Angeles', href: '/time/columbus/los-angeles/' },
              { label: 'Columbus → London', href: '/time/columbus/london/' },
              { label: 'Columbus → Tokyo', href: '/time/columbus/tokyo/' },
              { label: 'Columbus → Dubai', href: '/time/columbus/dubai/' },
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
        Time zone data powered by the IANA Time Zone Database. Ohio: America/New_York (EST UTC−5 / EDT UTC−4).
      </footer>
    </ContentPageWrapper>
  )
}
