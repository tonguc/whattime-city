import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SouthSudanClockClient from './SouthSudanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in South Sudan Now — CAT (UTC+2) · Juba',
  description: 'What time is it in South Sudan right now? Live Juba clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in south sudan', 'south sudan time now', 'what time is it in south sudan', 'juba time', 'south sudan time zone'],
  alternates: { canonical: 'https://whattime.city/south-sudan/' },
  openGraph: { title: 'Current Time in South Sudan — CAT · Juba', description: 'Live South Sudan time. Juba on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/south-sudan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in South Sudan right now?', acceptedAnswer: { '@type': 'Answer', text: 'South Sudan uses CAT (UTC+2). Juba is the capital. The live clock above shows the current local time in South Sudan.' } },
    { '@type': 'Question', name: 'What time zone is Juba in?', acceptedAnswer: { '@type': 'Answer', text: 'Juba uses CAT (UTC+2). The IANA time zone identifier is Africa/Juba. ' } },
    { '@type': 'Question', name: 'Does South Sudan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current South Sudan offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call South Sudan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call South Sudan is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in South Sudan', item: 'https://whattime.city/south-sudan/' }] }

export default function SouthSudanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in South Sudan" subtitle="CAT (UTC+2) · Juba · UTC+2" />
      <SouthSudanClockClient />
      <CountryFactsSection hubSlug="south-sudan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="South Sudan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. South Sudan: Africa/Juba (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
