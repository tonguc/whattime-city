import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CostaRicaClockClient from './CostaRicaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Costa Rica Now — CST (UTC-6) · San José',
  description: 'What time is it in Costa Rica right now? Live San José clock, time zone info (CST (UTC-6)), best time to call, and time difference with major cities.',
  keywords: ['time in costa rica', 'costa rica time now', 'what time is it in costa rica', 'san josé time', 'costa rica time zone'],
  alternates: { canonical: 'https://whattime.city/costa-rica/' },
  openGraph: { title: 'Current Time in Costa Rica — CST · San José', description: 'Live Costa Rica time. San José on CST (UTC-6).', type: 'website', url: 'https://whattime.city/costa-rica/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Costa Rica right now?', acceptedAnswer: { '@type': 'Answer', text: 'Costa Rica uses CST (UTC-6). San José is the capital. The live clock above shows the current local time in Costa Rica.' } },
    { '@type': 'Question', name: 'What time zone is San José in?', acceptedAnswer: { '@type': 'Answer', text: 'San José uses CST (UTC-6). The IANA time zone identifier is America/Costa_Rica. ' } },
    { '@type': 'Question', name: 'Does Costa Rica observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Costa Rica offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Costa Rica?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Costa Rica is during local business hours: Monday–Friday, 9 AM–5 PM CST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Costa Rica', item: 'https://whattime.city/costa-rica/' }] }

export default function CostaRicaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Costa Rica" subtitle="CST (UTC-6) · San José · UTC-6" />
      <CostaRicaClockClient />
      <CountryFactsSection hubSlug="costa-rica" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Costa Rica & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Costa Rica: America/Costa_Rica (CST (UTC-6))."
      />
    </ContentPageWrapper>
  )
}
