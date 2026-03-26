import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to EST — Mountain to Eastern Time Converter',
  description: 'Convert MST to EST instantly. Mountain Standard Time is 2 hours behind Eastern Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/mst-to-est/' },
  openGraph: {
    title: 'MST to EST Time Converter — Mountain to Eastern',
    description: 'MST is 2 hours behind EST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/mst-to-est/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MST to EST — Mountain to Eastern Time',
    description: 'MST is 2 hours behind EST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'EST',
  fromTimezone: 'America/Denver',
  toTimezone: 'America/New_York',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is MST behind EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (Mountain Standard Time, UTC-7) is 2 hours behind EST (Eastern Standard Time, UTC-5). This difference stays at exactly 2 hours year-round because both zones observe Daylight Saving Time on the same dates, shifting to MDT (UTC-6) and EDT (UTC-4) simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM MST, what time is it EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM MST, it is 11:00 AM EST. MST is always 2 hours behind EST.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona use MST or EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona uses MST (UTC-7) year-round and does NOT observe Daylight Saving Time (except the Navajo Nation). This means in summer, when neighboring states switch to MDT (UTC-6), Arizona stays at UTC-7 — making it effectively on Pacific Daylight Time (PDT) during summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in Mountain Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mountain Time covers: Colorado, Montana, Wyoming, New Mexico, most of Idaho, Utah, Arizona (except Navajo Nation), and parts of the Dakotas, Kansas, and Nebraska.',
      },
    },
  ],
}

export default function MSTtoEST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">
        MST to EST Converter
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        Mountain Standard Time → Eastern Standard Time · MST is <strong>2 hours behind</strong> EST
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">MST vs EST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700 dark:text-slate-200">Mountain Standard Time (MST)</strong> is UTC-7.
              It covers the Rocky Mountain states: Colorado, Utah, Montana, Wyoming, New Mexico, and Idaho.
              During Daylight Saving Time, MST becomes <strong>MDT (UTC-6)</strong>.
            </p>
            <p>
              <strong className="text-slate-700 dark:text-slate-200">Eastern Standard Time (EST)</strong> is UTC-5.
              It covers the US East Coast: New York, Florida, Georgia, and the Atlantic seaboard.
              During summer it becomes <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              The difference is always <strong>2 hours</strong>. A 9 AM ET meeting is 7 AM MT — an early but manageable start for Mountain Time attendees.
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
