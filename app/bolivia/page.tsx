import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BoliviaClockClient from './BoliviaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Bolivia Now — BOT (UTC-4) · Sucre',
  description: 'What time is it in Bolivia right now? Live Sucre clock, time zone info (BOT (UTC-4)), best time to call, and time difference with major cities.',
  keywords: ['time in bolivia', 'bolivia time now', 'what time is it in bolivia', 'sucre time', 'bolivia time zone'],
  alternates: { canonical: 'https://whattime.city/bolivia/' },
  openGraph: { title: 'Current Time in Bolivia — BOT · Sucre', description: 'Live Bolivia time. Sucre on BOT (UTC-4).', type: 'website', url: 'https://whattime.city/bolivia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bolivia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bolivia uses BOT (UTC-4). Sucre is the capital. The live clock above shows the current local time in Bolivia.' } },
    { '@type': 'Question', name: 'What time zone is Sucre in?', acceptedAnswer: { '@type': 'Answer', text: 'Sucre uses BOT (UTC-4). The IANA time zone identifier is America/La_Paz. ' } },
    { '@type': 'Question', name: 'Does Bolivia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Bolivia does not observe Daylight Saving Time. Bolivia uses Bolivia Time (BOT, UTC-4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Bolivia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Bolivia is during local business hours: Monday–Friday, 9 AM–5 PM BOT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bolivia', item: 'https://whattime.city/bolivia/' }] }

export default function BoliviaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Bolivia" subtitle="BOT (UTC-4) · Sucre · UTC-4" />
      <BoliviaClockClient />
      <CountryFactsSection hubSlug="bolivia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Bolivia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Bolivia: America/La_Paz (BOT (UTC-4))."
      />
    </ContentPageWrapper>
  )
}
