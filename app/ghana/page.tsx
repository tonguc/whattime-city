import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import GhanaClockClient from './GhanaClockClient'

export const metadata: Metadata = {
  title: 'Time in Ghana Now — GMT (UTC+0) · Accra · No DST',
  description: 'What time is it in Ghana right now? Ghana uses Greenwich Mean Time (GMT, UTC+0) year-round with no Daylight Saving Time. Live Accra clock, Ghana vs world cities, and best time to call.',
  keywords: ['time in ghana', 'ghana time now', 'what time is it in ghana', 'accra time', 'ghana time zone', 'GMT ghana', 'ghana utc+0', 'kumasi time', 'ghana time vs uk', 'ghana time vs usa', 'ghana time vs nigeria', 'west africa time'],
  alternates: { canonical: 'https://whattime.city/ghana/' },
  openGraph: { title: 'Current Time in Ghana — GMT (UTC+0) · No DST', description: 'Live Ghana time. Accra on GMT (UTC+0) year-round — no Daylight Saving Time. Same time as London in winter.', type: 'website', url: 'https://whattime.city/ghana/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Ghana right now?', acceptedAnswer: { '@type': 'Answer', text: 'Ghana uses Greenwich Mean Time (GMT, UTC+0) year-round. Accra, Kumasi, Tamale, and all Ghanaian cities are on UTC+0 with no Daylight Saving Time. The live clock above shows the current time in Ghana.' } },
    { '@type': 'Question', name: 'What time zone is Accra in?', acceptedAnswer: { '@type': 'Answer', text: 'Accra uses Greenwich Mean Time (GMT, UTC+0). The IANA identifier is Africa/Accra. Accra shares UTC+0 with Abidjan (Ivory Coast), Dakar (Senegal), and Reykjavik (Iceland). Unlike the UK, Ghana does not observe Daylight Saving Time, so GMT in Ghana is fixed year-round.' } },
    { '@type': 'Question', name: 'Does Ghana observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Ghana does not observe Daylight Saving Time. GMT (UTC+0) is fixed year-round. Ghana is near the equator where seasonal daylight variation is minimal, making DST unnecessary.' } },
    { '@type': 'Question', name: 'What is the time difference between Ghana and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Accra (GMT, UTC+0) is on the same time as London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), London is 1 hour ahead of Accra. Since Ghana has no DST, the difference only changes when the UK adjusts its clocks — Ghana and the UK are on the same time for about half the year.' } },
    { '@type': 'Question', name: 'What is the time difference between Ghana and Nigeria?', acceptedAnswer: { '@type': 'Answer', text: 'Accra (GMT, UTC+0) is 1 hour behind Lagos (WAT, UTC+1). Nigeria uses West Africa Time (WAT, UTC+1) year-round, which is always 1 hour ahead of Ghana. Despite being neighbors in West Africa, the two countries are in different time zones.' } },
    { '@type': 'Question', name: 'What is the time difference between Ghana and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Accra (GMT, UTC+0) is 5 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), Accra is 4 hours ahead of New York. Accra is 8 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Ghana', item: 'https://whattime.city/ghana/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function GhanaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Ghana</h1>
      <p className="text-sm text-slate-500 mb-6">Greenwich Mean Time (GMT) · UTC+0 · No Daylight Saving Time</p>
      <GhanaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Ghana & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Accra time', href: '/accra/' }, { label: 'Lagos time', href: '/lagos/' }, { label: 'London time', href: '/london/' }, { label: 'Time in Nigeria', href: '/nigeria/' }, { label: 'Time in Kenya', href: '/kenya/' }, { label: 'Time in South Africa', href: '/south-africa/' }, { label: 'Accra → New York', href: '/time/accra/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Ghana: Africa/Accra (GMT UTC+0, no DST).</footer>
    </ContentPageWrapper>
  )
}
