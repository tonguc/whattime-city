import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SierraLeoneClockClient from './SierraLeoneClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Sierra Leone Now — GMT (UTC+0)',
  description: 'What time is it in Sierra Leone right now? Live Freetown clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in sierra leone', 'sierra leone time now', 'what time is it in sierra leone', 'freetown time', 'sierra leone time zone'],
  alternates: { canonical: 'https://whattime.city/sierra-leone/' },
  openGraph: { title: 'Current Time in Sierra Leone — GMT · Freetown', description: 'Live Sierra Leone time. Freetown on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/sierra-leone/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Sierra Leone right now?', acceptedAnswer: { '@type': 'Answer', text: 'Sierra Leone uses GMT (UTC+0). Freetown is the capital. The live clock above shows the current local time in Sierra Leone.' } },
    { '@type': 'Question', name: 'What time zone is Freetown in?', acceptedAnswer: { '@type': 'Answer', text: 'Freetown uses GMT (UTC+0). The IANA time zone identifier is Africa/Freetown. ' } },
    { '@type': 'Question', name: 'Does Sierra Leone observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Sierra Leone does not observe Daylight Saving Time. Sierra Leone uses Greenwich Mean Time (GMT, UTC+0) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Sierra Leone?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Sierra Leone is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Sierra Leone', item: 'https://whattime.city/sierra-leone/' }] }

export default function SierraLeoneTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Sierra Leone" subtitle="GMT (UTC+0) · Freetown · UTC+0" />
      <SierraLeoneClockClient />
      <CountryFactsSection hubSlug="sierra-leone" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Sierra Leone & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Sierra Leone: Africa/Freetown (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
