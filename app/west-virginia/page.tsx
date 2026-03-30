import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import WestVirginiaClockClient from './WestVirginiaClockClient'

export const metadata: Metadata = {
  title: 'Time in West Virginia Now — EST/EDT',
  description: 'What time is it in West Virginia right now? West Virginia uses Eastern Time (EST/EDT). Charleston is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock and time info.',
  keywords: ['time in west virginia', 'west virginia time now', 'what time is it in west virginia', 'charleston west virginia time', 'west virginia time zone', 'EST EDT west virginia', 'west virginia utc-5', 'huntington time', 'morgantown time', 'west virginia eastern time'],
  alternates: { canonical: 'https://whattime.city/west-virginia/' },
  openGraph: { title: 'Current Time in West Virginia — EST/EDT · Charleston', description: 'Live West Virginia time. Charleston and all of West Virginia use Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/west-virginia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in West Virginia right now?', acceptedAnswer: { '@type': 'Answer', text: 'West Virginia uses Eastern Time. Charleston (capital), Huntington, Morgantown, and all West Virginia cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The live clock above shows the current time in West Virginia.' } },
    { '@type': 'Question', name: 'What time zone is Charleston, West Virginia in?', acceptedAnswer: { '@type': 'Answer', text: 'Charleston, West Virginia is in the Eastern Time zone (America/New_York). Charleston uses EST (UTC−5) during standard time and EDT (UTC−4) during Daylight Saving Time. Charleston is on the same time as Washington DC, New York, and Pittsburgh.' } },
    { '@type': 'Question', name: 'Does West Virginia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. West Virginia observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between West Virginia and Ohio?', acceptedAnswer: { '@type': 'Answer', text: 'West Virginia and Ohio are both entirely on Eastern Time. There is no time difference between Charleston, WV and Columbus or Cleveland, OH. Both states use EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time.' } },
    { '@type': 'Question', name: 'Is West Virginia on the same time as Virginia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. West Virginia and Virginia are both on Eastern Time (EST/EDT). There is no time difference between Charleston, WV and Richmond, VA. This makes coordinating business and travel between the two neighboring states simple.' } },
    { '@type': 'Question', name: 'What is the time difference between West Virginia and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Charleston (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US summer (EDT, UTC−4), Charleston is 4 hours behind London (GMT) and 5 hours behind London (BST, UTC+1) during British Summer Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in West Virginia', item: 'https://whattime.city/west-virginia/' }] }

export default function WestVirginiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in West Virginia" subtitle="Eastern Time (EST/EDT) · Charleston · UTC−5/−4" />
      <WestVirginiaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Virginia time', href: '/virginia/' }, { label: 'Ohio time', href: '/ohio/' }, { label: 'Pennsylvania time', href: '/pennsylvania/' }, { label: 'Washington DC time', href: '/washington-dc/' }, { label: 'Pittsburgh time', href: '/pittsburgh/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time in Maryland', href: '/maryland/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Nearby States & Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. West Virginia: America/New_York (EST/EDT, Eastern Time)."
      />
    </ContentPageWrapper>
  )
}
