import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LithuaniaClockClient from './LithuaniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Lithuania Now — EET (UTC+2) · Vilnius',
  description: 'What time is it in Lithuania right now? Live Vilnius clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in lithuania', 'lithuania time now', 'what time is it in lithuania', 'vilnius time', 'lithuania time zone'],
  alternates: { canonical: 'https://whattime.city/lithuania/' },
  openGraph: { title: 'Current Time in Lithuania — EET · Vilnius', description: 'Live Lithuania time. Vilnius on EET (UTC+2).', type: 'website', url: 'https://whattime.city/lithuania/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Lithuania right now?', acceptedAnswer: { '@type': 'Answer', text: 'Lithuania uses EET (UTC+2). Vilnius is the capital. The live clock above shows the current local time in Lithuania.' } },
    { '@type': 'Question', name: 'What time zone is Vilnius in?', acceptedAnswer: { '@type': 'Answer', text: 'Vilnius uses EET (UTC+2). The IANA time zone identifier is Europe/Vilnius. Lithuania spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Lithuania observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Lithuania offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Lithuania?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Lithuania is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Lithuania', item: 'https://whattime.city/lithuania/' }] }

export default function LithuaniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Lithuania" subtitle="EET (UTC+2) · Vilnius · UTC+2" />
      <LithuaniaClockClient />
      <CountryFactsSection hubSlug="lithuania" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Lithuania & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Lithuania: Europe/Vilnius (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
