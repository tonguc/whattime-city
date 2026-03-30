import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GeorgiaStateClockClient from './GeorgiaStateClockClient'

export const metadata: Metadata = {
  title: 'Time in Georgia (US) Now — EST/EDT',
  description:
    'What time is it in Georgia right now? Georgia uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during Daylight Saving Time. Live Atlanta clock, Georgia vs world cities, and best time to call.',
  keywords: [
    'time in georgia', 'georgia time now', 'what time is it in georgia',
    'atlanta time', 'georgia time zone', 'EST georgia', 'EDT georgia',
    'eastern time georgia', 'georgia utc-5', 'savannah time',
    'georgia time vs california', 'georgia time vs chicago', 'georgia time vs london',
    'current time atlanta', 'georgia state time zone', 'atlanta time zone',
  ],
  alternates: { canonical: 'https://whattime.city/georgia-state/' },
  openGraph: {
    title: 'Current Time in Georgia (US State) — EST/EDT',
    description: 'Live Georgia time. EST (UTC−5) in winter, EDT (UTC−4) during Daylight Saving Time. Atlanta, Savannah, Augusta, Columbus all on Eastern Time.',
    type: 'website', url: 'https://whattime.city/georgia-state/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Georgia (US state) right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Georgia uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities — Atlanta, Savannah, Augusta, Columbus, Macon, and Athens — are on the same time zone. The live clock above shows the current time in Georgia.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Georgia (the US state) in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Georgia (the US state) is in the Eastern Time Zone — EST (UTC−5) in winter, EDT (UTC−4) during Daylight Saving Time. The IANA identifier is America/New_York. This page covers the US state of Georgia. The country of Georgia (in the Caucasus) uses Georgia Standard Time (GET, UTC+4) and is a separate location.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Georgia (US state) and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta (Eastern Time) is always 3 hours ahead of Los Angeles (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in Atlanta. Both states switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Georgia and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in Atlanta. Both switch clocks on the same dates, so this 1-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'Does Georgia observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Georgia observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday of March and fall back on the first Sunday of November. Georgia follows standard US federal Daylight Saving Time rules.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Atlanta in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta is in the Eastern Time Zone — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. Atlanta Hartsfield-Jackson Airport (ATL), the world\'s busiest airport, publishes all flight times in Eastern Time. The IANA identifier for Atlanta is America/New_York.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Georgia (US) and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Atlanta (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time, Atlanta (EDT, UTC−4) is typically 5–6 hours behind London (BST, UTC+1), with a brief ±1 hour variation during the transition windows when the two countries change clocks on different dates each spring and autumn.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Georgia (US State)', item: 'https://whattime.city/georgia-state/' },
  ],
}


export default function GeorgiaStateTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Georgia (US State)" subtitle="Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time · Atlanta hub" />
      <GeorgiaStateClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Time in Florida","href":"/florida/"},{"label":"Time in North Carolina","href":"/north-carolina/"},{"label":"Time in Tennessee","href":"/tennessee/"},{"label":"Time in South Carolina","href":"/south-carolina/"},{"label":"Atlanta time","href":"/atlanta/"},{"label":"Time in New York State","href":"/new-york-state/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Georgia (US): America/New_York (EST UTC−5 / EDT UTC−4). Not to be confused with the country of Georgia (GET UTC+4).
      "
      />
    </ContentPageWrapper>
  )
}
