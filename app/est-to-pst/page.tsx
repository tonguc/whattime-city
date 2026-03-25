import type { Metadata } from 'next'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to PST — Eastern to Pacific Time Converter',
  description: 'Convert EST to PST instantly. Eastern Standard Time is 3 hours ahead of Pacific Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/est-to-pst' },
  openGraph: {
    title: 'EST to PST Time Converter — Eastern to Pacific',
    description: 'EST is 3 hours ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/est-to-pst',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to PST — Eastern to Pacific Time',
    description: 'EST is 3 hours ahead of PST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'PST',
  fromTimezone: 'America/New_York',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours ahead is EST compared to PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time, UTC-5) is 3 hours ahead of PST (Pacific Standard Time, UTC-8). When it is 12:00 PM EST in New York, it is 9:00 AM PST in Los Angeles. This 3-hour difference stays constant year-round because both zones observe DST on the same dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 5:00 PM EST, what time is it PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 5:00 PM EST, it is 2:00 PM PST. EST is always 3 hours ahead of PST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call from New York (EST) to Los Angeles (PST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For business calls, the best overlap window is 12:00 PM to 5:00 PM EST (9:00 AM to 2:00 PM PST). Calling before noon EST means Los Angeles is not yet in business hours; calling after 5 PM EST means New York has ended its workday.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does EST to PST change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The difference stays at 3 hours year-round. Both EST and PST observe DST on identical dates each year (second Sunday in March, first Sunday in November), shifting together to EDT and PDT.',
      },
    },
  ],
}

export default function ESTtoPSTPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
          EST to PST Converter
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          Eastern Standard Time → Pacific Standard Time · EST is <strong>3 hours ahead</strong> of PST
        </p>
        <TZPairClient config={config} />
        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3">EST vs PST — What You Need to Know</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              <strong className="text-slate-700 dark:text-slate-300">Eastern Standard Time (EST)</strong> is UTC-5, covering the US East Coast.
              During summer it becomes <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-300">Pacific Standard Time (PST)</strong> is UTC-8, covering the West Coast.
              During summer it becomes <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              The gap is always <strong>3 hours</strong>. A common pain point: East Coast teams finishing at 5 PM EST
              leave the West Coast only until 2 PM PST for same-day collaboration.
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{item.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/30 text-xs text-slate-500 dark:text-slate-400">
          Timezone data sourced from <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>. Last updated March 2026.
        </footer>
      </main>
    </>
  )
}
