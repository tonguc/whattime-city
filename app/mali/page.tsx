import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MaliClockClient from './MaliClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Mali Now — GMT (UTC+0) · Bamako',
  description: 'What time is it in Mali right now? Live Bamako clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in mali', 'mali time now', 'what time is it in mali', 'bamako time', 'mali time zone'],
  alternates: { canonical: 'https://whattime.city/mali/' },
  openGraph: { title: 'Current Time in Mali — GMT · Bamako', description: 'Live Mali time. Bamako on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/mali/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Mali right now?', acceptedAnswer: { '@type': 'Answer', text: 'Mali uses GMT (UTC+0). Bamako is the capital. The live clock above shows the current local time in Mali.' } },
    { '@type': 'Question', name: 'What time zone is Bamako in?', acceptedAnswer: { '@type': 'Answer', text: 'Bamako uses GMT (UTC+0). The IANA time zone identifier is Africa/Bamako. ' } },
    { '@type': 'Question', name: 'Does Mali observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Mali does not observe Daylight Saving Time. Mali uses Greenwich Mean Time (GMT, UTC+0) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Mali?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Mali is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Mali', item: 'https://whattime.city/mali/' }] }

export default function MaliTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Mali" subtitle="GMT (UTC+0) · Bamako · UTC+0" />
      <MaliClockClient />
      <CountryFactsSection hubSlug="mali" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Mali & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Mali: Africa/Bamako (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
