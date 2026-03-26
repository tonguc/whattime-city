import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LibyaClockClient from './LibyaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Libya Now — EET (UTC+2) · Tripoli',
  description: 'What time is it in Libya right now? Live Tripoli clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in libya', 'libya time now', 'what time is it in libya', 'tripoli time', 'libya time zone'],
  alternates: { canonical: 'https://whattime.city/libya/' },
  openGraph: { title: 'Current Time in Libya — EET · Tripoli', description: 'Live Libya time. Tripoli on EET (UTC+2).', type: 'website', url: 'https://whattime.city/libya/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Libya right now?', acceptedAnswer: { '@type': 'Answer', text: 'Libya uses EET (UTC+2). Tripoli is the capital. The live clock above shows the current local time in Libya.' } },
    { '@type': 'Question', name: 'What time zone is Tripoli in?', acceptedAnswer: { '@type': 'Answer', text: 'Tripoli uses EET (UTC+2). The IANA time zone identifier is Africa/Tripoli. ' } },
    { '@type': 'Question', name: 'Does Libya observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Libya offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Libya?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Libya is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Libya', item: 'https://whattime.city/libya/' }] }

export default function LibyaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Libya" subtitle="EET (UTC+2) · Tripoli · UTC+2" />
      <LibyaClockClient />
      <CountryFactsSection hubSlug="libya" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Libya & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Libya: Africa/Tripoli (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
