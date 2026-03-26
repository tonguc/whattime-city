import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IraqClockClient from './IraqClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Iraq Now — AST (UTC+3) · Baghdad',
  description: 'What time is it in Iraq right now? Live Baghdad clock, time zone info (AST (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in iraq', 'iraq time now', 'what time is it in iraq', 'baghdad time', 'iraq time zone'],
  alternates: { canonical: 'https://whattime.city/iraq/' },
  openGraph: { title: 'Current Time in Iraq — AST · Baghdad', description: 'Live Iraq time. Baghdad on AST (UTC+3).', type: 'website', url: 'https://whattime.city/iraq/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Iraq right now?', acceptedAnswer: { '@type': 'Answer', text: 'Iraq uses AST (UTC+3). Baghdad is the capital. The live clock above shows the current local time in Iraq.' } },
    { '@type': 'Question', name: 'What time zone is Baghdad in?', acceptedAnswer: { '@type': 'Answer', text: 'Baghdad uses AST (UTC+3). The IANA time zone identifier is Asia/Baghdad. ' } },
    { '@type': 'Question', name: 'Does Iraq observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Iraq offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Iraq?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Iraq is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Iraq', item: 'https://whattime.city/iraq/' }] }

export default function IraqTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Iraq" subtitle="AST (UTC+3) · Baghdad · UTC+3" />
      <IraqClockClient />
      <CountryFactsSection hubSlug="iraq" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Iraq & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Iraq: Asia/Baghdad (AST (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
