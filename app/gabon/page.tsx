import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GabonClockClient from './GabonClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Gabon Now — WAT (UTC+1) · Libreville',
  description: 'What time is it in Gabon right now? Live Libreville clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in gabon', 'gabon time now', 'what time is it in gabon', 'libreville time', 'gabon time zone'],
  alternates: { canonical: 'https://whattime.city/gabon/' },
  openGraph: { title: 'Current Time in Gabon — WAT · Libreville', description: 'Live Gabon time. Libreville on WAT (UTC+1).', type: 'website', url: 'https://whattime.city/gabon/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Gabon right now?', acceptedAnswer: { '@type': 'Answer', text: 'Gabon uses WAT (UTC+1). Libreville is the capital. The live clock above shows the current local time in Gabon.' } },
    { '@type': 'Question', name: 'What time zone is Libreville in?', acceptedAnswer: { '@type': 'Answer', text: 'Libreville uses WAT (UTC+1). The IANA time zone identifier is Africa/Libreville. ' } },
    { '@type': 'Question', name: 'Does Gabon observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Gabon does not observe Daylight Saving Time. Gabon uses West Africa Time (WAT, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Gabon?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Gabon is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Gabon', item: 'https://whattime.city/gabon/' }] }

export default function GabonTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Gabon" subtitle="WAT (UTC+1) · Libreville · UTC+1" />
      <GabonClockClient />
      <CountryFactsSection hubSlug="gabon" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Gabon & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Gabon: Africa/Libreville (WAT (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
