import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import OhioClockClient from './OhioClockClient'

export const metadata: Metadata = {
  title: 'Time in Ohio Now — EST/EDT (UTC−5/−4) · Columbus, Cleveland, Cincinnati',
  description:
    'What time is it in Ohio right now? Ohio uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during Daylight Saving Time. Live Columbus clock, Ohio vs world cities, and best time to call.',
  keywords: [
    'time in ohio', 'ohio time now', 'what time is it in ohio',
    'columbus time', 'cleveland time', 'cincinnati time', 'ohio time zone',
    'EST ohio', 'EDT ohio', 'eastern time ohio', 'ohio utc-5',
    'ohio time vs california', 'ohio time vs chicago', 'ohio time vs london',
    'current time ohio', 'eastern standard time ohio',
  ],
  alternates: { canonical: 'https://whattime.city/ohio/' },
  openGraph: {
    title: 'Current Time in Ohio — EST/EDT (UTC−5/−4)',
    description: 'Live Ohio time. EST (UTC−5) in winter, EDT (UTC−4) during Daylight Saving Time. Columbus, Cleveland, Cincinnati, Akron all on Eastern Time.',
    type: 'website', url: 'https://whattime.city/ohio/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Ohio right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities in Ohio — Columbus, Cleveland, Cincinnati, Akron, Toledo, and Dayton — are on the same time zone. The live clock above shows the current time in Ohio.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Ohio in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio is in the Eastern Time Zone. In winter, Ohio uses Eastern Standard Time (EST, UTC−5). During Daylight Saving Time (March–November), Ohio uses Eastern Daylight Time (EDT, UTC−4). The IANA identifier is America/New_York. Ohio shares Eastern Time with New York, Florida, Georgia, Pennsylvania, and most of the eastern United States.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Ohio and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in Columbus. Both states switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Ohio and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in Columbus or Cleveland. Both switch to Daylight Saving Time on the same dates, so this 1-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'Does Ohio observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ohio observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday of March (EST to EDT) and fall back on the first Sunday of November (EDT to EST). As of 2026, Ohio continues to observe DST in line with federal US timekeeping rules.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Ohio and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Columbus (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK Daylight Saving Time, Columbus (EDT, UTC−4) is typically 5–6 hours behind London (BST, UTC+1), depending on the brief transition periods in spring and autumn when the two regions change clocks on slightly different dates.' },
    },
    {
      '@type': 'Question',
      name: 'Is Ohio on Eastern or Central Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ohio is entirely on Eastern Time (EST/EDT). No part of Ohio uses Central Time. Ohio borders Indiana (which mostly uses Eastern Time) and Michigan (also Eastern Time). Despite Ohio\'s position in the Midwest, the entire state has been on Eastern Time since 1883.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Ohio', item: 'https://whattime.city/ohio/' },
  ],
}


export default function OhioTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Ohio" subtitle="Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time" />
      <OhioClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Ohio: America/New_York (EST UTC−5 / EDT UTC−4).
      "
      />
    </ContentPageWrapper>
  )
}
