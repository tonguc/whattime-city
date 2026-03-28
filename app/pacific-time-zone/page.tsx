import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'Pacific Time Zone — PST/PDT, UTC-8/UTC-7, States & Cities',
  description: 'Complete guide to the Pacific Time Zone (PT). Current PST/PDT time, UTC offset, DST dates, all states and major cities in Pacific Time, and time converters.',
  keywords: ['pacific time zone', 'pacific time', 'pst time zone', 'pdt time zone', 'pacific standard time', 'what time is it in pacific time', 'pacific time now'],
  alternates: { canonical: 'https://whattime.city/pacific-time-zone/' },
  openGraph: {
    title: 'Pacific Time Zone — PST/PDT Complete Guide',
    description: 'Current Pacific Time, UTC offset, DST info, states list, and converters.',
    type: 'website',
    url: 'https://whattime.city/pacific-time-zone/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacific Time Zone — PST/PDT, UTC-8/UTC-7',
    description: 'Current Pacific Time with DST info, states, and converters.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Pacific Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pacific Time (PT) is the time zone used by the US West Coast. It switches between Pacific Standard Time (PST, UTC-8) in winter and Pacific Daylight Time (PDT, UTC-7) in summer. It covers California, Washington, Oregon, and Nevada, with major cities including Los Angeles, San Francisco, Seattle, Portland, and Las Vegas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the UTC offset for Pacific Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pacific Standard Time (PST) is UTC-8 — eight hours behind UTC. During Daylight Saving Time (second Sunday in March to first Sunday in November), the West Coast uses PDT (UTC-7).',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in the Pacific Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'States in Pacific Time: California, Nevada (most), Oregon, Washington. Part of Idaho (northern panhandle) also uses Pacific Time. British Columbia in Canada also uses Pacific Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours is Pacific Time behind Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pacific Time (PT) is always 3 hours behind Eastern Time (ET). PST (UTC-8) is 3 hours behind EST (UTC-5), and PDT (UTC-7) is 3 hours behind EDT (UTC-4). Both zones shift simultaneously for DST, keeping the gap at 3 hours year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is it in Pacific Time right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The live clock at the top of this page shows the current Pacific Time. Pacific Time uses PST (UTC-8) from November to March and PDT (UTC-7) from March to November during US Daylight Saving Time.',
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
    { '@type': 'ListItem', position: 3, name: 'Pacific Time Zone', item: 'https://whattime.city/pacific-time-zone/' },
  ],
}

export default function PacificTimeZonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-sky-500">Home</Link>
        {' / '}
        <Link href="/us-time-zones/" className="hover:text-sky-500">US Time Zones</Link>
        {' / '}
        <span className="text-slate-600">Pacific Time Zone</span>
      </nav>
      <HubPageHeader
        title="Pacific Time Zone"
        subtitle="PST (UTC-8) in winter · PDT (UTC-7) during Daylight Saving Time"
      />
      <TZExplainerClient
        tz="America/Los_Angeles"
        abbr="PT"
        stdName="Pacific Standard Time"
        stdAbbr="PST"
        dstAbbr="PDT"
        utcStd="UTC-8"
        utcDst="UTC-7"
        color="bg-purple-600"
        states={['California', 'Nevada (most)', 'Oregon', 'Washington', 'Idaho (north panhandle)']}
        majorCities={[
          { name: 'Los Angeles', href: '/los-angeles/' },
          { name: 'San Francisco', href: '/san-francisco/' },
          { name: 'Seattle', href: '/seattle/' },
          { name: 'Las Vegas', href: '/las-vegas/' },
          { name: 'Portland', href: '/portland/' },
          { name: 'San Diego', href: '/san-diego/' },
          { name: 'Sacramento', href: '/sacramento/' },
          { name: 'Vancouver BC', href: '/vancouver/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'PST to EST', href: '/pst-to-est/' },
          { label: 'PST to CST', href: '/pst-to-cst/' },
          { label: 'EST to PST', href: '/est-to-pst/' },
          { label: 'UTC to PST', href: '/utc-to-pst/' },
          { label: 'PST to UTC', href: '/pst-to-utc/' },
          { label: 'IST to PST', href: '/ist-to-pst/' },
          { label: 'Eastern Time Zone', href: '/eastern-time-zone/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
        ]}
        linksTitle="Pacific Time Converters & Related Zones"
        footerText="Pacific Time Zone data sourced from IANA Time Zone Database (America/Los_Angeles). DST rules per US Energy Policy Act of 2005."
      />
    </ContentPageWrapper>
  )
}
