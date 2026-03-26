import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'PST to UTC — Pacific Time to UTC Converter',
  description: 'Convert PST to UTC instantly. Pacific Standard Time (UTC-8) is 8 hours behind UTC. Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/pst-to-utc/' },
  openGraph: {
    title: 'PST to UTC Converter — Pacific Time to Universal Time',
    description: 'PST is 8 hours behind UTC. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/pst-to-utc/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PST to UTC — Pacific Time to Universal Time',
    description: 'PST is 8 hours behind UTC. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'PST',
  toAbbr: 'UTC',
  fromTimezone: 'America/Los_Angeles',
  toTimezone: 'UTC',
  fromFullName: 'Pacific Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
  toCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I convert PST to UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert PST to UTC: add 8 hours. Example: 9:00 AM PST = 17:00 UTC (5:00 PM UTC). During Daylight Saving Time (PDT, UTC-7), add only 7 hours: 9:00 AM PDT = 16:00 UTC (4:00 PM UTC).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM PST in UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM PST is 17:00 UTC (5:00 PM UTC). During US Pacific Daylight Time (PDT, summer), 9:00 AM PDT is 16:00 UTC (4:00 PM UTC).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the PST UTC offset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time) has a UTC offset of UTC-8, meaning it is 8 hours behind Coordinated Universal Time. During US Daylight Saving Time (spring through fall), the West Coast uses PDT (UTC-7).',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is noon PST in UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12:00 PM (noon) PST is 20:00 UTC (8:00 PM UTC). In PDT (summer), noon PDT is 19:00 UTC (7:00 PM UTC).',
      },
    },
  ],
}

export default function PSTtoUTC() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        PST to UTC Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Pacific Standard Time → Coordinated Universal Time · PST is <strong>8 hours behind</strong> UTC
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">PST vs UTC — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700 dark:text-slate-200">PST (Pacific Standard Time)</strong> is UTC-8, covering California,
              Washington, Oregon, and Nevada. From March to November, the West Coast uses <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-200">UTC (Coordinated Universal Time)</strong> is the global standard,
              used in servers, APIs, aviation, and international scheduling. It never observes DST.
            </p>
            <p>
              Silicon Valley and Seattle teams often work in PT while coordinating with global systems in UTC.
              A 9 AM standup in San Francisco is 17:00 UTC in winter — a useful anchor for global teams.
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
