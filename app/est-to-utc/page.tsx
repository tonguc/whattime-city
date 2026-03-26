import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to UTC — Eastern Time to UTC Converter',
  description: 'Convert EST to UTC instantly. Eastern Standard Time (UTC-5) is 5 hours behind UTC. Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/est-to-utc/' },
  openGraph: {
    title: 'EST to UTC Converter — Eastern Time to Universal Time',
    description: 'EST is 5 hours behind UTC. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/est-to-utc/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to UTC — Eastern Time to Universal Time',
    description: 'EST is 5 hours behind UTC. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'UTC',
  fromTimezone: 'America/New_York',
  toTimezone: 'UTC',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
  toCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I convert EST to UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert EST to UTC: add 5 hours. Example: 9:00 AM EST = 14:00 UTC. During Daylight Saving Time (EDT, UTC-4), add only 4 hours: 9:00 AM EDT = 13:00 UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM EST in UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM EST is 14:00 UTC (2:00 PM UTC). During EDT (US summer), 9:00 AM EDT is 13:00 UTC (1:00 PM UTC).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the EST UTC offset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time) has a UTC offset of UTC-5, meaning it is 5 hours behind Coordinated Universal Time. During US Daylight Saving Time (summer), the East Coast switches to EDT (UTC-4).',
      },
    },
  ],
}

export default function ESTtoUTC() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
        EST to UTC Converter
      </h1>
      <p className="text-lg text-slate-600 mb-6">
        Eastern Standard Time → Coordinated Universal Time · EST is <strong>5 hours behind</strong> UTC
      </p>

      <TZPairClient config={config} />

      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">EST vs UTC — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700">EST (Eastern Standard Time)</strong> is UTC-5, used by the US East Coast
              from November to March. During summer Daylight Saving Time, it shifts to <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              <strong className="text-slate-700">UTC (Coordinated Universal Time)</strong> is the world time standard,
              used in server logs, APIs, aviation, and international communication. UTC never changes for DST.
            </p>
            <p>
              When logging events or scheduling across time zones, always store timestamps in UTC and convert to local time on display.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500">
        Timezone data sourced from{' '}
        <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">
          IANA Time Zone Database
        </a>
        . Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
