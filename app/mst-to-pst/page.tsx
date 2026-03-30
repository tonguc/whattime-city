import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to PST Converter — Mountain to Pacific',
  description: 'Convert MST to PST instantly. Mountain Standard Time is 1 hour ahead of Pacific Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/mst-to-pst/' },
  openGraph: {
    title: 'MST to PST — Mountain to Pacific Time',
    description: 'MST is 1 hour ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/mst-to-pst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MST to PST — Mountain to Pacific Time',
    description: 'MST is 1 hour ahead of PST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'PST',
  fromTimezone: 'America/Denver',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Boise, ID', 'El Paso, TX', 'Tucson, AZ'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is MST ahead of PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (Mountain Standard Time, UTC-7) is 1 hour ahead of PST (Pacific Standard Time, UTC-8). When it is 9:00 AM PST in Los Angeles, it is 10:00 AM MST in Denver. Both zones observe DST on the same dates, so the 1-hour difference is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9 AM MST, what time is it PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM MST, it is 8:00 AM PST. MST is always 1 hour ahead of PST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Denver and Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Denver (Mountain Time) is 1 hour ahead of Los Angeles (Pacific Time) year-round. Both cities observe Daylight Saving Time on the same schedule (MST→MDT and PST→PDT), keeping the gap at exactly 1 hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona affect the MST to PST difference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona (except the Navajo Nation) does not observe DST. In summer, when the rest of the Mountain zone shifts to MDT (UTC-6), Arizona stays at UTC-7. This temporarily makes Arizona the same time as PDT (UTC-7) on the West Coast.',
      },
    },
  ],
}

export default function MSTtoPST() {
  return (
    <ConverterPageShell
      title="MST to PST Converter"
      subtitle={<>Mountain Standard Time → Pacific Standard Time · MST is <strong>1 hour ahead</strong> of PST</>}
      config={config}
      infoTitle="MST vs PST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>MST (Mountain Standard Time)</strong> is UTC-7, covering Colorado,
              Utah, Montana, Wyoming, New Mexico, and most of Idaho. During DST it becomes <strong>MDT (UTC-6)</strong>.
            </p>
            <p>
              <strong>PST (Pacific Standard Time)</strong> is UTC-8, covering California,
              Washington, Oregon, and Nevada. During DST it becomes <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              The 1-hour gap is constant year-round. A 9:00 AM meeting in Seattle is 10:00 AM in Denver —
              easy to coordinate across the Mountain and Pacific zones.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
