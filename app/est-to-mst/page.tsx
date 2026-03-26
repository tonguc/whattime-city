import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to MST — Eastern to Mountain Time Converter',
  description: 'Convert EST to MST instantly. Eastern Standard Time is 2 hours ahead of Mountain Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/est-to-mst/' },
  openGraph: {
    title: 'EST to MST Time Converter — Eastern to Mountain',
    description: 'EST is 2 hours ahead of MST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/est-to-mst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to MST — Eastern to Mountain Time',
    description: 'EST is 2 hours ahead of MST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'MST',
  fromTimezone: 'America/New_York',
  toTimezone: 'America/Denver',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is EST ahead of MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time, UTC-5) is 2 hours ahead of MST (Mountain Standard Time, UTC-7). When it is 9:00 AM EST in New York, it is 7:00 AM MST in Denver. Both zones shift simultaneously for DST, keeping the 2-hour difference constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM EST, what time is it MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM EST, it is 7:00 AM MST. EST is always 2 hours ahead of MST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York (Eastern Time) is 2 hours ahead of Denver (Mountain Time) year-round. Both cities observe Daylight Saving Time on the same schedule, so the gap stays at 2 hours in both winter (EST vs MST) and summer (EDT vs MDT).',
      },
    },
  ],
}

export default function ESTtoMST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        EST to MST Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Eastern Standard Time → Mountain Standard Time · EST is <strong>2 hours ahead</strong> of MST
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">EST vs MST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700 dark:text-slate-200">Eastern Standard Time (EST)</strong> is UTC-5, covering the US East Coast.
              During summer it shifts to <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-200">Mountain Standard Time (MST)</strong> is UTC-7, covering Colorado, Utah, Montana, and neighboring states.
              During Daylight Saving Time it becomes <strong>MDT (UTC-6)</strong>.
            </p>
            <p>
              The difference is always <strong>2 hours</strong>. A 5 PM ET close of business is 3 PM MT — giving Mountain Time employees a bit more afternoon flexibility.
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
