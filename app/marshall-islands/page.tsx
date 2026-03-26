import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MarshallIslandsClockClient from './MarshallIslandsClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Marshall Islands Now — MHT (UTC+12) · Majuro',
  description: 'What time is it in Marshall Islands right now? Live Majuro clock, time zone info (MHT (UTC+12)), best time to call, and time difference with major cities.',
  keywords: ['time in marshall islands', 'marshall islands time now', 'what time is it in marshall islands', 'majuro time', 'marshall islands time zone'],
  alternates: { canonical: 'https://whattime.city/marshall-islands/' },
  openGraph: { title: 'Current Time in Marshall Islands — MHT · Majuro', description: 'Live Marshall Islands time. Majuro on MHT (UTC+12).', type: 'website', url: 'https://whattime.city/marshall-islands/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Marshall Islands right now?', acceptedAnswer: { '@type': 'Answer', text: 'Marshall Islands uses MHT (UTC+12). Majuro is the capital. The live clock above shows the current local time in Marshall Islands.' } },
    { '@type': 'Question', name: 'What time zone is Majuro in?', acceptedAnswer: { '@type': 'Answer', text: 'Majuro uses MHT (UTC+12). The IANA time zone identifier is Pacific/Majuro. ' } },
    { '@type': 'Question', name: 'Does Marshall Islands observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Marshall Islands offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Marshall Islands?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Marshall Islands is during local business hours: Monday–Friday, 9 AM–5 PM MHT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Marshall Islands', item: 'https://whattime.city/marshall-islands/' }] }

export default function MarshallIslandsTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Marshall Islands" subtitle="MHT (UTC+12) · Majuro · UTC+12" />
      <MarshallIslandsClockClient />
      <CountryFactsSection hubSlug="marshall-islands" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Sydney time","href":"/sydney/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in New Zealand","href":"/new-zealand/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Marshall Islands & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Marshall Islands: Pacific/Majuro (MHT (UTC+12))."
      />
    </ContentPageWrapper>
  )
}
