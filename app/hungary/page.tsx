import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import HungaryClockClient from './HungaryClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Hungary Now — CET (UTC+1) · Budapest',
  description: 'What time is it in Hungary right now? Live Budapest clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in hungary', 'hungary time now', 'what time is it in hungary', 'budapest time', 'hungary time zone'],
  alternates: { canonical: 'https://whattime.city/hungary/' },
  openGraph: { title: 'Current Time in Hungary — CET · Budapest', description: 'Live Hungary time. Budapest on CET (UTC+1).', type: 'website', url: 'https://whattime.city/hungary/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Hungary right now?', acceptedAnswer: { '@type': 'Answer', text: 'Hungary uses CET (UTC+1). Budapest is the capital. The live clock above shows the current local time in Hungary.' } },
    { '@type': 'Question', name: 'What time zone is Budapest in?', acceptedAnswer: { '@type': 'Answer', text: 'Budapest uses CET (UTC+1). The IANA time zone identifier is Europe/Budapest. Hungary spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Hungary observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Hungary offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Hungary?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Hungary is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Hungary', item: 'https://whattime.city/hungary/' }] }

export default function HungaryTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Hungary" subtitle="CET (UTC+1) · Budapest · UTC+1" />
      <HungaryClockClient />
      <CountryFactsSection hubSlug="hungary" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Hungary & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Hungary: Europe/Budapest (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
