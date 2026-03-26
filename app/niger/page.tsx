import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NigerClockClient from './NigerClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Niger Now — WAT (UTC+1) · Niamey',
  description: 'What time is it in Niger right now? Live Niamey clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in niger', 'niger time now', 'what time is it in niger', 'niamey time', 'niger time zone'],
  alternates: { canonical: 'https://whattime.city/niger/' },
  openGraph: { title: 'Current Time in Niger — WAT · Niamey', description: 'Live Niger time. Niamey on WAT (UTC+1).', type: 'website', url: 'https://whattime.city/niger/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Niger right now?', acceptedAnswer: { '@type': 'Answer', text: 'Niger uses WAT (UTC+1). Niamey is the capital. The live clock above shows the current local time in Niger.' } },
    { '@type': 'Question', name: 'What time zone is Niamey in?', acceptedAnswer: { '@type': 'Answer', text: 'Niamey uses WAT (UTC+1). The IANA time zone identifier is Africa/Niamey. ' } },
    { '@type': 'Question', name: 'Does Niger observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Niger does not observe Daylight Saving Time. Niger uses West Africa Time (WAT, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Niger?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Niger is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Niger', item: 'https://whattime.city/niger/' }] }

export default function NigerTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Niger" subtitle="WAT (UTC+1) · Niamey · UTC+1" />
      <NigerClockClient />
      <CountryFactsSection hubSlug="niger" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Niger & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Niger: Africa/Niamey (WAT (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
