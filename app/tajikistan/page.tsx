import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TajikistanClockClient from './TajikistanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Tajikistan Now — TJT (UTC+5) · Dushanbe',
  description: 'What time is it in Tajikistan right now? Live Dushanbe clock, time zone info (TJT (UTC+5)), best time to call, and time difference with major cities.',
  keywords: ['time in tajikistan', 'tajikistan time now', 'what time is it in tajikistan', 'dushanbe time', 'tajikistan time zone'],
  alternates: { canonical: 'https://whattime.city/tajikistan/' },
  openGraph: { title: 'Current Time in Tajikistan — TJT · Dushanbe', description: 'Live Tajikistan time. Dushanbe on TJT (UTC+5).', type: 'website', url: 'https://whattime.city/tajikistan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Tajikistan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Tajikistan uses TJT (UTC+5). Dushanbe is the capital. The live clock above shows the current local time in Tajikistan.' } },
    { '@type': 'Question', name: 'What time zone is Dushanbe in?', acceptedAnswer: { '@type': 'Answer', text: 'Dushanbe uses TJT (UTC+5). The IANA time zone identifier is Asia/Dushanbe. ' } },
    { '@type': 'Question', name: 'Does Tajikistan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Tajikistan does not observe Daylight Saving Time. Tajikistan uses Tajikistan Time (TJT, UTC+5) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Tajikistan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Tajikistan is during local business hours: Monday–Friday, 9 AM–5 PM TJT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Tajikistan', item: 'https://whattime.city/tajikistan/' }] }

export default function TajikistanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Tajikistan" subtitle="TJT (UTC+5) · Dushanbe · UTC+5" />
      <TajikistanClockClient />
      <CountryFactsSection hubSlug="tajikistan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Tajikistan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Tajikistan: Asia/Dushanbe (TJT (UTC+5))."
      />
    </ContentPageWrapper>
  )
}
