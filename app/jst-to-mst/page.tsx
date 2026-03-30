import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to MST Converter — Japan to MST',
  description: 'Convert JST to MST instantly. Japan Standard Time (UTC+9) is 16 hours ahead of Mountain Standard Time (UTC-7). Live clocks, Tokyo–Denver scheduling guide.',
  alternates: { canonical: 'https://whattime.city/jst-to-mst/' },
  openGraph: { title: 'JST to MST — Japan Standard to Mountain', description: 'JST is 16 hours ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to MST — Japan Standard to Mountain', description: 'JST is 16 hours ahead of MST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'MST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'America/Denver',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is JST ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 16 hours ahead of MST (Mountain Standard Time, UTC-7). During US Mountain Daylight Time (MDT, UTC-6), JST is 15 hours ahead. Japan does not observe DST, so the gap only changes when the US shifts clocks in spring and autumn.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in MST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 5:00 PM MST the previous day. For example, Tuesday 9:00 AM Tokyo = Monday 5:00 PM Denver (in winter). During MDT (US summer), 9:00 AM JST = 6:00 PM MDT the previous day.' } },
    { '@type': 'Question', name: 'What is the best time to call Denver from Tokyo?', acceptedAnswer: { '@type': 'Answer', text: 'The best window to call Denver (MST) from Tokyo (JST) in winter is 4:00–8:00 PM JST = 12:00 AM–4:00 AM MST — which is impractical. In practice, Tokyo evening (8:00–10:00 PM JST) = Denver morning (4:00–6:00 AM MST) is the closest workable overlap. Async communication is standard for Japan–Mountain US teams.' } },
    { '@type': 'Question', name: 'What date is it in Denver when it is Monday in Tokyo?', acceptedAnswer: { '@type': 'Answer', text: 'With a 16-hour lead, Tokyo is always on the next calendar day compared to Denver. When it is Monday morning in Tokyo, it is still Sunday in Denver. A Tuesday meeting in Tokyo must be booked as a Monday in Denver.' } },
  ],
}

export default function JSTtoMST() {
  return (
    <ConverterPageShell
      title="JST to MST Converter"
      subtitle={<>Japan Standard Time → Mountain Standard Time · JST is <strong>16 hours ahead</strong> of MST</>}
      config={config}
      infoTitle="JST vs MST — Tokyo to Denver"
      infoBody={<>
        <p><strong>JST (UTC+9)</strong> — Japan has no DST, always UTC+9. <strong>MST (UTC-7)</strong> — Mountain US shifts to MDT (UTC-6) in summer.</p>
            <p>At 16 hours ahead, Tokyo is always on the next calendar day compared to Denver. The gap is among the largest for regular business pairs. Async-first workflows are essential for Japan–Mountain US collaboration.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
