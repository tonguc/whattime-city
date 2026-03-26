import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SwitzerlandClockClient from './SwitzerlandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Switzerland Now — CET (UTC+1) · Bern',
  description: 'What time is it in Switzerland right now? Live Bern clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in switzerland', 'switzerland time now', 'what time is it in switzerland', 'bern time', 'switzerland time zone'],
  alternates: { canonical: 'https://whattime.city/switzerland/' },
  openGraph: { title: 'Current Time in Switzerland — CET · Bern', description: 'Live Switzerland time. Bern on CET (UTC+1).', type: 'website', url: 'https://whattime.city/switzerland/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Switzerland right now?', acceptedAnswer: { '@type': 'Answer', text: 'Switzerland uses CET (UTC+1). Bern is the capital. The live clock above shows the current local time in Switzerland.' } },
    { '@type': 'Question', name: 'What time zone is Bern in?', acceptedAnswer: { '@type': 'Answer', text: 'Bern uses CET (UTC+1). The IANA time zone identifier is Europe/Zurich. Switzerland spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Switzerland observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Switzerland offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Switzerland?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Switzerland is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Switzerland', item: 'https://whattime.city/switzerland/' }] }

export default function SwitzerlandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Switzerland" subtitle="CET (UTC+1) · Bern · UTC+1" />
      <SwitzerlandClockClient />
      <CountryFactsSection hubSlug="switzerland" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Switzerland & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Switzerland: Europe/Zurich (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
