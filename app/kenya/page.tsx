import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import KenyaClockClient from './KenyaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Kenya Now — EAT (UTC+3) · Nairobi, Mombasa · No DST',
  description: 'What time is it in Kenya right now? Kenya uses East Africa Time (EAT, UTC+3) year-round with no Daylight Saving Time. Live Nairobi clock, Kenya vs world cities, and best time to call.',
  keywords: ['time in kenya', 'kenya time now', 'what time is it in kenya', 'nairobi time', 'kenya time zone', 'EAT time zone', 'east africa time', 'kenya utc+3', 'kenya no daylight saving', 'nairobi time now', 'kenya time vs usa', 'kenya time vs uk', 'kenya time vs india', 'mombasa time'],
  alternates: { canonical: 'https://whattime.city/kenya/' },
  openGraph: { title: 'Current Time in Kenya — EAT (UTC+3) · No Daylight Saving Time', description: 'Live Kenya time. East Africa Time (EAT, UTC+3) used year-round. No DST. Nairobi, Mombasa, Kisumu, Nakuru all on the same time.', type: 'website', url: 'https://whattime.city/kenya/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kenya right now?', acceptedAnswer: { '@type': 'Answer', text: 'Kenya uses East Africa Time (EAT, UTC+3) year-round. All cities — Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret — are on the same time. Kenya does not observe Daylight Saving Time. The live clock above shows the current time in Kenya.' } },
    { '@type': 'Question', name: 'What time zone is Kenya in?', acceptedAnswer: { '@type': 'Answer', text: 'Kenya uses East Africa Time (EAT, UTC+3). The IANA identifier is Africa/Nairobi. Kenya shares EAT (UTC+3) with Ethiopia, Tanzania, Uganda, Rwanda, Burundi, and Somalia. EAT is the same UTC offset as Moscow Time (MSK), Turkey Time (TRT), and Arabia Standard Time (AST).' } },
    { '@type': 'Question', name: 'Does Kenya observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Kenya does not observe Daylight Saving Time. EAT (UTC+3) is used year-round. Kenya lies near the equator, where day length varies little across the year, making DST impractical.' } },
    { '@type': 'Question', name: 'What is the time difference between Kenya and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Nairobi (EAT, UTC+3) is 8 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 7 hours. Nairobi is 11 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Kenya and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Nairobi (EAT, UTC+3) is 3 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 2 hours. Since Kenya has no DST, this difference changes only when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Kenya and India?', acceptedAnswer: { '@type': 'Answer', text: 'Mumbai (IST, UTC+5:30) is 2.5 hours ahead of Nairobi (EAT, UTC+3). Both regions have no DST, so this 2.5-hour gap is constant year-round. Kenya has a significant Indian diaspora community, making this a commonly searched time difference.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kenya', item: 'https://whattime.city/kenya/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function KenyaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Kenya</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">East Africa Time (EAT) · UTC+3 · No Daylight Saving Time</p>
      <KenyaClockClient />
      <CountryFactsSection hubSlug="kenya" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Kenya City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Nairobi time', href: '/nairobi/' }, { label: 'Mombasa time', href: '/mombasa/' }, { label: 'Nairobi → London', href: '/time/nairobi/london/' }, { label: 'Nairobi → New York', href: '/time/nairobi/new-york/' }, { label: 'Nairobi → Dubai', href: '/time/nairobi/dubai/' }, { label: 'Nairobi → Mumbai', href: '/time/nairobi/mumbai/' }, { label: 'Nairobi → Singapore', href: '/time/nairobi/singapore/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Kenya: Africa/Nairobi (EAT UTC+3, no DST).</footer>
    </ContentPageWrapper>
  )
}
