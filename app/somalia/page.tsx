import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SomaliaClockClient from './SomaliaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Somalia Now — EAT (UTC+3)',
  description: 'What time is it in Somalia right now? Live Mogadishu clock, time zone info (EAT (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in somalia', 'somalia time now', 'what time is it in somalia', 'mogadishu time', 'somalia time zone'],
  alternates: { canonical: 'https://whattime.city/somalia/' },
  openGraph: { title: 'Current Time in Somalia — EAT · Mogadishu', description: 'Live Somalia time. Mogadishu on EAT (UTC+3).', type: 'website', url: 'https://whattime.city/somalia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Somalia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Somalia uses EAT (UTC+3). Mogadishu is the capital. The live clock above shows the current local time in Somalia.' } },
    { '@type': 'Question', name: 'What time zone is Mogadishu in?', acceptedAnswer: { '@type': 'Answer', text: 'Mogadishu uses EAT (UTC+3). The IANA time zone identifier is Africa/Mogadishu. ' } },
    { '@type': 'Question', name: 'Does Somalia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Somalia does not observe Daylight Saving Time. Somalia uses East Africa Time (EAT, UTC+3) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Somalia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Somalia is during local business hours: Monday–Friday, 9 AM–5 PM EAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Somalia', item: 'https://whattime.city/somalia/' }] }

export default function SomaliaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Somalia" subtitle="EAT (UTC+3) · Mogadishu · UTC+3" />
      <SomaliaClockClient />
      <CountryFactsSection hubSlug="somalia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Somalia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Somalia: Africa/Mogadishu (EAT (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
