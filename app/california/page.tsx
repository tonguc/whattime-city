import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CaliClockClient from './CaliClockClient'

export const metadata: Metadata = {
  title: 'Time in California Now — PST/PDT (UTC−8/−7) · LA, SF, San Diego',
  description:
    'What time is it in California right now? California uses PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. Live Los Angeles clock, California vs world cities, and best time to call.',
  keywords: [
    'time in california',
    'california time now',
    'what time is it in california',
    'california time',
    'current time in california',
    'california time zone',
    'PST time zone',
    'PDT time zone',
    'pacific standard time',
    'pacific daylight time',
    'los angeles time now',
    'san francisco time now',
    'california time vs est',
    'california time vs gmt',
    'california pst utc offset',
    'california daylight saving time',
    'what time zone is california',
    'california time right now',
  ],
  alternates: {
    canonical: 'https://whattime.city/california/',
  },
  openGraph: {
    title: 'Current Time in California — PST/PDT (UTC−8/−7)',
    description:
      'Live California time clock. PST is UTC−8 in winter; PDT is UTC−7 during Daylight Saving Time. Check California time vs New York, London, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/california/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in California Now — PST/PDT',
    description:
      'Live California time. PST (UTC−8) in winter, PDT (UTC−7) in summer. Los Angeles, San Francisco, San Diego all share the same Pacific Time zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in California right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California uses Pacific Time — PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. The live clock at the top of this page shows the exact current time in California. All major California cities — Los Angeles, San Francisco, San Diego, San Jose, and Sacramento — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is California in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California is in the Pacific Time Zone (PT). In winter (November–March), California observes Pacific Standard Time (PST), which is UTC−8. In summer (March–November), California observes Pacific Daylight Time (PDT), which is UTC−7. The IANA time zone identifier is America/Los_Angeles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does California observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from PST/UTC−8 to PDT/UTC−7), and fall back on the first Sunday in November. California has repeatedly voted to end this practice — Proposition 7 passed in 2018 — but a change requires federal approval, which has not yet occurred.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between California and New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM (noon) in New York. This 3-hour gap holds year-round because both states switch to Daylight Saving Time simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between California and London?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In winter (PST vs GMT), London is 8 hours ahead of California. In summer (PDT vs BST), London is 8 hours ahead. However, the gap briefly changes to 7 or 9 hours during the 2–3 weeks when only one region has switched to summer time. The standard difference is 8 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between California and Chicago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chicago (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 11:00 AM in Chicago. Like the California–New York gap, this 2-hour difference is constant year-round because both switch DST at the same time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call California from Europe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To reach California during business hours (9 AM–6 PM PST/PDT), callers from London (GMT) should call between 5:00 PM and midnight GMT in winter. From Berlin or Paris (CET), the window is 6:00 PM to 3:00 AM CET. The key challenge: California is the last major US time zone, so European afternoons are the best overlap window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all California cities have the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All of California — including Los Angeles, San Francisco, San Diego, San Jose, Sacramento, Fresno, and Long Beach — uses the same Pacific Time zone (America/Los_Angeles). There are no time zone boundaries within the state of California.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in California', item: 'https://whattime.city/california/' },
  ],
}


export default function CaliforniaTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HubPageHeader title="
        Current Time in California
      " subtitle="
        Pacific Time (PT) · PST (UTC−8) in winter · PDT (UTC−7) during Daylight Saving Time
      " />

      <CaliClockClient />

      {/* PST/PDT Explained */}
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Time in Texas","href":"/texas/"},{"label":"Time in Washington State","href":"/washington-state/"},{"label":"Time in Nevada","href":"/nevada/"},{"label":"Time in Oregon","href":"/oregon/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"San Francisco time","href":"/san-francisco/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        California: America/Los_Angeles (PST UTC−8 / PDT UTC−7). DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
