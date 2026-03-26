import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MontenegroClockClient from './MontenegroClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Montenegro Now — CET (UTC+1) · Podgorica',
  description: 'What time is it in Montenegro right now? Live Podgorica clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in montenegro', 'montenegro time now', 'what time is it in montenegro', 'podgorica time', 'montenegro time zone'],
  alternates: { canonical: 'https://whattime.city/montenegro/' },
  openGraph: { title: 'Current Time in Montenegro — CET · Podgorica', description: 'Live Montenegro time. Podgorica on CET (UTC+1).', type: 'website', url: 'https://whattime.city/montenegro/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Montenegro right now?', acceptedAnswer: { '@type': 'Answer', text: 'Montenegro uses CET (UTC+1). Podgorica is the capital. The live clock above shows the current local time in Montenegro.' } },
    { '@type': 'Question', name: 'What time zone is Podgorica in?', acceptedAnswer: { '@type': 'Answer', text: 'Podgorica uses CET (UTC+1). The IANA time zone identifier is Europe/Podgorica. Montenegro spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Montenegro observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Montenegro offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Montenegro?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Montenegro is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Montenegro', item: 'https://whattime.city/montenegro/' }] }

export default function MontenegroTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Montenegro" subtitle="CET (UTC+1) · Podgorica · UTC+1" />
      <MontenegroClockClient />
      <CountryFactsSection hubSlug="montenegro" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Montenegro & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Montenegro: Europe/Podgorica (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
