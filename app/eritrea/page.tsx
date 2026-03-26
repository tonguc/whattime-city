import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import EritreaClockClient from './EritreaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Eritrea Now — EAT (UTC+3) · Asmara',
  description: 'What time is it in Eritrea right now? Live Asmara clock, time zone info (EAT (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in eritrea', 'eritrea time now', 'what time is it in eritrea', 'asmara time', 'eritrea time zone'],
  alternates: { canonical: 'https://whattime.city/eritrea/' },
  openGraph: { title: 'Current Time in Eritrea — EAT · Asmara', description: 'Live Eritrea time. Asmara on EAT (UTC+3).', type: 'website', url: 'https://whattime.city/eritrea/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Eritrea right now?', acceptedAnswer: { '@type': 'Answer', text: 'Eritrea uses EAT (UTC+3). Asmara is the capital. The live clock above shows the current local time in Eritrea.' } },
    { '@type': 'Question', name: 'What time zone is Asmara in?', acceptedAnswer: { '@type': 'Answer', text: 'Asmara uses EAT (UTC+3). The IANA time zone identifier is Africa/Asmara. ' } },
    { '@type': 'Question', name: 'Does Eritrea observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Eritrea does not observe Daylight Saving Time. Eritrea uses East Africa Time (EAT, UTC+3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Eritrea?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Eritrea is during local business hours: Monday–Friday, 9 AM–5 PM EAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Eritrea', item: 'https://whattime.city/eritrea/' }] }

export default function EritreaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Eritrea" subtitle="EAT (UTC+3) · Asmara · UTC+3" />
      <EritreaClockClient />
      <CountryFactsSection hubSlug="eritrea" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Eritrea & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Eritrea: Africa/Asmara (EAT (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
