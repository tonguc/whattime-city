import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'EST — Eastern Standard Time | UTC−5',
  description: 'What time is it in EST right now? Eastern Standard Time (EST) is UTC-5, used by the US East Coast in winter. Includes live clock, EST vs EDT difference, and major cities.',
  keywords: ['EST', 'eastern standard time', 'EST time now', 'EST now', 'what time is it in EST', 'UTC-5', 'eastern time now'],
  alternates: { canonical: 'https://whattime.city/est/' },
  openGraph: {
    title: 'EST — Current Eastern Standard Time Now',
    description: 'Live EST clock. Eastern Standard Time is UTC-5, used by the US East Coast in winter (November–March).',
    type: 'website',
    url: 'https://whattime.city/est/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST — Eastern Standard Time Now (UTC-5)',
    description: 'Current EST time, UTC offset, cities, and EST vs EDT explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST stands for Eastern Standard Time. It is UTC-5, meaning 5 hours behind Coordinated Universal Time. EST is used by the US East Coast during winter (from the first Sunday in November to the second Sunday in March). During summer, the same zone observes EDT (Eastern Daylight Time, UTC-4).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between EST and EDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time) is UTC-5, active from the first Sunday in November to the second Sunday in March. EDT (Eastern Daylight Time) is UTC-4, active during Daylight Saving Time from the second Sunday in March to the first Sunday in November. Both refer to the US East Coast time zone — "ET" (Eastern Time) is the general term covering both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it currently EST or EDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The US East Coast observes EST (UTC-5) from the first Sunday in November through the second Sunday in March. It switches to EDT (UTC-4) for Daylight Saving Time from the second Sunday in March through the first Sunday in November. The live clock above shows which abbreviation is currently active.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities are in EST / Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in Eastern Time include New York City, Miami, Atlanta, Boston, Washington D.C., Philadelphia, Charlotte, Detroit, Jacksonville, Columbus, Nashville, Orlando, Toronto (Canada), and Ottawa (Canada). All these cities use EST (UTC-5) in winter and EDT (UTC-4) during Daylight Saving Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours behind UTC is EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST is exactly 5 hours behind UTC (UTC-5). For example, when it is 12:00 PM UTC, it is 7:00 AM EST. During Daylight Saving Time, the East Coast switches to EDT (UTC-4), which is 4 hours behind UTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Panama on EST time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Panama observes Eastern Standard Time (EST, UTC-5) year-round and does not observe Daylight Saving Time. This means Panama stays on UTC-5 permanently — the same as New York in winter, but 1 hour behind New York during summer when the US East Coast switches to EDT (UTC-4).',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is EST in the USA now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eastern Time is used across the US East Coast, covering states from Maine to Florida. The live clock at the top of this page shows the current EST/EDT time. During winter (November–March), the East Coast observes EST (UTC-5). During summer (March–November), it observes EDT (UTC-4). Major cities: New York, Miami, Atlanta, Boston, Washington D.C.',
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
    { '@type': 'ListItem', position: 3, name: 'EST — Eastern Standard Time', item: 'https://whattime.city/est/' },
  ],
}

export default function ESTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="EST — Eastern Standard Time"
        subtitle="UTC-5 · US East Coast · Winter Time (Nov–Mar)"
      />
      <TZExplainerClient
        tz="America/New_York"
        abbr="ET"
        stdName="Eastern Standard Time"
        stdAbbr="EST"
        dstAbbr="EDT"
        utcStd="UTC-5"
        utcDst="UTC-4"
        color="bg-blue-600"
        states={['Connecticut', 'Delaware', 'Florida', 'Georgia', 'Indiana (most)', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'New Hampshire', 'New Jersey', 'New York', 'North Carolina', 'Ohio', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'Vermont', 'Virginia', 'Washington D.C.', 'West Virginia']}
        majorCities={[
          { name: 'New York City', href: '/new-york/' },
          { name: 'Miami', href: '/miami/' },
          { name: 'Atlanta', href: '/atlanta/' },
          { name: 'Boston', href: '/boston/' },
          { name: 'Washington D.C.', href: '/washington-dc/' },
          { name: 'Philadelphia', href: '/philadelphia/' },
          { name: 'Charlotte', href: '/charlotte/' },
          { name: 'Detroit', href: '/detroit/' },
          { name: 'Jacksonville', href: '/jacksonville/' },
          { name: 'Columbus', href: '/columbus/' },
          { name: 'Nashville', href: '/nashville/' },
          { name: 'Orlando', href: '/orlando/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Eastern Time Zone Guide', href: '/eastern-time-zone/' },
          { label: 'EDT — Eastern Daylight Time', href: '/eastern-time-zone/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'CST — Central Standard Time', href: '/cst/' },
          { label: 'MST — Mountain Standard Time', href: '/mst/' },
          { label: 'CST to EST', href: '/cst-to-est/' },
          { label: 'PST to EST', href: '/pst-to-est/' },
          { label: 'MST to EST', href: '/mst-to-est/' },
          { label: 'GMT to EST', href: '/gmt-to-est/' },
          { label: 'IST to EST', href: '/ist-to-est/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
          { label: 'Daylight Saving Time', href: '/daylight-saving-time/' },
        ]}
        linksTitle="EST Converters & Related Time Zones"
        footerText="EST data sourced from IANA Time Zone Database (America/New_York). UTC-5 in standard time, UTC-4 during Daylight Saving Time."
      />
    </ContentPageWrapper>
  )
}
