import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import ArkansasClockClient from './ArkansasClockClient'

export const metadata: Metadata = {
  title: 'Time in Arkansas Now — CST/CDT · Little Rock · Central Time Zone',
  description: 'What time is it in Arkansas right now? Arkansas uses Central Time (CST/CDT). Little Rock is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in arkansas', 'arkansas time now', 'what time is it in arkansas', 'little rock time', 'arkansas time zone', 'CST CDT arkansas', 'arkansas utc-6', 'fayetteville arkansas time', 'arkansas central time', 'arkansas time vs eastern', 'arkansas time vs uk'],
  alternates: { canonical: 'https://whattime.city/arkansas/' },
  openGraph: { title: 'Current Time in Arkansas — CST/CDT · Little Rock', description: 'Live Arkansas time. Little Rock and all of Arkansas on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/arkansas/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Arkansas right now?', acceptedAnswer: { '@type': 'Answer', text: 'Arkansas uses Central Time. Little Rock (capital), Fayetteville, Fort Smith, Jonesboro, and all Arkansas cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Arkansas.' } },
    { '@type': 'Question', name: 'What time zone is Little Rock in?', acceptedAnswer: { '@type': 'Answer', text: 'Little Rock is in the Central Time zone (America/Chicago). Little Rock uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Little Rock is on the same time as Dallas, Nashville, and Chicago.' } },
    { '@type': 'Question', name: 'Does Arkansas observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Arkansas observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Arkansas and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Arkansas (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Little Rock. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Arkansas and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Little Rock (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Little Rock moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK observe summer time, Little Rock (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Arkansas and Tennessee?', acceptedAnswer: { '@type': 'Answer', text: 'Arkansas (Central Time) is on the same time as most of Tennessee (Central Time) year-round. Little Rock and Nashville are in the same time zone. However, East Tennessee (Knoxville) is on Eastern Time, which is 1 hour ahead of Arkansas.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Arkansas', item: 'https://whattime.city/arkansas/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function ArkansasTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Arkansas</h1>
      <p className="text-sm text-slate-500 mb-6">Central Time (CST/CDT) · Little Rock · UTC−6 / UTC−5</p>
      <ArkansasClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Arkansas City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Dallas time', href: '/dallas/' }, { label: 'Nashville time', href: '/nashville/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Tennessee', href: '/tennessee/' }, { label: 'Time in Oklahoma', href: '/oklahoma/' }, { label: 'Time in Louisiana', href: '/louisiana/' }, { label: 'Time in Mississippi', href: '/mississippi/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Arkansas: America/Chicago (CST/CDT, Central Time).</footer>
    </ContentPageWrapper>
  )
}
