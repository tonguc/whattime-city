import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TaiwanClockClient from './TaiwanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Taiwan Now — TST (UTC+8) · Taipei',
  description: 'What time is it in Taiwan right now? Live Taipei clock, time zone info (TST (UTC+8)), best time to call, and time difference with major cities.',
  keywords: ['time in taiwan', 'taiwan time now', 'what time is it in taiwan', 'taipei time', 'taiwan time zone'],
  alternates: { canonical: 'https://whattime.city/taiwan/' },
  openGraph: { title: 'Current Time in Taiwan — TST · Taipei', description: 'Live Taiwan time. Taipei on TST (UTC+8).', type: 'website', url: 'https://whattime.city/taiwan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Taiwan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Taiwan uses TST (UTC+8). Taipei is the capital. The live clock above shows the current local time in Taiwan.' } },
    { '@type': 'Question', name: 'What time zone is Taipei in?', acceptedAnswer: { '@type': 'Answer', text: 'Taipei uses TST (UTC+8). The IANA time zone identifier is Asia/Taipei. ' } },
    { '@type': 'Question', name: 'Does Taiwan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Taiwan does not observe Daylight Saving Time. Taiwan uses China Standard Time (CST, UTC+8) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Taiwan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Taiwan is during local business hours: Monday–Friday, 9 AM–5 PM TST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Taiwan', item: 'https://whattime.city/taiwan/' }] }

export default function TaiwanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Taiwan" subtitle="TST (UTC+8) · Taipei · UTC+8" />
      <TaiwanClockClient />
      <CountryFactsSection hubSlug="taiwan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Taiwan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Taiwan: Asia/Taipei (TST (UTC+8))."
      />
    </ContentPageWrapper>
  )
}
