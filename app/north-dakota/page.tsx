import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NorthDakotaClockClient from './NorthDakotaClockClient'

export const metadata: Metadata = {
  title: 'Time in North Dakota Now — CST/CDT · Fargo · Central Time Zone',
  description: 'What time is it in North Dakota right now? Most of North Dakota uses Central Time (CST/CDT). Fargo and Bismarck are on CST (UTC−6) in winter and CDT (UTC−5) in summer.',
  keywords: ['time in north dakota', 'north dakota time now', 'what time is it in north dakota', 'fargo time', 'bismarck north dakota time', 'north dakota time zone', 'CST CDT north dakota', 'north dakota central time', 'north dakota mountain time'],
  alternates: { canonical: 'https://whattime.city/north-dakota/' },
  openGraph: { title: 'Current Time in North Dakota — CST/CDT · Fargo · Bismarck', description: 'Live North Dakota time. Most of ND uses Central Time (CST/CDT). Small southwest corner uses Mountain Time.', type: 'website', url: 'https://whattime.city/north-dakota/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in North Dakota right now?', acceptedAnswer: { '@type': 'Answer', text: 'Most of North Dakota uses Central Time. Fargo, Bismarck, Grand Forks, Minot, and the majority of ND cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. A small part of the southwest corner (Bowman and Slope Counties) uses Mountain Time (MST/MDT).' } },
    { '@type': 'Question', name: 'What time zone is Fargo, North Dakota in?', acceptedAnswer: { '@type': 'Answer', text: 'Fargo, the largest city in North Dakota, uses Central Time (America/Chicago). Fargo is on CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Fargo is on the same time as Minneapolis, Chicago, and Kansas City.' } },
    { '@type': 'Question', name: 'What time zone is Bismarck, North Dakota in?', acceptedAnswer: { '@type': 'Answer', text: 'Bismarck, the capital of North Dakota, is also on Central Time (CST/CDT). Despite being geographically in the western part of the state, Bismarck follows the same Central Time zone as Fargo and most other ND cities.' } },
    { '@type': 'Question', name: 'Does North Dakota have two time zones?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The vast majority of North Dakota uses Central Time (CST/CDT). However, Bowman County and Slope County in the extreme southwest corner of the state use Mountain Time (MST/MDT), which is 1 hour behind the rest of the state.' } },
    { '@type': 'Question', name: 'Does North Dakota observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. North Dakota observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back on the first Sunday in November. Central Time counties move from CST (UTC−6) to CDT (UTC−5); Mountain Time counties move from MST (UTC−7) to MDT (UTC−6).' } },
    { '@type': 'Question', name: 'What is the time difference between North Dakota and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Most of North Dakota (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Fargo and Bismarck. Both observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in North Dakota', item: 'https://whattime.city/north-dakota/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function NorthDakotaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in North Dakota</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Central Time (CST/CDT) · Fargo · Bismarck · UTC−6/−5</p>
      <NorthDakotaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Nearby States & Time Pages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Minnesota time', href: '/minnesota/' }, { label: 'Nebraska time', href: '/nebraska/' }, { label: 'Montana time', href: '/montana/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Denver time', href: '/denver/' }, { label: 'Time in South Dakota', href: '/south-dakota/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. North Dakota: America/Chicago (CST/CDT) for most; America/Denver (MST/MDT) for Bowman and Slope counties.</footer>
    </ContentPageWrapper>
  )
}
