import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TennesseeClockClient from './TennesseeClockClient'

export const metadata: Metadata = {
  title: 'Time in Tennessee Now — CST/CDT · Nashville · Two Time Zones',
  description: 'What time is it in Tennessee right now? Most of Tennessee uses Central Time (CST/CDT). East Tennessee (Knoxville, Johnson City) uses Eastern Time (EST/EDT). Live Nashville clock and best time to call.',
  keywords: ['time in tennessee', 'tennessee time now', 'what time is it in tennessee', 'nashville time', 'tennessee time zone', 'CST CDT tennessee', 'knoxville time', 'memphis time', 'chattanooga time', 'east tennessee time zone', 'tennessee two time zones', 'tennessee time vs uk'],
  alternates: { canonical: 'https://whattime.city/tennessee/' },
  openGraph: { title: 'Current Time in Tennessee — CST/CDT (Nashville) & EST/EDT (Knoxville)', description: 'Live Tennessee time. Nashville and Memphis on Central Time; Knoxville and Johnson City on Eastern Time. Both zones shown.', type: 'website', url: 'https://whattime.city/tennessee/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Tennessee right now?', acceptedAnswer: { '@type': 'Answer', text: 'Tennessee spans two time zones. Most of the state — including Nashville, Memphis, Clarksville, and Chattanooga — uses Central Time (CST, UTC−6 in winter; CDT, UTC−5 in summer). East Tennessee — including Knoxville, Johnson City, and Kingsport — uses Eastern Time (EST, UTC−5 in winter; EDT, UTC−4 in summer). The live clock above shows Nashville (Central) time.' } },
    { '@type': 'Question', name: 'What time zone is Nashville in?', acceptedAnswer: { '@type': 'Answer', text: 'Nashville uses Central Time (CST/CDT). In winter, Nashville is on CST (UTC−6). During Daylight Saving Time (second Sunday in March to first Sunday in November), Nashville switches to CDT (UTC−5). Nashville is the state capital and home of country music, and its time zone is consistent with most of Tennessee.' } },
    { '@type': 'Question', name: 'What time zone is Knoxville in?', acceptedAnswer: { '@type': 'Answer', text: 'Knoxville uses Eastern Time (EST/EDT), not Central Time like Nashville. Knoxville is 1 hour ahead of Nashville and Memphis year-round. Johnson City, Kingsport, and most of the eastern tip of Tennessee also use Eastern Time. This split reflects Tennessee\'s geography bridging the central and eastern US.' } },
    { '@type': 'Question', name: 'Does Tennessee observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tennessee observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back 1 hour on the first Sunday in November. Central Tennessee moves from CST (UTC−6) to CDT (UTC−5); East Tennessee moves from EST (UTC−5) to EDT (UTC−4).' } },
    { '@type': 'Question', name: 'What is the time difference between Tennessee and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Nashville (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US DST, Nashville is on CDT (UTC−5), making it 5 hours behind London (GMT). When both regions observe DST simultaneously, Nashville (CDT) is 6 hours behind London (BST). Knoxville (EST) is always 1 hour ahead of Nashville.' } },
    { '@type': 'Question', name: 'What cities are in the Central Time zone in Tennessee?', acceptedAnswer: { '@type': 'Answer', text: 'The majority of Tennessee is in the Central Time zone, including Nashville (state capital), Memphis, Clarksville, Murfreesboro, Franklin, Jackson, Chattanooga, and most of Middle and West Tennessee. Only the easternmost counties bordering North Carolina and Virginia use Eastern Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Tennessee', item: 'https://whattime.city/tennessee/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function TennesseeTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Tennessee</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Central Time (CST/CDT) · Nashville · East TN uses Eastern Time</p>
      <TennesseeClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Tennessee City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Nashville time', href: '/nashville/' }, { label: 'Atlanta time', href: '/atlanta/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Georgia', href: '/georgia-state/' }, { label: 'Time in North Carolina', href: '/north-carolina/' }, { label: 'Time in Virginia', href: '/virginia/' }, { label: 'Time in Illinois', href: '/illinois/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Tennessee: America/Chicago (CST/CDT) for most of state; America/New_York (EST/EDT) for eastern counties.</footer>
    </ContentPageWrapper>
  )
}
