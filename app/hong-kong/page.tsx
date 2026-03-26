import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import HongKongClockClient from './HongKongClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Hong Kong Now — HKT (UTC+8) · Hong Kong',
  description: 'What time is it in Hong Kong right now? Live Hong Kong clock, time zone info (HKT (UTC+8)), best time to call, and time difference with major cities.',
  keywords: ['time in hong kong', 'hong kong time now', 'what time is it in hong kong', 'hong kong time', 'hong kong time zone'],
  alternates: { canonical: 'https://whattime.city/hong-kong/' },
  openGraph: { title: 'Current Time in Hong Kong — HKT · Hong Kong', description: 'Live Hong Kong time. Hong Kong on HKT (UTC+8).', type: 'website', url: 'https://whattime.city/hong-kong/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Hong Kong right now?', acceptedAnswer: { '@type': 'Answer', text: 'Hong Kong uses HKT (UTC+8). Hong Kong is the capital. The live clock above shows the current local time in Hong Kong.' } },
    { '@type': 'Question', name: 'What time zone is Hong Kong in?', acceptedAnswer: { '@type': 'Answer', text: 'Hong Kong uses HKT (UTC+8). The IANA time zone identifier is Asia/Hong_Kong. ' } },
    { '@type': 'Question', name: 'Does Hong Kong observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Hong Kong offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Hong Kong?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Hong Kong is during local business hours: Monday–Friday, 9 AM–5 PM HKT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Hong Kong', item: 'https://whattime.city/hong-kong/' }] }

export default function HongKongTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Hong Kong" subtitle="HKT (UTC+8) · Hong Kong · UTC+8" />
      <HongKongClockClient />
      <CountryFactsSection hubSlug="hong-kong" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Hong Kong & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Hong Kong: Asia/Hong_Kong (HKT (UTC+8))."
      />
    </ContentPageWrapper>
  )
}
