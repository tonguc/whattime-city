import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HowManyWeeksInAYearClient from './HowManyWeeksInAYearClient'

export const metadata: Metadata = {
  title: 'How Many Weeks in a Year? 52 Weeks (2026)',
  description:
    'A regular year has 52 weeks and 1 day (365 days). A leap year has 52 weeks and 2 days. Full breakdown: weeks per month, work weeks, ISO week 53 years, and a year-by-year table.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-weeks-in-a-year/',
  },
  openGraph: {
    title: 'How Many Weeks in a Year? 52 Weeks (2026)',
    description:
      'A regular year has 52 weeks and 1 day (365 days). A leap year has 52 weeks and 2 days. Full breakdown: weeks per month, work weeks, ISO week 53 years, and a year-by-year table.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-weeks-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Weeks in a Year? 52 Weeks (2026)',
    description:
      'Regular year = 52 weeks + 1 day. Leap year = 52 weeks + 2 days. Year-by-year table, work weeks, and ISO week explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many weeks in a year exactly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular year has exactly 52.143 weeks (365 ÷ 7 = 52.142857...). A leap year has 52.286 weeks (366 ÷ 7 = 52.285714...). In whole numbers, every year has 52 full weeks plus either 1 or 2 extra days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there ever a 53-week year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under the ISO 8601 standard, some years contain 53 numbered weeks instead of 52. A year has 53 ISO weeks when January 1 falls on a Thursday, or when it falls on a Wednesday in a leap year. 2026 has 53 ISO weeks because January 1, 2026 falls on a Thursday.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many weeks in a school year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical US school year runs for 180 instructional days, which equals 36 weeks (180 ÷ 5 days per week). In practice, the full school calendar — including teacher preparation days, holidays, and breaks — spans roughly 40 weeks, usually from late August through early June.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many work weeks in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A year contains 52 work weeks on paper, but most full-time US employees work approximately 48–50 weeks after accounting for vacation time and public holidays. The US has 11 federal holidays; if none fall on weekends, roughly 2.2 work weeks are removed from the total.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many weeks are left in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The number of weeks remaining in 2026 depends on today\'s date. You can check the current week number and see exactly how many weeks remain by visiting whattime.city, which shows live date and time data.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Weeks in a Year? 52 Weeks Explained (2026)',
  description: 'A regular year has 52 weeks and 1 day (365 days). A leap year has 52 weeks and 2 days. Full breakdown with year-by-year table, work weeks, and ISO week 53 explanation.',
  url: 'https://whattime.city/articles/how-many-weeks-in-a-year/',
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
      name: 'How Many Weeks in a Year?',
      item: 'https://whattime.city/articles/how-many-weeks-in-a-year/',
    },
  ],
}

export default function HowManyWeeksInAYearPage() {
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
      <HowManyWeeksInAYearClient />
    </ContentPageWrapper>
  )
}
