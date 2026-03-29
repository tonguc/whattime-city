import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'PST to CST — Pacific to Central Time',
  description: 'PST is 2 hours behind CST (UTC-8 vs UTC-6). Convert Pacific to Central Time instantly — live clocks, full conversion table, and best overlap hours.',
  alternates: { canonical: 'https://whattime.city/pst-to-cst/' },
  openGraph: {
    title: 'PST to CST — Pacific to Central Time',
    description: 'PST is 2 hours behind CST. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/pst-to-cst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PST to CST — Pacific to Central Time',
    description: 'PST is 2 hours behind CST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'PST',
  toAbbr: 'CST',
  fromTimezone: 'America/Los_Angeles',
  toTimezone: 'America/Chicago',
  fromFullName: 'Pacific Standard Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is PST behind CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time, UTC-8) is 1 hour behind CST (Central Standard Time, UTC-6). This difference stays at exactly 1 hour year-round because both zones observe Daylight Saving Time on the same dates, shifting to PDT (UTC-7) and CDT (UTC-5) simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM PST, what time is it CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM PST, it is 11:00 AM CST. PST is 2 hours behind CST. Note: PST (UTC-8) vs CST (UTC-6) is a 2-hour difference, not 1.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between PST and CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (UTC-8) is 2 hours behind CST (UTC-6). During Daylight Saving Time, PDT (UTC-7) is 2 hours behind CDT (UTC-5) — the difference remains 2 hours year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What major cities are in PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in Pacific Time include Los Angeles, San Francisco, Seattle, Portland, Las Vegas, San Diego, Sacramento, and Vancouver (Canada).',
      },
    },
    {
      '@type': 'Question',
      name: 'What major cities are in CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in Central Time include Chicago, Houston, Dallas, San Antonio, Austin, Minneapolis, Kansas City, St. Louis, New Orleans, Nashville, and Memphis.',
      },
    },
  ],
}

export default function PSTtoCST() {
  return (
    <ConverterPageShell
      title="PST to CST Converter"
      subtitle={<>Pacific Standard Time → Central Standard Time · PST is <strong>2 hours behind</strong> CST</>}
      config={config}
      infoTitle="PST vs CST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>Pacific Standard Time (PST)</strong> is UTC-8.
              It covers the US West Coast: California, Washington, Oregon, and Nevada.
              During Daylight Saving Time (March–November), PST becomes <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              <strong>Central Standard Time (CST)</strong> is UTC-6.
              It covers much of the central United States including Illinois, Texas, Minnesota, and Louisiana.
              During Daylight Saving Time, CST becomes <strong>CDT (UTC-5)</strong>.
            </p>
            <p>
              The difference is always <strong>2 hours</strong>. A 9 AM start in Chicago is 7 AM in Los Angeles — workable for cross-timezone collaboration with early West Coast starts.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
