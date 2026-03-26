import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BulgariaClockClient from './BulgariaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Bulgaria Now — EET (UTC+2) · Sofia',
  description: 'What time is it in Bulgaria right now? Live Sofia clock, time zone info (EET (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in bulgaria', 'bulgaria time now', 'what time is it in bulgaria', 'sofia time', 'bulgaria time zone'],
  alternates: { canonical: 'https://whattime.city/bulgaria/' },
  openGraph: { title: 'Current Time in Bulgaria — EET · Sofia', description: 'Live Bulgaria time. Sofia on EET (UTC+2).', type: 'website', url: 'https://whattime.city/bulgaria/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bulgaria right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bulgaria uses EET (UTC+2). Sofia is the capital. The live clock above shows the current local time in Bulgaria.' } },
    { '@type': 'Question', name: 'What time zone is Sofia in?', acceptedAnswer: { '@type': 'Answer', text: 'Sofia uses EET (UTC+2). The IANA time zone identifier is Europe/Sofia. Bulgaria spans multiple time zones: EET (UTC+2), EEST (UTC+3).' } },
    { '@type': 'Question', name: 'Does Bulgaria observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bulgaria observes Eastern European Summer Time (EEST, UTC+3) from the last Sunday in March to the last Sunday in October. Outside this period, Bulgaria uses EET (UTC+2).' } },
    { '@type': 'Question', name: 'What is the best time to call Bulgaria?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Bulgaria is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bulgaria', item: 'https://whattime.city/bulgaria/' }] }

export default function BulgariaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Bulgaria" subtitle="EET (UTC+2) · Sofia · UTC+2" />
      <BulgariaClockClient />
      <CountryFactsSection hubSlug="bulgaria" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"London time","href":"/london/"},{"label":"Paris time","href":"/paris/"},{"label":"Berlin time","href":"/berlin/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Bulgaria & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Bulgaria: Europe/Sofia (EET (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
