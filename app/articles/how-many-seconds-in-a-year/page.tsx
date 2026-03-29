import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HowManySecondsInAYearClient from './HowManySecondsInAYearClient'

export const metadata: Metadata = {
  title: 'How Many Seconds in a Year? 31,536,000',
  description:
    'A regular year has 31,536,000 seconds (365 × 24 × 3,600). A leap year has 31,622,400 seconds. Full breakdown by minute, hour, day, month, and a year-by-year table.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
  },
  openGraph: {
    title: 'How Many Seconds in a Year? 31,536,000',
    description:
      'Regular year = 31,536,000 seconds. Leap year = 31,622,400 seconds. Full breakdown with monthly table.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Seconds in a Year?',
    description:
      'A regular year has 31,536,000 seconds. Leap year has 31,622,400. Full breakdown included.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many seconds are in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular year has 31,536,000 seconds (365 days × 24 hours × 60 minutes × 60 seconds). A leap year has 31,622,400 seconds (366 days × 86,400). The precise tropical year is approximately 31,556,925 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 86,400 seconds in a day (24 hours × 60 minutes × 60 seconds).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in an hour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 3,600 seconds in one hour (60 minutes × 60 seconds).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seconds per month depend on the month length: 28-day months have 2,419,200 seconds, 30-day months have 2,592,000 seconds, and 31-day months have 2,678,400 seconds. The average month has approximately 2,628,000 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds are in a leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A leap year has 31,622,400 seconds (366 × 24 × 3,600). That is 86,400 more seconds than a regular year — exactly one extra day\'s worth. The next leap year is 2028.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Seconds in a Year? 31,536,000 Explained',
  description:
    'A regular year has 31,536,000 seconds (365 × 24 × 3,600). A leap year has 31,622,400 seconds. Full breakdown with monthly table and time unit comparisons.',
  url: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
  publisher: {
    '@type': 'Organization',
    name: 'whattime.city',
    url: 'https://whattime.city',
  },
  dateModified: '2026-03-29',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://whattime.city/articles/' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How Many Seconds in a Year?',
      item: 'https://whattime.city/articles/how-many-seconds-in-a-year/',
    },
  ],
}

export default function HowManySecondsInAYearPage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HowManySecondsInAYearClient />
    </ContentPageWrapper>
  )
}
