import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import FinlandClockClient from './FinlandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Finland Now — EET (UTC+2) · Helsinki',
  description: 'What time is it in Finland right now? Live Helsinki clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in finland', 'finland time now', 'what time is it in finland', 'helsinki time', 'finland time zone'],
  alternates: { canonical: 'https://whattime.city/finland/' },
  openGraph: { title: 'Current Time in Finland — EET · Helsinki', description: 'Live Finland time. Helsinki on EET (UTC+2).', type: 'website', url: 'https://whattime.city/finland/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Finland right now?', acceptedAnswer: { '@type': 'Answer', text: 'Finland uses EET (UTC+2). Helsinki is the capital. The live clock above shows the current local time in Finland.' } },
    { '@type': 'Question', name: 'What time zone is Helsinki in?', acceptedAnswer: { '@type': 'Answer', text: 'Helsinki uses EET (UTC+2). The IANA time zone identifier is Europe/Helsinki. Finland spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Finland observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Finland observes Eastern European Summer Time (EEST, UTC+3) from the last Sunday in March to the last Sunday in October. Outside this period, Finland uses EET (UTC+2).' } },
    { '@type': 'Question', name: 'What is the best time to call Finland?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Finland is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Finland', item: 'https://whattime.city/finland/' }] }

export default function FinlandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Finland" subtitle="EET (UTC+2) · Helsinki · UTC+2" />
      <FinlandClockClient />
      <CountryFactsSection hubSlug="finland" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Finland & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Finland: Europe/Helsinki (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
