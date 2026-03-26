import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AlbaniaClockClient from './AlbaniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Albania Now — CET (UTC+1) · Tirana',
  description: 'What time is it in Albania right now? Live Tirana clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in albania', 'albania time now', 'what time is it in albania', 'tirana time', 'albania time zone'],
  alternates: { canonical: 'https://whattime.city/albania/' },
  openGraph: { title: 'Current Time in Albania — CET · Tirana', description: 'Live Albania time. Tirana on CET (UTC+1).', type: 'website', url: 'https://whattime.city/albania/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Albania right now?', acceptedAnswer: { '@type': 'Answer', text: 'Albania uses CET (UTC+1). Tirana is the capital. The live clock above shows the current local time in Albania.' } },
    { '@type': 'Question', name: 'What time zone is Tirana in?', acceptedAnswer: { '@type': 'Answer', text: 'Tirana uses CET (UTC+1). The IANA time zone identifier is Europe/Tirane. Albania spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Albania observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Albania observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, Albania uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Albania?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Albania is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Albania', item: 'https://whattime.city/albania/' }] }

export default function AlbaniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Albania" subtitle="CET (UTC+1) · Tirana · UTC+1" />
      <AlbaniaClockClient />
      <CountryFactsSection hubSlug="albania" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Albania & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Albania: Europe/Tirane (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
