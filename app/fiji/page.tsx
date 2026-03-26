import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import FijiClockClient from './FijiClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Fiji Now — FJT (UTC+12) · Suva',
  description: 'What time is it in Fiji right now? Live Suva clock, time zone info (FJT (UTC+12)), best time to call, and time difference with major cities.',
  keywords: ['time in fiji', 'fiji time now', 'what time is it in fiji', 'suva time', 'fiji time zone'],
  alternates: { canonical: 'https://whattime.city/fiji/' },
  openGraph: { title: 'Current Time in Fiji — FJT · Suva', description: 'Live Fiji time. Suva on FJT (UTC+12).', type: 'website', url: 'https://whattime.city/fiji/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Fiji right now?', acceptedAnswer: { '@type': 'Answer', text: 'Fiji uses FJT (UTC+12). Suva is the capital. The live clock above shows the current local time in Fiji.' } },
    { '@type': 'Question', name: 'What time zone is Suva in?', acceptedAnswer: { '@type': 'Answer', text: 'Suva uses FJT (UTC+12). The IANA time zone identifier is Pacific/Fiji. Fiji spans multiple time zones: FJT (UTC+12), FJST (UTC+13).' } },
    { '@type': 'Question', name: 'Does Fiji observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Fiji offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Fiji?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Fiji is during local business hours: Monday–Friday, 9 AM–5 PM FJT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Fiji', item: 'https://whattime.city/fiji/' }] }

export default function FijiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Fiji" subtitle="FJT (UTC+12) · Suva · UTC+12" />
      <FijiClockClient />
      <CountryFactsSection hubSlug="fiji" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Fiji & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Fiji: Pacific/Fiji (FJT (UTC+12))."
      />
    </ContentPageWrapper>
  )
}
