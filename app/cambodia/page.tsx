import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CambodiaClockClient from './CambodiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Cambodia Now — ICT (UTC+7) · Phnom Penh',
  description: 'What time is it in Cambodia right now? Live Phnom Penh clock, time zone info (ICT (UTC+7)), best time to call, and time difference with major cities.',
  keywords: ['time in cambodia', 'cambodia time now', 'what time is it in cambodia', 'phnom penh time', 'cambodia time zone'],
  alternates: { canonical: 'https://whattime.city/cambodia/' },
  openGraph: { title: 'Current Time in Cambodia — ICT · Phnom Penh', description: 'Live Cambodia time. Phnom Penh on ICT (UTC+7).', type: 'website', url: 'https://whattime.city/cambodia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Cambodia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Cambodia uses ICT (UTC+7). Phnom Penh is the capital. The live clock above shows the current local time in Cambodia.' } },
    { '@type': 'Question', name: 'What time zone is Phnom Penh in?', acceptedAnswer: { '@type': 'Answer', text: 'Phnom Penh uses ICT (UTC+7). The IANA time zone identifier is Asia/Phnom_Penh. ' } },
    { '@type': 'Question', name: 'Does Cambodia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Cambodia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Cambodia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Cambodia is during local business hours: Monday–Friday, 9 AM–5 PM ICT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Cambodia', item: 'https://whattime.city/cambodia/' }] }

export default function CambodiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Cambodia" subtitle="ICT (UTC+7) · Phnom Penh · UTC+7" />
      <CambodiaClockClient />
      <CountryFactsSection hubSlug="cambodia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Cambodia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Cambodia: Asia/Phnom_Penh (ICT (UTC+7))."
      />
    </ContentPageWrapper>
  )
}
