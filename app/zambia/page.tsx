import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ZambiaClockClient from './ZambiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Zambia Now — CAT (UTC+2) · Lusaka',
  description: 'What time is it in Zambia right now? Live Lusaka clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in zambia', 'zambia time now', 'what time is it in zambia', 'lusaka time', 'zambia time zone'],
  alternates: { canonical: 'https://whattime.city/zambia/' },
  openGraph: { title: 'Current Time in Zambia — CAT · Lusaka', description: 'Live Zambia time. Lusaka on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/zambia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Zambia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Zambia uses CAT (UTC+2). Lusaka is the capital. The live clock above shows the current local time in Zambia.' } },
    { '@type': 'Question', name: 'What time zone is Lusaka in?', acceptedAnswer: { '@type': 'Answer', text: 'Lusaka uses CAT (UTC+2). The IANA time zone identifier is Africa/Lusaka. ' } },
    { '@type': 'Question', name: 'Does Zambia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Zambia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Zambia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Zambia is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Zambia', item: 'https://whattime.city/zambia/' }] }

export default function ZambiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Zambia" subtitle="CAT (UTC+2) · Lusaka · UTC+2" />
      <ZambiaClockClient />
      <CountryFactsSection hubSlug="zambia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Zambia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Zambia: Africa/Lusaka (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
