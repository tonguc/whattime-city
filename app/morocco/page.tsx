import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MoroccoClockClient from './MoroccoClockClient'

export const metadata: Metadata = {
  title: 'Time in Morocco Now — WET/WEST (UTC+0/+1) · Casablanca · Ramadan DST',
  description: 'What time is it in Morocco right now? Morocco uses WET (UTC+0) in winter and WEST (UTC+1) in summer, but suspends DST during Ramadan. Live Casablanca clock and best time to call.',
  keywords: ['time in morocco', 'morocco time now', 'what time is it in morocco', 'casablanca time', 'morocco time zone', 'WET WEST morocco', 'morocco utc+1', 'rabat time', 'marrakech time', 'morocco ramadan time', 'morocco dst', 'morocco time vs uk', 'morocco time vs usa'],
  alternates: { canonical: 'https://whattime.city/morocco/' },
  openGraph: { title: 'Current Time in Morocco — WET/WEST · Ramadan DST Suspension', description: 'Live Morocco time. WET (UTC+0) winter, WEST (UTC+1) summer — but clocks revert to UTC+0 during Ramadan each year.', type: 'website', url: 'https://whattime.city/morocco/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Morocco right now?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco uses Western European Time (WET, UTC+0) in winter and Western European Summer Time (WEST, UTC+1) in summer. Uniquely, Morocco suspends Daylight Saving Time during Ramadan each year, reverting to UTC+0 for the duration of the holy month. The live clock above shows the current local time in Morocco.' } },
    { '@type': 'Question', name: 'What time zone is Morocco in?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco uses WET (Western European Time, UTC+0) as its standard time and WEST (UTC+1) during summer DST. The IANA identifier is Africa/Casablanca. Morocco shares its standard time with Portugal, Iceland, and the UK (in winter). Importantly, Morocco pauses DST during Ramadan, returning to UTC+0 before resuming WEST after Eid al-Fitr.' } },
    { '@type': 'Question', name: 'Does Morocco observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but with a unique exception. Morocco observes DST (clocks spring forward to UTC+1) but suspends it every year during Ramadan, reverting to UTC+0. This means Morocco has four clock changes per year in years when Ramadan overlaps with the DST period. The exact dates change annually with the Islamic calendar.' } },
    { '@type': 'Question', name: 'What is the time difference between Morocco and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco (WET, UTC+0) is on the same time as London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1) and Morocco\'s non-Ramadan summer (WEST, UTC+1), they remain the same. During Ramadan when Morocco reverts to UTC+0 but the UK is on BST (UTC+1), the UK is 1 hour ahead of Morocco.' } },
    { '@type': 'Question', name: 'What is the time difference between Morocco and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Casablanca (WET, UTC+0) is 5 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time, the gap narrows to 4 hours. During Moroccan summer (WEST, UTC+1), Casablanca is 6 hours ahead of New York in winter. The Ramadan suspension creates additional complexity each year.' } },
    { '@type': 'Question', name: 'Why does Morocco suspend DST during Ramadan?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco suspends Daylight Saving Time during Ramadan so that the evening Iftar (breaking of the fast at sunset) occurs at a more practical hour for Muslims. With DST, sunset would come an hour later, making the fasting day effectively longer. Reverting to standard time (UTC+0) helps align the Islamic fasting schedule with daily life.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Morocco', item: 'https://whattime.city/morocco/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function MoroccoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Morocco</h1>
      <p className="text-sm text-slate-500 mb-6">Western European Time (WET/WEST) · UTC+0 / UTC+1 · DST suspended during Ramadan</p>
      <MoroccoClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Morocco & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Casablanca time', href: '/casablanca/' }, { label: 'London time', href: '/london/' }, { label: 'Madrid time', href: '/madrid/' }, { label: 'Paris time', href: '/paris/' }, { label: 'Time in Spain', href: '/spain/' }, { label: 'Time in Egypt', href: '/egypt/' }, { label: 'Casablanca → London', href: '/time/casablanca/london/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Morocco: Africa/Casablanca (WET UTC+0 / WEST UTC+1, DST suspended during Ramadan).</footer>
    </ContentPageWrapper>
  )
}
