import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import WashingtonDCClockClient from './WashingtonDCClockClient'

export const metadata: Metadata = {
  title: 'Time in Washington DC Now — EST/EDT',
  description: 'What time is it in Washington D.C. right now? Washington D.C. uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during Daylight Saving Time. Live clock, time differences, and best time to call.',
  keywords: ['time in washington dc', 'washington dc time now', 'what time is it in washington dc', 'dc time zone', 'washington dc est', 'washington dc eastern time', 'time in washington dc usa', 'dc time right now'],
  alternates: { canonical: 'https://whattime.city/washington-dc/' },
  openGraph: {
    title: 'Current Time in Washington D.C. — EST/EDT',
    description: 'Live Washington D.C. time. Eastern Standard Time (EST, UTC−5) in winter, Eastern Daylight Time (EDT, UTC−4) during DST. Same time zone as New York.',
    type: 'website', url: 'https://whattime.city/washington-dc/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Washington D.C. right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington, D.C., USA uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during Daylight Saving Time. The IANA identifier is America/New_York. Washington D.C. is always on the same time as New York City, Philadelphia, Miami, and other Eastern Time cities. The live clock above shows current D.C. time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Washington D.C. in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington, D.C. is in the Eastern Time Zone. It uses Eastern Standard Time (EST, UTC−5) from the first Sunday in November to the second Sunday in March, and Eastern Daylight Time (EDT, UTC−4) for the rest of the year. The IANA identifier is America/New_York. D.C. shares its time zone with New York, Boston, Atlanta, and Miami.' },
    },
    {
      '@type': 'Question',
      name: 'Does Washington D.C. observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Washington D.C. observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March at 2:00 AM (EST → EDT) and fall back on the first Sunday in November at 2:00 AM (EDT → EST). D.C. follows the same DST schedule as all Eastern Time states.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington D.C. and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington D.C. (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During summer, when both cities observe daylight saving time, D.C. (EDT, UTC−4) is typically 5 hours behind London (BST, UTC+1). There are brief transition windows each spring and autumn when the gap is 4 or 6 hours, as the US and UK change clocks on slightly different dates.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington D.C. and Los Angeles?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington D.C. is always exactly 3 hours ahead of Los Angeles. D.C. uses Eastern Time (EST/EDT) while LA uses Pacific Time (PST/PDT). Both observe DST on the same schedule, keeping the 3-hour gap constant year-round. When it is 9:00 AM in Los Angeles, it is noon in Washington D.C.' },
    },
    {
      '@type': 'Question',
      name: 'Is Washington D.C. a US state?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Washington D.C. (the District of Columbia) is a federal district, not a US state. It was established as the nation\'s capital and is governed by the US federal government. D.C. residents have voted for statehood, but Congress has not granted it. Despite not being a state, D.C. follows Eastern Time like the surrounding states of Maryland and Virginia.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Washington D.C.', item: 'https://whattime.city/washington-dc/' },
  ],
}

export default function WashingtonDCTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Washington, D.C." subtitle="Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during DST · US Capital" />
      <WashingtonDCClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'New York time', href: '/new-york/' },
          { label: 'Time in Virginia', href: '/virginia/' },
          { label: 'Time in Maryland', href: '/maryland/' },
          { label: 'Time in Pennsylvania', href: '/pennsylvania/' },
          { label: 'Time in New York State', href: '/new-york-state/' },
          { label: 'EST time zone', href: '/est/' },
          { label: 'Eastern time zone', href: '/eastern-time-zone/' },
          { label: 'Time converter tool', href: '/time-converter/' },
        ]}
        linksTitle="Washington D.C. & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Washington, D.C.: America/New_York (EST UTC−5 / EDT UTC−4)."
      />
    </ContentPageWrapper>
  )
}
