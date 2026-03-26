import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import UgandaClockClient from './UgandaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Uganda Now — EAT (UTC+3) · Kampala',
  description: 'What time is it in Uganda right now? Live Kampala clock, time zone info (EAT (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in uganda', 'uganda time now', 'what time is it in uganda', 'kampala time', 'uganda time zone'],
  alternates: { canonical: 'https://whattime.city/uganda/' },
  openGraph: { title: 'Current Time in Uganda — EAT · Kampala', description: 'Live Uganda time. Kampala on EAT (UTC+3).', type: 'website', url: 'https://whattime.city/uganda/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Uganda right now?', acceptedAnswer: { '@type': 'Answer', text: 'Uganda uses EAT (UTC+3). Kampala is the capital. The live clock above shows the current local time in Uganda.' } },
    { '@type': 'Question', name: 'What time zone is Kampala in?', acceptedAnswer: { '@type': 'Answer', text: 'Kampala uses EAT (UTC+3). The IANA time zone identifier is Africa/Kampala. ' } },
    { '@type': 'Question', name: 'Does Uganda observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Uganda offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Uganda?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Uganda is during local business hours: Monday–Friday, 9 AM–5 PM EAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Uganda', item: 'https://whattime.city/uganda/' }] }

export default function UgandaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Uganda" subtitle="EAT (UTC+3) · Kampala · UTC+3" />
      <UgandaClockClient />
      <CountryFactsSection hubSlug="uganda" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Uganda & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Uganda: Africa/Kampala (EAT (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
