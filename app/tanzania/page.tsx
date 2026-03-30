import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TanzaniaClockClient from './TanzaniaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Tanzania Now — EAT (UTC+3) · No DST',
  description: 'What time is it in Tanzania right now? Tanzania uses East Africa Time (EAT, UTC+3) year-round with no Daylight Saving Time. Live Dar es Salaam clock, Tanzania vs world cities.',
  keywords: ['time in tanzania', 'tanzania time now', 'what time is it in tanzania', 'dar es salaam time', 'tanzania time zone', 'EAT tanzania', 'tanzania utc+3', 'dodoma time', 'zanzibar time', 'tanzania time vs uk', 'tanzania time vs usa', 'east africa time'],
  alternates: { canonical: 'https://whattime.city/tanzania/' },
  openGraph: { title: 'Current Time in Tanzania — EAT (UTC+3) · No DST', description: 'Live Tanzania time. Dar es Salaam and Zanzibar on EAT (UTC+3) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/tanzania/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Tanzania right now?', acceptedAnswer: { '@type': 'Answer', text: 'Tanzania uses East Africa Time (EAT, UTC+3) year-round. Dar es Salaam, Dodoma (capital), Arusha, Zanzibar, and all Tanzanian cities are on UTC+3 with no Daylight Saving Time. The live clock above shows the current time in Tanzania.' } },
    { '@type': 'Question', name: 'What time zone is Dar es Salaam in?', acceptedAnswer: { '@type': 'Answer', text: 'Dar es Salaam uses East Africa Time (EAT, UTC+3). The IANA identifier is Africa/Dar_es_Salaam. Tanzania shares EAT (UTC+3) with Kenya, Uganda, Ethiopia, Somalia, and South Sudan. All of these countries observe the same time with no Daylight Saving Time.' } },
    { '@type': 'Question', name: 'Does Tanzania observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Tanzania does not observe Daylight Saving Time. EAT (UTC+3) is fixed year-round. Located near the equator, Tanzania has minimal seasonal daylight variation, making DST impractical.' } },
    { '@type': 'Question', name: 'What is the time difference between Tanzania and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Dar es Salaam (EAT, UTC+3) is 3 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 2 hours. Since Tanzania has no DST, the difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Tanzania and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Dar es Salaam (EAT, UTC+3) is 8 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 7 hours. Dar es Salaam is 11 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'Is Zanzibar on the same time as mainland Tanzania?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Zanzibar is on the same time as mainland Tanzania — both use East Africa Time (EAT, UTC+3). The Zanzibar archipelago, though a semi-autonomous region, is part of Tanzania and shares the same time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Tanzania', item: 'https://whattime.city/tanzania/' }] }

export default function TanzaniaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Tanzania" subtitle="East Africa Time (EAT) · UTC+3 · No Daylight Saving Time" />
      <TanzaniaClockClient />
      <CountryFactsSection hubSlug="tanzania" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Nairobi time', href: '/nairobi/' }, { label: 'Dubai time', href: '/dubai/' }, { label: 'Cairo time', href: '/cairo/' }, { label: 'Time in Kenya', href: '/kenya/' }, { label: 'Time in Ethiopia', href: '/ethiopia/' }, { label: 'Time in South Africa', href: '/south-africa/' }, { label: 'Time in Saudi Arabia', href: '/saudi-arabia/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Tanzania & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Tanzania: Africa/Dar_es_Salaam (EAT UTC+3, no DST)."
      />
    </ContentPageWrapper>
  )
}
