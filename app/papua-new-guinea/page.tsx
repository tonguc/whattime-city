import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PapuaNewGuineaClockClient from './PapuaNewGuineaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Papua New Guinea — PGT (UTC+10)',
  description: 'What time is it in Papua New Guinea right now? Live Port Moresby clock, time zone info (PGT (UTC+10)), best time to call, and time difference with major cities.',
  keywords: ['time in papua new guinea', 'papua new guinea time now', 'what time is it in papua new guinea', 'port moresby time', 'papua new guinea time zone'],
  alternates: { canonical: 'https://whattime.city/papua-new-guinea/' },
  openGraph: { title: 'Time in Papua New Guinea — PGT (UTC+10)', description: 'Live Papua New Guinea time. Port Moresby on PGT (UTC+10).', type: 'website', url: 'https://whattime.city/papua-new-guinea/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Papua New Guinea right now?', acceptedAnswer: { '@type': 'Answer', text: 'Papua New Guinea uses PGT (UTC+10). Port Moresby is the capital. The live clock above shows the current local time in Papua New Guinea.' } },
    { '@type': 'Question', name: 'What time zone is Port Moresby in?', acceptedAnswer: { '@type': 'Answer', text: 'Port Moresby uses PGT (UTC+10). The IANA time zone identifier is Pacific/Port_Moresby. ' } },
    { '@type': 'Question', name: 'Does Papua New Guinea observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Papua New Guinea does not observe Daylight Saving Time. Papua New Guinea uses Papua New Guinea Time (PGT, UTC+10) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Papua New Guinea?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Papua New Guinea is during local business hours: Monday–Friday, 9 AM–5 PM PGT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Papua New Guinea', item: 'https://whattime.city/papua-new-guinea/' }] }

export default function PapuaNewGuineaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Papua New Guinea" subtitle="PGT (UTC+10) · Port Moresby · UTC+10" />
      <PapuaNewGuineaClockClient />
      <CountryFactsSection hubSlug="papua-new-guinea" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Papua New Guinea & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Papua New Guinea: Pacific/Port_Moresby (PGT (UTC+10))."
      />
    </ContentPageWrapper>
  )
}
