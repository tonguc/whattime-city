import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ArmeniaClockClient from './ArmeniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Armenia Now — AMT (UTC+4) · Yerevan',
  description: 'What time is it in Armenia right now? Live Yerevan clock, time zone info (AMT (UTC+4)), best time to call, and time difference with major cities.',
  keywords: ['time in armenia', 'armenia time now', 'what time is it in armenia', 'yerevan time', 'armenia time zone'],
  alternates: { canonical: 'https://whattime.city/armenia/' },
  openGraph: { title: 'Current Time in Armenia — AMT · Yerevan', description: 'Live Armenia time. Yerevan on AMT (UTC+4).', type: 'website', url: 'https://whattime.city/armenia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Armenia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Armenia uses AMT (UTC+4). Yerevan is the capital. The live clock above shows the current local time in Armenia.' } },
    { '@type': 'Question', name: 'What time zone is Yerevan in?', acceptedAnswer: { '@type': 'Answer', text: 'Yerevan uses AMT (UTC+4). The IANA time zone identifier is Asia/Yerevan. ' } },
    { '@type': 'Question', name: 'Does Armenia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Armenia does not observe Daylight Saving Time. Armenia uses Armenia Time (AMT, UTC+4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Armenia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Armenia is during local business hours: Monday–Friday, 9 AM–5 PM AMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Armenia', item: 'https://whattime.city/armenia/' }] }

export default function ArmeniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Armenia" subtitle="AMT (UTC+4) · Yerevan · UTC+4" />
      <ArmeniaClockClient />
      <CountryFactsSection hubSlug="armenia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Armenia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Armenia: Asia/Yerevan (AMT (UTC+4))."
      />
    </ContentPageWrapper>
  )
}
