import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CyprusClockClient from './CyprusClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Cyprus Now — EET (UTC+2) · Nicosia',
  description: 'What time is it in Cyprus right now? Live Nicosia clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in cyprus', 'cyprus time now', 'what time is it in cyprus', 'nicosia time', 'cyprus time zone'],
  alternates: { canonical: 'https://whattime.city/cyprus/' },
  openGraph: { title: 'Current Time in Cyprus — EET · Nicosia', description: 'Live Cyprus time. Nicosia on EET (UTC+2).', type: 'website', url: 'https://whattime.city/cyprus/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Cyprus right now?', acceptedAnswer: { '@type': 'Answer', text: 'Cyprus uses EET (UTC+2). Nicosia is the capital. The live clock above shows the current local time in Cyprus.' } },
    { '@type': 'Question', name: 'What time zone is Nicosia in?', acceptedAnswer: { '@type': 'Answer', text: 'Nicosia uses EET (UTC+2). The IANA time zone identifier is Asia/Nicosia. Cyprus spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Cyprus observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cyprus observes Eastern European Summer Time (EEST, UTC+3) from the last Sunday in March to the last Sunday in October. Outside this period, Cyprus uses EET (UTC+2).' } },
    { '@type': 'Question', name: 'What is the best time to call Cyprus?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Cyprus is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Cyprus', item: 'https://whattime.city/cyprus/' }] }

export default function CyprusTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Cyprus" subtitle="EET (UTC+2) · Nicosia · UTC+2" />
      <CyprusClockClient />
      <CountryFactsSection hubSlug="cyprus" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Cyprus & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Cyprus: Asia/Nicosia (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
