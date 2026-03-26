import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MalaysiaClockClient from './MalaysiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Malaysia Now — MYT (UTC+8) · Kuala Lumpur · No DST',
  description: 'What time is it in Malaysia right now? Malaysia uses Malaysia Time (MYT, UTC+8) year-round with no Daylight Saving Time. Live Kuala Lumpur clock, Malaysia vs world cities, and best time to call.',
  keywords: ['time in malaysia', 'malaysia time now', 'what time is it in malaysia', 'kuala lumpur time', 'malaysia time zone', 'MYT malaysia', 'malaysia utc+8', 'penang time', 'kota kinabalu time', 'malaysia time vs uk', 'malaysia time vs usa', 'malaysia time vs australia'],
  alternates: { canonical: 'https://whattime.city/malaysia/' },
  openGraph: { title: 'Current Time in Malaysia — MYT (UTC+8) · No DST', description: 'Live Malaysia time. MYT (UTC+8) year-round. Kuala Lumpur, Penang, Johor Bahru, Kota Kinabalu all on the same time.', type: 'website', url: 'https://whattime.city/malaysia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Malaysia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Malaysia uses Malaysia Time (MYT, UTC+8) year-round. All cities — Kuala Lumpur, Penang, Johor Bahru, Kota Kinabalu, and Kuching — are on the same time zone. Malaysia does not observe Daylight Saving Time. The live clock above shows the current time in Malaysia.' } },
    { '@type': 'Question', name: 'What time zone is Malaysia in?', acceptedAnswer: { '@type': 'Answer', text: 'Malaysia uses Malaysia Time (MYT, UTC+8). The IANA identifier is Asia/Kuala_Lumpur. Malaysia shares UTC+8 with Singapore, Hong Kong, the Philippines, and parts of China. Malaysia standardised all of its territory (including Sabah and Sarawak) on UTC+8 in 1982.' } },
    { '@type': 'Question', name: 'Does Malaysia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Malaysia does not observe Daylight Saving Time. MYT (UTC+8) is fixed year-round. Malaysia is close to the equator, where seasonal daylight variation is minimal, making DST unnecessary.' } },
    { '@type': 'Question', name: 'What is the time difference between Malaysia and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Kuala Lumpur (MYT, UTC+8) is 8 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 7 hours. Since Malaysia has no DST, this difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Malaysia and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Kuala Lumpur (MYT, UTC+8) is 13 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 12 hours. Kuala Lumpur is 16 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Malaysia and Singapore?', acceptedAnswer: { '@type': 'Answer', text: 'Malaysia (MYT, UTC+8) and Singapore (SGT, UTC+8) are on the same time. There is no time difference between Kuala Lumpur and Singapore. Both countries share UTC+8 with no DST.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Malaysia', item: 'https://whattime.city/malaysia/' }] }

export default function MalaysiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Malaysia" subtitle="Malaysia Time (MYT) · UTC+8 · No Daylight Saving Time" />
      <MalaysiaClockClient />
      <CountryFactsSection hubSlug="malaysia" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Kuala Lumpur time', href: '/kuala-lumpur/' }, { label: 'Singapore time', href: '/singapore/' }, { label: 'Bangkok time', href: '/bangkok/' }, { label: 'KL → London', href: '/time/kuala-lumpur/london/' }, { label: 'KL → New York', href: '/time/kuala-lumpur/new-york/' }, { label: 'KL → Sydney', href: '/time/kuala-lumpur/sydney/' }, { label: 'Time in Thailand', href: '/thailand/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Malaysia City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Malaysia: Asia/Kuala_Lumpur (MYT UTC+8, no DST)."
      />
    </ContentPageWrapper>
  )
}
