import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HowManyHoursInAYearClient from './HowManyHoursInAYearClient'

export const metadata: Metadata = {
  title: 'How Many Hours in a Year? 8,760 Hours',
  description:
    'A regular year has 8,760 hours (365 × 24). A leap year has 8,784 hours. Full breakdown by month, working hours, and a year-by-year table from 2024 to 2030.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-hours-in-a-year/',
  },
  openGraph: {
    title: 'How Many Hours in a Year? 8,760 Hours',
    description:
      'Regular year = 8,760 hours. Leap year = 8,784 hours. Full breakdown with monthly table and working hours.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-hours-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Hours in a Year? 8,760 or 8,784',
    description:
      'Regular year = 8,760 hours. Leap year = 8,784 hours. Monthly breakdown and working hours included.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours are in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular year has 8,760 hours (365 days × 24 hours). A leap year has 8,784 hours (366 days × 24 hours). The precise tropical year — Earth\'s actual orbital period — is approximately 8,765.82 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours are in a leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A leap year has 8,784 hours (366 days × 24 hours). Leap years occur in years divisible by 4, except century years must also be divisible by 400. The next leap year is 2028.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many working hours in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical US full-time employee works about 2,080 hours per year (52 weeks × 40 hours). After subtracting 11 federal holidays (88 hours) and standard paid vacation (80 hours for 2 weeks), the actual worked hours are roughly 1,912–2,000 hours per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2026 is not a leap year, so it has 8,760 hours (365 days × 24 hours). It starts on Thursday, January 1 and ends on Thursday, December 31, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours in a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hours per month vary by the number of days: 28-day months (February in common years) have 672 hours, 29-day months (February in leap years) have 696 hours, 30-day months have 720 hours, and 31-day months have 744 hours. The average month has about 730 hours.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Hours in a Year? 8,760 Hours Explained',
  description:
    'A regular year has 8,760 hours (365 days × 24 hours). A leap year has 8,784 hours. Full breakdown with monthly table and working hours.',
  url: 'https://whattime.city/articles/how-many-hours-in-a-year/',
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
      name: 'How Many Hours in a Year?',
      item: 'https://whattime.city/articles/how-many-hours-in-a-year/',
    },
  ],
}

export default function HowManyHoursInAYearPage() {
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
      <HowManyHoursInAYearClient />
    </ContentPageWrapper>
  )
}
