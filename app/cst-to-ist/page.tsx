import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to IST — Central to India Time Converter',
  description: 'Convert CST to IST instantly. Central Time is 11.5 hours behind IST (10.5 during CDT). Live clocks, full conversion table, best call times for US Central to India.',
  alternates: { canonical: 'https://whattime.city/cst-to-ist/' },
  openGraph: {
    title: 'CST to IST — Central to India Time Converter',
    description: 'Convert CST to IST instantly. Central Time is 11.5 hours behind IST (10.5 during CDT). Live clocks, full conversion table, best call times for US Central to India.',
    type: 'website',
    url: 'https://whattime.city/cst-to-ist/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CST to IST Converter',
    description: 'Convert CST to IST. Central Standard Time is 11.5 hours behind India Standard Time.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'IST',
  fromTimezone: 'America/Chicago',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Central Standard Time',
  toFullName: 'India Standard Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'San Antonio, TX', 'Austin, TX', 'Minneapolis, MN'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours behind is CST compared to IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (UTC-6) is 11 hours and 30 minutes behind IST (UTC+5:30) during US standard time. When the US observes CDT (UTC-5, March–November), the gap narrows to 10 hours and 30 minutes. India does not observe daylight saving time — IST is UTC+5:30 year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM CST, what time is it in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM CST (UTC-6), it is 8:30 PM IST the same day. During CDT (UTC-5), 9:00 AM CDT = 7:30 PM IST. The US Central morning corresponds to India evening.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for a call between Chicago and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best overlap is 8:00–10:00 AM CST, which corresponds to 7:30–9:30 PM IST — catching India professionals before they end their evening. During CDT (summer), 8:00 AM CDT = 6:30 PM IST, giving a slightly wider window. Avoid scheduling calls after 11:00 AM CST as it will be past 10:30 PM in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CST 11 or 12 hours behind IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (UTC-6) is 11 hours and 30 minutes (11.5 hours) behind IST (UTC+5:30). The half-hour offset exists because India uses UTC+5:30, not a round UTC offset. During US daylight saving time (CDT, UTC-5), the gap is 10 hours and 30 minutes (10.5 hours).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does India observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India Standard Time (IST) is UTC+5:30 year-round with no daylight saving adjustment. Only the US side changes — CST (UTC-6) in winter, CDT (UTC-5) in summer — which shifts the total gap between 10.5 and 11.5 hours.',
      },
    },
  ],
}

export default function CstToIstPage() {
  return (
    <ConverterPageShell
      title="CST to IST Converter"
      subtitle={<>Central Standard Time → India Standard Time · CST is <strong>11.5 hours behind</strong> IST</>}
      config={config}
      infoTitle="CST vs IST — What You Need to Know"
      infoBody={<>
        <p><strong>Central Standard Time (CST)</strong> is UTC-6. Texas, Illinois, Minnesota, and most of the US Midwest observe CDT (UTC-5) from the second Sunday in March to the first Sunday in November.</p>
        <p><strong>India Standard Time (IST)</strong> is UTC+5:30. India never observes daylight saving time — IST is fixed year-round.</p>
        <p>The 11.5-hour gap means Chicago morning and India evening overlap: <strong>8:00–10:00 AM CST = 7:30–9:30 PM IST</strong>. During CDT (summer), the gap narrows to 10.5h: 8:00 AM CDT = 6:30 PM IST — a slightly better window for both sides.</p>
        <p>The US Central time zone's mid-continent position makes it a common hub for India-based IT and outsourcing coordination covering clients in both Chicago and Dallas.</p>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
          <strong className="text-amber-700">DST note:</strong>
          <p className="text-amber-700 mt-1">When the US enters CDT (March–November), clocks move forward 1 hour → gap becomes 10.5h. India stays at UTC+5:30 all year.</p>
        </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
