import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NewYorkStateClockClient from './NewYorkStateClockClient'

export const metadata: Metadata = {
  title: 'Time in New York Now — EST/EDT (UTC−5/−4) · NYC, Buffalo, Albany',
  description:
    'What time is it in New York right now? New York uses EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. Live New York clock, NY vs world cities, and best time to call.',
  keywords: [
    'time in new york', 'new york time now', 'what time is it in new york',
    'new york time', 'current time in new york', 'new york time zone',
    'EST new york', 'EDT new york', 'nyc time now', 'new york est timezone',
    'new york time vs uk', 'new york time vs pst', 'new york time right now',
    'eastern time new york', 'time in new york state',
  ],
  alternates: { canonical: 'https://whattime.city/new-york-state/' },
  openGraph: {
    title: 'Current Time in New York — EST/EDT (UTC−5/−4)',
    description: 'Live New York time. EST (UTC−5) in winter, EDT (UTC−4) during DST. NYC, Buffalo, Albany, Rochester all on Eastern Time.',
    type: 'website', url: 'https://whattime.city/new-york-state/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in New York right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities in New York State — New York City, Buffalo, Rochester, Albany, and Syracuse — are on the same time zone. The live clock at the top shows the current time in New York.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is New York in?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York is in the Eastern Time Zone. In winter, New York uses Eastern Standard Time (EST, UTC−5). During Daylight Saving Time (March–November), New York uses Eastern Daylight Time (EDT, UTC−4). The IANA identifier is America/New_York. New York shares this time zone with Florida, Georgia, Michigan, Ohio, and most of the US East Coast.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During Daylight Saving Time, New York (EDT, UTC−4) is typically still 5 hours behind London (BST, UTC+1) because both regions change clocks within a few weeks of each other. There are brief windows each spring and autumn when the gap is 4 or 6 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and Los Angeles?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 3 hours ahead of Los Angeles (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in New York. This 3-hour gap is constant year-round because both states switch to Daylight Saving Time simultaneously.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in New York. Both cities switch to Daylight Saving Time on the same dates, so the 1-hour gap is constant.' },
    },
    {
      '@type': 'Question',
      name: 'Does New York observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. New York observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (EST to EDT) and fall back on the first Sunday in November (EDT to EST). There have been legislative proposals to end DST in New York, but as of 2026, the state continues to change clocks twice per year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New York and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'India (IST, UTC+5:30) is 10 hours and 30 minutes ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time, New York moves to EDT (UTC−4), making the gap 9 hours and 30 minutes. India has no DST, so the difference alternates between 9.5h and 10.5h depending on whether the US is on EST or EDT.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in New York', item: 'https://whattime.city/new-york-state/' },
  ],
}


export default function NewYorkStateTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in New York" subtitle="Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time" />
      <NewYorkStateClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. New York: America/New_York (EST UTC−5 / EDT UTC−4).
      "
      />
    </ContentPageWrapper>
  )
}
