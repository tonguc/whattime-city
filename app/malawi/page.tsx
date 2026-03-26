import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MalawiClockClient from './MalawiClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Malawi Now — CAT (UTC+2) · Lilongwe',
  description: 'What time is it in Malawi right now? Live Lilongwe clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in malawi', 'malawi time now', 'what time is it in malawi', 'lilongwe time', 'malawi time zone'],
  alternates: { canonical: 'https://whattime.city/malawi/' },
  openGraph: { title: 'Current Time in Malawi — CAT · Lilongwe', description: 'Live Malawi time. Lilongwe on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/malawi/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Malawi right now?', acceptedAnswer: { '@type': 'Answer', text: 'Malawi uses CAT (UTC+2). Lilongwe is the capital. The live clock above shows the current local time in Malawi.' } },
    { '@type': 'Question', name: 'What time zone is Lilongwe in?', acceptedAnswer: { '@type': 'Answer', text: 'Lilongwe uses CAT (UTC+2). The IANA time zone identifier is Africa/Blantyre. ' } },
    { '@type': 'Question', name: 'Does Malawi observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Malawi does not observe Daylight Saving Time. Malawi uses Central Africa Time (CAT, UTC+2) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Malawi?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Malawi is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Malawi', item: 'https://whattime.city/malawi/' }] }

export default function MalawiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Malawi" subtitle="CAT (UTC+2) · Lilongwe · UTC+2" />
      <MalawiClockClient />
      <CountryFactsSection hubSlug="malawi" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Malawi & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Malawi: Africa/Blantyre (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
