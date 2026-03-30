import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SriLankaClockClient from './SriLankaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Sri Lanka Now — IST (UTC+5:30)',
  description: 'What time is it in Sri Lanka right now? Live Sri Jayawardenepura Kotte clock, time zone info (IST (UTC+5:30)), best time to call, and time difference with major cities.',
  keywords: ['time in sri lanka', 'sri lanka time now', 'what time is it in sri lanka', 'sri jayawardenepura kotte time', 'sri lanka time zone'],
  alternates: { canonical: 'https://whattime.city/sri-lanka/' },
  openGraph: { title: 'Current Time in Sri Lanka — IST · Sri Jayawardenepura Kotte', description: 'Live Sri Lanka time. Sri Jayawardenepura Kotte on IST (UTC+5:30).', type: 'website', url: 'https://whattime.city/sri-lanka/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Sri Lanka right now?', acceptedAnswer: { '@type': 'Answer', text: 'Sri Lanka uses IST (UTC+5:30). Sri Jayawardenepura Kotte is the capital. The live clock above shows the current local time in Sri Lanka.' } },
    { '@type': 'Question', name: 'What time zone is Sri Jayawardenepura Kotte in?', acceptedAnswer: { '@type': 'Answer', text: 'Sri Jayawardenepura Kotte uses IST (UTC+5:30). The IANA time zone identifier is Asia/Colombo. ' } },
    { '@type': 'Question', name: 'Does Sri Lanka observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Sri Lanka does not observe Daylight Saving Time. Sri Lanka uses India Standard Time (IST, UTC+5:30) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Sri Lanka?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Sri Lanka is during local business hours: Monday–Friday, 9 AM–5 PM IST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Sri Lanka', item: 'https://whattime.city/sri-lanka/' }] }

export default function SriLankaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Sri Lanka" subtitle="IST (UTC+5:30) · Sri Jayawardenepura Kotte · UTC+5:30" />
      <SriLankaClockClient />
      <CountryFactsSection hubSlug="sri-lanka" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Sri Lanka & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Sri Lanka: Asia/Colombo (IST (UTC+5:30))."
      />
    </ContentPageWrapper>
  )
}
