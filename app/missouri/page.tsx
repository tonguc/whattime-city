import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MissouriClockClient from './MissouriClockClient'

export const metadata: Metadata = {
  title: 'Time in Missouri Now — CST/CDT · Kansas City · Central Time Zone',
  description: 'What time is it in Missouri right now? Missouri uses Central Time (CST/CDT). Kansas City and St. Louis are on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in missouri', 'missouri time now', 'what time is it in missouri', 'kansas city time', 'missouri time zone', 'CST CDT missouri', 'missouri utc-6', 'st louis time', 'springfield time', 'missouri central time', 'missouri time vs eastern', 'missouri time vs uk'],
  alternates: { canonical: 'https://whattime.city/missouri/' },
  openGraph: { title: 'Current Time in Missouri — CST/CDT · Kansas City', description: 'Live Missouri time. Kansas City and St. Louis on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/missouri/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Missouri right now?', acceptedAnswer: { '@type': 'Answer', text: 'Missouri uses Central Time. Kansas City, St. Louis, Springfield, Columbia, and all Missouri cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Missouri.' } },
    { '@type': 'Question', name: 'What time zone is Kansas City in?', acceptedAnswer: { '@type': 'Answer', text: 'Kansas City (Missouri) is in the Central Time zone (America/Chicago). Kansas City uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Note: Kansas City spans the Missouri-Kansas border; both Kansas City, Missouri and Kansas City, Kansas are in the Central Time zone.' } },
    { '@type': 'Question', name: 'Does Missouri observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Missouri observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Missouri and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Missouri (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Kansas City or St. Louis. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Missouri and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Kansas City (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Kansas City moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK are on summer time, Kansas City (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Missouri and California?', acceptedAnswer: { '@type': 'Answer', text: 'Missouri (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 10:00 AM in Los Angeles, it is noon in Kansas City. Both states observe DST on the same schedule, so the 2-hour difference is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Missouri', item: 'https://whattime.city/missouri/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function MissouriTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Missouri</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Central Time (CST/CDT) · Kansas City · UTC−6 / UTC−5</p>
      <MissouriClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Missouri City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Kansas City time', href: '/kansas-city/' }, { label: 'St. Louis time', href: '/st-louis/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Illinois', href: '/illinois/' }, { label: 'Time in Tennessee', href: '/tennessee/' }, { label: 'Time in Minnesota', href: '/minnesota/' }, { label: 'Time in Wisconsin', href: '/wisconsin/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Missouri: America/Chicago (CST/CDT, Central Time).</footer>
    </ContentPageWrapper>
  )
}
