import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import DrCongoClockClient from './DrCongoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in DR Congo Now — WAT (UTC+1)',
  description: 'What time is it in DR Congo right now? Live Kinshasa clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in dr congo', 'dr congo time now', 'what time is it in dr congo', 'kinshasa time', 'dr congo time zone'],
  alternates: { canonical: 'https://whattime.city/dr-congo/' },
  openGraph: { title: 'Current Time in DR Congo — WAT · Kinshasa', description: 'Live DR Congo time. Kinshasa on WAT (UTC+1).', type: 'website', url: 'https://whattime.city/dr-congo/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in DR Congo right now?', acceptedAnswer: { '@type': 'Answer', text: 'DR Congo uses WAT (UTC+1). Kinshasa is the capital. The live clock above shows the current local time in DR Congo.' } },
    { '@type': 'Question', name: 'What time zone is Kinshasa in?', acceptedAnswer: { '@type': 'Answer', text: 'Kinshasa uses WAT (UTC+1). The IANA time zone identifier is Africa/Kinshasa. DR Congo spans multiple time zones: WAT (UTC+1), CAT (UTC+2).' } },
    { '@type': 'Question', name: 'Does DR Congo observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. The Democratic Republic of Congo does not observe Daylight Saving Time. Most of the DRC uses West Africa Time (WAT, UTC+1) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call DR Congo?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call DR Congo is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in DR Congo', item: 'https://whattime.city/dr-congo/' }] }

export default function DrCongoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in DR Congo" subtitle="WAT (UTC+1) · Kinshasa · UTC+1" />
      <DrCongoClockClient />
      <CountryFactsSection hubSlug="dr-congo" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="DR Congo & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. DR Congo: Africa/Kinshasa (WAT (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
