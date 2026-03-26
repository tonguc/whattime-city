import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BelarusClockClient from './BelarusClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Belarus Now — MSK (UTC+3) · Minsk',
  description: 'What time is it in Belarus right now? Live Minsk clock, time zone info (MSK (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in belarus', 'belarus time now', 'what time is it in belarus', 'minsk time', 'belarus time zone'],
  alternates: { canonical: 'https://whattime.city/belarus/' },
  openGraph: { title: 'Current Time in Belarus — MSK · Minsk', description: 'Live Belarus time. Minsk on MSK (UTC+3).', type: 'website', url: 'https://whattime.city/belarus/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Belarus right now?', acceptedAnswer: { '@type': 'Answer', text: 'Belarus uses MSK (UTC+3). Minsk is the capital. The live clock above shows the current local time in Belarus.' } },
    { '@type': 'Question', name: 'What time zone is Minsk in?', acceptedAnswer: { '@type': 'Answer', text: 'Minsk uses MSK (UTC+3). The IANA time zone identifier is Europe/Minsk. ' } },
    { '@type': 'Question', name: 'Does Belarus observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Belarus offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Belarus?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Belarus is during local business hours: Monday–Friday, 9 AM–5 PM MSK. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Belarus', item: 'https://whattime.city/belarus/' }] }

export default function BelarusTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Belarus" subtitle="MSK (UTC+3) · Minsk · UTC+3" />
      <BelarusClockClient />
      <CountryFactsSection hubSlug="belarus" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Belarus & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Belarus: Europe/Minsk (MSK (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
