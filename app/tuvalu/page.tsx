import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TuvaluClockClient from './TuvaluClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Tuvalu Now — TVT (UTC+12) · Funafuti',
  description: 'What time is it in Tuvalu right now? Live Funafuti clock, time zone info (TVT (UTC+12)), best time to call, and time difference with major cities.',
  keywords: ['time in tuvalu', 'tuvalu time now', 'what time is it in tuvalu', 'funafuti time', 'tuvalu time zone'],
  alternates: { canonical: 'https://whattime.city/tuvalu/' },
  openGraph: { title: 'Current Time in Tuvalu — TVT · Funafuti', description: 'Live Tuvalu time. Funafuti on TVT (UTC+12).', type: 'website', url: 'https://whattime.city/tuvalu/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Tuvalu right now?', acceptedAnswer: { '@type': 'Answer', text: 'Tuvalu uses TVT (UTC+12). Funafuti is the capital. The live clock above shows the current local time in Tuvalu.' } },
    { '@type': 'Question', name: 'What time zone is Funafuti in?', acceptedAnswer: { '@type': 'Answer', text: 'Funafuti uses TVT (UTC+12). The IANA time zone identifier is Pacific/Funafuti. ' } },
    { '@type': 'Question', name: 'Does Tuvalu observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Tuvalu does not observe Daylight Saving Time. Tuvalu uses Tuvalu Time (TVT, UTC+12) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Tuvalu?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Tuvalu is during local business hours: Monday–Friday, 9 AM–5 PM TVT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Tuvalu', item: 'https://whattime.city/tuvalu/' }] }

export default function TuvaluTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Tuvalu" subtitle="TVT (UTC+12) · Funafuti · UTC+12" />
      <TuvaluClockClient />
      <CountryFactsSection hubSlug="tuvalu" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Tuvalu & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Tuvalu: Pacific/Funafuti (TVT (UTC+12))."
      />
    </ContentPageWrapper>
  )
}
