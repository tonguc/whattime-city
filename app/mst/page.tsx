import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'MST — Current Mountain Standard Time Now | UTC-7',
  description: 'What time is it in MST right now? Mountain Standard Time (MST) is UTC-7, used by the US Mountain region. Includes live clock, MST vs MDT difference, Arizona note, and major cities.',
  keywords: ['MST', 'mountain standard time', 'MST time now', 'MST now', 'what time is it in MST', 'UTC-7', 'mountain time now'],
  alternates: { canonical: 'https://whattime.city/mst/' },
  openGraph: {
    title: 'MST — Current Mountain Standard Time Now',
    description: 'Live MST clock. Mountain Standard Time is UTC-7, used by the US Mountain region. Note: Arizona observes MST year-round (no DST).',
    type: 'website',
    url: 'https://whattime.city/mst/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MST — Mountain Standard Time Now (UTC-7)',
    description: 'Current MST time, UTC offset, cities, MST vs MDT, and Arizona exception explained.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST stands for Mountain Standard Time. It is UTC-7, meaning 7 hours behind Coordinated Universal Time. MST is used by the US Mountain region during winter (from the first Sunday in November to the second Sunday in March). During summer, most of the zone observes MDT (Mountain Daylight Time, UTC-6). Exception: Arizona observes MST year-round and does not change clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Arizona (except the Navajo Nation) does not observe Daylight Saving Time and stays on MST (UTC-7) year-round. This means Arizona is the same as PDT in summer but the same as MST/MDT in winter. When the rest of the Mountain zone moves to MDT (UTC-6), Arizona remains at UTC-7.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between MST and MDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (Mountain Standard Time) is UTC-7, active from the first Sunday in November to the second Sunday in March. MDT (Mountain Daylight Time) is UTC-6, active during Daylight Saving Time from the second Sunday in March to the first Sunday in November. Arizona does not switch to MDT and stays on MST all year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities are in MST / Mountain Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major cities in Mountain Time include Denver, Phoenix (year-round MST), Salt Lake City, Albuquerque, Tucson, El Paso, Boise, and Calgary (Canada). Note: Denver observes MST in winter and MDT in summer, while Phoenix stays on MST all year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MST compare to EST, CST, and PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MST (UTC-7) is 2 hours behind EST (UTC-5), 1 hour behind CST (UTC-6), and 1 hour ahead of PST (UTC-8). When it is 12:00 PM EST in New York, it is 10:00 AM MST in Denver and 9:00 AM PST in Los Angeles. These relationships hold consistently because all zones observe DST simultaneously (except Arizona).',
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
    { '@type': 'ListItem', position: 3, name: 'MST — Mountain Standard Time', item: 'https://whattime.city/mst/' },
  ],
}

export default function MSTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="MST — Mountain Standard Time"
        subtitle="UTC-7 · US Mountain Region · Arizona observes MST year-round"
      />
      <TZExplainerClient
        tz="America/Denver"
        abbr="MT"
        stdName="Mountain Standard Time"
        stdAbbr="MST"
        dstAbbr="MDT"
        utcStd="UTC-7"
        utcDst="UTC-6"
        color="bg-orange-600"
        states={['Colorado', 'Montana', 'New Mexico', 'Utah', 'Wyoming', 'Arizona (year-round MST, no DST)', 'Idaho (south)', 'Kansas (west)', 'Nebraska (west)', 'Nevada (east)', 'North Dakota (west)', 'South Dakota (west)', 'Texas (west)']}
        majorCities={[
          { name: 'Denver', href: '/denver/' },
          { name: 'Phoenix', href: '/phoenix/' },
          { name: 'Salt Lake City', href: '/salt-lake-city/' },
          { name: 'Albuquerque', href: '/albuquerque/' },
          { name: 'Tucson', href: '/tucson/' },
          { name: 'El Paso', href: '/el-paso/' },
          { name: 'Calgary', href: '/calgary/' },
          { name: 'Boise', href: '/boise/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November (except Arizona)"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Mountain Time Zone Guide', href: '/mountain-time-zone/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'CST — Central Standard Time', href: '/cst/' },
          { label: 'MST to EST', href: '/mst-to-est/' },
          { label: 'MST to PST', href: '/mst-to-pst/' },
          { label: 'MST to GMT', href: '/mst-to-gmt/' },
          { label: 'MST to CST', href: '/cst-to-mst/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
          { label: 'Daylight Saving Time', href: '/daylight-saving-time/' },
          { label: 'Arizona Time Zone', href: '/phoenix/' },
        ]}
        linksTitle="MST Converters & Related Time Zones"
        footerText="MST data sourced from IANA Time Zone Database (America/Denver for DST zones, America/Phoenix for Arizona). UTC-7 in standard time, UTC-6 during Daylight Saving Time (except Arizona which stays UTC-7 year-round)."
      />
    </ContentPageWrapper>
  )
}
