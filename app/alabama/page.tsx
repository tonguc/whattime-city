import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import AlabamaClockClient from './AlabamaClockClient'

export const metadata: Metadata = {
  title: 'Time in Alabama Now — CST/CDT · Birmingham · Central Time Zone',
  description: 'What time is it in Alabama right now? Alabama uses Central Time (CST/CDT). Birmingham is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in alabama', 'alabama time now', 'what time is it in alabama', 'birmingham alabama time', 'alabama time zone', 'CST CDT alabama', 'alabama utc-6', 'montgomery time', 'huntsville time', 'mobile time', 'alabama central time', 'alabama time vs eastern'],
  alternates: { canonical: 'https://whattime.city/alabama/' },
  openGraph: { title: 'Current Time in Alabama — CST/CDT · Birmingham', description: 'Live Alabama time. Birmingham and all of Alabama on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/alabama/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Alabama right now?', acceptedAnswer: { '@type': 'Answer', text: 'Alabama uses Central Time. Birmingham, Montgomery (capital), Huntsville, Mobile, and all Alabama cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Alabama.' } },
    { '@type': 'Question', name: 'What time zone is Birmingham, Alabama in?', acceptedAnswer: { '@type': 'Answer', text: 'Birmingham is in the Central Time zone (America/Chicago). Birmingham uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Note: Birmingham, UK is in a completely different time zone (GMT/BST). Alabama\'s Birmingham is always on Central Time.' } },
    { '@type': 'Question', name: 'Does Alabama observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Alabama observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Alabama and Georgia?', acceptedAnswer: { '@type': 'Answer', text: 'Alabama (Central Time) is always 1 hour behind Georgia (Eastern Time). When it is noon in Atlanta, it is 11:00 AM in Birmingham. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Alabama and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Alabama (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Birmingham. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Alabama and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Birmingham, Alabama (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Birmingham moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK observe summer time, Birmingham (CDT) is 6 hours behind London (BST, UTC+1).' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Alabama', item: 'https://whattime.city/alabama/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function AlabamaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Alabama</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Central Time (CST/CDT) · Birmingham · UTC−6 / UTC−5</p>
      <AlabamaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Alabama City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Atlanta time', href: '/atlanta/' }, { label: 'Nashville time', href: '/nashville/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Georgia', href: '/georgia-state/' }, { label: 'Time in Tennessee', href: '/tennessee/' }, { label: 'Time in Mississippi', href: '/mississippi/' }, { label: 'Time in Florida', href: '/florida/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Alabama: America/Chicago (CST/CDT, Central Time).</footer>
    </ContentPageWrapper>
  )
}
