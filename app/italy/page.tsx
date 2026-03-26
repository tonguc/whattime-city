import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ItalyClockClient from './ItalyClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Italy Now — CET/CEST (UTC+1/+2) · Rome, Milan, Venice',
  description: 'What time is it in Italy right now? Italy uses CET (UTC+1) in winter and CEST (UTC+2) during Daylight Saving Time. Live Rome clock, Italy vs world cities, and best time to call.',
  keywords: ['time in italy', 'italy time now', 'what time is it in italy', 'rome time', 'milan time', 'italy time zone', 'CET italy', 'CEST italy', 'italy utc+1', 'italy time vs usa', 'italy time vs uk', 'venice time', 'florence time'],
  alternates: { canonical: 'https://whattime.city/italy/' },
  openGraph: { title: 'Current Time in Italy — CET/CEST (UTC+1/+2)', description: 'Live Italy time. CET (UTC+1) in winter, CEST (UTC+2) during DST. Rome, Milan, Venice, Florence, Naples all on Central European Time.', type: 'website', url: 'https://whattime.city/italy/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Italy right now?', acceptedAnswer: { '@type': 'Answer', text: 'Italy uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. All cities — Rome, Milan, Venice, Florence, Naples, Turin, and Bologna — are on the same time zone. The live clock above shows the current time in Italy.' } },
    { '@type': 'Question', name: 'What time zone is Italy in?', acceptedAnswer: { '@type': 'Answer', text: 'Italy is in the Central European Time (CET) zone, using CET (UTC+1) in winter and CEST (UTC+2) in summer. The IANA identifier is Europe/Rome. Italy shares Central European Time with Germany, France, the Netherlands, Spain, and most of continental Europe.' } },
    { '@type': 'Question', name: 'Does Italy observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Italy follows EU DST rules: clocks spring forward 1 hour on the last Sunday of March (CET to CEST) and fall back on the last Sunday of October (CEST to CET).' } },
    { '@type': 'Question', name: 'What is the time difference between Italy and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Rome (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter. During US DST (EDT, UTC−4), the gap narrows to 5 hours. Rome is 9 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Italy and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Italy (CET/CEST) is always 1 hour ahead of the UK (GMT/BST). Both countries change clocks on the same dates, so this 1-hour gap is constant year-round. When it is 9:00 AM in London, it is 10:00 AM in Rome.' } },
    { '@type': 'Question', name: 'What is the time difference between Italy and Egypt?', acceptedAnswer: { '@type': 'Answer', text: 'Egypt (EET, UTC+2) is 1 hour ahead of Italy (CET, UTC+1) in winter. During Italian summer (CEST, UTC+2), Italy and Egypt are on the same time. Since Egypt has no DST, they align during European summer months.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Italy', item: 'https://whattime.city/italy/' }] }

export default function ItalyTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Italy" subtitle="Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Daylight Saving Time" />
      <ItalyClockClient />
      <CountryFactsSection hubSlug="italy" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Rome time', href: '/rome/' }, { label: 'Milan time', href: '/milan/' }, { label: 'Venice time', href: '/venice/' }, { label: 'Rome → London', href: '/time/rome/london/' }, { label: 'Rome → New York', href: '/time/rome/new-york/' }, { label: 'Rome → Dubai', href: '/time/rome/dubai/' }, { label: 'Rome → Tokyo', href: '/time/rome/tokyo/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Italy City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Italy: Europe/Rome (CET UTC+1 / CEST UTC+2)."
      />
    </ContentPageWrapper>
  )
}
