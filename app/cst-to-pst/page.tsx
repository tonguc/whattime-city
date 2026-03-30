import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to PST — Central to Pacific Time',
  description: 'Convert CST to PST instantly. Central Standard Time is 2 hours ahead of Pacific Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/cst-to-pst' },
  openGraph: {
    title: 'CST to PST — Central to Pacific Time',
    description: 'CST is 2 hours ahead of PST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/cst-to-pst',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CST to PST — Central to Pacific Time',
    description: 'CST is 2 hours ahead of PST. Live converter.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'PST',
  fromTimezone: 'America/Chicago',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'Central Standard Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours ahead is CST compared to PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (Central Standard Time, UTC-6) is 2 hours ahead of PST (Pacific Standard Time, UTC-8). This 2-hour difference is constant year-round as both zones observe DST on the same dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM CST, what time is it PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM CST in Chicago, it is 7:00 AM PST in Los Angeles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the CST to PST difference change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. CST and PST both shift to CDT and PDT on the same dates, so the 2-hour gap is constant throughout the year.',
      },
    },
  ],
}

export default function CSTtoPSTPage() {
  return (
    <ConverterPageShell
      title="CST to PST Converter"
      subtitle={<>Central Standard Time → Pacific Standard Time · CST is <strong>2 hours ahead</strong> of PST</>}
      config={config}
      infoTitle="CST vs PST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>CST (UTC-6)</strong> — Central US: Chicago, Houston, Dallas, Minneapolis.
              Summer: <strong>CDT (UTC-5)</strong>.
            </p>
            <p>
              <strong>PST (UTC-8)</strong> — West Coast: LA, San Francisco, Seattle.
              Summer: <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              With a 2-hour gap, CST and PST teams have excellent business-hours overlap.
              A 9 AM–5 PM CST workday corresponds to 7 AM–3 PM PST — almost a full day of shared hours.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
