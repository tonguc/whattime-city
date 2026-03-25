import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SouthCarolinaClockClient from './SouthCarolinaClockClient'

export const metadata: Metadata = {
  title: 'Time in South Carolina Now — EST/EDT · Columbia · Eastern Time Zone',
  description: 'What time is it in South Carolina right now? South Carolina uses Eastern Time (EST/EDT). Columbia is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock and best time to call.',
  keywords: ['time in south carolina', 'south carolina time now', 'what time is it in south carolina', 'columbia sc time', 'south carolina time zone', 'EST EDT south carolina', 'south carolina utc-5', 'charleston time', 'myrtle beach time', 'greenville sc time', 'south carolina eastern time'],
  alternates: { canonical: 'https://whattime.city/south-carolina/' },
  openGraph: { title: 'Current Time in South Carolina — EST/EDT · Columbia', description: 'Live South Carolina time. Columbia, Charleston, and Myrtle Beach on Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/south-carolina/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in South Carolina right now?', acceptedAnswer: { '@type': 'Answer', text: 'South Carolina uses Eastern Time. Columbia (capital), Charleston, Myrtle Beach, Greenville, and all South Carolina cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The live clock above shows the current time in South Carolina.' } },
    { '@type': 'Question', name: 'What time zone is Charleston, SC in?', acceptedAnswer: { '@type': 'Answer', text: 'Charleston, South Carolina is in the Eastern Time zone (America/New_York). Charleston uses EST (UTC−5) during standard time and EDT (UTC−4) during Daylight Saving Time. Charleston is on the same time as New York, Atlanta, and Washington D.C.' } },
    { '@type': 'Question', name: 'Does South Carolina observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. South Carolina observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between South Carolina and California?', acceptedAnswer: { '@type': 'Answer', text: 'South Carolina (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is noon in Columbia (EST/EDT), it is 9:00 AM in Los Angeles (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between South Carolina and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Columbia, SC (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Columbia moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK observe summer time, Columbia (EDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is South Carolina on the same time as North Carolina?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. South Carolina and North Carolina are both entirely in the Eastern Time zone. There is no time difference between Columbia, SC and Charlotte or Raleigh, NC. Both states use EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in South Carolina', item: 'https://whattime.city/south-carolina/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function SouthCarolinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in South Carolina</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern Time (EST/EDT) · Columbia · UTC−5 / UTC−4</p>
      <SouthCarolinaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">South Carolina City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Atlanta time', href: '/atlanta/' }, { label: 'Charlotte time', href: '/charlotte/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time in Georgia', href: '/georgia-state/' }, { label: 'Time in North Carolina', href: '/north-carolina/' }, { label: 'Time in Virginia', href: '/virginia/' }, { label: 'Time in Florida', href: '/florida/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. South Carolina: America/New_York (EST/EDT, Eastern Time).</footer>
    </ContentPageWrapper>
  )
}
