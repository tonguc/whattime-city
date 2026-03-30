import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ConnecticutClockClient from './ConnecticutClockClient'

export const metadata: Metadata = {
  title: 'Time in Connecticut Now — EST/EDT (UTC−5/−4)',
  description: 'What time is it in Connecticut right now? Connecticut uses Eastern Time (EST/EDT). Hartford is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock and best time to call.',
  keywords: ['time in connecticut', 'connecticut time now', 'what time is it in connecticut', 'hartford time', 'connecticut time zone', 'EST EDT connecticut', 'connecticut utc-5', 'bridgeport time', 'new haven time', 'stamford time', 'connecticut time vs uk', 'connecticut time vs california'],
  alternates: { canonical: 'https://whattime.city/connecticut/' },
  openGraph: { title: 'Time in Connecticut Now — EST/EDT', description: 'Live Connecticut time. Hartford, New Haven, Bridgeport on Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/connecticut/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Connecticut right now?', acceptedAnswer: { '@type': 'Answer', text: 'Connecticut uses Eastern Time. Hartford, Bridgeport, New Haven, Stamford, and all Connecticut cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The live clock above shows the current time in Connecticut.' } },
    { '@type': 'Question', name: 'What time zone is Hartford in?', acceptedAnswer: { '@type': 'Answer', text: 'Hartford is in the Eastern Time zone (America/New_York). Hartford uses EST (UTC−5) during standard time and EDT (UTC−4) during Daylight Saving Time. Hartford is on the same time as New York City, Boston, and Philadelphia — all in the northeastern US Eastern Time corridor.' } },
    { '@type': 'Question', name: 'Does Connecticut observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connecticut observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Connecticut and California?', acceptedAnswer: { '@type': 'Answer', text: 'Connecticut (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is noon in Hartford, it is 9:00 AM in Los Angeles. Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Connecticut and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Hartford (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Hartford moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK are on summer time, Hartford (EDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Connecticut on the same time as New York?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connecticut and New York are in the same time zone — Eastern Time (America/New_York). There is no time difference between Hartford or any Connecticut city and New York City. Both use EST (UTC−5) in winter and EDT (UTC−4) in summer.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Connecticut', item: 'https://whattime.city/connecticut/' }] }

export default function ConnecticutTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Connecticut" subtitle="Eastern Time (EST/EDT) · Hartford · UTC−5 / UTC−4" />
      <ConnecticutClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'New York time', href: '/new-york/' }, { label: 'Boston time', href: '/boston/' }, { label: 'Philadelphia time', href: '/philadelphia/' }, { label: 'Time in New York State', href: '/new-york-state/' }, { label: 'Time in Massachusetts', href: '/massachusetts/' }, { label: 'Time in New Jersey', href: '/new-jersey/' }, { label: 'Time in Pennsylvania', href: '/pennsylvania/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Connecticut City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Connecticut: America/New_York (EST/EDT, Eastern Time)."
      />
    </ContentPageWrapper>
  )
}
