import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to UTC — Australian Eastern Time to UTC Converter',
  description: 'Convert AEST to UTC instantly. Australian Eastern Standard Time (UTC+10) is 10 hours ahead of UTC. Live clocks, full conversion table, and AEST offset reference.',
  alternates: { canonical: 'https://whattime.city/aest-to-utc/' },
  openGraph: { title: 'AEST to UTC Converter — Australian Eastern Time to UTC', description: 'AEST is 10 hours ahead of UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/aest-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'AEST to UTC — Australian Eastern Time to UTC', description: 'AEST is 10 hours ahead of UTC. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'UTC',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'UTC',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Newcastle', 'Wollongong'],
  toCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is AEST in UTC?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time) is UTC+10. Sydney, Melbourne, Brisbane, and Canberra use AEST in winter. During Australian summer (October–April), NSW, VIC, ACT, and TAS shift to AEDT (UTC+11). Queensland stays on AEST (UTC+10) year-round.' } },
    { '@type': 'Question', name: 'How do I convert AEST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert AEST to UTC, subtract 10 hours. Examples: 9:00 AM AEST = 11:00 PM UTC (previous day). 12:00 PM AEST = 2:00 AM UTC. 6:00 PM AEST = 8:00 AM UTC. 10:00 PM AEST = 12:00 PM (noon) UTC. Note: during AEDT (Australian DST), subtract 11 hours instead.' } },
    { '@type': 'Question', name: 'What is the difference between AEST and AEDT?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time) is UTC+10 and is used in winter (approximately April–October). AEDT (Australian Eastern Daylight Time) is UTC+11 and is used in summer (approximately October–April). Queensland does not observe DST and stays on AEST (UTC+10) year-round.' } },
    { '@type': 'Question', name: 'What is 00:00 UTC in AEST?', acceptedAnswer: { '@type': 'Answer', text: '00:00 UTC (midnight UTC) is 10:00 AM AEST (next day). UTC midnight corresponds to mid-morning in Sydney. For developers: to display UTC timestamps in Australian Eastern Time, add 10 hours (AEST) or 11 hours (AEDT). The IANA timezone identifier is Australia/Sydney.' } },
  ],
}

export default function AESTtoUTC() {
  return (
    <ConverterPageShell
      title="AEST to UTC Converter"
      subtitle={<>Australian Eastern Standard Time → Coordinated Universal Time · AEST is <strong>10 hours ahead</strong> of UTC</>}
      config={config}
      infoTitle="AEST vs UTC — Sydney to World Standard Time"
      infoBody={<>
        <p><strong>AEST (UTC+10)</strong> — Australian Eastern Standard Time. Used by NSW, VIC, QLD, ACT, and TAS. NSW/VIC/ACT/TAS shift to AEDT (UTC+11) in summer; Queensland stays on AEST year-round.</p>
            <p><strong>UTC (UTC+0)</strong> — The world's primary time standard. All global time zones are defined relative to UTC.</p>
            <p>AEST = UTC + 10 hours. Sydney 9 AM business start = UTC 11 PM (previous night). Australian systems and APIs often need UTC↔AEST conversion. Use <strong>Australia/Sydney</strong> IANA ID for DST-aware conversions.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
