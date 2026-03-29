import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import WeekNumberClient from './WeekNumberClient'

export const metadata: Metadata = {
  title: 'Week Number — What Week Is It? (2026)',
  description: 'What week of the year is it today? See the current ISO week number, full 2026 week number calendar, and learn the difference between ISO and US week numbering.',
  alternates: {
    canonical: 'https://whattime.city/week-number/',
  },
  openGraph: {
    title: 'Week Number — What Week of the Year Is It?',
    description: 'Current week number for 2026. Full ISO week calendar, today\'s week number, weeks remaining, and FAQ.',
    type: 'website',
    url: 'https://whattime.city/week-number/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Week Number Is It? (2026)',
    description: 'Current ISO week number, full year calendar, and week numbering explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What week of the year is it today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The current ISO week number is shown at the top of this page. It updates automatically based on your device\'s date. ISO weeks run Monday through Sunday and are numbered 1–52 (or 1–53 in some years).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ISO week numbering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISO 8601 week numbering defines Week 1 as the week containing the first Thursday of the year (equivalently, the week with January 4). Weeks run Monday to Sunday. This is the international standard used in most of Europe, business reporting, and software systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Week 1 always start on January 1st?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ISO Week 1 is defined as the week containing the first Thursday of the year. Depending on what day January 1 falls on, Week 1 may start in late December of the previous year. For example, if January 1 is a Friday, Week 1 starts on the Monday before — December 28.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many weeks are in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2026 has 52 ISO weeks. The last week (Week 52) ends on Sunday, January 3, 2027. Not every year has 53 weeks — a year gets 53 ISO weeks only when January 1 or December 31 falls on a Thursday.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between ISO week numbers and US week numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISO week numbers (ISO 8601) start the week on Monday and define Week 1 as containing the first Thursday. US week numbers (used in North America) typically start the week on Sunday, and Week 1 is the week containing January 1. This means the US Week 1 can start before the ISO Week 1, and the two systems can differ by 1–2 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries use ISO week numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISO week numbers are the standard in most of Europe (especially Germany, Scandinavia, Netherlands), and are widely used in international business, logistics, manufacturing, and software. North America (US, Canada) and some other regions more commonly use Sunday-start week numbering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a year have 53 weeks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A year has 53 ISO weeks when January 1 or December 31 falls on a Thursday (or in a leap year when they fall on a Wednesday or Thursday). Recent years with 53 weeks: 2020, 2015, 2009. Next occurrence after 2026: 2032.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I write an ISO week date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISO 8601 week date format is YYYY-Www-D. For example, 2026-W13-1 means Week 13 of 2026, Monday. The W prefix identifies the week component. This format is used in software, logistics, and international scheduling.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Week Number', item: 'https://whattime.city/week-number/' },
  ],
}

export default function WeekNumberPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WeekNumberClient />
    </ContentPageWrapper>
  )
}
