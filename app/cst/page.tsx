import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'CST — Current Central Standard Time Now | UTC-6',
  description: 'What time is it in CST right now? Central Standard Time (CST) is UTC-6, used by the US Midwest and South in winter. Includes live clock, CST vs CDT difference, and major cities.',
  keywords: ['CST', 'central standard time', 'CST time now', 'CST now', 'what time is it in CST', 'UTC-6', 'central time now'],
  alternates: { canonical: 'https://whattime.city/cst/' },
  openGraph: {
    title: 'CST — Current Central Standard Time Now',
    description: 'Live CST clock. Central Standard Time is UTC-6, used by the US Midwest and South in winter (November–March).',
    type: 'website',
    url: 'https://whattime.city/cst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CST — Central Standard Time Now (UTC-6)',
    description: 'Current CST time, UTC offset, cities, and CST vs CDT explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is CST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST stands for Central Standard Time. It is UTC-6, meaning 6 hours behind Coordinated Universal Time. CST is used by the US Midwest and South during winter (from the first Sunday in November to the second Sunday in March). During summer, the same zone observes CDT (Central Daylight Time, UTC-5).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CST and CDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (Central Standard Time) is UTC-6, active from the first Sunday in November to the second Sunday in March. CDT (Central Daylight Time) is UTC-5, active during Daylight Saving Time from the second Sunday in March to the first Sunday in November. Both refer to the US Central time zone — "CT" (Central Time) is the general term covering both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it currently CST or CDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The US Central zone observes CST (UTC-6) from the first Sunday in November through the second Sunday in March. It switches to CDT (UTC-5) for Daylight Saving Time from the second Sunday in March through the first Sunday in November. The live clock above shows which abbreviation is currently active.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities are in CST / Central Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in Central Time include Chicago, Houston, Dallas, San Antonio, Austin, Memphis, New Orleans, Minneapolis, Kansas City, Oklahoma City, and Winnipeg (Canada). All these cities use CST (UTC-6) in winter and CDT (UTC-5) during Daylight Saving Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does CST compare to EST and PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (UTC-6) is 1 hour behind EST (UTC-5) and 2 hours ahead of PST (UTC-8). When it is 12:00 PM EST in New York, it is 11:00 AM CST in Chicago and 9:00 AM PST in Los Angeles. During Daylight Saving Time, the same relationships hold: CDT is 1 hour behind EDT, and 2 hours ahead of PDT.',
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
    { '@type': 'ListItem', position: 3, name: 'CST — Central Standard Time', item: 'https://whattime.city/cst/' },
  ],
}

export default function CSTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="CST — Central Standard Time"
        subtitle="UTC-6 · US Midwest & South · Winter Time (Nov–Mar)"
      />
      <TZExplainerClient
        tz="America/Chicago"
        abbr="CT"
        stdName="Central Standard Time"
        stdAbbr="CST"
        dstAbbr="CDT"
        utcStd="UTC-6"
        utcDst="UTC-5"
        color="bg-violet-600"
        states={['Alabama', 'Arkansas', 'Illinois', 'Iowa', 'Louisiana', 'Minnesota', 'Mississippi', 'Missouri', 'Oklahoma', 'Wisconsin', 'Kansas', 'Nebraska', 'North Dakota', 'South Dakota', 'Texas (most)']}
        majorCities={[
          { name: 'Chicago', href: '/chicago/' },
          { name: 'Houston', href: '/houston/' },
          { name: 'Dallas', href: '/dallas/' },
          { name: 'San Antonio', href: '/san-antonio/' },
          { name: 'Minneapolis', href: '/minneapolis/' },
          { name: 'New Orleans', href: '/new-orleans/' },
          { name: 'Kansas City', href: '/kansas-city/' },
          { name: 'Memphis', href: '/memphis/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Central Time Zone Guide', href: '/central-time-zone/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'MST — Mountain Standard Time', href: '/mst/' },
          { label: 'CST to EST', href: '/cst-to-est/' },
          { label: 'CST to PST', href: '/cst-to-pst/' },
          { label: 'CST to GMT', href: '/cst-to-gmt/' },
          { label: 'CST to IST', href: '/cst-to-ist/' },
          { label: 'CST to MST', href: '/cst-to-mst/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
          { label: 'Daylight Saving Time', href: '/daylight-saving-time/' },
        ]}
        linksTitle="CST Converters & Related Time Zones"
        footerText="CST data sourced from IANA Time Zone Database (America/Chicago). UTC-6 in standard time, UTC-5 during Daylight Saving Time."
      />
    </ContentPageWrapper>
  )
}
