import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CentralAfricanRepublicClockClient from './CentralAfricanRepublicClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Central African Republic Now — WAT (UTC+1) · Bangui',
  description: 'What time is it in Central African Republic right now? Live Bangui clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in central african republic', 'central african republic time now', 'what time is it in central african republic', 'bangui time', 'central african republic time zone'],
  alternates: { canonical: 'https://whattime.city/central-african-republic/' },
  openGraph: { title: 'Current Time in Central African Republic — WAT · Bangui', description: 'Live Central African Republic time. Bangui on WAT (UTC+1).', type: 'website', url: 'https://whattime.city/central-african-republic/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Central African Republic right now?', acceptedAnswer: { '@type': 'Answer', text: 'Central African Republic uses WAT (UTC+1). Bangui is the capital. The live clock above shows the current local time in Central African Republic.' } },
    { '@type': 'Question', name: 'What time zone is Bangui in?', acceptedAnswer: { '@type': 'Answer', text: 'Bangui uses WAT (UTC+1). The IANA time zone identifier is Africa/Bangui. ' } },
    { '@type': 'Question', name: 'Does Central African Republic observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. The Central African Republic does not observe Daylight Saving Time. It uses West Africa Time (WAT, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Central African Republic?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Central African Republic is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Central African Republic', item: 'https://whattime.city/central-african-republic/' }] }

export default function CentralAfricanRepublicTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Central African Republic" subtitle="WAT (UTC+1) · Bangui · UTC+1" />
      <CentralAfricanRepublicClockClient />
      <CountryFactsSection hubSlug="central-african-republic" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Central African Republic & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Central African Republic: Africa/Bangui (WAT (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
