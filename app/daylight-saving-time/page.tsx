import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DSTPageClient from './DSTPageClient'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Daylight Saving Time', item: 'https://whattime.city/daylight-saving-time/' },
  ],
}

export const metadata: Metadata = {
  title: 'Daylight Saving Time 2026 — Dates',
  description: 'When does daylight saving time start and end in 2026? Get exact DST dates for the US, UK, EU, Australia, and every country. Spring forward, fall back explained.',
  alternates: {
    canonical: 'https://whattime.city/daylight-saving-time/',
  },
  openGraph: {
    title: 'Daylight Saving Time 2026 — Dates',
    description: 'Exact DST start and end dates for 2026. US, UK, EU, Australia and more. Never be caught off guard by a clock change again.',
    type: 'website',
    url: 'https://whattime.city/daylight-saving-time/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daylight Saving Time 2026 — Dates & Countries',
    description: 'When do clocks change in 2026? DST dates for every country.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When does daylight saving time start in 2026 in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daylight Saving Time begins in the United States on Sunday, March 8, 2026. Clocks spring forward 1 hour at 2:00 AM local time.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does daylight saving time end in 2026 in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daylight Saving Time ends in the United States on Sunday, November 1, 2026. Clocks fall back 1 hour at 2:00 AM local time, returning to standard time.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do clocks change in the UK in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the UK, clocks go forward on March 29, 2026 (British Summer Time begins) and go back on October 25, 2026 (GMT resumes). Changes happen at 1:00 AM GMT.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do clocks change in Europe in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the European Union, clocks spring forward on March 29, 2026 at 1:00 AM UTC (Central European Summer Time begins). Clocks fall back on October 25, 2026 at 1:00 AM UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the US still observe daylight saving time in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the United States continues to observe Daylight Saving Time in 2026. The Sunshine Protection Act, which would have made DST permanent, has not been enacted into law. DST runs from March 8 to November 1, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries do not observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Asia, Africa, and parts of South America do not observe DST. This includes Japan, China, India, Singapore, UAE, Russia (abolished DST in 2014), Brazil (abolished in 2019), and most countries near the equator where daylight hours vary little throughout the year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is daylight saving time going to continue in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, daylight saving time continues in 2026 in the United States, Canada, UK, and the European Union. The Sunshine Protection Act, which would have made DST permanent in the US, was not enacted into law. No country that currently observes DST has announced plans to abolish it in 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are considering getting rid of daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'More than 30 US states have introduced legislation to end the twice-yearly clock change. Most of these bills would adopt permanent standard time or permanent daylight saving time. However, under federal law (the Uniform Time Act), states can only permanently exempt themselves from DST by staying on standard time — as Arizona and Hawaii have done. Switching to permanent DST requires an act of Congress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will we still be changing clocks in 2027?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost certainly yes. The US, EU, and UK all continue DST in 2026 with no confirmed end date. The EU voted in 2019 to let member states choose permanent summer or winter time, but implementation has been indefinitely postponed due to coordination difficulties. The US Sunshine Protection Act failed to pass in 2023–2024. Unless new legislation passes, clock changes will continue in 2027.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we observe daylight saving time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daylight Saving Time was introduced to make better use of daylight during longer summer days, originally to conserve energy (less artificial lighting needed in the evening). Today, energy savings are disputed by research, but DST remains in place in many countries due to economic and social inertia.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Australia change its clocks in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Australia, DST-observing states (NSW, Victoria, Tasmania, South Australia, ACT) set clocks forward on October 4, 2026 and back on April 5, 2026. Queensland, Western Australia, and Northern Territory do not observe DST.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Daylight Saving Time 2026 — Dates, Countries & Clock Changes',
  description: 'Complete guide to DST dates in 2026 for every country, including US, UK, EU, Australia, and New Zealand.',
  url: 'https://whattime.city/daylight-saving-time/',
  datePublished: '2026-01-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'whattime.city' },
  publisher: {
    '@type': 'Organization',
    name: 'whattime.city',
    url: 'https://whattime.city',
  },
}

export default function DaylightSavingTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-sky-500">Home</Link>
        {' / '}
        <span className="text-slate-600">Daylight Saving Time</span>
      </nav>
      <DSTPageClient />
    </ContentPageWrapper>
  )
}
