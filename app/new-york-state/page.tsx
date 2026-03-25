import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NewYorkStateClockClient from './NewYorkStateClockClient'

export const metadata: Metadata = {
  title: 'Time in New York Now — EST/EDT (UTC−5/−4) · NYC, Buffalo, Albany',
  description:
    'What time is it in New York right now? New York uses EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. Live New York clock, NY vs world cities, and best time to call.',
  keywords: [
    'time in new york', 'new york time now', 'what time is it in new york',
    'new york time', 'current time in new york', 'new york time zone',
    'EST new york', 'EDT new york', 'nyc time now', 'new york est timezone',
    'new york time vs uk', 'new york time vs pst', 'new york time right now',
    'eastern time new york', 'time in new york state',
  ],
  alternates: { canonical: 'https://whattime.city/new-york-state/' },
  openGraph: {
    title: 'Current Time in New York — EST/EDT (UTC−5/−4)',
    description: 'Live New York time. EST (UTC−5) in winter, EDT (UTC−4) during DST. NYC, Buffalo, Albany, Rochester all on Eastern Time.',
    type: 'website', url: 'https://whattime.city/new-york-state/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in New York right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities in New York State — New York City, Buffalo, Rochester, Albany, and Syracuse — are on the same time zone. The live clock at the top shows the current time in New York.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is New York in?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York is in the Eastern Time Zone. In winter, New York uses Eastern Standard Time (EST, UTC−5). During Daylight Saving Time (March–November), New York uses Eastern Daylight Time (EDT, UTC−4). The IANA identifier is America/New_York. New York shares this time zone with Florida, Georgia, Michigan, Ohio, and most of the US East Coast.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During Daylight Saving Time, New York (EDT, UTC−4) is typically still 5 hours behind London (BST, UTC+1) because both regions change clocks within a few weeks of each other. There are brief windows each spring and autumn when the gap is 4 or 6 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and Los Angeles?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 3 hours ahead of Los Angeles (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in New York. This 3-hour gap is constant year-round because both states switch to Daylight Saving Time simultaneously.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in New York. Both cities switch to Daylight Saving Time on the same dates, so the 1-hour gap is constant.' },
    },
    {
      '@type': 'Question',
      name: 'Does New York observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. New York observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (EST to EDT) and fall back on the first Sunday in November (EDT to EST). There have been legislative proposals to end DST in New York, but as of 2026, the state continues to change clocks twice per year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'India (IST, UTC+5:30) is 10 hours and 30 minutes ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time, New York moves to EDT (UTC−4), making the gap 9 hours and 30 minutes. India has no DST, so the difference alternates between 9.5h and 10.5h depending on whether the US is on EST or EDT.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in New York', item: 'https://whattime.city/new-york-state/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function NewYorkStateTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in New York</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time</p>
      <NewYorkStateClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">EST Quick Reference — When it is noon in New York</h2>
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
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '9:00 AM', dst: '9:00 AM PDT (gap constant)' },
                  { city: 'Chicago / Dallas', tz: 'CST (UTC−6)', local: '11:00 AM', dst: '11:00 AM CDT (gap constant)' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '5:00 PM', dst: '5:00 PM BST (gap roughly constant)' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '6:00 PM', dst: '6:00 PM CEST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '9:00 PM', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '10:30 PM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '1:00 AM next day', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '2:00 AM next day', dst: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '3:00 AM next day', dst: 'AEDT varies' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">New York City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'New York City time', href: '/new-york/' },
              { label: 'Buffalo time', href: '/buffalo/' },
              { label: 'Albany time', href: '/albany/' },
              { label: 'NYC → London', href: '/time/new-york/london/' },
              { label: 'NYC → Los Angeles', href: '/time/new-york/los-angeles/' },
              { label: 'NYC → Tokyo', href: '/time/new-york/tokyo/' },
              { label: 'NYC → Mumbai', href: '/time/new-york/mumbai/' },
              { label: 'NYC → Dubai', href: '/time/new-york/dubai/' },
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
        Time zone data powered by the IANA Time Zone Database. New York: America/New_York (EST UTC−5 / EDT UTC−4).
      </footer>
    </ContentPageWrapper>
  )
}
