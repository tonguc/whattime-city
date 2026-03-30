import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import HawaiiClockClient from './HawaiiClockClient'

export const metadata: Metadata = {
  title: 'Time in Hawaii Now — HST (UTC−10) · No DST',
  description: 'What time is it in Hawaii right now? Hawaii uses HST (Hawaii Standard Time, UTC-10) year-round — no Daylight Saving Time. Live Honolulu clock, Hawaii vs mainland time differences.',
  keywords: [
    'time in hawaii', 'hawaii time now', 'what time is it in hawaii',
    'hawaii time', 'hawaiian time', 'honolulu time now', 'hawaii standard time',
    'HST time zone', 'hawaii time vs california', 'hawaii time vs new york',
    'what time is it in hawaii right now', 'hawaii utc-10',
  ],
  alternates: { canonical: 'https://whattime.city/hawaii/' },
  openGraph: {
    title: 'Current Time in Hawaii — HST (UTC−10)',
    description: 'Live Hawaii time. HST (UTC-10) used all year — Hawaii does not observe Daylight Saving Time. Honolulu, Hilo, and all of Hawaii on permanent UTC-10.',
    type: 'website',
    url: 'https://whattime.city/hawaii/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Hawaii Now — HST (UTC-10)',
    description: 'Current Hawaii time. No DST — Hawaii is always UTC-10. See Hawaii vs Eastern, Pacific, and other US zones.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Hawaii right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii uses Hawaii Standard Time (HST, UTC-10) year-round. Hawaii does not observe Daylight Saving Time, so the clock never changes. The live clock above shows the exact current time in Honolulu and all of Hawaii.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours behind is Hawaii from the US East Coast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii (HST, UTC-10) is 5 hours behind Eastern Standard Time (EST, UTC-5) in winter, and 6 hours behind Eastern Daylight Time (EDT, UTC-4) in summer. Example: When it is 12:00 PM EST in New York, it is 7:00 AM HST in Honolulu.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Hawaii in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii is in the Hawaii-Aleutian Standard Time zone, using HST (UTC-10). Unlike Alaska, Hawaii does not observe Daylight Saving Time — HST is fixed at UTC-10 all year. The IANA identifier is Pacific/Honolulu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Hawaii observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Hawaii does not observe Daylight Saving Time. Hawaii and Arizona are the only US states that do not change their clocks. Hawaii is close to the equator, so daylight hours vary little throughout the year, making DST unnecessary. Hawaii is always UTC-10.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Hawaii and California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii (HST, UTC-10) is 2 hours behind California in winter (PST, UTC-8) and 3 hours behind California in summer (PDT, UTC-7). Since Hawaii never changes clocks but California does, the difference alternates between 2 and 3 hours each year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Hawaii and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii (HST, UTC-10) is 10 hours behind the UK in winter (GMT, UTC+0) and 11 hours behind the UK in summer (BST, UTC+1). Hawaii never changes, but the UK switches to British Summer Time (BST) from March to October, widening the gap by 1 hour.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Hawaii', item: 'https://whattime.city/hawaii/' },
  ],
}

export default function HawaiiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="Current Time in Hawaii"
        subtitle="Hawaii Standard Time (HST) · UTC-10 · Year-round · No Daylight Saving Time"
      />
      <HawaiiClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Hawaii Time Zone Guide', href: '/hawaii-time-zone/' },
          { label: 'Alaska Time Zone', href: '/alaska-time-zone/' },
          { label: 'Pacific Time — PST/PDT', href: '/pst/' },
          { label: 'Arizona Time (No DST)', href: '/arizona/' },
          { label: 'Time Zone Converter', href: '/time-converter/' },
          { label: 'US Time Zones Overview', href: '/us-time-zones/' },
          { label: 'GMT to PST', href: '/gmt-to-pst/' },
          { label: 'Meeting Planner', href: '/meeting/' },
        ]}
        linksTitle="Hawaii Time Resources"
        footerText="Hawaii uses HST (UTC-10) year-round. Hawaii and Arizona are the only US states that do not observe Daylight Saving Time. Data sourced from IANA Time Zone Database (Pacific/Honolulu)."
      />
    </ContentPageWrapper>
  )
}
