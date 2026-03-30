import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import ISTClockClient from './ISTClockClient'

export const metadata: Metadata = {
  title: 'IST — India Standard Time | UTC+5:30',
  description: 'Current IST time. India Standard Time is UTC+5:30 — no Daylight Saving Time. What is IST in the USA? IST is 10.5 hours ahead of EST in winter, 9.5 hours ahead in summer.',
  keywords: ['IST time zone', 'IST time now', 'India Standard Time', 'IST UTC+5:30', 'ist time zones', 'india time zone ist', 'IST to EST', 'what is IST time in USA'],
  alternates: { canonical: 'https://whattime.city/ist/' },
  openGraph: {
    title: 'IST Time Zone — India Standard Time Now',
    description: 'Live IST clock. India Standard Time is UTC+5:30. India never observes DST — IST is always UTC+5:30 year-round.',
    type: 'website',
    url: 'https://whattime.city/ist/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IST — India Standard Time | UTC+5:30',
    description: 'Current IST time. IST is 10.5 hrs ahead of EST (9.5 hrs in summer). India never changes clocks.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the IST time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST (India Standard Time) is the time zone used across all of India. India is one of the few large countries to use a single national time zone rather than multiple zones. The IANA identifier is Asia/Kolkata. IST is UTC+5:30 and covers the entire Indian subcontinent including Sri Lanka does not use IST — Sri Lanka uses SLST (UTC+5:30, same offset but separate zone).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is IST time in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST (UTC+5:30) is far ahead of all US time zones. In winter: EST is 10.5 hours behind IST, CST is 11.5 hours behind, MST is 12.5 hours behind, PST is 13.5 hours behind. In summer (US DST active): EDT is 9.5 hours behind IST, CDT is 10.5 behind, MDT is 11.5 behind, PDT is 12.5 behind. Example: 12:00 PM IST = 1:30 AM EST in winter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you convert IST to USA time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert IST to EST (winter): subtract 10 hours and 30 minutes. To convert IST to EDT (summer): subtract 9 hours and 30 minutes. To convert IST to PST: subtract 13 hours and 30 minutes. To convert IST to PDT: subtract 12 hours and 30 minutes. Because India does not observe DST, the offset changes when the US clocks change, not when India\'s do.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does India have a 30-minute time zone offset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India uses UTC+5:30 — a half-hour offset — as a compromise for the country\'s geographic width. India spans from roughly UTC+5 (western India) to UTC+6 (northeastern India). Rather than adopt two time zones or round to a full hour, India chose 5:30 as the midpoint when standardizing railway time in 1906. It remains one of the few countries with a 30-minute UTC offset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does India observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India does not observe Daylight Saving Time. IST is always UTC+5:30, year-round, every year. This means the time difference between India and countries like the US, UK, and EU shifts twice a year when those countries change their clocks — India\'s clocks never move.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between IST and GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST (India Standard Time) is UTC+5:30, which means India is 5 hours and 30 minutes ahead of GMT/UTC. When it is 12:00 PM GMT, it is 5:30 PM IST. During UK summer (BST, UTC+1), India is 4 hours and 30 minutes ahead of UK time.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'IST — India Standard Time', item: 'https://whattime.city/ist/' },
  ],
}

export default function ISTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="IST — India Standard Time"
        subtitle="UTC+5:30 · No DST · Single time zone for all of India"
      />
      <ISTClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'IST to EST Converter', href: '/ist-to-est/' },
          { label: 'IST to PST Converter', href: '/ist-to-pst/' },
          { label: 'IST to CST Converter', href: '/ist-to-cst/' },
          { label: 'IST to GMT Converter', href: '/ist-to-gmt/' },
          { label: 'India Current Time', href: '/india/' },
          { label: 'GMT Time Now', href: '/gmt/' },
          { label: 'UTC Time Now', href: '/utc/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'Time Zone Converter', href: '/time-converter/' },
        ]}
        linksTitle="IST Converters & Related Time Zones"
        footerText="IST data sourced from IANA Time Zone Database (Asia/Kolkata). India Standard Time is UTC+5:30 permanently. India does not observe Daylight Saving Time."
      />
    </ContentPageWrapper>
  )
}
