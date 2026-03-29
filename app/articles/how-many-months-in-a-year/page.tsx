import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HowManyMonthsInAYearClient from './HowManyMonthsInAYearClient'

export const metadata: Metadata = {
  title: 'How Many Months in a Year? 12 Months',
  description:
    'There are 12 months in a year. Full breakdown of days per month, quarter structure, month name origins, and a 2024–2030 reference table.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-months-in-a-year/',
  },
  openGraph: {
    title: 'How Many Months in a Year? 12 Months',
    description:
      'A year has 12 months — 7 with 31 days, 4 with 30 days, and 1 with 28 or 29 days. Full breakdown included.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-months-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Months in a Year? 12',
    description:
      'There are 12 months in a year. Days per month, quarter breakdown, and month name origins explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many months are in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 12 months in a year in the Gregorian calendar: January, February, March, April, May, June, July, August, September, October, November, and December.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days are in each month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7 months have 31 days (January, March, May, July, August, October, December), 4 months have 30 days (April, June, September, November), and February has 28 days in a common year or 29 days in a leap year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which month has the fewest days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'February has the fewest days — 28 in a common year and 29 in a leap year. All other months have 30 or 31 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many months are in a quarter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A year is divided into 4 quarters, each containing 3 months. Q1: January–March, Q2: April–June, Q3: July–September, Q4: October–December.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many months is 6 months?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '6 months is exactly half a year. Depending on which half, it spans either 181 days (January–June in a common year) or 184 days (July–December). On average, 6 months is approximately 182.5 days.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Months in a Year? 12 Months Explained',
  description:
    'There are 12 months in a year. Full breakdown of days per month, quarter structure, and month name origins.',
  url: 'https://whattime.city/articles/how-many-months-in-a-year/',
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
      name: 'How Many Months in a Year?',
      item: 'https://whattime.city/articles/how-many-months-in-a-year/',
    },
  ],
}

export default function HowManyMonthsInAYearPage() {
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
      <HowManyMonthsInAYearClient />
    </ContentPageWrapper>
  )
}
