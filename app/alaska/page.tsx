import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AlaskaClockClient from './AlaskaClockClient'

export const metadata: Metadata = {
  title: 'Time in Alaska Now — AKST/AKDT (UTC−9/−8)',
  description: 'What time is it in Alaska right now? Alaska uses Alaska Standard Time (AKST, UTC−9) in winter and Alaska Daylight Time (AKDT, UTC−8) during DST. Anchorage, Juneau, Fairbanks all on Alaska Time. Live clock and best time to call.',
  keywords: ['time in alaska', 'alaska time now', 'what time is it in alaska', 'anchorage time', 'juneau time', 'alaska time zone', 'AKST', 'AKDT', 'alaska utc-9', 'alaska time vs california', 'alaska time vs new york', 'alaska time vs hawaii'],
  alternates: { canonical: 'https://whattime.city/alaska/' },
  openGraph: {
    title: 'Time in Alaska Now — AKST/AKDT (UTC−9/−8)',
    description: 'Live Alaska time. AKST (UTC−9) in winter, AKDT (UTC−8) during Daylight Saving Time. Anchorage, Juneau, Fairbanks all on Alaska Standard Time.',
    type: 'website', url: 'https://whattime.city/alaska/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Alaska right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Alaska uses Alaska Standard Time (AKST, UTC−9) in winter and Alaska Daylight Time (AKDT, UTC−8) during Daylight Saving Time. The IANA identifier is America/Anchorage. Most of Alaska — including Anchorage, Juneau, Fairbanks, and Sitka — is on Alaska Time. The Aleutian Islands west of 169°30′ W use Hawaii–Aleutian Time (HST/HDT). The live clock above shows current Alaska time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Alaska in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most of Alaska uses the Alaska Time Zone (AKT) — AKST (UTC−9) in winter and AKDT (UTC−8) during Daylight Saving Time. The IANA identifier is America/Anchorage. The western Aleutian Islands use Hawaii–Aleutian Time (America/Adak). Alaska Time is 1 hour behind Pacific Time, 3 hours behind Central Time, and 4 hours behind Eastern Time.' },
    },
    {
      '@type': 'Question',
      name: 'Does Alaska observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Alaska observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (AKST → AKDT, UTC−9 → UTC−8) and fall back on the first Sunday in November. Alaska has periodically debated ending DST but continues to follow the federal schedule.' },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Alaska have?',
      acceptedAnswer: { '@type': 'Answer', text: 'Alaska primarily uses one time zone — Alaska Time (AKST/AKDT). However, the western Aleutian Islands (west of 169°30′ W) use Hawaii–Aleutian Time (HST/HDT), which is 1 hour behind Alaska Time. So Alaska technically spans 2 IANA time zones: America/Anchorage and America/Adak.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Alaska and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Alaska (AKST, UTC−9) is 4 hours behind New York (EST, UTC−5) in winter. During DST, Alaska (AKDT, UTC−8) is 4 hours behind New York (EDT, UTC−4). Both states observe DST simultaneously, so the 4-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Alaska and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Alaska is always 1 hour behind California. Alaska uses AKST (UTC−9) / AKDT (UTC−8) while California uses PST (UTC−8) / PDT (UTC−7). Both observe DST on the same schedule, keeping the 1-hour gap constant year-round. When it is noon in Los Angeles, it is 11:00 AM in Anchorage.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time zone of Anchorage, Alaska?',
      acceptedAnswer: { '@type': 'Answer', text: 'Anchorage uses Alaska Time (AKST/AKDT). In winter Anchorage is on AKST (UTC−9); in summer during DST it switches to AKDT (UTC−8). The IANA identifier is America/Anchorage. Anchorage is the largest city in Alaska, with about 40% of the state\'s population.' },
    },
    {
      '@type': 'Question',
      name: 'Is Alaska the most western US time zone?',
      acceptedAnswer: { '@type': 'Answer', text: 'Alaska Time (AKST, UTC−9) is the second-westernmost US time zone. Hawaii–Aleutian Standard Time (HST, UTC−10) is further west, covering Hawaii and the western Aleutian Islands. American Samoa (UTC−11) and some uninhabited territories go even further west.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Alaska', item: 'https://whattime.city/alaska/' },
  ],
}

export default function AlaskaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Alaska" subtitle="Alaska Time (AKT) · AKST (UTC−9) in winter · AKDT (UTC−8) during DST" />
      <AlaskaClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Hawaii time', href: '/hawaii/' },
          { label: 'Time in California', href: '/california/' },
          { label: 'Time in Washington State', href: '/washington-state/' },
          { label: 'Alaska Time Zone guide', href: '/alaska-time-zone/' },
          { label: 'Anchorage time', href: '/anchorage/' },
          { label: 'Time in Oregon', href: '/oregon/' },
          { label: 'Time converter tool', href: '/time-converter/' },
          { label: 'US Time Zones', href: '/us-time-zones/' },
        ]}
        linksTitle="Alaska & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Alaska: America/Anchorage (AKST UTC−9 / AKDT UTC−8). Aleutian Islands: America/Adak (HST/HDT)."
      />
    </ContentPageWrapper>
  )
}
