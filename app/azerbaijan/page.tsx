import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AzerbaijanClockClient from './AzerbaijanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Azerbaijan Now — AZT (UTC+4) · Baku',
  description: 'What time is it in Azerbaijan right now? Live Baku clock, time zone info (AZT (UTC+4)), best time to call, and time difference with major cities.',
  keywords: ['time in azerbaijan', 'azerbaijan time now', 'what time is it in azerbaijan', 'baku time', 'azerbaijan time zone'],
  alternates: { canonical: 'https://whattime.city/azerbaijan/' },
  openGraph: { title: 'Current Time in Azerbaijan — AZT · Baku', description: 'Live Azerbaijan time. Baku on AZT (UTC+4).', type: 'website', url: 'https://whattime.city/azerbaijan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Azerbaijan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Azerbaijan uses AZT (UTC+4). Baku is the capital. The live clock above shows the current local time in Azerbaijan.' } },
    { '@type': 'Question', name: 'What time zone is Baku in?', acceptedAnswer: { '@type': 'Answer', text: 'Baku uses AZT (UTC+4). The IANA time zone identifier is Asia/Baku. ' } },
    { '@type': 'Question', name: 'Does Azerbaijan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Azerbaijan does not observe Daylight Saving Time. Azerbaijan uses Azerbaijan Time (AZT, UTC+4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Azerbaijan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Azerbaijan is during local business hours: Monday–Friday, 9 AM–5 PM AZT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Azerbaijan', item: 'https://whattime.city/azerbaijan/' }] }

export default function AzerbaijanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Azerbaijan" subtitle="AZT (UTC+4) · Baku · UTC+4" />
      <AzerbaijanClockClient />
      <CountryFactsSection hubSlug="azerbaijan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Azerbaijan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Azerbaijan: Asia/Baku (AZT (UTC+4))."
      />
    </ContentPageWrapper>
  )
}
