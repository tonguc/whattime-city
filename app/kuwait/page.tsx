import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import KuwaitClockClient from './KuwaitClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Kuwait Now — AST (UTC+3) · Kuwait City',
  description: 'What time is it in Kuwait right now? Live Kuwait City clock, time zone info (AST (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in kuwait', 'kuwait time now', 'what time is it in kuwait', 'kuwait city time', 'kuwait time zone'],
  alternates: { canonical: 'https://whattime.city/kuwait/' },
  openGraph: { title: 'Current Time in Kuwait — AST · Kuwait City', description: 'Live Kuwait time. Kuwait City on AST (UTC+3).', type: 'website', url: 'https://whattime.city/kuwait/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kuwait right now?', acceptedAnswer: { '@type': 'Answer', text: 'Kuwait uses AST (UTC+3). Kuwait City is the capital. The live clock above shows the current local time in Kuwait.' } },
    { '@type': 'Question', name: 'What time zone is Kuwait City in?', acceptedAnswer: { '@type': 'Answer', text: 'Kuwait City uses AST (UTC+3). The IANA time zone identifier is Asia/Kuwait. ' } },
    { '@type': 'Question', name: 'Does Kuwait observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Kuwait does not observe Daylight Saving Time. Kuwait uses Arabia Standard Time (AST, UTC+3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Kuwait?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Kuwait is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kuwait', item: 'https://whattime.city/kuwait/' }] }

export default function KuwaitTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Kuwait" subtitle="AST (UTC+3) · Kuwait City · UTC+3" />
      <KuwaitClockClient />
      <CountryFactsSection hubSlug="kuwait" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Kuwait & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Kuwait: Asia/Kuwait (AST (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
