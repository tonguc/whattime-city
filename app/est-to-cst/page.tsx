import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to CST — Eastern to Central Time Converter',
  description: 'Convert EST to CST instantly. Eastern Standard Time is 1 hour ahead of Central Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/est-to-cst/' },
  openGraph: {
    title: 'EST to CST Time Converter — Eastern to Central',
    description: 'EST is 1 hour ahead of CST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/est-to-cst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to CST — Eastern to Central Time',
    description: 'EST is 1 hour ahead of CST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'CST',
  fromTimezone: 'America/New_York',
  toTimezone: 'America/Chicago',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'Central Standard Time',
  fromCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is EST ahead of CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time, UTC-5) is 1 hour ahead of CST (Central Standard Time, UTC-6). This difference stays at exactly 1 hour year-round because both zones observe Daylight Saving Time on the same dates, shifting to EDT and CDT simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM EST, what time is it CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM EST, it is 8:00 AM CST. EST is always 1 hour ahead of CST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and Chicago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York (Eastern Time) is 1 hour ahead of Chicago (Central Time) year-round. Both cities observe Daylight Saving Time on the same schedule (EDT and CDT), so the 1-hour gap never changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the EST to CST difference change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The difference is always 1 hour. Both EST and CST observe DST on the same dates (second Sunday in March and first Sunday in November), shifting to EDT (UTC-4) and CDT (UTC-5) simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is 5 PM EST in CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5:00 PM EST is 4:00 PM CST. EST is always 1 hour ahead of CST, so subtract 1 hour to convert from Eastern to Central Time.',
      },
    },
  ],
}

export default function ESTtoCST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        EST to CST Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Eastern Standard Time → Central Standard Time · EST is <strong>1 hour ahead</strong> of CST
      </p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">EST vs CST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">Eastern Standard Time (EST)</strong> is UTC-5, covering the US East Coast: New York, Florida, Georgia, and the Atlantic seaboard. During summer it becomes <strong>EDT (UTC-4)</strong>.</p>
            <p><strong className="text-slate-700 dark:text-slate-200">Central Standard Time (CST)</strong> is UTC-6, covering Illinois, Texas, Minnesota, and Louisiana. During summer it becomes <strong>CDT (UTC-5)</strong>.</p>
            <p>The difference is always <strong>1 hour</strong>. A 9 AM CST start in Chicago is 10 AM EST in New York — close enough for full-day collaboration across the two most populous US time zones.</p>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
                <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-500 dark:text-slate-400">
        Timezone data sourced from <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>. Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
