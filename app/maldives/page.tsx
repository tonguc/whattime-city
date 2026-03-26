import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MaldivesClockClient from './MaldivesClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Maldives Now — MVT (UTC+5) · Malé',
  description: 'What time is it in Maldives right now? Live Malé clock, time zone info (MVT (UTC+5)), best time to call, and time difference with major cities.',
  keywords: ['time in maldives', 'maldives time now', 'what time is it in maldives', 'malé time', 'maldives time zone'],
  alternates: { canonical: 'https://whattime.city/maldives/' },
  openGraph: { title: 'Current Time in Maldives — MVT · Malé', description: 'Live Maldives time. Malé on MVT (UTC+5).', type: 'website', url: 'https://whattime.city/maldives/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Maldives right now?', acceptedAnswer: { '@type': 'Answer', text: 'Maldives uses MVT (UTC+5). Malé is the capital. The live clock above shows the current local time in Maldives.' } },
    { '@type': 'Question', name: 'What time zone is Malé in?', acceptedAnswer: { '@type': 'Answer', text: 'Malé uses MVT (UTC+5). The IANA time zone identifier is Indian/Maldives. ' } },
    { '@type': 'Question', name: 'Does Maldives observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Maldives does not observe Daylight Saving Time. Maldives uses Maldives Time (MVT, UTC+5) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Maldives?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Maldives is during local business hours: Monday–Friday, 9 AM–5 PM MVT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Maldives', item: 'https://whattime.city/maldives/' }] }

export default function MaldivesTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Maldives" subtitle="MVT (UTC+5) · Malé · UTC+5" />
      <MaldivesClockClient />
      <CountryFactsSection hubSlug="maldives" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Maldives & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Maldives: Indian/Maldives (MVT (UTC+5))."
      />
    </ContentPageWrapper>
  )
}
