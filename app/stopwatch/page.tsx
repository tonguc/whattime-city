import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TimerClient from '@/app/timer/TimerClient'

export const metadata: Metadata = {
  title: 'Online Stopwatch — Free, With Lap Timer',
  description:
    'Free online stopwatch with lap times. Start, pause, reset, and record splits instantly. Centisecond precision. No download or sign-up needed.',
  alternates: {
    canonical: 'https://whattime.city/stopwatch/',
  },
  openGraph: {
    title: 'Online Stopwatch — Free, With Lap Timer',
    description:
      'Precise online stopwatch with lap recording. Centisecond accuracy. Works on desktop and mobile — no download needed.',
    type: 'website',
    url: 'https://whattime.city/stopwatch/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Stopwatch With Lap Timer',
    description: 'Free stopwatch with centisecond accuracy and lap recording. Works instantly in your browser.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I use this online stopwatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Click Start to begin timing. Click Lap to record a split time without stopping. Click Pause to freeze the time, then Resume to continue. Click Reset to return to zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is this stopwatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The stopwatch displays centisecond (1/100th of a second) precision using the browser\'s high-resolution performance timer. It continues running accurately even when you switch browser tabs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I record lap times?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While the stopwatch is running, click the Lap button to record a split. Each lap shows both the individual lap time and the cumulative time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the stopwatch work on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The stopwatch is fully responsive and works on smartphones and tablets. Tap the buttons just as you would on a desktop.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a stopwatch and a timer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A stopwatch counts up from zero to measure elapsed time. A timer counts down from a set duration and alerts you when it reaches zero. This page defaults to stopwatch mode — click the Timer tab to switch to a countdown timer.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Online Stopwatch', item: 'https://whattime.city/stopwatch/' },
  ],
}

export default function StopwatchPage() {
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
      <TimerClient defaultTab="stopwatch" />
    </ContentPageWrapper>
  )
}
