import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to IST — Mountain to India Time Converter',
  description: 'Convert MST to IST instantly. Mountain Time is 12.5 hours behind IST (11.5 during MDT). Live clocks, full conversion table, best call times for US Mountain to India.',
  alternates: { canonical: 'https://whattime.city/mst-to-ist/' },
  openGraph: {
    title: 'MST to IST — Mountain to India Time Converter',
    description: 'Convert MST to IST instantly. Mountain Time is 12.5 hours behind IST (11.5 during MDT). Live clocks, full conversion table, best call times for US Mountain to India.',
    type: 'website',
    url: 'https://whattime.city/mst-to-ist/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MST to IST Converter',
    description: 'Convert MST to IST. Mountain Standard Time is 12.5 hours behind India Standard Time.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'IST',
  fromTimezone: 'America/Denver',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'India Standard Time',
  fromCities: ['Denver, CO', 'Phoenix, AZ', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours behind is MST compared to IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (UTC-7) is 12 hours and 30 minutes behind IST (UTC+5:30) during US standard time. When the US observes MDT (UTC-6, March–November), the gap narrows to 11 hours and 30 minutes. Note: Arizona observes MST year-round and does not switch to MDT.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM MST, what time is it in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM MST (UTC-7), it is 9:30 PM IST the same day. During MDT (UTC-6), 9:00 AM MDT = 8:30 PM IST. Denver and Salt Lake City mornings correspond to India late evening.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for a call between Denver and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best overlap is 7:00–9:30 AM MST, which corresponds to 7:30–10:00 PM IST — within Indian evening working hours. During MDT (summer), 7:00 AM MDT = 6:30 PM IST, giving a more comfortable India-side window. Avoid calls after 10:00 AM MST as India will be past 10:30 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MST 12 or 13 hours behind IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (UTC-7) is 12 hours and 30 minutes (12.5 hours) behind IST (UTC+5:30). The half-hour comes from India\'s UTC+5:30 offset. During US daylight saving time (MDT, UTC-6), the gap is 11 hours and 30 minutes (11.5 hours). Phoenix (Arizona) stays on MST year-round, so the gap for Phoenix is always 12.5 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Arizona (except the Navajo Nation) does not observe daylight saving time and stays on MST (UTC-7) year-round. This means Arizona is always 12.5 hours behind IST, while Denver and Salt Lake City alternate between 12.5h (winter) and 11.5h (summer).',
      },
    },
  ],
}

export default function MstToIstPage() {
  return (
    <ConverterPageShell
      title="MST to IST Converter"
      subtitle={<>Mountain Standard Time → India Standard Time · MST is <strong>12.5 hours behind</strong> IST</>}
      config={config}
      infoTitle="MST vs IST — What You Need to Know"
      infoBody={<>
        <p><strong>Mountain Standard Time (MST)</strong> is UTC-7. Colorado, Utah, New Mexico, and Idaho observe MDT (UTC-6) from the second Sunday in March to the first Sunday in November. Arizona stays on MST year-round (no DST).</p>
        <p><strong>India Standard Time (IST)</strong> is UTC+5:30. India never observes daylight saving time — IST is fixed year-round.</p>
        <p>The 12.5-hour gap means the practical overlap window is narrow: <strong>7:00–9:30 AM MST = 7:30–10:00 PM IST</strong>. During MDT (summer), the window improves: 7:00 AM MDT = 6:30 PM IST — a more reasonable India evening slot.</p>
        <p>Arizona's year-round MST means Phoenix businesses always deal with a fixed 12.5-hour gap to India, unlike Denver which benefits from the MDT narrowing in summer.</p>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
          <strong className="text-amber-700">Arizona exception:</strong>
          <p className="text-amber-700 mt-1">Phoenix stays on MST (UTC-7) all year. Denver/Salt Lake switch to MDT (UTC-6) in summer → gap becomes 11.5h. India stays at UTC+5:30 year-round.</p>
        </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
