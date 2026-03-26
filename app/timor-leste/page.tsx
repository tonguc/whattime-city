import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TimorLesteClockClient from './TimorLesteClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Timor-Leste Now — TLT (UTC+9) · Dili',
  description: 'What time is it in Timor-Leste right now? Live Dili clock, time zone info (TLT (UTC+9)), best time to call, and time difference with major cities.',
  keywords: ['time in timor-leste', 'timor-leste time now', 'what time is it in timor-leste', 'dili time', 'timor-leste time zone'],
  alternates: { canonical: 'https://whattime.city/timor-leste/' },
  openGraph: { title: 'Current Time in Timor-Leste — TLT · Dili', description: 'Live Timor-Leste time. Dili on TLT (UTC+9).', type: 'website', url: 'https://whattime.city/timor-leste/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Timor-Leste right now?', acceptedAnswer: { '@type': 'Answer', text: 'Timor-Leste uses TLT (UTC+9). Dili is the capital. The live clock above shows the current local time in Timor-Leste.' } },
    { '@type': 'Question', name: 'What time zone is Dili in?', acceptedAnswer: { '@type': 'Answer', text: 'Dili uses TLT (UTC+9). The IANA time zone identifier is Asia/Dili. ' } },
    { '@type': 'Question', name: 'Does Timor-Leste observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Timor-Leste (East Timor) does not observe Daylight Saving Time. Timor-Leste uses Timor-Leste Time (TLT, UTC+9) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Timor-Leste?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Timor-Leste is during local business hours: Monday–Friday, 9 AM–5 PM TLT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Timor-Leste', item: 'https://whattime.city/timor-leste/' }] }

export default function TimorLesteTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Timor-Leste" subtitle="TLT (UTC+9) · Dili · UTC+9" />
      <TimorLesteClockClient />
      <CountryFactsSection hubSlug="timor-leste" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Timor-Leste & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Timor-Leste: Asia/Dili (TLT (UTC+9))."
      />
    </ContentPageWrapper>
  )
}
