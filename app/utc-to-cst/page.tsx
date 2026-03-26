import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'UTC to CST — Universal Time to Central Time Converter',
  description: 'Convert UTC to CST instantly. UTC is 6 hours ahead of Central Standard Time (CST, UTC-6). Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/utc-to-cst/' },
  openGraph: {
    title: 'UTC to CST Converter — Universal to Central Time',
    description: 'UTC is 6 hours ahead of CST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/utc-to-cst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTC to CST — Universal to Central Time',
    description: 'UTC is 6 hours ahead of CST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'UTC',
  toAbbr: 'CST',
  fromTimezone: 'UTC',
  toTimezone: 'America/Chicago',
  fromFullName: 'Coordinated Universal Time',
  toFullName: 'Central Standard Time',
  fromCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is UTC ahead of CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTC is 6 hours ahead of CST (Central Standard Time, UTC-6) during winter. During US Daylight Saving Time (summer), Central Time uses CDT (UTC-5), making UTC only 5 hours ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 12:00 UTC in CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12:00 UTC is 6:00 AM CST (UTC-6) during winter, or 7:00 AM CDT (UTC-5) during summer Daylight Saving Time. Subtract 6 hours from UTC for CST, or subtract 5 hours for CDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert UTC to Central Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert UTC to CST (winter): subtract 6 hours. To convert to CDT (summer, March–November): subtract 5 hours. Example: 18:00 UTC = 12:00 PM CST = 1:00 PM CDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM UTC in CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM UTC is 3:00 AM CST (UTC-6) in winter, or 4:00 AM CDT (UTC-5) in summer. Most business calls between UTC and CST are scheduled for afternoon UTC hours to hit Central business hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 15:00 UTC in Central Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '15:00 UTC is 9:00 AM CST in winter, or 10:00 AM CDT in summer. This is a common overlap window for scheduling between Europe and Central Time.',
      },
    },
  ],
}

export default function UTCtoCST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        UTC to CST Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Coordinated Universal Time → Central Standard Time · UTC is <strong>6 hours ahead</strong> of CST
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">UTC vs CST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700 dark:text-slate-200">UTC (Coordinated Universal Time)</strong> is the world time standard,
              used in server logs, APIs, aviation, and global communication. It never observes DST.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-200">CST (Central Standard Time)</strong> is UTC-6, covering the central
              US: Illinois, Texas, Minnesota, and Louisiana. From March to November, it shifts to
              <strong> CDT (UTC-5)</strong> for Daylight Saving Time.
            </p>
            <p>
              A European 15:00 UTC meeting lands at 9:00 AM in Chicago — one of the most practical windows
              for US Central / Europe collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Quick UTC to CST Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">UTC</th>
                  <th className="text-left py-2 pr-6 font-semibold text-slate-700">CST (UTC-6)</th>
                  <th className="text-left py-2 font-semibold text-slate-700">CDT (UTC-5, summer)</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['00:00', '6:00 PM (prev day)', '7:00 PM (prev day)'],
                  ['06:00', '12:00 AM midnight', '1:00 AM'],
                  ['12:00', '6:00 AM', '7:00 AM'],
                  ['14:00', '8:00 AM', '9:00 AM'],
                  ['15:00', '9:00 AM', '10:00 AM'],
                  ['18:00', '12:00 PM noon', '1:00 PM'],
                  ['22:00', '4:00 PM', '5:00 PM'],
                ].map(([utc, cst, cdt]) => (
                  <tr key={utc} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-2 pr-6 font-mono">{utc}</td>
                    <td className="py-2 pr-6">{cst}</td>
                    <td className="py-2">{cdt}</td>
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
