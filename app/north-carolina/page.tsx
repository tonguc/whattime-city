import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NorthCarolinaClockClient from './NorthCarolinaClockClient'

export const metadata: Metadata = {
  title: 'Time in North Carolina Now — EST/EDT (UTC−5/−4) · Charlotte, Raleigh',
  description: 'What time is it in North Carolina right now? NC uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during DST. Live Charlotte clock, NC vs world cities.',
  keywords: ['time in north carolina', 'north carolina time now', 'what time is it in north carolina', 'charlotte time', 'raleigh time', 'north carolina time zone', 'EST north carolina', 'eastern time nc', 'nc time vs california', 'nc time vs chicago'],
  alternates: { canonical: 'https://whattime.city/north-carolina/' },
  openGraph: { title: 'Current Time in North Carolina — EST/EDT (UTC−5/−4)', description: 'Live North Carolina time. EST (UTC−5) in winter, EDT (UTC−4) during DST. Charlotte, Raleigh, Durham, Greensboro on Eastern Time.', type: 'website', url: 'https://whattime.city/north-carolina/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in North Carolina right now?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities — Charlotte, Raleigh, Durham, Greensboro, Winston-Salem, and Asheville — are on the same time zone. The live clock above shows the current time in North Carolina.' } },
    { '@type': 'Question', name: 'What time zone is North Carolina in?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina is entirely in the Eastern Time Zone. In winter it uses EST (UTC−5) and during DST it uses EDT (UTC−4). The IANA identifier is America/New_York. North Carolina shares Eastern Time with New York, Florida, Georgia, and Virginia.' } },
    { '@type': 'Question', name: 'What is the time difference between North Carolina and California?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM in Charlotte. Both states change clocks on the same dates.' } },
    { '@type': 'Question', name: 'What is the time difference between North Carolina and Chicago?', acceptedAnswer: { '@type': 'Answer', text: 'North Carolina (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in Charlotte or Raleigh.' } },
    { '@type': 'Question', name: 'What is the time difference between North Carolina and London?', acceptedAnswer: { '@type': 'Answer', text: 'Charlotte (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time, the gap is typically 5–6 hours depending on the brief transition windows when clocks change on different dates.' } },
    { '@type': 'Question', name: 'Does North Carolina observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. North Carolina observes Daylight Saving Time. Clocks spring forward on the second Sunday of March and fall back on the first Sunday of November.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in North Carolina', item: 'https://whattime.city/north-carolina/' }] }

export default function NorthCarolinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in North Carolina" subtitle="Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time" />
      <NorthCarolinaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Charlotte time', href: '/charlotte/' }, { label: 'Raleigh time', href: '/raleigh/' }, { label: 'Durham time', href: '/durham/' }, { label: 'Charlotte → Chicago', href: '/time/charlotte/chicago/' }, { label: 'Charlotte → Los Angeles', href: '/time/charlotte/los-angeles/' }, { label: 'Charlotte → London', href: '/time/charlotte/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="North Carolina City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. North Carolina: America/New_York (EST UTC−5 / EDT UTC−4)."
      />
    </ContentPageWrapper>
  )
}
