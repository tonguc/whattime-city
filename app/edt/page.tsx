import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'EDT — Eastern Daylight Time Now | UTC-4',
  description: 'What time is it in EDT right now? Eastern Daylight Time (EDT) is UTC-4, active from March to November. EDT is the summer equivalent of EST. Live clock, EDT vs EST, EDT vs CDT explained.',
  keywords: ['EDT', 'eastern daylight time', 'EDT time now', 'EDT UTC-4', 'EDT time zone', 'EDT vs EST', 'eastern daylight time edt'],
  alternates: { canonical: 'https://whattime.city/edt/' },
  openGraph: {
    title: 'EDT — Eastern Daylight Time Now (UTC-4)',
    description: 'Live EDT clock. Eastern Daylight Time is UTC-4, observed from the second Sunday in March to the first Sunday in November.',
    type: 'website',
    url: 'https://whattime.city/edt/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDT — Eastern Daylight Time | UTC-4',
    description: 'Current EDT time. EDT is UTC-4, active during summer (March–November). 1 hour ahead of EST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is EDT time right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EDT (Eastern Daylight Time) is UTC-4. It is the daylight saving version of EST (Eastern Standard Time, UTC-5). EDT is active from the second Sunday in March to the first Sunday in November. During this period, the US East Coast is at UTC-4 — 4 hours behind GMT.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between EST and EDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (Eastern Standard Time) is UTC-5 and applies in winter (November to March). EDT (Eastern Daylight Time) is UTC-4 and applies in summer (March to November). EDT is 1 hour ahead of EST. New York, for example, uses EST in winter and EDT in summer — but is always referred to as "Eastern Time" (ET).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it EST or EDT right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From the second Sunday in March to the first Sunday in November, the US East Coast observes EDT (UTC-4). From the first Sunday in November to the second Sunday in March, it observes EST (UTC-5). In 2026: EDT runs from March 8 to November 1. The live clock on this page shows the current Eastern Time with the correct abbreviation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is EDT the same as CDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. EDT (Eastern Daylight Time) is UTC-4. CDT (Central Daylight Time) is UTC-5. EDT is 1 hour ahead of CDT. They are both "daylight time" versions of their respective standard zones but at different UTC offsets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours behind is EDT from GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EDT (UTC-4) is 4 hours behind GMT/UTC. When it is 12:00 PM GMT, it is 8:00 AM EDT. This is 1 hour less than EST (UTC-5), which is 5 hours behind GMT.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'EDT — Eastern Daylight Time', item: 'https://whattime.city/edt/' },
  ],
}

export default function EDTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="EDT — Eastern Daylight Time"
        subtitle="UTC-4 · Active March–November · Daylight Saving version of EST"
      />
      <TZExplainerClient
        tz="America/New_York"
        abbr="ET"
        stdName="Eastern Daylight Time"
        stdAbbr="EDT"
        dstAbbr="EDT"
        utcStd="UTC-4"
        utcDst="UTC-4"
        color="bg-sky-600"
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
        ]}
        dstNote="EDT is the summer name for Eastern Time. During winter, the same states observe EST (UTC-5). EDT is 1 hour ahead of EST and 4 hours behind GMT."
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'CDT — Central Daylight Time', href: '/cdt/' },
          { label: 'CST — Central Standard Time', href: '/cst/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'EST to PST Converter', href: '/est-to-pst/' },
          { label: 'PST to EST Converter', href: '/pst-to-est/' },
          { label: 'Daylight Saving Time 2026', href: '/daylight-saving-time/' },
          { label: 'Time Zone Converter', href: '/time-converter/' },
        ]}
        linksTitle="Related Time Zones"
        footerText="EDT (Eastern Daylight Time) is UTC-4. Active from the second Sunday in March to the first Sunday in November. Outside this window, Eastern Time zones observe EST (UTC-5)."
      />
    </ContentPageWrapper>
  )
}
