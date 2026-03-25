import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import CaliClockClient from './CaliClockClient'

export const metadata: Metadata = {
  title: 'Time in California Now — PST/PDT (UTC−8/−7) · LA, SF, San Diego',
  description:
    'What time is it in California right now? California uses PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. Live Los Angeles clock, California vs world cities, and best time to call.',
  keywords: [
    'time in california',
    'california time now',
    'what time is it in california',
    'california time',
    'current time in california',
    'california time zone',
    'PST time zone',
    'PDT time zone',
    'pacific standard time',
    'pacific daylight time',
    'los angeles time now',
    'san francisco time now',
    'california time vs est',
    'california time vs gmt',
    'california pst utc offset',
    'california daylight saving time',
    'what time zone is california',
    'california time right now',
  ],
  alternates: {
    canonical: 'https://whattime.city/california/',
  },
  openGraph: {
    title: 'Current Time in California — PST/PDT (UTC−8/−7)',
    description:
      'Live California time clock. PST is UTC−8 in winter; PDT is UTC−7 during Daylight Saving Time. Check California time vs New York, London, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/california/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in California Now — PST/PDT',
    description:
      'Live California time. PST (UTC−8) in winter, PDT (UTC−7) in summer. Los Angeles, San Francisco, San Diego all share the same Pacific Time zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in California right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California uses Pacific Time — PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. The live clock at the top of this page shows the exact current time in California. All major California cities — Los Angeles, San Francisco, San Diego, San Jose, and Sacramento — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is California in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California is in the Pacific Time Zone (PT). In winter (November–March), California observes Pacific Standard Time (PST), which is UTC−8. In summer (March–November), California observes Pacific Daylight Time (PDT), which is UTC−7. The IANA time zone identifier is America/Los_Angeles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does California observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from PST/UTC−8 to PDT/UTC−7), and fall back on the first Sunday in November. California has repeatedly voted to end this practice — Proposition 7 passed in 2018 — but a change requires federal approval, which has not yet occurred.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between California and New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in New York. This 3-hour gap holds year-round because both states switch to Daylight Saving Time simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between California and London?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In winter (PST vs GMT), London is 8 hours ahead of California. In summer (PDT vs BST), London is 8 hours ahead. However, the gap briefly changes to 7 or 9 hours during the 2–3 weeks when only one region has switched to summer time. The standard difference is 8 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between California and Chicago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chicago (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 11:00 AM in Chicago. Like the California–New York gap, this 2-hour difference is constant year-round because both switch DST at the same time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call California from Europe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To reach California during business hours (9 AM–6 PM PST/PDT), callers from London (GMT) should call between 5:00 PM and midnight GMT in winter. From Berlin or Paris (CET), the window is 6:00 PM to 3:00 AM CET. The key challenge: California is the last major US time zone, so European afternoons are the best overlap window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all California cities have the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All of California — including Los Angeles, San Francisco, San Diego, San Jose, Sacramento, Fresno, and Long Beach — uses the same Pacific Time zone (America/Los_Angeles). There are no time zone boundaries within the state of California.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in California', item: 'https://whattime.city/california/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function CaliforniaTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in California
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Pacific Time (PT) · PST (UTC−8) in winter · PDT (UTC−7) during Daylight Saving Time
      </p>

      <CaliClockClient />

      {/* PST/PDT Explained */}
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">California Time Zone — PST & PDT Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              California operates on <strong>Pacific Time (PT)</strong>. The state observes two offsets
              throughout the year: <strong>PST (Pacific Standard Time, UTC−8)</strong> from the first Sunday
              in November to the second Sunday in March, and <strong>PDT (Pacific Daylight Time, UTC−7)</strong>{' '}
              for the remaining seven months.
            </p>
            <p>
              California is the <strong>westernmost major US time zone</strong> — Los Angeles is 3 hours behind
              New York, 2 hours behind Chicago, and 1 hour behind Denver. This "last zone" position means that
              business contacts in Asia and Europe must call early in their own morning to reach California
              during working hours.
            </p>
            <p>
              <strong>California attempted to eliminate the biannual clock change.</strong> Voters passed
              Proposition 7 in November 2018, authorizing the state legislature to put California on permanent
              Daylight Saving Time. However, federal law (the Uniform Time Act) requires Congressional approval
              for states to observe permanent DST — and as of 2026, that approval has not come. California
              continues to switch clocks twice per year.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Period</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Abbreviation</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">UTC Offset</th>
                    <th className="text-left py-2 font-medium text-slate-600">Dates (approx.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { period: 'Standard Time', abbr: 'PST', utc: 'UTC−8', dates: 'Nov (1st Sun) → Mar (2nd Sun)' },
                    { period: 'Daylight Saving Time', abbr: 'PDT', utc: 'UTC−7', dates: 'Mar (2nd Sun) → Nov (1st Sun)' },
                  ].map((row) => (
                    <tr key={row.abbr}>
                      <td className="py-2 pr-4 font-medium text-slate-700">{row.period}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.abbr}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.utc}</td>
                      <td className="py-2 text-slate-600">{row.dates}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">PST Quick Reference — When it is noon in Los Angeles</h2>
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
                  { city: 'New York', tz: 'EST (UTC−5)', local: '3:00 PM', dst: '3:00 PM EDT (gap constant)' },
                  { city: 'Chicago', tz: 'CST (UTC−6)', local: '2:00 PM', dst: '2:00 PM CDT (gap constant)' },
                  { city: 'Denver', tz: 'MST (UTC−7)', local: '1:00 PM', dst: '1:00 PM MDT (gap constant)' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '8:00 PM', dst: '8:00 PM BST (same gap)' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '9:00 PM', dst: '9:00 PM CEST (same gap)' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: 'Midnight', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '1:30 AM next day', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '4:00 AM next day', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '5:00 AM next day', dst: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '6:00 AM next day', dst: 'AEDT varies' },
                ].map((row) => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      {row.dst !== 'No DST' && (
                        <span className="ml-2 text-xs text-slate-400">({row.dst})</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Internal links */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">California City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Los Angeles time', href: '/los-angeles/' },
              { label: 'San Francisco time', href: '/san-francisco/' },
              { label: 'San Diego time', href: '/san-diego/' },
              { label: 'San Jose time', href: '/san-jose/' },
              { label: 'Sacramento time', href: '/sacramento/' },
              { label: 'LA → New York', href: '/time/los-angeles/new-york/' },
              { label: 'LA → London', href: '/time/los-angeles/london/' },
              { label: 'SF → Tokyo', href: '/time/san-francisco/tokyo/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        California: America/Los_Angeles (PST UTC−8 / PDT UTC−7). DST observed.
      </footer>
    </ContentPageWrapper>
  )
}
