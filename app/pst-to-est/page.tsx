import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'PST to EST — Pacific 3 Hours Behind Eastern',
  description: 'PST is 3 hours behind EST. Convert Pacific Standard Time to Eastern Standard Time instantly — live clocks, full conversion table, and answers to "Is PST 3 hours behind EST?" and "What is 3pm EST in PST?"',
  alternates: {
    canonical: 'https://whattime.city/pst-to-est/',
  },
  openGraph: {
    title: 'PST to EST — Pacific 3 Hours Behind Eastern',
    description: 'Convert PST to EST. Pacific Time is always 3 hours behind Eastern Time. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/pst-to-est/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PST to EST — Pacific 3 Hours Behind Eastern',
    description: 'PST is 3 hours behind EST. Live converter, full table, and common time conversions.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'PST',
  toAbbr: 'EST',
  fromTimezone: 'America/Los_Angeles',
  toTimezone: 'America/New_York',
  fromFullName: 'Pacific Standard Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours is PST behind EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time, UTC-8) is 3 hours behind EST (Eastern Standard Time, UTC-5). This difference remains 3 hours year-round because both zones observe Daylight Saving Time on the same dates, shifting to PDT (UTC-7) and EDT (UTC-4) simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM PST, what time is it EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM PST, it is 12:00 PM (noon) EST. PST is always 3 hours behind EST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to schedule a call between PST and EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best overlap for business calls between PST and EST is 9:00 AM to 3:00 PM PST (12:00 PM to 6:00 PM EST). Outside this window, one side is outside standard business hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the PST to EST time difference change during Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The difference stays at exactly 3 hours year-round. When Daylight Saving Time begins in March, PST becomes PDT (UTC-7) and EST becomes EDT (UTC-4) on the same day, so the 3-hour gap is preserved.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities are in PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in the Pacific Time Zone include Los Angeles, San Francisco, Seattle, Portland, Las Vegas, and San Diego. During standard time this is PST (UTC-8); during summer it becomes PDT (UTC-7).',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities are in EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in the Eastern Time Zone include New York City, Miami, Boston, Atlanta, Washington D.C., and Philadelphia. During standard time this is EST (UTC-5); during summer it becomes EDT (UTC-4).',
      },
    },
  ],
}

export default function PSTtoESTPage() {
  return (
    <ConverterPageShell
      title="PST to EST Converter"
      subtitle={<>Pacific Standard Time → Eastern Standard Time · PST is <strong>3 hours behind</strong> EST</>}
      config={config}
      infoTitle="PST vs EST — What You Need to Know"
      infoBody={<>
        <p>
              <strong>Pacific Standard Time (PST)</strong> is UTC-8.
              It covers the US West Coast, including California, Washington, Oregon, and Nevada.
              During Daylight Saving Time (March–November), it becomes <strong>PDT (UTC-7)</strong>.
            </p>
            <p>
              <strong>Eastern Standard Time (EST)</strong> is UTC-5.
              It covers the US East Coast, including New York, Florida, Massachusetts, and Georgia.
              During Daylight Saving Time, it becomes <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              The difference is always <strong>3 hours</strong> — when it&apos;s 9 AM in Los Angeles, it&apos;s noon in New York.
              Because both zones observe DST on the same dates, the gap never changes to 2 or 4 hours.
            </p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
