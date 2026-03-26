import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NicaraguaClockClient from './NicaraguaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Nicaragua Now — CST (UTC-6) · Managua',
  description: 'What time is it in Nicaragua right now? Live Managua clock, time zone info (CST (UTC-6)), best time to call, and time difference with major cities.',
  keywords: ['time in nicaragua', 'nicaragua time now', 'what time is it in nicaragua', 'managua time', 'nicaragua time zone'],
  alternates: { canonical: 'https://whattime.city/nicaragua/' },
  openGraph: { title: 'Current Time in Nicaragua — CST · Managua', description: 'Live Nicaragua time. Managua on CST (UTC-6).', type: 'website', url: 'https://whattime.city/nicaragua/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Nicaragua right now?', acceptedAnswer: { '@type': 'Answer', text: 'Nicaragua uses CST (UTC-6). Managua is the capital. The live clock above shows the current local time in Nicaragua.' } },
    { '@type': 'Question', name: 'What time zone is Managua in?', acceptedAnswer: { '@type': 'Answer', text: 'Managua uses CST (UTC-6). The IANA time zone identifier is America/Managua. ' } },
    { '@type': 'Question', name: 'Does Nicaragua observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Nicaragua does not observe Daylight Saving Time. Nicaragua uses Central Standard Time (CST, UTC-6) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Nicaragua?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Nicaragua is during local business hours: Monday–Friday, 9 AM–5 PM CST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Nicaragua', item: 'https://whattime.city/nicaragua/' }] }

export default function NicaraguaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Nicaragua" subtitle="CST (UTC-6) · Managua · UTC-6" />
      <NicaraguaClockClient />
      <CountryFactsSection hubSlug="nicaragua" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Nicaragua & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Nicaragua: America/Managua (CST (UTC-6))."
      />
    </ContentPageWrapper>
  )
}
