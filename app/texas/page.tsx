import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TexasClockClient from './TexasClockClient'

export const metadata: Metadata = {
  title: 'Time in Texas Now — CST/CDT (UTC−6/−5)',
  description:
    'What time is it in Texas right now? Most of Texas uses CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. El Paso uses Mountain Time. Live Texas clock and best time to call.',
  keywords: [
    'time in texas', 'texas time now', 'what time is it in texas',
    'texas time', 'current time in texas', 'texas time zone',
    'CST texas', 'CDT texas', 'houston time now', 'dallas time now',
    'austin time now', 'texas central time', 'texas time vs uk',
    'texas time vs est', 'el paso time zone', 'texas time right now',
  ],
  alternates: { canonical: 'https://whattime.city/texas/' },
  openGraph: {
    title: 'Current Time in Texas — CST/CDT (UTC−6/−5)',
    description: 'Live Texas time. Most of Texas uses Central Time (CST/CDT). El Paso uses Mountain Time. Houston, Dallas, Austin, San Antonio all on CST/CDT.',
    type: 'website', url: 'https://whattime.city/texas/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Texas right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most of Texas uses Central Time — CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. This includes Houston, Dallas, Austin, San Antonio, and Fort Worth. El Paso and Hudspeth County use Mountain Time (MST/MDT, UTC−7/−6). The live clock at the top shows the current Central Time in Texas.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Texas in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The vast majority of Texas uses the Central Time Zone (CT): CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The IANA identifier is America/Chicago. Exception: El Paso and Hudspeth County in far west Texas use Mountain Time (America/Denver), aligning with New Mexico rather than the rest of Texas.' },
    },
    {
      '@type': 'Question',
      name: 'Does Texas observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Texas observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back on the first Sunday in November. The Texas legislature has considered proposals to stop observing DST, but as of 2026, Texas continues to change clocks twice a year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Texas and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Texas (Central Time). When it is 9:00 AM in Houston, it is 10:00 AM in New York. This 1-hour gap is constant year-round because both states switch to Daylight Saving Time simultaneously.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Texas and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Texas (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 11:00 AM in Houston or Dallas. This gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is El Paso, Texas in?',
      acceptedAnswer: { '@type': 'Answer', text: 'El Paso and the surrounding Hudspeth County use Mountain Time (MST/MDT, UTC−7/−6), not Central Time like the rest of Texas. This is because El Paso is geographically in the western tip of Texas, closer to Albuquerque and Phoenix than to Dallas. The IANA identifier for El Paso is America/Denver.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Texas and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Texas (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), London is 7 hours ahead of Texas. During US Daylight Saving Time (CDT, UTC−5), Texas is 5 hours behind GMT.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Texas', item: 'https://whattime.city/texas/' },
  ],
}


export default function TexasTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in Texas
      " subtitle="
        Central Time (CT) · CST (UTC−6) in winter · CDT (UTC−5) during Daylight Saving Time · El Paso uses Mountain Time
      " />

      <TexasClockClient />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Time in Florida","href":"/florida/"},{"label":"Time in California","href":"/california/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Houston time","href":"/houston/"},{"label":"Dallas time","href":"/dallas/"},{"label":"Time in Louisiana","href":"/louisiana/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Texas (most): America/Chicago (CST UTC−6 / CDT UTC−5). El Paso: America/Denver.
      "
      />
    </ContentPageWrapper>
  )
}
