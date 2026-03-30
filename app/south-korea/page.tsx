import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SouthKoreaClockClient from './SouthKoreaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in South Korea Now — KST (UTC+9) · No DST',
  description:
    'What time is it in South Korea right now? Korea uses KST (Korea Standard Time, UTC+9) year-round — no Daylight Saving Time. Same offset as Japan (JST). Live Seoul clock and best time to call.',
  keywords: [
    'time in south korea', 'korea time now', 'south korea time',
    'what time is it in south korea', 'KST time zone', 'korea standard time',
    'seoul time now', 'korea time vs uk', 'korea time vs est',
    'time difference korea usa', 'korea utc+9', 'korea time right now',
    'south korea time zone', 'is korea time same as japan',
  ],
  alternates: { canonical: 'https://whattime.city/south-korea/' },
  openGraph: {
    title: 'Current Time in South Korea — KST (UTC+9)',
    description: 'Live South Korea / Seoul time. KST is UTC+9, same as Japan (JST). No DST. Check Korea vs US, UK, Europe, and Asia.',
    type: 'website', url: 'https://whattime.city/south-korea/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in South Korea right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea uses Korea Standard Time (KST), which is UTC+9. There is no Daylight Saving Time. All cities — Seoul, Busan, Incheon, Daegu — are on the same time zone. The live clock at the top shows the current time in South Korea.' },
    },
    {
      '@type': 'Question',
      name: 'Is South Korea time the same as Japan time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Korea Standard Time (KST, UTC+9) and Japan Standard Time (JST, UTC+9) are the same UTC offset. There is no time difference between Seoul and Tokyo. Both countries use UTC+9 year-round with no DST.' },
    },
    {
      '@type': 'Question',
      name: 'Does South Korea observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. South Korea abolished Daylight Saving Time in 1988. Korea used DST from 1987 to 1988 in preparation for the Seoul Olympics, but abandoned it after the Games. KST has been fixed at UTC+9 since then.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between South Korea and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea (KST, UTC+9) is 14 hours ahead of New York (EST, UTC−5) and 17 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gaps narrow by 1 hour. Korea is effectively "the next day" compared to US Eastern time.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between South Korea and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea (KST, UTC+9) is 9 hours ahead of London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), Korea is 8 hours ahead. When it is 9:00 AM in London (GMT), it is 6:00 PM in Seoul.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between South Korea and China?',
      acceptedAnswer: { '@type': 'Answer', text: 'South Korea (KST, UTC+9) is 1 hour ahead of China (CST, UTC+8). When it is 10:00 AM in Beijing or Shanghai, it is 11:00 AM in Seoul. This gap is constant year-round as neither country observes DST.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Seoul in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seoul uses Korea Standard Time (KST, UTC+9). The IANA time zone identifier is Asia/Seoul. South Korea uses a single nationwide time zone — there are no internal time zone boundaries.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in South Korea', item: 'https://whattime.city/south-korea/' },
  ],
}


export default function SouthKoreaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in South Korea
      " subtitle="
        Korea Standard Time (KST) · UTC+9 · No Daylight Saving Time · Same as Japan (JST)
      " />

      <SouthKoreaClockClient />
      <CountryFactsSection hubSlug="south-korea" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in Philippines","href":"/philippines/"},{"label":"Time in Singapore","href":"/singapore/"},{"label":"Seoul time","href":"/seoul/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"New York time","href":"/new-york/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. South Korea: Asia/Seoul (KST, UTC+9). No DST.
      "
      />
    </ContentPageWrapper>
  )
}
