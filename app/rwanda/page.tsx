import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import RwandaClockClient from './RwandaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Rwanda Now — CAT (UTC+2) · Kigali',
  description: 'What time is it in Rwanda right now? Live Kigali clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in rwanda', 'rwanda time now', 'what time is it in rwanda', 'kigali time', 'rwanda time zone'],
  alternates: { canonical: 'https://whattime.city/rwanda/' },
  openGraph: { title: 'Current Time in Rwanda — CAT · Kigali', description: 'Live Rwanda time. Kigali on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/rwanda/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Rwanda right now?', acceptedAnswer: { '@type': 'Answer', text: 'Rwanda uses CAT (UTC+2). Kigali is the capital. The live clock above shows the current local time in Rwanda.' } },
    { '@type': 'Question', name: 'What time zone is Kigali in?', acceptedAnswer: { '@type': 'Answer', text: 'Kigali uses CAT (UTC+2). The IANA time zone identifier is Africa/Kigali. ' } },
    { '@type': 'Question', name: 'Does Rwanda observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Rwanda offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Rwanda?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Rwanda is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Rwanda', item: 'https://whattime.city/rwanda/' }] }

export default function RwandaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Rwanda" subtitle="CAT (UTC+2) · Kigali · UTC+2" />
      <RwandaClockClient />
      <CountryFactsSection hubSlug="rwanda" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Rwanda & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Rwanda: Africa/Kigali (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
