import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import CalendarClient from './CalendarClient'

const year = new Date().getFullYear()

export const metadata: Metadata = {
  title: `${year} Calendar — Yearly Calendar With US Holidays`,
  description: `Free printable ${year} calendar with all 12 months and US federal holidays marked. Navigate between years, filter by month, and see what day each holiday falls on.`,
  alternates: { canonical: 'https://whattime.city/calendar/' },
  openGraph: {
    title: `${year} Calendar With US Holidays`,
    description: `Full ${year} yearly calendar. All 12 months with federal holidays, leap year info, and day-of-week references.`,
    type: 'website',
    url: 'https://whattime.city/calendar/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${year} Calendar — Free Online Calendar`,
    description: `${year} calendar with US holidays. Navigate years, filter months, see holiday dates.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many weeks are in a year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard year has 52 weeks and 1 day (52 × 7 = 364, plus 1). A leap year has 52 weeks and 2 days. Some years have 53 ISO weeks when January 1 falls on a Thursday (or Wednesday in a leap year).',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the next leap year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leap years occur every 4 years (2024, 2028, 2032...), except century years not divisible by 400. The next leap year after 2024 is 2028. Leap years add February 29, making the year 366 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What day does each month start on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The starting day shifts each month. Use the calendar above to see what day any month begins on. Navigate between years to plan ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days are in February?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'February has 28 days in regular years and 29 days in leap years. The next February with 29 days is in 2028.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Thanksgiving in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thanksgiving falls on the fourth Thursday of November. In 2026 it is November 26. In 2027 it is November 25.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the US federal holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There are 11 US federal holidays: New Year's Day, MLK Jr. Day, Presidents' Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas Day.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Calendar', item: 'https://whattime.city/calendar/' },
  ],
}

export default function CalendarPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CalendarClient />
    </ContentPageWrapper>
  )
}
