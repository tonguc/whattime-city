import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HowManyDaysInAYearClient from './HowManyDaysInAYearClient'

export const metadata: Metadata = {
  title: 'How Many Days in a Year? (2026) — 365 or 366 Days Explained',
  description:
    'A regular year has 365 days. A leap year has 366 days. See the breakdown by month, working days, and a year-by-year calendar through 2030.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-days-in-a-year/',
  },
  openGraph: {
    title: 'How Many Days in a Year? (2026) — 365 or 366 Days Explained',
    description:
      'A regular year has 365 days. A leap year has 366 days. See the breakdown by month, working days, and a year-by-year calendar through 2030.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-days-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Days in a Year? 365 or 366 — Full Breakdown',
    description:
      'Regular year = 365 days. Leap year = 366 days. Month-by-month table, working days, and leap year rules explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many days in a year exactly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mean tropical year — the time Earth takes to complete one orbit around the Sun — is approximately 365.2422 days. The Gregorian calendar rounds this to 365 days in a common year and adds one extra day (366 days) every four years in a leap year to stay aligned with the astronomical year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 2026 a leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. 2026 is not a leap year. It has 365 days. The next leap year is 2028, which will have 366 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days in a year without weekends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2026, there are 261 weekdays (Monday through Friday) and 104 weekend days (Saturday and Sunday). After subtracting 11 US federal holidays that fall on weekdays, there are approximately 250 net working days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days are in each month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'January 31, February 28 (29 in a leap year), March 31, April 30, May 31, June 30, July 31, August 31, September 30, October 31, November 30, December 31.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we have leap years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We have leap years to keep the calendar aligned with Earth's orbit around the Sun. Because Earth takes approximately 365.2422 days to orbit the Sun, adding one extra day every four years compensates for the roughly 0.25-day discrepancy that would otherwise accumulate — causing the calendar to drift out of sync with the seasons over time.",
      },
    },
  ],
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
      name: 'How Many Days in a Year?',
      item: 'https://whattime.city/articles/how-many-days-in-a-year/',
    },
  ],
}

export default function HowManyDaysInAYearPage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HowManyDaysInAYearClient />
    </ContentPageWrapper>
  )
}
