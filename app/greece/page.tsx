import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GreeceClockClient from './GreeceClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Greece Now — EET/EEST (UTC+2/+3) · Athens · Eastern European Time',
  description: 'What time is it in Greece right now? Greece uses Eastern European Time (EET, UTC+2) in winter and EEST (UTC+3) in summer. Live Athens clock, Greece vs world cities, and best time to call.',
  keywords: ['time in greece', 'greece time now', 'what time is it in greece', 'athens time', 'greece time zone', 'EET EEST greece', 'greece utc+2', 'thessaloniki time', 'greece time vs uk', 'greece time vs usa', 'greece dst'],
  alternates: { canonical: 'https://whattime.city/greece/' },
  openGraph: { title: 'Current Time in Greece — EET/EEST · Athens', description: 'Live Greece time. Athens on EET (UTC+2) in winter and EEST (UTC+3) in summer.', type: 'website', url: 'https://whattime.city/greece/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Greece right now?', acceptedAnswer: { '@type': 'Answer', text: 'Greece uses Eastern European Time (EET, UTC+2) in winter and Eastern European Summer Time (EEST, UTC+3) during Daylight Saving Time. All Greek cities — Athens, Thessaloniki, Patras, and the islands — are in the same time zone. The live clock above shows the current time in Greece.' } },
    { '@type': 'Question', name: 'What time zone is Athens in?', acceptedAnswer: { '@type': 'Answer', text: 'Athens uses Eastern European Time (EET, UTC+2) in winter and EEST (UTC+3) in summer. The IANA identifier is Europe/Athens. Athens is 1 hour ahead of Berlin and Paris (CET/CEST) and 2 hours ahead of London (GMT) in winter. Greece is in the same time zone as Cyprus, Ukraine, Bulgaria, and Romania.' } },
    { '@type': 'Question', name: 'Does Greece observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Greece observes Daylight Saving Time, following the EU schedule. Clocks spring forward 1 hour to EEST (UTC+3) on the last Sunday of March and fall back to EET (UTC+2) on the last Sunday of October.' } },
    { '@type': 'Question', name: 'What is the time difference between Greece and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Athens (EET, UTC+2) is 2 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1) and Greece\'s EEST (UTC+3) in summer, Athens remains 2 hours ahead of London. The 2-hour difference is constant year-round because both countries observe DST on the same schedule.' } },
    { '@type': 'Question', name: 'What is the time difference between Greece and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Athens (EET, UTC+2) is 7 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 6 hours. When both regions are on summer time, Athens (EEST, UTC+3) is 7 hours ahead of New York (EDT, UTC−4).' } },
    { '@type': 'Question', name: 'What is the time difference between Greece and Turkey (Istanbul)?', acceptedAnswer: { '@type': 'Answer', text: 'Greece (EET/EEST) and Turkey (TRT, UTC+3 year-round) differ seasonally. In winter, Athens (UTC+2) is 1 hour behind Istanbul (UTC+3). In summer, Athens moves to EEST (UTC+3), matching Istanbul exactly. Turkey abolished DST in 2016 and stays on UTC+3 permanently.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Greece', item: 'https://whattime.city/greece/' }] }

export default function GreeceTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Greece" subtitle="Eastern European Time (EET/EEST) · Athens · UTC+2 / UTC+3" />
      <GreeceClockClient />
      <CountryFactsSection hubSlug="greece" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Athens time', href: '/athens/' }, { label: 'Istanbul time', href: '/istanbul/' }, { label: 'Rome time', href: '/rome/' }, { label: 'Time in Turkey', href: '/turkey/' }, { label: 'Time in Italy', href: '/italy/' }, { label: 'Time in Ukraine', href: '/ukraine/' }, { label: 'Athens → London', href: '/time/athens/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Greece & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Greece: Europe/Athens (EET UTC+2 / EEST UTC+3)."
      />
    </ContentPageWrapper>
  )
}
