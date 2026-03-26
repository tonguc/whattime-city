import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SolomonIslandsClockClient from './SolomonIslandsClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Solomon Islands Now — SBT (UTC+11) · Honiara',
  description: 'What time is it in Solomon Islands right now? Live Honiara clock, time zone info (SBT (UTC+11)), best time to call, and time difference with major cities.',
  keywords: ['time in solomon islands', 'solomon islands time now', 'what time is it in solomon islands', 'honiara time', 'solomon islands time zone'],
  alternates: { canonical: 'https://whattime.city/solomon-islands/' },
  openGraph: { title: 'Current Time in Solomon Islands — SBT · Honiara', description: 'Live Solomon Islands time. Honiara on SBT (UTC+11).', type: 'website', url: 'https://whattime.city/solomon-islands/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Solomon Islands right now?', acceptedAnswer: { '@type': 'Answer', text: 'Solomon Islands uses SBT (UTC+11). Honiara is the capital. The live clock above shows the current local time in Solomon Islands.' } },
    { '@type': 'Question', name: 'What time zone is Honiara in?', acceptedAnswer: { '@type': 'Answer', text: 'Honiara uses SBT (UTC+11). The IANA time zone identifier is Pacific/Guadalcanal. ' } },
    { '@type': 'Question', name: 'Does Solomon Islands observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Solomon Islands offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Solomon Islands?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Solomon Islands is during local business hours: Monday–Friday, 9 AM–5 PM SBT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Solomon Islands', item: 'https://whattime.city/solomon-islands/' }] }

export default function SolomonIslandsTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Solomon Islands" subtitle="SBT (UTC+11) · Honiara · UTC+11" />
      <SolomonIslandsClockClient />
      <CountryFactsSection hubSlug="solomon-islands" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Solomon Islands & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Solomon Islands: Pacific/Guadalcanal (SBT (UTC+11))."
      />
    </ContentPageWrapper>
  )
}
