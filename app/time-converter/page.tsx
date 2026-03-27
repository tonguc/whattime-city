import type { Metadata } from 'next'
import TimeConverterClient from './TimeConverterClient'

export const metadata: Metadata = {
  title: 'Time Zone Converter — Convert Any Time Between 400+ Cities',
  description: 'Convert any time between 400+ cities instantly. What time is 3 PM EST in London? Pick two cities, enter a time, get the exact local equivalent — DST-aware, no sign-up needed.',
  alternates: {
    canonical: 'https://whattime.city/time-converter/',
  },
  openGraph: {
    title: 'Time Zone Converter — Free, Instant, 400+ Cities',
    description: 'Convert time between any two cities in seconds. Automatically adjusts for Daylight Saving Time.',
    type: 'website',
    url: 'https://whattime.city/time-converter/',
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
  url: 'https://whattime.city/time-converter/',
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
      name: 'What time is it in the different time zones right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four main US time zones right now: Eastern Time (ET) is UTC-5 in winter (EST) or UTC-4 in summer (EDT). Central Time (CT) is UTC-6 / UTC-5. Mountain Time (MT) is UTC-7 / UTC-6. Pacific Time (PT) is UTC-8 / UTC-7. Major international zones: GMT/UTC is UTC+0, CET is UTC+1 (CEST UTC+2 in summer), IST is UTC+5:30, JST is UTC+9, AEST is UTC+10. Use the converter above to see exact current times.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you convert UTC time to EST time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert UTC to EST (Eastern Standard Time, winter): subtract 5 hours. Example: 20:00 UTC = 3:00 PM EST. To convert UTC to EDT (Eastern Daylight Time, summer): subtract 4 hours. Example: 20:00 UTC = 4:00 PM EDT. The US East Coast observes EDT from the second Sunday in March to the first Sunday in November.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the 4 time zones in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four contiguous US time zones are: Eastern Time (ET, UTC-5 / UTC-4 DST) covering the East Coast; Central Time (CT, UTC-6 / UTC-5 DST) covering the Midwest; Mountain Time (MT, UTC-7 / UTC-6 DST) covering the Rockies; and Pacific Time (PT, UTC-8 / UTC-7 DST) covering the West Coast. Alaska (AKST, UTC-9) and Hawaii (HST, UTC-10, no DST) are additional US time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you calculate the time difference between two countries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate the time difference: find each country\'s UTC offset (e.g. New York is UTC-5, London is UTC+0), then subtract one from the other. New York to London: 0 - (-5) = 5 hours ahead. For countries observing DST, the offset changes seasonally — use the converter above for real-time accuracy. The IANA Time Zone Database is the authoritative source for all offsets.',
      },
    },
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
    {
      '@type': 'Question',
      name: 'What time is it in India when it is 9 AM in London?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM in London (GMT), it is 2:30 PM IST in India (UTC+5:30). India Standard Time is always 5 hours 30 minutes ahead of GMT. During British Summer Time (BST, UTC+1), it is 1:30 PM IST when London shows 9:00 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert London time to New York time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'London (GMT, UTC+0) is 5 hours ahead of New York (EST, UTC-5) in winter, and 4 hours ahead in summer when New York uses EDT (UTC-4) and London uses BST (UTC+1). To convert: subtract 5 hours from London time in winter, or 4 hours in summer. Example: 3:00 PM GMT = 10:00 AM EST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Australia (Sydney) and the UK (London)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sydney (AEST, UTC+10) is 10 hours ahead of London (GMT, UTC+0) in winter. During Australian summer (AEDT, UTC+11) and UK summer (BST, UTC+1), the difference is 10 hours. The gap can briefly be 9 or 11 hours during the weeks when only one country has changed its clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert EST to CET (Central European Time)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET (UTC+1) is 6 hours ahead of EST (UTC-5). To convert EST to CET, add 6 hours. Example: 9:00 AM EST = 3:00 PM CET. During US daylight saving (EDT, UTC-4), CET is 5 hours ahead. During European summer (CEST, UTC+2), CEST is 7 hours ahead of EST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between IST (India) and PST (US Pacific)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST (UTC+5:30) is 13 hours 30 minutes ahead of PST (UTC-8). During US Pacific Daylight Time (PDT, UTC-7), the difference is 12 hours 30 minutes. This corridor — India to US West Coast — is common for tech industry scheduling between Bengaluru/Mumbai and San Francisco/Seattle.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time Zone Converter', item: 'https://whattime.city/time-converter/' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TimeConverterClient />
    </>
  )
}
