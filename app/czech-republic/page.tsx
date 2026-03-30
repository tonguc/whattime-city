import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CzechRepublicClockClient from './CzechRepublicClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Czech Republic Now — CET (UTC+1)',
  description: 'What time is it in Czech Republic right now? Live Prague clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in czech republic', 'czech republic time now', 'what time is it in czech republic', 'prague time', 'czech republic time zone'],
  alternates: { canonical: 'https://whattime.city/czech-republic/' },
  openGraph: { title: 'Current Time in Czech Republic — CET · Prague', description: 'Live Czech Republic time. Prague on CET (UTC+1).', type: 'website', url: 'https://whattime.city/czech-republic/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Czech Republic right now?', acceptedAnswer: { '@type': 'Answer', text: 'Czech Republic uses CET (UTC+1). Prague is the capital. The live clock above shows the current local time in Czech Republic.' } },
    { '@type': 'Question', name: 'What time zone is Prague in?', acceptedAnswer: { '@type': 'Answer', text: 'Prague uses CET (UTC+1). The IANA time zone identifier is Europe/Prague. Czech Republic spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does Czech Republic observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Czech Republic observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, Czech Republic uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call Czech Republic?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Czech Republic is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Czech Republic', item: 'https://whattime.city/czech-republic/' }] }

export default function CzechRepublicTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Czech Republic" subtitle="CET (UTC+1) · Prague · UTC+1" />
      <CzechRepublicClockClient />
      <CountryFactsSection hubSlug="czech-republic" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Czech Republic & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Czech Republic: Europe/Prague (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
