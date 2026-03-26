import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import KiribatiClockClient from './KiribatiClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Kiribati Now — GILT (UTC+12) · Tarawa',
  description: 'What time is it in Kiribati right now? Live Tarawa clock, time zone info (GILT (UTC+12)), best time to call, and time difference with major cities.',
  keywords: ['time in kiribati', 'kiribati time now', 'what time is it in kiribati', 'tarawa time', 'kiribati time zone'],
  alternates: { canonical: 'https://whattime.city/kiribati/' },
  openGraph: { title: 'Current Time in Kiribati — GILT · Tarawa', description: 'Live Kiribati time. Tarawa on GILT (UTC+12).', type: 'website', url: 'https://whattime.city/kiribati/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kiribati right now?', acceptedAnswer: { '@type': 'Answer', text: 'Kiribati uses GILT (UTC+12). Tarawa is the capital. The live clock above shows the current local time in Kiribati.' } },
    { '@type': 'Question', name: 'What time zone is Tarawa in?', acceptedAnswer: { '@type': 'Answer', text: 'Tarawa uses GILT (UTC+12). The IANA time zone identifier is Pacific/Tarawa. Kiribati spans multiple time zones: GILT (UTC+12), PHOT (UTC+13), LINT (UTC+14).' } },
    { '@type': 'Question', name: 'Does Kiribati observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Kiribati does not observe Daylight Saving Time. Kiribati uses Gilbert Island Time (GILT, UTC+12) or Line Islands Time (LINT, UTC+14) year-round depending on the island group.' } },
    { '@type': 'Question', name: 'What is the best time to call Kiribati?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Kiribati is during local business hours: Monday–Friday, 9 AM–5 PM GILT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kiribati', item: 'https://whattime.city/kiribati/' }] }

export default function KiribatiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Kiribati" subtitle="GILT (UTC+12) · Tarawa · UTC+12" />
      <KiribatiClockClient />
      <CountryFactsSection hubSlug="kiribati" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Kiribati & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Kiribati: Pacific/Tarawa (GILT (UTC+12))."
      />
    </ContentPageWrapper>
  )
}
