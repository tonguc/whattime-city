import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IndiaClockClient from './IndiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in India Now — India Standard Time (IST, UTC+5:30)',
  description:
    'What is the current time in India? India uses IST (UTC+5:30) year-round — no Daylight Saving Time. Live clock, India time vs US/UK/Dubai/Singapore, and best time to call India.',
  keywords: [
    'time in india',
    'india time now',
    'india time',
    'india standard time',
    'IST time zone',
    'current time in india',
    'india time zone utc',
    'india clock',
    'what time is it in india',
    'india time vs est',
    'india time vs uk',
    'time difference india usa',
  ],
  alternates: {
    canonical: 'https://whattime.city/india/',
  },
  openGraph: {
    title: 'Current Time in India — IST (UTC+5:30)',
    description:
      'Live India Standard Time clock. IST is UTC+5:30 — India does not observe Daylight Saving Time. Check India time vs US, UK, Dubai, Singapore and more.',
    type: 'website',
    url: 'https://whattime.city/india/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in India Now — IST UTC+5:30',
    description:
      'Live India Standard Time. IST is UTC+5:30. India has one time zone and no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in India right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India uses India Standard Time (IST), which is UTC+5:30. The live clock at the top of this page shows the exact current time in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is India\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India uses a single time zone called India Standard Time (IST), which is UTC+5:30. It is one of the few time zones in the world with a 30-minute offset from UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does India observe Daylight Saving Time (DST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India does not observe Daylight Saving Time. IST is fixed at UTC+5:30 year-round, making it one of the most consistent time zones for international scheduling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does India have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India has exactly one time zone — IST (UTC+5:30) — used across the entire country, from Kashmir in the north to Kanyakumari in the south. This is notable for a country of India\'s geographic size.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between India and the US (EST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST is 10 hours 30 minutes ahead of US Eastern Standard Time (EST). During US Eastern Daylight Time (EDT), the difference is 9 hours 30 minutes. When it is 9:00 AM EST, it is 7:30 PM IST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between India and the UK (GMT)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST is 5 hours 30 minutes ahead of UK GMT. During British Summer Time (BST, UTC+1), IST is 4 hours 30 minutes ahead. When it is 9:00 AM GMT, it is 2:30 PM IST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call India from the United States?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From US Eastern time (EST), the best window to reach India during business hours is 8:00 AM to 11:30 AM EST — which corresponds to 6:30 PM to 10:00 PM IST. From US Pacific time (PST), try 5:00 AM to 8:30 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does India use a 30-minute offset (UTC+5:30)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India\'s UTC+5:30 offset was established during British colonial rule to approximate the midpoint of the country\'s longitude, which spans roughly 68°E to 97°E. A whole-hour offset of UTC+5 or UTC+6 would put either the east or west significantly off solar noon.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in India', item: 'https://whattime.city/india/' },
  ],
}


export default function IndiaTimePage() {
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

      {/* Page header */}
      <HubPageHeader title="
        Current Time in India
      " subtitle="
        India Standard Time (IST) · UTC+5:30 · No Daylight Saving Time
      " />

      {/* Live clock + comparisons (client) */}
      <IndiaClockClient />
      <CountryFactsSection hubSlug="india" />

      {/* IST Explained */}
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        India Standard Time (IST) = Asia/Kolkata.
      "
      />
    </ContentPageWrapper>
  )
}
