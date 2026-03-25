import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NewJerseyClockClient from './NewJerseyClockClient'

export const metadata: Metadata = {
  title: 'Time in New Jersey Now — EST/EDT · Newark · Eastern Time Zone',
  description: 'What time is it in New Jersey right now? New Jersey uses Eastern Time (EST/EDT). Newark is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock and best time to call.',
  keywords: ['time in new jersey', 'new jersey time now', 'what time is it in new jersey', 'newark time', 'new jersey time zone', 'EST EDT new jersey', 'NJ time', 'jersey city time', 'trenton time', 'new jersey time vs uk', 'new jersey time vs california', 'new jersey eastern time'],
  alternates: { canonical: 'https://whattime.city/new-jersey/' },
  openGraph: { title: 'Current Time in New Jersey — EST/EDT · Newark', description: 'Live New Jersey time. Newark, Jersey City, and Trenton on Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/new-jersey/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in New Jersey right now?', acceptedAnswer: { '@type': 'Answer', text: 'New Jersey uses Eastern Time. Newark, Jersey City, Trenton, Paterson, Elizabeth, and all New Jersey cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. New Jersey is in the same time zone as neighboring New York City. The live clock above shows the current time in New Jersey.' } },
    { '@type': 'Question', name: 'What time zone is New Jersey in?', acceptedAnswer: { '@type': 'Answer', text: 'New Jersey is in the Eastern Time zone (America/New_York). New Jersey uses EST (UTC−5) during standard time (November to March) and EDT (UTC−4) during Daylight Saving Time (March to November). New Jersey shares its time zone with New York, Pennsylvania, and all other states along the northeastern US coast.' } },
    { '@type': 'Question', name: 'Does New Jersey observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. New Jersey observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between New Jersey and California?', acceptedAnswer: { '@type': 'Answer', text: 'New Jersey (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is noon in Newark (EST/EDT), it is 9:00 AM in Los Angeles (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between New Jersey and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Newark, NJ (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Newark moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK are on summer time, Newark (EDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is New Jersey on the same time as New York City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. New Jersey and New York City are in the same time zone — Eastern Time (America/New_York). There is no time difference between Newark, Jersey City, or any New Jersey city and New York City. They both use EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in New Jersey', item: 'https://whattime.city/new-jersey/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function NewJerseyTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in New Jersey</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Eastern Time (EST/EDT) · Newark · UTC−5 / UTC−4</p>
      <NewJerseyClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">New Jersey City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'New York time', href: '/new-york/' }, { label: 'Philadelphia time', href: '/philadelphia/' }, { label: 'Boston time', href: '/boston/' }, { label: 'Time in New York State', href: '/new-york-state/' }, { label: 'Time in Pennsylvania', href: '/pennsylvania/' }, { label: 'Time in Maryland', href: '/maryland/' }, { label: 'Time in Massachusetts', href: '/massachusetts/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. New Jersey: America/New_York (EST/EDT, Eastern Time).</footer>
    </ContentPageWrapper>
  )
}
