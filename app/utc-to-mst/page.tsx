import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'UTC to MST Converter — Universal to Mountain',
  description: 'Convert UTC to MST instantly. UTC is 7 hours ahead of Mountain Standard Time (MST, UTC-7). Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/utc-to-mst/' },
  openGraph: { title: 'UTC to MST — Universal to Mountain Time', description: 'UTC is 7 hours ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/utc-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'UTC to MST — Universal to Mountain Time', description: 'UTC is 7 hours ahead of MST. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'UTC',
  toAbbr: 'MST',
  fromTimezone: 'UTC',
  toTimezone: 'America/Denver',
  fromFullName: 'Coordinated Universal Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is UTC ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'UTC is 7 hours ahead of MST (Mountain Standard Time, UTC-7) in winter. During US Daylight Saving Time (MDT, UTC-6), UTC is only 6 hours ahead.' } },
    { '@type': 'Question', name: 'What is 12:00 UTC in MST?', acceptedAnswer: { '@type': 'Answer', text: '12:00 UTC is 5:00 AM MST (UTC-7) in winter, or 6:00 AM MDT (UTC-6) in summer. Subtract 7 hours from UTC for MST, or 6 hours for MDT.' } },
    { '@type': 'Question', name: 'How do I convert UTC to Mountain Time?', acceptedAnswer: { '@type': 'Answer', text: 'To convert UTC to MST (winter): subtract 7 hours. To convert to MDT (summer, March–November): subtract 6 hours. Example: 15:00 UTC = 8:00 AM MST = 9:00 AM MDT.' } },
    { '@type': 'Question', name: 'What is Arizona\'s UTC offset?', acceptedAnswer: { '@type': 'Answer', text: 'Arizona (except the Navajo Nation) uses MST (UTC-7) year-round and does not observe Daylight Saving Time. So Arizona is always UTC-7, regardless of season.' } },
  ],
}

export default function UTCtoMST() {
  return (
    <ConverterPageShell
      title="UTC to MST Converter"
      subtitle={<>Coordinated Universal Time → Mountain Standard Time · UTC is <strong>7 hours ahead</strong> of MST</>}
      config={config}
      infoTitle="UTC vs MST — What You Need to Know"
      infoBody={<>
        <p><strong>UTC</strong> is the global time standard with no DST. <strong>MST (UTC-7)</strong> covers the Rocky Mountain states. In summer, MST shifts to <strong>MDT (UTC-6)</strong> — except Arizona, which stays at UTC-7 year-round.</p>
            <p>15:00 UTC is 8:00 AM MST — a common server log anchor for Mountain Time operations.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
