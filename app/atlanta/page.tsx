import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import AtlantaClockClient from './AtlantaClockClient'

export const metadata: Metadata = {
  title: 'Current Time in Atlanta — Eastern Time (EST/EDT)',
  description: 'Current time in Atlanta, Georgia. Live Eastern Time clock — EST (UTC-5) in winter, EDT (UTC-4) in summer. DST dates, time vs New York, London, Los Angeles, and best time to call Atlanta.',
  alternates: { canonical: 'https://whattime.city/atlanta/' },
  openGraph: {
    title: 'Current Time in Atlanta — EST/EDT (UTC-5/-4)',
    description: 'Live Atlanta clock. Eastern Time Zone — EST (UTC-5) in winter, EDT (UTC-4) in summer. Atlanta is in the same time zone as New York.',
    type: 'website',
    url: 'https://whattime.city/atlanta/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Atlanta Now — EST/EDT',
    description: 'Live Atlanta clock. Eastern Time (UTC-5 winter, UTC-4 summer). Same time zone as New York.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Atlanta right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta observes Eastern Time — EST (UTC-5) from November to March, and EDT (UTC-4) during Daylight Saving Time. The live clock on this page shows the exact current Atlanta time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Atlanta in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta is in the Eastern Time Zone (ET). Atlanta uses EST (UTC-5) during standard time (winter) and EDT (UTC-4) during Daylight Saving Time (summer). Atlanta is in the same time zone as New York, Miami, Boston, Washington DC, and Toronto.' },
    },
    {
      '@type': 'Question',
      name: 'Does Atlanta observe daylight saving time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Atlanta observes US Eastern Daylight Saving Time. Clocks spring forward on the second Sunday in March at 2:00 AM (becoming 3:00 AM EDT) and fall back on the first Sunday in November.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Atlanta and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'There is no time difference between Atlanta and New York. Both cities are in the Eastern Time Zone and observe the same EST/EDT schedule.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Atlanta and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta is 5 hours behind London. During winter, Atlanta is on EST (UTC-5) and London is on GMT (UTC+0). During summer, Atlanta is on EDT (UTC-4) and London is on BST (UTC+1) — still 5 hours difference.' },
    },
    {
      '@type': 'Question',
      name: 'What time does the stock exchange open in Atlanta?',
      acceptedAnswer: { '@type': 'Answer', text: 'The NYSE and NASDAQ open at 9:30 AM EST/EDT — the same local time as New York since Atlanta is in Eastern Time. Atlanta is home to major companies including Coca-Cola, Delta Air Lines, and Warner Bros. Discovery (CNN).' },
    },
    {
      '@type': 'Question',
      name: 'What are typical business hours in Atlanta?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard business hours in Atlanta are 9:00 AM–5:00 PM EST/EDT, Monday–Friday. Atlanta\'s Hartsfield-Jackson International Airport (the world\'s busiest) and major logistics operations run 24/7.' },
    },
  ],
}

export default function AtlantaPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Current Time in Atlanta</h1>
        <p className="text-lg opacity-75">Eastern Time Zone · EST (UTC-5) · EDT (UTC-4) during DST · Georgia</p>
      </div>
      <AtlantaClockClient />
    </ContentPageWrapper>
  )
}
