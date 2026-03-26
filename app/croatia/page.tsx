import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CroatiaClockClient from './CroatiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Croatia Now — CET (UTC+1) · Zagreb',
  description: 'What time is it in Croatia right now? Live Zagreb clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in croatia', 'croatia time now', 'what time is it in croatia', 'zagreb time', 'croatia time zone'],
  alternates: { canonical: 'https://whattime.city/croatia/' },
  openGraph: { title: 'Current Time in Croatia — CET · Zagreb', description: 'Live Croatia time. Zagreb on CET (UTC+1).', type: 'website', url: 'https://whattime.city/croatia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Croatia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Croatia uses CET (UTC+1). Zagreb is the capital. The live clock above shows the current local time in Croatia.' } },
    { '@type': 'Question', name: 'What time zone is Zagreb in?', acceptedAnswer: { '@type': 'Answer', text: 'Zagreb uses CET (UTC+1). The IANA time zone identifier is Europe/Zagreb. Croatia spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Croatia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Croatia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Croatia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Croatia is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Croatia', item: 'https://whattime.city/croatia/' }] }

export default function CroatiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Croatia" subtitle="CET (UTC+1) · Zagreb · UTC+1" />
      <CroatiaClockClient />
      <CountryFactsSection hubSlug="croatia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Croatia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Croatia: Europe/Zagreb (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
