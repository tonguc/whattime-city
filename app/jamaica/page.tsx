import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import JamaicaClockClient from './JamaicaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Jamaica Now — EST (UTC-5) · Kingston',
  description: 'What time is it in Jamaica right now? Live Kingston clock, time zone info (EST (UTC-5)), best time to call, and time difference with major cities.',
  keywords: ['time in jamaica', 'jamaica time now', 'what time is it in jamaica', 'kingston time', 'jamaica time zone'],
  alternates: { canonical: 'https://whattime.city/jamaica/' },
  openGraph: { title: 'Current Time in Jamaica — EST · Kingston', description: 'Live Jamaica time. Kingston on EST (UTC-5).', type: 'website', url: 'https://whattime.city/jamaica/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Jamaica right now?', acceptedAnswer: { '@type': 'Answer', text: 'Jamaica uses EST (UTC-5). Kingston is the capital. The live clock above shows the current local time in Jamaica.' } },
    { '@type': 'Question', name: 'What time zone is Kingston in?', acceptedAnswer: { '@type': 'Answer', text: 'Kingston uses EST (UTC-5). The IANA time zone identifier is America/Jamaica. ' } },
    { '@type': 'Question', name: 'Does Jamaica observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Jamaica does not observe Daylight Saving Time. Jamaica uses Eastern Standard Time (EST, UTC-5) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Jamaica?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Jamaica is during local business hours: Monday–Friday, 9 AM–5 PM EST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Jamaica', item: 'https://whattime.city/jamaica/' }] }

export default function JamaicaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Jamaica" subtitle="EST (UTC-5) · Kingston · UTC-5" />
      <JamaicaClockClient />
      <CountryFactsSection hubSlug="jamaica" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Jamaica & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Jamaica: America/Jamaica (EST (UTC-5))."
      />
    </ContentPageWrapper>
  )
}
