import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IowaClockClient from './IowaClockClient'

export const metadata: Metadata = {
  title: 'Time in Iowa Now — CST/CDT (UTC−6/−5)',
  description: 'What time is it in Iowa right now? Iowa uses Central Time (CST/CDT). Des Moines is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in iowa', 'iowa time now', 'what time is it in iowa', 'des moines time', 'iowa time zone', 'CST CDT iowa', 'iowa utc-6', 'cedar rapids time', 'iowa city time', 'iowa central time', 'iowa time vs eastern', 'iowa time vs uk'],
  alternates: { canonical: 'https://whattime.city/iowa/' },
  openGraph: { title: 'Current Time in Iowa — CST/CDT · Des Moines', description: 'Live Iowa time. Des Moines and all of Iowa on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/iowa/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Iowa right now?', acceptedAnswer: { '@type': 'Answer', text: 'Iowa uses Central Time. Des Moines, Cedar Rapids, Iowa City, Davenport, and all Iowa cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Iowa.' } },
    { '@type': 'Question', name: 'What time zone is Des Moines in?', acceptedAnswer: { '@type': 'Answer', text: 'Des Moines is in the Central Time zone (America/Chicago). Des Moines uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Des Moines is on the same time as Chicago, Dallas, and Kansas City.' } },
    { '@type': 'Question', name: 'Does Iowa observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Iowa observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Iowa and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Iowa (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Des Moines. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Iowa and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Des Moines (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Des Moines moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK are on summer time, Des Moines (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Iowa and California?', acceptedAnswer: { '@type': 'Answer', text: 'Iowa (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 10:00 AM in Los Angeles, it is noon in Des Moines. Both states observe DST on the same schedule, so the 2-hour difference is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Iowa', item: 'https://whattime.city/iowa/' }] }

export default function IowaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Iowa" subtitle="Central Time (CST/CDT) · Des Moines · UTC−6 / UTC−5" />
      <IowaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Chicago time', href: '/chicago/' }, { label: 'Minneapolis time', href: '/minneapolis/' }, { label: 'Kansas City time', href: '/kansas-city/' }, { label: 'Time in Illinois', href: '/illinois/' }, { label: 'Time in Minnesota', href: '/minnesota/' }, { label: 'Time in Missouri', href: '/missouri/' }, { label: 'Time in Wisconsin', href: '/wisconsin/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Iowa City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Iowa: America/Chicago (CST/CDT, Central Time)."
      />
    </ContentPageWrapper>
  )
}
