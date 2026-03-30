import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HoursFromNowClient from './HoursFromNowClient'

export const metadata: Metadata = {
  title: 'Hours From Now Calculator — Future Time',
  description: 'Find what time it will be 6, 12, 24, or any number of hours from now. Instant calculator with exact time and date.',
  alternates: {
    canonical: 'https://whattime.city/hours-from-now/',
  },
  openGraph: {
    title: 'Hours From Now Calculator — Future Time',
    description: 'Calculate what time it will be any number of hours from now. Shows exact time, AM/PM, and date if the time crosses midnight.',
    type: 'website',
    url: 'https://whattime.city/hours-from-now/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hours From Now Calculator',
    description: 'Find what time it will be X hours from now.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time will it be in 6 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To find what time it will be in 6 hours, add 6 hours to the current time. Use the calculator above for the exact result including AM/PM and date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time will it be in 12 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12 hours from now is the same clock time as right now, but AM/PM will be swapped. The date may be today or tomorrow depending on the current time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time will it be in 24 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '24 hours from now will be the exact same time as it is right now, but tomorrow. It is the equivalent of exactly one day from now.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time will it be in 48 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '48 hours from now will be the exact same time as it is right now, but two days from today.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Hours From Now', item: 'https://whattime.city/hours-from-now/' },
  ],
}

export default function HoursFromNowPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HoursFromNowClient />
    </ContentPageWrapper>
  )
}
