import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BurkinaFasoClockClient from './BurkinaFasoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Burkina Faso Now — GMT (UTC+0)',
  description: 'What time is it in Burkina Faso right now? Live Ouagadougou clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in burkina faso', 'burkina faso time now', 'what time is it in burkina faso', 'ouagadougou time', 'burkina faso time zone'],
  alternates: { canonical: 'https://whattime.city/burkina-faso/' },
  openGraph: { title: 'Current Time in Burkina Faso — GMT · Ouagadougou', description: 'Live Burkina Faso time. Ouagadougou on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/burkina-faso/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Burkina Faso right now?', acceptedAnswer: { '@type': 'Answer', text: 'Burkina Faso uses GMT (UTC+0). Ouagadougou is the capital. The live clock above shows the current local time in Burkina Faso.' } },
    { '@type': 'Question', name: 'What time zone is Ouagadougou in?', acceptedAnswer: { '@type': 'Answer', text: 'Ouagadougou uses GMT (UTC+0). The IANA time zone identifier is Africa/Ouagadougou. ' } },
    { '@type': 'Question', name: 'Does Burkina Faso observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Burkina Faso does not observe Daylight Saving Time. Burkina Faso uses Greenwich Mean Time (GMT, UTC+0) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Burkina Faso?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Burkina Faso is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Burkina Faso', item: 'https://whattime.city/burkina-faso/' }] }

export default function BurkinaFasoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Burkina Faso" subtitle="GMT (UTC+0) · Ouagadougou · UTC+0" />
      <BurkinaFasoClockClient />
      <CountryFactsSection hubSlug="burkina-faso" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Burkina Faso & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Burkina Faso: Africa/Ouagadougou (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
