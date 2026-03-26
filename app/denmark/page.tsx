import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import DenmarkClockClient from './DenmarkClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Denmark Now — CET (UTC+1) · Copenhagen',
  description: 'What time is it in Denmark right now? Live Copenhagen clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in denmark', 'denmark time now', 'what time is it in denmark', 'copenhagen time', 'denmark time zone'],
  alternates: { canonical: 'https://whattime.city/denmark/' },
  openGraph: { title: 'Current Time in Denmark — CET · Copenhagen', description: 'Live Denmark time. Copenhagen on CET (UTC+1).', type: 'website', url: 'https://whattime.city/denmark/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Denmark right now?', acceptedAnswer: { '@type': 'Answer', text: 'Denmark uses CET (UTC+1). Copenhagen is the capital. The live clock above shows the current local time in Denmark.' } },
    { '@type': 'Question', name: 'What time zone is Copenhagen in?', acceptedAnswer: { '@type': 'Answer', text: 'Copenhagen uses CET (UTC+1). The IANA time zone identifier is Europe/Copenhagen. Denmark spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Denmark observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Denmark observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, Denmark uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Denmark?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Denmark is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Denmark', item: 'https://whattime.city/denmark/' }] }

export default function DenmarkTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Denmark" subtitle="CET (UTC+1) · Copenhagen · UTC+1" />
      <DenmarkClockClient />
      <CountryFactsSection hubSlug="denmark" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Denmark & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Denmark: Europe/Copenhagen (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
