import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AustriaClockClient from './AustriaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Austria Now — CET (UTC+1) · Vienna',
  description: 'What time is it in Austria right now? Live Vienna clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in austria', 'austria time now', 'what time is it in austria', 'vienna time', 'austria time zone'],
  alternates: { canonical: 'https://whattime.city/austria/' },
  openGraph: { title: 'Current Time in Austria — CET · Vienna', description: 'Live Austria time. Vienna on CET (UTC+1).', type: 'website', url: 'https://whattime.city/austria/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Austria right now?', acceptedAnswer: { '@type': 'Answer', text: 'Austria uses CET (UTC+1). Vienna is the capital. The live clock above shows the current local time in Austria.' } },
    { '@type': 'Question', name: 'What time zone is Vienna in?', acceptedAnswer: { '@type': 'Answer', text: 'Vienna uses CET (UTC+1). The IANA time zone identifier is Europe/Vienna. Austria spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Austria observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Austria offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Austria?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Austria is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Austria', item: 'https://whattime.city/austria/' }] }

export default function AustriaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Austria" subtitle="CET (UTC+1) · Vienna · UTC+1" />
      <AustriaClockClient />
      <CountryFactsSection hubSlug="austria" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Austria & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Austria: Europe/Vienna (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
