import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TodaysDateClient from './TodaysDateClient'

export const metadata: Metadata = {
  title: "Today's Date — What Is Today's Date? Day, Week & Year Info",
  description: "What is today's date? See the full date, day of the week, week number, day of the year, and year progress. Date in multiple formats: ISO, US, European, Unix timestamp.",
  alternates: { canonical: 'https://whattime.city/todays-date/' },
  openGraph: {
    title: "Today's Date — Current Date, Day & Week Number",
    description: "Today's date with day of week, week number, quarter, year progress, and upcoming holidays. Multiple date formats included.",
    type: 'website',
    url: 'https://whattime.city/todays-date/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Today's Date — What Day Is It Today?",
    description: "Current date, day of week, week number, year progress, and upcoming holidays.",
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is today's date?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Today's date is shown at the top of this page with the full day name, month, date number, and year. The page updates automatically at midnight.",
      },
    },
    {
      '@type': 'Question',
      name: 'What day of the week is it today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The current day of the week is displayed prominently at the top of the page. You can also see the ISO week number, day of the year, and which quarter we are in.',
      },
    },
    {
      '@type': 'Question',
      name: 'What week number is it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ISO week number is shown in the date details section. ISO weeks start on Monday, and Week 1 is the week containing the first Thursday of the year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this year a leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the date details section to see if the current year is a leap year. Leap years occur every 4 years (except century years not divisible by 400), adding February 29 and making the year 366 days instead of 365.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days are left in this year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Year Progress section shows exactly how many days are left until December 31, including a visual progress bar and the percentage of the year completed.',
      },
    },
    {
      '@type': 'Question',
      name: "What is today's date in different formats?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This page shows today's date in 6 formats: ISO 8601 (YYYY-MM-DD), US (MM/DD/YYYY), European (DD/MM/YYYY), Long Date (Month Day, Year), With Day Name, and Unix Timestamp.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: "Today's Date", item: 'https://whattime.city/todays-date/' },
  ],
}

export default function TodaysDatePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TodaysDateClient />
    </ContentPageWrapper>
  )
}
