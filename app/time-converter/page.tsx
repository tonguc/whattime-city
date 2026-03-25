import type { Metadata } from 'next'
import TimeConverterClient from './TimeConverterClient'

export const metadata: Metadata = {
  title: 'Time Zone Converter — Free, Instant, 400+ Cities',
  description: 'Convert time between 400+ cities instantly. DST-aware and accurate. Pick two cities, enter a time, get the exact local equivalent — no sign-up needed.',
  alternates: {
    canonical: 'https://whattime.city/time-converter',
  },
  openGraph: {
    title: 'Time Zone Converter — Free, Instant, 400+ Cities',
    description: 'Convert time between any two cities in seconds. Automatically adjusts for Daylight Saving Time.',
    type: 'website',
    url: 'https://whattime.city/time-converter',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Zone Converter — 400+ Cities',
    description: 'Instant time conversion between any two cities. DST-aware.',
  },
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Time Zone Converter',
  url: 'https://whattime.city/time-converter',
  description: 'Convert time between 400+ cities instantly. Automatically accounts for Daylight Saving Time.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Convert time between 400+ cities',
    'Automatic Daylight Saving Time adjustment',
    'IANA Time Zone Database accuracy',
    'No sign-up required',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does this time zone converter account for Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The converter automatically adjusts for DST based on each city\'s current rules, using the IANA Time Zone Database.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is the time zone conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conversions use the IANA Time Zone Database — the same source used by operating systems, browsers, and major time services worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cities does the time zone converter support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The converter supports 400+ cities across all time zones worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between PST and EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time, UTC-8) is 3 hours behind EST (Eastern Standard Time, UTC-5). So when it\'s 9:00 AM EST, it\'s 6:00 AM PST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between GMT and EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GMT (Greenwich Mean Time, UTC+0) is 5 hours ahead of EST (UTC-5) during standard time, and 4 hours ahead during EDT (Eastern Daylight Time, UTC-4).',
      },
    },
  ],
}

export default function TimeConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TimeConverterClient />
    </>
  )
}
