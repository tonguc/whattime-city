import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TogoClockClient from './TogoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Togo Now — GMT (UTC+0) · Lomé',
  description: 'What time is it in Togo right now? Live Lomé clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in togo', 'togo time now', 'what time is it in togo', 'lomé time', 'togo time zone'],
  alternates: { canonical: 'https://whattime.city/togo/' },
  openGraph: { title: 'Current Time in Togo — GMT · Lomé', description: 'Live Togo time. Lomé on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/togo/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Togo right now?', acceptedAnswer: { '@type': 'Answer', text: 'Togo uses GMT (UTC+0). Lomé is the capital. The live clock above shows the current local time in Togo.' } },
    { '@type': 'Question', name: 'What time zone is Lomé in?', acceptedAnswer: { '@type': 'Answer', text: 'Lomé uses GMT (UTC+0). The IANA time zone identifier is Africa/Lome. ' } },
    { '@type': 'Question', name: 'Does Togo observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Togo offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Togo?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Togo is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Togo', item: 'https://whattime.city/togo/' }] }

export default function TogoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Togo" subtitle="GMT (UTC+0) · Lomé · UTC+0" />
      <TogoClockClient />
      <CountryFactsSection hubSlug="togo" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Togo & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Togo: Africa/Lome (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
