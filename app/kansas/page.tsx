import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import KansasClockClient from './KansasClockClient'

export const metadata: Metadata = {
  title: 'Time in Kansas Now — CST/CDT · Wichita · Central Time Zone',
  description: 'What time is it in Kansas right now? Kansas uses Central Time (CST/CDT). Wichita is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in kansas', 'kansas time now', 'what time is it in kansas', 'wichita time', 'kansas time zone', 'CST CDT kansas', 'kansas utc-6', 'overland park time', 'kansas city kansas time', 'kansas central time', 'kansas time vs eastern', 'kansas time vs uk'],
  alternates: { canonical: 'https://whattime.city/kansas/' },
  openGraph: { title: 'Current Time in Kansas — CST/CDT · Wichita', description: 'Live Kansas time. Wichita and all of Kansas on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/kansas/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kansas right now?', acceptedAnswer: { '@type': 'Answer', text: 'Kansas uses Central Time. Wichita, Overland Park, Kansas City (KS), Topeka, and all Kansas cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Kansas.' } },
    { '@type': 'Question', name: 'What time zone is Wichita in?', acceptedAnswer: { '@type': 'Answer', text: 'Wichita is in the Central Time zone (America/Chicago). Wichita uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Wichita is on the same time as Chicago, Dallas, and Kansas City (both the Kansas and Missouri sides).' } },
    { '@type': 'Question', name: 'Does Kansas observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kansas observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Kansas and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Kansas (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Wichita or Topeka. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Kansas and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Wichita (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Wichita moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK observe summer time, Wichita (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'Is Kansas City, Kansas on the same time as Kansas City, Missouri?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kansas City, Kansas and Kansas City, Missouri are both in the Central Time zone. There is no time difference between the two cities despite being in different states. Both use CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kansas', item: 'https://whattime.city/kansas/' }] }

export default function KansasTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Kansas" subtitle="Central Time (CST/CDT) · Wichita · UTC−6 / UTC−5" />
      <KansasClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Kansas City time', href: '/kansas-city/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Denver time', href: '/denver/' }, { label: 'Time in Missouri', href: '/missouri/' }, { label: 'Time in Colorado', href: '/colorado/' }, { label: 'Time in Iowa', href: '/iowa/' }, { label: 'Time in Oklahoma', href: '/oklahoma/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Kansas City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Kansas: America/Chicago (CST/CDT, Central Time)."
      />
    </ContentPageWrapper>
  )
}
