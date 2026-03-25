import type { Metadata } from 'next'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to PST — Central to Pacific Time Converter',
  description: 'Convert CST to PST instantly. Central Standard Time is 2 hours ahead of Pacific Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/cst-to-pst' },
  openGraph: {
    title: 'CST to PST Time Converter — Central to Pacific',
    description: 'CST is 2 hours ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/cst-to-pst',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CST to PST — Central to Pacific Time',
    description: 'CST is 2 hours ahead of PST. Live converter.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'PST',
  fromTimezone: 'America/Chicago',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Central Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours ahead is CST compared to PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (Central Standard Time, UTC-6) is 2 hours ahead of PST (Pacific Standard Time, UTC-8). This 2-hour difference is constant year-round as both zones observe DST on the same dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM CST, what time is it PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM CST in Chicago, it is 7:00 AM PST in Los Angeles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the CST to PST difference change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. CST and PST both shift to CDT and PDT on the same dates, so the 2-hour gap is constant throughout the year.',
      },
    },
  ],
}

export default function CSTtoPSTPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
          CST to PST Converter
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          Central Standard Time → Pacific Standard Time · CST is <strong>2 hours ahead</strong> of PST
        </p>
        <TZPairClient config={config} />
        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3">CST vs PST — What You Need to Know</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              <strong className="text-slate-700 dark:text-slate-300">CST (UTC-6)</strong> — Central US: Chicago, Houston, Dallas, Minneapolis.
              Summer: <strong>CDT (UTC-5)</strong>.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-300">PST (UTC-8)</strong> — West Coast: LA, San Francisco, Seattle.
              Summer: <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              With a 2-hour gap, CST and PST teams have excellent business-hours overlap.
              A 9 AM–5 PM CST workday corresponds to 7 AM–3 PM PST — almost a full day of shared hours.
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
