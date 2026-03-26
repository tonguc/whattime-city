import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NorwayClockClient from './NorwayClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Norway Now — CET (UTC+1) · Oslo',
  description: 'What time is it in Norway right now? Live Oslo clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in norway', 'norway time now', 'what time is it in norway', 'oslo time', 'norway time zone'],
  alternates: { canonical: 'https://whattime.city/norway/' },
  openGraph: { title: 'Current Time in Norway — CET · Oslo', description: 'Live Norway time. Oslo on CET (UTC+1).', type: 'website', url: 'https://whattime.city/norway/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Norway right now?', acceptedAnswer: { '@type': 'Answer', text: 'Norway uses CET (UTC+1). Oslo is the capital. The live clock above shows the current local time in Norway.' } },
    { '@type': 'Question', name: 'What time zone is Oslo in?', acceptedAnswer: { '@type': 'Answer', text: 'Oslo uses CET (UTC+1). The IANA time zone identifier is Europe/Oslo. Norway spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Norway observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Norway offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Norway?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Norway is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Norway', item: 'https://whattime.city/norway/' }] }

export default function NorwayTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Norway" subtitle="CET (UTC+1) · Oslo · UTC+1" />
      <NorwayClockClient />
      <CountryFactsSection hubSlug="norway" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Norway & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Norway: Europe/Oslo (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
