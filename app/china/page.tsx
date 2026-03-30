import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ChinaClockClient from './ChinaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in China Now — CST (UTC+8) · Beijing',
  description:
    'What time is it in China right now? China uses CST (China Standard Time, UTC+8) nationwide — a single time zone for the entire country. Live Beijing clock, China vs world cities, and best time to call.',
  keywords: [
    'time in china', 'china time now', 'what time is it in china',
    'china time', 'CST china time zone', 'china standard time',
    'beijing time now', 'shanghai time now', 'china utc+8',
    'china time vs uk', 'china time vs est', 'time difference china usa',
    'china time right now', 'china single time zone',
  ],
  alternates: { canonical: 'https://whattime.city/china/' },
  openGraph: {
    title: 'Current Time in China — CST (UTC+8)',
    description: 'Live China time. CST is UTC+8, one nationwide time zone despite China\'s vast geographic span. No DST. Beijing, Shanghai, Shenzhen all on the same clock.',
    type: 'website', url: 'https://whattime.city/china/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in China right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'China uses China Standard Time (CST), which is UTC+8. The entire country — Beijing, Shanghai, Shenzhen, Guangzhou, Chengdu, Xi\'an — uses the same time zone. There is no Daylight Saving Time. The live clock at the top shows the current time in China.' },
    },
    {
      '@type': 'Question',
      name: 'Why does China have only one time zone?',
      acceptedAnswer: { '@type': 'Answer', text: 'China spans about 5,000 km east-to-west, which geographically warrants 5 time zones (UTC+5 to UTC+9). However, in 1949 the People\'s Republic of China unified the country under a single time zone, Beijing Standard Time (UTC+8), for political and administrative reasons. This means western regions like Xinjiang experience sunrise as late as 10 AM by the clock.' },
    },
    {
      '@type': 'Question',
      name: 'Does China observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. China abolished Daylight Saving Time in 1991 after using it from 1986 to 1991. CST is fixed at UTC+8 year-round. China is one of the few large countries to use a single, permanent time zone.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between China and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'China (CST, UTC+8) is 13 hours ahead of New York (EST, UTC−5) and 16 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gaps narrow by 1 hour. China is effectively "the next day" compared to most US time zones.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between China and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'China (CST, UTC+8) is 8 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), China is 7 hours ahead. When it is 9:00 AM in London (GMT), it is 5:00 PM in Beijing.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between China and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'China (CST, UTC+8) is 2 hours and 30 minutes ahead of India (IST, UTC+5:30). This gap is fixed year-round because neither country observes DST. When it is 9:00 AM in Mumbai, it is 11:30 AM in Beijing.' },
    },
    {
      '@type': 'Question',
      name: 'Is China time the same as Singapore and Philippines time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. China (CST, UTC+8), Singapore (SGT, UTC+8), Philippines (PHT, UTC+8), Malaysia (MYT, UTC+8), Hong Kong (HKT, UTC+8), and Taiwan (CST, UTC+8) all use UTC+8. There is no time difference between Beijing, Singapore, Manila, Kuala Lumpur, or Hong Kong.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in China', item: 'https://whattime.city/china/' },
  ],
}


export default function ChinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in China
      " subtitle="
        China Standard Time (CST) · UTC+8 · Single nationwide time zone · No Daylight Saving Time
      " />

      <ChinaClockClient />
      <CountryFactsSection hubSlug="china" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Japan","href":"/japan/"},{"label":"Time in South Korea","href":"/south-korea/"},{"label":"Time in Singapore","href":"/singapore/"},{"label":"Time in Hong Kong","href":"/hong-kong/"},{"label":"Time in Taiwan","href":"/taiwan/"},{"label":"Beijing time","href":"/beijing/"},{"label":"Shanghai time","href":"/shanghai/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. China: Asia/Shanghai (CST, UTC+8). No DST.
      "
      />
    </ContentPageWrapper>
  )
}
