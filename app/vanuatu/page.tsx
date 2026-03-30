import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import VanuatuClockClient from './VanuatuClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Vanuatu Now — VUT (UTC+11)',
  description: 'What time is it in Vanuatu right now? Live Port Vila clock, time zone info (VUT (UTC+11)), best time to call, and time difference with major cities.',
  keywords: ['time in vanuatu', 'vanuatu time now', 'what time is it in vanuatu', 'port vila time', 'vanuatu time zone'],
  alternates: { canonical: 'https://whattime.city/vanuatu/' },
  openGraph: { title: 'Current Time in Vanuatu — VUT · Port Vila', description: 'Live Vanuatu time. Port Vila on VUT (UTC+11).', type: 'website', url: 'https://whattime.city/vanuatu/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Vanuatu right now?', acceptedAnswer: { '@type': 'Answer', text: 'Vanuatu uses VUT (UTC+11). Port Vila is the capital. The live clock above shows the current local time in Vanuatu.' } },
    { '@type': 'Question', name: 'What time zone is Port Vila in?', acceptedAnswer: { '@type': 'Answer', text: 'Port Vila uses VUT (UTC+11). The IANA time zone identifier is Pacific/Efate. ' } },
    { '@type': 'Question', name: 'Does Vanuatu observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Vanuatu does not observe Daylight Saving Time. Vanuatu uses Vanuatu Time (VUT, UTC+11) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Vanuatu?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Vanuatu is during local business hours: Monday–Friday, 9 AM–5 PM VUT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Vanuatu', item: 'https://whattime.city/vanuatu/' }] }

export default function VanuatuTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Vanuatu" subtitle="VUT (UTC+11) · Port Vila · UTC+11" />
      <VanuatuClockClient />
      <CountryFactsSection hubSlug="vanuatu" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Vanuatu & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Vanuatu: Pacific/Efate (VUT (UTC+11))."
      />
    </ContentPageWrapper>
  )
}
