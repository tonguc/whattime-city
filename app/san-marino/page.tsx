import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SanMarinoClockClient from './SanMarinoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in San Marino Now — CET (UTC+1) · San Marino',
  description: 'What time is it in San Marino right now? Live San Marino clock, time zone info (CET (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in san marino', 'san marino time now', 'what time is it in san marino', 'san marino time', 'san marino time zone'],
  alternates: { canonical: 'https://whattime.city/san-marino/' },
  openGraph: { title: 'Current Time in San Marino — CET · San Marino', description: 'Live San Marino time. San Marino on CET (UTC+1).', type: 'website', url: 'https://whattime.city/san-marino/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in San Marino right now?', acceptedAnswer: { '@type': 'Answer', text: 'San Marino uses CET (UTC+1). San Marino is the capital. The live clock above shows the current local time in San Marino.' } },
    { '@type': 'Question', name: 'What time zone is San Marino in?', acceptedAnswer: { '@type': 'Answer', text: 'San Marino uses CET (UTC+1). The IANA time zone identifier is Europe/San_Marino. San Marino spans multiple time zones: CET (UTC+1), CEST (UTC+2).' } },
    { '@type': 'Question', name: 'Does San Marino observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. San Marino observes Central European Summer Time (CEST, UTC+2) from the last Sunday in March to the last Sunday in October. Outside this period, San Marino uses CET (UTC+1).' } },
    { '@type': 'Question', name: 'What is the best time to call San Marino?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call San Marino is during local business hours: Monday–Friday, 9 AM–5 PM CET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in San Marino', item: 'https://whattime.city/san-marino/' }] }

export default function SanMarinoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in San Marino" subtitle="CET (UTC+1) · San Marino · UTC+1" />
      <SanMarinoClockClient />
      <CountryFactsSection hubSlug="san-marino" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="San Marino & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. San Marino: Europe/San_Marino (CET (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
