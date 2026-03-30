import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to UTC Converter — India to UTC',
  description: 'Convert IST to UTC instantly. India Standard Time (UTC+5:30) is 5 hours 30 minutes ahead of UTC. Live clocks, full conversion table, and IST offset reference.',
  alternates: { canonical: 'https://whattime.city/ist-to-utc/' },
  openGraph: { title: 'IST to UTC — India Standard to Universal', description: 'IST is 5 hours 30 minutes ahead of UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/ist-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'IST to UTC — India Standard Time to UTC', description: 'IST is 5:30 ahead of UTC. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'UTC',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'UTC',
  fromFullName: 'India Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
  toCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is IST in UTC?', acceptedAnswer: { '@type': 'Answer', text: 'IST (India Standard Time) is UTC+5:30 — 5 hours and 30 minutes ahead of UTC. India does not observe Daylight Saving Time, making IST a fixed offset year-round. The :30 half-hour component is what makes IST conversions distinctive.' } },
    { '@type': 'Question', name: 'How do I convert IST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert IST to UTC, subtract 5 hours and 30 minutes. Examples: 9:00 AM IST = 3:30 AM UTC. 12:00 PM (noon) IST = 6:30 AM UTC. 6:00 PM IST = 12:30 PM UTC. 11:30 PM IST = 6:00 PM UTC. Since India has no DST, this formula is constant throughout the year.' } },
    { '@type': 'Question', name: 'Why does India use a 30-minute UTC offset?', acceptedAnswer: { '@type': 'Answer', text: 'India uses UTC+5:30 because when India standardised its time zone in 1906, it chose the 82°30\'E meridian — exactly halfway between UTC+5 and UTC+6. Using a single national time zone across a country spanning over 30 degrees of longitude was a political decision for unity, and the half-hour offset was the compromise.' } },
    { '@type': 'Question', name: 'What is 00:00 UTC in IST?', acceptedAnswer: { '@type': 'Answer', text: '00:00 UTC (midnight UTC) is 05:30 IST (5:30 AM India Standard Time). For developers: when working with UTC timestamps in Indian systems, add 5.5 hours (19,800 seconds) to get IST. UTC noon (12:00) = IST 17:30 (5:30 PM).' } },
  ],
}

export default function ISTtoUTC() {
  return (
    <ConverterPageShell
      title="IST to UTC Converter"
      subtitle={<>India Standard Time → Coordinated Universal Time · IST is <strong>5 hours 30 minutes ahead</strong> of UTC</>}
      config={config}
      infoTitle="IST vs UTC — Fixed Half-Hour Offset"
      infoBody={<>
        <p><strong>IST (UTC+5:30)</strong> — India Standard Time, one of only a handful of half-hour UTC offsets in the world. No DST, fixed year-round. Used across the entire Indian subcontinent — India has a single national time zone.</p>
            <p><strong>UTC (UTC+0)</strong> — The world's primary time standard. All other zones are offset from UTC.</p>
            <p>The half-hour offset means IST conversions always produce :00 or :30 minutes — never :15 or :45. For tech teams: UTC midnight = 5:30 AM IST; UTC noon = 5:30 PM IST.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
