import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import BangladeshClockClient from './BangladeshClockClient'

export const metadata: Metadata = {
  title: 'Time in Bangladesh Now — BST (UTC+6) · Dhaka · No DST',
  description: 'What time is it in Bangladesh right now? Bangladesh uses Bangladesh Standard Time (BST, UTC+6) year-round with no Daylight Saving Time. Live Dhaka clock, Bangladesh vs world cities.',
  keywords: ['time in bangladesh', 'bangladesh time now', 'what time is it in bangladesh', 'dhaka time', 'bangladesh time zone', 'BST bangladesh', 'bangladesh utc+6', 'chittagong time', 'bangladesh time vs uk', 'bangladesh time vs usa', 'bangladesh time vs india'],
  alternates: { canonical: 'https://whattime.city/bangladesh/' },
  openGraph: { title: 'Current Time in Bangladesh — BST (UTC+6) · No DST', description: 'Live Bangladesh time. Dhaka on BST (UTC+6) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/bangladesh/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bangladesh right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bangladesh uses Bangladesh Standard Time (BST, UTC+6) year-round. All cities — Dhaka, Chittagong, Khulna, Sylhet, and Rajshahi — are in the same time zone. Bangladesh does not observe Daylight Saving Time. The live clock above shows the current time in Bangladesh.' } },
    { '@type': 'Question', name: 'What time zone is Dhaka in?', acceptedAnswer: { '@type': 'Answer', text: 'Dhaka uses Bangladesh Standard Time (BST, UTC+6). The IANA identifier is Asia/Dhaka. BST (UTC+6) should not be confused with British Summer Time (BST, UTC+1). Bangladesh is 30 minutes ahead of India (IST, UTC+5:30) and 1 hour ahead of Pakistan (PKT, UTC+5).' } },
    { '@type': 'Question', name: 'Does Bangladesh observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Bangladesh does not currently observe Daylight Saving Time. Bangladesh briefly experimented with DST in 2009–2010 but abolished it. BST (UTC+6) is fixed year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Bangladesh and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Dhaka (BST, UTC+6) is 6 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 5 hours ahead. Since Bangladesh has no DST, the difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Bangladesh and India?', acceptedAnswer: { '@type': 'Answer', text: 'Bangladesh (BST, UTC+6) is 30 minutes ahead of India (IST, UTC+5:30). When it is 12:00 noon in Dhaka, it is 11:30 AM in Kolkata and Mumbai. Neither country observes DST, so this 30-minute gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Bangladesh and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Dhaka (BST, UTC+6) is 11 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 10 hours. Dhaka is 14 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bangladesh', item: 'https://whattime.city/bangladesh/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function BangladeshTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Bangladesh</h1>
      <p className="text-sm text-slate-500 mb-6">Bangladesh Standard Time (BST) · UTC+6 · No Daylight Saving Time</p>
      <BangladeshClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Bangladesh & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Dhaka time', href: '/dhaka/' }, { label: 'Kolkata time', href: '/kolkata/' }, { label: 'Singapore time', href: '/singapore/' }, { label: 'Time in India', href: '/india/' }, { label: 'Time in Pakistan', href: '/pakistan/' }, { label: 'Time in Thailand', href: '/thailand/' }, { label: 'Dhaka → London', href: '/time/dhaka/london/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Bangladesh: Asia/Dhaka (BST UTC+6, no DST).</footer>
    </ContentPageWrapper>
  )
}
