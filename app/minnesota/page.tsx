import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MinnesotaClockClient from './MinnesotaClockClient'

export const metadata: Metadata = {
  title: 'Time in Minnesota Now — CST/CDT (UTC−6/−5) · Minneapolis, Saint Paul',
  description: 'What time is it in Minnesota right now? Minnesota uses Central Standard Time (CST, UTC−6) in winter and Central Daylight Time (CDT, UTC−5) during Daylight Saving Time. Live Minneapolis clock and world comparison.',
  keywords: ['time in minnesota', 'minnesota time now', 'what time is it in minnesota', 'minneapolis time', 'saint paul time', 'minnesota time zone', 'CST minnesota', 'CDT minnesota', 'central time minnesota', 'minnesota utc-6', 'minnesota time vs new york', 'minnesota time vs california'],
  alternates: { canonical: 'https://whattime.city/minnesota/' },
  openGraph: { title: 'Current Time in Minnesota — CST/CDT (UTC−6/−5)', description: 'Live Minnesota time. CST (UTC−6) in winter, CDT (UTC−5) during Daylight Saving Time. Minneapolis, Saint Paul, Rochester on Central Time.', type: 'website', url: 'https://whattime.city/minnesota/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Minnesota right now?', acceptedAnswer: { '@type': 'Answer', text: 'Minnesota uses Central Time — CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. All cities — Minneapolis, Saint Paul, Rochester, Duluth, and Bloomington — are on the same time zone. The live clock above shows the current time in Minnesota.' } },
    { '@type': 'Question', name: 'What time zone is Minnesota in?', acceptedAnswer: { '@type': 'Answer', text: 'Minnesota is in the Central Time Zone. In winter it uses CST (UTC−6) and during DST it uses CDT (UTC−5). The IANA identifier is America/Chicago. Minnesota shares Central Time with Wisconsin, Illinois, Iowa, Missouri, and most of the central United States.' } },
    { '@type': 'Question', name: 'What is the time difference between Minnesota and New York?', acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Minnesota (Central Time). When it is 9:00 AM in Minneapolis, it is 10:00 AM in New York. Both states change clocks on the same dates, so this 1-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Minnesota and California?', acceptedAnswer: { '@type': 'Answer', text: 'Minnesota (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 11:00 AM in Minneapolis. Both states change clocks on the same dates, so this 2-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Minnesota and London?', acceptedAnswer: { '@type': 'Answer', text: 'Minneapolis (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time, the gap is typically 6–7 hours depending on transition dates.' } },
    { '@type': 'Question', name: 'Does Minnesota observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Minnesota observes Daylight Saving Time. Clocks spring forward on the second Sunday of March and fall back on the first Sunday of November.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Minnesota', item: 'https://whattime.city/minnesota/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function MinnesotaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Minnesota</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Central Time (CT) · CST (UTC−6) in winter · CDT (UTC−5) during Daylight Saving Time</p>
      <MinnesotaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Minnesota City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Minneapolis time', href: '/minneapolis/' }, { label: 'Saint Paul time', href: '/saint-paul/' }, { label: 'Minneapolis → New York', href: '/time/minneapolis/new-york/' }, { label: 'Minneapolis → Los Angeles', href: '/time/minneapolis/los-angeles/' }, { label: 'Minneapolis → London', href: '/time/minneapolis/london/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Minnesota: America/Chicago (CST UTC−6 / CDT UTC−5).</footer>
    </ContentPageWrapper>
  )
}
