import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PuertoRicoClockClient from './PuertoRicoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Puerto Rico Now — AST (UTC-4) · San Juan',
  description: 'What time is it in Puerto Rico right now? Live San Juan clock, time zone info (AST (UTC-4)), best time to call, and time difference with major cities.',
  keywords: ['time in puerto rico', 'puerto rico time now', 'what time is it in puerto rico', 'san juan time', 'puerto rico time zone'],
  alternates: { canonical: 'https://whattime.city/puerto-rico/' },
  openGraph: { title: 'Current Time in Puerto Rico — AST · San Juan', description: 'Live Puerto Rico time. San Juan on AST (UTC-4).', type: 'website', url: 'https://whattime.city/puerto-rico/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Puerto Rico right now?', acceptedAnswer: { '@type': 'Answer', text: 'Puerto Rico uses AST (UTC-4). San Juan is the capital. The live clock above shows the current local time in Puerto Rico.' } },
    { '@type': 'Question', name: 'What time zone is San Juan in?', acceptedAnswer: { '@type': 'Answer', text: 'San Juan uses AST (UTC-4). The IANA time zone identifier is America/Puerto_Rico. ' } },
    { '@type': 'Question', name: 'Does Puerto Rico observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Puerto Rico offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Puerto Rico?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Puerto Rico is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Puerto Rico', item: 'https://whattime.city/puerto-rico/' }] }

export default function PuertoRicoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Puerto Rico" subtitle="AST (UTC-4) · San Juan · UTC-4" />
      <PuertoRicoClockClient />
      <CountryFactsSection hubSlug="puerto-rico" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Puerto Rico & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Puerto Rico: America/Puerto_Rico (AST (UTC-4))."
      />
    </ContentPageWrapper>
  )
}
