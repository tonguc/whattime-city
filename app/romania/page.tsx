import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import RomaniaClockClient from './RomaniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Romania Now — EET (UTC+2) · Bucharest',
  description: 'What time is it in Romania right now? Live Bucharest clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in romania', 'romania time now', 'what time is it in romania', 'bucharest time', 'romania time zone'],
  alternates: { canonical: 'https://whattime.city/romania/' },
  openGraph: { title: 'Current Time in Romania — EET · Bucharest', description: 'Live Romania time. Bucharest on EET (UTC+2).', type: 'website', url: 'https://whattime.city/romania/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Romania right now?', acceptedAnswer: { '@type': 'Answer', text: 'Romania uses EET (UTC+2). Bucharest is the capital. The live clock above shows the current local time in Romania.' } },
    { '@type': 'Question', name: 'What time zone is Bucharest in?', acceptedAnswer: { '@type': 'Answer', text: 'Bucharest uses EET (UTC+2). The IANA time zone identifier is Europe/Bucharest. Romania spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Romania observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Romania offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Romania?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Romania is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Romania', item: 'https://whattime.city/romania/' }] }

export default function RomaniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Romania" subtitle="EET (UTC+2) · Bucharest · UTC+2" />
      <RomaniaClockClient />
      <CountryFactsSection hubSlug="romania" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Romania & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Romania: Europe/Bucharest (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
