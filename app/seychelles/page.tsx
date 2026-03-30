import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SeychellesClockClient from './SeychellesClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Seychelles Now — SCT (UTC+4)',
  description: 'What time is it in Seychelles right now? Live Victoria clock, time zone info (SCT (UTC+4)), best time to call, and time difference with major cities.',
  keywords: ['time in seychelles', 'seychelles time now', 'what time is it in seychelles', 'victoria time', 'seychelles time zone'],
  alternates: { canonical: 'https://whattime.city/seychelles/' },
  openGraph: { title: 'Current Time in Seychelles — SCT · Victoria', description: 'Live Seychelles time. Victoria on SCT (UTC+4).', type: 'website', url: 'https://whattime.city/seychelles/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Seychelles right now?', acceptedAnswer: { '@type': 'Answer', text: 'Seychelles uses SCT (UTC+4). Victoria is the capital. The live clock above shows the current local time in Seychelles.' } },
    { '@type': 'Question', name: 'What time zone is Victoria in?', acceptedAnswer: { '@type': 'Answer', text: 'Victoria uses SCT (UTC+4). The IANA time zone identifier is Indian/Mahe. ' } },
    { '@type': 'Question', name: 'Does Seychelles observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Seychelles does not observe Daylight Saving Time. Seychelles uses Seychelles Time (SCT, UTC+4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Seychelles?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Seychelles is during local business hours: Monday–Friday, 9 AM–5 PM SCT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Seychelles', item: 'https://whattime.city/seychelles/' }] }

export default function SeychellesTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Seychelles" subtitle="SCT (UTC+4) · Victoria · UTC+4" />
      <SeychellesClockClient />
      <CountryFactsSection hubSlug="seychelles" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Seychelles & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Seychelles: Indian/Mahe (SCT (UTC+4))."
      />
    </ContentPageWrapper>
  )
}
