import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import HaitiClockClient from './HaitiClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Haiti Now — EST (UTC-5) · Port-au-Prince',
  description: 'What time is it in Haiti right now? Live Port-au-Prince clock, time zone info (EST (UTC-5)), best time to call, and time difference with major cities.',
  keywords: ['time in haiti', 'haiti time now', 'what time is it in haiti', 'port-au-prince time', 'haiti time zone'],
  alternates: { canonical: 'https://whattime.city/haiti/' },
  openGraph: { title: 'Current Time in Haiti — EST · Port-au-Prince', description: 'Live Haiti time. Port-au-Prince on EST (UTC-5).', type: 'website', url: 'https://whattime.city/haiti/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Haiti right now?', acceptedAnswer: { '@type': 'Answer', text: 'Haiti uses EST (UTC-5). Port-au-Prince is the capital. The live clock above shows the current local time in Haiti.' } },
    { '@type': 'Question', name: 'What time zone is Port-au-Prince in?', acceptedAnswer: { '@type': 'Answer', text: 'Port-au-Prince uses EST (UTC-5). The IANA time zone identifier is America/Port-au-Prince. Haiti spans multiple time zones: EST (UTC-5), EDT (UTC-4).' } },
    { '@type': 'Question', name: 'Does Haiti observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Haiti observes Eastern Daylight Time (EDT, UTC-4) from spring to autumn. Outside DST, Haiti uses Eastern Standard Time (EST, UTC-5).' } },
    { '@type': 'Question', name: 'What is the best time to call Haiti?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Haiti is during local business hours: Monday–Friday, 9 AM–5 PM EST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Haiti', item: 'https://whattime.city/haiti/' }] }

export default function HaitiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Haiti" subtitle="EST (UTC-5) · Port-au-Prince · UTC-5" />
      <HaitiClockClient />
      <CountryFactsSection hubSlug="haiti" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Haiti & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Haiti: America/Port-au-Prince (EST (UTC-5))."
      />
    </ContentPageWrapper>
  )
}
