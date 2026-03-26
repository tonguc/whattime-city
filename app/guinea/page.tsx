import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GuineaClockClient from './GuineaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Guinea Now — GMT (UTC+0) · Conakry',
  description: 'What time is it in Guinea right now? Live Conakry clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in guinea', 'guinea time now', 'what time is it in guinea', 'conakry time', 'guinea time zone'],
  alternates: { canonical: 'https://whattime.city/guinea/' },
  openGraph: { title: 'Current Time in Guinea — GMT · Conakry', description: 'Live Guinea time. Conakry on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/guinea/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Guinea right now?', acceptedAnswer: { '@type': 'Answer', text: 'Guinea uses GMT (UTC+0). Conakry is the capital. The live clock above shows the current local time in Guinea.' } },
    { '@type': 'Question', name: 'What time zone is Conakry in?', acceptedAnswer: { '@type': 'Answer', text: 'Conakry uses GMT (UTC+0). The IANA time zone identifier is Africa/Conakry. ' } },
    { '@type': 'Question', name: 'Does Guinea observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Guinea does not observe Daylight Saving Time. Guinea uses Greenwich Mean Time (GMT, UTC+0) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Guinea?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Guinea is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Guinea', item: 'https://whattime.city/guinea/' }] }

export default function GuineaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Guinea" subtitle="GMT (UTC+0) · Conakry · UTC+0" />
      <GuineaClockClient />
      <CountryFactsSection hubSlug="guinea" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Guinea & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Guinea: Africa/Conakry (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
