import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BruneiClockClient from './BruneiClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Brunei Now — BNT (UTC+8) · Bandar Seri Begawan',
  description: 'What time is it in Brunei right now? Live Bandar Seri Begawan clock, time zone info (BNT (UTC+8)), best time to call, and time difference with major cities.',
  keywords: ['time in brunei', 'brunei time now', 'what time is it in brunei', 'bandar seri begawan time', 'brunei time zone'],
  alternates: { canonical: 'https://whattime.city/brunei/' },
  openGraph: { title: 'Current Time in Brunei — BNT · Bandar Seri Begawan', description: 'Live Brunei time. Bandar Seri Begawan on BNT (UTC+8).', type: 'website', url: 'https://whattime.city/brunei/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Brunei right now?', acceptedAnswer: { '@type': 'Answer', text: 'Brunei uses BNT (UTC+8). Bandar Seri Begawan is the capital. The live clock above shows the current local time in Brunei.' } },
    { '@type': 'Question', name: 'What time zone is Bandar Seri Begawan in?', acceptedAnswer: { '@type': 'Answer', text: 'Bandar Seri Begawan uses BNT (UTC+8). The IANA time zone identifier is Asia/Brunei. ' } },
    { '@type': 'Question', name: 'Does Brunei observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Brunei does not observe Daylight Saving Time. Brunei uses Brunei Time (BNT, UTC+8) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Brunei?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Brunei is during local business hours: Monday–Friday, 9 AM–5 PM BNT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Brunei', item: 'https://whattime.city/brunei/' }] }

export default function BruneiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Brunei" subtitle="BNT (UTC+8) · Bandar Seri Begawan · UTC+8" />
      <BruneiClockClient />
      <CountryFactsSection hubSlug="brunei" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Brunei & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Brunei: Asia/Brunei (BNT (UTC+8))."
      />
    </ContentPageWrapper>
  )
}
