import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SurinameClockClient from './SurinameClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Suriname Now — SRT (UTC-3) · Paramaribo',
  description: 'What time is it in Suriname right now? Live Paramaribo clock, time zone info (SRT (UTC-3)), best time to call, and time difference with major cities.',
  keywords: ['time in suriname', 'suriname time now', 'what time is it in suriname', 'paramaribo time', 'suriname time zone'],
  alternates: { canonical: 'https://whattime.city/suriname/' },
  openGraph: { title: 'Current Time in Suriname — SRT · Paramaribo', description: 'Live Suriname time. Paramaribo on SRT (UTC-3).', type: 'website', url: 'https://whattime.city/suriname/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Suriname right now?', acceptedAnswer: { '@type': 'Answer', text: 'Suriname uses SRT (UTC-3). Paramaribo is the capital. The live clock above shows the current local time in Suriname.' } },
    { '@type': 'Question', name: 'What time zone is Paramaribo in?', acceptedAnswer: { '@type': 'Answer', text: 'Paramaribo uses SRT (UTC-3). The IANA time zone identifier is America/Paramaribo. ' } },
    { '@type': 'Question', name: 'Does Suriname observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Suriname does not observe Daylight Saving Time. Suriname uses Suriname Time (SRT, UTC-3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Suriname?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Suriname is during local business hours: Monday–Friday, 9 AM–5 PM SRT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Suriname', item: 'https://whattime.city/suriname/' }] }

export default function SurinameTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Suriname" subtitle="SRT (UTC-3) · Paramaribo · UTC-3" />
      <SurinameClockClient />
      <CountryFactsSection hubSlug="suriname" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Suriname & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Suriname: America/Paramaribo (SRT (UTC-3))."
      />
    </ContentPageWrapper>
  )
}
