import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SloveniaClockClient from './SloveniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Slovenia Now — CET (UTC+1) · Ljubljana',
  description: 'What time is it in Slovenia right now? Live Ljubljana clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in slovenia', 'slovenia time now', 'what time is it in slovenia', 'ljubljana time', 'slovenia time zone'],
  alternates: { canonical: 'https://whattime.city/slovenia/' },
  openGraph: { title: 'Current Time in Slovenia — CET · Ljubljana', description: 'Live Slovenia time. Ljubljana on CET (UTC+1).', type: 'website', url: 'https://whattime.city/slovenia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Slovenia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Slovenia uses CET (UTC+1). Ljubljana is the capital. The live clock above shows the current local time in Slovenia.' } },
    { '@type': 'Question', name: 'What time zone is Ljubljana in?', acceptedAnswer: { '@type': 'Answer', text: 'Ljubljana uses CET (UTC+1). The IANA time zone identifier is Europe/Ljubljana. Slovenia spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Slovenia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Slovenia observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, Slovenia uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Slovenia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Slovenia is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Slovenia', item: 'https://whattime.city/slovenia/' }] }

export default function SloveniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Slovenia" subtitle="CET (UTC+1) · Ljubljana · UTC+1" />
      <SloveniaClockClient />
      <CountryFactsSection hubSlug="slovenia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Slovenia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Slovenia: Europe/Ljubljana (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
