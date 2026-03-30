import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HoursAgoClient from './HoursAgoClient'

export const metadata: Metadata = {
  title: 'Hours Ago Calculator — Time X Hours Ago',
  description: 'Find what time it was 6, 9, 12, or any number of hours ago. Instant calculator with exact time and date. Also see hours from now.',
  alternates: {
    canonical: 'https://whattime.city/hours-ago/',
  },
  openGraph: {
    title: 'Hours Ago Calculator — Time X Hours Ago',
    description: 'Calculate what time it was any number of hours ago. Shows exact time, AM/PM, and date if the time crossed midnight.',
    type: 'website',
    url: 'https://whattime.city/hours-ago/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hours Ago Calculator',
    description: 'Find what time it was X hours ago. Includes exact time and date.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time was it 6 hours ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To find the time 6 hours ago, subtract 6 hours from the current time. Use the calculator above for the exact result. If the subtraction crosses midnight, the result will be on the previous calendar day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time was it 9 hours ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To find the time 9 hours ago, subtract 9 hours from the current time. Use the calculator above for the exact result including AM/PM and date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time was it 12 hours ago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exactly 12 hours ago was the same clock time (e.g., if it is now 3:00 PM, 12 hours ago was 3:00 AM). The date may be today or yesterday depending on the current time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time will it be in X hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To find what time it will be X hours from now, use our Hours From Now calculator at whattime.city/hours-from-now/. Enter any number of hours to see the future time.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Hours Ago', item: 'https://whattime.city/hours-ago/' },
  ],
}

export default function HoursAgoPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HoursAgoClient />
    </ContentPageWrapper>
  )
}
