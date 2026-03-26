import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BelgiumClockClient from './BelgiumClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Belgium Now — CET (UTC+1) · Brussels',
  description: 'What time is it in Belgium right now? Live Brussels clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in belgium', 'belgium time now', 'what time is it in belgium', 'brussels time', 'belgium time zone'],
  alternates: { canonical: 'https://whattime.city/belgium/' },
  openGraph: { title: 'Current Time in Belgium — CET · Brussels', description: 'Live Belgium time. Brussels on CET (UTC+1).', type: 'website', url: 'https://whattime.city/belgium/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Belgium right now?', acceptedAnswer: { '@type': 'Answer', text: 'Belgium uses CET (UTC+1). Brussels is the capital. The live clock above shows the current local time in Belgium.' } },
    { '@type': 'Question', name: 'What time zone is Brussels in?', acceptedAnswer: { '@type': 'Answer', text: 'Brussels uses CET (UTC+1). The IANA time zone identifier is Europe/Brussels. Belgium spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Belgium observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Belgium offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Belgium?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Belgium is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Belgium', item: 'https://whattime.city/belgium/' }] }

export default function BelgiumTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Belgium" subtitle="CET (UTC+1) · Brussels · UTC+1" />
      <BelgiumClockClient />
      <CountryFactsSection hubSlug="belgium" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Belgium & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Belgium: Europe/Brussels (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
