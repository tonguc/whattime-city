import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NepalClockClient from './NepalClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Nepal Now — NPT (UTC+5:45) · Kathmandu · 45-Minute Offset',
  description: 'What time is it in Nepal right now? Nepal uses Nepal Time (NPT, UTC+5:45) — a rare 45-minute offset. No Daylight Saving Time. Live Kathmandu clock and best time to call.',
  keywords: ['time in nepal', 'nepal time now', 'what time is it in nepal', 'kathmandu time', 'nepal time zone', 'NPT nepal', 'nepal utc+5:45', 'nepal 45 minute offset', 'nepal time vs india', 'nepal time vs uk', 'nepal time vs usa'],
  alternates: { canonical: 'https://whattime.city/nepal/' },
  openGraph: { title: 'Current Time in Nepal — NPT (UTC+5:45) · 45-Minute Offset', description: 'Live Nepal time. Kathmandu on NPT (UTC+5:45) — a unique 45-minute offset, 15 minutes ahead of India. No DST.', type: 'website', url: 'https://whattime.city/nepal/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Nepal right now?', acceptedAnswer: { '@type': 'Answer', text: 'Nepal uses Nepal Time (NPT, UTC+5:45) year-round. Kathmandu, Pokhara, Lalitpur, and all Nepali cities are on UTC+5:45 with no Daylight Saving Time. The live clock above shows the current time in Nepal.' } },
    { '@type': 'Question', name: 'Why does Nepal use a 45-minute time offset?', acceptedAnswer: { '@type': 'Answer', text: 'Nepal uses UTC+5:45, one of the world\'s rarest time offsets — a 45-minute deviation from whole-hour UTC zones. This offset was chosen to differentiate Nepal from neighboring India (UTC+5:30) while reflecting Nepal\'s own geographic meridian. Nepal is the only country in the world with a UTC+5:45 offset. The 15-minute difference from India reinforces Nepali national identity and sovereignty.' } },
    { '@type': 'Question', name: 'Does Nepal observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Nepal does not observe Daylight Saving Time. NPT (UTC+5:45) is fixed year-round. Nepal is located between roughly 80°E and 88°E longitude, and its latitude means seasonal daylight variation is manageable without clock changes.' } },
    { '@type': 'Question', name: 'What is the time difference between Nepal and India?', acceptedAnswer: { '@type': 'Answer', text: 'Nepal (NPT, UTC+5:45) is exactly 15 minutes ahead of India (IST, UTC+5:30). When it is 12:00 noon in Kolkata or Mumbai, it is 12:15 PM in Kathmandu. Neither country observes DST, so this 15-minute difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Nepal and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Kathmandu (NPT, UTC+5:45) is 5 hours 45 minutes ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), Kathmandu is 4 hours 45 minutes ahead of London. Since Nepal has no DST, the difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Nepal and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Kathmandu (NPT, UTC+5:45) is 10 hours 45 minutes ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 9 hours 45 minutes. Kathmandu is 13 hours 45 minutes ahead of Los Angeles (PST, UTC−8) in winter.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Nepal', item: 'https://whattime.city/nepal/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function NepalTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Nepal</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Nepal Time (NPT) · UTC+5:45 · 45-minute offset · No DST</p>
      <NepalClockClient />
      <CountryFactsSection hubSlug="nepal" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Nepal & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Kolkata time', href: '/kolkata/' }, { label: 'Dhaka time', href: '/dhaka/' }, { label: 'Karachi time', href: '/karachi/' }, { label: 'Time in India', href: '/india/' }, { label: 'Time in Bangladesh', href: '/bangladesh/' }, { label: 'Time in Pakistan', href: '/pakistan/' }, { label: 'Time in Myanmar', href: '/myanmar/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Nepal: Asia/Kathmandu (NPT UTC+5:45, no DST).</footer>
    </ContentPageWrapper>
  )
}
