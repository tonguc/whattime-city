import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import VenezuelaClockClient from './VenezuelaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Venezuela Now — VET (UTC−4) · No DST',
  description: 'What time is it in Venezuela right now? Venezuela uses Venezuela Time (VET, UTC−4) year-round with no Daylight Saving Time. Live Caracas clock, Venezuela vs world cities.',
  keywords: ['time in venezuela', 'venezuela time now', 'what time is it in venezuela', 'caracas time', 'venezuela time zone', 'VET venezuela', 'venezuela utc-4', 'maracaibo time', 'venezuela time vs usa', 'venezuela time vs uk', 'venezuela time vs colombia'],
  alternates: { canonical: 'https://whattime.city/venezuela/' },
  openGraph: { title: 'Current Time in Venezuela — VET (UTC−4) · No DST', description: 'Live Venezuela time. Caracas on VET (UTC−4) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/venezuela/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Venezuela right now?', acceptedAnswer: { '@type': 'Answer', text: 'Venezuela uses Venezuela Time (VET, UTC−4) year-round. Caracas, Maracaibo, Valencia, Barquisimeto, and all Venezuelan cities are on UTC−4 with no Daylight Saving Time. The live clock above shows the current time in Venezuela.' } },
    { '@type': 'Question', name: 'What time zone is Caracas in?', acceptedAnswer: { '@type': 'Answer', text: 'Caracas uses Venezuela Time (VET, UTC−4). The IANA identifier is America/Caracas. Venezuela moved from UTC−4:30 to UTC−4 in May 2016. VET (UTC−4) is shared with Bolivia (BOT) and parts of the eastern Caribbean. Venezuela does not observe Daylight Saving Time.' } },
    { '@type': 'Question', name: 'Does Venezuela observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Venezuela does not observe Daylight Saving Time. VET (UTC−4) is fixed year-round. Venezuela last observed DST in 1965. In 2007, Venezuela moved its clocks back 30 minutes to UTC−4:30, and in 2016 returned to UTC−4.' } },
    { '@type': 'Question', name: 'What is the time difference between Venezuela and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Caracas (VET, UTC−4) is 1 hour ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), Caracas and New York are on the same time. Caracas is 4 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Venezuela and Colombia?', acceptedAnswer: { '@type': 'Answer', text: 'Caracas (VET, UTC−4) is 1 hour ahead of Bogotá (COT, UTC−5) year-round. Since neither country observes Daylight Saving Time, this 1-hour difference is constant throughout the year.' } },
    { '@type': 'Question', name: 'What is the time difference between Venezuela and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Caracas (VET, UTC−4) is 4 hours behind London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), Caracas is 5 hours behind London. Since Venezuela has no DST, the difference only changes when the UK adjusts its clocks.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Venezuela', item: 'https://whattime.city/venezuela/' }] }

export default function VenezuelaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Venezuela" subtitle="Venezuela Time (VET) · UTC−4 · No Daylight Saving Time" />
      <VenezuelaClockClient />
      <CountryFactsSection hubSlug="venezuela" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Bogotá time', href: '/bogota/' }, { label: 'Lima time', href: '/lima/' }, { label: 'Buenos Aires time', href: '/buenos-aires/' }, { label: 'Time in Colombia', href: '/colombia/' }, { label: 'Time in Peru', href: '/peru/' }, { label: 'Time in Argentina', href: '/argentina/' }, { label: 'Caracas → New York', href: '/time/caracas/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Venezuela & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Venezuela: America/Caracas (VET UTC−4, no DST)."
      />
    </ContentPageWrapper>
  )
}
