import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SamoaClockClient from './SamoaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Samoa Now — WST (UTC+13) · Apia',
  description: 'What time is it in Samoa right now? Live Apia clock, time zone info (WST (UTC+13)), best time to call, and time difference with major cities.',
  keywords: ['time in samoa', 'samoa time now', 'what time is it in samoa', 'apia time', 'samoa time zone'],
  alternates: { canonical: 'https://whattime.city/samoa/' },
  openGraph: { title: 'Current Time in Samoa — WST · Apia', description: 'Live Samoa time. Apia on WST (UTC+13).', type: 'website', url: 'https://whattime.city/samoa/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Samoa right now?', acceptedAnswer: { '@type': 'Answer', text: 'Samoa uses WST (UTC+13). Apia is the capital. The live clock above shows the current local time in Samoa.' } },
    { '@type': 'Question', name: 'What time zone is Apia in?', acceptedAnswer: { '@type': 'Answer', text: 'Apia uses WST (UTC+13). The IANA time zone identifier is Pacific/Apia. ' } },
    { '@type': 'Question', name: 'Does Samoa observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Samoa offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Samoa?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Samoa is during local business hours: Monday–Friday, 9 AM–5 PM WST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Samoa', item: 'https://whattime.city/samoa/' }] }

export default function SamoaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Samoa" subtitle="WST (UTC+13) · Apia · UTC+13" />
      <SamoaClockClient />
      <CountryFactsSection hubSlug="samoa" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Samoa & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Samoa: Pacific/Apia (WST (UTC+13))."
      />
    </ContentPageWrapper>
  )
}
