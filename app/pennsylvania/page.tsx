import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PennsylvaniaClockClient from './PennsylvaniaClockClient'

export const metadata: Metadata = {
  title: 'Time in Pennsylvania Now — EST/EDT',
  description: 'What time is it in Pennsylvania right now? Pennsylvania uses Eastern Standard Time (EST, UTC−5) in winter and Eastern Daylight Time (EDT, UTC−4) during DST. Live Philadelphia clock, PA vs world cities.',
  keywords: ['time in pennsylvania', 'pennsylvania time now', 'what time is it in pennsylvania', 'philadelphia time', 'pittsburgh time', 'pennsylvania time zone', 'EST pennsylvania', 'eastern time pa', 'pa time vs california', 'pa time vs london'],
  alternates: { canonical: 'https://whattime.city/pennsylvania/' },
  openGraph: { title: 'Current Time in Pennsylvania — EST/EDT (UTC−5/−4)', description: 'Live Pennsylvania time. EST (UTC−5) in winter, EDT (UTC−4) during DST. Philadelphia, Pittsburgh, Allentown, Erie on Eastern Time.', type: 'website', url: 'https://whattime.city/pennsylvania/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Pennsylvania right now?', acceptedAnswer: { '@type': 'Answer', text: 'Pennsylvania uses Eastern Time — EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. All cities — Philadelphia, Pittsburgh, Allentown, Erie, and Harrisburg — are on the same time zone. The live clock above shows the current time in Pennsylvania.' } },
    { '@type': 'Question', name: 'What time zone is Pennsylvania in?', acceptedAnswer: { '@type': 'Answer', text: 'Pennsylvania is entirely in the Eastern Time Zone. In winter it uses EST (UTC−5) and during DST it uses EDT (UTC−4). The IANA identifier is America/New_York. Pennsylvania shares Eastern Time with New York, New Jersey, Delaware, Maryland, and Virginia.' } },
    { '@type': 'Question', name: 'What is the time difference between Pennsylvania and California?', acceptedAnswer: { '@type': 'Answer', text: 'Pennsylvania (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 12:00 PM in Philadelphia or Pittsburgh. Both states change clocks on the same dates, so this gap is constant year-round.' } },
    { '@type': 'Question', name: 'Is Pittsburgh on Eastern Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pittsburgh uses Eastern Time, the same as Philadelphia and the rest of Pennsylvania. Pittsburgh sits near the western edge of the Eastern Time Zone — geographically close to Central Time states like Ohio and Indiana — but uses EST/EDT like the rest of Pennsylvania.' } },
    { '@type': 'Question', name: 'What is the time difference between Pennsylvania and London?', acceptedAnswer: { '@type': 'Answer', text: 'Philadelphia (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time, the gap is typically 5–6 hours depending on transition dates.' } },
    { '@type': 'Question', name: 'Does Pennsylvania observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pennsylvania observes Daylight Saving Time. Clocks spring forward on the second Sunday of March and fall back on the first Sunday of November, following standard US federal timekeeping rules.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Pennsylvania', item: 'https://whattime.city/pennsylvania/' }] }

export default function PennsylvaniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Pennsylvania" subtitle="Eastern Time (ET) · EST (UTC−5) in winter · EDT (UTC−4) during Daylight Saving Time" />
      <PennsylvaniaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Philadelphia time', href: '/philadelphia/' }, { label: 'Pittsburgh time', href: '/pittsburgh/' }, { label: 'Philadelphia → Chicago', href: '/time/philadelphia/chicago/' }, { label: 'Philadelphia → Los Angeles', href: '/time/philadelphia/los-angeles/' }, { label: 'Philadelphia → London', href: '/time/philadelphia/london/' }, { label: 'Philadelphia → Tokyo', href: '/time/philadelphia/tokyo/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Pennsylvania City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Pennsylvania: America/New_York (EST UTC−5 / EDT UTC−4)."
      />
    </ContentPageWrapper>
  )
}
