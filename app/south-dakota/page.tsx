import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SouthDakotaClockClient from './SouthDakotaClockClient'

export const metadata: Metadata = {
  title: 'Time in South Dakota Now — CST/CDT',
  description: 'What time is it in South Dakota right now? Most of South Dakota uses Central Time (CST/CDT). The Black Hills and western SD use Mountain Time. Sioux Falls, Rapid City live clock.',
  keywords: [
    'time in south dakota', 'south dakota time now', 'what time is it in south dakota',
    'south dakota time zone', 'sioux falls time', 'rapid city time', 'CST CDT south dakota',
    'south dakota central time', 'south dakota mountain time', 'black hills time',
  ],
  alternates: { canonical: 'https://whattime.city/south-dakota/' },
  openGraph: {
    title: 'Time in South Dakota Now — CST/CDT',
    description: 'Live South Dakota time. Most of SD uses Central Time (CST/CDT). The western Black Hills region uses Mountain Time (MST/MDT).',
    type: 'website', url: 'https://whattime.city/south-dakota/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in South Dakota right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Dakota, USA has two time zones. Most of the state uses Central Time: Sioux Falls, Aberdeen, Watertown, and eastern SD use CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The western part of the state — including Rapid City, the Black Hills, and Deadwood — uses Mountain Time: MST (UTC−7) in winter and MDT (UTC−6) during DST. The IANA identifiers are America/Chicago (Central) and America/Denver (Mountain). The live clock above shows current Central Time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is South Dakota in?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Dakota has two time zones. Eastern and central SD (including Sioux Falls and Pierre, the state capital) use Central Time (CST/CDT, IANA: America/Chicago). Western SD (including Rapid City, the Black Hills, Deadwood, and Sturgis) uses Mountain Time (MST/MDT, IANA: America/Denver). The boundary runs roughly through the middle of the state.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Rapid City, South Dakota in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rapid City, South Dakota is in the Mountain Time Zone (IANA: America/Denver). Rapid City uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during Daylight Saving Time. Rapid City is the gateway to Mount Rushmore and Badlands National Park, and is 1 hour behind Sioux Falls despite being in the same state.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Sioux Falls, South Dakota in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sioux Falls, the largest city in South Dakota, is in the Central Time Zone (IANA: America/Chicago). Sioux Falls uses CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. Sioux Falls is on the same time as Minneapolis, Chicago, and Kansas City.' },
    },
    {
      '@type': 'Question',
      name: 'Does South Dakota observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. South Dakota observes Daylight Saving Time in both time zones. Central Time clocks spring forward from CST (UTC−6) to CDT (UTC−5) on the second Sunday in March, and fall back on the first Sunday in November. Mountain Time clocks spring forward from MST (UTC−7) to MDT (UTC−6) on the same dates. Both zones follow the standard US DST schedule.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between South Dakota and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sioux Falls and eastern South Dakota (Central Time) are always 1 hour behind New York (Eastern Time). Rapid City and western South Dakota (Mountain Time) are always 2 hours behind New York. Both sides of the state observe DST on the same schedule, so the gaps are constant year-round.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in South Dakota', item: 'https://whattime.city/south-dakota/' },
  ],
}

export default function SouthDakotaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in South Dakota" subtitle="Central & Mountain Time · Sioux Falls · Rapid City" />
      <SouthDakotaClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'North Dakota time', href: '/north-dakota/' },
          { label: 'Nebraska time', href: '/nebraska/' },
          { label: 'Minnesota time', href: '/minnesota/' },
          { label: 'Montana time', href: '/montana/' },
          { label: 'Wyoming time', href: '/wyoming/' },
          { label: 'Denver time', href: '/denver/' },
          { label: 'Chicago time', href: '/chicago/' },
          { label: 'Time converter', href: '/time-converter/' },
        ]}
        linksTitle="Nearby States & Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. South Dakota: America/Chicago (CST/CDT) for eastern/central; America/Denver (MST/MDT) for western Black Hills region."
      />
    </ContentPageWrapper>
  )
}
