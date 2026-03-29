import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import AmPmClient from './AmPmClient'

export const metadata: Metadata = {
  title: 'AM and PM — What Do They Mean? 12-Hour Clock Explained',
  description:
    'AM (Ante Meridiem) means before midday. PM (Post Meridiem) means after midday. Learn how the 12-hour clock works, when to use AM vs PM, and common mistakes like 12 AM vs 12 PM.',
  alternates: { canonical: 'https://whattime.city/articles/am-pm/' },
  openGraph: {
    title: 'AM and PM — What Do They Mean? 12-Hour Clock Explained',
    description: 'AM (Ante Meridiem) means before midday. PM (Post Meridiem) means after midday. Full 12-hour to 24-hour conversion chart included.',
    type: 'article',
    url: 'https://whattime.city/articles/am-pm/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AM and PM — What Do They Mean? 12-Hour Clock Explained',
    description: 'AM = Ante Meridiem (before midday). PM = Post Meridiem (after midday). Full conversion chart, 12 AM vs 12 PM explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does AM stand for?', acceptedAnswer: { '@type': 'Answer', text: 'AM stands for Ante Meridiem, a Latin phrase meaning "before midday." AM covers the period from 12:00 midnight (00:00) to 11:59 in the morning.' } },
    { '@type': 'Question', name: 'What does PM stand for?', acceptedAnswer: { '@type': 'Answer', text: 'PM stands for Post Meridiem, a Latin phrase meaning "after midday." PM covers the period from 12:00 noon (12:00) to 11:59 at night.' } },
    { '@type': 'Question', name: 'Is 12 PM noon or midnight?', acceptedAnswer: { '@type': 'Answer', text: '12 PM is noon (midday). 12 AM is midnight. A helpful way to remember: 12:01 PM is just after noon, so 12:00 PM must be noon. 12:01 AM is just after midnight, so 12:00 AM must be midnight.' } },
    { '@type': 'Question', name: 'Is midnight AM or PM?', acceptedAnswer: { '@type': 'Answer', text: 'Midnight is 12:00 AM. In 24-hour (military) time, midnight is 00:00. The new day begins at 12:00 AM, and the first minute after midnight is 12:01 AM.' } },
    { '@type': 'Question', name: 'What is 12:00 AM in 24-hour time?', acceptedAnswer: { '@type': 'Answer', text: '12:00 AM is 00:00 in 24-hour time. Midnight marks the start of a new calendar day.' } },
    { '@type': 'Question', name: 'Is it AM or PM right now?', acceptedAnswer: { '@type': 'Answer', text: 'Check the current time for any city at whattime.city. If the time shown is between midnight and 11:59 in the morning, it is AM. If it is between noon and 11:59 at night, it is PM.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://whattime.city/articles/' },
    { '@type': 'ListItem', position: 3, name: 'AM and PM — What Do They Mean?', item: 'https://whattime.city/articles/am-pm/' },
  ],
}

export default function AmPmPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AmPmClient />
    </ContentPageWrapper>
  )
}
