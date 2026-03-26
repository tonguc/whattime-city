import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LesothoClockClient from './LesothoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Lesotho Now — SAST (UTC+2) · Maseru',
  description: 'What time is it in Lesotho right now? Live Maseru clock, time zone info (SAST (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in lesotho', 'lesotho time now', 'what time is it in lesotho', 'maseru time', 'lesotho time zone'],
  alternates: { canonical: 'https://whattime.city/lesotho/' },
  openGraph: { title: 'Current Time in Lesotho — SAST · Maseru', description: 'Live Lesotho time. Maseru on SAST (UTC+2).', type: 'website', url: 'https://whattime.city/lesotho/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Lesotho right now?', acceptedAnswer: { '@type': 'Answer', text: 'Lesotho uses SAST (UTC+2). Maseru is the capital. The live clock above shows the current local time in Lesotho.' } },
    { '@type': 'Question', name: 'What time zone is Maseru in?', acceptedAnswer: { '@type': 'Answer', text: 'Maseru uses SAST (UTC+2). The IANA time zone identifier is Africa/Maseru. ' } },
    { '@type': 'Question', name: 'Does Lesotho observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Lesotho does not observe Daylight Saving Time. Lesotho uses South Africa Standard Time (SAST, UTC+2) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Lesotho?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Lesotho is during local business hours: Monday–Friday, 9 AM–5 PM SAST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Lesotho', item: 'https://whattime.city/lesotho/' }] }

export default function LesothoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Lesotho" subtitle="SAST (UTC+2) · Maseru · UTC+2" />
      <LesothoClockClient />
      <CountryFactsSection hubSlug="lesotho" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Lesotho & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Lesotho: Africa/Maseru (SAST (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
