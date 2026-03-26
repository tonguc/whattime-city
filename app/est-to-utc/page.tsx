import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

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
    <ConverterPageShell
      title="EST to UTC Converter"
      subtitle={<>Eastern Standard Time → Coordinated Universal Time · EST is <strong>5 hours behind</strong> UTC</>}
      config={config}
      infoTitle="EST vs UTC — What You Need to Know"
      infoBody={<>
        <p>
              <strong>EST (Eastern Standard Time)</strong> is UTC-5, used by the US East Coast
              from November to March. During summer Daylight Saving Time, it shifts to <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              <strong>UTC (Coordinated Universal Time)</strong> is the world time standard,
              used in server logs, APIs, aviation, and international communication. UTC never changes for DST.
            </p>
            <p>
              When logging events or scheduling across time zones, always store timestamps in UTC and convert to local time on display.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
