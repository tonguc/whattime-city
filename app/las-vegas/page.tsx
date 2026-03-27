import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import LasVegasClockClient from './LasVegasClockClient'

export const metadata: Metadata = {
  title: 'Current Time in Las Vegas — Pacific Time (PST/PDT)',
  description: 'Current time in Las Vegas, Nevada. Live Pacific Time clock — PST (UTC-8) in winter, PDT (UTC-7) in summer. DST dates, time vs New York, London, and best time to call Las Vegas.',
  alternates: { canonical: 'https://whattime.city/las-vegas/' },
  openGraph: {
    title: 'Current Time in Las Vegas — PST/PDT (UTC-8/-7)',
    description: 'Live Las Vegas clock. Pacific Time Zone — PST (UTC-8) in winter, PDT (UTC-7) in summer. Las Vegas is 3 hours behind New York.',
    type: 'website',
    url: 'https://whattime.city/las-vegas/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Las Vegas Now — PST/PDT',
    description: 'Live Las Vegas clock. Pacific Time (UTC-8 winter, UTC-7 summer). 3 hours behind New York.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Las Vegas right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las Vegas operates on Pacific Time — PST (UTC-8) during winter and PDT (UTC-7) during Daylight Saving Time. The live clock on this page shows the exact current Las Vegas time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Las Vegas in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las Vegas is in the Pacific Time Zone (PT), sharing this timezone with Los Angeles, Seattle, Portland, and Vancouver. PST (UTC-8) in winter, PDT (UTC-7) in summer.' },
    },
    {
      '@type': 'Question',
      name: 'Does Las Vegas observe daylight saving time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Las Vegas observes US Daylight Saving Time. Clocks spring forward on the second Sunday in March at 2:00 AM (to 3:00 AM PDT) and fall back on the first Sunday in November.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Las Vegas and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las Vegas is 3 hours behind New York year-round. When it\'s 12:00 PM in New York, it\'s 9:00 AM in Las Vegas. Both cities observe DST simultaneously, so this 3-hour gap never changes.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Las Vegas and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las Vegas is 8 hours behind London for most of the year. During brief windows in spring and fall when DST switch dates differ, the gap can be 7 or 9 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What time do Las Vegas casinos open?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most Las Vegas Strip casinos are open 24 hours a day, 7 days a week, 365 days a year — there is no closing time. This makes Las Vegas one of the few cities where the time of day is largely irrelevant for entertainment.' },
    },
    {
      '@type': 'Question',
      name: 'What are typical business hours in Las Vegas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard office and professional services in Las Vegas run 9:00 AM–5:00 PM PST/PDT. The hospitality, casino, and entertainment industries operate around the clock with 24/7 staffing.' },
    },
  ],
}

export default function LasVegasPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Current Time in Las Vegas</h1>
        <p className="text-lg opacity-75">Pacific Time Zone · PST (UTC-8) · PDT (UTC-7) during DST · Nevada</p>
      </div>
      <LasVegasClockClient />
    </ContentPageWrapper>
  )
}
