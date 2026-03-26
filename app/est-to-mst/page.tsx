import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to MST — Eastern to Mountain Time Converter',
  description: 'Convert EST to MST instantly. Eastern Standard Time is 2 hours ahead of Mountain Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/est-to-mst/' },
  openGraph: {
    title: 'EST to MST Time Converter — Eastern to Mountain',
    description: 'EST is 2 hours ahead of MST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/est-to-mst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to MST — Eastern to Mountain Time',
    description: 'EST is 2 hours ahead of MST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'MST',
  fromTimezone: 'America/New_York',
  toTimezone: 'America/Denver',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is EST ahead of MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time, UTC-5) is 2 hours ahead of MST (Mountain Standard Time, UTC-7). When it is 9:00 AM EST in New York, it is 7:00 AM MST in Denver. Both zones shift simultaneously for DST, keeping the 2-hour difference constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM EST, what time is it MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM EST, it is 7:00 AM MST. EST is always 2 hours ahead of MST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York (Eastern Time) is 2 hours ahead of Denver (Mountain Time) year-round. Both cities observe Daylight Saving Time on the same schedule, so the gap stays at 2 hours in both winter (EST vs MST) and summer (EDT vs MDT).',
      },
    },
  ],
}

export default function ESTtoMST() {
  return (
    <ConverterPageShell
      title="EST to MST Converter"
      subtitle={<>Eastern Standard Time → Mountain Standard Time · EST is <strong>2 hours ahead</strong> of MST</>}
      config={config}
      infoTitle="EST vs MST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>Eastern Standard Time (EST)</strong> is UTC-5, covering the US East Coast.
              During summer it shifts to <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              <strong>Mountain Standard Time (MST)</strong> is UTC-7, covering Colorado, Utah, Montana, and neighboring states.
              During Daylight Saving Time it becomes <strong>MDT (UTC-6)</strong>.
            </p>
            <p>
              The difference is always <strong>2 hours</strong>. A 5 PM ET close of business is 3 PM MT — giving Mountain Time employees a bit more afternoon flexibility.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
