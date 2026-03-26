import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to PST — Australian Eastern to Pacific Time Converter',
  description: 'Convert AEST to PST instantly. Australian Eastern Standard Time (UTC+10) is 18 hours ahead of Pacific Standard Time (UTC-8). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/aest-to-pst/' },
  openGraph: {
    title: 'AEST to PST Converter — Australian Eastern to Pacific Time',
    description: 'AEST is 18 hours ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/aest-to-pst/',
    siteName: 'whattime.city',
  },
  twitter: { card: 'summary_large_image', title: 'AEST to PST — Australian Eastern to Pacific Time', description: 'AEST is 18 hours ahead of PST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'PST',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Hobart', 'Gold Coast'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is AEST ahead of PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AEST (Australian Eastern Standard Time, UTC+10) is 18 hours ahead of PST (UTC-8) in US winter. The gap changes throughout the year because Australia observes DST in the Southern Hemisphere summer (October–April), shifting Sydney to AEDT (UTC+11). During US PDT (UTC-7), the gap is 17 or 18 hours depending on whether Australia is also on daylight saving.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 9 AM AEST in PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '9:00 AM AEST (Sydney) is 3:00 PM PST the previous day in US winter. For example, Wednesday 9:00 AM Sydney = Tuesday 3:00 PM Los Angeles. The gap shifts slightly across the year due to the Southern Hemisphere DST schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best overlap window for Sydney and Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Due to the 17–19 hour gap, synchronous meetings between Sydney and Los Angeles are very difficult. The common approach: 7:00–9:00 AM PST = 1:00–3:00 AM AEST next day, or 4:00–6:00 PM AEST = 10:00 PM–midnight PST previous day. Most Australia–US West Coast teams use asynchronous communication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Australia observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but not all states. New South Wales, Victoria, South Australia, Tasmania, and the ACT observe DST from the first Sunday in October to the first Sunday in April (Southern Hemisphere summer). Queensland, Western Australia, and the Northern Territory do not observe DST. During Australian DST, Sydney uses AEDT (UTC+11).',
      },
    },
  ],
}

export default function AESTtoPST() {
  return (
    <ConverterPageShell
      title="AEST to PST Converter"
      subtitle={<>Australian Eastern Standard Time → Pacific Standard Time · AEST is <strong>18–19 hours ahead</strong> of PST</>}
      config={config}
      infoTitle="AEST vs PST — Sydney to Los Angeles"
      infoBody={<>
        <p><strong>AEST (Australian Eastern Standard Time)</strong> is UTC+10. During Australian summer (October–April), NSW and Victoria use <strong>AEDT (UTC+11)</strong>.</p>
            <p><strong>PST (Pacific Standard Time)</strong> is UTC-8. The US West Coast uses <strong>PDT (UTC-7)</strong> from March to November.</p>
            <p>The Sydney–Los Angeles corridor is critical for gaming, tech, and finance. The 17–19 hour gap means Sydney is effectively always on the <strong>next calendar day</strong> compared to LA.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
