import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import EquatorialGuineaClockClient from './EquatorialGuineaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Equatorial Guinea Now — WAT (UTC+1)',
  description: 'What time is it in Equatorial Guinea right now? Live Malabo clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in equatorial guinea', 'equatorial guinea time now', 'what time is it in equatorial guinea', 'malabo time', 'equatorial guinea time zone'],
  alternates: { canonical: 'https://whattime.city/equatorial-guinea/' },
  openGraph: { title: 'Current Time in Equatorial Guinea — WAT · Malabo', description: 'Live Equatorial Guinea time. Malabo on WAT (UTC+1).', type: 'website', url: 'https://whattime.city/equatorial-guinea/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Equatorial Guinea right now?', acceptedAnswer: { '@type': 'Answer', text: 'Equatorial Guinea uses WAT (UTC+1). Malabo is the capital. The live clock above shows the current local time in Equatorial Guinea.' } },
    { '@type': 'Question', name: 'What time zone is Malabo in?', acceptedAnswer: { '@type': 'Answer', text: 'Malabo uses WAT (UTC+1). The IANA time zone identifier is Africa/Malabo. ' } },
    { '@type': 'Question', name: 'Does Equatorial Guinea observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Equatorial Guinea does not observe Daylight Saving Time. It uses West Africa Time (WAT, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Equatorial Guinea?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Equatorial Guinea is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Equatorial Guinea', item: 'https://whattime.city/equatorial-guinea/' }] }

export default function EquatorialGuineaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Equatorial Guinea" subtitle="WAT (UTC+1) · Malabo · UTC+1" />
      <EquatorialGuineaClockClient />
      <CountryFactsSection hubSlug="equatorial-guinea" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Equatorial Guinea & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Equatorial Guinea: Africa/Malabo (WAT (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
