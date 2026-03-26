import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'PST to MST — Pacific to Mountain Time Converter',
  description: 'Convert PST to MST instantly. Pacific Standard Time is 1 hour behind Mountain Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/pst-to-mst/' },
  openGraph: {
    title: 'PST to MST Time Converter — Pacific to Mountain',
    description: 'PST is 1 hour behind MST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/pst-to-mst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PST to MST — Pacific to Mountain Time',
    description: 'PST is 1 hour behind MST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'PST',
  toAbbr: 'MST',
  fromTimezone: 'America/Los_Angeles',
  toTimezone: 'America/Denver',
  fromFullName: 'Pacific Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Boise, ID', 'El Paso, TX', 'Tucson, AZ'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is PST behind MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time, UTC-8) is 1 hour behind MST (Mountain Standard Time, UTC-7). When it is 10:00 AM MST in Denver, it is 9:00 AM PST in Los Angeles. Both zones observe DST on the same dates, keeping the 1-hour gap constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9 AM PST, what time is it MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM PST, it is 10:00 AM MST. PST is always 1 hour behind MST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Los Angeles and Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Denver (Mountain Time) is 1 hour ahead of Los Angeles (Pacific Time) year-round. Both cities shift clocks simultaneously for DST, maintaining the constant 1-hour difference.',
      },
    },
  ],
}

export default function PSTtoMST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        PST to MST Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Pacific Standard Time → Mountain Standard Time · PST is <strong>1 hour behind</strong> MST
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">PST vs MST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700 dark:text-slate-200">PST (Pacific Standard Time)</strong> is UTC-8, covering
              California, Washington, Oregon, and Nevada. During DST it becomes <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-200">MST (Mountain Standard Time)</strong> is UTC-7, covering
              Colorado, Utah, Montana, Wyoming, and New Mexico. During DST it becomes <strong>MDT (UTC-6)</strong>.
            </p>
            <p>
              The 1-hour difference is constant. A 10:00 AM MST standup in Denver is 9:00 AM PST in
              San Francisco — one of the easier US cross-timezone gaps to bridge.
            </p>
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
        Timezone data sourced from{' '}
        <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">
          IANA Time Zone Database
        </a>
        . Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
