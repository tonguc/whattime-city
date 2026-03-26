import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LatviaClockClient from './LatviaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Latvia Now — EET (UTC+2) · Riga',
  description: 'What time is it in Latvia right now? Live Riga clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in latvia', 'latvia time now', 'what time is it in latvia', 'riga time', 'latvia time zone'],
  alternates: { canonical: 'https://whattime.city/latvia/' },
  openGraph: { title: 'Current Time in Latvia — EET · Riga', description: 'Live Latvia time. Riga on EET (UTC+2).', type: 'website', url: 'https://whattime.city/latvia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Latvia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Latvia uses EET (UTC+2). Riga is the capital. The live clock above shows the current local time in Latvia.' } },
    { '@type': 'Question', name: 'What time zone is Riga in?', acceptedAnswer: { '@type': 'Answer', text: 'Riga uses EET (UTC+2). The IANA time zone identifier is Europe/Riga. Latvia spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Latvia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Latvia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Latvia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Latvia is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Latvia', item: 'https://whattime.city/latvia/' }] }

export default function LatviaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Latvia" subtitle="EET (UTC+2) · Riga · UTC+2" />
      <LatviaClockClient />
      <CountryFactsSection hubSlug="latvia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Latvia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Latvia: Europe/Riga (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
