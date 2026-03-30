import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MontanaClockClient from './MontanaClockClient'

export const metadata: Metadata = {
  title: 'Time in Montana Now — MST/MDT (UTC−7/−6)',
  description: 'What time is it in Montana right now? Montana uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during DST. Billings, Missoula, Helena all on Mountain Time. Live clock.',
  keywords: [
    'time in montana', 'montana time now', 'what time is it in montana',
    'montana time zone', 'MST montana', 'MDT montana',
    'billings time', 'missoula time', 'helena time', 'montana mountain time',
    'montana utc-7', 'montana time vs california', 'montana time vs new york',
  ],
  alternates: { canonical: 'https://whattime.city/montana/' },
  openGraph: {
    title: 'Current Time in Montana — MST/MDT (UTC−7/−6)',
    description: 'Live Montana time. MST (UTC−7) in winter, MDT (UTC−6) during Daylight Saving Time. Billings, Missoula, Helena, and all of Montana on Mountain Time.',
    type: 'website', url: 'https://whattime.city/montana/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Montana right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Montana, USA uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during Daylight Saving Time. The IANA identifier is America/Denver. Montana observes DST, springing forward on the second Sunday in March and falling back on the first Sunday in November. All of Montana — including Billings, Missoula, Helena, Great Falls, and Bozeman — is on Mountain Time. The live clock above shows the current Montana time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Montana in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Montana is entirely in the Mountain Time Zone. It uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during Daylight Saving Time. The IANA identifier is America/Denver. Montana shares its time zone with Wyoming, Colorado, New Mexico, Utah, and parts of Idaho.' },
    },
    {
      '@type': 'Question',
      name: 'Does Montana observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Montana observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March at 2:00 AM (MST → MDT, UTC−7 → UTC−6) and fall back on the first Sunday in November at 2:00 AM (MDT → MST). Montana follows the standard US DST schedule.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Montana and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Montana (MST/MDT) is always 2 hours behind New York (EST/EDT). Both states observe Daylight Saving Time on the same schedule, keeping the 2-hour gap constant year-round. When it is 9:00 AM in New York, it is 7:00 AM in Montana.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Montana and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Montana (MST/MDT, Mountain Time) is always 1 hour ahead of California (PST/PDT, Pacific Time). Both observe DST simultaneously, so the gap is constant year-round. When it is 10:00 AM in Los Angeles, it is 11:00 AM in Billings, Montana.' },
    },
    {
      '@type': 'Question',
      name: 'What are the largest cities in Montana and their time zone?',
      acceptedAnswer: { '@type': 'Answer', text: 'All of Montana\'s major cities are on Mountain Time (MST/MDT): Billings (Montana\'s largest city), Missoula, Great Falls, Bozeman, Helena (the state capital), Butte, Kalispell, and Havre. There are no time zone boundaries within Montana — the entire state uses the same Mountain Time Zone.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Billings, Montana in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Billings, Montana is in the Mountain Time Zone. It uses MST (UTC−7) in winter and MDT (UTC−6) during Daylight Saving Time. The IANA identifier is America/Denver. Billings is Montana\'s largest city with about 120,000 residents.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Montana', item: 'https://whattime.city/montana/' },
  ],
}

export default function MontanaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Montana" subtitle="Mountain Time (MT) · MST (UTC−7) in winter · MDT (UTC−6) during DST" />
      <MontanaClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Time in Wyoming', href: '/wyoming/' },
          { label: 'Time in Idaho', href: '/idaho/' },
          { label: 'Time in Colorado', href: '/colorado/' },
          { label: 'Time in North Dakota', href: '/north-dakota/' },
          { label: 'Mountain Time Zone guide', href: '/mountain-time-zone/' },
          { label: 'Time in South Dakota', href: '/south-dakota/' },
          { label: 'MST time zone', href: '/mst/' },
          { label: 'Time converter tool', href: '/time-converter/' },
        ]}
        linksTitle="Montana & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Montana: America/Denver (MST UTC−7 / MDT UTC−6)."
      />
    </ContentPageWrapper>
  )
}
