import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SouthAfricaClockClient from './SouthAfricaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in South Africa Now — SAST (UTC+2)',
  description: 'What time is it in South Africa right now? South Africa uses South Africa Standard Time (SAST, UTC+2) year-round with no Daylight Saving Time. Live Johannesburg clock, South Africa vs world cities.',
  keywords: ['time in south africa', 'south africa time now', 'what time is it in south africa', 'johannesburg time', 'cape town time', 'south africa time zone', 'SAST time zone', 'south africa utc+2', 'south africa no daylight saving', 'south africa time vs usa', 'south africa time vs uk', 'durban time'],
  alternates: { canonical: 'https://whattime.city/south-africa/' },
  openGraph: { title: 'Time in South Africa Now — SAST (UTC+2)', description: 'Live South Africa time. SAST (UTC+2) used year-round. No DST. Johannesburg, Cape Town, Durban, Pretoria all on the same time.', type: 'website', url: 'https://whattime.city/south-africa/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in South Africa right now?', acceptedAnswer: { '@type': 'Answer', text: 'South Africa uses South Africa Standard Time (SAST, UTC+2) year-round. All cities — Johannesburg, Cape Town, Durban, Pretoria, and Port Elizabeth — are on the same time. South Africa does not observe Daylight Saving Time. The live clock above shows the current time in South Africa.' } },
    { '@type': 'Question', name: 'What time zone is South Africa in?', acceptedAnswer: { '@type': 'Answer', text: 'South Africa uses South Africa Standard Time (SAST, UTC+2). The IANA identifier is Africa/Johannesburg. South Africa shares UTC+2 with Egypt (EET), Zimbabwe, Zambia, Botswana, and several other southern African countries. Greece, Romania, and the Eastern Mediterranean also use UTC+2 (as EET/EEST, with DST).' } },
    { '@type': 'Question', name: 'Does South Africa observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. South Africa does not observe Daylight Saving Time. SAST (UTC+2) is used year-round. South Africa last used DST from 1942 to 1944 during World War II. Since then, SAST has remained fixed at UTC+2.' } },
    { '@type': 'Question', name: 'What is the time difference between South Africa and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Johannesburg (SAST, UTC+2) is 7 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 6 hours. Johannesburg is 10 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between South Africa and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Johannesburg (SAST, UTC+2) is 2 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 1 hour. Since South Africa has no DST, this difference changes only when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between South Africa and India?', acceptedAnswer: { '@type': 'Answer', text: 'Mumbai (IST, UTC+5:30) is 3.5 hours ahead of Johannesburg (SAST, UTC+2). Both regions have no DST, so this 3.5-hour gap is constant year-round. South Africa and India maintain strong trade and diaspora ties, making this a commonly searched time difference.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in South Africa', item: 'https://whattime.city/south-africa/' }] }

export default function SouthAfricaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in South Africa" subtitle="South Africa Standard Time (SAST) · UTC+2 · No Daylight Saving Time" />
      <SouthAfricaClockClient />
      <CountryFactsSection hubSlug="south-africa" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Johannesburg time', href: '/johannesburg/' }, { label: 'Cape Town time', href: '/cape-town/' }, { label: 'Durban time', href: '/durban/' }, { label: 'Johannesburg → London', href: '/time/johannesburg/london/' }, { label: 'Johannesburg → New York', href: '/time/johannesburg/new-york/' }, { label: 'Johannesburg → Dubai', href: '/time/johannesburg/dubai/' }, { label: 'Johannesburg → Mumbai', href: '/time/johannesburg/mumbai/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="South Africa City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. South Africa: Africa/Johannesburg (SAST UTC+2, no DST)."
      />
    </ContentPageWrapper>
  )
}
