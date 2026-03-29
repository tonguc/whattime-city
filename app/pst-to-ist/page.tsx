import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'PST to IST — Pacific to India Time Converter',
  description: 'Convert PST to IST instantly. Pacific Time is 13.5 hours behind IST (12.5 during PDT). Live clocks, full conversion table, best call times for US West Coast to India.',
  alternates: { canonical: 'https://whattime.city/pst-to-ist/' },
  openGraph: {
    title: 'PST to IST — Pacific to India Time Converter',
    description: 'Convert PST to IST instantly. Pacific Time is 13.5 hours behind IST (12.5 during PDT). Live clocks, full conversion table, best call times for US West Coast to India.',
    type: 'website',
    url: 'https://whattime.city/pst-to-ist/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PST to IST Converter',
    description: 'Convert PST to IST. Pacific Standard Time is 13.5 hours behind India Standard Time.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'PST',
  toAbbr: 'IST',
  fromTimezone: 'America/Los_Angeles',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Pacific Standard Time',
  toFullName: 'India Standard Time',
  fromCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'San Diego, CA', 'Portland, OR', 'Las Vegas, NV'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours behind is PST compared to IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (UTC-8) is 13 hours and 30 minutes behind IST (UTC+5:30) during US standard time. When the US observes PDT (UTC-7, March–November), the gap narrows to 12 hours and 30 minutes. India does not observe daylight saving time — IST remains UTC+5:30 year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM PST, what time is it in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM PST (UTC-8), it is 10:30 PM IST the same day. During PDT (UTC-7), 9:00 AM PDT = 9:30 PM IST. India is always ahead — the US West Coast morning corresponds to India evening.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for a call between Los Angeles and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best overlap is 6:30–9:00 AM PST, which corresponds to 8:00–10:30 PM IST. During PDT (summer), 7:00–9:00 AM PDT = 7:30–9:30 PM IST. This requires India participants to be available in the evening. Avoid calling India before 6:00 AM PST (before 7:30 PM IST).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PST 13 or 14 hours behind IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (UTC-8) is exactly 13 hours and 30 minutes (13.5 hours) behind IST (UTC+5:30). It is not a whole-hour difference because India uses a UTC+5:30 offset. During US daylight saving time (PDT, UTC-7), the difference is 12 hours and 30 minutes (12.5 hours).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does India observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India does not observe daylight saving time. India Standard Time (IST) is UTC+5:30 year-round. This means the PST–IST gap changes only when the US switches between PST and PDT — not when India changes, because India never does.',
      },
    },
  ],
}

export default function PstToIstPage() {
  return (
    <ConverterPageShell
      title="PST to IST Converter"
      subtitle={<>Pacific Standard Time → India Standard Time · PST is <strong>13.5 hours behind</strong> IST</>}
      config={config}
      infoTitle="PST vs IST — What You Need to Know"
      infoBody={<>
        <p><strong>Pacific Standard Time (PST)</strong> is UTC-8. California, Oregon, Washington, and Nevada observe PDT (UTC-7) from the second Sunday in March to the first Sunday in November.</p>
        <p><strong>India Standard Time (IST)</strong> is UTC+5:30. India never observes daylight saving time — IST is fixed year-round.</p>
        <p>The 13.5-hour gap makes US West Coast to India scheduling challenging. The only practical overlap is <strong>early morning PST / evening IST</strong>: 6:30–9:00 AM PST = 8:00–10:30 PM IST. During PDT (summer), the gap shrinks to 12.5h: 7:00 AM PDT = 7:30 PM IST.</p>
        <p>India's tech hubs (Bangalore, Hyderabad, Pune) heavily serve US West Coast clients — this is one of the most-used international time conversions in the global IT industry.</p>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
          <strong className="text-amber-700">DST note:</strong>
          <p className="text-amber-700 mt-1">When the US enters PDT (March–November), PST clocks move forward 1 hour → gap becomes 12.5h. India stays at UTC+5:30 all year.</p>
        </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
