import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ZimbabweClockClient from './ZimbabweClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Zimbabwe Now — CAT (UTC+2) · Harare',
  description: 'What time is it in Zimbabwe right now? Live Harare clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in zimbabwe', 'zimbabwe time now', 'what time is it in zimbabwe', 'harare time', 'zimbabwe time zone'],
  alternates: { canonical: 'https://whattime.city/zimbabwe/' },
  openGraph: { title: 'Current Time in Zimbabwe — CAT · Harare', description: 'Live Zimbabwe time. Harare on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/zimbabwe/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Zimbabwe right now?', acceptedAnswer: { '@type': 'Answer', text: 'Zimbabwe uses CAT (UTC+2). Harare is the capital. The live clock above shows the current local time in Zimbabwe.' } },
    { '@type': 'Question', name: 'What time zone is Harare in?', acceptedAnswer: { '@type': 'Answer', text: 'Harare uses CAT (UTC+2). The IANA time zone identifier is Africa/Harare. ' } },
    { '@type': 'Question', name: 'Does Zimbabwe observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Zimbabwe does not observe Daylight Saving Time. Zimbabwe uses Central Africa Time (CAT, UTC+2) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Zimbabwe?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Zimbabwe is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Zimbabwe', item: 'https://whattime.city/zimbabwe/' }] }

export default function ZimbabweTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Zimbabwe" subtitle="CAT (UTC+2) · Harare · UTC+2" />
      <ZimbabweClockClient />
      <CountryFactsSection hubSlug="zimbabwe" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Zimbabwe & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Zimbabwe: Africa/Harare (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
