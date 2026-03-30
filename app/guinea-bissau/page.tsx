import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GuineaBissauClockClient from './GuineaBissauClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Guinea-Bissau Now — GMT (UTC+0)',
  description: 'What time is it in Guinea-Bissau right now? Live Bissau clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in guinea-bissau', 'guinea-bissau time now', 'what time is it in guinea-bissau', 'bissau time', 'guinea-bissau time zone'],
  alternates: { canonical: 'https://whattime.city/guinea-bissau/' },
  openGraph: { title: 'Current Time in Guinea-Bissau — GMT · Bissau', description: 'Live Guinea-Bissau time. Bissau on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/guinea-bissau/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Guinea-Bissau right now?', acceptedAnswer: { '@type': 'Answer', text: 'Guinea-Bissau uses GMT (UTC+0). Bissau is the capital. The live clock above shows the current local time in Guinea-Bissau.' } },
    { '@type': 'Question', name: 'What time zone is Bissau in?', acceptedAnswer: { '@type': 'Answer', text: 'Bissau uses GMT (UTC+0). The IANA time zone identifier is Africa/Bissau. ' } },
    { '@type': 'Question', name: 'Does Guinea-Bissau observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Guinea-Bissau does not observe Daylight Saving Time. Guinea-Bissau uses Greenwich Mean Time (GMT, UTC+0) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Guinea-Bissau?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Guinea-Bissau is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Guinea-Bissau', item: 'https://whattime.city/guinea-bissau/' }] }

export default function GuineaBissauTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Guinea-Bissau" subtitle="GMT (UTC+0) · Bissau · UTC+0" />
      <GuineaBissauClockClient />
      <CountryFactsSection hubSlug="guinea-bissau" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Guinea-Bissau & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Guinea-Bissau: Africa/Bissau (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
