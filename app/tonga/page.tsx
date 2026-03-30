import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TongaClockClient from './TongaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Tonga Now — TOT (UTC+13)',
  description: 'What time is it in Tonga right now? Live Nukuʻalofa clock, time zone info (TOT (UTC+13)), best time to call, and time difference with major cities.',
  keywords: ['time in tonga', 'tonga time now', 'what time is it in tonga', 'nukuʻalofa time', 'tonga time zone'],
  alternates: { canonical: 'https://whattime.city/tonga/' },
  openGraph: { title: 'Current Time in Tonga — TOT · Nukuʻalofa', description: 'Live Tonga time. Nukuʻalofa on TOT (UTC+13).', type: 'website', url: 'https://whattime.city/tonga/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Tonga right now?', acceptedAnswer: { '@type': 'Answer', text: 'Tonga uses TOT (UTC+13). Nukuʻalofa is the capital. The live clock above shows the current local time in Tonga.' } },
    { '@type': 'Question', name: 'What time zone is Nukuʻalofa in?', acceptedAnswer: { '@type': 'Answer', text: 'Nukuʻalofa uses TOT (UTC+13). The IANA time zone identifier is Pacific/Tongatapu. ' } },
    { '@type': 'Question', name: 'Does Tonga observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Tonga does not observe Daylight Saving Time. Tonga uses Tonga Time (TOT, UTC+13) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Tonga?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Tonga is during local business hours: Monday–Friday, 9 AM–5 PM TOT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Tonga', item: 'https://whattime.city/tonga/' }] }

export default function TongaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Tonga" subtitle="TOT (UTC+13) · Nukuʻalofa · UTC+13" />
      <TongaClockClient />
      <CountryFactsSection hubSlug="tonga" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Tonga & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Tonga: Pacific/Tongatapu (TOT (UTC+13))."
      />
    </ContentPageWrapper>
  )
}
