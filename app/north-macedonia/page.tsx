import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NorthMacedoniaClockClient from './NorthMacedoniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in North Macedonia Now — CET (UTC+1) · Skopje',
  description: 'What time is it in North Macedonia right now? Live Skopje clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in north macedonia', 'north macedonia time now', 'what time is it in north macedonia', 'skopje time', 'north macedonia time zone'],
  alternates: { canonical: 'https://whattime.city/north-macedonia/' },
  openGraph: { title: 'Current Time in North Macedonia — CET · Skopje', description: 'Live North Macedonia time. Skopje on CET (UTC+1).', type: 'website', url: 'https://whattime.city/north-macedonia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in North Macedonia right now?', acceptedAnswer: { '@type': 'Answer', text: 'North Macedonia uses CET (UTC+1). Skopje is the capital. The live clock above shows the current local time in North Macedonia.' } },
    { '@type': 'Question', name: 'What time zone is Skopje in?', acceptedAnswer: { '@type': 'Answer', text: 'Skopje uses CET (UTC+1). The IANA time zone identifier is Europe/Skopje. North Macedonia spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does North Macedonia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current North Macedonia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call North Macedonia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call North Macedonia is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in North Macedonia', item: 'https://whattime.city/north-macedonia/' }] }

export default function NorthMacedoniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in North Macedonia" subtitle="CET (UTC+1) · Skopje · UTC+1" />
      <NorthMacedoniaClockClient />
      <CountryFactsSection hubSlug="north-macedonia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="North Macedonia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. North Macedonia: Europe/Skopje (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
