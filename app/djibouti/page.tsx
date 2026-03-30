import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import DjiboutiClockClient from './DjiboutiClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Djibouti Now — EAT (UTC+3)',
  description: 'What time is it in Djibouti right now? Live Djibouti City clock, time zone info (EAT (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in djibouti', 'djibouti time now', 'what time is it in djibouti', 'djibouti city time', 'djibouti time zone'],
  alternates: { canonical: 'https://whattime.city/djibouti/' },
  openGraph: { title: 'Time in Djibouti Now — EAT (UTC+3)', description: 'Live Djibouti time. Djibouti City on EAT (UTC+3).', type: 'website', url: 'https://whattime.city/djibouti/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Djibouti right now?', acceptedAnswer: { '@type': 'Answer', text: 'Djibouti uses EAT (UTC+3). Djibouti City is the capital. The live clock above shows the current local time in Djibouti.' } },
    { '@type': 'Question', name: 'What time zone is Djibouti City in?', acceptedAnswer: { '@type': 'Answer', text: 'Djibouti City uses EAT (UTC+3). The IANA time zone identifier is Africa/Djibouti. ' } },
    { '@type': 'Question', name: 'Does Djibouti observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Djibouti does not observe Daylight Saving Time. Djibouti uses East Africa Time (EAT, UTC+3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Djibouti?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Djibouti is during local business hours: Monday–Friday, 9 AM–5 PM EAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Djibouti', item: 'https://whattime.city/djibouti/' }] }

export default function DjiboutiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Djibouti" subtitle="EAT (UTC+3) · Djibouti City · UTC+3" />
      <DjiboutiClockClient />
      <CountryFactsSection hubSlug="djibouti" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Djibouti & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Djibouti: Africa/Djibouti (EAT (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
