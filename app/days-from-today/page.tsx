import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DaysFromTodayClient from './DaysFromTodayClient'

export const metadata: Metadata = {
  title: 'Days From Today Calculator — Find Any Date X Days Away',
  description: 'Calculate what date is 30, 45, 60, 90, 120, or 180 days from today. Find any date in the future or past. Quick results with day name, week number, and calendar context.',
  alternates: {
    canonical: 'https://whattime.city/days-from-today/',
  },
  openGraph: {
    title: 'Days From Today Calculator — Find Any Date X Days Away',
    description: 'Instantly calculate what date is X days from today or X days ago. Includes day name, week number, and how many weeks and months away.',
    type: 'website',
    url: 'https://whattime.city/days-from-today/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Days From Today Calculator',
    description: 'Find what date is 30, 60, 90, 120, or 180 days from today instantly.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What date is 30 days from today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To find 30 days from today, add 30 days to the current date. Use our calculator above for the exact date, including the day of the week. 30 days is approximately 4 weeks and 2 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What date is 90 days from today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 days from today is approximately 3 months or about 12 weeks and 6 days. Enter 90 in our calculator to see the exact date with the day of the week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What date is 180 days from today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '180 days from today is approximately 6 months or about 25 weeks and 5 days. This is commonly used for passport validity checks, lease agreements, and project planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate days from a specific date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter the number of days in our calculator and choose "from today" for future dates or "ago" for past dates. The tool automatically accounts for varying month lengths and leap years.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 45 days from today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '45 days from today is approximately 6 weeks and 3 days, or about 1.5 months. Enter 45 in the calculator above to see the exact date.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many business days are in 30 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are typically 21-22 business days (weekdays) in a 30-day period, depending on where in the week you start and whether any holidays fall within the range.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Days From Today Calculator', item: 'https://whattime.city/days-from-today/' },
  ],
}

export default function DaysFromTodayPage() {
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
      <DaysFromTodayClient />
    </ContentPageWrapper>
  )
}
