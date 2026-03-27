import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'PDT — Pacific Daylight Time Now | UTC-7',
  description: 'What time is it in PDT right now? Pacific Daylight Time (PDT) is UTC-7, active from March to November. PDT is the summer equivalent of PST. PST vs PDT explained with live clock.',
  keywords: ['PDT', 'pacific daylight time', 'PDT time now', 'pst pdt', 'PDT UTC-7', 'pacific time pdt', 'pacific daylight time pdt', 'PDT time zone'],
  alternates: { canonical: 'https://whattime.city/pdt/' },
  openGraph: {
    title: 'PDT — Pacific Daylight Time Now (UTC-7)',
    description: 'Live PDT clock. Pacific Daylight Time is UTC-7, observed from the second Sunday in March to the first Sunday in November.',
    type: 'website',
    url: 'https://whattime.city/pdt/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDT — Pacific Daylight Time | UTC-7',
    description: 'Current PDT time. PDT is UTC-7, active during summer (March–November). 1 hour ahead of PST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PDT time right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PDT (Pacific Daylight Time) is UTC-7. It is the daylight saving version of PST (Pacific Standard Time, UTC-8). PDT is active from the second Sunday in March to the first Sunday in November. During this period, the US West Coast is at UTC-7 — 7 hours behind GMT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between PST and PDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time) is UTC-8 and is used in winter (November to March). PDT (Pacific Daylight Time) is UTC-7 and is used in summer (March to November). PDT is 1 hour ahead of PST. California, Oregon, and Washington switch from PST to PDT each spring and back in fall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it PST or PDT right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From the second Sunday in March to the first Sunday in November, the US West Coast observes PDT (UTC-7). From the first Sunday in November to the second Sunday in March, it observes PST (UTC-8). In 2026: PDT runs from March 8 to November 1. The live clock above shows the current Pacific Time with the correct abbreviation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PDT the same as MST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PDT (Pacific Daylight Time, UTC-7) and MST (Mountain Standard Time, UTC-7) share the same UTC offset. This is why Arizona — which stays on MST year-round — effectively has the same time as California in summer, even though they are in different time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours behind is PDT from EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PDT (UTC-7) is 2 hours behind EDT (Eastern Daylight Time, UTC-4) during summer when both are in daylight saving mode. In winter, PST (UTC-8) is 3 hours behind EST (UTC-5). So the Pacific–Eastern difference is always either 2 hours (summer) or 3 hours (winter).',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'PDT — Pacific Daylight Time', item: 'https://whattime.city/pdt/' },
  ],
}

export default function PDTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="PDT — Pacific Daylight Time"
        subtitle="UTC-7 · Active March–November · Daylight Saving version of PST"
      />
      <TZExplainerClient
        tz="America/Los_Angeles"
        abbr="PT"
        stdName="Pacific Daylight Time"
        stdAbbr="PDT"
        dstAbbr="PDT"
        utcStd="UTC-7"
        utcDst="UTC-7"
        color="bg-emerald-700"
        states={['California', 'Oregon', 'Washington', 'Nevada', 'Idaho (north)']}
        majorCities={[
          { name: 'Los Angeles', href: '/los-angeles/' },
          { name: 'San Francisco', href: '/san-francisco/' },
          { name: 'Seattle', href: '/seattle/' },
          { name: 'Las Vegas', href: '/las-vegas/' },
          { name: 'Portland', href: '/portland/' },
          { name: 'San Diego', href: '/san-diego/' },
          { name: 'Phoenix', href: '/phoenix/' },
        ]}
        dstNote="PDT is the summer name for Pacific Time. During winter, the same states observe PST (UTC-8). PDT shares the same offset as MST (Mountain Standard Time) — which is why Arizona time matches California in summer."
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'EDT — Eastern Daylight Time', href: '/edt/' },
          { label: 'CDT — Central Daylight Time', href: '/cdt/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'PST to EST Converter', href: '/pst-to-est/' },
          { label: 'GMT to PST Converter', href: '/gmt-to-pst/' },
          { label: 'Daylight Saving Time 2026', href: '/daylight-saving-time/' },
          { label: 'Time Zone Converter', href: '/time-converter/' },
        ]}
        linksTitle="Related Time Zones"
        footerText="PDT (Pacific Daylight Time) is UTC-7. Active from the second Sunday in March to the first Sunday in November. Outside this window, Pacific Time zones observe PST (UTC-8)."
      />
    </ContentPageWrapper>
  )
}
