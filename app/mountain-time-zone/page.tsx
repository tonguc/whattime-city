import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'Mountain Time Zone — MST/MDT (UTC−7/−6)',
  description: 'What time is it in Mountain Time right now? MST is UTC−7 (winter), MDT is UTC−6 (summer). Full list of states and cities, DST dates, live clock, and converters.',
  keywords: ['mountain time zone', 'mountain time', 'mst time zone', 'mdt time zone', 'mountain standard time', 'what time is it in mountain time', 'mountain time now'],
  alternates: { canonical: 'https://whattime.city/mountain-time-zone/' },
  openGraph: {
    title: 'Mountain Time Zone — MST/MDT States & Cities',
    description: 'What time is it in Mountain Time right now? MST is UTC−7 (winter), MDT is UTC−6 (summer). States, cities, DST dates, live clock, and converters.',
    type: 'website',
    url: 'https://whattime.city/mountain-time-zone/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mountain Time Zone — MST/MDT, UTC-7/UTC-6',
    description: 'Current Mountain Time with DST info, states, and converters.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Mountain Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mountain Time (MT) is the time zone used by the Rocky Mountain states. It switches between Mountain Standard Time (MST, UTC-7) in winter and Mountain Daylight Time (MDT, UTC-6) in summer. It covers Colorado, Utah, Montana, Wyoming, New Mexico, and most of Idaho, with major cities including Denver, Salt Lake City, and Albuquerque.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the UTC offset for Mountain Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mountain Standard Time (MST) is UTC-7 — seven hours behind UTC. During Daylight Saving Time (second Sunday in March to first Sunday in November), Mountain Time uses MDT (UTC-6).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona observe Mountain Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona uses MST (UTC-7) year-round but does NOT observe Daylight Saving Time, except for the Navajo Nation in northeastern Arizona. In summer, when the rest of the Mountain zone shifts to MDT (UTC-6), Arizona stays at UTC-7, effectively aligning with Pacific Daylight Time (PDT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in the Mountain Time Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'States in Mountain Time: Colorado, Idaho (most), Montana, Nevada (eastern tip), New Mexico, Utah, Wyoming. Arizona uses MST year-round without DST. Parts of: Kansas (west), Nebraska (west), North Dakota (west), South Dakota (west), Texas (west tip, El Paso).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours is Mountain Time behind Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mountain Time (MT) is always 2 hours behind Eastern Time (ET). MST (UTC-7) is 2 hours behind EST (UTC-5), and MDT (UTC-6) is 2 hours behind EDT (UTC-4). Both zones observe DST on the same schedule.',
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
    { '@type': 'ListItem', position: 3, name: 'Mountain Time Zone', item: 'https://whattime.city/mountain-time-zone/' },
  ],
}

export default function MountainTimeZonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-sky-500">Home</Link>
        {' / '}
        <Link href="/us-time-zones/" className="hover:text-sky-500">US Time Zones</Link>
        {' / '}
        <span className="text-slate-600">Mountain Time Zone</span>
      </nav>
      <HubPageHeader
        title="Mountain Time Zone"
        subtitle="MST (UTC-7) in winter · MDT (UTC-6) during Daylight Saving Time"
      />
      <TZExplainerClient
        tz="America/Denver"
        abbr="MT"
        stdName="Mountain Standard Time"
        stdAbbr="MST"
        dstAbbr="MDT"
        utcStd="UTC-7"
        utcDst="UTC-6"
        color="bg-orange-500"
        states={['Colorado', 'Idaho (most)', 'Montana', 'New Mexico', 'Utah', 'Wyoming', 'Arizona (MST, no DST)']}
        majorCities={[
          { name: 'Denver', href: '/denver/' },
          { name: 'Salt Lake City', href: '/salt-lake-city/' },
          { name: 'Albuquerque', href: '/albuquerque/' },
          { name: 'Tucson', href: '/tucson/' },
          { name: 'Colorado Springs', href: '/colorado-springs/' },
          { name: 'Boise', href: '/boise/' },
          { name: 'El Paso', href: '/el-paso/' },
          { name: 'Billings', href: '/billings/' },
        ]}
        dstNote="Observes DST: 2nd Sunday in March → 1st Sunday in November (Arizona excluded)"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'MST to EST', href: '/mst-to-est/' },
          { label: 'EST to MST', href: '/est-to-mst/' },
          { label: 'Eastern Time Zone', href: '/eastern-time-zone/' },
          { label: 'Central Time Zone', href: '/central-time-zone/' },
          { label: 'Pacific Time Zone', href: '/pacific-time-zone/' },
          { label: 'US Time Zone Map', href: '/us-time-zones/' },
          { label: 'Time in Denver', href: '/denver/' },
          { label: 'Time in Arizona', href: '/arizona/' },
        ]}
        linksTitle="Mountain Time Converters & Related Zones"
        footerText="Mountain Time Zone data sourced from IANA Time Zone Database (America/Denver). Arizona uses America/Phoenix (no DST)."
      />
    </ContentPageWrapper>
  )
}
