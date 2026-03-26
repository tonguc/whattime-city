import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LebanonClockClient from './LebanonClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Lebanon Now — EET (UTC+2) · Beirut',
  description: 'What time is it in Lebanon right now? Live Beirut clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in lebanon', 'lebanon time now', 'what time is it in lebanon', 'beirut time', 'lebanon time zone'],
  alternates: { canonical: 'https://whattime.city/lebanon/' },
  openGraph: { title: 'Current Time in Lebanon — EET · Beirut', description: 'Live Lebanon time. Beirut on EET (UTC+2).', type: 'website', url: 'https://whattime.city/lebanon/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Lebanon right now?', acceptedAnswer: { '@type': 'Answer', text: 'Lebanon uses EET (UTC+2). Beirut is the capital. The live clock above shows the current local time in Lebanon.' } },
    { '@type': 'Question', name: 'What time zone is Beirut in?', acceptedAnswer: { '@type': 'Answer', text: 'Beirut uses EET (UTC+2). The IANA time zone identifier is Asia/Beirut. Lebanon spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Lebanon observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Lebanon offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Lebanon?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Lebanon is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Lebanon', item: 'https://whattime.city/lebanon/' }] }

export default function LebanonTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Lebanon" subtitle="EET (UTC+2) · Beirut · UTC+2" />
      <LebanonClockClient />
      <CountryFactsSection hubSlug="lebanon" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Lebanon & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Lebanon: Asia/Beirut (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
