import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ParaguayClockClient from './ParaguayClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Paraguay Now — PYT (UTC-4) · Asunción',
  description: 'What time is it in Paraguay right now? Live Asunción clock, time zone info (PYT (UTC-4)), best time to call, and time difference with major cities.',
  keywords: ['time in paraguay', 'paraguay time now', 'what time is it in paraguay', 'asunción time', 'paraguay time zone'],
  alternates: { canonical: 'https://whattime.city/paraguay/' },
  openGraph: { title: 'Current Time in Paraguay — PYT · Asunción', description: 'Live Paraguay time. Asunción on PYT (UTC-4).', type: 'website', url: 'https://whattime.city/paraguay/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Paraguay right now?', acceptedAnswer: { '@type': 'Answer', text: 'Paraguay uses PYT (UTC-4). Asunción is the capital. The live clock above shows the current local time in Paraguay.' } },
    { '@type': 'Question', name: 'What time zone is Asunción in?', acceptedAnswer: { '@type': 'Answer', text: 'Asunción uses PYT (UTC-4). The IANA time zone identifier is America/Asuncion. Paraguay spans multiple time zones: PYT (UTC-4), PYST (UTC-3).' } },
    { '@type': 'Question', name: 'Does Paraguay observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Paraguay observes Daylight Saving Time (PYST, UTC-3) from the first Sunday in October to the fourth Sunday in March (Southern Hemisphere summer). Outside DST, Paraguay uses PYT (UTC-4).' } },
    { '@type': 'Question', name: 'What is the best time to call Paraguay?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Paraguay is during local business hours: Monday–Friday, 9 AM–5 PM PYT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Paraguay', item: 'https://whattime.city/paraguay/' }] }

export default function ParaguayTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Paraguay" subtitle="PYT (UTC-4) · Asunción · UTC-4" />
      <ParaguayClockClient />
      <CountryFactsSection hubSlug="paraguay" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Paraguay & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Paraguay: America/Asuncion (PYT (UTC-4))."
      />
    </ContentPageWrapper>
  )
}
