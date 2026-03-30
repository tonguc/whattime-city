import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TrinidadAndTobagoClockClient from './TrinidadAndTobagoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Trinidad & Tobago Now — AST (UTC−4)',
  description: 'What time is it in Trinidad and Tobago right now? Live Port of Spain clock, time zone info (AST (UTC-4)), best time to call, and time difference with major cities.',
  keywords: ['time in trinidad and tobago', 'trinidad and tobago time now', 'what time is it in trinidad and tobago', 'port of spain time', 'trinidad and tobago time zone'],
  alternates: { canonical: 'https://whattime.city/trinidad-and-tobago/' },
  openGraph: { title: 'Current Time in Trinidad and Tobago — AST · Port of Spain', description: 'Live Trinidad and Tobago time. Port of Spain on AST (UTC-4).', type: 'website', url: 'https://whattime.city/trinidad-and-tobago/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Trinidad and Tobago right now?', acceptedAnswer: { '@type': 'Answer', text: 'Trinidad and Tobago uses AST (UTC-4). Port of Spain is the capital. The live clock above shows the current local time in Trinidad and Tobago.' } },
    { '@type': 'Question', name: 'What time zone is Port of Spain in?', acceptedAnswer: { '@type': 'Answer', text: 'Port of Spain uses AST (UTC-4). The IANA time zone identifier is America/Port_of_Spain. ' } },
    { '@type': 'Question', name: 'Does Trinidad and Tobago observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Trinidad and Tobago does not observe Daylight Saving Time. Trinidad and Tobago uses Atlantic Standard Time (AST, UTC-4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Trinidad and Tobago?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Trinidad and Tobago is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Trinidad and Tobago', item: 'https://whattime.city/trinidad-and-tobago/' }] }

export default function TrinidadAndTobagoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Trinidad and Tobago" subtitle="AST (UTC-4) · Port of Spain · UTC-4" />
      <TrinidadAndTobagoClockClient />
      <CountryFactsSection hubSlug="trinidad-and-tobago" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Trinidad and Tobago & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Trinidad and Tobago: America/Port_of_Spain (AST (UTC-4))."
      />
    </ContentPageWrapper>
  )
}
