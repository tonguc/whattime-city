import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import GeorgiaStateClockClient from './GeorgiaStateClockClient'

export const metadata: Metadata = {
  title: 'Time in Georgia (US State) Now — EST/EDT (UTC−5/−4) · Atlanta, Savannah',
  description:
    'What time is it in Georgia right now? Georgia uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during Daylight Saving Time. Live Atlanta clock, Georgia vs world cities, and best time to call.',
  keywords: [
    'time in georgia', 'georgia time now', 'what time is it in georgia',
    'atlanta time', 'georgia time zone', 'EST georgia', 'EDT georgia',
    'eastern time georgia', 'georgia utc-5', 'savannah time',
    'georgia time vs california', 'georgia time vs chicago', 'georgia time vs london',
    'current time atlanta', 'georgia state time zone', 'atlanta time zone',
  ],
  alternates: { canonical: 'https://whattime.city/georgia-state/' },
  openGraph: {
    title: 'Current Time in Georgia (US State) — EST/EDT (UTC−5/−4)',
    description: 'Live Georgia time. EST (UTC−5) in winter, EDT (UTC−4) during Daylight Saving Time. Atlanta, Savannah, Augusta, Columbus all on Eastern Time.',
    type: 'website', url: 'https://whattime.city/georgia-state/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Georgia (US state) right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Georgia uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities — Atlanta, Savannah, Augusta, Columbus, Macon, and Athens — are on the same time zone. The live clock above shows the current time in Georgia.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Georgia (the US state) in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Georgia (the US state) is in the Eastern Time Zone — EST (UTC−5) in winter, EDT (UTC−4) during Daylight Saving Time. The IANA identifier is America/New_York. This page covers the US state of Georgia. The country of Georgia (in the Caucasus) uses Georgia Standard Time (GET, UTC+4) and is a separate location.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Georgia (US state) and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta (Eastern Time) is always 3 hours ahead of Los Angeles (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in Atlanta. Both states switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Georgia and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in Atlanta. Both switch clocks on the same dates, so this 1-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'Does Georgia observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Georgia observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday of March and fall back on the first Sunday of November. Georgia follows standard US federal Daylight Saving Time rules.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Atlanta in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta is in the Eastern Time Zone — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. Atlanta Hartsfield-Jackson Airport (ATL), the world\'s busiest airport, publishes all flight times in Eastern Time. The IANA identifier for Atlanta is America/New_York.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Georgia (US) and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time, Atlanta (EDT, UTC−4) is typically 5–6 hours behind London (BST, UTC+1), with a brief ±1 hour variation during the transition windows when the two countries change clocks on different dates each spring and autumn.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Georgia (US State)', item: 'https://whattime.city/georgia-state/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function GeorgiaStateTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Georgia (US State)</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time · Atlanta hub</p>
      <GeorgiaStateClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">EST Quick Reference — When it is noon in Atlanta</h2>
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
                  { city: 'London', tz: 'GMT (UTC+0)', local: '5:00 PM', note: '6:00 PM BST in summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '6:00 PM', note: '7:00 PM CEST in summer' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '9:00 PM', note: 'No DST' },
                  { city: 'Mumbai', tz: 'IST (UTC+5:30)', local: '10:30 PM', note: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '1:00 AM next day', note: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '3:00 AM next day', note: 'AEDT UTC+11 in Australian summer' },
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
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Georgia City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Atlanta time', href: '/atlanta/' },
              { label: 'Savannah time', href: '/savannah/' },
              { label: 'Augusta time', href: '/augusta/' },
              { label: 'Atlanta → Chicago', href: '/time/atlanta/chicago/' },
              { label: 'Atlanta → Los Angeles', href: '/time/atlanta/los-angeles/' },
              { label: 'Atlanta → London', href: '/time/atlanta/london/' },
              { label: 'Atlanta → Dubai', href: '/time/atlanta/dubai/' },
              { label: 'Atlanta → Tokyo', href: '/time/atlanta/tokyo/' },
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
        Time zone data powered by the IANA Time Zone Database. Georgia (US): America/New_York (EST UTC−5 / EDT UTC−4). Not to be confused with the country of Georgia (GET UTC+4).
      </footer>
    </ContentPageWrapper>
  )
}
