import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SaoTomeAndPrincipeClockClient from './SaoTomeAndPrincipeClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in São Tomé & Príncipe — GMT (UTC+0)',
  description: 'What time is it in São Tomé and Príncipe right now? Live São Tomé clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in são tomé and príncipe', 'são tomé and príncipe time now', 'what time is it in são tomé and príncipe', 'são tomé time', 'são tomé and príncipe time zone'],
  alternates: { canonical: 'https://whattime.city/sao-tome-and-principe/' },
  openGraph: { title: 'Current Time in São Tomé and Príncipe — GMT · São Tomé', description: 'Live São Tomé and Príncipe time. São Tomé on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/sao-tome-and-principe/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in São Tomé and Príncipe right now?', acceptedAnswer: { '@type': 'Answer', text: 'São Tomé and Príncipe uses GMT (UTC+0). São Tomé is the capital. The live clock above shows the current local time in São Tomé and Príncipe.' } },
    { '@type': 'Question', name: 'What time zone is São Tomé in?', acceptedAnswer: { '@type': 'Answer', text: 'São Tomé uses GMT (UTC+0). The IANA time zone identifier is Africa/Sao_Tome. ' } },
    { '@type': 'Question', name: 'Does São Tomé and Príncipe observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. São Tomé and Príncipe does not observe Daylight Saving Time. It uses Greenwich Mean Time (GMT, UTC+0) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call São Tomé and Príncipe?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call São Tomé and Príncipe is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in São Tomé and Príncipe', item: 'https://whattime.city/sao-tome-and-principe/' }] }

export default function SaoTomeAndPrincipeTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in São Tomé and Príncipe" subtitle="GMT (UTC+0) · São Tomé · UTC+0" />
      <SaoTomeAndPrincipeClockClient />
      <CountryFactsSection hubSlug="sao-tome-and-principe" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="São Tomé and Príncipe & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. São Tomé and Príncipe: Africa/Sao_Tome (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
