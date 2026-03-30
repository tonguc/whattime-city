import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PalestineClockClient from './PalestineClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Palestine Now — EET (UTC+2)',
  description: 'What time is it in Palestine right now? Live Ramallah clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in palestine', 'palestine time now', 'what time is it in palestine', 'ramallah time', 'palestine time zone'],
  alternates: { canonical: 'https://whattime.city/palestine/' },
  openGraph: { title: 'Current Time in Palestine — EET · Ramallah', description: 'Live Palestine time. Ramallah on EET (UTC+2).', type: 'website', url: 'https://whattime.city/palestine/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Palestine right now?', acceptedAnswer: { '@type': 'Answer', text: 'Palestine uses EET (UTC+2). Ramallah is the capital. The live clock above shows the current local time in Palestine.' } },
    { '@type': 'Question', name: 'What time zone is Ramallah in?', acceptedAnswer: { '@type': 'Answer', text: 'Ramallah uses EET (UTC+2). The IANA time zone identifier is Asia/Gaza. Palestine spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Palestine observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Palestine (West Bank and Gaza) observes Daylight Saving Time. Palestine springs forward in spring and falls back in autumn, though exact dates may vary.' } },
    { '@type': 'Question', name: 'What is the best time to call Palestine?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Palestine is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Palestine', item: 'https://whattime.city/palestine/' }] }

export default function PalestineTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Palestine" subtitle="EET (UTC+2) · Ramallah · UTC+2" />
      <PalestineClockClient />
      <CountryFactsSection hubSlug="palestine" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Palestine & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Palestine: Asia/Gaza (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
