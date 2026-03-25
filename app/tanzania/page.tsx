import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TanzaniaClockClient from './TanzaniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Tanzania Now — EAT (UTC+3) · Dar es Salaam · No DST',
  description: 'What time is it in Tanzania right now? Tanzania uses East Africa Time (EAT, UTC+3) year-round with no Daylight Saving Time. Live Dar es Salaam clock, Tanzania vs world cities.',
  keywords: ['time in tanzania', 'tanzania time now', 'what time is it in tanzania', 'dar es salaam time', 'tanzania time zone', 'EAT tanzania', 'tanzania utc+3', 'dodoma time', 'zanzibar time', 'tanzania time vs uk', 'tanzania time vs usa', 'east africa time'],
  alternates: { canonical: 'https://whattime.city/tanzania/' },
  openGraph: { title: 'Current Time in Tanzania — EAT (UTC+3) · No DST', description: 'Live Tanzania time. Dar es Salaam and Zanzibar on EAT (UTC+3) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/tanzania/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Tanzania right now?', acceptedAnswer: { '@type': 'Answer', text: 'Tanzania uses East Africa Time (EAT, UTC+3) year-round. Dar es Salaam, Dodoma (capital), Arusha, Zanzibar, and all Tanzanian cities are on UTC+3 with no Daylight Saving Time. The live clock above shows the current time in Tanzania.' } },
    { '@type': 'Question', name: 'What time zone is Dar es Salaam in?', acceptedAnswer: { '@type': 'Answer', text: 'Dar es Salaam uses East Africa Time (EAT, UTC+3). The IANA identifier is Africa/Dar_es_Salaam. Tanzania shares EAT (UTC+3) with Kenya, Uganda, Ethiopia, Somalia, and South Sudan. All of these countries observe the same time with no Daylight Saving Time.' } },
    { '@type': 'Question', name: 'Does Tanzania observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Tanzania does not observe Daylight Saving Time. EAT (UTC+3) is fixed year-round. Located near the equator, Tanzania has minimal seasonal daylight variation, making DST impractical.' } },
    { '@type': 'Question', name: 'What is the time difference between Tanzania and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Dar es Salaam (EAT, UTC+3) is 3 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 2 hours. Since Tanzania has no DST, the difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Tanzania and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Dar es Salaam (EAT, UTC+3) is 8 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 7 hours. Dar es Salaam is 11 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'Is Zanzibar on the same time as mainland Tanzania?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Zanzibar is on the same time as mainland Tanzania — both use East Africa Time (EAT, UTC+3). The Zanzibar archipelago, though a semi-autonomous region, is part of Tanzania and shares the same time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Tanzania', item: 'https://whattime.city/tanzania/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function TanzaniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Tanzania</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">East Africa Time (EAT) · UTC+3 · No Daylight Saving Time</p>
      <TanzaniaClockClient />
      <CountryFactsSection hubSlug="tanzania" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Tanzania & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Nairobi time', href: '/nairobi/' }, { label: 'Dubai time', href: '/dubai/' }, { label: 'Cairo time', href: '/cairo/' }, { label: 'Time in Kenya', href: '/kenya/' }, { label: 'Time in Ethiopia', href: '/ethiopia/' }, { label: 'Time in South Africa', href: '/south-africa/' }, { label: 'Time in Saudi Arabia', href: '/saudi-arabia/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Tanzania: Africa/Dar_es_Salaam (EAT UTC+3, no DST).</footer>
    </ContentPageWrapper>
  )
}
