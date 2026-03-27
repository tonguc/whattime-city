import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to EST Converter — Central Time is 1 Hour Behind Eastern',
  description: 'CST is 1 hour behind EST. Convert Central to Eastern Time — live clocks, full table, and answers to "Is Central time 1 or 2 hours behind Eastern?" and "What is 12 PM CST in EST?"',
  alternates: {
    canonical: 'https://whattime.city/cst-to-est/',
  },
  openGraph: {
    title: 'CST to EST — Central Time is 1 Hour Behind Eastern',
    description: 'Convert CST to EST. Central Time is always 1 hour behind Eastern Time. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/cst-to-est/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CST to EST — Central is 1 Hour Behind Eastern',
    description: 'CST is 1 hour behind EST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'EST',
  fromTimezone: 'America/Chicago',
  toTimezone: 'America/New_York',
  fromFullName: 'Central Standard Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Detroit, MI'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is CST behind EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (Central Standard Time, UTC-6) is 1 hour behind EST (Eastern Standard Time, UTC-5). This difference stays at exactly 1 hour year-round because both zones observe Daylight Saving Time on the same dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM CST, what time is it EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM CST, it is 10:00 AM EST. CST is always 1 hour behind EST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CST and CDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST is Central Standard Time (UTC-6), used during winter. CDT is Central Daylight Time (UTC-5), used during summer Daylight Saving Time from March to November. The difference from EST/EDT remains 1 hour in both cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the CST to EST difference change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The difference is always 1 hour. Both CST and EST observe DST on the same dates each year (second Sunday in March and first Sunday in November), shifting to CDT and EDT simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'What major cities are in CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in the Central Time Zone include Chicago, Houston, Dallas, San Antonio, Austin, Minneapolis, Kansas City, St. Louis, New Orleans, Nashville, and Memphis.',
      },
    },
  ],
}

export default function CSTtoESTPage() {
  return (
    <ConverterPageShell
      title="CST to EST Converter"
      subtitle={<>Central Standard Time → Eastern Standard Time · CST is <strong>1 hour behind</strong> EST</>}
      config={config}
      infoTitle="CST vs EST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>Central Standard Time (CST)</strong> is UTC-6.
              It covers much of the central United States including Illinois, Texas, Minnesota, and Louisiana.
              During Daylight Saving Time (March–November), CST becomes <strong>CDT (UTC-5)</strong>.
            </p>
            <p>
              <strong>Eastern Standard Time (EST)</strong> is UTC-5.
              It covers the US East Coast: New York, Florida, Georgia, and the Atlantic provinces of Canada.
              During summer it becomes <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              The difference is always <strong>1 hour</strong>. With 9 AM–5 PM business hours, Chicago and New York
              share nearly a full day of overlap — making scheduling between CST and EST straightforward.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
