import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ThailandClockClient from './ThailandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Thailand Now — ICT (UTC+7) · No DST',
  description: 'What time is it in Thailand right now? Thailand uses Indochina Time (ICT, UTC+7) year-round with no Daylight Saving Time. Live Bangkok clock, Thailand vs world cities, and best time to call.',
  keywords: ['time in thailand', 'thailand time now', 'what time is it in thailand', 'bangkok time', 'thailand time zone', 'ICT thailand', 'thailand utc+7', 'phuket time', 'chiang mai time', 'thailand time vs usa', 'thailand time vs uk', 'thailand time vs singapore'],
  alternates: { canonical: 'https://whattime.city/thailand/' },
  openGraph: { title: 'Current Time in Thailand — ICT (UTC+7) · No DST', description: 'Live Thailand time. ICT (UTC+7) year-round. Bangkok, Phuket, Chiang Mai, Pattaya all on the same time.', type: 'website', url: 'https://whattime.city/thailand/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Thailand right now?', acceptedAnswer: { '@type': 'Answer', text: 'Thailand uses Indochina Time (ICT, UTC+7) year-round. All cities — Bangkok, Phuket, Chiang Mai, Pattaya, and Koh Samui — are on the same time. Thailand does not observe Daylight Saving Time. The live clock above shows the current time in Thailand.' } },
    { '@type': 'Question', name: 'What time zone is Thailand in?', acceptedAnswer: { '@type': 'Answer', text: 'Thailand uses Indochina Time (ICT, UTC+7). The IANA identifier is Asia/Bangkok. Thailand shares ICT (UTC+7) with Vietnam, Cambodia, Laos, and western Indonesia (WIB). Thailand has not observed Daylight Saving Time since 1920.' } },
    { '@type': 'Question', name: 'Does Thailand observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Thailand does not observe Daylight Saving Time. ICT (UTC+7) is fixed year-round. Thailand is close to the equator, where seasonal daylight variation is minimal, making DST impractical.' } },
    { '@type': 'Question', name: 'What is the time difference between Thailand and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Bangkok (ICT, UTC+7) is 12 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 11 hours. Bangkok is 15 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Thailand and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Bangkok (ICT, UTC+7) is 7 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 6 hours. Since Thailand has no DST, this changes only when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Thailand and Singapore?', acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 1 hour ahead of Bangkok (ICT, UTC+7). Both countries have no DST, so this 1-hour gap is constant year-round. When it is 9:00 AM in Bangkok, it is 10:00 AM in Singapore.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Thailand', item: 'https://whattime.city/thailand/' }] }

export default function ThailandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Thailand" subtitle="Indochina Time (ICT) · UTC+7 · No Daylight Saving Time" />
      <ThailandClockClient />
      <CountryFactsSection hubSlug="thailand" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Bangkok time', href: '/bangkok/' }, { label: 'Phuket time', href: '/phuket/' }, { label: 'Chiang Mai time', href: '/chiang-mai/' }, { label: 'Bangkok → London', href: '/time/bangkok/london/' }, { label: 'Bangkok → New York', href: '/time/bangkok/new-york/' }, { label: 'Bangkok → Singapore', href: '/time/bangkok/singapore/' }, { label: 'Bangkok → Sydney', href: '/time/bangkok/sydney/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Thailand City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Thailand: Asia/Bangkok (ICT UTC+7, no DST)."
      />
    </ContentPageWrapper>
  )
}
