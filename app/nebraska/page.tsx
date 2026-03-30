import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NebraskaClockClient from './NebraskaClockClient'

export const metadata: Metadata = {
  title: 'Time in Nebraska Now — CST/CDT (UTC−6/−5)',
  description: 'What time is it in Nebraska right now? Most of Nebraska uses Central Time (CST/CDT). Omaha and Lincoln are on CST (UTC−6) in winter, CDT (UTC−5) in summer. The panhandle uses Mountain Time.',
  keywords: ['time in nebraska', 'nebraska time now', 'what time is it in nebraska', 'omaha time', 'lincoln nebraska time', 'nebraska time zone', 'CST CDT nebraska', 'nebraska central time', 'nebraska mountain time', 'scottsbluff time'],
  alternates: { canonical: 'https://whattime.city/nebraska/' },
  openGraph: { title: 'Current Time in Nebraska — CST/CDT · Omaha · Lincoln', description: 'Live Nebraska time. Omaha and Lincoln use Central Time (CST/CDT). The western panhandle uses Mountain Time (MST/MDT).', type: 'website', url: 'https://whattime.city/nebraska/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Nebraska right now?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Nebraska uses Central Time. Omaha, Lincoln, Grand Island, Kearney, and the majority of NE cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The western panhandle (Scottsbluff, Alliance) uses Mountain Time (MST/MDT), which is 1 hour behind.' } },
    { '@type': 'Question', name: 'What time zone is Omaha, Nebraska in?', acceptedAnswer: { '@type': 'Answer', text: 'Omaha, Nebraska is in the Central Time zone (America/Chicago). Omaha uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Omaha is on the same time as Kansas City, Chicago, and Minneapolis.' } },
    { '@type': 'Question', name: 'Does Nebraska have two time zones?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The vast majority of Nebraska uses Central Time (CST/CDT). However, the western panhandle counties — including Scotts Bluff, Banner, Kimball, Cheyenne, Deuel, and Garden counties — use Mountain Time (MST/MDT), which is 1 hour behind the rest of Nebraska.' } },
    { '@type': 'Question', name: 'Does Nebraska observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nebraska observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back on the first Sunday in November. Central Time counties shift from CST (UTC−6) to CDT (UTC−5); Mountain Time counties shift from MST (UTC−7) to MDT (UTC−6).' } },
    { '@type': 'Question', name: 'What is the time difference between Nebraska and Colorado?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Nebraska (Central Time) is 1 hour ahead of Colorado (Mountain Time). When it is noon in Denver, it is 1:00 PM in Omaha. However, Nebraska\'s panhandle is in the same Mountain Time zone as Colorado, so there is no time difference between Scottsbluff, NE and Denver, CO.' } },
    { '@type': 'Question', name: 'What is the time difference between Nebraska and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Omaha and Lincoln (Central Time) are always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Omaha. Both observe DST on the same schedule, so the 1-hour gap is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Nebraska', item: 'https://whattime.city/nebraska/' }] }

export default function NebraskaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Nebraska" subtitle="Central Time (CST/CDT) · Omaha · Lincoln · UTC−6/−5" />
      <NebraskaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Kansas time', href: '/kansas/' }, { label: 'Iowa time', href: '/iowa/' }, { label: 'Colorado time', href: '/colorado/' }, { label: 'Omaha time', href: '/omaha/' }, { label: 'Denver time', href: '/denver/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Nearby States & Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. Nebraska: America/Chicago (CST/CDT) for most; America/Denver (MST/MDT) for panhandle counties."
      />
    </ContentPageWrapper>
  )
}
