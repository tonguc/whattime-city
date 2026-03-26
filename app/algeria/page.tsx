import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AlgeriaClockClient from './AlgeriaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Algeria Now — CET (UTC+1) · Algiers',
  description: 'What time is it in Algeria right now? Live Algiers clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in algeria', 'algeria time now', 'what time is it in algeria', 'algiers time', 'algeria time zone'],
  alternates: { canonical: 'https://whattime.city/algeria/' },
  openGraph: { title: 'Current Time in Algeria — CET · Algiers', description: 'Live Algeria time. Algiers on CET (UTC+1).', type: 'website', url: 'https://whattime.city/algeria/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Algeria right now?', acceptedAnswer: { '@type': 'Answer', text: 'Algeria uses CET (UTC+1). Algiers is the capital. The live clock above shows the current local time in Algeria.' } },
    { '@type': 'Question', name: 'What time zone is Algiers in?', acceptedAnswer: { '@type': 'Answer', text: 'Algiers uses CET (UTC+1). The IANA time zone identifier is Africa/Algiers. ' } },
    { '@type': 'Question', name: 'Does Algeria observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Algeria does not observe Daylight Saving Time. Algeria uses Central European Time (CET, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Algeria?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Algeria is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Algeria', item: 'https://whattime.city/algeria/' }] }

export default function AlgeriaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Algeria" subtitle="CET (UTC+1) · Algiers · UTC+1" />
      <AlgeriaClockClient />
      <CountryFactsSection hubSlug="algeria" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Algeria & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Algeria: Africa/Algiers (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
