import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SingaporeClockClient from './SingaporeClockClient'

export const metadata: Metadata = {
  title: 'Time in Singapore Now — SGT (UTC+8) · No Daylight Saving Time',
  description:
    'What time is it in Singapore right now? Singapore uses SGT (Singapore Standard Time, UTC+8) year-round with no Daylight Saving Time. Live clock, Singapore vs world cities, and best time to call.',
  keywords: [
    'time in singapore', 'singapore time now', 'what time is it in singapore',
    'singapore time', 'SGT time zone', 'singapore standard time',
    'singapore time vs uk', 'singapore time vs est', 'singapore utc+8',
    'time difference singapore usa', 'singapore time right now',
  ],
  alternates: { canonical: 'https://whattime.city/singapore/' },
  openGraph: {
    title: 'Current Time in Singapore — SGT (UTC+8)',
    description: 'Live Singapore time. SGT is UTC+8, fixed year-round. No DST. Check Singapore vs US, UK, Europe, and Asia.',
    type: 'website', url: 'https://whattime.city/singapore/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Singapore right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore uses Singapore Standard Time (SST), also known as SGT, which is UTC+8. There is no Daylight Saving Time. The live clock at the top shows the current time in Singapore.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Singapore in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore uses Singapore Standard Time (SGT, UTC+8). The IANA identifier is Asia/Singapore. Singapore shares UTC+8 with China, the Philippines, Malaysia, Taiwan, and Hong Kong. Despite being geographically close to UTC+7, Singapore moved to UTC+8 in 1982 to align with Malaysia and China for business purposes.' },
    },
    {
      '@type': 'Question',
      name: 'Does Singapore observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Singapore has never observed Daylight Saving Time. SGT is fixed at UTC+8 year-round. Near the equator, seasonal daylight variation is minimal, making DST unnecessary.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Singapore and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 8 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Singapore is 7 hours ahead. When it is 9:00 AM in London (GMT), it is 5:00 PM in Singapore.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Singapore and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 13 hours ahead of New York (EST, UTC−5) and 16 hours ahead of Los Angeles (PST, UTC−8). During US DST, the gaps narrow by 1 hour. Singapore is effectively "the next day" compared to US time zones.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Singapore and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 2 hours and 30 minutes ahead of India (IST, UTC+5:30). This gap is fixed year-round because neither country observes DST. When it is 9:00 AM in Mumbai, it is 11:30 AM in Singapore.' },
    },
    {
      '@type': 'Question',
      name: 'Is Singapore time the same as Malaysia and China?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Singapore (SGT, UTC+8), Malaysia (MYT, UTC+8), China (CST, UTC+8), Hong Kong (HKT, UTC+8), Taiwan (CST, UTC+8), and the Philippines (PHT, UTC+8) all share the same UTC+8 offset. There is no time difference between Singapore and Kuala Lumpur, Beijing, or Manila.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Singapore', item: 'https://whattime.city/singapore/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function SingaporeTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in Singapore
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Singapore Standard Time (SGT) · UTC+8 · No Daylight Saving Time
      </p>

      <SingaporeClockClient />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Singapore Time Zone — SGT Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Singapore uses <strong>Singapore Standard Time (SGT, UTC+8)</strong>, fixed year-round with no
              Daylight Saving Time. At roughly 1°N latitude — just north of the equator — Singapore experiences
              minimal seasonal daylight variation, making clock changes unnecessary.
            </p>
            <p>
              Interestingly, Singapore's geographic longitude (103°E) corresponds to UTC+6:52 in mean solar time.
              Singapore officially moved from UTC+7:30 to UTC+8 in 1982 to align with Malaysia and the broader
              regional business community. This makes Singapore one of a cluster of UTC+8 nations: China, Hong
              Kong, Taiwan, Philippines, and Malaysia all share the same clock.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'SGT' },
                { label: 'UTC Offset', value: 'UTC+8' },
                { label: 'Daylight Saving', value: 'No DST' },
                { label: 'Number of TZs', value: '1 (city-state)' },
              ].map(item => (
                <div key={item.label} className="rounded-xl bg-slate-50 p-3 text-center">
                  <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                  <div className="font-bold text-slate-800 text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Singapore Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Singapore city time', href: '/singapore-city/' },
              { label: 'Singapore → London', href: '/time/singapore/london/' },
              { label: 'Singapore → New York', href: '/time/singapore/new-york/' },
              { label: 'Singapore → Tokyo', href: '/time/singapore/tokyo/' },
              { label: 'Singapore → Mumbai', href: '/time/singapore/mumbai/' },
              { label: 'Singapore → Sydney', href: '/time/singapore/sydney/' },
              { label: 'Singapore → Dubai', href: '/time/singapore/dubai/' },
              { label: 'Singapore country info', href: '/country/singapore/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map(lnk => (
              <Link key={lnk.href} href={lnk.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database. Singapore: Asia/Singapore (SGT, UTC+8). No DST.
      </footer>
    </ContentPageWrapper>
  )
}
