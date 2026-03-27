import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DenverClockClient from './DenverClockClient'

export const metadata: Metadata = {
  title: 'Current Time in Denver — Mountain Time (MST/MDT)',
  description: 'Current time in Denver, Colorado. Live Mountain Time clock — MST (UTC-7) in winter, MDT (UTC-6) in summer. DST dates, time difference vs New York, Los Angeles, London, and best time to call Denver.',
  alternates: { canonical: 'https://whattime.city/denver/' },
  openGraph: {
    title: 'Current Time in Denver — MST/MDT (UTC-7/-6)',
    description: 'Live Denver clock. Mountain Time Zone — MST (UTC-7) in winter, MDT (UTC-6) in summer. Denver is 2 hours behind New York.',
    type: 'website',
    url: 'https://whattime.city/denver/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Denver Now — MST/MDT',
    description: 'Live Denver clock. Mountain Time (UTC-7 winter, UTC-6 summer). 2 hours behind New York.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Denver right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Denver operates on Mountain Time — MST (UTC-7) from November to March, and MDT (UTC-6) during Daylight Saving Time (March to November). The live clock on this page shows the exact current Denver time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Denver in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Denver is in the Mountain Time Zone (MT). During Daylight Saving Time (March to November), Denver observes MDT (UTC-6). During standard time (November to March), Denver is on MST (UTC-7). Denver shares its time zone with Salt Lake City, Albuquerque, and Boise.' },
    },
    {
      '@type': 'Question',
      name: 'Does Denver observe daylight saving time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Denver observes US Daylight Saving Time. Clocks spring forward on the second Sunday in March and fall back on the first Sunday in November. Note: Phoenix, Arizona does NOT observe DST and stays on MST year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Denver and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Denver is 2 hours behind New York year-round. When it\'s noon in New York (EST or EDT), it\'s 10:00 AM in Denver (MST or MDT).' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Denver and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Denver is 7 hours behind London for most of the year. The difference can briefly shift to 6 or 8 hours during the week when one region has switched clocks but the other hasn\'t yet.' },
    },
    {
      '@type': 'Question',
      name: 'What time does the stock market open in Denver?',
      acceptedAnswer: { '@type': 'Answer', text: 'The NYSE opens at 7:30 AM MST/MDT in Denver (9:30 AM Eastern Time) and closes at 2:00 PM MST/MDT (4:00 PM ET).' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Denver and Phoenix?',
      acceptedAnswer: { '@type': 'Answer', text: 'During winter (standard time), Denver and Phoenix are both on MST (UTC-7) — same time. During summer DST, Denver moves to MDT (UTC-6) while Phoenix stays on MST (UTC-7), making Denver 1 hour ahead of Phoenix from March to November.' },
    },
  ],
}

export default function DenverPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Current Time in Denver</h1>
        <p className="text-lg opacity-75">Mountain Time Zone · MST (UTC-7) · MDT (UTC-6) during DST · Colorado</p>
      </div>
      <DenverClockClient />
    </ContentPageWrapper>
  )
}
