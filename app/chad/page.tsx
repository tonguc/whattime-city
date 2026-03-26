import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ChadClockClient from './ChadClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: "Time in Chad Now — WAT (UTC+1) · N'Djamena",
  description: "What time is it in Chad right now? Live N'Djamena clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.",
  keywords: ['time in chad', 'chad time now', 'what time is it in chad', 'ndjamena time', 'chad time zone'],
  alternates: { canonical: 'https://whattime.city/chad/' },
  openGraph: { title: "Current Time in Chad — WAT · N'Djamena", description: 'Live Chad time. WAT (UTC+1).', type: 'website', url: 'https://whattime.city/chad/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Chad right now?', acceptedAnswer: { '@type': 'Answer', text: "Chad uses WAT (UTC+1). N'Djamena is the capital. The live clock above shows the current local time in Chad." } },
    { '@type': 'Question', name: "What time zone is N'Djamena in?", acceptedAnswer: { '@type': 'Answer', text: "N'Djamena uses WAT (UTC+1). The IANA time zone identifier is Africa/Ndjamena." } },
    { '@type': 'Question', name: 'Does Chad observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Chad does not observe Daylight Saving Time. The UTC+1 offset stays fixed year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Chad?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Chad is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Chad', item: 'https://whattime.city/chad/' }] }

export default function ChadTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Chad" subtitle="WAT (UTC+1) · N'Djamena" />
      <ChadClockClient />
      <CountryFactsSection hubSlug="chad" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Time in Nigeria', href: '/nigeria/' }, { label: 'Time in Egypt', href: '/egypt/' }, { label: 'Time in Kenya', href: '/kenya/' }, { label: 'Time in South Africa', href: '/south-africa/' }, { label: 'Cairo time', href: '/cairo/' }, { label: 'London time', href: '/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Chad & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Chad: Africa/Ndjamena (WAT UTC+1)."
      />
    </ContentPageWrapper>
  )
}
