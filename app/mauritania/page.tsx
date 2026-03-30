import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MauritaniaClockClient from './MauritaniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Mauritania Now — GMT (UTC+0)',
  description: 'What time is it in Mauritania right now? Live Nouakchott clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in mauritania', 'mauritania time now', 'what time is it in mauritania', 'nouakchott time', 'mauritania time zone'],
  alternates: { canonical: 'https://whattime.city/mauritania/' },
  openGraph: { title: 'Current Time in Mauritania — GMT · Nouakchott', description: 'Live Mauritania time. Nouakchott on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/mauritania/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Mauritania right now?', acceptedAnswer: { '@type': 'Answer', text: 'Mauritania uses GMT (UTC+0). Nouakchott is the capital. The live clock above shows the current local time in Mauritania.' } },
    { '@type': 'Question', name: 'What time zone is Nouakchott in?', acceptedAnswer: { '@type': 'Answer', text: 'Nouakchott uses GMT (UTC+0). The IANA time zone identifier is Africa/Nouakchott. ' } },
    { '@type': 'Question', name: 'Does Mauritania observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Mauritania does not observe Daylight Saving Time. Mauritania uses Greenwich Mean Time (GMT, UTC+0) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Mauritania?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Mauritania is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Mauritania', item: 'https://whattime.city/mauritania/' }] }

export default function MauritaniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Mauritania" subtitle="GMT (UTC+0) · Nouakchott · UTC+0" />
      <MauritaniaClockClient />
      <CountryFactsSection hubSlug="mauritania" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Mauritania & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Mauritania: Africa/Nouakchott (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
