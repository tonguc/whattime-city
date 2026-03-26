import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BeninClockClient from './BeninClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Benin Now — WAT (UTC+1) · Porto-Novo',
  description: 'What time is it in Benin right now? Live Porto-Novo clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in benin', 'benin time now', 'what time is it in benin', 'porto-novo time', 'benin time zone'],
  alternates: { canonical: 'https://whattime.city/benin/' },
  openGraph: { title: 'Current Time in Benin — WAT · Porto-Novo', description: 'Live Benin time. Porto-Novo on WAT (UTC+1).', type: 'website', url: 'https://whattime.city/benin/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Benin right now?', acceptedAnswer: { '@type': 'Answer', text: 'Benin uses WAT (UTC+1). Porto-Novo is the capital. The live clock above shows the current local time in Benin.' } },
    { '@type': 'Question', name: 'What time zone is Porto-Novo in?', acceptedAnswer: { '@type': 'Answer', text: 'Porto-Novo uses WAT (UTC+1). The IANA time zone identifier is Africa/Porto-Novo. ' } },
    { '@type': 'Question', name: 'Does Benin observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Benin does not observe Daylight Saving Time. Benin uses West Africa Time (WAT, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Benin?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Benin is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Benin', item: 'https://whattime.city/benin/' }] }

export default function BeninTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Benin" subtitle="WAT (UTC+1) · Porto-Novo · UTC+1" />
      <BeninClockClient />
      <CountryFactsSection hubSlug="benin" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Benin & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Benin: Africa/Porto-Novo (WAT (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
