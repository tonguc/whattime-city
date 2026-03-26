import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BurundiClockClient from './BurundiClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Burundi Now — CAT (UTC+2) · Gitega',
  description: 'What time is it in Burundi right now? Live Gitega clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in burundi', 'burundi time now', 'what time is it in burundi', 'gitega time', 'burundi time zone'],
  alternates: { canonical: 'https://whattime.city/burundi/' },
  openGraph: { title: 'Current Time in Burundi — CAT · Gitega', description: 'Live Burundi time. Gitega on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/burundi/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Burundi right now?', acceptedAnswer: { '@type': 'Answer', text: 'Burundi uses CAT (UTC+2). Gitega is the capital. The live clock above shows the current local time in Burundi.' } },
    { '@type': 'Question', name: 'What time zone is Gitega in?', acceptedAnswer: { '@type': 'Answer', text: 'Gitega uses CAT (UTC+2). The IANA time zone identifier is Africa/Bujumbura. ' } },
    { '@type': 'Question', name: 'Does Burundi observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Burundi does not observe Daylight Saving Time. Burundi uses Central Africa Time (CAT, UTC+2) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Burundi?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Burundi is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Burundi', item: 'https://whattime.city/burundi/' }] }

export default function BurundiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Burundi" subtitle="CAT (UTC+2) · Gitega · UTC+2" />
      <BurundiClockClient />
      <CountryFactsSection hubSlug="burundi" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Burundi & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Burundi: Africa/Bujumbura (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
