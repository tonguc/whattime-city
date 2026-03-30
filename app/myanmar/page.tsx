import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MyanmarClockClient from './MyanmarClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Myanmar Now — MMT (UTC+6:30)',
  description: 'What time is it in Myanmar right now? Myanmar uses Myanmar Time (MMT, UTC+6:30) year-round — a rare half-hour offset. No Daylight Saving Time. Live Yangon clock and best time to call.',
  keywords: ['time in myanmar', 'myanmar time now', 'what time is it in myanmar', 'yangon time', 'myanmar time zone', 'MMT myanmar', 'myanmar utc+6:30', 'naypyidaw time', 'mandalay time', 'myanmar half hour offset', 'myanmar time vs india', 'myanmar time vs thailand'],
  alternates: { canonical: 'https://whattime.city/myanmar/' },
  openGraph: { title: 'Time in Myanmar Now — MMT (UTC+6:30)', description: 'Live Myanmar time. Yangon on MMT (UTC+6:30) — a rare 30-minute offset shared with very few countries. No DST.', type: 'website', url: 'https://whattime.city/myanmar/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Myanmar right now?', acceptedAnswer: { '@type': 'Answer', text: 'Myanmar uses Myanmar Time (MMT, UTC+6:30) year-round. Yangon, Naypyidaw (capital), and Mandalay are all on UTC+6:30. Myanmar does not observe Daylight Saving Time. The live clock above shows the current time in Myanmar.' } },
    { '@type': 'Question', name: 'Why does Myanmar use a half-hour time offset?', acceptedAnswer: { '@type': 'Answer', text: 'Myanmar uses UTC+6:30, a 30-minute offset, which is historically unusual. This offset dates back to the British colonial era when the longitude of Yangon (Rangoon) was used to set the local time. The offset places Myanmar midway between India (UTC+5:30) and Bangladesh/Thailand (UTC+6 and UTC+7). Only a few places in the world use 30-minute or 45-minute offsets from UTC.' } },
    { '@type': 'Question', name: 'What is the IANA time zone identifier for Myanmar?', acceptedAnswer: { '@type': 'Answer', text: 'Myanmar\'s IANA time zone identifier is Asia/Rangoon (also known as Asia/Yangon in newer versions of the IANA database). The zone is fixed at UTC+6:30 year-round with no DST transitions.' } },
    { '@type': 'Question', name: 'What is the time difference between Myanmar and India?', acceptedAnswer: { '@type': 'Answer', text: 'Myanmar (MMT, UTC+6:30) is exactly 1 hour ahead of India (IST, UTC+5:30). Neither country observes Daylight Saving Time, so this 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Myanmar and Thailand?', acceptedAnswer: { '@type': 'Answer', text: 'Myanmar (MMT, UTC+6:30) is 30 minutes behind Thailand (ICT, UTC+7). Neither country observes DST, so this 30-minute difference is constant year-round. Despite being neighbors, Myanmar and Thailand have this unusual half-hour gap between them.' } },
    { '@type': 'Question', name: 'What is the time difference between Myanmar and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Yangon (MMT, UTC+6:30) is 6.5 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), Yangon is 5.5 hours ahead of London. Since Myanmar has no DST, the difference only changes when the UK adjusts its clocks.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Myanmar', item: 'https://whattime.city/myanmar/' }] }

export default function MyanmarTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Myanmar" subtitle="Myanmar Time (MMT) · UTC+6:30 · Half-hour offset · No DST" />
      <MyanmarClockClient />
      <CountryFactsSection hubSlug="myanmar" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Bangkok time', href: '/bangkok/' }, { label: 'Kolkata time', href: '/kolkata/' }, { label: 'Singapore time', href: '/singapore/' }, { label: 'Time in Thailand', href: '/thailand/' }, { label: 'Time in India', href: '/india/' }, { label: 'Time in Bangladesh', href: '/bangladesh/' }, { label: 'Time in Malaysia', href: '/malaysia/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Myanmar & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Myanmar: Asia/Rangoon (MMT UTC+6:30, no DST)."
      />
    </ContentPageWrapper>
  )
}
