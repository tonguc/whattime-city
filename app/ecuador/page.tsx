import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import EcuadorClockClient from './EcuadorClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Ecuador Now — ECT (UTC-5) · Quito',
  description: 'What time is it in Ecuador right now? Live Quito clock, time zone info (ECT (UTC-5)), best time to call, and time difference with major cities.',
  keywords: ['time in ecuador', 'ecuador time now', 'what time is it in ecuador', 'quito time', 'ecuador time zone'],
  alternates: { canonical: 'https://whattime.city/ecuador/' },
  openGraph: { title: 'Current Time in Ecuador — ECT · Quito', description: 'Live Ecuador time. Quito on ECT (UTC-5).', type: 'website', url: 'https://whattime.city/ecuador/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Ecuador right now?', acceptedAnswer: { '@type': 'Answer', text: 'Ecuador uses ECT (UTC-5). Quito is the capital. The live clock above shows the current local time in Ecuador.' } },
    { '@type': 'Question', name: 'What time zone is Quito in?', acceptedAnswer: { '@type': 'Answer', text: 'Quito uses ECT (UTC-5). The IANA time zone identifier is America/Guayaquil. Ecuador spans multiple time zones: ECT (UTC-5), GALT (UTC-6).' } },
    { '@type': 'Question', name: 'Does Ecuador observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Ecuador offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Ecuador?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Ecuador is during local business hours: Monday–Friday, 9 AM–5 PM ECT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Ecuador', item: 'https://whattime.city/ecuador/' }] }

export default function EcuadorTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Ecuador" subtitle="ECT (UTC-5) · Quito · UTC-5" />
      <EcuadorClockClient />
      <CountryFactsSection hubSlug="ecuador" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Ecuador & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Ecuador: America/Guayaquil (ECT (UTC-5))."
      />
    </ContentPageWrapper>
  )
}
