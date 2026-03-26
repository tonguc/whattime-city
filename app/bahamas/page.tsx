import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BahamasClockClient from './BahamasClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Bahamas Now — EST (UTC-5) · Nassau',
  description: 'What time is it in Bahamas right now? Live Nassau clock, time zone info (EST (UTC-5)), best time to call, and time difference with major cities.',
  keywords: ['time in bahamas', 'bahamas time now', 'what time is it in bahamas', 'nassau time', 'bahamas time zone'],
  alternates: { canonical: 'https://whattime.city/bahamas/' },
  openGraph: { title: 'Current Time in Bahamas — EST · Nassau', description: 'Live Bahamas time. Nassau on EST (UTC-5).', type: 'website', url: 'https://whattime.city/bahamas/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bahamas right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bahamas uses EST (UTC-5). Nassau is the capital. The live clock above shows the current local time in Bahamas.' } },
    { '@type': 'Question', name: 'What time zone is Nassau in?', acceptedAnswer: { '@type': 'Answer', text: 'Nassau uses EST (UTC-5). The IANA time zone identifier is America/Nassau. Bahamas spans multiple time zones: EST (UTC-5), EDT (UTC-4).' } },
    { '@type': 'Question', name: 'Does Bahamas observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Bahamas observes Daylight Saving Time on the same schedule as the US Eastern time zone. Clocks spring forward in March (EDT, UTC-4) and fall back in November (EST, UTC-5).' } },
    { '@type': 'Question', name: 'What is the best time to call Bahamas?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Bahamas is during local business hours: Monday–Friday, 9 AM–5 PM EST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bahamas', item: 'https://whattime.city/bahamas/' }] }

export default function BahamasTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Bahamas" subtitle="EST (UTC-5) · Nassau · UTC-5" />
      <BahamasClockClient />
      <CountryFactsSection hubSlug="bahamas" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Bahamas & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Bahamas: America/Nassau (EST (UTC-5))."
      />
    </ContentPageWrapper>
  )
}
