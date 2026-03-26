import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MonacoClockClient from './MonacoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Monaco Now — CET (UTC+1) · Monaco',
  description: 'What time is it in Monaco right now? Live Monaco clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in monaco', 'monaco time now', 'what time is it in monaco', 'monaco time', 'monaco time zone'],
  alternates: { canonical: 'https://whattime.city/monaco/' },
  openGraph: { title: 'Current Time in Monaco — CET · Monaco', description: 'Live Monaco time. Monaco on CET (UTC+1).', type: 'website', url: 'https://whattime.city/monaco/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Monaco right now?', acceptedAnswer: { '@type': 'Answer', text: 'Monaco uses CET (UTC+1). Monaco is the capital. The live clock above shows the current local time in Monaco.' } },
    { '@type': 'Question', name: 'What time zone is Monaco in?', acceptedAnswer: { '@type': 'Answer', text: 'Monaco uses CET (UTC+1). The IANA time zone identifier is Europe/Paris. Monaco spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Monaco observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Monaco observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, Monaco uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Monaco?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Monaco is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Monaco', item: 'https://whattime.city/monaco/' }] }

export default function MonacoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Monaco" subtitle="CET (UTC+1) · Monaco · UTC+1" />
      <MonacoClockClient />
      <CountryFactsSection hubSlug="monaco" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Monaco & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Monaco: Europe/Paris (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
