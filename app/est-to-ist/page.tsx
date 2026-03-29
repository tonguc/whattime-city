import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to IST — Eastern to India Time Converter',
  description: 'Convert EST to IST instantly. Eastern Time is 10.5 hours behind IST (9.5 during EDT). Live clocks, full conversion table, best call times for US East Coast to India.',
  alternates: { canonical: 'https://whattime.city/est-to-ist/' },
  openGraph: {
    title: 'EST to IST — Eastern to India Time Converter',
    description: 'Convert EST to IST instantly. Eastern Time is 10.5 hours behind IST (9.5 during EDT). Live clocks, full conversion table, best call times for US East Coast to India.',
    type: 'website',
    url: 'https://whattime.city/est-to-ist/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to IST Converter',
    description: 'Convert EST to IST. Eastern Standard Time is 10.5 hours behind India Standard Time.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'IST',
  fromTimezone: 'America/New_York',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'India Standard Time',
  fromCities: ['New York, NY', 'Boston, MA', 'Washington DC', 'Miami, FL', 'Atlanta, GA', 'Toronto, Canada'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours behind is EST compared to IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (UTC-5) is 10 hours and 30 minutes behind IST (UTC+5:30) during US standard time. When the US observes EDT (UTC-4, March–November), the gap narrows to 9 hours and 30 minutes. India does not observe daylight saving time — IST is UTC+5:30 year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM EST, what time is it in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM EST (UTC-5), it is 7:30 PM IST the same day. During EDT (UTC-4), 9:00 AM EDT = 6:30 PM IST. The US East Coast morning aligns with India late afternoon to evening, making this one of the more workable international time pairings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for a call between New York and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best overlap is 8:00–11:00 AM EST, which corresponds to 6:30–9:30 PM IST — within India business evening hours. During EDT (summer), 8:00–11:00 AM EDT = 5:30–8:30 PM IST, an even better window. New York and India have the most workable overlap of any US time zone due to the smaller gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is EST 10 or 11 hours behind IST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (UTC-5) is 10 hours and 30 minutes (10.5 hours) behind IST (UTC+5:30). The 30-minute offset comes from India\'s use of UTC+5:30 rather than a round hour. During US daylight saving time (EDT, UTC-4), the gap is 9 hours and 30 minutes (9.5 hours).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does India observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India Standard Time (IST) is UTC+5:30 year-round. India has never observed daylight saving time. The EST–IST gap changes only when the US switches clocks: 10.5 hours in winter (EST) and 9.5 hours in summer (EDT).',
      },
    },
  ],
}

export default function EstToIstPage() {
  return (
    <ConverterPageShell
      title="EST to IST Converter"
      subtitle={<>Eastern Standard Time → India Standard Time · EST is <strong>10.5 hours behind</strong> IST</>}
      config={config}
      infoTitle="EST vs IST — What You Need to Know"
      infoBody={<>
        <p><strong>Eastern Standard Time (EST)</strong> is UTC-5. New York, Boston, Washington DC, Miami, and Toronto observe EDT (UTC-4) from the second Sunday in March to the first Sunday in November.</p>
        <p><strong>India Standard Time (IST)</strong> is UTC+5:30. India never observes daylight saving time — IST is fixed year-round.</p>
        <p>The 10.5-hour gap is the most workable US–India pairing. The overlap window is <strong>8:00–11:00 AM EST = 6:30–9:30 PM IST</strong>. During EDT (summer), it improves further: 8:00 AM EDT = 5:30 PM IST — catching India late afternoon business hours.</p>
        <p>New York is home to many Indian-American businesses and multinational companies coordinating with India offices. The relatively smaller time gap compared to PST makes EST the preferred US time zone for India collaboration.</p>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
          <strong className="text-amber-700">DST note:</strong>
          <p className="text-amber-700 mt-1">When the US enters EDT (March–November), clocks move forward 1 hour → gap becomes 9.5h. India stays at UTC+5:30 all year.</p>
        </div>
      </>}
      faqSchema={faqSchema}
    />
  )
}
