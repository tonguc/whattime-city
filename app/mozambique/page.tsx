import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MozambiqueClockClient from './MozambiqueClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Mozambique Now — CAT (UTC+2)',
  description: 'What time is it in Mozambique right now? Live Maputo clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in mozambique', 'mozambique time now', 'what time is it in mozambique', 'maputo time', 'mozambique time zone'],
  alternates: { canonical: 'https://whattime.city/mozambique/' },
  openGraph: { title: 'Current Time in Mozambique — CAT · Maputo', description: 'Live Mozambique time. Maputo on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/mozambique/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Mozambique right now?', acceptedAnswer: { '@type': 'Answer', text: 'Mozambique uses CAT (UTC+2). Maputo is the capital. The live clock above shows the current local time in Mozambique.' } },
    { '@type': 'Question', name: 'What time zone is Maputo in?', acceptedAnswer: { '@type': 'Answer', text: 'Maputo uses CAT (UTC+2). The IANA time zone identifier is Africa/Maputo. ' } },
    { '@type': 'Question', name: 'Does Mozambique observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Mozambique does not observe Daylight Saving Time. Mozambique uses Central Africa Time (CAT, UTC+2) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Mozambique?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Mozambique is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Mozambique', item: 'https://whattime.city/mozambique/' }] }

export default function MozambiqueTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Mozambique" subtitle="CAT (UTC+2) · Maputo · UTC+2" />
      <MozambiqueClockClient />
      <CountryFactsSection hubSlug="mozambique" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Mozambique & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Mozambique: Africa/Maputo (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
