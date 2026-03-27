import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'PST — Current Pacific Standard Time Now | UTC-8',
  description: 'What time is it in PST right now? Pacific Standard Time (PST) is UTC-8, used by the US West Coast in winter. Includes live clock, PST vs PDT difference, and major cities.',
  keywords: ['PST', 'pacific standard time', 'PST time now', 'PST now', 'what time is it in PST', 'UTC-8', 'pacific time now'],
  alternates: { canonical: 'https://whattime.city/pst/' },
  openGraph: {
    title: 'PST — Current Pacific Standard Time Now',
    description: 'Live PST clock. Pacific Standard Time is UTC-8, used by the US West Coast in winter (November–March).',
    type: 'website',
    url: 'https://whattime.city/pst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PST — Pacific Standard Time Now (UTC-8)',
    description: 'Current PST time, UTC offset, cities, and PST vs PDT explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST stands for Pacific Standard Time. It is UTC-8, meaning 8 hours behind Coordinated Universal Time. PST is used by the US West Coast during winter (from the first Sunday in November to the second Sunday in March). During summer, the same zone observes PDT (Pacific Daylight Time, UTC-7).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between PST and PDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time) is UTC-8, active from the first Sunday in November to the second Sunday in March. PDT (Pacific Daylight Time) is UTC-7, active during Daylight Saving Time from the second Sunday in March to the first Sunday in November. Both refer to the US West Coast time zone — "PT" (Pacific Time) is the general term covering both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it currently PST or PDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The US West Coast observes PST (UTC-8) from the first Sunday in November through the second Sunday in March. It switches to PDT (UTC-7) for Daylight Saving Time from the second Sunday in March through the first Sunday in November. The live clock above shows which abbreviation is currently active.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities are in PST / Pacific Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in Pacific Time include Los Angeles, San Francisco, Seattle, Portland, Las Vegas, San Diego, Sacramento, and Vancouver (Canada). All these cities use PST (UTC-8) in winter and PDT (UTC-7) during Daylight Saving Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours behind EST is PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (UTC-8) is exactly 3 hours behind EST (UTC-5). For example, when it is 12:00 PM EST in New York, it is 9:00 AM PST in Los Angeles. During Daylight Saving Time, PDT (UTC-7) is 3 hours behind EDT (UTC-4) — the gap remains constant throughout the year because both coasts observe DST simultaneously.',
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
    { '@type': 'ListItem', position: 3, name: 'PST — Pacific Standard Time', item: 'https://whattime.city/pst/' },
  ],
}

export default function PSTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="PST — Pacific Standard Time"
        subtitle="UTC-8 · US West Coast · Winter Time (Nov–Mar)"
      />
      <TZExplainerClient
        tz="America/Los_Angeles"
        abbr="PT"
        stdName="Pacific Standard Time"
        stdAbbr="PST"
        dstAbbr="PDT"
        utcStd="UTC-8"
        utcDst="UTC-7"
        color="bg-emerald-600"
        states={['California', 'Nevada', 'Oregon', 'Washington', 'Idaho (north)']}
        majorCities={[
          { name: 'Los Angeles', href: '/los-angeles/' },
          { name: 'San Francisco', href: '/san-francisco/' },
          { name: 'Seattle', href: '/seattle/' },
          { name: 'Las Vegas', href: '/las-vegas/' },
          { name: 'Portland', href: '/portland/' },
          { name: 'San Diego', href: '/san-diego/' },
          { name: 'Sacramento', href: '/sacramento/' },
          { name: 'Vancouver', href: '/vancouver/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Pacific Time Zone Guide', href: '/pacific-time-zone/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'CST — Central Standard Time', href: '/cst/' },
          { label: 'MST — Mountain Standard Time', href: '/mst/' },
          { label: 'PST to EST', href: '/pst-to-est/' },
          { label: 'PST to CST', href: '/pst-to-cst/' },
          { label: 'PST to GMT', href: '/pst-to-gmt/' },
          { label: 'PST to IST', href: '/pst-to-ist/' },
          { label: 'PST to MST', href: '/pst-to-mst/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
          { label: 'Daylight Saving Time', href: '/daylight-saving-time/' },
        ]}
        linksTitle="PST Converters & Related Time Zones"
        footerText="PST data sourced from IANA Time Zone Database (America/Los_Angeles). UTC-8 in standard time, UTC-7 during Daylight Saving Time."
      />
    </ContentPageWrapper>
  )
}
