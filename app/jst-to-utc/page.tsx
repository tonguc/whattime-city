import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to UTC — Japan Standard Time to UTC Converter',
  description: 'Convert JST to UTC instantly. Japan Standard Time (UTC+9) is 9 hours ahead of UTC. Live clocks, full conversion table, and JST offset reference.',
  alternates: { canonical: 'https://whattime.city/jst-to-utc/' },
  openGraph: { title: 'JST to UTC Converter — Japan Standard Time to UTC', description: 'JST is 9 hours ahead of UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to UTC — Japan Standard Time to UTC', description: 'JST is 9 hours ahead of UTC. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'UTC',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'UTC',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is JST in UTC?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time) is UTC+9. Japan is 9 hours ahead of UTC at all times. Japan does not observe Daylight Saving Time, making JST one of the most stable and predictable offsets globally — always exactly UTC+9, year-round.' } },
    { '@type': 'Question', name: 'How do I convert JST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert JST to UTC, subtract 9 hours. For example: 9:00 AM JST = 12:00 AM (midnight) UTC. 6:00 PM JST = 9:00 AM UTC. 12:00 PM (noon) JST = 3:00 AM UTC. Since Japan does not observe DST, this formula never changes.' } },
    { '@type': 'Question', name: 'Why does Japan not observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Japan abolished Daylight Saving Time in 1952, after a brief post-WWII experiment. Cultural and practical reasons cited include: Japan\'s latitude means daylight hours vary less than in Europe or North America; the disruption to train schedules was significant; and public opposition was strong. Japan has not observed DST since.' } },
    { '@type': 'Question', name: 'What is 00:00 UTC in JST?', acceptedAnswer: { '@type': 'Answer', text: '00:00 UTC (midnight UTC) is 09:00 JST (9:00 AM Japan Standard Time). Server timestamps in UTC+0 are exactly 9 hours behind Tokyo local time. For developers: to convert UTC epoch to JST, add 9 hours (or 32,400 seconds).' } },
  ],
}

export default function JSTtoUTC() {
  return (
    <ConverterPageShell
      title="JST to UTC Converter"
      subtitle={<>Japan Standard Time → Coordinated Universal Time · JST is <strong>9 hours ahead</strong> of UTC</>}
      config={config}
      infoTitle="JST vs UTC — Fixed Offset, No DST"
      infoBody={<>
        <p><strong>JST (UTC+9)</strong> — Japan Standard Time is one of the world's most stable offsets. No DST, no seasonal changes — always exactly 9 hours ahead of UTC.</p>
            <p><strong>UTC (UTC+0)</strong> — The world's primary time standard, maintained by atomic clocks. All other timezones are defined as offsets from UTC.</p>
            <p>For developers and engineers working with Japanese APIs or databases: JST = UTC + 9h. Midnight UTC is 9:00 AM JST. Common in server log analysis and cross-timezone scheduling.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
