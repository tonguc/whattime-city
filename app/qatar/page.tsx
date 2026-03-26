import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import QatarClockClient from './QatarClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Qatar Now — AST (UTC+3) · Doha',
  description: 'What time is it in Qatar right now? Live Doha clock, time zone info (AST (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in qatar', 'qatar time now', 'what time is it in qatar', 'doha time', 'qatar time zone'],
  alternates: { canonical: 'https://whattime.city/qatar/' },
  openGraph: { title: 'Current Time in Qatar — AST · Doha', description: 'Live Qatar time. Doha on AST (UTC+3).', type: 'website', url: 'https://whattime.city/qatar/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Qatar right now?', acceptedAnswer: { '@type': 'Answer', text: 'Qatar uses AST (UTC+3). Doha is the capital. The live clock above shows the current local time in Qatar.' } },
    { '@type': 'Question', name: 'What time zone is Doha in?', acceptedAnswer: { '@type': 'Answer', text: 'Doha uses AST (UTC+3). The IANA time zone identifier is Asia/Qatar. ' } },
    { '@type': 'Question', name: 'Does Qatar observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Qatar does not observe Daylight Saving Time. Qatar uses Arabia Standard Time (AST, UTC+3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Qatar?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Qatar is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Qatar', item: 'https://whattime.city/qatar/' }] }

export default function QatarTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Qatar" subtitle="AST (UTC+3) · Doha · UTC+3" />
      <QatarClockClient />
      <CountryFactsSection hubSlug="qatar" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Qatar & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Qatar: Asia/Qatar (AST (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
