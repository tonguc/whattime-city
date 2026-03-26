import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LaosClockClient from './LaosClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Laos Now — ICT (UTC+7) · Vientiane',
  description: 'What time is it in Laos right now? Live Vientiane clock, time zone info (ICT (UTC+7)), best time to call, and time difference with major cities.',
  keywords: ['time in laos', 'laos time now', 'what time is it in laos', 'vientiane time', 'laos time zone'],
  alternates: { canonical: 'https://whattime.city/laos/' },
  openGraph: { title: 'Current Time in Laos — ICT · Vientiane', description: 'Live Laos time. Vientiane on ICT (UTC+7).', type: 'website', url: 'https://whattime.city/laos/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Laos right now?', acceptedAnswer: { '@type': 'Answer', text: 'Laos uses ICT (UTC+7). Vientiane is the capital. The live clock above shows the current local time in Laos.' } },
    { '@type': 'Question', name: 'What time zone is Vientiane in?', acceptedAnswer: { '@type': 'Answer', text: 'Vientiane uses ICT (UTC+7). The IANA time zone identifier is Asia/Vientiane. ' } },
    { '@type': 'Question', name: 'Does Laos observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Laos offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Laos?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Laos is during local business hours: Monday–Friday, 9 AM–5 PM ICT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Laos', item: 'https://whattime.city/laos/' }] }

export default function LaosTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Laos" subtitle="ICT (UTC+7) · Vientiane · UTC+7" />
      <LaosClockClient />
      <CountryFactsSection hubSlug="laos" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Laos & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Laos: Asia/Vientiane (ICT (UTC+7))."
      />
    </ContentPageWrapper>
  )
}
