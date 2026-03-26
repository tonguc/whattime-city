import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import DominicanRepublicClockClient from './DominicanRepublicClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Dominican Republic Now — AST (UTC-4) · Santo Domingo',
  description: 'What time is it in Dominican Republic right now? Live Santo Domingo clock, time zone info (AST (UTC-4)), best time to call, and time difference with major cities.',
  keywords: ['time in dominican republic', 'dominican republic time now', 'what time is it in dominican republic', 'santo domingo time', 'dominican republic time zone'],
  alternates: { canonical: 'https://whattime.city/dominican-republic/' },
  openGraph: { title: 'Current Time in Dominican Republic — AST · Santo Domingo', description: 'Live Dominican Republic time. Santo Domingo on AST (UTC-4).', type: 'website', url: 'https://whattime.city/dominican-republic/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Dominican Republic right now?', acceptedAnswer: { '@type': 'Answer', text: 'Dominican Republic uses AST (UTC-4). Santo Domingo is the capital. The live clock above shows the current local time in Dominican Republic.' } },
    { '@type': 'Question', name: 'What time zone is Santo Domingo in?', acceptedAnswer: { '@type': 'Answer', text: 'Santo Domingo uses AST (UTC-4). The IANA time zone identifier is America/Santo_Domingo. ' } },
    { '@type': 'Question', name: 'Does Dominican Republic observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. The Dominican Republic does not observe Daylight Saving Time. The Dominican Republic uses Atlantic Standard Time (AST, UTC-4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Dominican Republic?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Dominican Republic is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Dominican Republic', item: 'https://whattime.city/dominican-republic/' }] }

export default function DominicanRepublicTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Dominican Republic" subtitle="AST (UTC-4) · Santo Domingo · UTC-4" />
      <DominicanRepublicClockClient />
      <CountryFactsSection hubSlug="dominican-republic" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Dominican Republic & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Dominican Republic: America/Santo_Domingo (AST (UTC-4))."
      />
    </ContentPageWrapper>
  )
}
