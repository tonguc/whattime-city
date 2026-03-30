import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MichiganClockClient from './MichiganClockClient'

export const metadata: Metadata = {
  title: 'Time in Michigan Now — EST/EDT · Detroit',
  description:
    'What time is it in Michigan right now? Most of Michigan uses Eastern Time (EST/EDT). Four western Upper Peninsula counties use Central Time (CST/CDT). Live Detroit clock, Michigan vs world cities, and best time to call.',
  keywords: [
    'time in michigan', 'michigan time now', 'what time is it in michigan',
    'detroit time', 'michigan time zone', 'EST michigan', 'EDT michigan',
    'eastern time michigan', 'michigan utc-5', 'grand rapids time',
    'michigan upper peninsula time zone', 'michigan two time zones',
    'michigan time vs california', 'michigan time vs chicago', 'michigan time vs london',
    'current time detroit', 'michigan CST counties',
  ],
  alternates: { canonical: 'https://whattime.city/michigan/' },
  openGraph: {
    title: 'Current Time in Michigan — EST/EDT (UTC−5/−4) · UP western counties on CST',
    description: 'Live Michigan time. Most of Michigan uses EST/EDT (Eastern Time). Four western Upper Peninsula counties use CST/CDT (Central Time). Detroit, Grand Rapids, Lansing on Eastern Time.',
    type: 'website', url: 'https://whattime.city/michigan/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Michigan right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most of Michigan uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. This includes Detroit, Grand Rapids, Lansing, Ann Arbor, Flint, and most of the Upper Peninsula. However, four counties in the western Upper Peninsula — Iron, Gogebic, Menominee, and Dickinson — use Central Time (CST/CDT), which is 1 hour behind the rest of Michigan.' },
    },
    {
      '@type': 'Question',
      name: 'Does Michigan have two time zones?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Michigan has two time zones. The Lower Peninsula and most of the Upper Peninsula use Eastern Time (EST/EDT). Four western Upper Peninsula counties — Iron, Gogebic, Menominee, and Dickinson — use Central Time (CST/CDT) because they are geographically and economically tied to Wisconsin, which uses Central Time. This makes Michigan one of a small number of US states split between two time zones.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Michigan and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Detroit (Eastern Time) is always 3 hours ahead of Los Angeles (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM in Detroit. Both states switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Michigan and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'Detroit (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in Detroit. Note that the four western Upper Peninsula counties of Michigan are on Central Time — the same as Chicago — so there is no time difference between those counties and Illinois.' },
    },
    {
      '@type': 'Question',
      name: 'Does Michigan observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. All of Michigan observes Daylight Saving Time. The Lower Peninsula and most of the Upper Peninsula switch between EST and EDT. The four western UP counties switch between CST and CDT. All clock changes happen on the same federal dates: second Sunday of March (spring forward) and first Sunday of November (fall back).' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Detroit in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Detroit uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The IANA identifier is America/Detroit. Detroit is in the same time zone as New York, Philadelphia, and Miami. Detroit sits near the border with Canada (Windsor, Ontario), which also uses Eastern Time.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Michigan and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Detroit (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK Daylight Saving Time, Detroit (EDT, UTC−4) is typically 5–6 hours behind London (BST, UTC+1), with minor variation during the spring and autumn transition periods when the two countries change clocks on slightly different dates.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Michigan', item: 'https://whattime.city/michigan/' },
  ],
}


export default function MichiganTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Michigan" subtitle="Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during DST · W. Upper Peninsula counties use CST/CDT" />
      <MichiganClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Time in Ohio","href":"/ohio/"},{"label":"Time in Illinois","href":"/illinois/"},{"label":"Time in Indiana","href":"/indiana/"},{"label":"Time in Wisconsin","href":"/wisconsin/"},{"label":"Detroit time","href":"/detroit/"},{"label":"Time in New York State","href":"/new-york-state/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Michigan: America/Detroit (EST/EDT) · America/Menominee (CST/CDT, western UP counties).
      "
      />
    </ContentPageWrapper>
  )
}
