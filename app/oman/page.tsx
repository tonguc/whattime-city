import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import OmanClockClient from './OmanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Oman Now — GST (UTC+4) · Muscat',
  description: 'What time is it in Oman right now? Live Muscat clock, time zone info (GST (UTC+4)), best time to call, and time difference with major cities.',
  keywords: ['time in oman', 'oman time now', 'what time is it in oman', 'muscat time', 'oman time zone'],
  alternates: { canonical: 'https://whattime.city/oman/' },
  openGraph: { title: 'Current Time in Oman — GST · Muscat', description: 'Live Oman time. Muscat on GST (UTC+4).', type: 'website', url: 'https://whattime.city/oman/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Oman right now?', acceptedAnswer: { '@type': 'Answer', text: 'Oman uses GST (UTC+4). Muscat is the capital. The live clock above shows the current local time in Oman.' } },
    { '@type': 'Question', name: 'What time zone is Muscat in?', acceptedAnswer: { '@type': 'Answer', text: 'Muscat uses GST (UTC+4). The IANA time zone identifier is Asia/Muscat. ' } },
    { '@type': 'Question', name: 'Does Oman observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Oman does not observe Daylight Saving Time. Oman uses Gulf Standard Time (GST, UTC+4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Oman?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Oman is during local business hours: Monday–Friday, 9 AM–5 PM GST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Oman', item: 'https://whattime.city/oman/' }] }

export default function OmanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Oman" subtitle="GST (UTC+4) · Muscat · UTC+4" />
      <OmanClockClient />
      <CountryFactsSection hubSlug="oman" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Oman & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Oman: Asia/Muscat (GST (UTC+4))."
      />
    </ContentPageWrapper>
  )
}
