import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import LouisianaClockClient from './LouisianaClockClient'

export const metadata: Metadata = {
  title: 'Time in Louisiana Now — CST/CDT · New Orleans · Central Time Zone',
  description: 'What time is it in Louisiana right now? Louisiana uses Central Time (CST/CDT). New Orleans is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in louisiana', 'louisiana time now', 'what time is it in louisiana', 'new orleans time', 'louisiana time zone', 'CST CDT louisiana', 'louisiana utc-6', 'baton rouge time', 'shreveport time', 'louisiana central time', 'louisiana time vs eastern', 'louisiana time vs uk'],
  alternates: { canonical: 'https://whattime.city/louisiana/' },
  openGraph: { title: 'Current Time in Louisiana — CST/CDT · New Orleans', description: 'Live Louisiana time. New Orleans and Baton Rouge on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/louisiana/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Louisiana right now?', acceptedAnswer: { '@type': 'Answer', text: 'Louisiana uses Central Time. New Orleans, Baton Rouge (capital), Shreveport, Metairie, and all Louisiana cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Louisiana.' } },
    { '@type': 'Question', name: 'What time zone is New Orleans in?', acceptedAnswer: { '@type': 'Answer', text: 'New Orleans is in the Central Time zone (America/Chicago). New Orleans uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. New Orleans is on the same time as Chicago, Dallas, and Houston.' } },
    { '@type': 'Question', name: 'Does Louisiana observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Louisiana observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Louisiana and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Louisiana (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in New Orleans or Baton Rouge. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Louisiana and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'New Orleans (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, New Orleans moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK observe summer time, New Orleans (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Louisiana on the same time as Texas?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most of Texas. Louisiana (Central Time) and Texas (mostly Central Time) are on the same time. New Orleans and Houston are in the same time zone. Note: the far western tip of Texas (El Paso) uses Mountain Time, which is 1 hour behind Louisiana.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Louisiana', item: 'https://whattime.city/louisiana/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function LouisianaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Louisiana</h1>
      <p className="text-sm text-slate-500 mb-6">Central Time (CST/CDT) · New Orleans · UTC−6 / UTC−5</p>
      <LouisianaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Louisiana City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Houston time', href: '/houston/' }, { label: 'Dallas time', href: '/dallas/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Texas', href: '/texas/' }, { label: 'Time in Mississippi', href: '/mississippi/' }, { label: 'Time in Alabama', href: '/alabama/' }, { label: 'Time in Arkansas', href: '/arkansas/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Louisiana: America/Chicago (CST/CDT, Central Time).</footer>
    </ContentPageWrapper>
  )
}
