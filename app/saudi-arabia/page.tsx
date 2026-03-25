import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SaudiArabiaClockClient from './SaudiArabiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Saudi Arabia Now — AST (UTC+3) · Riyadh, Jeddah · No DST',
  description: 'What time is it in Saudi Arabia right now? Saudi Arabia uses Arabia Standard Time (AST, UTC+3) year-round with no Daylight Saving Time. Live Riyadh clock, Saudi Arabia vs world cities, and best time to call.',
  keywords: ['time in saudi arabia', 'saudi arabia time now', 'what time is it in saudi arabia', 'riyadh time', 'jeddah time', 'saudi arabia time zone', 'AST time zone', 'saudi arabia utc+3', 'saudi time vs usa', 'saudi time vs uk', 'saudi time vs india', 'mecca time'],
  alternates: { canonical: 'https://whattime.city/saudi-arabia/' },
  openGraph: { title: 'Current Time in Saudi Arabia — AST (UTC+3) · No Daylight Saving Time', description: 'Live Saudi Arabia time. AST (UTC+3) used year-round. No DST. Riyadh, Jeddah, Mecca, Medina, Dammam all on the same time.', type: 'website', url: 'https://whattime.city/saudi-arabia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Saudi Arabia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Saudi Arabia uses Arabia Standard Time (AST, UTC+3) year-round. All cities — Riyadh, Jeddah, Mecca, Medina, Dammam, and Khobar — are on the same time. Saudi Arabia has never observed Daylight Saving Time. The live clock above shows the current time in Saudi Arabia.' } },
    { '@type': 'Question', name: 'What time zone is Saudi Arabia in?', acceptedAnswer: { '@type': 'Answer', text: 'Saudi Arabia uses Arabia Standard Time (AST, UTC+3). The IANA identifier is Asia/Riyadh. Saudi Arabia shares UTC+3 with Turkey (TRT), Russia\'s Moscow Time (MSK), and East African Time (EAT) used in Kenya, Ethiopia, and Tanzania.' } },
    { '@type': 'Question', name: 'Does Saudi Arabia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Saudi Arabia has never observed Daylight Saving Time. AST (UTC+3) is used year-round. Like most Gulf states, Saudi Arabia views DST as incompatible with its climate and work patterns, where midday sun is avoided regardless of clock setting.' } },
    { '@type': 'Question', name: 'What is the time difference between Saudi Arabia and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Riyadh (AST, UTC+3) is 8 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 7 hours. Riyadh is 11 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Saudi Arabia and India?', acceptedAnswer: { '@type': 'Answer', text: 'Mumbai (IST, UTC+5:30) is 2.5 hours ahead of Riyadh (AST, UTC+3). Both regions have no DST, so this 2.5-hour gap is constant year-round. The large Indian expatriate community in Saudi Arabia makes this one of the most-searched time differences in the region.' } },
    { '@type': 'Question', name: 'What is the time difference between Saudi Arabia and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Riyadh (AST, UTC+3) is 3 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 2 hours. Since Saudi Arabia has no DST, this difference changes only when the UK adjusts its clocks.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Saudi Arabia', item: 'https://whattime.city/saudi-arabia/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function SaudiArabiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Saudi Arabia</h1>
      <p className="text-sm text-slate-500 mb-6">Arabia Standard Time (AST) · UTC+3 · No Daylight Saving Time</p>
      <SaudiArabiaClockClient />
      <CountryFactsSection hubSlug="saudi-arabia" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Saudi Arabia City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Riyadh time', href: '/riyadh/' }, { label: 'Jeddah time', href: '/jeddah/' }, { label: 'Mecca time', href: '/mecca/' }, { label: 'Riyadh → London', href: '/time/riyadh/london/' }, { label: 'Riyadh → New York', href: '/time/riyadh/new-york/' }, { label: 'Riyadh → Mumbai', href: '/time/riyadh/mumbai/' }, { label: 'Riyadh → Dubai', href: '/time/riyadh/dubai/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Saudi Arabia: Asia/Riyadh (AST UTC+3, no DST).</footer>
    </ContentPageWrapper>
  )
}
