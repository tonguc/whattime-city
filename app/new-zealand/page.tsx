import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NewZealandClockClient from './NewZealandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in New Zealand Now — NZST/NZDT (UTC+12/+13) · Auckland, Wellington · Chatham Islands',
  description:
    'What time is it in New Zealand right now? New Zealand uses NZST (UTC+12) in winter and NZDT (UTC+13) during Daylight Saving Time — opposite to the Northern Hemisphere. Chatham Islands are 45 minutes ahead. Live Auckland clock and world comparison.',
  keywords: [
    'time in new zealand', 'new zealand time now', 'what time is it in new zealand',
    'auckland time', 'wellington time', 'new zealand time zone', 'NZST', 'NZDT',
    'new zealand utc+12', 'new zealand daylight saving', 'nz time vs usa',
    'nz time vs uk', 'nz time vs australia', 'chatham islands time',
    'new zealand time vs india', 'current time auckland', 'nzst nzdt',
  ],
  alternates: { canonical: 'https://whattime.city/new-zealand/' },
  openGraph: {
    title: 'Current Time in New Zealand — NZST (UTC+12) / NZDT (UTC+13) · Chatham +45min',
    description: 'Live New Zealand time. NZST (UTC+12) in winter, NZDT (UTC+13) in summer (Southern Hemisphere DST). Chatham Islands are 45 minutes ahead of the NZ mainland.',
    type: 'website', url: 'https://whattime.city/new-zealand/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in New Zealand right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'New Zealand uses New Zealand Standard Time (NZST, UTC+12) in winter and New Zealand Daylight Time (NZDT, UTC+13) during Daylight Saving Time. Auckland, Wellington, Christchurch, and Dunedin are all on the same time. The Chatham Islands use CHAST (UTC+12:45) in winter and CHADT (UTC+13:45) in summer — always 45 minutes ahead of the mainland. The live clock above shows the current time in Auckland.' },
    },
    {
      '@type': 'Question',
      name: 'When does New Zealand observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'New Zealand observes Daylight Saving Time in the Southern Hemisphere summer — the opposite of Northern Hemisphere countries. Clocks spring forward 1 hour on the last Sunday of September (NZST to NZDT, UTC+12 to UTC+13) and fall back on the first Sunday of April (NZDT to NZST). This means New Zealand\'s DST season runs from late September through early April.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New Zealand and Australia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Auckland (NZST, UTC+12) is 2 hours ahead of Sydney (AEST, UTC+10) during New Zealand\'s winter. During New Zealand\'s summer (NZDT, UTC+13), Auckland is 2–3 hours ahead of Sydney, depending on whether Australia is also on daylight time. Since both countries observe DST but on different schedules (Southern Hemisphere), the gap varies between 2 and 3 hours across the year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New Zealand and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Auckland (NZST, UTC+12) is 12 hours ahead of London (GMT, UTC+0) in the UK winter. When New Zealand is on NZDT (UTC+13), Auckland is 13 hours ahead of London. During UK Summer Time (BST, UTC+1), the gap narrows by 1 hour. The combined effect means the NZ–UK difference ranges from 11 to 13 hours across the year depending on which DST regime each country is in.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between New Zealand and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Auckland (NZST, UTC+12) is 17 hours ahead of New York (EST, UTC−5) in winter. This effectively means that when it is Monday morning in New York, it is already Tuesday in Auckland. The difference can range from 16 to 19 hours depending on which countries are on daylight time. New Zealand is sometimes said to be "almost a day ahead" of the US East Coast.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone are the Chatham Islands in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Chatham Islands (Pitt Island, Chatham Island) use Chatham Standard Time (CHAST, UTC+12:45) in winter and Chatham Daylight Time (CHADT, UTC+13:45) during Daylight Saving Time. They are always exactly 45 minutes ahead of the New Zealand mainland. The 45-minute offset makes Chatham one of the few places in the world with a non-standard quarter-hour offset. The IANA identifier is Pacific/Chatham.' },
    },
    {
      '@type': 'Question',
      name: 'Is New Zealand the first country to see the new day?',
      acceptedAnswer: { '@type': 'Answer', text: 'New Zealand (UTC+12 in winter, UTC+13 during NZDT) is among the first inhabited places to see each new day. During NZDT (UTC+13), New Zealand and the independent state of Samoa (UTC+13) share the earliest standard time on Earth. The Chatham Islands (UTC+13:45 during CHADT) are technically even further ahead. The uninhabited Line Islands (Kiribati) at UTC+14 see midnight first but have very few permanent inhabitants.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in New Zealand', item: 'https://whattime.city/new-zealand/' },
  ],
}


export default function NewZealandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in New Zealand" subtitle="NZST (UTC+12) in winter · NZDT (UTC+13) in summer · Chatham Islands +45 min ahead" />
      <NewZealandClockClient />
      <CountryFactsSection hubSlug="new-zealand" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. New Zealand: Pacific/Auckland (NZST UTC+12 / NZDT UTC+13) · Pacific/Chatham (CHAST UTC+12:45 / CHADT UTC+13:45).
      "
      />
    </ContentPageWrapper>
  )
}
