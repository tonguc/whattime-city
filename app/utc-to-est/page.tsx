import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'UTC to EST — Universal Time to Eastern Time Converter',
  description: 'Convert UTC to EST instantly. UTC is 5 hours ahead of Eastern Standard Time (EST, UTC-5). Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/utc-to-est/' },
  openGraph: {
    title: 'UTC to EST Converter — Universal to Eastern Time',
    description: 'UTC is 5 hours ahead of EST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/utc-to-est/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTC to EST — Universal to Eastern Time',
    description: 'UTC is 5 hours ahead of EST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'UTC',
  toAbbr: 'EST',
  fromTimezone: 'UTC',
  toTimezone: 'America/New_York',
  fromFullName: 'Coordinated Universal Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Abidjan', 'Accra', 'Dublin (winter)'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is UTC ahead of EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTC is 5 hours ahead of EST (Eastern Standard Time, UTC-5) during winter. During US Daylight Saving Time (summer), the offset is only 4 hours because the US East Coast switches to EDT (UTC-4). Always check whether EST or EDT is currently in effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 12:00 UTC in EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12:00 UTC is 7:00 AM EST (UTC-5) during winter, or 8:00 AM EDT (UTC-4) during US summer Daylight Saving Time. Subtract 5 hours from UTC to get EST, or subtract 4 hours to get EDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between UTC and EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time) is UTC-5, meaning EST is always 5 hours behind UTC. During Daylight Saving Time (second Sunday in March to first Sunday in November), the US East Coast uses EDT (UTC-4), making it only 4 hours behind UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert UTC to Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert UTC to Eastern Standard Time (EST): subtract 5 hours. To convert UTC to Eastern Daylight Time (EDT, used in summer): subtract 4 hours. Example: 15:00 UTC = 10:00 AM EST = 11:00 AM EDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM EST in UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM EST is 14:00 UTC (2:00 PM UTC). During EDT (summer), 9:00 AM EDT is 13:00 UTC (1:00 PM UTC).',
      },
    },
  ],
}

export default function UTCtoEST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        UTC to EST Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Coordinated Universal Time → Eastern Standard Time · UTC is <strong>5 hours ahead</strong> of EST
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">UTC vs EST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700 dark:text-slate-200">UTC (Coordinated Universal Time)</strong> is the world&apos;s primary time standard,
              used in aviation, software systems, and international communications. It does not observe Daylight Saving Time.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-200">Eastern Standard Time (EST)</strong> is UTC-5, used by the US East Coast in winter.
              From March to November, the US East Coast uses <strong>EDT (UTC-4)</strong>, making it only 4 hours behind UTC.
            </p>
            <p>
              Always verify whether EST or EDT is in effect — the difference matters for scheduling calls across the Atlantic or with UTC-based systems.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Quick UTC to EST Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">UTC</th>
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">EST (UTC-5)</th>
                  <th className="text-left py-2 font-semibold text-slate-700">EDT (UTC-4, summer)</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['00:00', '7:00 PM (prev day)', '8:00 PM (prev day)'],
                  ['06:00', '1:00 AM', '2:00 AM'],
                  ['09:00', '4:00 AM', '5:00 AM'],
                  ['12:00', '7:00 AM', '8:00 AM'],
                  ['14:00', '9:00 AM', '10:00 AM'],
                  ['17:00', '12:00 PM', '1:00 PM'],
                  ['20:00', '3:00 PM', '4:00 PM'],
                  ['23:00', '6:00 PM', '7:00 PM'],
                ].map(([utc, est, edt]) => (
                  <tr key={utc} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-2 pr-6 font-mono">{utc}</td>
                    <td className="py-2 pr-6">{est}</td>
                    <td className="py-2">{edt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
