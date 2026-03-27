import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SeattleClockClient from './SeattleClockClient'

export const metadata: Metadata = {
  title: 'Current Time in Seattle — Pacific Time (PST/PDT)',
  description: 'Current time in Seattle, Washington. Live Pacific Time clock — PST (UTC-8) in winter, PDT (UTC-7) in summer. DST dates, time difference vs New York, London, Tokyo, and best time to call Seattle.',
  alternates: { canonical: 'https://whattime.city/seattle/' },
  openGraph: {
    title: 'Current Time in Seattle — PST/PDT (UTC-8/-7)',
    description: 'Live Seattle clock. Pacific Time Zone — PST (UTC-8) in winter, PDT (UTC-7) in summer. Seattle is 3 hours behind New York.',
    type: 'website',
    url: 'https://whattime.city/seattle/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Seattle Now — PST/PDT',
    description: 'Live Seattle clock. Pacific Time (UTC-8 winter, UTC-7 summer). 3 hours behind New York.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Seattle right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seattle operates on Pacific Time — PST (UTC-8) from early November to mid-March, and PDT (UTC-7) during Daylight Saving Time (March to November). The live clock on this page shows the exact current time in Seattle.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Seattle in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seattle is in the Pacific Time Zone, observing PST (UTC-8) in winter and PDT (UTC-7) in summer. Seattle shares its time zone with Los Angeles, Portland, Las Vegas, and Vancouver BC.' },
    },
    {
      '@type': 'Question',
      name: 'Does Seattle observe daylight saving time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Seattle follows US daylight saving rules: clocks spring forward 1 hour at 2:00 AM on the second Sunday in March (to 3:00 AM PDT), and fall back on the first Sunday in November (to 1:00 AM PST).' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Seattle and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seattle is 3 hours behind New York year-round. When New York is at noon (EST or EDT), Seattle is at 9:00 AM (PST or PDT). Both cities observe DST on the same dates, so the 3-hour gap is constant.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Seattle and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seattle is 8 hours behind London for most of the year. Because the US and UK switch clocks on different dates, there is a brief 1-week window in spring and fall when the difference is 7 or 9 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What time does the stock market open in Seattle?',
      acceptedAnswer: { '@type': 'Answer', text: 'The NYSE and NASDAQ open at 6:30 AM PST (9:30 AM EST) and close at 1:00 PM PST (4:00 PM EST). Seattle\'s Amazon (AMZN) and Microsoft (MSFT) are both traded on NASDAQ.' },
    },
    {
      '@type': 'Question',
      name: 'What are typical business hours in Seattle?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard Seattle business hours are 9:00 AM–6:00 PM PST/PDT, Monday–Friday. Amazon and Microsoft teams often work earlier shifts due to coordination with East Coast partners who are 3 hours ahead.' },
    },
  ],
}

export default function SeattlePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Current Time in Seattle</h1>
        <p className="text-lg opacity-75">Pacific Time Zone · PST (UTC-8) · PDT (UTC-7) during DST · Washington State</p>
      </div>
      <SeattleClockClient />
    </ContentPageWrapper>
  )
}
