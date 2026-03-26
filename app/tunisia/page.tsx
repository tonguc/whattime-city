import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TunisiaClockClient from './TunisiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Tunisia Now — CET (UTC+1) · Tunis',
  description: 'What time is it in Tunisia right now? Live Tunis clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in tunisia', 'tunisia time now', 'what time is it in tunisia', 'tunis time', 'tunisia time zone'],
  alternates: { canonical: 'https://whattime.city/tunisia/' },
  openGraph: { title: 'Current Time in Tunisia — CET · Tunis', description: 'Live Tunisia time. Tunis on CET (UTC+1).', type: 'website', url: 'https://whattime.city/tunisia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Tunisia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Tunisia uses CET (UTC+1). Tunis is the capital. The live clock above shows the current local time in Tunisia.' } },
    { '@type': 'Question', name: 'What time zone is Tunis in?', acceptedAnswer: { '@type': 'Answer', text: 'Tunis uses CET (UTC+1). The IANA time zone identifier is Africa/Tunis. ' } },
    { '@type': 'Question', name: 'Does Tunisia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Tunisia does not observe Daylight Saving Time. Tunisia uses Central European Time (CET, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Tunisia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Tunisia is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Tunisia', item: 'https://whattime.city/tunisia/' }] }

export default function TunisiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Tunisia" subtitle="CET (UTC+1) · Tunis · UTC+1" />
      <TunisiaClockClient />
      <CountryFactsSection hubSlug="tunisia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Tunisia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Tunisia: Africa/Tunis (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
