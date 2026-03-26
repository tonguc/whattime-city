import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PanamaClockClient from './PanamaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Panama Now — EST (UTC-5) · Panama City',
  description: 'What time is it in Panama right now? Live Panama City clock, time zone info (EST (UTC-5)), best time to call, and time difference with major cities.',
  keywords: ['time in panama', 'panama time now', 'what time is it in panama', 'panama city time', 'panama time zone'],
  alternates: { canonical: 'https://whattime.city/panama/' },
  openGraph: { title: 'Current Time in Panama — EST · Panama City', description: 'Live Panama time. Panama City on EST (UTC-5).', type: 'website', url: 'https://whattime.city/panama/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Panama right now?', acceptedAnswer: { '@type': 'Answer', text: 'Panama uses EST (UTC-5). Panama City is the capital. The live clock above shows the current local time in Panama.' } },
    { '@type': 'Question', name: 'What time zone is Panama City in?', acceptedAnswer: { '@type': 'Answer', text: 'Panama City uses EST (UTC-5). The IANA time zone identifier is America/Panama. ' } },
    { '@type': 'Question', name: 'Does Panama observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Panama does not observe Daylight Saving Time. Panama uses Eastern Standard Time (EST, UTC-5) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Panama?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Panama is during local business hours: Monday–Friday, 9 AM–5 PM EST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Panama', item: 'https://whattime.city/panama/' }] }

export default function PanamaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Panama" subtitle="EST (UTC-5) · Panama City · UTC-5" />
      <PanamaClockClient />
      <CountryFactsSection hubSlug="panama" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Panama & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Panama: America/Panama (EST (UTC-5))."
      />
    </ContentPageWrapper>
  )
}
