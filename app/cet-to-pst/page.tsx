import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to PST — Central European to Pacific Time Converter',
  description: 'Convert CET to PST instantly. Central European Time (UTC+1) is 9 hours ahead of Pacific Standard Time (UTC-8). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/cet-to-pst/' },
  openGraph: {
    title: 'CET to PST Converter — Central European to Pacific Time',
    description: 'CET is 9 hours ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/cet-to-pst/',
    siteName: 'whattime.city',
  },
  twitter: { card: 'summary_large_image', title: 'CET to PST — Central European to Pacific Time', description: 'CET is 9 hours ahead of PST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'PST',
  fromTimezone: 'Europe/Paris',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Central European Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Paris', 'Berlin', 'Rome', 'Madrid', 'Amsterdam', 'Vienna'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is CET ahead of PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET (Central European Time, UTC+1) is 9 hours ahead of PST (Pacific Standard Time, UTC-8) in US winter. During US Daylight Saving Time (PDT, UTC-7), the gap is 8 hours. During European summer (CEST, UTC+2), the gap changes to 10 hours vs PST or 9 hours vs PDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM CET in PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM CET is 12:00 AM (midnight) PST — meaning the previous night in Los Angeles. A 9 AM Paris meeting is midnight in San Francisco in winter. The best overlap is afternoon CET / morning PST: 5:00–7:00 PM CET = 8:00–10:00 AM PST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to schedule a meeting between Europe (CET) and the US West Coast (PST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The optimal overlap window between CET and PST is 5:00–7:00 PM Central European Time, which is 8:00–10:00 AM Pacific Standard Time. During European summer (CEST) and US summer (PDT), the window shifts: 6:00–8:00 PM CEST = 9:00–11:00 AM PDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What countries use CET?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Countries using CET (UTC+1) in winter include: Germany, France, Italy, Spain, Switzerland, Austria, Netherlands, Belgium, Poland, Czech Republic, Hungary, Croatia, Serbia, and many more Central European countries. In summer these countries use CEST (UTC+2).',
      },
    },
  ],
}

export default function CETtoPST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">CET to PST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Central European Time → Pacific Standard Time · CET is <strong>9 hours ahead</strong> of PST
      </p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">CET vs PST — Europe to West Coast</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">CET (Central European Time)</strong> is UTC+1. In summer, Central Europe uses <strong>CEST (UTC+2)</strong> from the last Sunday of March to the last Sunday of October.</p>
            <p><strong className="text-slate-700 dark:text-slate-200">PST (Pacific Standard Time)</strong> is UTC-8. The US West Coast uses <strong>PDT (UTC-7)</strong> from March to November.</p>
            <p>The Europe–West Coast corridor is a core tech industry challenge. The <strong>5:00–7:00 PM CET / 8:00–10:00 AM PST</strong> window is the standard overlap for Berlin–San Francisco or Paris–Seattle calls.</p>
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
