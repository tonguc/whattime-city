import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MaltaClockClient from './MaltaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Malta Now — CET (UTC+1) · Valletta',
  description: 'What time is it in Malta right now? Live Valletta clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in malta', 'malta time now', 'what time is it in malta', 'valletta time', 'malta time zone'],
  alternates: { canonical: 'https://whattime.city/malta/' },
  openGraph: { title: 'Current Time in Malta — CET · Valletta', description: 'Live Malta time. Valletta on CET (UTC+1).', type: 'website', url: 'https://whattime.city/malta/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Malta right now?', acceptedAnswer: { '@type': 'Answer', text: 'Malta uses CET (UTC+1). Valletta is the capital. The live clock above shows the current local time in Malta.' } },
    { '@type': 'Question', name: 'What time zone is Valletta in?', acceptedAnswer: { '@type': 'Answer', text: 'Valletta uses CET (UTC+1). The IANA time zone identifier is Europe/Malta. Malta spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Malta observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Malta observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, Malta uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Malta?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Malta is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Malta', item: 'https://whattime.city/malta/' }] }

export default function MaltaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Malta" subtitle="CET (UTC+1) · Valletta · UTC+1" />
      <MaltaClockClient />
      <CountryFactsSection hubSlug="malta" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Malta & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Malta: Europe/Malta (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
