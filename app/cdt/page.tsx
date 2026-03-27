import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'CDT — Central Daylight Time Now | UTC-5',
  description: 'What time is it in CDT right now? Central Daylight Time (CDT) is UTC-5, active from March to November. CDT is the summer equivalent of CST. Live clock, CDT vs EST, CDT vs EDT explained.',
  keywords: ['CDT', 'central daylight time', 'CDT time now', 'time now CDT', 'CDT UTC-5', 'CDT time zone', 'what time is it CDT'],
  alternates: { canonical: 'https://whattime.city/cdt/' },
  openGraph: {
    title: 'CDT — Central Daylight Time Now (UTC-5)',
    description: 'Live CDT clock. Central Daylight Time is UTC-5, observed from the second Sunday in March to the first Sunday in November.',
    type: 'website',
    url: 'https://whattime.city/cdt/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDT — Central Daylight Time | UTC-5',
    description: 'Current CDT time. CDT is UTC-5, active during summer (March–November). Same as EST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is CDT time right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CDT (Central Daylight Time) is UTC-5. It is the daylight saving version of CST (Central Standard Time, UTC-6). CDT is active from the second Sunday in March to the first Sunday in November. During this period, the US Central time zone is UTC-5, the same offset as Eastern Standard Time (EST).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CDT the same as EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CDT and EST share the same UTC offset (UTC-5), but they are not the same time zone. CDT is Central Daylight Time — used by the US Central time zone during summer. EST is Eastern Standard Time — used by the US East Coast during winter. They happen to be at the same UTC offset at different times of year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CST and CDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CST (Central Standard Time) is UTC-6 and is used in winter (November to March). CDT (Central Daylight Time) is UTC-5 and is used in summer (March to November) during Daylight Saving Time. CDT is 1 hour ahead of CST. The transition happens on the second Sunday in March (CST → CDT) and first Sunday in November (CDT → CST).',
      },
    },
    {
      '@type': 'Question',
      name: 'What states observe CDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'States on Central Time that observe CDT include: Illinois, Texas, Minnesota, Wisconsin, Missouri, Iowa, Kansas, Nebraska, Oklahoma, Arkansas, Louisiana, Mississippi, Alabama, Indiana (northwest), North Dakota, South Dakota, and parts of Tennessee and Kentucky. These states switch from CST (UTC-6) in winter to CDT (UTC-5) in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours behind is CDT from GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CDT (UTC-5) is 5 hours behind GMT/UTC. When it is 12:00 PM GMT, it is 7:00 AM CDT. CDT is 1 hour closer to GMT than CST (UTC-6), which is 6 hours behind.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'CDT — Central Daylight Time', item: 'https://whattime.city/cdt/' },
  ],
}

export default function CDTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="CDT — Central Daylight Time"
        subtitle="UTC-5 · Active March–November · Daylight Saving version of CST"
      />
      <TZExplainerClient
        tz="America/Chicago"
        abbr="CT"
        stdName="Central Daylight Time"
        stdAbbr="CDT"
        dstAbbr="CDT"
        utcStd="UTC-5"
        utcDst="UTC-5"
        color="bg-teal-600"
        states={['Illinois', 'Texas', 'Minnesota', 'Wisconsin', 'Missouri', 'Iowa', 'Kansas', 'Nebraska', 'Oklahoma', 'Arkansas', 'Louisiana', 'Mississippi', 'Alabama', 'North Dakota', 'South Dakota', 'Indiana (northwest)', 'Tennessee (west)', 'Kentucky (west)']}
        majorCities={[
          { name: 'Chicago', href: '/chicago/' },
          { name: 'Dallas', href: '/dallas/' },
          { name: 'Houston', href: '/houston/' },
          { name: 'Minneapolis', href: '/minneapolis/' },
          { name: 'Kansas City', href: '/kansas-city/' },
          { name: 'St. Louis', href: '/st-louis/' },
          { name: 'New Orleans', href: '/new-orleans/' },
          { name: 'Milwaukee', href: '/milwaukee/' },
        ]}
        dstNote="CDT is the summer name for Central Time. During winter, the same states observe CST (UTC-6). CDT has the same offset as EST (UTC-5) but applies to a different region."
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'CST — Central Standard Time', href: '/cst/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'EDT — Eastern Daylight Time', href: '/edt/' },
          { label: 'MST — Mountain Standard Time', href: '/mst/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'CST to EST Converter', href: '/cst-to-est/' },
          { label: 'Daylight Saving Time 2026', href: '/daylight-saving-time/' },
          { label: 'Time Zone Converter', href: '/time-converter/' },
        ]}
        linksTitle="Related Time Zones"
        footerText="CDT (Central Daylight Time) is UTC-5. Active from the second Sunday in March to the first Sunday in November. Outside this window, Central Time zones observe CST (UTC-6)."
      />
    </ContentPageWrapper>
  )
}
