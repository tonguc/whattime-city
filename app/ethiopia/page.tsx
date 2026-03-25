import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import EthiopiaClockClient from './EthiopiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Ethiopia Now — EAT (UTC+3) · Addis Ababa · No DST',
  description: 'What time is it in Ethiopia right now? Ethiopia uses East Africa Time (EAT, UTC+3) year-round with no Daylight Saving Time. Live Addis Ababa clock, Ethiopia vs world cities.',
  keywords: ['time in ethiopia', 'ethiopia time now', 'what time is it in ethiopia', 'addis ababa time', 'ethiopia time zone', 'EAT ethiopia', 'ethiopia utc+3', 'ethiopia time vs uk', 'ethiopia time vs usa', 'ethiopia time vs kenya', 'east africa time'],
  alternates: { canonical: 'https://whattime.city/ethiopia/' },
  openGraph: { title: 'Current Time in Ethiopia — EAT (UTC+3) · No DST', description: 'Live Ethiopia time. Addis Ababa on EAT (UTC+3) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/ethiopia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Ethiopia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Ethiopia uses East Africa Time (EAT, UTC+3) year-round. All cities — Addis Ababa, Dire Dawa, Mekelle, Gondar, and Hawassa — are in the same time zone. Ethiopia does not observe Daylight Saving Time. The live clock above shows the current time in Ethiopia.' } },
    { '@type': 'Question', name: 'What time zone is Addis Ababa in?', acceptedAnswer: { '@type': 'Answer', text: 'Addis Ababa uses East Africa Time (EAT, UTC+3). The IANA identifier is Africa/Addis_Ababa. Ethiopia shares EAT (UTC+3) with Kenya, Somalia, Tanzania, Uganda, and South Sudan. Note: Ethiopia uses a unique 12-hour clock system starting at sunrise (6:00 AM is called "12 o\'clock" locally), though the international 24-hour clock is also widely used.' } },
    { '@type': 'Question', name: 'Does Ethiopia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Ethiopia does not observe Daylight Saving Time. EAT (UTC+3) is fixed year-round. Located near the equator, Ethiopia has minimal seasonal daylight variation, making DST impractical.' } },
    { '@type': 'Question', name: 'What is the time difference between Ethiopia and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Addis Ababa (EAT, UTC+3) is 3 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 2 hours. Since Ethiopia has no DST, the difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Ethiopia and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Addis Ababa (EAT, UTC+3) is 8 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 7 hours. Addis Ababa is 11 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the unique Ethiopian time system?', acceptedAnswer: { '@type': 'Answer', text: 'Ethiopia uses a traditional 12-hour clock that starts counting at sunrise (approximately 6:00 AM international time). So what is 7:00 AM internationally is "1 o\'clock" in Ethiopian local time, and 6:00 PM is "12 o\'clock" evening. This system is widely used in everyday life alongside the international clock.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Ethiopia', item: 'https://whattime.city/ethiopia/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function EthiopiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Ethiopia</h1>
      <p className="text-sm text-slate-500 mb-6">East Africa Time (EAT) · UTC+3 · No Daylight Saving Time</p>
      <EthiopiaClockClient />
      <CountryFactsSection hubSlug="ethiopia" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Ethiopia & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Nairobi time', href: '/nairobi/' }, { label: 'Cairo time', href: '/cairo/' }, { label: 'Dubai time', href: '/dubai/' }, { label: 'Time in Kenya', href: '/kenya/' }, { label: 'Time in Egypt', href: '/egypt/' }, { label: 'Time in South Africa', href: '/south-africa/' }, { label: 'Time in Saudi Arabia', href: '/saudi-arabia/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Ethiopia: Africa/Addis_Ababa (EAT UTC+3, no DST).</footer>
    </ContentPageWrapper>
  )
}
