import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MauritiusClockClient from './MauritiusClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Mauritius Now — MUT (UTC+4) · Port Louis',
  description: 'What time is it in Mauritius right now? Live Port Louis clock, time zone info (MUT (UTC+4)), best time to call, and time difference with major cities.',
  keywords: ['time in mauritius', 'mauritius time now', 'what time is it in mauritius', 'port louis time', 'mauritius time zone'],
  alternates: { canonical: 'https://whattime.city/mauritius/' },
  openGraph: { title: 'Current Time in Mauritius — MUT · Port Louis', description: 'Live Mauritius time. Port Louis on MUT (UTC+4).', type: 'website', url: 'https://whattime.city/mauritius/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Mauritius right now?', acceptedAnswer: { '@type': 'Answer', text: 'Mauritius uses MUT (UTC+4). Port Louis is the capital. The live clock above shows the current local time in Mauritius.' } },
    { '@type': 'Question', name: 'What time zone is Port Louis in?', acceptedAnswer: { '@type': 'Answer', text: 'Port Louis uses MUT (UTC+4). The IANA time zone identifier is Indian/Mauritius. ' } },
    { '@type': 'Question', name: 'Does Mauritius observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Mauritius offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Mauritius?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Mauritius is during local business hours: Monday–Friday, 9 AM–5 PM MUT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Mauritius', item: 'https://whattime.city/mauritius/' }] }

export default function MauritiusTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Mauritius" subtitle="MUT (UTC+4) · Port Louis · UTC+4" />
      <MauritiusClockClient />
      <CountryFactsSection hubSlug="mauritius" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Mauritius & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Mauritius: Indian/Mauritius (MUT (UTC+4))."
      />
    </ContentPageWrapper>
  )
}
