import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to PST — Mountain to Pacific Time Converter',
  description: 'Convert MST to PST instantly. Mountain Standard Time is 1 hour ahead of Pacific Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/mst-to-pst/' },
  openGraph: {
    title: 'MST to PST Time Converter — Mountain to Pacific',
    description: 'MST is 1 hour ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/mst-to-pst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MST to PST — Mountain to Pacific Time',
    description: 'MST is 1 hour ahead of PST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'PST',
  fromTimezone: 'America/Denver',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Boise, ID', 'El Paso, TX', 'Tucson, AZ'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is MST ahead of PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (Mountain Standard Time, UTC-7) is 1 hour ahead of PST (Pacific Standard Time, UTC-8). When it is 9:00 AM PST in Los Angeles, it is 10:00 AM MST in Denver. Both zones observe DST on the same dates, so the 1-hour difference is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9 AM MST, what time is it PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM MST, it is 8:00 AM PST. MST is always 1 hour ahead of PST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Denver and Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Denver (Mountain Time) is 1 hour ahead of Los Angeles (Pacific Time) year-round. Both cities observe Daylight Saving Time on the same schedule (MST→MDT and PST→PDT), keeping the gap at exactly 1 hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona affect the MST to PST difference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona (except the Navajo Nation) does not observe DST. In summer, when the rest of the Mountain zone shifts to MDT (UTC-6), Arizona stays at UTC-7. This temporarily makes Arizona the same time as PDT (UTC-7) on the West Coast.',
      },
    },
  ],
}

export default function MSTtoPST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        MST to PST Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Mountain Standard Time → Pacific Standard Time · MST is <strong>1 hour ahead</strong> of PST
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">MST vs PST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700 dark:text-slate-200">MST (Mountain Standard Time)</strong> is UTC-7, covering Colorado,
              Utah, Montana, Wyoming, New Mexico, and most of Idaho. During DST it becomes <strong>MDT (UTC-6)</strong>.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-200">PST (Pacific Standard Time)</strong> is UTC-8, covering California,
              Washington, Oregon, and Nevada. During DST it becomes <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              The 1-hour gap is constant year-round. A 9:00 AM meeting in Seattle is 10:00 AM in Denver —
              easy to coordinate across the Mountain and Pacific zones.
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
