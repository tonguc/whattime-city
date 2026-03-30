import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import UruguayClockClient from './UruguayClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Uruguay Now — UYT (UTC−3)',
  description: 'What time is it in Uruguay right now? Live Montevideo clock, time zone info (UYT (UTC-3)), best time to call, and time difference with major cities.',
  keywords: ['time in uruguay', 'uruguay time now', 'what time is it in uruguay', 'montevideo time', 'uruguay time zone'],
  alternates: { canonical: 'https://whattime.city/uruguay/' },
  openGraph: { title: 'Current Time in Uruguay — UYT · Montevideo', description: 'Live Uruguay time. Montevideo on UYT (UTC-3).', type: 'website', url: 'https://whattime.city/uruguay/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Uruguay right now?', acceptedAnswer: { '@type': 'Answer', text: 'Uruguay uses UYT (UTC-3). Montevideo is the capital. The live clock above shows the current local time in Uruguay.' } },
    { '@type': 'Question', name: 'What time zone is Montevideo in?', acceptedAnswer: { '@type': 'Answer', text: 'Montevideo uses UYT (UTC-3). The IANA time zone identifier is America/Montevideo. ' } },
    { '@type': 'Question', name: 'Does Uruguay observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Uruguay does not observe Daylight Saving Time. Uruguay permanently abolished DST in 2015 and uses Uruguay Standard Time (UYT, UTC-3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Uruguay?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Uruguay is during local business hours: Monday–Friday, 9 AM–5 PM UYT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Uruguay', item: 'https://whattime.city/uruguay/' }] }

export default function UruguayTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Uruguay" subtitle="UYT (UTC-3) · Montevideo · UTC-3" />
      <UruguayClockClient />
      <CountryFactsSection hubSlug="uruguay" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Uruguay & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Uruguay: America/Montevideo (UYT (UTC-3))."
      />
    </ContentPageWrapper>
  )
}
