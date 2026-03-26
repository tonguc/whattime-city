import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SlovakiaClockClient from './SlovakiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Slovakia Now — CET (UTC+1) · Bratislava',
  description: 'What time is it in Slovakia right now? Live Bratislava clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in slovakia', 'slovakia time now', 'what time is it in slovakia', 'bratislava time', 'slovakia time zone'],
  alternates: { canonical: 'https://whattime.city/slovakia/' },
  openGraph: { title: 'Current Time in Slovakia — CET · Bratislava', description: 'Live Slovakia time. Bratislava on CET (UTC+1).', type: 'website', url: 'https://whattime.city/slovakia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Slovakia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Slovakia uses CET (UTC+1). Bratislava is the capital. The live clock above shows the current local time in Slovakia.' } },
    { '@type': 'Question', name: 'What time zone is Bratislava in?', acceptedAnswer: { '@type': 'Answer', text: 'Bratislava uses CET (UTC+1). The IANA time zone identifier is Europe/Bratislava. Slovakia spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Slovakia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Slovakia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Slovakia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Slovakia is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Slovakia', item: 'https://whattime.city/slovakia/' }] }

export default function SlovakiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Slovakia" subtitle="CET (UTC+1) · Bratislava · UTC+1" />
      <SlovakiaClockClient />
      <CountryFactsSection hubSlug="slovakia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Slovakia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Slovakia: Europe/Bratislava (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
