import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NebraskaClockClient from './NebraskaClockClient'

export const metadata: Metadata = {
  title: 'Time in Nebraska Now — CST/CDT · Omaha · Central Time Zone',
  description: 'What time is it in Nebraska right now? Most of Nebraska uses Central Time (CST/CDT). Omaha and Lincoln are on CST (UTC−6) in winter, CDT (UTC−5) in summer. The panhandle uses Mountain Time.',
  keywords: ['time in nebraska', 'nebraska time now', 'what time is it in nebraska', 'omaha time', 'lincoln nebraska time', 'nebraska time zone', 'CST CDT nebraska', 'nebraska central time', 'nebraska mountain time', 'scottsbluff time'],
  alternates: { canonical: 'https://whattime.city/nebraska/' },
  openGraph: { title: 'Current Time in Nebraska — CST/CDT · Omaha · Lincoln', description: 'Live Nebraska time. Omaha and Lincoln use Central Time (CST/CDT). The western panhandle uses Mountain Time (MST/MDT).', type: 'website', url: 'https://whattime.city/nebraska/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Nebraska right now?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Nebraska uses Central Time. Omaha, Lincoln, Grand Island, Kearney, and the majority of NE cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The western panhandle (Scottsbluff, Alliance) uses Mountain Time (MST/MDT), which is 1 hour behind.' } },
    { '@type': 'Question', name: 'What time zone is Omaha, Nebraska in?', acceptedAnswer: { '@type': 'Answer', text: 'Omaha, Nebraska is in the Central Time zone (America/Chicago). Omaha uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Omaha is on the same time as Kansas City, Chicago, and Minneapolis.' } },
    { '@type': 'Question', name: 'Does Nebraska have two time zones?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The vast majority of Nebraska uses Central Time (CST/CDT). However, the western panhandle counties — including Scotts Bluff, Banner, Kimball, Cheyenne, Deuel, and Garden counties — use Mountain Time (MST/MDT), which is 1 hour behind the rest of Nebraska.' } },
    { '@type': 'Question', name: 'Does Nebraska observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nebraska observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back on the first Sunday in November. Central Time counties shift from CST (UTC−6) to CDT (UTC−5); Mountain Time counties shift from MST (UTC−7) to MDT (UTC−6).' } },
    { '@type': 'Question', name: 'What is the time difference between Nebraska and Colorado?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Nebraska (Central Time) is 1 hour ahead of Colorado (Mountain Time). When it is noon in Denver, it is 1:00 PM in Omaha. However, Nebraska\'s panhandle is in the same Mountain Time zone as Colorado, so there is no time difference between Scottsbluff, NE and Denver, CO.' } },
    { '@type': 'Question', name: 'What is the time difference between Nebraska and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Omaha and Lincoln (Central Time) are always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Omaha. Both observe DST on the same schedule, so the 1-hour gap is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Nebraska', item: 'https://whattime.city/nebraska/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function NebraskaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Nebraska</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Central Time (CST/CDT) · Omaha · Lincoln · UTC−6/−5</p>
      <NebraskaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Nearby States & Time Pages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Kansas time', href: '/kansas/' }, { label: 'Iowa time', href: '/iowa/' }, { label: 'Colorado time', href: '/colorado/' }, { label: 'Omaha time', href: '/omaha/' }, { label: 'Denver time', href: '/denver/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Nebraska: America/Chicago (CST/CDT) for most; America/Denver (MST/MDT) for panhandle counties.</footer>
    </ContentPageWrapper>
  )
}
