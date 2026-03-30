import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TimerClient from './TimerClient'

export const metadata: Metadata = {
  title: 'Online Timer & Stopwatch — Free, With Alarm',
  description: 'Free online timer and stopwatch. Set a countdown for 1, 5, 10, 25, or 60 minutes — or any custom time. Alarm sounds when done. Stopwatch with lap times. No download needed.',
  alternates: { canonical: 'https://whattime.city/timer/' },
  openGraph: {
    title: 'Online Timer & Stopwatch — Free',
    description: 'Countdown timer with alarm + stopwatch with laps. Preset durations for Pomodoro, cooking, exercise. Works in your browser.',
    type: 'website',
    url: 'https://whattime.city/timer/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Timer & Stopwatch',
    description: 'Free countdown timer with alarm + stopwatch with lap times. No download needed.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I set a timer for a specific time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose a preset (1, 3, 5, 10, 15, 20, 25, 30, 45, or 60 minutes) or enter a custom time using the hours, minutes, and seconds inputs. Then click Start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the timer alert me when it reaches zero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. When the countdown reaches zero, you'll hear an alarm sound and see a visual notification. The alarm uses the Web Audio API and works across all modern browsers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the timer and stopwatch at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can switch between the Timer and Stopwatch tabs — each keeps its own state. The active one continues running when you switch tabs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Pomodoro Technique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Pomodoro Technique uses 25-minute focused work intervals followed by 5-minute breaks. Use our 25-minute preset for work sessions and switch to 5 minutes for breaks. After 4 cycles, take a 15–30 minute long break.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I record lap times?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Switch to the Stopwatch tab, click Start, then click the Lap button to record split times. All laps are listed with individual and cumulative times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the timer work in the background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The timer and stopwatch continue running even if you switch browser tabs. You'll still hear the alarm when the timer reaches zero, as long as the browser tab remains open.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Timer', item: 'https://whattime.city/timer/' },
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'whattime.city Online Timer & Stopwatch',
  url: 'https://whattime.city/timer/',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free online countdown timer with alarm and stopwatch with lap recording. No download required.',
}

export default function TimerPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <TimerClient />
    </ContentPageWrapper>
  )
}
