import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IranClockClient from './IranClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Iran Now — IRST (UTC+3:30) / IRDT',
  description: 'What time is it in Iran right now? Iran uses IRST (UTC+3:30) in winter and IRDT (UTC+4:30) in summer. A rare half-hour offset with DST. Live Tehran clock and best time to call.',
  keywords: ['time in iran', 'iran time now', 'what time is it in iran', 'tehran time', 'iran time zone', 'IRST IRDT iran', 'iran utc+3:30', 'iran half hour offset', 'iran dst', 'iran time vs uk', 'iran time vs usa', 'iran time vs dubai'],
  alternates: { canonical: 'https://whattime.city/iran/' },
  openGraph: { title: 'Current Time in Iran — IRST/IRDT · Tehran · UTC+3:30', description: 'Live Iran time. Tehran on IRST (UTC+3:30) in winter, IRDT (UTC+4:30) in summer. One of few countries with a half-hour DST offset.', type: 'website', url: 'https://whattime.city/iran/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Iran right now?', acceptedAnswer: { '@type': 'Answer', text: 'Iran uses Iran Standard Time (IRST, UTC+3:30) in winter and Iran Daylight Time (IRDT, UTC+4:30) in summer. Tehran, Isfahan, Mashhad, Tabriz, and all Iranian cities are in the same time zone. The live clock above shows the current time in Iran.' } },
    { '@type': 'Question', name: 'Why does Iran use a half-hour time offset?', acceptedAnswer: { '@type': 'Answer', text: 'Iran uses UTC+3:30, a 30-minute offset from whole-hour UTC zones. This reflects a deliberate choice based on Iran\'s geographic position: UTC+3:30 corresponds roughly to the mean solar time for the center of the country. Iran also observes Daylight Saving Time (IRDT, UTC+4:30), making it one of the rare countries with a non-whole-hour offset that also observes DST.' } },
    { '@type': 'Question', name: 'Does Iran observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Iran observes Daylight Saving Time. Clocks spring forward to IRDT (UTC+4:30) in late March and fall back to IRST (UTC+3:30) in late September. Iran uses the Iranian calendar (Solar Hijri), so the exact DST transition dates correspond to the first day of Farvardin (approximately March 21) and the first day of Mehr (approximately September 22).' } },
    { '@type': 'Question', name: 'What is the time difference between Iran and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Tehran (IRST, UTC+3:30) is 3.5 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1) and Iran\'s IRDT (UTC+4:30) in summer, Tehran is 3.5 hours ahead of London. The gap is always 3.5 hours because both shift by 1 hour on approximately the same dates.' } },
    { '@type': 'Question', name: 'What is the time difference between Iran and the UAE (Dubai)?', acceptedAnswer: { '@type': 'Answer', text: 'Tehran (IRST, UTC+3:30) is 30 minutes behind Dubai (GST, UTC+4) in winter. During Iran\'s summer time (IRDT, UTC+4:30), Tehran is 30 minutes ahead of Dubai. The UAE does not observe DST, so Iran and the UAE alternate which is ahead depending on the season.' } },
    { '@type': 'Question', name: 'What is the time difference between Iran and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Tehran (IRST, UTC+3:30) is 8.5 hours ahead of New York (EST, UTC−5) in winter. During US DST (EDT, UTC−4), the gap narrows to 7.5 hours. During Iran\'s IRDT (UTC+4:30), Tehran is 8.5 hours ahead of New York (EST) and 9.5 hours ahead in summer when both observe DST.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Iran', item: 'https://whattime.city/iran/' }] }

export default function IranTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Iran" subtitle="Iran Standard Time (IRST/IRDT) · UTC+3:30 / UTC+4:30 · Half-hour offset" />
      <IranClockClient />
      <CountryFactsSection hubSlug="iran" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Tehran time', href: '/tehran/' }, { label: 'Dubai time', href: '/dubai/' }, { label: 'Istanbul time', href: '/istanbul/' }, { label: 'Time in Turkey', href: '/turkey/' }, { label: 'Time in Saudi Arabia', href: '/saudi-arabia/' }, { label: 'Time in Pakistan', href: '/pakistan/' }, { label: 'Time in India', href: '/india/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Iran & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Iran: Asia/Tehran (IRST UTC+3:30 / IRDT UTC+4:30)."
      />
    </ContentPageWrapper>
  )
}
