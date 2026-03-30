import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to CST Converter — Japan to Central Time',
  description: 'Convert JST to CST instantly. Japan Standard Time (UTC+9) is 15 hours ahead of Central Standard Time (UTC-6). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/jst-to-cst/' },
  openGraph: { title: 'JST to CST Converter — Japan to Central Time', description: 'JST is 15 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to CST — Japan Standard to Central', description: 'JST is 15 hours ahead of CST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'CST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'America/Chicago',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is JST ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 15 hours ahead of CST (Central Standard Time, UTC-6) in US winter. During US CDT (UTC-5), JST is 14 hours ahead. Japan does not observe DST, so the gap only changes when the US shifts clocks.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in CST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 6:00 PM CST the previous day. For example, Tuesday 9:00 AM Tokyo = Monday 6:00 PM Chicago. During CDT (US summer), 9:00 AM JST = 7:00 PM CDT previous day.' } },
    { '@type': 'Question', name: 'What is the time difference between Tokyo and Chicago?', acceptedAnswer: { '@type': 'Answer', text: 'Tokyo (JST, UTC+9) is 15 hours ahead of Chicago (CST, UTC-6) in winter, and 14 hours ahead in summer (CDT, UTC-5). Tokyo is always on the next calendar day compared to Chicago.' } },
  ],
}

export default function JSTtoCST() {
  return (
    <ConverterPageShell
      title="JST to CST Converter"
      subtitle={<>Japan Standard Time → Central Standard Time · JST is <strong>15 hours ahead</strong> of CST</>}
      config={config}
      infoTitle="JST vs CST — Tokyo to Chicago"
      infoBody={<>
        <p><strong>JST (UTC+9)</strong> — Japan has no DST, always UTC+9. <strong>CST (UTC-6)</strong> — Central US shifts to CDT (UTC-5) in summer.</p>
            <p>The 14–15 hour gap means Tokyo is always on the next calendar day. Async communication is standard for Japan–Central US teams.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
