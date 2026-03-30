import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MississippiClockClient from './MississippiClockClient'

export const metadata: Metadata = {
  title: 'Time in Mississippi Now — CST/CDT (UTC−6/−5)',
  description: 'What time is it in Mississippi right now? Mississippi uses Central Time (CST/CDT). Jackson is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in mississippi', 'mississippi time now', 'what time is it in mississippi', 'jackson mississippi time', 'mississippi time zone', 'CST CDT mississippi', 'mississippi utc-6', 'biloxi time', 'hattiesburg time', 'mississippi central time', 'mississippi time vs eastern'],
  alternates: { canonical: 'https://whattime.city/mississippi/' },
  openGraph: { title: 'Time in Mississippi Now — CST/CDT', description: 'Live Mississippi time. Jackson and all of Mississippi on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/mississippi/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Mississippi right now?', acceptedAnswer: { '@type': 'Answer', text: 'Mississippi uses Central Time. Jackson (capital), Gulfport, Biloxi, Hattiesburg, and all Mississippi cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Mississippi.' } },
    { '@type': 'Question', name: 'What time zone is Jackson, Mississippi in?', acceptedAnswer: { '@type': 'Answer', text: 'Jackson, Mississippi is in the Central Time zone (America/Chicago). Jackson uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Jackson is on the same time as New Orleans, Nashville, and Chicago.' } },
    { '@type': 'Question', name: 'Does Mississippi observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mississippi observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Mississippi and Georgia (Atlanta)?', acceptedAnswer: { '@type': 'Answer', text: 'Mississippi (Central Time) is always 1 hour behind Georgia (Eastern Time). When it is noon in Atlanta, it is 11:00 AM in Jackson. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Mississippi and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Jackson (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Jackson moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK observe summer time, Jackson (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Mississippi on the same time as Alabama?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mississippi and Alabama are both entirely on Central Time. There is no time difference between Jackson, MS and Birmingham or Montgomery, AL. Both states use CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Mississippi', item: 'https://whattime.city/mississippi/' }] }

export default function MississippiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Mississippi" subtitle="Central Time (CST/CDT) · Jackson · UTC−6 / UTC−5" />
      <MississippiClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'New Orleans time', href: '/new-orleans/' }, { label: 'Atlanta time', href: '/atlanta/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Alabama', href: '/alabama/' }, { label: 'Time in Louisiana', href: '/louisiana/' }, { label: 'Time in Tennessee', href: '/tennessee/' }, { label: 'Time in Georgia', href: '/georgia-state/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Mississippi City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Mississippi: America/Chicago (CST/CDT, Central Time)."
      />
    </ContentPageWrapper>
  )
}
