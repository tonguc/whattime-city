import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'Eastern Time Zone — EST/EDT, UTC-5/UTC-4, States & Cities',
  description: 'Complete guide to the Eastern Time Zone (ET). Current EST/EDT time, UTC offset, DST dates, all states and major cities in Eastern Time, and time converters.',
  keywords: ['eastern time zone', 'eastern time', 'est time zone', 'edt time zone', 'eastern standard time', 'what time is it in eastern time', 'eastern time now'],
  alternates: { canonical: 'https://whattime.city/eastern-time-zone/' },
  openGraph: {
    title: 'Eastern Time Zone — EST/EDT Complete Guide',
    description: 'Current Eastern Time, UTC offset, DST info, states list, and converters.',
    type: 'website',
    url: 'https://whattime.city/eastern-time-zone/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eastern Time Zone — EST/EDT, UTC-5/UTC-4',
    description: 'Current Eastern Time with DST info, states, and converters.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Eastern Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eastern Time (ET) is the time zone used by the US East Coast. It switches between Eastern Standard Time (EST, UTC-5) in winter and Eastern Daylight Time (EDT, UTC-4) in summer during Daylight Saving Time. It covers states from Maine to Florida and major cities like New York, Miami, Atlanta, and Washington D.C.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the UTC offset for Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eastern Standard Time (EST) is UTC-5 — five hours behind Coordinated Universal Time. During Daylight Saving Time (from the second Sunday in March to the first Sunday in November), the East Coast uses Eastern Daylight Time (EDT), which is UTC-4.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in the Eastern Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'States entirely in Eastern Time: Connecticut, Delaware, Florida, Georgia, Indiana (most), Maine, Maryland, Massachusetts, Michigan, New Hampshire, New Jersey, New York, North Carolina, Ohio, Pennsylvania, Rhode Island, South Carolina, Vermont, Virginia, Washington D.C., and West Virginia.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Eastern Time observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eastern Time observes Daylight Saving Time from the second Sunday in March (clocks spring forward 1 hour at 2:00 AM) to the first Sunday in November (clocks fall back 1 hour at 2:00 AM). During DST, EST (UTC-5) becomes EDT (UTC-4).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between EST and EDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time) is UTC-5, used in winter (November to March). EDT (Eastern Daylight Time) is UTC-4, used in summer during Daylight Saving Time (March to November). Both refer to the same geographic zone — the US East Coast — but at different times of year.',
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
    { '@type': 'ListItem', position: 3, name: 'Eastern Time Zone', item: 'https://whattime.city/eastern-time-zone/' },
  ],
}

export default function EasternTimeZonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-sky-500">Home</Link>
        {' / '}
        <Link href="/us-time-zones/" className="hover:text-sky-500">US Time Zones</Link>
        {' / '}
        <span className="text-slate-600">Eastern Time Zone</span>
      </nav>
      <HubPageHeader
        title="Eastern Time Zone"
        subtitle="EST (UTC-5) in winter · EDT (UTC-4) during Daylight Saving Time"
      />
      <TZExplainerClient
        tz="America/New_York"
        abbr="ET"
        stdName="Eastern Standard Time"
        stdAbbr="EST"
        dstAbbr="EDT"
        utcStd="UTC-5"
        utcDst="UTC-4"
        color="bg-blue-500"
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
          { label: 'CST to EST', href: '/cst-to-est/' },
          { label: 'PST to EST', href: '/pst-to-est/' },
          { label: 'MST to EST', href: '/mst-to-est/' },
          { label: 'GMT to EST', href: '/gmt-to-est/' },
          { label: 'UTC to EST', href: '/utc-to-est/' },
          { label: 'IST to EST', href: '/ist-to-est/' },
          { label: 'Central Time Zone', href: '/central-time-zone/' },
          { label: 'Pacific Time Zone', href: '/pacific-time-zone/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
        ]}
        linksTitle="Eastern Time Converters & Related Zones"
        footerText="Eastern Time Zone data sourced from IANA Time Zone Database (America/New_York). DST rules per US Energy Policy Act of 2005."
      />
    </ContentPageWrapper>
  )
}
