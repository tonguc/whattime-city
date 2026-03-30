import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import UnitedArabEmiratesClockClient from './UnitedArabEmiratesClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in UAE Now — GST (UTC+4) · Abu Dhabi',
  description: 'What time is it in United Arab Emirates right now? Live Abu Dhabi clock, time zone info (GST (UTC+4)), best time to call, and time difference with major cities.',
  keywords: ['time in united arab emirates', 'united arab emirates time now', 'what time is it in united arab emirates', 'abu dhabi time', 'united arab emirates time zone'],
  alternates: { canonical: 'https://whattime.city/united-arab-emirates/' },
  openGraph: { title: 'Current Time in United Arab Emirates — GST · Abu Dhabi', description: 'Live United Arab Emirates time. Abu Dhabi on GST (UTC+4).', type: 'website', url: 'https://whattime.city/united-arab-emirates/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in United Arab Emirates right now?', acceptedAnswer: { '@type': 'Answer', text: 'United Arab Emirates uses GST (UTC+4). Abu Dhabi is the capital. The live clock above shows the current local time in United Arab Emirates.' } },
    { '@type': 'Question', name: 'What time zone is Abu Dhabi in?', acceptedAnswer: { '@type': 'Answer', text: 'Abu Dhabi uses GST (UTC+4). The IANA time zone identifier is Asia/Dubai. ' } },
    { '@type': 'Question', name: 'Does United Arab Emirates observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. The United Arab Emirates does not observe Daylight Saving Time. The UAE uses Gulf Standard Time (GST, UTC+4) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call United Arab Emirates?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call United Arab Emirates is during local business hours: Monday–Friday, 9 AM–5 PM GST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in United Arab Emirates', item: 'https://whattime.city/united-arab-emirates/' }] }

export default function UnitedArabEmiratesTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in United Arab Emirates" subtitle="GST (UTC+4) · Abu Dhabi · UTC+4" />
      <UnitedArabEmiratesClockClient />
      <CountryFactsSection hubSlug="united-arab-emirates" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="United Arab Emirates & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. United Arab Emirates: Asia/Dubai (GST (UTC+4))."
      />
    </ContentPageWrapper>
  )
}
