import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GuyanaClockClient from './GuyanaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Guyana Now — GYT (UTC-4) · Georgetown',
  description: 'What time is it in Guyana right now? Live Georgetown clock, time zone info (GYT (UTC-4)), best time to call, and time difference with major cities.',
  keywords: ['time in guyana', 'guyana time now', 'what time is it in guyana', 'georgetown time', 'guyana time zone'],
  alternates: { canonical: 'https://whattime.city/guyana/' },
  openGraph: { title: 'Current Time in Guyana — GYT · Georgetown', description: 'Live Guyana time. Georgetown on GYT (UTC-4).', type: 'website', url: 'https://whattime.city/guyana/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Guyana right now?', acceptedAnswer: { '@type': 'Answer', text: 'Guyana uses GYT (UTC-4). Georgetown is the capital. The live clock above shows the current local time in Guyana.' } },
    { '@type': 'Question', name: 'What time zone is Georgetown in?', acceptedAnswer: { '@type': 'Answer', text: 'Georgetown uses GYT (UTC-4). The IANA time zone identifier is America/Guyana. ' } },
    { '@type': 'Question', name: 'Does Guyana observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Guyana does not observe Daylight Saving Time. Guyana uses Guyana Time (GYT, UTC-4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Guyana?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Guyana is during local business hours: Monday–Friday, 9 AM–5 PM GYT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Guyana', item: 'https://whattime.city/guyana/' }] }

export default function GuyanaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Guyana" subtitle="GYT (UTC-4) · Georgetown · UTC-4" />
      <GuyanaClockClient />
      <CountryFactsSection hubSlug="guyana" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Guyana & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Guyana: America/Guyana (GYT (UTC-4))."
      />
    </ContentPageWrapper>
  )
}
