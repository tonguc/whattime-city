import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NauruClockClient from './NauruClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Nauru Now — NRT (UTC+12) · Yaren',
  description: 'What time is it in Nauru right now? Live Yaren clock, time zone info (NRT (UTC+12)), best time to call, and time difference with major cities.',
  keywords: ['time in nauru', 'nauru time now', 'what time is it in nauru', 'yaren time', 'nauru time zone'],
  alternates: { canonical: 'https://whattime.city/nauru/' },
  openGraph: { title: 'Current Time in Nauru — NRT · Yaren', description: 'Live Nauru time. Yaren on NRT (UTC+12).', type: 'website', url: 'https://whattime.city/nauru/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Nauru right now?', acceptedAnswer: { '@type': 'Answer', text: 'Nauru uses NRT (UTC+12). Yaren is the capital. The live clock above shows the current local time in Nauru.' } },
    { '@type': 'Question', name: 'What time zone is Yaren in?', acceptedAnswer: { '@type': 'Answer', text: 'Yaren uses NRT (UTC+12). The IANA time zone identifier is Pacific/Nauru. ' } },
    { '@type': 'Question', name: 'Does Nauru observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Nauru does not observe Daylight Saving Time. Nauru uses Nauru Time (NRT, UTC+12) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Nauru?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Nauru is during local business hours: Monday–Friday, 9 AM–5 PM NRT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Nauru', item: 'https://whattime.city/nauru/' }] }

export default function NauruTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Nauru" subtitle="NRT (UTC+12) · Yaren · UTC+12" />
      <NauruClockClient />
      <CountryFactsSection hubSlug="nauru" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Nauru & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Nauru: Pacific/Nauru (NRT (UTC+12))."
      />
    </ContentPageWrapper>
  )
}
