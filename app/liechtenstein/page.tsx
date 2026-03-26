import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LiechtensteinClockClient from './LiechtensteinClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Liechtenstein Now — CET (UTC+1) · Vaduz',
  description: 'What time is it in Liechtenstein right now? Live Vaduz clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in liechtenstein', 'liechtenstein time now', 'what time is it in liechtenstein', 'vaduz time', 'liechtenstein time zone'],
  alternates: { canonical: 'https://whattime.city/liechtenstein/' },
  openGraph: { title: 'Current Time in Liechtenstein — CET · Vaduz', description: 'Live Liechtenstein time. Vaduz on CET (UTC+1).', type: 'website', url: 'https://whattime.city/liechtenstein/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Liechtenstein right now?', acceptedAnswer: { '@type': 'Answer', text: 'Liechtenstein uses CET (UTC+1). Vaduz is the capital. The live clock above shows the current local time in Liechtenstein.' } },
    { '@type': 'Question', name: 'What time zone is Vaduz in?', acceptedAnswer: { '@type': 'Answer', text: 'Vaduz uses CET (UTC+1). The IANA time zone identifier is Europe/Vaduz. Liechtenstein spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Liechtenstein observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Liechtenstein offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Liechtenstein?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Liechtenstein is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Liechtenstein', item: 'https://whattime.city/liechtenstein/' }] }

export default function LiechtensteinTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Liechtenstein" subtitle="CET (UTC+1) · Vaduz · UTC+1" />
      <LiechtensteinClockClient />
      <CountryFactsSection hubSlug="liechtenstein" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Liechtenstein & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Liechtenstein: Europe/Vaduz (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
