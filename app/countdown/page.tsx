import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import CountdownClient from './CountdownClient'

export const metadata: Metadata = {
  title: 'Countdown Timer — Count Down to Any Date or Event',
  description: 'Free online countdown timer to any date. Count down to New Year, holidays, birthdays, deadlines, or any custom event. See days, hours, minutes, and seconds remaining.',
  alternates: {
    canonical: 'https://whattime.city/countdown/',
  },
  openGraph: {
    title: 'Countdown Timer — Count Down to Any Date',
    description: 'Live countdown to any date or event. Days, hours, minutes, and seconds remaining. New Year, holidays, birthdays, and custom dates.',
    type: 'website',
    url: 'https://whattime.city/countdown/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Countdown Timer — Count Down to Any Event',
    description: 'Live countdown timer to any date. New Year, holidays, deadlines & more.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many days until New Year 2027?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use our countdown timer above — select "New Year 2027" from the presets or enter January 1, 2027 as the target date. The timer shows the exact days, hours, minutes, and seconds remaining in real time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I create a countdown to a specific date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Click "Custom Date" in our countdown timer, enter your target date and time, optionally add a title for your event, and the countdown begins immediately. It updates in real time showing days, hours, minutes, and seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days until Christmas 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Select "Christmas 2026" from the preset events in our countdown timer to see the exact days, hours, minutes, and seconds until December 25, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I count down to a specific time, not just a date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When you select "Custom Date", you can also set a specific time (hour and minute). This is useful for countdowns to meetings, launches, or events that happen at a precise time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours are left in this year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Select "New Year" from the presets to see the exact hours, minutes, and seconds remaining in the current year. The countdown updates in real time.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Countdown Timer', item: 'https://whattime.city/countdown/' },
  ],
}

export default function CountdownPage() {
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
      <CountdownClient />
    </ContentPageWrapper>
  )
}
