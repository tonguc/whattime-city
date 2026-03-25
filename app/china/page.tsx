import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import ChinaClockClient from './ChinaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in China Now — CST (UTC+8) · Beijing, Shanghai · 1 Time Zone',
  description:
    'What time is it in China right now? China uses CST (China Standard Time, UTC+8) nationwide — a single time zone for the entire country. Live Beijing clock, China vs world cities, and best time to call.',
  keywords: [
    'time in china', 'china time now', 'what time is it in china',
    'china time', 'CST china time zone', 'china standard time',
    'beijing time now', 'shanghai time now', 'china utc+8',
    'china time vs uk', 'china time vs est', 'time difference china usa',
    'china time right now', 'china single time zone',
  ],
  alternates: { canonical: 'https://whattime.city/china/' },
  openGraph: {
    title: 'Current Time in China — CST (UTC+8)',
    description: 'Live China time. CST is UTC+8, one nationwide time zone despite China\'s vast geographic span. No DST. Beijing, Shanghai, Shenzhen all on the same clock.',
    type: 'website', url: 'https://whattime.city/china/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in China right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'China uses China Standard Time (CST), which is UTC+8. The entire country — Beijing, Shanghai, Shenzhen, Guangzhou, Chengdu, Xi\'an — uses the same time zone. There is no Daylight Saving Time. The live clock at the top shows the current time in China.' },
    },
    {
      '@type': 'Question',
      name: 'Why does China have only one time zone?',
      acceptedAnswer: { '@type': 'Answer', text: 'China spans about 5,000 km east-to-west, which geographically warrants 5 time zones (UTC+5 to UTC+9). However, in 1949 the People\'s Republic of China unified the country under a single time zone, Beijing Standard Time (UTC+8), for political and administrative reasons. This means western regions like Xinjiang experience sunrise as late as 10 AM by the clock.' },
    },
    {
      '@type': 'Question',
      name: 'Does China observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. China abolished Daylight Saving Time in 1991 after using it from 1986 to 1991. CST is fixed at UTC+8 year-round. China is one of the few large countries to use a single, permanent time zone.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between China and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'China (CST, UTC+8) is 13 hours ahead of New York (EST, UTC−5) and 16 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gaps narrow by 1 hour. China is effectively "the next day" compared to most US time zones.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between China and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'China (CST, UTC+8) is 8 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), China is 7 hours ahead. When it is 9:00 AM in London (GMT), it is 5:00 PM in Beijing.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between China and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'China (CST, UTC+8) is 2 hours and 30 minutes ahead of India (IST, UTC+5:30). This gap is fixed year-round because neither country observes DST. When it is 9:00 AM in Mumbai, it is 11:30 AM in Beijing.' },
    },
    {
      '@type': 'Question',
      name: 'Is China time the same as Singapore and Philippines time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. China (CST, UTC+8), Singapore (SGT, UTC+8), Philippines (PHT, UTC+8), Malaysia (MYT, UTC+8), Hong Kong (HKT, UTC+8), and Taiwan (CST, UTC+8) all use UTC+8. There is no time difference between Beijing, Singapore, Manila, Kuala Lumpur, or Hong Kong.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in China', item: 'https://whattime.city/china/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function ChinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in China
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        China Standard Time (CST) · UTC+8 · Single nationwide time zone · No Daylight Saving Time
      </p>

      <ChinaClockClient />
      <CountryFactsSection hubSlug="china" />

      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">China Time Zone — Why One Zone for the Entire Country?</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              China uses a single time zone, <strong>China Standard Time (CST, UTC+8)</strong>, for the entire
              country despite spanning roughly the same east-west distance as the continental United States.
              The US uses 4 time zones; geographically, China would warrant 5. This was a deliberate political
              decision made in 1949 to reinforce national unity under a single Beijing Standard Time.
            </p>
            <p>
              The practical consequence: in <strong>Xinjiang (far west China)</strong>, the sun rises at
              10 AM or later by the clock during winter, and sets after 10 PM in summer. Many Xinjiang
              residents informally use "Xinjiang time" (UTC+6, 2 hours behind Beijing) in their daily lives,
              but all official business, transportation, and media use Beijing Standard Time.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: 'Time Zone', value: 'CST' },
                { label: 'UTC Offset', value: 'UTC+8' },
                { label: 'Daylight Saving', value: 'No DST (since 1991)' },
                { label: 'Geographic TZs', value: '5 zones, 1 used' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">China City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Beijing time', href: '/beijing/' },
              { label: 'Shanghai time', href: '/shanghai/' },
              { label: 'Shenzhen time', href: '/shenzhen/' },
              { label: 'Beijing → New York', href: '/time/beijing/new-york/' },
              { label: 'Beijing → London', href: '/time/beijing/london/' },
              { label: 'Shanghai → Tokyo', href: '/time/shanghai/tokyo/' },
              { label: 'Beijing → Los Angeles', href: '/time/beijing/los-angeles/' },
              { label: 'China country info', href: '/country/china/' },
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
        Time zone data powered by the IANA Time Zone Database. China: Asia/Shanghai (CST, UTC+8). No DST.
      </footer>
    </ContentPageWrapper>
  )
}
