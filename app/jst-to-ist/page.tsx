import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to IST Converter — Japan to India Time',
  description: 'Convert JST to IST instantly. Japan Standard Time (UTC+9) is 3 hours 30 minutes ahead of India Standard Time (UTC+5:30). Live clocks and conversion table.',
  alternates: { canonical: 'https://whattime.city/jst-to-ist/' },
  openGraph: { title: 'JST to IST Converter — Japan to India', description: 'JST is 3:30 ahead of IST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-ist/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to IST — Japan to India Standard Time', description: 'JST is 3:30 ahead of IST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'IST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Japan Standard Time',
  toFullName: 'India Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is JST ahead of IST?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 3 hours 30 minutes ahead of IST (India Standard Time, UTC+5:30). Neither Japan nor India observes Daylight Saving Time, making this a completely fixed offset — always 3.5 hours, year-round, with no seasonal changes.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in IST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 5:30 AM IST (Mumbai/Delhi). For Japan morning meetings, Indian participants are in very early morning. The best practical overlap is 10:00 AM–4:00 PM IST = 1:30 PM–7:30 PM JST — Indian business hours catch Tokyo afternoon.' } },
    { '@type': 'Question', name: 'What is the best time for Japan–India calls?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap window for Tokyo (JST) and Bangalore (IST) is 9:30 AM–1:00 PM IST = 1:00–4:30 PM JST. This gives India a productive morning window while Japan is in the afternoon. Japanese companies with Indian engineering teams often use 10:00 AM IST / 1:30 PM JST for standups.' } },
    { '@type': 'Question', name: 'Why is the JST to IST difference always 3 hours 30 minutes?', acceptedAnswer: { '@type': 'Answer', text: 'JST is UTC+9 and IST is UTC+5:30. The difference is 9 − 5.5 = 3.5 hours = 3 hours 30 minutes. Since neither Japan nor India observes DST, this gap is completely fixed throughout the year — one of the most predictable timezone pairs for international scheduling.' } },
  ],
}

export default function JSTtoIST() {
  return (
    <ConverterPageShell
      title="JST to IST Converter"
      subtitle={<>Japan Standard Time → India Standard Time · JST is <strong>3 hours 30 minutes ahead</strong> of IST</>}
      config={config}
      infoTitle="JST vs IST — Tokyo to Bangalore"
      infoBody={<>
        <p><strong>JST (UTC+9)</strong> — Japan Standard Time. Fixed, no DST. <strong>IST (UTC+5:30)</strong> — India Standard Time. Fixed, no DST.</p>
            <p>Both Japan and India have no Daylight Saving Time, making this one of the most predictable timezone pairs in the world. The 3:30 gap never changes — no seasonal recalculation needed.</p>
            <p>Best overlap: <strong>9:30 AM–1:00 PM IST = 1:00–4:30 PM JST</strong>. The Japan–India tech corridor (Tokyo ↔ Bangalore, Hyderabad, Pune) is increasingly active in software and automotive industries.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
