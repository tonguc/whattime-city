import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NorthCarolinaClockClient from './NorthCarolinaClockClient'

export const metadata: Metadata = {
  title: 'Time in North Carolina Now — EST/EDT (UTC−5/−4) · Charlotte, Raleigh',
  description: 'What time is it in North Carolina right now? NC uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during DST. Live Charlotte clock, NC vs world cities.',
  keywords: ['time in north carolina', 'north carolina time now', 'what time is it in north carolina', 'charlotte time', 'raleigh time', 'north carolina time zone', 'EST north carolina', 'eastern time nc', 'nc time vs california', 'nc time vs chicago'],
  alternates: { canonical: 'https://whattime.city/north-carolina/' },
  openGraph: { title: 'Current Time in North Carolina — EST/EDT (UTC−5/−4)', description: 'Live North Carolina time. EST (UTC−5) in winter, EDT (UTC−4) during DST. Charlotte, Raleigh, Durham, Greensboro on Eastern Time.', type: 'website', url: 'https://whattime.city/north-carolina/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in North Carolina right now?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities — Charlotte, Raleigh, Durham, Greensboro, Winston-Salem, and Asheville — are on the same time zone. The live clock above shows the current time in North Carolina.' } },
    { '@type': 'Question', name: 'What time zone is North Carolina in?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina is entirely in the Eastern Time Zone. In winter it uses EST (UTC−5) and during DST it uses EDT (UTC−4). The IANA identifier is America/New_York. North Carolina shares Eastern Time with New York, Florida, Georgia, and Virginia.' } },
    { '@type': 'Question', name: 'What is the time difference between North Carolina and California?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM in Charlotte. Both states change clocks on the same dates.' } },
    { '@type': 'Question', name: 'What is the time difference between North Carolina and Chicago?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in Charlotte or Raleigh.' } },
    { '@type': 'Question', name: 'What is the time difference between North Carolina and London?', acceptedAnswer: { '@type': 'Answer', text: 'Charlotte (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time, the gap is typically 5–6 hours depending on the brief transition windows when clocks change on different dates.' } },
    { '@type': 'Question', name: 'Does North Carolina observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. North Carolina observes Daylight Saving Time. Clocks spring forward on the second Sunday of March and fall back on the first Sunday of November.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in North Carolina', item: 'https://whattime.city/north-carolina/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function NorthCarolinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in North Carolina</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time</p>
      <NorthCarolinaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">North Carolina City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Charlotte time', href: '/charlotte/' }, { label: 'Raleigh time', href: '/raleigh/' }, { label: 'Durham time', href: '/durham/' }, { label: 'Charlotte → Chicago', href: '/time/charlotte/chicago/' }, { label: 'Charlotte → Los Angeles', href: '/time/charlotte/los-angeles/' }, { label: 'Charlotte → London', href: '/time/charlotte/london/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. North Carolina: America/New_York (EST UTC−5 / EDT UTC−4).</footer>
    </ContentPageWrapper>
  )
}
