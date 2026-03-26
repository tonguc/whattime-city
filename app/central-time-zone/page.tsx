import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'Central Time Zone — CST/CDT, UTC-6/UTC-5, States & Cities',
  description: 'Complete guide to the Central Time Zone (CT). Current CST/CDT time, UTC offset, DST dates, all states and major cities in Central Time, and time converters.',
  keywords: ['central time zone', 'central time', 'cst time zone', 'cdt time zone', 'central standard time', 'what time is it in central time', 'central time now'],
  alternates: { canonical: 'https://whattime.city/central-time-zone/' },
  openGraph: {
    title: 'Central Time Zone — CST/CDT Complete Guide',
    description: 'Current Central Time, UTC offset, DST info, states list, and converters.',
    type: 'website',
    url: 'https://whattime.city/central-time-zone/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Time Zone — CST/CDT, UTC-6/UTC-5',
    description: 'Current Central Time with DST info, states, and converters.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Central Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Central Time (CT) is the time zone used by the central United States. It switches between Central Standard Time (CST, UTC-6) in winter and Central Daylight Time (CDT, UTC-5) in summer. It covers states like Illinois, Texas, Minnesota, and Louisiana, and major cities including Chicago, Houston, Dallas, and Minneapolis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the UTC offset for Central Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Central Standard Time (CST) is UTC-6 — six hours behind UTC. During Daylight Saving Time (second Sunday in March to first Sunday in November), the Central zone uses CDT (UTC-5).',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in the Central Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'States primarily in Central Time: Alabama, Arkansas, Illinois, Iowa, Kansas (most), Louisiana, Minnesota, Mississippi, Missouri, Nebraska (most), North Dakota (most), Oklahoma, South Dakota (most), Tennessee (most), Texas, Wisconsin. Parts of: Indiana (northwest), Kentucky (west), Michigan (northwest tip).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours is Central Time behind Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Central Time (CT) is always 1 hour behind Eastern Time (ET). CST (UTC-6) is 1 hour behind EST (UTC-5), and CDT (UTC-5) is 1 hour behind EDT (UTC-4). Both zones observe DST on the same dates, so the gap stays constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CST and CDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (Central Standard Time) is UTC-6, used November–March. CDT (Central Daylight Time) is UTC-5, used March–November during Daylight Saving Time. Both cover the same geographic zone — the difference is seasonal.',
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
    { '@type': 'ListItem', position: 3, name: 'Central Time Zone', item: 'https://whattime.city/central-time-zone/' },
  ],
}

export default function CentralTimeZonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="Central Time Zone"
        subtitle="CST (UTC-6) in winter · CDT (UTC-5) during Daylight Saving Time"
      />
      <TZExplainerClient
        tz="America/Chicago"
        abbr="CT"
        stdName="Central Standard Time"
        stdAbbr="CST"
        dstAbbr="CDT"
        utcStd="UTC-6"
        utcDst="UTC-5"
        color="bg-green-600"
        states={['Alabama', 'Arkansas', 'Illinois', 'Iowa', 'Kansas (most)', 'Louisiana', 'Minnesota', 'Mississippi', 'Missouri', 'Nebraska (most)', 'North Dakota (most)', 'Oklahoma', 'South Dakota (most)', 'Tennessee (most)', 'Texas', 'Wisconsin']}
        majorCities={[
          { name: 'Chicago', href: '/chicago/' },
          { name: 'Houston', href: '/houston/' },
          { name: 'Dallas', href: '/dallas/' },
          { name: 'San Antonio', href: '/san-antonio/' },
          { name: 'Austin', href: '/austin/' },
          { name: 'Minneapolis', href: '/minneapolis/' },
          { name: 'New Orleans', href: '/new-orleans/' },
          { name: 'Kansas City', href: '/kansas-city/' },
          { name: 'Nashville', href: '/nashville/' },
          { name: 'Memphis', href: '/memphis/' },
          { name: 'St. Louis', href: '/saint-louis/' },
          { name: 'Milwaukee', href: '/milwaukee/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'CST to EST', href: '/cst-to-est/' },
          { label: 'CST to PST', href: '/cst-to-pst/' },
          { label: 'PST to CST', href: '/pst-to-cst/' },
          { label: 'IST to CST', href: '/ist-to-cst/' },
          { label: 'Eastern Time Zone', href: '/eastern-time-zone/' },
          { label: 'Mountain Time Zone', href: '/mountain-time-zone/' },
          { label: 'Pacific Time Zone', href: '/pacific-time-zone/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
        ]}
        linksTitle="Central Time Converters & Related Zones"
        footerText="Central Time Zone data sourced from IANA Time Zone Database (America/Chicago). DST rules per US Energy Policy Act of 2005."
      />
    </ContentPageWrapper>
  )
}
