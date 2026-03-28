import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DateCalculatorClient from './DateCalculatorClient'

export const metadata: Metadata = {
  title: 'Date Calculator — Days Between Two Dates',
  description: 'Calculate the number of days, weeks, and months between any two dates. Find business days, exclude weekends, and see the exact duration between dates.',
  alternates: {
    canonical: 'https://whattime.city/date-calculator/',
  },
  openGraph: {
    title: 'Date Calculator — Days Between Two Dates',
    description: 'Calculate exact days, weeks, and months between any two dates. Business days count included.',
    type: 'website',
    url: 'https://whattime.city/date-calculator/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Date Calculator — Days Between Dates',
    description: 'Find the exact number of days between any two dates.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I calculate days between two dates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter a start date and end date in our calculator above. It will instantly show the number of calendar days, business days (weekdays), weeks, and months between the two dates. The calculation accounts for varying month lengths and leap years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many business days are between two dates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Business days are weekdays (Monday through Friday), excluding Saturday and Sunday. Our calculator shows both calendar days and business days. Note that public holidays are not excluded from the business day count as they vary by country.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate months between two dates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The calculator shows the duration broken down into years, months, and days. For example, the period from January 15 to April 20 is 3 months and 5 days. This accounts for the actual number of days in each month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the date calculator account for leap years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The calculator uses the Gregorian calendar and automatically accounts for leap years (February has 29 days in leap years). Leap years occur every 4 years, except for years divisible by 100 but not 400.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a date calculator and a days from today calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A date calculator finds the duration between any two specific dates you choose. A "days from today" calculator adds or subtracts a number of days from today\'s date. Use our Days From Today tool at whattime.city/days-from-today/ for that purpose.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Date Calculator', item: 'https://whattime.city/date-calculator/' },
  ],
}

export default function DateCalculatorPage() {
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
      <DateCalculatorClient />
    </ContentPageWrapper>
  )
}
