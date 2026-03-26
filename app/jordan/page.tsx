import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import JordanClockClient from './JordanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Jordan Now — EET (UTC+3) · Amman',
  description: 'What time is it in Jordan right now? Live Amman clock, time zone info (EET (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in jordan', 'jordan time now', 'what time is it in jordan', 'amman time', 'jordan time zone'],
  alternates: { canonical: 'https://whattime.city/jordan/' },
  openGraph: { title: 'Current Time in Jordan — EET · Amman', description: 'Live Jordan time. Amman on EET (UTC+3).', type: 'website', url: 'https://whattime.city/jordan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Jordan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Jordan uses EET (UTC+3). Amman is the capital. The live clock above shows the current local time in Jordan.' } },
    { '@type': 'Question', name: 'What time zone is Amman in?', acceptedAnswer: { '@type': 'Answer', text: 'Amman uses EET (UTC+3). The IANA time zone identifier is Asia/Amman. ' } },
    { '@type': 'Question', name: 'Does Jordan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Jordan offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Jordan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Jordan is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Jordan', item: 'https://whattime.city/jordan/' }] }

export default function JordanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Jordan" subtitle="EET (UTC+3) · Amman · UTC+3" />
      <JordanClockClient />
      <CountryFactsSection hubSlug="jordan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Jordan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Jordan: Asia/Amman (EET (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
