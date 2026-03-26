import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import KyrgyzstanClockClient from './KyrgyzstanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Kyrgyzstan Now — KGT (UTC+6) · Bishkek',
  description: 'What time is it in Kyrgyzstan right now? Live Bishkek clock, time zone info (KGT (UTC+6)), best time to call, and time difference with major cities.',
  keywords: ['time in kyrgyzstan', 'kyrgyzstan time now', 'what time is it in kyrgyzstan', 'bishkek time', 'kyrgyzstan time zone'],
  alternates: { canonical: 'https://whattime.city/kyrgyzstan/' },
  openGraph: { title: 'Current Time in Kyrgyzstan — KGT · Bishkek', description: 'Live Kyrgyzstan time. Bishkek on KGT (UTC+6).', type: 'website', url: 'https://whattime.city/kyrgyzstan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kyrgyzstan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Kyrgyzstan uses KGT (UTC+6). Bishkek is the capital. The live clock above shows the current local time in Kyrgyzstan.' } },
    { '@type': 'Question', name: 'What time zone is Bishkek in?', acceptedAnswer: { '@type': 'Answer', text: 'Bishkek uses KGT (UTC+6). The IANA time zone identifier is Asia/Bishkek. ' } },
    { '@type': 'Question', name: 'Does Kyrgyzstan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Kyrgyzstan offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Kyrgyzstan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Kyrgyzstan is during local business hours: Monday–Friday, 9 AM–5 PM KGT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kyrgyzstan', item: 'https://whattime.city/kyrgyzstan/' }] }

export default function KyrgyzstanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Kyrgyzstan" subtitle="KGT (UTC+6) · Bishkek · UTC+6" />
      <KyrgyzstanClockClient />
      <CountryFactsSection hubSlug="kyrgyzstan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Kyrgyzstan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Kyrgyzstan: Asia/Bishkek (KGT (UTC+6))."
      />
    </ContentPageWrapper>
  )
}
