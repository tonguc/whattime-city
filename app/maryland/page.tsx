import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MarylandClockClient from './MarylandClockClient'

export const metadata: Metadata = {
  title: 'Time in Maryland Now — EST/EDT · Baltimore · Eastern Time Zone',
  description: 'What time is it in Maryland right now? Maryland uses Eastern Time (EST/EDT). Baltimore is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock and best time to call.',
  keywords: ['time in maryland', 'maryland time now', 'what time is it in maryland', 'baltimore time', 'maryland time zone', 'EST EDT maryland', 'maryland utc-5', 'annapolis time', 'silver spring time', 'maryland time vs uk', 'maryland time vs california', 'maryland eastern time'],
  alternates: { canonical: 'https://whattime.city/maryland/' },
  openGraph: { title: 'Current Time in Maryland — EST/EDT · Baltimore', description: 'Live Maryland time. Baltimore and Annapolis on Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/maryland/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Maryland right now?', acceptedAnswer: { '@type': 'Answer', text: 'Maryland uses Eastern Time. Baltimore, Annapolis, Silver Spring, Rockville, and all Maryland cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The live clock above shows the current time in Maryland.' } },
    { '@type': 'Question', name: 'What time zone is Baltimore in?', acceptedAnswer: { '@type': 'Answer', text: 'Baltimore is in the Eastern Time zone (America/New_York). Baltimore uses EST (UTC−5) during standard time (November to March) and EDT (UTC−4) during Daylight Saving Time (March to November). Baltimore is on the same time as Washington D.C. (a neighboring jurisdiction), New York City, Philadelphia, and Boston.' } },
    { '@type': 'Question', name: 'Does Maryland observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Maryland observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Maryland and California?', acceptedAnswer: { '@type': 'Answer', text: 'Maryland (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is noon in Baltimore (EST/EDT), it is 9:00 AM in Los Angeles (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Maryland and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Baltimore (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Baltimore moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK are on summer time, Baltimore (EDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Maryland on Eastern Time or Central Time?', acceptedAnswer: { '@type': 'Answer', text: 'Maryland is entirely on Eastern Time. All of Maryland — including Baltimore, Annapolis, Rockville, Silver Spring, Frederick, and all other cities — uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) in summer.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Maryland', item: 'https://whattime.city/maryland/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function MarylandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Maryland</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern Time (EST/EDT) · Baltimore · UTC−5 / UTC−4</p>
      <MarylandClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Maryland City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Baltimore time', href: '/baltimore/' }, { label: 'Washington D.C. time', href: '/washington-dc/' }, { label: 'Philadelphia time', href: '/philadelphia/' }, { label: 'Time in Virginia', href: '/virginia/' }, { label: 'Time in Pennsylvania', href: '/pennsylvania/' }, { label: 'Time in New Jersey', href: '/new-jersey/' }, { label: 'Time in Massachusetts', href: '/massachusetts/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Maryland: America/New_York (EST/EDT, Eastern Time).</footer>
    </ContentPageWrapper>
  )
}
