import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to UTC — Mountain Time to UTC Converter',
  description: 'Convert MST to UTC instantly. Mountain Standard Time (UTC-7) is 7 hours behind UTC. Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/mst-to-utc/' },
  openGraph: { title: 'MST to UTC — Mountain to Universal Time', description: 'MST is 7 hours behind UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/mst-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'MST to UTC — Mountain Time to Universal Time', description: 'MST is 7 hours behind UTC. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'UTC',
  fromTimezone: 'America/Denver',
  toTimezone: 'UTC',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
  toCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I convert MST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert MST to UTC: add 7 hours. Example: 9:00 AM MST = 16:00 UTC (4:00 PM UTC). During MDT (US summer, UTC-6), add only 6 hours: 9:00 AM MDT = 15:00 UTC.' } },
    { '@type': 'Question', name: 'What is 9 AM MST in UTC?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM MST is 16:00 UTC (4:00 PM UTC). During MDT (summer), 9:00 AM MDT is 15:00 UTC (3:00 PM UTC).' } },
    { '@type': 'Question', name: 'What is the MST UTC offset?', acceptedAnswer: { '@type': 'Answer', text: 'MST (Mountain Standard Time) has a UTC offset of UTC-7, meaning it is 7 hours behind Coordinated Universal Time. During Daylight Saving Time, Mountain Time uses MDT (UTC-6). Arizona stays at UTC-7 year-round.' } },
  ],
}

export default function MSTtoUTC() {
  return (
    <ConverterPageShell
      title="MST to UTC Converter"
      subtitle={<>Mountain Standard Time → Coordinated Universal Time · MST is <strong>7 hours behind</strong> UTC</>}
      config={config}
      infoTitle="MST vs UTC — What You Need to Know"
      infoBody={<>
        <p><strong>MST (UTC-7)</strong> covers the Rocky Mountain US states. In summer it becomes <strong>MDT (UTC-6)</strong> — except Arizona (no DST, always UTC-7).</p>
            <p><strong>UTC</strong> is the global time standard used in servers and APIs. A 9 AM MST start equals 16:00 UTC in winter.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
