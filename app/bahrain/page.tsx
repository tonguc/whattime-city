import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BahrainClockClient from './BahrainClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Bahrain Now — AST (UTC+3) · Manama',
  description: 'What time is it in Bahrain right now? Live Manama clock, time zone info (AST (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in bahrain', 'bahrain time now', 'what time is it in bahrain', 'manama time', 'bahrain time zone'],
  alternates: { canonical: 'https://whattime.city/bahrain/' },
  openGraph: { title: 'Current Time in Bahrain — AST · Manama', description: 'Live Bahrain time. Manama on AST (UTC+3).', type: 'website', url: 'https://whattime.city/bahrain/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bahrain right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bahrain uses AST (UTC+3). Manama is the capital. The live clock above shows the current local time in Bahrain.' } },
    { '@type': 'Question', name: 'What time zone is Manama in?', acceptedAnswer: { '@type': 'Answer', text: 'Manama uses AST (UTC+3). The IANA time zone identifier is Asia/Bahrain. ' } },
    { '@type': 'Question', name: 'Does Bahrain observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Bahrain offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Bahrain?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Bahrain is during local business hours: Monday–Friday, 9 AM–5 PM AST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bahrain', item: 'https://whattime.city/bahrain/' }] }

export default function BahrainTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Bahrain" subtitle="AST (UTC+3) · Manama · UTC+3" />
      <BahrainClockClient />
      <CountryFactsSection hubSlug="bahrain" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Bahrain & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Bahrain: Asia/Bahrain (AST (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
