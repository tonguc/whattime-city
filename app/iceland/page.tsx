import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IcelandClockClient from './IcelandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Iceland Now — GMT (UTC+0)',
  description: 'What time is it in Iceland right now? Live Reykjavik clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in iceland', 'iceland time now', 'what time is it in iceland', 'reykjavik time', 'iceland time zone'],
  alternates: { canonical: 'https://whattime.city/iceland/' },
  openGraph: { title: 'Current Time in Iceland — GMT · Reykjavik', description: 'Live Iceland time. Reykjavik on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/iceland/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Iceland right now?', acceptedAnswer: { '@type': 'Answer', text: 'Iceland uses GMT (UTC+0). Reykjavik is the capital. The live clock above shows the current local time in Iceland.' } },
    { '@type': 'Question', name: 'What time zone is Reykjavik in?', acceptedAnswer: { '@type': 'Answer', text: 'Reykjavik uses GMT (UTC+0). The IANA time zone identifier is Atlantic/Reykjavik. ' } },
    { '@type': 'Question', name: 'Does Iceland observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Iceland does not observe Daylight Saving Time. Iceland uses Greenwich Mean Time (GMT, UTC+0) year-round, making it unique among European countries.' } },
    { '@type': 'Question', name: 'What is the best time to call Iceland?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Iceland is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Iceland', item: 'https://whattime.city/iceland/' }] }

export default function IcelandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Iceland" subtitle="GMT (UTC+0) · Reykjavik · UTC+0" />
      <IcelandClockClient />
      <CountryFactsSection hubSlug="iceland" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Iceland & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Iceland: Atlantic/Reykjavik (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
