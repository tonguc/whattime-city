import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SingaporeClockClient from './SingaporeClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Singapore Now — SGT (UTC+8) · No Daylight Saving Time',
  description:
    'What time is it in Singapore right now? Singapore uses SGT (Singapore Standard Time, UTC+8) year-round with no Daylight Saving Time. Live clock, Singapore vs world cities, and best time to call.',
  keywords: [
    'time in singapore', 'singapore time now', 'what time is it in singapore',
    'singapore time', 'SGT time zone', 'singapore standard time',
    'singapore time vs uk', 'singapore time vs est', 'singapore utc+8',
    'time difference singapore usa', 'singapore time right now',
  ],
  alternates: { canonical: 'https://whattime.city/singapore/' },
  openGraph: {
    title: 'Current Time in Singapore — SGT (UTC+8)',
    description: 'Live Singapore time. SGT is UTC+8, fixed year-round. No DST. Check Singapore vs US, UK, Europe, and Asia.',
    type: 'website', url: 'https://whattime.city/singapore/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Singapore right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore uses Singapore Standard Time (SST), also known as SGT, which is UTC+8. There is no Daylight Saving Time. The live clock at the top shows the current time in Singapore.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Singapore in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore uses Singapore Standard Time (SGT, UTC+8). The IANA identifier is Asia/Singapore. Singapore shares UTC+8 with China, the Philippines, Malaysia, Taiwan, and Hong Kong. Despite being geographically close to UTC+7, Singapore moved to UTC+8 in 1982 to align with Malaysia and China for business purposes.' },
    },
    {
      '@type': 'Question',
      name: 'Does Singapore observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Singapore has never observed Daylight Saving Time. SGT is fixed at UTC+8 year-round. Near the equator, seasonal daylight variation is minimal, making DST unnecessary.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Singapore and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 8 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Singapore is 7 hours ahead. When it is 9:00 AM in London (GMT), it is 5:00 PM in Singapore.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Singapore and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 13 hours ahead of New York (EST, UTC−5) and 16 hours ahead of Los Angeles (PST, UTC−8). During US DST, the gaps narrow by 1 hour. Singapore is effectively "the next day" compared to US time zones.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Singapore and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 2 hours and 30 minutes ahead of India (IST, UTC+5:30). This gap is fixed year-round because neither country observes DST. When it is 9:00 AM in Mumbai, it is 11:30 AM in Singapore.' },
    },
    {
      '@type': 'Question',
      name: 'Is Singapore time the same as Malaysia and China?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Singapore (SGT, UTC+8), Malaysia (MYT, UTC+8), China (CST, UTC+8), Hong Kong (HKT, UTC+8), Taiwan (CST, UTC+8), and the Philippines (PHT, UTC+8) all share the same UTC+8 offset. There is no time difference between Singapore and Kuala Lumpur, Beijing, or Manila.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Singapore', item: 'https://whattime.city/singapore/' },
  ],
}


export default function SingaporeTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in Singapore
      " subtitle="
        Singapore Standard Time (SGT) · UTC+8 · No Daylight Saving Time
      " />

      <SingaporeClockClient />
      <CountryFactsSection hubSlug="singapore" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Malaysia","href":"/malaysia/"},{"label":"Time in Indonesia","href":"/indonesia/"},{"label":"Time in Philippines","href":"/philippines/"},{"label":"Time in China","href":"/china/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in Hong Kong","href":"/hong-kong/"},{"label":"Dubai time","href":"/dubai/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Singapore: Asia/Singapore (SGT, UTC+8). No DST.
      "
      />
    </ContentPageWrapper>
  )
}
