import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GeorgiaClockClient from './GeorgiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Georgia Now — GET (UTC+4) · Tbilisi',
  description: 'What time is it in Georgia right now? Live Tbilisi clock, time zone info (GET (UTC+4)), best time to call, and time difference with major cities.',
  keywords: ['time in georgia', 'georgia time now', 'what time is it in georgia', 'tbilisi time', 'georgia time zone'],
  alternates: { canonical: 'https://whattime.city/georgia/' },
  openGraph: { title: 'Current Time in Georgia — GET · Tbilisi', description: 'Live Georgia time. Tbilisi on GET (UTC+4).', type: 'website', url: 'https://whattime.city/georgia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Georgia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Georgia uses GET (UTC+4). Tbilisi is the capital. The live clock above shows the current local time in Georgia.' } },
    { '@type': 'Question', name: 'What time zone is Tbilisi in?', acceptedAnswer: { '@type': 'Answer', text: 'Tbilisi uses GET (UTC+4). The IANA time zone identifier is Asia/Tbilisi. ' } },
    { '@type': 'Question', name: 'Does Georgia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Georgia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Georgia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Georgia is during local business hours: Monday–Friday, 9 AM–5 PM GET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Georgia', item: 'https://whattime.city/georgia/' }] }

export default function GeorgiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Georgia" subtitle="GET (UTC+4) · Tbilisi · UTC+4" />
      <GeorgiaClockClient />
      <CountryFactsSection hubSlug="georgia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Georgia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Georgia: Asia/Tbilisi (GET (UTC+4))."
      />
    </ContentPageWrapper>
  )
}
