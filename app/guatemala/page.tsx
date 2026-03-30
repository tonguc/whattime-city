import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GuatemalaClockClient from './GuatemalaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Guatemala Now — CST (UTC−6)',
  description: 'What time is it in Guatemala right now? Live Guatemala City clock, time zone info (CST (UTC-6)), best time to call, and time difference with major cities.',
  keywords: ['time in guatemala', 'guatemala time now', 'what time is it in guatemala', 'guatemala city time', 'guatemala time zone'],
  alternates: { canonical: 'https://whattime.city/guatemala/' },
  openGraph: { title: 'Current Time in Guatemala — CST · Guatemala City', description: 'Live Guatemala time. Guatemala City on CST (UTC-6).', type: 'website', url: 'https://whattime.city/guatemala/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Guatemala right now?', acceptedAnswer: { '@type': 'Answer', text: 'Guatemala uses CST (UTC-6). Guatemala City is the capital. The live clock above shows the current local time in Guatemala.' } },
    { '@type': 'Question', name: 'What time zone is Guatemala City in?', acceptedAnswer: { '@type': 'Answer', text: 'Guatemala City uses CST (UTC-6). The IANA time zone identifier is America/Guatemala. ' } },
    { '@type': 'Question', name: 'Does Guatemala observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Guatemala does not observe Daylight Saving Time. Guatemala uses Central Standard Time (CST, UTC-6) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Guatemala?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Guatemala is during local business hours: Monday–Friday, 9 AM–5 PM CST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Guatemala', item: 'https://whattime.city/guatemala/' }] }

export default function GuatemalaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Guatemala" subtitle="CST (UTC-6) · Guatemala City · UTC-6" />
      <GuatemalaClockClient />
      <CountryFactsSection hubSlug="guatemala" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Guatemala & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Guatemala: America/Guatemala (CST (UTC-6))."
      />
    </ContentPageWrapper>
  )
}
