import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BhutanClockClient from './BhutanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Bhutan Now — BTT (UTC+6) · Thimphu',
  description: 'What time is it in Bhutan right now? Live Thimphu clock, time zone info (BTT (UTC+6)), best time to call, and time difference with major cities.',
  keywords: ['time in bhutan', 'bhutan time now', 'what time is it in bhutan', 'thimphu time', 'bhutan time zone'],
  alternates: { canonical: 'https://whattime.city/bhutan/' },
  openGraph: { title: 'Current Time in Bhutan — BTT · Thimphu', description: 'Live Bhutan time. Thimphu on BTT (UTC+6).', type: 'website', url: 'https://whattime.city/bhutan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bhutan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bhutan uses BTT (UTC+6). Thimphu is the capital. The live clock above shows the current local time in Bhutan.' } },
    { '@type': 'Question', name: 'What time zone is Thimphu in?', acceptedAnswer: { '@type': 'Answer', text: 'Thimphu uses BTT (UTC+6). The IANA time zone identifier is Asia/Thimphu. ' } },
    { '@type': 'Question', name: 'Does Bhutan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Bhutan does not observe Daylight Saving Time. Bhutan uses Bhutan Time (BTT, UTC+6) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Bhutan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Bhutan is during local business hours: Monday–Friday, 9 AM–5 PM BTT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bhutan', item: 'https://whattime.city/bhutan/' }] }

export default function BhutanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Bhutan" subtitle="BTT (UTC+6) · Thimphu · UTC+6" />
      <BhutanClockClient />
      <CountryFactsSection hubSlug="bhutan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Bhutan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Bhutan: Asia/Thimphu (BTT (UTC+6))."
      />
    </ContentPageWrapper>
  )
}
