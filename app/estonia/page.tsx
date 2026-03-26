import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import EstoniaClockClient from './EstoniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Estonia Now — EET (UTC+2) · Tallinn',
  description: 'What time is it in Estonia right now? Live Tallinn clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in estonia', 'estonia time now', 'what time is it in estonia', 'tallinn time', 'estonia time zone'],
  alternates: { canonical: 'https://whattime.city/estonia/' },
  openGraph: { title: 'Current Time in Estonia — EET · Tallinn', description: 'Live Estonia time. Tallinn on EET (UTC+2).', type: 'website', url: 'https://whattime.city/estonia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Estonia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Estonia uses EET (UTC+2). Tallinn is the capital. The live clock above shows the current local time in Estonia.' } },
    { '@type': 'Question', name: 'What time zone is Tallinn in?', acceptedAnswer: { '@type': 'Answer', text: 'Tallinn uses EET (UTC+2). The IANA time zone identifier is Europe/Tallinn. Estonia spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Estonia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Estonia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Estonia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Estonia is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Estonia', item: 'https://whattime.city/estonia/' }] }

export default function EstoniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Estonia" subtitle="EET (UTC+2) · Tallinn · UTC+2" />
      <EstoniaClockClient />
      <CountryFactsSection hubSlug="estonia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Estonia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Estonia: Europe/Tallinn (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
