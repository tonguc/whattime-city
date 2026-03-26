import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MicronesiaClockClient from './MicronesiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Micronesia Now — CHUT (UTC+10) · Palikir',
  description: 'What time is it in Micronesia right now? Live Palikir clock, time zone info (CHUT (UTC+10)), best time to call, and time difference with major cities.',
  keywords: ['time in micronesia', 'micronesia time now', 'what time is it in micronesia', 'palikir time', 'micronesia time zone'],
  alternates: { canonical: 'https://whattime.city/micronesia/' },
  openGraph: { title: 'Current Time in Micronesia — CHUT · Palikir', description: 'Live Micronesia time. Palikir on CHUT (UTC+10).', type: 'website', url: 'https://whattime.city/micronesia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Micronesia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Micronesia uses CHUT (UTC+10). Palikir is the capital. The live clock above shows the current local time in Micronesia.' } },
    { '@type': 'Question', name: 'What time zone is Palikir in?', acceptedAnswer: { '@type': 'Answer', text: 'Palikir uses CHUT (UTC+10). The IANA time zone identifier is Pacific/Pohnpei. Micronesia spans multiple time zones: CHUT (UTC+10), PONT (UTC+11).' } },
    { '@type': 'Question', name: 'Does Micronesia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Micronesia does not observe Daylight Saving Time. Micronesia uses Chuuk Time (CHUT, UTC+10) or Pohnpei/Kosrae Time (UTC+11) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Micronesia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Micronesia is during local business hours: Monday–Friday, 9 AM–5 PM CHUT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Micronesia', item: 'https://whattime.city/micronesia/' }] }

export default function MicronesiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Micronesia" subtitle="CHUT (UTC+10) · Palikir · UTC+10" />
      <MicronesiaClockClient />
      <CountryFactsSection hubSlug="micronesia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Micronesia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Micronesia: Pacific/Pohnpei (CHUT (UTC+10))."
      />
    </ContentPageWrapper>
  )
}
