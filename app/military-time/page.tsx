import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MilitaryTimePageClient from './MilitaryTimePageClient'

export const metadata: Metadata = {
  title: 'Military Time — 24-Hour to 12-Hour Clock',
  description: 'Convert military time to standard time instantly. Full military time chart (0000–2359), how to read military time, and a live clock showing both formats.',
  alternates: {
    canonical: 'https://whattime.city/military-time/',
  },
  openGraph: {
    title: 'Military Time Converter — 24-Hour to 12-Hour',
    description: 'Full military time chart, live clock in both formats, and instant converter. 0000 to 2359 explained.',
    type: 'website',
    url: 'https://whattime.city/military-time/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Military Time — 24-Hour Clock Converter',
    description: 'Convert military time to standard time. Full 0000–2359 chart.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Military time is a 24-hour clock system where the day runs from 0000 (midnight) to 2359 (11:59 PM). It eliminates AM/PM ambiguity by using a continuous count: 0100 = 1:00 AM, 1300 = 1:00 PM, 2300 = 11:00 PM. It is used by the military, emergency services, hospitals, aviation, and many international contexts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you convert military time to standard time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For hours 0000–1159: remove the leading zero and add AM (e.g., 0900 = 9:00 AM). For hours 1200–2359: subtract 1200 and add PM (e.g., 1500 = 3:00 PM, 2100 = 9:00 PM). Midnight is 0000 and noon is 1200.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 1300 in military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1300 in military time is 1:00 PM. To convert: 1300 - 1200 = 100, which is 1:00 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 0000 in military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '0000 (zero hundred hours) in military time is midnight — the start of a new day. It is equivalent to 12:00 AM. Note: 2400 is sometimes used to mean the end of a day (same clock moment as 0000 of the next day).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 1800 in military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1800 (eighteen hundred hours) in military time is 6:00 PM. 1800 - 1200 = 600 = 6:00 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you say military time out loud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Military time is spoken as hours followed by "hundred hours" (for whole hours) or "hours" (for minutes). Examples: 0900 = "zero nine hundred hours", 1430 = "fourteen thirty hours", 0015 = "zero zero fifteen hours". The word "hours" can be omitted in informal usage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What countries use 24-hour time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of the world outside the US, Canada, Australia, and the UK uses the 24-hour clock as the everyday standard, including all EU countries, most of Asia, Latin America, and Africa. In the US and UK, 24-hour time is mainly used in technical, military, medical, and transportation contexts.',
      },
    },
  ],
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Military Time Converter',
  url: 'https://whattime.city/military-time/',
  description: 'Convert military time (24-hour) to standard time (12-hour) instantly.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function MilitaryTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MilitaryTimePageClient />
    </ContentPageWrapper>
  )
}
