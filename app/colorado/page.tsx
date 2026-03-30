import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ColoradoClockClient from './ColoradoClockClient'

export const metadata: Metadata = {
  title: 'Time in Colorado Now — MST/MDT · Denver',
  description: 'What time is it in Colorado right now? Colorado uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during Daylight Saving Time. Live Denver clock and world comparison.',
  keywords: ['time in colorado', 'colorado time now', 'what time is it in colorado', 'denver time', 'colorado time zone', 'MST colorado', 'MDT colorado', 'mountain time colorado', 'colorado utc-7', 'denver time zone', 'colorado time vs california', 'colorado time vs new york'],
  alternates: { canonical: 'https://whattime.city/colorado/' },
  openGraph: { title: 'Current Time in Colorado — MST/MDT (UTC−7/−6)', description: 'Live Colorado time. MST (UTC−7) in winter, MDT (UTC−6) during Daylight Saving Time. Denver, Colorado Springs, Aurora, Boulder on Mountain Time.', type: 'website', url: 'https://whattime.city/colorado/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Colorado right now?', acceptedAnswer: { '@type': 'Answer', text: 'Colorado uses Mountain Time — MST (UTC−7) in winter and MDT (UTC−6) during Daylight Saving Time. All cities — Denver, Colorado Springs, Aurora, Fort Collins, Lakewood, and Boulder — are on the same time zone. The live clock above shows the current time in Colorado.' } },
    { '@type': 'Question', name: 'What time zone is Colorado in?', acceptedAnswer: { '@type': 'Answer', text: 'Colorado is in the Mountain Time Zone. In winter, Colorado uses Mountain Standard Time (MST, UTC−7). During Daylight Saving Time (March–November), Colorado uses Mountain Daylight Time (MDT, UTC−6). The IANA identifier is America/Denver. Colorado shares Mountain Time with Utah, Wyoming, Montana, New Mexico, and most of Idaho.' } },
    { '@type': 'Question', name: 'What is the time difference between Colorado and California?', acceptedAnswer: { '@type': 'Answer', text: 'Colorado (Mountain Time) is always 1 hour ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 10:00 AM in Denver. Both states change clocks on the same dates, so this 1-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Colorado and New York?', acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 2 hours ahead of Colorado (Mountain Time). When it is 9:00 AM in Denver, it is 11:00 AM in New York. Both states change clocks on the same dates, so this 2-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Colorado and Arizona?', acceptedAnswer: { '@type': 'Answer', text: 'Colorado (MST, UTC−7) and Arizona (MST, UTC−7) are on the same time in winter. In summer, Colorado springs forward to MDT (UTC−6) while Arizona stays on MST (UTC−7), so Colorado is 1 hour ahead of Arizona from March to November.' } },
    { '@type': 'Question', name: 'Does Colorado observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Colorado observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday of March and fall back on the first Sunday of November.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Colorado', item: 'https://whattime.city/colorado/' }] }

export default function ColoradoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Colorado" subtitle="Mountain Time (MT) · MST (UTC−7) in winter · MDT (UTC−6) during Daylight Saving Time" />
      <ColoradoClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Denver time', href: '/denver/' }, { label: 'Colorado Springs time', href: '/colorado-springs/' }, { label: 'Boulder time', href: '/boulder/' }, { label: 'Denver → Los Angeles', href: '/time/denver/los-angeles/' }, { label: 'Denver → New York', href: '/time/denver/new-york/' }, { label: 'Denver → London', href: '/time/denver/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Colorado City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Colorado: America/Denver (MST UTC−7 / MDT UTC−6)."
      />
    </ContentPageWrapper>
  )
}
