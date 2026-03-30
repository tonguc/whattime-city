import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BosniaAndHerzegovinaClockClient from './BosniaAndHerzegovinaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Bosnia and Herzegovina — CET (UTC+1)',
  description: 'What time is it in Bosnia and Herzegovina right now? Live Sarajevo clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in bosnia and herzegovina', 'bosnia and herzegovina time now', 'what time is it in bosnia and herzegovina', 'sarajevo time', 'bosnia and herzegovina time zone'],
  alternates: { canonical: 'https://whattime.city/bosnia-and-herzegovina/' },
  openGraph: { title: 'Current Time in Bosnia and Herzegovina — CET · Sarajevo', description: 'Live Bosnia and Herzegovina time. Sarajevo on CET (UTC+1).', type: 'website', url: 'https://whattime.city/bosnia-and-herzegovina/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bosnia and Herzegovina right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bosnia and Herzegovina uses CET (UTC+1). Sarajevo is the capital. The live clock above shows the current local time in Bosnia and Herzegovina.' } },
    { '@type': 'Question', name: 'What time zone is Sarajevo in?', acceptedAnswer: { '@type': 'Answer', text: 'Sarajevo uses CET (UTC+1). The IANA time zone identifier is Europe/Sarajevo. Bosnia and Herzegovina spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Bosnia and Herzegovina observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bosnia and Herzegovina observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, it uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Bosnia and Herzegovina?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Bosnia and Herzegovina is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bosnia and Herzegovina', item: 'https://whattime.city/bosnia-and-herzegovina/' }] }

export default function BosniaAndHerzegovinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Bosnia and Herzegovina" subtitle="CET (UTC+1) · Sarajevo · UTC+1" />
      <BosniaAndHerzegovinaClockClient />
      <CountryFactsSection hubSlug="bosnia-and-herzegovina" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Bosnia and Herzegovina & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Bosnia and Herzegovina: Europe/Sarajevo (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
