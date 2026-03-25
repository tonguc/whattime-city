import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import VirginiaClockClient from './VirginiaClockClient'

export const metadata: Metadata = {
  title: 'Time in Virginia Now — EST/EDT (UTC−5/−4) · Richmond, Virginia Beach · DC Area',
  description: 'What time is it in Virginia right now? Virginia uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during DST. Northern Virginia is part of the Washington DC metro area. Live Richmond clock.',
  keywords: ['time in virginia', 'virginia time now', 'what time is it in virginia', 'richmond time', 'virginia beach time', 'virginia time zone', 'EST virginia', 'eastern time virginia', 'northern virginia time', 'nova time zone', 'virginia time vs california', 'virginia time vs london'],
  alternates: { canonical: 'https://whattime.city/virginia/' },
  openGraph: { title: 'Current Time in Virginia — EST/EDT (UTC−5/−4)', description: 'Live Virginia time. EST (UTC−5) in winter, EDT (UTC−4) during DST. Richmond, Virginia Beach, Norfolk, Arlington on Eastern Time.', type: 'website', url: 'https://whattime.city/virginia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Virginia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Virginia uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities — Richmond, Virginia Beach, Norfolk, Chesapeake, Arlington, and Alexandria — are on the same time zone. Northern Virginia (NoVA) is part of the Washington DC metro area and is on Eastern Time. The live clock above shows the current time in Virginia.' } },
    { '@type': 'Question', name: 'What time zone is Virginia in?', acceptedAnswer: { '@type': 'Answer', text: 'Virginia is entirely in the Eastern Time Zone. In winter it uses EST (UTC−5) and during DST it uses EDT (UTC−4). The IANA identifier is America/New_York. Virginia shares Eastern Time with Washington DC, Maryland, North Carolina, and the rest of the US East Coast.' } },
    { '@type': 'Question', name: 'What is the time difference between Virginia and California?', acceptedAnswer: { '@type': 'Answer', text: 'Virginia (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM in Richmond or Virginia Beach. Both states change clocks on the same dates, so this 3-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What time zone is Northern Virginia (NoVA) in?', acceptedAnswer: { '@type': 'Answer', text: 'Northern Virginia — including Arlington, Alexandria, Fairfax, and Loudoun counties — uses Eastern Time (EST/EDT), the same as the rest of Virginia and Washington DC. Northern Virginia is a major technology hub (data center alley) and part of the DC metro area. All government agencies and federal contractors in the region operate on Eastern Time.' } },
    { '@type': 'Question', name: 'What is the time difference between Virginia and London?', acceptedAnswer: { '@type': 'Answer', text: 'Richmond (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time the gap is typically 5–6 hours depending on transition dates.' } },
    { '@type': 'Question', name: 'Does Virginia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Virginia observes Daylight Saving Time. Clocks spring forward on the second Sunday of March and fall back on the first Sunday of November.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Virginia', item: 'https://whattime.city/virginia/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function VirginiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Virginia</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time · DC area</p>
      <VirginiaClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Virginia City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Richmond time', href: '/richmond/' }, { label: 'Virginia Beach time', href: '/virginia-beach/' }, { label: 'Arlington time', href: '/arlington/' }, { label: 'Richmond → Chicago', href: '/time/richmond/chicago/' }, { label: 'Richmond → Los Angeles', href: '/time/richmond/los-angeles/' }, { label: 'Richmond → London', href: '/time/richmond/london/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Virginia: America/New_York (EST UTC−5 / EDT UTC−4).</footer>
    </ContentPageWrapper>
  )
}
