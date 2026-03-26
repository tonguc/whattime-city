import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LuxembourgClockClient from './LuxembourgClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Luxembourg Now — CET (UTC+1) · Luxembourg City',
  description: 'What time is it in Luxembourg right now? Live Luxembourg City clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in luxembourg', 'luxembourg time now', 'what time is it in luxembourg', 'luxembourg city time', 'luxembourg time zone'],
  alternates: { canonical: 'https://whattime.city/luxembourg/' },
  openGraph: { title: 'Current Time in Luxembourg — CET · Luxembourg City', description: 'Live Luxembourg time. Luxembourg City on CET (UTC+1).', type: 'website', url: 'https://whattime.city/luxembourg/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Luxembourg right now?', acceptedAnswer: { '@type': 'Answer', text: 'Luxembourg uses CET (UTC+1). Luxembourg City is the capital. The live clock above shows the current local time in Luxembourg.' } },
    { '@type': 'Question', name: 'What time zone is Luxembourg City in?', acceptedAnswer: { '@type': 'Answer', text: 'Luxembourg City uses CET (UTC+1). The IANA time zone identifier is Europe/Luxembourg. Luxembourg spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Luxembourg observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Luxembourg offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Luxembourg?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Luxembourg is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Luxembourg', item: 'https://whattime.city/luxembourg/' }] }

export default function LuxembourgTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Luxembourg" subtitle="CET (UTC+1) · Luxembourg City · UTC+1" />
      <LuxembourgClockClient />
      <CountryFactsSection hubSlug="luxembourg" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Luxembourg & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Luxembourg: Europe/Luxembourg (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
