import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DaysAgoClient from './DaysAgoClient'

export const metadata: Metadata = {
  title: 'Days Ago Calculator — What Day Was It?',
  description: 'Find what date it was 30, 60, 90, or 180 days ago from today. Instantly see the day name, week number, and calendar context for any number of days in the past.',
  alternates: {
    canonical: 'https://whattime.city/days-ago/',
  },
  openGraph: {
    title: 'Days Ago Calculator — What Day Was It?',
    description: 'Calculate what date it was 30, 60, 90, or 180 days ago. Includes day of the week, ISO week number, and business day count.',
    type: 'website',
    url: 'https://whattime.city/days-ago/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Days Ago Calculator',
    description: 'Find what date it was X days ago. Includes day name and week number.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What date was 30 days ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To find the date 30 days ago, subtract 30 days from today. Use our calculator above for the exact date with day of the week. 30 days ago is approximately 4 weeks and 2 days in the past.',
      },
    },
    {
      '@type': 'Question',
      name: 'What date was 90 days ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 days ago is approximately 3 months or 12 weeks and 6 days in the past. Enter 90 in the calculator to see the exact date with the day of the week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What date was 180 days ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '180 days ago is approximately 6 months or 25 weeks and 5 days in the past. This is commonly referenced for legal deadlines, passport validity, and financial reporting periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What date was 60 days ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '60 days ago is approximately 2 months or 8 weeks and 4 days in the past. Use the calculator to find the exact date.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate what day it was X days ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter the number of days in our calculator and the tool automatically subtracts that many calendar days from today, accounting for varying month lengths and leap years. You can also click any preset below for instant results.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Days Ago', item: 'https://whattime.city/days-ago/' },
  ],
}

export default function DaysAgoPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DaysAgoClient />
    </ContentPageWrapper>
  )
}
