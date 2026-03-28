import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MinutesInAYearClient from './MinutesInAYearClient'

export const metadata: Metadata = {
  title: 'How Many Minutes in a Year? — 525,600 Minutes Explained',
  description: 'There are 525,600 minutes in a regular year and 527,040 in a leap year. Full breakdown by month, hours, seconds, and how the famous "Seasons of Love" number works.',
  alternates: {
    canonical: 'https://whattime.city/articles/how-many-minutes-in-a-year/',
  },
  openGraph: {
    title: 'How Many Minutes in a Year? — 525,600 Minutes',
    description: '525,600 minutes in a year (527,040 in a leap year). Full breakdown with monthly tables, hours, and seconds.',
    type: 'article',
    url: 'https://whattime.city/articles/how-many-minutes-in-a-year/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Minutes in a Year?',
    description: '525,600 minutes in a regular year. Full breakdown.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many minutes are in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular year has 525,600 minutes (365 days × 24 hours × 60 minutes). A leap year has 527,040 minutes (366 days × 24 hours × 60 minutes). The precise tropical year has approximately 525,948.77 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many minutes in a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 1,440 minutes in a day (24 hours × 60 minutes).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many minutes in a week?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 10,080 minutes in a week (7 days × 24 hours × 60 minutes).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many minutes in a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the month: 28-day months have 40,320 minutes, 30-day months have 43,200 minutes, and 31-day months have 44,640 minutes. The average month has approximately 43,800 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does 525,600 minutes come from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The number 525,600 comes from multiplying 365 days × 24 hours × 60 minutes. It was popularized by the song "Seasons of Love" from the musical Rent, which opens with "Five hundred twenty-five thousand six hundred minutes."',
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
    { '@type': 'ListItem', position: 3, name: 'How Many Minutes in a Year?', item: 'https://whattime.city/articles/how-many-minutes-in-a-year/' },
  ],
}

export default function MinutesInAYearPage() {
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
      <MinutesInAYearClient />
    </ContentPageWrapper>
  )
}
