import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SouthCarolinaClockClient from './SouthCarolinaClockClient'

export const metadata: Metadata = {
  title: 'Time in South Carolina Now — EST/EDT',
  description: 'What time is it in South Carolina right now? South Carolina uses Eastern Time (EST/EDT). Columbia is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock and best time to call.',
  keywords: ['time in south carolina', 'south carolina time now', 'what time is it in south carolina', 'columbia sc time', 'south carolina time zone', 'EST EDT south carolina', 'south carolina utc-5', 'charleston time', 'myrtle beach time', 'greenville sc time', 'south carolina eastern time'],
  alternates: { canonical: 'https://whattime.city/south-carolina/' },
  openGraph: { title: 'Time in South Carolina Now — EST/EDT', description: 'Live South Carolina time. Columbia, Charleston, and Myrtle Beach on Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/south-carolina/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in South Carolina right now?', acceptedAnswer: { '@type': 'Answer', text: 'South Carolina uses Eastern Time. Columbia (capital), Charleston, Myrtle Beach, Greenville, and all South Carolina cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The live clock above shows the current time in South Carolina.' } },
    { '@type': 'Question', name: 'What time zone is Charleston, SC in?', acceptedAnswer: { '@type': 'Answer', text: 'Charleston, South Carolina is in the Eastern Time zone (America/New_York). Charleston uses EST (UTC−5) during standard time and EDT (UTC−4) during Daylight Saving Time. Charleston is on the same time as New York, Atlanta, and Washington D.C.' } },
    { '@type': 'Question', name: 'Does South Carolina observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. South Carolina observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between South Carolina and California?', acceptedAnswer: { '@type': 'Answer', text: 'South Carolina (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is noon in Columbia (EST/EDT), it is 9:00 AM in Los Angeles (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between South Carolina and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Columbia, SC (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Columbia moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK observe summer time, Columbia (EDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is South Carolina on the same time as North Carolina?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. South Carolina and North Carolina are both entirely in the Eastern Time zone. There is no time difference between Columbia, SC and Charlotte or Raleigh, NC. Both states use EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in South Carolina', item: 'https://whattime.city/south-carolina/' }] }

export default function SouthCarolinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in South Carolina" subtitle="Eastern Time (EST/EDT) · Columbia · UTC−5 / UTC−4" />
      <SouthCarolinaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Atlanta time', href: '/atlanta/' }, { label: 'Charlotte time', href: '/charlotte/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time in Georgia', href: '/georgia-state/' }, { label: 'Time in North Carolina', href: '/north-carolina/' }, { label: 'Time in Virginia', href: '/virginia/' }, { label: 'Time in Florida', href: '/florida/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="South Carolina City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. South Carolina: America/New_York (EST/EDT, Eastern Time)."
      />
    </ContentPageWrapper>
  )
}
