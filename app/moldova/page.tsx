import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MoldovaClockClient from './MoldovaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Moldova Now — EET (UTC+2) · Chișinău',
  description: 'What time is it in Moldova right now? Live Chișinău clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in moldova', 'moldova time now', 'what time is it in moldova', 'chișinău time', 'moldova time zone'],
  alternates: { canonical: 'https://whattime.city/moldova/' },
  openGraph: { title: 'Current Time in Moldova — EET · Chișinău', description: 'Live Moldova time. Chișinău on EET (UTC+2).', type: 'website', url: 'https://whattime.city/moldova/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Moldova right now?', acceptedAnswer: { '@type': 'Answer', text: 'Moldova uses EET (UTC+2). Chișinău is the capital. The live clock above shows the current local time in Moldova.' } },
    { '@type': 'Question', name: 'What time zone is Chișinău in?', acceptedAnswer: { '@type': 'Answer', text: 'Chișinău uses EET (UTC+2). The IANA time zone identifier is Europe/Chisinau. Moldova spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Moldova observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Moldova offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Moldova?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Moldova is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Moldova', item: 'https://whattime.city/moldova/' }] }

export default function MoldovaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Moldova" subtitle="EET (UTC+2) · Chișinău · UTC+2" />
      <MoldovaClockClient />
      <CountryFactsSection hubSlug="moldova" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Moldova & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Moldova: Europe/Chisinau (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
