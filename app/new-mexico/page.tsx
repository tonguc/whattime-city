import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NewMexicoClockClient from './NewMexicoClockClient'

export const metadata: Metadata = {
  title: 'Time in New Mexico Now — MST/MDT',
  description: 'What time is it in New Mexico right now? New Mexico uses Mountain Time (MST/MDT). Albuquerque and Santa Fe are on MST (UTC−7) in winter and MDT (UTC−6) in summer. Live clock.',
  keywords: ['time in new mexico', 'new mexico time now', 'what time is it in new mexico', 'albuquerque time', 'santa fe time', 'new mexico time zone', 'MST MDT new mexico', 'new mexico utc-7', 'new mexico mountain time', 'las cruces time'],
  alternates: { canonical: 'https://whattime.city/new-mexico/' },
  openGraph: { title: 'Time in New Mexico Now — MST/MDT', description: 'Live New Mexico time. Albuquerque and all of New Mexico use Mountain Time — MST (UTC−7) in winter, MDT (UTC−6) in summer.', type: 'website', url: 'https://whattime.city/new-mexico/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in New Mexico right now?', acceptedAnswer: { '@type': 'Answer', text: 'New Mexico uses Mountain Time. Albuquerque, Santa Fe, Las Cruces, Roswell, and all New Mexico cities are on MST (UTC−7) in winter and MDT (UTC−6) during Daylight Saving Time. The live clock above shows the current time in New Mexico.' } },
    { '@type': 'Question', name: 'What time zone is Albuquerque, New Mexico in?', acceptedAnswer: { '@type': 'Answer', text: 'Albuquerque, the largest city in New Mexico, uses the Mountain Time zone (America/Denver). Albuquerque is on MST (UTC−7) during standard time and MDT (UTC−6) during Daylight Saving Time. Albuquerque is on the same time as Denver and El Paso.' } },
    { '@type': 'Question', name: 'Does New Mexico observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. New Mexico observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from MST UTC−7 to MDT UTC−6) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'Is New Mexico on the same time as Arizona?', acceptedAnswer: { '@type': 'Answer', text: 'Only in winter. Arizona (except the Navajo Nation) stays on MST (UTC−7) year-round and does not observe Daylight Saving Time. New Mexico observes DST, so in summer (MDT, UTC−6) New Mexico is 1 hour ahead of most of Arizona.' } },
    { '@type': 'Question', name: 'What is the time difference between New Mexico and Texas?', acceptedAnswer: { '@type': 'Answer', text: 'New Mexico (Mountain Time, MST/MDT) is 1 hour behind most of Texas (Central Time, CST/CDT). When it is noon in Dallas, it is 11:00 AM in Albuquerque. However, El Paso, TX is in Mountain Time, so there is no time difference between El Paso and Albuquerque.' } },
    { '@type': 'Question', name: 'What is the time difference between New Mexico and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Albuquerque (Mountain Time) is always 2 hours behind New York (Eastern Time). When it is noon in New York, it is 10:00 AM in Albuquerque. Both states observe DST on the same schedule, so the 2-hour difference is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in New Mexico', item: 'https://whattime.city/new-mexico/' }] }

export default function NewMexicoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in New Mexico" subtitle="Mountain Time (MST/MDT) · Albuquerque · UTC−7/−6" />
      <NewMexicoClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Colorado time', href: '/colorado/' }, { label: 'Arizona time', href: '/arizona/' }, { label: 'Texas time', href: '/texas/' }, { label: 'Denver time', href: '/denver/' }, { label: 'El Paso time', href: '/el-paso/' }, { label: 'Phoenix time', href: '/phoenix/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Nearby States & Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. New Mexico: America/Denver (MST/MDT, Mountain Time)."
      />
    </ContentPageWrapper>
  )
}
