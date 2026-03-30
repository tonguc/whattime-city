import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IdahoClockClient from './IdahoClockClient'

export const metadata: Metadata = {
  title: 'Time in Idaho Now — MST/MDT & PST/PDT',
  description: 'What time is it in Idaho right now? Most of Idaho uses Mountain Time (MST/MDT). The panhandle (Coeur d\'Alene, Moscow, ID) uses Pacific Time. Boise live clock.',
  keywords: [
    'time in idaho', 'idaho time now', 'what time is it in idaho',
    'idaho time zone', 'boise idaho time', 'coeur dalene time', 'idaho panhandle time',
    'MST MDT idaho', 'idaho mountain time', 'idaho pacific time',
  ],
  alternates: { canonical: 'https://whattime.city/idaho/' },
  openGraph: {
    title: 'Time in Idaho Now — MST/MDT & PST/PDT',
    description: 'Live Idaho time. Most of Idaho uses Mountain Time (MST/MDT), but the northern panhandle — Coeur d\'Alene and Moscow — uses Pacific Time (PST/PDT).',
    type: 'website', url: 'https://whattime.city/idaho/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Idaho right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Idaho, USA has two time zones. Most of Idaho — including Boise, Nampa, Pocatello, Idaho Falls, and Twin Falls — uses Mountain Time: MST (UTC−7) in winter and MDT (UTC−6) during Daylight Saving Time (IANA: America/Boise). The northern Idaho panhandle — including Coeur d\'Alene, Moscow, Lewiston, and Sandpoint — uses Pacific Time: PST (UTC−8) in winter and PDT (UTC−7) during DST (IANA: America/Los_Angeles). The live clock above shows current Boise (Mountain) time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Boise, Idaho in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Boise, the state capital of Idaho, is in the Mountain Time Zone (IANA: America/Boise). Boise uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during Daylight Saving Time. Boise is on the same time as Denver, Salt Lake City, and Cheyenne.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Coeur d\'Alene, Idaho in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Coeur d\'Alene, in the northern Idaho panhandle, is in the Pacific Time Zone (IANA: America/Los_Angeles). Coeur d\'Alene uses Pacific Standard Time (PST, UTC−8) in winter and Pacific Daylight Time (PDT, UTC−7) during DST. Despite being in Idaho, Coeur d\'Alene is on the same time as Seattle, Portland, and Spokane (Washington) — and is 1 hour behind Boise.' },
    },
    {
      '@type': 'Question',
      name: 'Does Idaho have two time zones?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Idaho is split between Mountain Time and Pacific Time. The vast majority of Idaho by land area (and population) uses Mountain Time. Only the northern panhandle — roughly Benewah, Bonner, Boundary, Clearwater, Idaho, Kootenai, Latah, Lewis, and Shoshone counties — observes Pacific Time. This quirk exists because the panhandle communities are economically and geographically tied to Spokane, Washington (Pacific Time).' },
    },
    {
      '@type': 'Question',
      name: 'Does Idaho observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. All of Idaho observes Daylight Saving Time. Mountain Time areas spring forward from MST (UTC−7) to MDT (UTC−6) on the second Sunday in March, and fall back on the first Sunday in November. Pacific Time areas in the panhandle spring forward from PST (UTC−8) to PDT (UTC−7) on the same dates. Both zones follow the standard US DST schedule.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Idaho and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Boise and most of Idaho (Mountain Time) are always 2 hours behind New York (Eastern Time). The Idaho panhandle (Pacific Time) is always 3 hours behind New York. Both Idaho time zones observe DST on the same schedule as New York, keeping these gaps constant year-round.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Idaho', item: 'https://whattime.city/idaho/' },
  ],
}

export default function IdahoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Idaho" subtitle="Mountain & Pacific Time · Boise (MST/MDT) · Coeur d'Alene (PST/PDT)" />
      <IdahoClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Montana time', href: '/montana/' },
          { label: 'Wyoming time', href: '/wyoming/' },
          { label: 'Utah time', href: '/utah/' },
          { label: 'Oregon time', href: '/oregon/' },
          { label: 'Washington time', href: '/washington-state/' },
          { label: 'Mountain Time Zone', href: '/mountain-time-zone/' },
          { label: 'Pacific Time Zone', href: '/pacific-time-zone/' },
          { label: 'Time converter', href: '/time-converter/' },
        ]}
        linksTitle="Nearby States & Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. Southern/eastern Idaho: America/Boise (MST/MDT). Northern panhandle: America/Los_Angeles (PST/PDT)."
      />
    </ContentPageWrapper>
  )
}
