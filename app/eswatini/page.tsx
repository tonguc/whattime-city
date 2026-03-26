import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import EswatiniClockClient from './EswatiniClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Eswatini Now — SAST (UTC+2) · Mbabane',
  description: 'What time is it in Eswatini right now? Live Mbabane clock, time zone info (SAST (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in eswatini', 'eswatini time now', 'what time is it in eswatini', 'mbabane time', 'eswatini time zone'],
  alternates: { canonical: 'https://whattime.city/eswatini/' },
  openGraph: { title: 'Current Time in Eswatini — SAST · Mbabane', description: 'Live Eswatini time. Mbabane on SAST (UTC+2).', type: 'website', url: 'https://whattime.city/eswatini/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Eswatini right now?', acceptedAnswer: { '@type': 'Answer', text: 'Eswatini uses SAST (UTC+2). Mbabane is the capital. The live clock above shows the current local time in Eswatini.' } },
    { '@type': 'Question', name: 'What time zone is Mbabane in?', acceptedAnswer: { '@type': 'Answer', text: 'Mbabane uses SAST (UTC+2). The IANA time zone identifier is Africa/Mbabane. ' } },
    { '@type': 'Question', name: 'Does Eswatini observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Eswatini (Swaziland) does not observe Daylight Saving Time. It uses South Africa Standard Time (SAST, UTC+2) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Eswatini?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Eswatini is during local business hours: Monday–Friday, 9 AM–5 PM SAST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Eswatini', item: 'https://whattime.city/eswatini/' }] }

export default function EswatiniTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Eswatini" subtitle="SAST (UTC+2) · Mbabane · UTC+2" />
      <EswatiniClockClient />
      <CountryFactsSection hubSlug="eswatini" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Eswatini & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Eswatini: Africa/Mbabane (SAST (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
