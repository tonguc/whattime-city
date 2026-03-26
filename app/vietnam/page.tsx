import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import VietnamClockClient from './VietnamClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Vietnam Now — ICT (UTC+7) · Ho Chi Minh City, Hanoi · No DST',
  description:
    'What time is it in Vietnam right now? Vietnam uses Indochina Time (ICT, UTC+7) year-round with no Daylight Saving Time. Live Ho Chi Minh City clock, Vietnam vs world cities, and best time to call.',
  keywords: [
    'time in vietnam', 'vietnam time now', 'what time is it in vietnam',
    'ho chi minh city time', 'hanoi time', 'vietnam time zone', 'ICT time zone',
    'vietnam utc+7', 'vietnam no daylight saving', 'saigon time',
    'vietnam time vs usa', 'vietnam time vs uk', 'vietnam time vs singapore',
    'vietnam time vs australia', 'current time vietnam', 'indochina time',
  ],
  alternates: { canonical: 'https://whattime.city/vietnam/' },
  openGraph: {
    title: 'Current Time in Vietnam — ICT (UTC+7) · No Daylight Saving Time',
    description: 'Live Vietnam time. Indochina Time (ICT, UTC+7) used year-round. No DST. Ho Chi Minh City, Hanoi, Da Nang all on the same time.',
    type: 'website', url: 'https://whattime.city/vietnam/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Vietnam right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vietnam uses Indochina Time (ICT, UTC+7) year-round. All cities — Ho Chi Minh City (Saigon), Hanoi, Da Nang, Hue, Nha Trang, Can Tho — are on the same time zone. Vietnam does not observe Daylight Saving Time. The live clock above shows the current time in Vietnam.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Vietnam in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vietnam is in the Indochina Time (ICT) zone, which is UTC+7. The IANA identifier is Asia/Ho_Chi_Minh. Vietnam shares this UTC+7 offset with Thailand, Cambodia, Laos, and the western part of Indonesia (WIB). Vietnam has not observed Daylight Saving Time since 1975.' },
    },
    {
      '@type': 'Question',
      name: 'Does Vietnam observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Vietnam does not observe Daylight Saving Time. ICT (UTC+7) is used year-round. Vietnam is located near the equator, where the difference in daylight between summer and winter is small, making DST impractical. Vietnam had a brief period of DST from 1981–1983 but has not used it since.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ho Chi Minh City (ICT, UTC+7) is 12 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 11 hours. Vietnam is 15 hours ahead of Los Angeles (PST, UTC−8) in winter, or 14 hours ahead during PDT. Because Vietnam has no DST, the difference changes only when the US adjusts its clocks.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ho Chi Minh City (ICT, UTC+7) is 7 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 6 hours. Since Vietnam has no DST, this difference changes only when the UK adjusts its clocks in late March and late October.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and Singapore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 1 hour ahead of Vietnam (ICT, UTC+7). Despite being close geographically and economically linked in ASEAN, Singapore uses UTC+8 while Vietnam uses UTC+7. When it is 9:00 AM in Ho Chi Minh City, it is 10:00 AM in Singapore. Both countries have no DST, so this difference is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Vietnam and Australia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sydney (AEST, UTC+10) is 3 hours ahead of Ho Chi Minh City (ICT, UTC+7) in winter. During Australian Eastern Daylight Time (AEDT, UTC+11), the gap widens to 4 hours. Since Vietnam has no DST, the difference shifts only when Australia changes its clocks in October and April.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Vietnam', item: 'https://whattime.city/vietnam/' },
  ],
}


export default function VietnamTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Vietnam" subtitle="Indochina Time (ICT) · UTC+7 · No Daylight Saving Time" />
      <VietnamClockClient />
      <CountryFactsSection hubSlug="vietnam" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Vietnam: Asia/Ho_Chi_Minh (ICT UTC+7, no DST).
      "
      />
    </ContentPageWrapper>
  )
}
