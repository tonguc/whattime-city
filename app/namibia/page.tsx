import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NamibiaClockClient from './NamibiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Namibia Now — CAT (UTC+2) · Windhoek',
  description: 'What time is it in Namibia right now? Live Windhoek clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in namibia', 'namibia time now', 'what time is it in namibia', 'windhoek time', 'namibia time zone'],
  alternates: { canonical: 'https://whattime.city/namibia/' },
  openGraph: { title: 'Current Time in Namibia — CAT · Windhoek', description: 'Live Namibia time. Windhoek on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/namibia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Namibia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Namibia uses CAT (UTC+2). Windhoek is the capital. The live clock above shows the current local time in Namibia.' } },
    { '@type': 'Question', name: 'What time zone is Windhoek in?', acceptedAnswer: { '@type': 'Answer', text: 'Windhoek uses CAT (UTC+2). The IANA time zone identifier is Africa/Windhoek. ' } },
    { '@type': 'Question', name: 'Does Namibia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Namibia does not observe Daylight Saving Time. Namibia uses West Africa Time (WAT, UTC+1) year-round (abolished DST in 2017).' } },
    { '@type': 'Question', name: 'What is the best time to call Namibia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Namibia is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Namibia', item: 'https://whattime.city/namibia/' }] }

export default function NamibiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Namibia" subtitle="CAT (UTC+2) · Windhoek · UTC+2" />
      <NamibiaClockClient />
      <CountryFactsSection hubSlug="namibia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Namibia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Namibia: Africa/Windhoek (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
