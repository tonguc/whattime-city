import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import PakistanClockClient from './PakistanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Pakistan Now — PKT (UTC+5) · Karachi, Lahore, Islamabad',
  description:
    'What time is it in Pakistan right now? Pakistan uses PKT (Pakistan Standard Time, UTC+5) year-round — no Daylight Saving Time. Live Karachi clock, Pakistan vs world cities, and best time to call.',
  keywords: [
    'time in pakistan', 'pakistan time now', 'what time is it in pakistan',
    'pakistan time', 'PKT time zone', 'pakistan standard time',
    'karachi time now', 'lahore time now', 'islamabad time now',
    'pakistan time vs uk', 'pakistan time vs est', 'pakistan utc+5',
    'time difference pakistan usa', 'pakistan time right now',
  ],
  alternates: { canonical: 'https://whattime.city/pakistan/' },
  openGraph: {
    title: 'Current Time in Pakistan — PKT (UTC+5)',
    description: 'Live Pakistan time. PKT is UTC+5, fixed year-round. Karachi, Lahore, Islamabad all on the same time zone with no DST.',
    type: 'website', url: 'https://whattime.city/pakistan/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Pakistan right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan uses Pakistan Standard Time (PKT), which is UTC+5. There is no Daylight Saving Time. All cities — Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad — are on the same time zone. The live clock at the top shows the current time in Pakistan.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Pakistan in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan uses Pakistan Standard Time (PKT, UTC+5). The IANA time zone identifier is Asia/Karachi. Pakistan is one of few countries at UTC+5 — others include Uzbekistan, Tajikistan, Turkmenistan, and the Maldives. India (IST) is 30 minutes ahead at UTC+5:30.' },
    },
    {
      '@type': 'Question',
      name: 'Does Pakistan observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Pakistan does not currently observe Daylight Saving Time. Pakistan briefly experimented with DST in 2008 and 2009, advancing clocks by 1 hour during summer. The practice was abandoned in 2009 due to public confusion and minimal energy savings at Pakistan\'s tropical latitude.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan (PKT, UTC+5) is 5 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Pakistan is 4 hours ahead. When it is 9:00 AM in London (GMT), it is 2:00 PM in Karachi.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan (PKT, UTC+5) is 10 hours ahead of New York (EST, UTC−5) and 13 hours ahead of Los Angeles (PST, UTC−8). During US DST, the gaps narrow by 1 hour. Pakistan is effectively "the next day" compared to US Western time zones.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'India (IST, UTC+5:30) is 30 minutes ahead of Pakistan (PKT, UTC+5). This half-hour gap is one of the smallest time differences between neighboring countries in the world. When it is 9:00 AM in Karachi, it is 9:30 AM in Mumbai or New Delhi.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan (PKT, UTC+5) is 1 hour ahead of Dubai (GST, UTC+4). When it is 9:00 AM in Dubai, it is 10:00 AM in Karachi. This gap is fixed year-round as neither country observes DST.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Pakistan', item: 'https://whattime.city/pakistan/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function PakistanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Pakistan</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Pakistan Standard Time (PKT) · UTC+5 · No Daylight Saving Time</p>
      <PakistanClockClient />
      <CountryFactsSection hubSlug="pakistan" />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Pakistan Time Zone — PKT Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>Pakistan uses <strong>Pakistan Standard Time (PKT, UTC+5)</strong>, fixed year-round with no Daylight Saving Time. PKT sits between Dubai (UTC+4) and India (UTC+5:30), making Pakistan 1 hour ahead of the UAE and 30 minutes behind India — one of the smallest cross-border time gaps in the world.</p>
            <p>Pakistan has a large diaspora in the UK, US, and Middle East, making international calling windows a common need. UK callers reaching Pakistan during the day must call early morning GMT; US Eastern callers need to reach out in the late evening to overlap with Pakistan business hours.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'PKT' },
                { label: 'UTC Offset', value: 'UTC+5' },
                { label: 'Daylight Saving', value: 'No DST' },
                { label: 'vs India (IST)', value: '−30 minutes' },
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
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
                <div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div>
                <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Pakistan City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Karachi time', href: '/karachi/' },
              { label: 'Lahore time', href: '/lahore/' },
              { label: 'Islamabad time', href: '/islamabad/' },
              { label: 'Karachi → London', href: '/time/karachi/london/' },
              { label: 'Karachi → New York', href: '/time/karachi/new-york/' },
              { label: 'Karachi → Dubai', href: '/time/karachi/dubai/' },
              { label: 'Karachi → Mumbai', href: '/time/karachi/mumbai/' },
              { label: 'Pakistan country info', href: '/country/pakistan/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map(lnk => (
              <Link key={lnk.href} href={lnk.href}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database. Pakistan: Asia/Karachi (PKT, UTC+5). No DST.
      </footer>
    </ContentPageWrapper>
  )
}
