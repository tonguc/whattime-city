import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GambiaClockClient from './GambiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Gambia Now — GMT (UTC+0) · Banjul',
  description: 'What time is it in Gambia right now? Live Banjul clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in gambia', 'gambia time now', 'what time is it in gambia', 'banjul time', 'gambia time zone'],
  alternates: { canonical: 'https://whattime.city/gambia/' },
  openGraph: { title: 'Current Time in Gambia — GMT · Banjul', description: 'Live Gambia time. Banjul on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/gambia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Gambia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Gambia uses GMT (UTC+0). Banjul is the capital. The live clock above shows the current local time in Gambia.' } },
    { '@type': 'Question', name: 'What time zone is Banjul in?', acceptedAnswer: { '@type': 'Answer', text: 'Banjul uses GMT (UTC+0). The IANA time zone identifier is Africa/Banjul. ' } },
    { '@type': 'Question', name: 'Does Gambia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Gambia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Gambia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Gambia is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Gambia', item: 'https://whattime.city/gambia/' }] }

export default function GambiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Gambia" subtitle="GMT (UTC+0) · Banjul · UTC+0" />
      <GambiaClockClient />
      <CountryFactsSection hubSlug="gambia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Gambia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Gambia: Africa/Banjul (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
