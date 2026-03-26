import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SudanClockClient from './SudanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Sudan Now — CAT (UTC+2) · Khartoum',
  description: 'What time is it in Sudan right now? Live Khartoum clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in sudan', 'sudan time now', 'what time is it in sudan', 'khartoum time', 'sudan time zone'],
  alternates: { canonical: 'https://whattime.city/sudan/' },
  openGraph: { title: 'Current Time in Sudan — CAT · Khartoum', description: 'Live Sudan time. Khartoum on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/sudan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Sudan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Sudan uses CAT (UTC+2). Khartoum is the capital. The live clock above shows the current local time in Sudan.' } },
    { '@type': 'Question', name: 'What time zone is Khartoum in?', acceptedAnswer: { '@type': 'Answer', text: 'Khartoum uses CAT (UTC+2). The IANA time zone identifier is Africa/Khartoum. ' } },
    { '@type': 'Question', name: 'Does Sudan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Sudan offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Sudan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Sudan is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Sudan', item: 'https://whattime.city/sudan/' }] }

export default function SudanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Sudan" subtitle="CAT (UTC+2) · Khartoum · UTC+2" />
      <SudanClockClient />
      <CountryFactsSection hubSlug="sudan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Sudan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Sudan: Africa/Khartoum (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
