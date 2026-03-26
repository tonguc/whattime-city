import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MongoliaClockClient from './MongoliaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Mongolia Now — ULAT (UTC+8) · Ulaanbaatar',
  description: 'What time is it in Mongolia right now? Live Ulaanbaatar clock, time zone info (ULAT (UTC+8)), best time to call, and time difference with major cities.',
  keywords: ['time in mongolia', 'mongolia time now', 'what time is it in mongolia', 'ulaanbaatar time', 'mongolia time zone'],
  alternates: { canonical: 'https://whattime.city/mongolia/' },
  openGraph: { title: 'Current Time in Mongolia — ULAT · Ulaanbaatar', description: 'Live Mongolia time. Ulaanbaatar on ULAT (UTC+8).', type: 'website', url: 'https://whattime.city/mongolia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Mongolia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Mongolia uses ULAT (UTC+8). Ulaanbaatar is the capital. The live clock above shows the current local time in Mongolia.' } },
    { '@type': 'Question', name: 'What time zone is Ulaanbaatar in?', acceptedAnswer: { '@type': 'Answer', text: 'Ulaanbaatar uses ULAT (UTC+8). The IANA time zone identifier is Asia/Ulaanbaatar. Mongolia spans multiple time zones: ULAT (UTC+8), HOVT (UTC+7).' } },
    { '@type': 'Question', name: 'Does Mongolia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Mongolia does not observe Daylight Saving Time. Mongolia uses Ulaanbaatar Time (ULAT, UTC+8) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Mongolia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Mongolia is during local business hours: Monday–Friday, 9 AM–5 PM ULAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Mongolia', item: 'https://whattime.city/mongolia/' }] }

export default function MongoliaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Mongolia" subtitle="ULAT (UTC+8) · Ulaanbaatar · UTC+8" />
      <MongoliaClockClient />
      <CountryFactsSection hubSlug="mongolia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Mongolia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Mongolia: Asia/Ulaanbaatar (ULAT (UTC+8))."
      />
    </ContentPageWrapper>
  )
}
