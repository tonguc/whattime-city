import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import OregonClockClient from './OregonClockClient'

export const metadata: Metadata = {
  title: 'Time in Oregon Now — PST/PDT · Portland · Malheur County MT',
  description: 'What time is it in Oregon right now? Most of Oregon uses Pacific Time (PST/PDT). Malheur County uses Mountain Time (MST/MDT). Live Portland clock and best time to call.',
  keywords: ['time in oregon', 'oregon time now', 'what time is it in oregon', 'portland time', 'oregon time zone', 'PST PDT oregon', 'oregon utc-8', 'salem time', 'eugene time', 'malheur county time zone', 'ontario oregon time', 'oregon pacific time'],
  alternates: { canonical: 'https://whattime.city/oregon/' },
  openGraph: { title: 'Current Time in Oregon — PST/PDT (Portland) · Malheur County on MT', description: 'Live Oregon time. Portland, Salem, Eugene on Pacific Time. Malheur County (Ontario) on Mountain Time — 1 hour ahead.', type: 'website', url: 'https://whattime.city/oregon/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Oregon right now?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Oregon uses Pacific Time. Portland, Salem, Eugene, and Bend are on PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. However, Malheur County in southeastern Oregon (including Ontario) uses Mountain Time (MST/MDT), which is 1 hour ahead of the rest of Oregon. The live clock above shows Portland (Pacific) time.' } },
    { '@type': 'Question', name: 'What time zone is Portland in?', acceptedAnswer: { '@type': 'Answer', text: 'Portland is in the Pacific Time zone (America/Los_Angeles). Portland uses PST (UTC−8) during standard time (November to March) and PDT (UTC−7) during Daylight Saving Time (March to November). Portland is on the same time as Seattle, San Francisco, and Los Angeles.' } },
    { '@type': 'Question', name: 'Why is Malheur County in a different time zone than the rest of Oregon?', acceptedAnswer: { '@type': 'Answer', text: 'Malheur County, in southeastern Oregon near the Idaho border, uses Mountain Time (MST/MDT, America/Boise) rather than Pacific Time. This is because the region has stronger economic and community ties to Idaho (which uses Mountain Time) than to the rest of Oregon. The city of Ontario, Malheur County\'s largest city, is 1 hour ahead of Portland.' } },
    { '@type': 'Question', name: 'Does Oregon observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Oregon observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back 1 hour on the first Sunday in November. In 2019, Oregon passed a bill to observe permanent Daylight Saving Time (PDT/UTC−7 year-round), but this requires federal approval and has not yet taken effect. Oregon currently still changes its clocks twice a year.' } },
    { '@type': 'Question', name: 'What is the time difference between Oregon and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Oregon (Pacific Time) is always 3 hours behind New York (Eastern Time). When it is noon in New York (EST/EDT), it is 9:00 AM in Portland (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round. (Malheur County, on Mountain Time, is 2 hours behind New York.)' } },
    { '@type': 'Question', name: 'What is the time difference between Oregon and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Portland (PST, UTC−8) is 8 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Portland moves to PDT (UTC−7), making it 7 hours behind London (GMT). When both the US and UK are on summer time, Portland (PDT) is 8 hours behind London (BST, UTC+1).' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Oregon', item: 'https://whattime.city/oregon/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function OregonTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Oregon</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Pacific Time (PST/PDT) · Portland · Malheur County on Mountain Time</p>
      <OregonClockClient />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Oregon City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Portland time', href: '/portland/' }, { label: 'Seattle time', href: '/seattle/' }, { label: 'Los Angeles time', href: '/los-angeles/' }, { label: 'Time in Washington State', href: '/washington-state/' }, { label: 'Time in California', href: '/california/' }, { label: 'Time in Nevada', href: '/nevada/' }, { label: 'Time in Arizona', href: '/arizona/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Oregon: America/Los_Angeles (PST/PDT) for most of state; America/Boise (MST/MDT) for Malheur County.</footer>
    </ContentPageWrapper>
  )
}
