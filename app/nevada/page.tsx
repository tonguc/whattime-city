import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NevadaClockClient from './NevadaClockClient'

export const metadata: Metadata = {
  title: 'Time in Nevada Now — PST/PDT · Las Vegas · Pacific Time Zone',
  description: 'What time is it in Nevada right now? Nevada uses Pacific Time (PST/PDT). Las Vegas is on PST (UTC−8) in winter and PDT (UTC−7) in summer. Live clock, Nevada vs world cities, and best time to call.',
  keywords: ['time in nevada', 'nevada time now', 'what time is it in nevada', 'las vegas time', 'nevada time zone', 'PST PDT nevada', 'nevada utc-8', 'reno time', 'henderson time', 'nevada time vs eastern', 'nevada time vs uk', 'nevada pacific time'],
  alternates: { canonical: 'https://whattime.city/nevada/' },
  openGraph: { title: 'Current Time in Nevada — PST/PDT · Las Vegas', description: 'Live Nevada time. Las Vegas and Reno on Pacific Time — PST (UTC−8) in winter, PDT (UTC−7) in summer.', type: 'website', url: 'https://whattime.city/nevada/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Nevada right now?', acceptedAnswer: { '@type': 'Answer', text: 'Nevada uses Pacific Time. In winter (standard time), Nevada is on PST (UTC−8). During Daylight Saving Time (second Sunday in March to first Sunday in November), Nevada is on PDT (UTC−7). Las Vegas, Reno, Henderson, and all Nevada cities are in the Pacific Time zone. The live clock above shows the current time in Nevada.' } },
    { '@type': 'Question', name: 'What time zone is Las Vegas in?', acceptedAnswer: { '@type': 'Answer', text: 'Las Vegas is in the Pacific Time zone (America/Los_Angeles). Las Vegas uses PST (UTC−8) during standard time (November to March) and PDT (UTC−7) during Daylight Saving Time (March to November). Las Vegas is 3 hours behind New York and on the same time as Los Angeles and Seattle.' } },
    { '@type': 'Question', name: 'Does Nevada observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nevada observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from PST UTC−8 to PDT UTC−7) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Nevada and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Nevada (Pacific Time) is always 3 hours behind New York (Eastern Time). When it is 12:00 PM (noon) in New York (EST/EDT), it is 9:00 AM in Las Vegas (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Nevada and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Las Vegas (PST, UTC−8) is 8 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Las Vegas moves to PDT (UTC−7), making it 7 hours behind London (GMT). When both the US and UK are on summer time, Las Vegas (PDT) is 8 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Nevada in the Pacific or Mountain Time zone?', acceptedAnswer: { '@type': 'Answer', text: 'Nevada is entirely in the Pacific Time zone, not Mountain Time. Despite sharing a border with Arizona (Mountain Time) and Utah (Mountain Time), all Nevada counties use Pacific Time. Las Vegas, Reno, Carson City, and all other Nevada cities observe PST (UTC−8) in winter and PDT (UTC−7) in summer.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Nevada', item: 'https://whattime.city/nevada/' }] }

export default function NevadaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Nevada" subtitle="Pacific Time (PST/PDT) · Las Vegas · UTC−8 / UTC−7" />
      <NevadaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Las Vegas time', href: '/las-vegas/' }, { label: 'Los Angeles time', href: '/los-angeles/' }, { label: 'Seattle time', href: '/seattle/' }, { label: 'Time in Oregon', href: '/oregon/' }, { label: 'Time in Arizona', href: '/arizona/' }, { label: 'Time in California', href: '/california/' }, { label: 'Time in Washington State', href: '/washington-state/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Nevada City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Nevada: America/Los_Angeles (PST/PDT, Pacific Time)."
      />
    </ContentPageWrapper>
  )
}
