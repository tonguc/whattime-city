import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SpainClockClient from './SpainClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Spain Now — CET/CEST (UTC+1/+2) · Madrid, Barcelona · Canary Islands',
  description:
    'What time is it in Spain right now? Spain uses Central European Time (CET, UTC+1) in winter and CEST (UTC+2) in summer. The Canary Islands are 1 hour behind the mainland. Live Madrid clock, Spain vs world cities, and best time to call.',
  keywords: [
    'time in spain', 'spain time now', 'what time is it in spain',
    'madrid time', 'barcelona time', 'spain time zone', 'CET spain', 'CEST spain',
    'central european time spain', 'current time madrid', 'spain utc+1',
    'spain time vs usa', 'spain time vs uk', 'canary islands time',
    'spain canary islands time difference', 'spain wrong time zone', 'spain utc-1 geography',
  ],
  alternates: { canonical: 'https://whattime.city/spain/' },
  openGraph: {
    title: 'Current Time in Spain — CET/CEST (UTC+1/+2) · Canary Islands 1h behind',
    description: 'Live Spain time. CET (UTC+1) in winter, CEST (UTC+2) during Daylight Saving Time. Canary Islands are 1h behind the Spanish mainland. Madrid, Barcelona on Central European Time.',
    type: 'website', url: 'https://whattime.city/spain/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Spain right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spain (mainland) uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. All mainland cities — Madrid, Barcelona, Seville, Valencia, Bilbao — are on the same time. The Canary Islands (Tenerife, Gran Canaria, Lanzarote) use WET/WEST (UTC+0/+1), which is always 1 hour behind the mainland. The live clock above shows the current time in Madrid.' },
    },
    {
      '@type': 'Question',
      name: 'Why does Spain use Central European Time if it is geographically in the west?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spain\'s geographic position is close to UTC−1 to UTC+0. Greenwich, England — at 0° longitude — is actually in a similar geographic zone. Spain adopted Central European Time (CET, UTC+1) in 1940, when General Franco aligned Spanish time with Nazi Germany\'s occupied Europe during World War II. Spain has never reverted. As a result, Spain\'s solar noon (when the sun is directly overhead) often occurs around 2:00–2:30 PM CET, contributing to the country\'s famously late meal and activity schedule.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Spain and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spain (CET/CEST) is always 1 hour ahead of the UK (GMT/BST). Both countries change clocks on the same dates (last Sunday of March and October), so the 1-hour gap is constant year-round. When it is 9:00 AM in London, it is 10:00 AM in Madrid.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Spain and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Madrid (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 5 hours. During European summer (CEST, UTC+2), the gap is typically 6 hours ahead of EDT. Madrid is 9 hours ahead of Los Angeles (PST, UTC−8) in winter. There are brief transition periods in spring and autumn when the gap shifts by an extra hour.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone are the Canary Islands in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Canary Islands (Tenerife, Gran Canaria, Lanzarote, Fuerteventura, etc.) use Western European Time (WET, UTC+0) in winter and Western European Summer Time (WEST, UTC+1) during Daylight Saving Time. They are always 1 hour behind mainland Spain. The IANA identifier is Atlantic/Canary. When it is 12:00 PM in Madrid, it is 11:00 AM in Tenerife.' },
    },
    {
      '@type': 'Question',
      name: 'Does Spain observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Spain follows EU Daylight Saving Time rules. Clocks spring forward 1 hour on the last Sunday of March and fall back on the last Sunday of October. The EU has voted to abolish DST, but as of 2026 this has not been implemented. If Spain were to permanently adopt summer time (CEST, UTC+2), it would place Madrid on the same time as Eastern Europe year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Spain and Argentina?',
      acceptedAnswer: { '@type': 'Answer', text: 'Buenos Aires (ART, UTC−3) is 4 hours behind Madrid (CET, UTC+1) in winter. During Spanish summer (CEST, UTC+2), the gap widens to 5 hours. Argentina does not observe DST since 2008. This makes Spain one of the more manageable time zones for Latin American business connections in Europe.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Spain', item: 'https://whattime.city/spain/' },
  ],
}


export default function SpainTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Spain" subtitle="Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) in summer · Canary Islands 1h behind" />
      <SpainClockClient />
      <CountryFactsSection hubSlug="spain" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Spain: Europe/Madrid (CET UTC+1 / CEST UTC+2) · Atlantic/Canary (WET UTC+0 / WEST UTC+1).
      "
      />
    </ContentPageWrapper>
  )
}
