import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BarbadosClockClient from './BarbadosClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Barbados Now — AST (UTC-4) · Bridgetown',
  description: 'What time is it in Barbados right now? Live Bridgetown clock, time zone info (AST (UTC-4)), best time to call, and time difference with major cities.',
  keywords: ['time in barbados', 'barbados time now', 'what time is it in barbados', 'bridgetown time', 'barbados time zone'],
  alternates: { canonical: 'https://whattime.city/barbados/' },
  openGraph: { title: 'Current Time in Barbados — AST · Bridgetown', description: 'Live Barbados time. Bridgetown on AST (UTC-4).', type: 'website', url: 'https://whattime.city/barbados/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Barbados right now?', acceptedAnswer: { '@type': 'Answer', text: 'Barbados uses AST (UTC-4). Bridgetown is the capital. The live clock above shows the current local time in Barbados.' } },
    { '@type': 'Question', name: 'What time zone is Bridgetown in?', acceptedAnswer: { '@type': 'Answer', text: 'Bridgetown uses AST (UTC-4). The IANA time zone identifier is America/Barbados. ' } },
    { '@type': 'Question', name: 'Does Barbados observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Barbados does not observe Daylight Saving Time. Barbados uses Atlantic Standard Time (AST, UTC-4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Barbados?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Barbados is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Barbados', item: 'https://whattime.city/barbados/' }] }

export default function BarbadosTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Barbados" subtitle="AST (UTC-4) · Bridgetown · UTC-4" />
      <BarbadosClockClient />
      <CountryFactsSection hubSlug="barbados" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Barbados & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Barbados: America/Barbados (AST (UTC-4))."
      />
    </ContentPageWrapper>
  )
}
