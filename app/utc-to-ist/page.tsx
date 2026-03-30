import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'UTC to IST Converter — UTC to India Time',
  description: 'Convert UTC to IST instantly. UTC is 5 hours 30 minutes behind India Standard Time (UTC+5:30). Live clocks, full conversion table, and IST offset reference.',
  alternates: { canonical: 'https://whattime.city/utc-to-ist/' },
  openGraph: { title: 'UTC to IST Converter — UTC to India Standard Time', description: 'UTC is 5:30 behind IST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/utc-to-ist/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'UTC to IST — UTC to India Standard Time', description: 'UTC is 5:30 behind IST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'UTC',
  toAbbr: 'IST',
  fromTimezone: 'UTC',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Coordinated Universal Time',
  toFullName: 'India Standard Time',
  fromCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I convert UTC to IST?', acceptedAnswer: { '@type': 'Answer', text: 'To convert UTC to IST, add 5 hours and 30 minutes. Examples: 00:00 UTC = 05:30 IST. 06:00 UTC = 11:30 IST. 12:00 UTC = 17:30 IST. 18:00 UTC = 23:30 IST. India does not observe DST, so this conversion is always the same regardless of time of year.' } },
    { '@type': 'Question', name: 'What is 9 AM UTC in IST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM UTC is 2:30 PM IST. A 9 AM UTC meeting means Indian participants are already in mid-afternoon. For morning IST hours: IST 9:00 AM = UTC 3:30 AM, and IST business hours (9 AM–6 PM) correspond to UTC 3:30 AM–12:30 PM.' } },
    { '@type': 'Question', name: 'What time is it in India when it is midnight UTC?', acceptedAnswer: { '@type': 'Answer', text: 'Midnight UTC (00:00) is 5:30 AM IST in India. This is early morning in India — before most business hours begin. UTC midnight marks the start of a new calendar day in UTC, while India is already 5.5 hours into its day.' } },
    { '@type': 'Question', name: 'Is IST the same as UTC+5:30?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. IST (India Standard Time) is exactly UTC+5:30. There is no DST in India, so IST is always UTC+5:30 throughout the year. India is one of the few countries with a 30-minute (non-integer) UTC offset, along with Iran, Afghanistan, India, Sri Lanka, Myanmar, and a few others.' } },
  ],
}

export default function UTCtoIST() {
  return (
    <ConverterPageShell
      title="UTC to IST Converter"
      subtitle={<>Coordinated Universal Time → India Standard Time · UTC is <strong>5 hours 30 minutes behind</strong> IST</>}
      config={config}
      infoTitle="UTC vs IST — Converting to India Time"
      infoBody={<>
        <p><strong>UTC (UTC+0)</strong> — Coordinated Universal Time, the world's primary time standard. Used in aviation, software, finance, and international communications.</p>
            <p><strong>IST (UTC+5:30)</strong> — India Standard Time, a fixed half-hour offset. No DST. The entire country of India — from Mumbai to Kolkata — uses the same single time zone.</p>
            <p>Quick reference: UTC + 5:30 = IST. IST business hours (9 AM–6 PM IST) = UTC 3:30 AM–12:30 PM. Teams working across UTC and IST often schedule standups at UTC 4:00–5:00 AM = IST 9:30–10:30 AM.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
