import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SerbiaClockClient from './SerbiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Serbia Now — CET (UTC+1) · Belgrade',
  description: 'What time is it in Serbia right now? Live Belgrade clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in serbia', 'serbia time now', 'what time is it in serbia', 'belgrade time', 'serbia time zone'],
  alternates: { canonical: 'https://whattime.city/serbia/' },
  openGraph: { title: 'Current Time in Serbia — CET · Belgrade', description: 'Live Serbia time. Belgrade on CET (UTC+1).', type: 'website', url: 'https://whattime.city/serbia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Serbia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Serbia uses CET (UTC+1). Belgrade is the capital. The live clock above shows the current local time in Serbia.' } },
    { '@type': 'Question', name: 'What time zone is Belgrade in?', acceptedAnswer: { '@type': 'Answer', text: 'Belgrade uses CET (UTC+1). The IANA time zone identifier is Europe/Belgrade. Serbia spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Serbia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Serbia observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, Serbia uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Serbia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Serbia is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Serbia', item: 'https://whattime.city/serbia/' }] }

export default function SerbiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Serbia" subtitle="CET (UTC+1) · Belgrade · UTC+1" />
      <SerbiaClockClient />
      <CountryFactsSection hubSlug="serbia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Serbia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Serbia: Europe/Belgrade (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
