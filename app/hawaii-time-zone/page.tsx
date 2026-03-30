import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'Hawaii Time Zone — HST (UTC−10) · No DST',
  description: 'Complete guide to Hawaii Time Zone (HST). Current Hawaii time, UTC-10 offset, no DST, time differences with US mainland zones, and converters.',
  keywords: ['hawaii time zone', 'hawaii time', 'hst', 'hawaii standard time', 'what time is it in hawaii', 'hawaii time now', 'hst time zone'],
  alternates: { canonical: 'https://whattime.city/hawaii-time-zone/' },
  openGraph: {
    title: 'Hawaii Time Zone — HST, UTC-10, No DST',
    description: 'Current Hawaii Time (HST, UTC-10). Hawaii does not observe Daylight Saving Time.',
    type: 'website',
    url: 'https://whattime.city/hawaii-time-zone/',
    siteName: 'whattime.city',
  },
  twitter: { card: 'summary_large_image', title: 'Hawaii Time Zone — HST (UTC−10) · No DST', description: 'Current Hawaii Time. No DST — HST is always UTC-10.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time zone is Hawaii in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii uses Hawaii-Aleutian Standard Time (HST), which is UTC-10. Hawaii does not observe Daylight Saving Time, so the offset is always UTC-10 year-round. The IANA identifier is Pacific/Honolulu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Hawaii observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Hawaii does not observe Daylight Saving Time. HST (Hawaii Standard Time) is always UTC-10, every day of the year. Hawaii is one of only two US states (along with most of Arizona) that does not change its clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Hawaii and the US mainland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii (HST, UTC-10) vs mainland US time zones: Eastern (EST, UTC-5) = 5 hours ahead of Hawaii in winter, 6 hours in summer (EDT). Central (CST, UTC-6) = 4 hours ahead in winter, 5 in summer. Mountain (MST, UTC-7) = 3 hours ahead in winter, 4 in summer (except Arizona which stays 3 hours ahead). Pacific (PST, UTC-8) = 2 hours ahead in winter, 3 in summer (PDT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Hawaii and California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii (HST, UTC-10) is 2 hours behind California (PST, UTC-8) in winter, and 3 hours behind in summer when California uses PDT (UTC-7). Example: 12:00 PM HST = 2:00 PM PST in winter = 3:00 PM PDT in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Hawaii and New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii (HST, UTC-10) is 5 hours behind New York (EST, UTC-5) in winter. In summer when New York uses EDT (UTC-4), Hawaii is 6 hours behind. Example: 9:00 AM HST = 2:00 PM EST = 3:00 PM EDT.',
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
    { '@type': 'ListItem', position: 3, name: 'Hawaii Time Zone', item: 'https://whattime.city/hawaii-time-zone/' },
  ],
}

export default function HawaiiTimeZonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="Hawaii Time Zone"
        subtitle="HST (UTC-10) · No Daylight Saving Time — clocks never change"
      />
      <TZExplainerClient
        tz="Pacific/Honolulu"
        abbr="HST"
        stdName="Hawaii Standard Time"
        stdAbbr="HST"
        dstAbbr="HST"
        utcStd="UTC-10"
        utcDst="UTC-10"
        color="bg-rose-500"
        states={['Hawaii', 'Aleutian Islands west of 169°30′W (HAST)']}
        majorCities={[
          { name: 'Honolulu', href: '/honolulu/' },
          { name: 'Hilo', href: '/hilo/' },
          { name: 'Kailua', href: '/kailua/' },
          { name: 'Pearl City', href: '/pearl-city/' },
          { name: 'Maui', href: '/maui/' },
          { name: 'Kauai', href: '/kauai/' },
        ]}
        dstNote="No DST — Hawaii uses HST (UTC-10) year-round"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Pacific Time Zone', href: '/pacific-time-zone/' },
          { label: 'Alaska Time Zone', href: '/alaska-time-zone/' },
          { label: 'Eastern Time Zone', href: '/eastern-time-zone/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
          { label: 'Time in Honolulu', href: '/honolulu/' },
          { label: 'Time Converter', href: '/time-converter/' },
        ]}
        linksTitle="Hawaii Time & Related Zones"
        footerText="Hawaii Time Zone data sourced from IANA Time Zone Database (Pacific/Honolulu). Hawaii does not observe Daylight Saving Time per the Uniform Time Act exemption."
      />
    </ContentPageWrapper>
  )
}
