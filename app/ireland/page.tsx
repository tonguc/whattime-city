import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IrelandClockClient from './IrelandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Ireland Now — GMT (UTC+0) · Dublin',
  description: 'What time is it in Ireland right now? Live Dublin clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in ireland', 'ireland time now', 'what time is it in ireland', 'dublin time', 'ireland time zone'],
  alternates: { canonical: 'https://whattime.city/ireland/' },
  openGraph: { title: 'Current Time in Ireland — GMT · Dublin', description: 'Live Ireland time. Dublin on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/ireland/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Ireland right now?', acceptedAnswer: { '@type': 'Answer', text: 'Ireland uses GMT (UTC+0). Dublin is the capital. The live clock above shows the current local time in Ireland.' } },
    { '@type': 'Question', name: 'What time zone is Dublin in?', acceptedAnswer: { '@type': 'Answer', text: 'Dublin uses GMT (UTC+0). The IANA time zone identifier is Europe/Dublin. Ireland spans multiple time zones: GMT (UTC+0), IST (UTC+1).' } },
    { '@type': 'Question', name: 'Does Ireland observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ireland observes Irish Standard Time (IST, UTC+1) from the last Sunday in March to the last Sunday in October. Outside this period, Ireland uses Greenwich Mean Time (GMT, UTC+0).' } },
    { '@type': 'Question', name: 'What is the best time to call Ireland?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Ireland is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Ireland', item: 'https://whattime.city/ireland/' }] }

export default function IrelandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Ireland" subtitle="GMT (UTC+0) · Dublin · UTC+0" />
      <IrelandClockClient />
      <CountryFactsSection hubSlug="ireland" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Ireland & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Ireland: Europe/Dublin (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
