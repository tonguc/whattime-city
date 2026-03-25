import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import ConnecticutClockClient from './ConnecticutClockClient'

export const metadata: Metadata = {
  title: 'Time in Connecticut Now — EST/EDT · Hartford · Eastern Time Zone',
  description: 'What time is it in Connecticut right now? Connecticut uses Eastern Time (EST/EDT). Hartford is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock and best time to call.',
  keywords: ['time in connecticut', 'connecticut time now', 'what time is it in connecticut', 'hartford time', 'connecticut time zone', 'EST EDT connecticut', 'connecticut utc-5', 'bridgeport time', 'new haven time', 'stamford time', 'connecticut time vs uk', 'connecticut time vs california'],
  alternates: { canonical: 'https://whattime.city/connecticut/' },
  openGraph: { title: 'Current Time in Connecticut — EST/EDT · Hartford', description: 'Live Connecticut time. Hartford, New Haven, Bridgeport on Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/connecticut/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Connecticut right now?', acceptedAnswer: { '@type': 'Answer', text: 'Connecticut uses Eastern Time. Hartford, Bridgeport, New Haven, Stamford, and all Connecticut cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The live clock above shows the current time in Connecticut.' } },
    { '@type': 'Question', name: 'What time zone is Hartford in?', acceptedAnswer: { '@type': 'Answer', text: 'Hartford is in the Eastern Time zone (America/New_York). Hartford uses EST (UTC−5) during standard time and EDT (UTC−4) during Daylight Saving Time. Hartford is on the same time as New York City, Boston, and Philadelphia — all in the northeastern US Eastern Time corridor.' } },
    { '@type': 'Question', name: 'Does Connecticut observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connecticut observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Connecticut and California?', acceptedAnswer: { '@type': 'Answer', text: 'Connecticut (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is noon in Hartford, it is 9:00 AM in Los Angeles. Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Connecticut and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Hartford (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Hartford moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK are on summer time, Hartford (EDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Connecticut on the same time as New York?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connecticut and New York are in the same time zone — Eastern Time (America/New_York). There is no time difference between Hartford or any Connecticut city and New York City. Both use EST (UTC−5) in winter and EDT (UTC−4) in summer.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Connecticut', item: 'https://whattime.city/connecticut/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function ConnecticutTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Connecticut</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Eastern Time (EST/EDT) · Hartford · UTC−5 / UTC−4</p>
      <ConnecticutClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Connecticut City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'New York time', href: '/new-york/' }, { label: 'Boston time', href: '/boston/' }, { label: 'Philadelphia time', href: '/philadelphia/' }, { label: 'Time in New York State', href: '/new-york-state/' }, { label: 'Time in Massachusetts', href: '/massachusetts/' }, { label: 'Time in New Jersey', href: '/new-jersey/' }, { label: 'Time in Pennsylvania', href: '/pennsylvania/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Connecticut: America/New_York (EST/EDT, Eastern Time).</footer>
    </ContentPageWrapper>
  )
}
