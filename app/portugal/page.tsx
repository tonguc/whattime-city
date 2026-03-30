import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PortugalClockClient from './PortugalClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Portugal Now — WET/WEST (UTC+0/+1)',
  description: 'What time is it in Portugal right now? Portugal uses WET (UTC+0) in winter and WEST (UTC+1) in summer. The Azores are 1 hour behind Lisbon. Live clock and best time to call.',
  keywords: ['time in portugal', 'portugal time now', 'what time is it in portugal', 'lisbon time', 'portugal time zone', 'WET WEST portugal', 'portugal utc+0', 'porto time', 'azores time', 'portugal time vs uk', 'portugal time vs usa', 'portugal dst'],
  alternates: { canonical: 'https://whattime.city/portugal/' },
  openGraph: { title: 'Current Time in Portugal — WET/WEST · Lisbon · Azores', description: 'Live Portugal time. Lisbon on WET (UTC+0) in winter, WEST (UTC+1) in summer. Azores Islands 1 hour behind.', type: 'website', url: 'https://whattime.city/portugal/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Portugal right now?', acceptedAnswer: { '@type': 'Answer', text: 'Portugal (mainland and Madeira) uses Western European Time (WET, UTC+0) in winter and Western European Summer Time (WEST, UTC+1) during Daylight Saving Time. The Azores Islands are 1 hour behind mainland Portugal year-round. The live clock above shows Lisbon (mainland) time.' } },
    { '@type': 'Question', name: 'What time zone is Lisbon in?', acceptedAnswer: { '@type': 'Answer', text: 'Lisbon uses Western European Time (WET, UTC+0) in winter and WEST (UTC+1) in summer. The IANA identifier is Europe/Lisbon. Lisbon shares its standard time with London (GMT, UTC+0) and Iceland (UTC+0). Notably, despite being in western Europe, Lisbon is on the same time as London rather than following Spain\'s CET (UTC+1).' } },
    { '@type': 'Question', name: 'What time zone are the Azores in?', acceptedAnswer: { '@type': 'Answer', text: 'The Azores Islands use Atlantic/Azores time — AZOT (UTC−1) in winter and AZOST (UTC+0) in summer (when the Azores observe DST). The Azores are always 1 hour behind mainland Portugal. In summer, the Azores move to UTC+0, matching London (GMT).' } },
    { '@type': 'Question', name: 'Does Portugal observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Portugal observes Daylight Saving Time. Clocks spring forward 1 hour to WEST (UTC+1) on the last Sunday of March and fall back to WET (UTC+0) on the last Sunday of October. The Azores also observe DST on the same schedule (shifting from UTC−1 to UTC+0).' } },
    { '@type': 'Question', name: 'What is the time difference between Portugal and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Portugal and the UK are on the same time year-round. Both Lisbon (WET/WEST) and London (GMT/BST) observe DST on the same schedule, so they are always synchronized. In winter both are UTC+0; in summer both move to UTC+1.' } },
    { '@type': 'Question', name: 'What is the time difference between Portugal and Spain?', acceptedAnswer: { '@type': 'Answer', text: 'Portugal (WET/WEST) is 1 hour behind Spain (CET/CEST) year-round. Despite sharing the Iberian Peninsula, Portugal follows the GMT time zone while Spain follows Central European Time. When it is noon in Lisbon, it is 1:00 PM in Madrid. Both observe DST on the same dates, so the 1-hour gap is constant.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Portugal', item: 'https://whattime.city/portugal/' }] }

export default function PortugalTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Portugal" subtitle="Western European Time (WET/WEST) · Lisbon · UTC+0 / UTC+1 · Azores 1h behind" />
      <PortugalClockClient />
      <CountryFactsSection hubSlug="portugal" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Lisbon time', href: '/lisbon/' }, { label: 'London time', href: '/london/' }, { label: 'Madrid time', href: '/madrid/' }, { label: 'Time in Spain', href: '/spain/' }, { label: 'Time in Morocco', href: '/morocco/' }, { label: 'Time in UK', href: '/uk/' }, { label: 'Lisbon → New York', href: '/time/lisbon/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Portugal & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Portugal: Europe/Lisbon (WET UTC+0 / WEST UTC+1); Azores: Atlantic/Azores."
      />
    </ContentPageWrapper>
  )
}
