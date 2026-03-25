import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import UtahClockClient from './UtahClockClient'

export const metadata: Metadata = {
  title: 'Time in Utah Now — MST/MDT · Salt Lake City · Mountain Time Zone',
  description: 'What time is it in Utah right now? Utah uses Mountain Time (MST/MDT). Salt Lake City is on MST (UTC−7) in winter and MDT (UTC−6) in summer. Live clock and best time to call.',
  keywords: ['time in utah', 'utah time now', 'what time is it in utah', 'salt lake city time', 'utah time zone', 'MST MDT utah', 'utah utc-7', 'provo time', 'st george time', 'utah mountain time', 'utah time vs eastern', 'utah time vs uk'],
  alternates: { canonical: 'https://whattime.city/utah/' },
  openGraph: { title: 'Current Time in Utah — MST/MDT · Salt Lake City', description: 'Live Utah time. Salt Lake City and Provo on Mountain Time — MST (UTC−7) in winter, MDT (UTC−6) in summer.', type: 'website', url: 'https://whattime.city/utah/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Utah right now?', acceptedAnswer: { '@type': 'Answer', text: 'Utah uses Mountain Time. Salt Lake City, Provo, Ogden, St. George, and all Utah cities are on MST (UTC−7) in winter and MDT (UTC−6) during Daylight Saving Time. The live clock above shows the current time in Utah.' } },
    { '@type': 'Question', name: 'What time zone is Salt Lake City in?', acceptedAnswer: { '@type': 'Answer', text: 'Salt Lake City is in the Mountain Time zone (America/Denver). Salt Lake City uses MST (UTC−7) during standard time (November to March) and MDT (UTC−6) during Daylight Saving Time (March to November). Salt Lake City is on the same time as Denver, Albuquerque, and Boise.' } },
    { '@type': 'Question', name: 'Does Utah observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Utah observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from MST UTC−7 to MDT UTC−6) and fall back 1 hour on the first Sunday in November. Note: neighboring Arizona does not observe DST, making Arizona the same time as Utah in summer but 1 hour behind Utah in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Utah and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Utah (Mountain Time) is always 2 hours behind New York (Eastern Time). When it is noon in New York, it is 10:00 AM in Salt Lake City. Both states observe DST on the same schedule, so the 2-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Utah and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Salt Lake City (MST, UTC−7) is 7 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Salt Lake City moves to MDT (UTC−6), making it 6 hours behind London (GMT). When both the US and UK are on summer time, Salt Lake City (MDT) is 7 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Utah and Arizona?', acceptedAnswer: { '@type': 'Answer', text: 'Utah (MST/MDT) and Arizona (MST year-round, no DST) differ seasonally. In winter (both on MST), Utah and Arizona are on the same time. In summer, Utah moves to MDT (UTC−6) but Arizona stays on MST (UTC−7), making most of Arizona 1 hour behind Utah from March to November. (The Navajo Nation in Arizona does observe MDT, matching Utah in summer.)' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Utah', item: 'https://whattime.city/utah/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function UtahTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Utah</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Mountain Time (MST/MDT) · Salt Lake City · UTC−7 / UTC−6</p>
      <UtahClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Utah City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Salt Lake City time', href: '/salt-lake-city/' }, { label: 'Denver time', href: '/denver/' }, { label: 'Las Vegas time', href: '/las-vegas/' }, { label: 'Time in Colorado', href: '/colorado/' }, { label: 'Time in Nevada', href: '/nevada/' }, { label: 'Time in Arizona', href: '/arizona/' }, { label: 'Time in Idaho', href: '/idaho/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Utah: America/Denver (MST/MDT, Mountain Time).</footer>
    </ContentPageWrapper>
  )
}
