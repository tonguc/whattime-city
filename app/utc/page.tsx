import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import UTCClockClient from './UTCClockClient'

export const metadata: Metadata = {
  title: 'UTC Time Now — Coordinated Universal Time | UTC+0',
  description: 'Current UTC time. UTC is 5 hours ahead of EST (4 hours ahead of EDT during Daylight Saving Time). Live clock, UTC vs EST/PST/CST explained, and time zone converter.',
  keywords: ['UTC time now', 'UTC time', 'current UTC time', 'UTC+0', 'coordinated universal time', 'UTC to EST', 'is UTC 4 or 5 hours ahead of EST'],
  alternates: { canonical: 'https://whattime.city/utc/' },
  openGraph: {
    title: 'UTC Time Now — Coordinated Universal Time',
    description: 'Live UTC clock. UTC is always UTC+0 — it never observes Daylight Saving Time. EST is 5 hours behind UTC in winter, EDT is 4 hours behind in summer.',
    type: 'website',
    url: 'https://whattime.city/utc/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTC Time Now | UTC+0 Always',
    description: 'Current UTC time. UTC never changes — EST/EDT changes around it.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is UTC 4 or 5 hours ahead of EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTC is 5 hours ahead of EST (Eastern Standard Time, UTC-5) during winter. UTC is 4 hours ahead of EDT (Eastern Daylight Time, UTC-4) during summer when Daylight Saving Time is active. UTC itself never changes — it is always UTC+0. The confusion comes from the US East Coast switching between EST and EDT twice a year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is UTC time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTC (Coordinated Universal Time) is the primary global time standard used to synchronize clocks worldwide. It is always UTC+0 — it never observes Daylight Saving Time and never changes. All other time zones are defined as offsets from UTC. For example, EST is UTC-5, IST is UTC+5:30, and JST is UTC+9.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between UTC and GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTC and GMT are nearly identical in practice — both are at UTC+0/GMT+0. The difference is technical: GMT (Greenwich Mean Time) is a time zone based on the solar time at the Royal Observatory in Greenwich, London. UTC is an atomic clock-based standard maintained by the International Bureau of Weights and Measures (BIPM). For everyday timekeeping purposes, UTC and GMT are interchangeable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert UTC to EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert UTC to EST (Eastern Standard Time, winter): subtract 5 hours from UTC. For example, 15:00 UTC = 10:00 AM EST. To convert UTC to EDT (Eastern Daylight Time, summer): subtract 4 hours. For example, 15:00 UTC = 11:00 AM EDT. The US East Coast observes EDT from the second Sunday in March to the first Sunday in November.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries use UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No country uses UTC as its official local time. UTC is a technical standard, not a civil time zone. However, several places effectively observe UTC+0: Iceland (year-round), the Faroe Islands, and parts of West Africa (Ghana, Ivory Coast, Senegal, Guinea). The UK observes GMT (equivalent to UTC+0) in winter and BST (UTC+1) in summer.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'UTC — Coordinated Universal Time', item: 'https://whattime.city/utc/' },
  ],
}

export default function UTCPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="UTC — Coordinated Universal Time"
        subtitle="UTC+0 · Never observes DST · Global time standard"
      />
      <UTCClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'UTC to EST Converter', href: '/utc-to-est/' },
          { label: 'GMT Time Now', href: '/gmt/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'CST — Central Standard Time', href: '/cst/' },
          { label: 'MST — Mountain Standard Time', href: '/mst/' },
          { label: 'IST — India Standard Time', href: '/india/' },
          { label: 'JST — Japan Standard Time', href: '/japan/' },
          { label: 'Time Zone Converter', href: '/time-converter/' },
          { label: 'Daylight Saving Time', href: '/daylight-saving-time/' },
          { label: 'US Time Zones', href: '/us-time-zones/' },
        ]}
        linksTitle="UTC Converters & Related Time Zones"
        footerText="UTC data sourced from IANA Time Zone Database. UTC+0 is permanent — no Daylight Saving Time. All civil time zones are defined as offsets from UTC."
      />
    </ContentPageWrapper>
  )
}
