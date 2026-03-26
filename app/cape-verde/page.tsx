import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CapeVerdeClockClient from './CapeVerdeClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Cape Verde Now — CVT (UTC-1) · Praia',
  description: 'What time is it in Cape Verde right now? Live Praia clock, time zone info (CVT (UTC-1)), best time to call, and time difference with major cities.',
  keywords: ['time in cape verde', 'cape verde time now', 'what time is it in cape verde', 'praia time', 'cape verde time zone'],
  alternates: { canonical: 'https://whattime.city/cape-verde/' },
  openGraph: { title: 'Current Time in Cape Verde — CVT · Praia', description: 'Live Cape Verde time. Praia on CVT (UTC-1).', type: 'website', url: 'https://whattime.city/cape-verde/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Cape Verde right now?', acceptedAnswer: { '@type': 'Answer', text: 'Cape Verde uses CVT (UTC-1). Praia is the capital. The live clock above shows the current local time in Cape Verde.' } },
    { '@type': 'Question', name: 'What time zone is Praia in?', acceptedAnswer: { '@type': 'Answer', text: 'Praia uses CVT (UTC-1). The IANA time zone identifier is Atlantic/Cape_Verde. ' } },
    { '@type': 'Question', name: 'Does Cape Verde observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Cape Verde offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Cape Verde?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Cape Verde is during local business hours: Monday–Friday, 9 AM–5 PM CVT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Cape Verde', item: 'https://whattime.city/cape-verde/' }] }

export default function CapeVerdeTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Cape Verde" subtitle="CVT (UTC-1) · Praia · UTC-1" />
      <CapeVerdeClockClient />
      <CountryFactsSection hubSlug="cape-verde" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Cape Verde & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Cape Verde: Atlantic/Cape_Verde (CVT (UTC-1))."
      />
    </ContentPageWrapper>
  )
}
