import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MississippiClockClient from './MississippiClockClient'

export const metadata: Metadata = {
  title: 'Time in Mississippi Now — CST/CDT · Jackson · Central Time Zone',
  description: 'What time is it in Mississippi right now? Mississippi uses Central Time (CST/CDT). Jackson is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in mississippi', 'mississippi time now', 'what time is it in mississippi', 'jackson mississippi time', 'mississippi time zone', 'CST CDT mississippi', 'mississippi utc-6', 'biloxi time', 'hattiesburg time', 'mississippi central time', 'mississippi time vs eastern'],
  alternates: { canonical: 'https://whattime.city/mississippi/' },
  openGraph: { title: 'Current Time in Mississippi — CST/CDT · Jackson', description: 'Live Mississippi time. Jackson and all of Mississippi on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/mississippi/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Mississippi right now?', acceptedAnswer: { '@type': 'Answer', text: 'Mississippi uses Central Time. Jackson (capital), Gulfport, Biloxi, Hattiesburg, and all Mississippi cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Mississippi.' } },
    { '@type': 'Question', name: 'What time zone is Jackson, Mississippi in?', acceptedAnswer: { '@type': 'Answer', text: 'Jackson, Mississippi is in the Central Time zone (America/Chicago). Jackson uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Jackson is on the same time as New Orleans, Nashville, and Chicago.' } },
    { '@type': 'Question', name: 'Does Mississippi observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mississippi observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Mississippi and Georgia (Atlanta)?', acceptedAnswer: { '@type': 'Answer', text: 'Mississippi (Central Time) is always 1 hour behind Georgia (Eastern Time). When it is noon in Atlanta, it is 11:00 AM in Jackson. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Mississippi and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Jackson (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Jackson moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK observe summer time, Jackson (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Mississippi on the same time as Alabama?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mississippi and Alabama are both entirely on Central Time. There is no time difference between Jackson, MS and Birmingham or Montgomery, AL. Both states use CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Mississippi', item: 'https://whattime.city/mississippi/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function MississippiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Mississippi</h1>
      <p className="text-sm text-slate-500 mb-6">Central Time (CST/CDT) · Jackson · UTC−6 / UTC−5</p>
      <MississippiClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Mississippi City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'New Orleans time', href: '/new-orleans/' }, { label: 'Atlanta time', href: '/atlanta/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Alabama', href: '/alabama/' }, { label: 'Time in Louisiana', href: '/louisiana/' }, { label: 'Time in Tennessee', href: '/tennessee/' }, { label: 'Time in Georgia', href: '/georgia-state/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Mississippi: America/Chicago (CST/CDT, Central Time).</footer>
    </ContentPageWrapper>
  )
}
