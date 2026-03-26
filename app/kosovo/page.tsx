import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import KosovoClockClient from './KosovoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Kosovo Now — CET (UTC+1) · Pristina',
  description: 'What time is it in Kosovo right now? Live Pristina clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in kosovo', 'kosovo time now', 'what time is it in kosovo', 'pristina time', 'kosovo time zone'],
  alternates: { canonical: 'https://whattime.city/kosovo/' },
  openGraph: { title: 'Current Time in Kosovo — CET · Pristina', description: 'Live Kosovo time. Pristina on CET (UTC+1).', type: 'website', url: 'https://whattime.city/kosovo/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kosovo right now?', acceptedAnswer: { '@type': 'Answer', text: 'Kosovo uses CET (UTC+1). Pristina is the capital. The live clock above shows the current local time in Kosovo.' } },
    { '@type': 'Question', name: 'What time zone is Pristina in?', acceptedAnswer: { '@type': 'Answer', text: 'Pristina uses CET (UTC+1). The IANA time zone identifier is Europe/Belgrade. Kosovo spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Kosovo observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Kosovo offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Kosovo?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Kosovo is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kosovo', item: 'https://whattime.city/kosovo/' }] }

export default function KosovoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Kosovo" subtitle="CET (UTC+1) · Pristina · UTC+1" />
      <KosovoClockClient />
      <CountryFactsSection hubSlug="kosovo" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Kosovo & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Kosovo: Europe/Belgrade (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
