import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import UtahClockClient from './UtahClockClient'

export const metadata: Metadata = {
  title: 'Time in Utah Now — MST/MDT · Salt Lake City · Mountain Time Zone',
  description: 'What time is it in Utah right now? Utah uses Mountain Time (MST/MDT). Salt Lake City is on MST (UTC−7) in winter and MDT (UTC−6) in summer. Live clock and best time to call.',
  keywords: ['time in utah', 'utah time now', 'what time is it in utah', 'salt lake city time', 'utah time zone', 'MST MDT utah', 'utah utc-7', 'provo time', 'st george time', 'utah mountain time', 'utah time vs eastern', 'utah time vs uk'],
  alternates: { canonical: 'https://whattime.city/utah/' },
  openGraph: { title: 'Current Time in Utah — MST/MDT · Salt Lake City', description: 'Live Utah time. Salt Lake City and Provo on Mountain Time — MST (UTC−7) in winter, MDT (UTC−6) in summer.', type: 'website', url: 'https://whattime.city/utah/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Utah right now?', acceptedAnswer: { '@type': 'Answer', text: 'Utah uses Mountain Time. Salt Lake City, Provo, Ogden, St. George, and all Utah cities are on MST (UTC−7) in winter and MDT (UTC−6) during Daylight Saving Time. The live clock above shows the current time in Utah.' } },
    { '@type': 'Question', name: 'What time zone is Salt Lake City in?', acceptedAnswer: { '@type': 'Answer', text: 'Salt Lake City is in the Mountain Time zone (America/Denver). Salt Lake City uses MST (UTC−7) during standard time (November to March) and MDT (UTC−6) during Daylight Saving Time (March to November). Salt Lake City is on the same time as Denver, Albuquerque, and Boise.' } },
    { '@type': 'Question', name: 'Does Utah observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Utah observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from MST UTC−7 to MDT UTC−6) and fall back 1 hour on the first Sunday in November. Note: neighboring Arizona does not observe DST, making Arizona the same time as Utah in summer but 1 hour behind Utah in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Utah and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Utah (Mountain Time) is always 2 hours behind New York (Eastern Time). When it is noon in New York, it is 10:00 AM in Salt Lake City. Both states observe DST on the same schedule, so the 2-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Utah and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Salt Lake City (MST, UTC−7) is 7 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Salt Lake City moves to MDT (UTC−6), making it 6 hours behind London (GMT). When both the US and UK are on summer time, Salt Lake City (MDT) is 7 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Utah and Arizona?', acceptedAnswer: { '@type': 'Answer', text: 'Utah (MST/MDT) and Arizona (MST year-round, no DST) differ seasonally. In winter (both on MST), Utah and Arizona are on the same time. In summer, Utah moves to MDT (UTC−6) but Arizona stays on MST (UTC−7), making most of Arizona 1 hour behind Utah from March to November. (The Navajo Nation in Arizona does observe MDT, matching Utah in summer.)' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Utah', item: 'https://whattime.city/utah/' }] }

export default function UtahTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Utah" subtitle="Mountain Time (MST/MDT) · Salt Lake City · UTC−7 / UTC−6" />
      <UtahClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Salt Lake City time', href: '/salt-lake-city/' }, { label: 'Denver time', href: '/denver/' }, { label: 'Las Vegas time', href: '/las-vegas/' }, { label: 'Time in Colorado', href: '/colorado/' }, { label: 'Time in Nevada', href: '/nevada/' }, { label: 'Time in Arizona', href: '/arizona/' }, { label: 'Time in Idaho', href: '/idaho/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Utah City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Utah: America/Denver (MST/MDT, Mountain Time)."
      />
    </ContentPageWrapper>
  )
}
