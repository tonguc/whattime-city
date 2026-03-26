import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PalauClockClient from './PalauClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Palau Now — PWT (UTC+9) · Ngerulmud',
  description: 'What time is it in Palau right now? Live Ngerulmud clock, time zone info (PWT (UTC+9)), best time to call, and time difference with major cities.',
  keywords: ['time in palau', 'palau time now', 'what time is it in palau', 'ngerulmud time', 'palau time zone'],
  alternates: { canonical: 'https://whattime.city/palau/' },
  openGraph: { title: 'Current Time in Palau — PWT · Ngerulmud', description: 'Live Palau time. Ngerulmud on PWT (UTC+9).', type: 'website', url: 'https://whattime.city/palau/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Palau right now?', acceptedAnswer: { '@type': 'Answer', text: 'Palau uses PWT (UTC+9). Ngerulmud is the capital. The live clock above shows the current local time in Palau.' } },
    { '@type': 'Question', name: 'What time zone is Ngerulmud in?', acceptedAnswer: { '@type': 'Answer', text: 'Ngerulmud uses PWT (UTC+9). The IANA time zone identifier is Pacific/Palau. ' } },
    { '@type': 'Question', name: 'Does Palau observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Palau does not observe Daylight Saving Time. Palau uses Palau Time (PWT, UTC+9) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Palau?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Palau is during local business hours: Monday–Friday, 9 AM–5 PM PWT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Palau', item: 'https://whattime.city/palau/' }] }

export default function PalauTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Palau" subtitle="PWT (UTC+9) · Ngerulmud · UTC+9" />
      <PalauClockClient />
      <CountryFactsSection hubSlug="palau" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Palau & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Palau: Pacific/Palau (PWT (UTC+9))."
      />
    </ContentPageWrapper>
  )
}
