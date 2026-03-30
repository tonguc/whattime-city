import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import UnitedStatesClockClient from './UnitedStatesClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in United States Now — EST (UTC−5)',
  description: 'What time is it in United States right now? Live Washington D.C. clock, time zone info (EST (UTC-5)), best time to call, and time difference with major cities.',
  keywords: ['time in united states', 'united states time now', 'what time is it in united states', 'washington d.c. time', 'united states time zone'],
  alternates: { canonical: 'https://whattime.city/united-states/' },
  openGraph: { title: 'Time in United States Now — EST (UTC−5)', description: 'Live United States time. Washington D.C. on EST (UTC-5).', type: 'website', url: 'https://whattime.city/united-states/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in United States right now?', acceptedAnswer: { '@type': 'Answer', text: 'United States uses EST (UTC-5). Washington D.C. is the capital. The live clock above shows the current local time in United States.' } },
    { '@type': 'Question', name: 'What time zone is Washington D.C. in?', acceptedAnswer: { '@type': 'Answer', text: 'Washington D.C. uses EST (UTC-5). The IANA time zone identifier is America/New_York. United States spans multiple time zones: EST (UTC-5), CST (UTC-6), MST (UTC-7), PST (UTC-8), AKST (UTC-9), HST (UTC-10).' } },
    { '@type': 'Question', name: 'Does United States observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most of the United States observes Daylight Saving Time from the second Sunday in March (spring forward) to the first Sunday in November (fall back). Exceptions: Arizona (except the Navajo Nation) and Hawaii do not observe DST.' } },
    { '@type': 'Question', name: 'What is the best time to call United States?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call United States is during local business hours: Monday–Friday, 9 AM–5 PM EST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in United States', item: 'https://whattime.city/united-states/' }] }

export default function UnitedStatesTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in United States" subtitle="EST (UTC-5) · Washington D.C. · UTC-5" />
      <UnitedStatesClockClient />
      <CountryFactsSection hubSlug="united-states" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="United States & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. United States: America/New_York (EST (UTC-5))."
      />
    </ContentPageWrapper>
  )
}
