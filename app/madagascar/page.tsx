import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MadagascarClockClient from './MadagascarClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Madagascar Now — EAT (UTC+3) · Antananarivo',
  description: 'What time is it in Madagascar right now? Live Antananarivo clock, time zone info (EAT (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in madagascar', 'madagascar time now', 'what time is it in madagascar', 'antananarivo time', 'madagascar time zone'],
  alternates: { canonical: 'https://whattime.city/madagascar/' },
  openGraph: { title: 'Current Time in Madagascar — EAT · Antananarivo', description: 'Live Madagascar time. Antananarivo on EAT (UTC+3).', type: 'website', url: 'https://whattime.city/madagascar/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Madagascar right now?', acceptedAnswer: { '@type': 'Answer', text: 'Madagascar uses EAT (UTC+3). Antananarivo is the capital. The live clock above shows the current local time in Madagascar.' } },
    { '@type': 'Question', name: 'What time zone is Antananarivo in?', acceptedAnswer: { '@type': 'Answer', text: 'Antananarivo uses EAT (UTC+3). The IANA time zone identifier is Indian/Antananarivo. ' } },
    { '@type': 'Question', name: 'Does Madagascar observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Madagascar does not observe Daylight Saving Time. Madagascar uses East Africa Time (EAT, UTC+3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Madagascar?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Madagascar is during local business hours: Monday–Friday, 9 AM–5 PM EAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Madagascar', item: 'https://whattime.city/madagascar/' }] }

export default function MadagascarTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Madagascar" subtitle="EAT (UTC+3) · Antananarivo · UTC+3" />
      <MadagascarClockClient />
      <CountryFactsSection hubSlug="madagascar" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Madagascar & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Madagascar: Indian/Antananarivo (EAT (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
