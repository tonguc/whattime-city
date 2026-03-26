import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import VaticanCityClockClient from './VaticanCityClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Vatican City Now — CET (UTC+1) · Vatican City',
  description: 'What time is it in Vatican City right now? Live Vatican City clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in vatican city', 'vatican city time now', 'what time is it in vatican city', 'vatican city time', 'vatican city time zone'],
  alternates: { canonical: 'https://whattime.city/vatican-city/' },
  openGraph: { title: 'Current Time in Vatican City — CET · Vatican City', description: 'Live Vatican City time. Vatican City on CET (UTC+1).', type: 'website', url: 'https://whattime.city/vatican-city/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Vatican City right now?', acceptedAnswer: { '@type': 'Answer', text: 'Vatican City uses CET (UTC+1). Vatican City is the capital. The live clock above shows the current local time in Vatican City.' } },
    { '@type': 'Question', name: 'What time zone is Vatican City in?', acceptedAnswer: { '@type': 'Answer', text: 'Vatican City uses CET (UTC+1). The IANA time zone identifier is Europe/Vatican. Vatican City spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Vatican City observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Vatican City observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October, following Italian time. Outside DST, Vatican City uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Vatican City?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Vatican City is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Vatican City', item: 'https://whattime.city/vatican-city/' }] }

export default function VaticanCityTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Vatican City" subtitle="CET (UTC+1) · Vatican City · UTC+1" />
      <VaticanCityClockClient />
      <CountryFactsSection hubSlug="vatican-city" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Vatican City & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Vatican City: Europe/Vatican (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
