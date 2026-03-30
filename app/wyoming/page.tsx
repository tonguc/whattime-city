import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import WyomingClockClient from './WyomingClockClient'

export const metadata: Metadata = {
  title: 'Time in Wyoming Now — MST/MDT (UTC−7/−6)',
  description: 'What time is it in Wyoming right now? Wyoming uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during DST. Cheyenne, Casper, Jackson live clock.',
  keywords: [
    'time in wyoming', 'wyoming time now', 'what time is it in wyoming',
    'wyoming time zone', 'cheyenne time', 'casper wyoming time', 'jackson hole time',
    'MST MDT wyoming', 'wyoming mountain time', 'wyoming utc-7',
  ],
  alternates: { canonical: 'https://whattime.city/wyoming/' },
  openGraph: {
    title: 'Time in Wyoming Now — MST/MDT (UTC−7/−6)',
    description: 'Live Wyoming time. All of Wyoming uses Mountain Time (MST/MDT). Cheyenne, Casper, Jackson Hole — all on the same Mountain Time Zone.',
    type: 'website', url: 'https://whattime.city/wyoming/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Wyoming right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wyoming, USA uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during Daylight Saving Time. The IANA identifier is America/Denver. All of Wyoming — including Cheyenne, Casper, Laramie, Jackson, and Gillette — uses the same Mountain Time Zone. Wyoming observes DST, springing forward on the second Sunday in March and falling back on the first Sunday in November. The live clock above shows the current Wyoming time.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Wyoming in?',
      acceptedAnswer: { '@type': 'Answer', text: 'All of Wyoming is in the Mountain Time Zone. Wyoming uses Mountain Standard Time (MST, UTC−7) in winter and Mountain Daylight Time (MDT, UTC−6) during Daylight Saving Time. The IANA identifier is America/Denver. Wyoming shares its time zone with Colorado, Utah, New Mexico, Montana, and most of Idaho.' },
    },
    {
      '@type': 'Question',
      name: 'Does Wyoming observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wyoming observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March at 2:00 AM (MST → MDT, UTC−7 → UTC−6) and fall back on the first Sunday in November at 2:00 AM (MDT → MST). Wyoming follows the standard US DST schedule.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Wyoming and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wyoming (MST/MDT, Mountain Time) is always 2 hours behind New York (EST/EDT, Eastern Time). Both observe DST on the same schedule, so the 2-hour gap is constant year-round. When it is 9:00 AM in New York, it is 7:00 AM in Cheyenne.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Wyoming and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wyoming (MST/MDT, Mountain Time) is always 1 hour ahead of California (PST/PDT, Pacific Time). Both observe DST simultaneously, so the gap is constant year-round. When it is 10:00 AM in Los Angeles, it is 11:00 AM in Cheyenne or Jackson Hole.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Yellowstone National Park in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yellowstone National Park is in the Mountain Time Zone (MST/MDT, IANA: America/Denver). Although Yellowstone spans the Wyoming-Montana-Idaho border, the entire park operates on Mountain Time. When you visit Old Faithful or the Grand Prismatic Spring, you are on Mountain Time — the same as Cheyenne and Denver.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Wyoming', item: 'https://whattime.city/wyoming/' },
  ],
}

export default function WyomingTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Wyoming" subtitle="Mountain Time (MST/MDT) · Cheyenne · Casper · Jackson · UTC−7/−6" />
      <WyomingClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Montana time', href: '/montana/' },
          { label: 'Colorado time', href: '/colorado/' },
          { label: 'Utah time', href: '/utah/' },
          { label: 'South Dakota time', href: '/south-dakota/' },
          { label: 'Idaho time', href: '/idaho/' },
          { label: 'Denver time', href: '/denver/' },
          { label: 'Mountain Time Zone', href: '/mountain-time-zone/' },
          { label: 'Time converter', href: '/time-converter/' },
        ]}
        linksTitle="Nearby States & Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. Wyoming: America/Denver (MST/MDT) — entire state on Mountain Time."
      />
    </ContentPageWrapper>
  )
}
