import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'Alaska Time Zone — AKST/AKDT, UTC-9/UTC-8',
  description: 'Complete guide to Alaska Time Zone (AKT). Current AKST/AKDT time, UTC offset, DST dates, cities, and time differences with the contiguous US.',
  keywords: ['alaska time zone', 'alaska time', 'akst', 'akdt', 'alaska standard time', 'what time is it in alaska', 'alaska time now'],
  alternates: { canonical: 'https://whattime.city/alaska-time-zone/' },
  openGraph: {
    title: 'Alaska Time Zone — AKST/AKDT Complete Guide',
    description: 'Current Alaska Time, UTC offset, DST info, and converters.',
    type: 'website',
    url: 'https://whattime.city/alaska-time-zone/',
    siteName: 'whattime.city',
  },
  twitter: { card: 'summary_large_image', title: 'Alaska Time Zone — AKST/AKDT, UTC-9/UTC-8', description: 'Current Alaska Time with DST info and converters.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time zone is Alaska in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Alaska uses Alaska Time (AKT), which switches between Alaska Standard Time (AKST, UTC-9) in winter and Alaska Daylight Time (AKDT, UTC-8) in summer. The Aleutian Islands west of 169°30′W use Hawaii-Aleutian Time (HAST, UTC-10). The IANA identifier for most of Alaska is America/Anchorage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the UTC offset for Alaska Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alaska Standard Time (AKST) is UTC-9 — nine hours behind UTC. During Daylight Saving Time (second Sunday in March to first Sunday in November), Alaska uses AKDT (UTC-8).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Alaska and Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alaska Time (AKST, UTC-9) is 4 hours behind Eastern Standard Time (EST, UTC-5). During DST, AKDT (UTC-8) is 4 hours behind EDT (UTC-4). The 4-hour gap is constant year-round because both zones observe DST on the same dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Alaska and Pacific Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alaska Time (AKST, UTC-9) is 1 hour behind Pacific Standard Time (PST, UTC-8). During DST, AKDT (UTC-8) is 1 hour behind PDT (UTC-7). The difference is always 1 hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Alaska observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most of Alaska observes Daylight Saving Time on the standard US schedule: clocks spring forward at 2:00 AM on the second Sunday in March (AKST→AKDT), and fall back at 2:00 AM on the first Sunday in November (AKDT→AKST). The exception is the part of Alaska that uses Hawaii-Aleutian Time (HAST), which also observes DST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'US Time Zones', item: 'https://whattime.city/us-time-zones/' },
    { '@type': 'ListItem', position: 3, name: 'Alaska Time Zone', item: 'https://whattime.city/alaska-time-zone/' },
  ],
}

export default function AlaskaTimeZonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="Alaska Time Zone"
        subtitle="AKST (UTC-9) in winter · AKDT (UTC-8) during Daylight Saving Time"
      />
      <TZExplainerClient
        tz="America/Anchorage"
        abbr="AKT"
        stdName="Alaska Standard Time"
        stdAbbr="AKST"
        dstAbbr="AKDT"
        utcStd="UTC-9"
        utcDst="UTC-8"
        color="bg-teal-600"
        states={['Alaska (most)', 'Aleutian Islands east of 169°30′W']}
        majorCities={[
          { name: 'Anchorage', href: '/anchorage/' },
          { name: 'Fairbanks', href: '/fairbanks/' },
          { name: 'Juneau', href: '/juneau/' },
          { name: 'Sitka', href: '/sitka/' },
          { name: 'Kenai', href: '/kenai/' },
          { name: 'Kodiak', href: '/kodiak/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Pacific Time Zone', href: '/pacific-time-zone/' },
          { label: 'Hawaii Time Zone', href: '/hawaii-time-zone/' },
          { label: 'Eastern Time Zone', href: '/eastern-time-zone/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
          { label: 'PST to EST', href: '/pst-to-est/' },
          { label: 'Time Converter', href: '/time-converter/' },
        ]}
        linksTitle="Alaska Time & Related Zones"
        footerText="Alaska Time Zone data sourced from IANA Time Zone Database (America/Anchorage). DST rules per US Energy Policy Act of 2005."
      />
    </ContentPageWrapper>
  )
}
