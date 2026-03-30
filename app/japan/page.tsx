import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import JapanClockClient from './JapanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Japan Now — JST (UTC+9) · Tokyo',
  description:
    'What time is it in Japan right now? Japan uses JST (Japan Standard Time, UTC+9) year-round — no Daylight Saving Time. Live Tokyo clock, Japan vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in japan',
    'japan time now',
    'what time is it in japan',
    'japan time',
    'current time in japan',
    'japan time zone',
    'JST time zone',
    'japan standard time',
    'tokyo time now',
    'osaka time now',
    'japan time vs est',
    'japan time vs uk',
    'time difference japan usa',
    'japan utc offset',
    'japan utc+9',
    'japan time right now',
    'japan no daylight saving',
  ],
  alternates: {
    canonical: 'https://whattime.city/japan/',
  },
  openGraph: {
    title: 'Current Time in Japan — JST (UTC+9)',
    description:
      'Live Japan / Tokyo time clock. JST is UTC+9 — Japan has no Daylight Saving Time. Check Japan time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/japan/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Japan Now — JST UTC+9',
    description:
      'Live Japan time. JST is UTC+9, fixed year-round. Tokyo, Osaka, Kyoto, Sapporo all share one time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Japan right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan uses Japan Standard Time (JST), which is UTC+9. The live clock at the top of this page shows the exact current time in Japan. All cities — Tokyo, Osaka, Kyoto, Sapporo, Hiroshima, and Fukuoka — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Japan in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan is in the Japan Standard Time (JST) zone, which is UTC+9. The IANA time zone identifier is Asia/Tokyo. Japan uses a single time zone nationwide despite its considerable north-south span. JST is shared with South Korea (KST) and a few other countries at the same offset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Japan observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Japan abolished Daylight Saving Time in 1952 following its brief post-World War II occupation-era usage. JST has been fixed at UTC+9 ever since. Japan is one of the few major industrialized nations that does not change its clocks. This means the time difference between Japan and DST-observing countries changes seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) is 14 hours ahead of New York (EST, UTC−5) and 17 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gap narrows by 1 hour: 13 hours ahead of New York (EDT) and 16 hours ahead of Los Angeles (PDT). Japan is effectively "the next day" compared to US time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) is 9 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Japan is 8 hours ahead. When it is 9:00 AM in London (GMT), it is 6:00 PM in Tokyo. Because Japan has no DST, the gap changes only when the UK switches clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Japan from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To reach Japan during business hours (9 AM–6 PM JST), callers from US Eastern time (EST) should call between 7:00 PM and 4:00 AM EST. From US Pacific time (PST), the window is 4:00 PM to 1:00 AM PST. For practical overlap, 7:00–9:00 PM EST is the most workable window — Japan will be in its 9:00–11:00 AM morning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and South Korea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) and South Korea (KST, UTC+9) are on the same UTC offset and show the same time. There is no time difference between Tokyo and Seoul.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Japan and China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Japan (JST, UTC+9) is 1 hour ahead of China (CST, UTC+8). When it is 10:00 AM in Tokyo, it is 9:00 AM in Beijing, Shanghai, and all other Chinese cities. China uses a single time zone (UTC+8) despite its wide geographic span.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Japan', item: 'https://whattime.city/japan/' },
  ],
}


export default function JapanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in Japan
      " subtitle="
        Japan Standard Time (JST) · UTC+9 · No Daylight Saving Time
      " />

      <JapanClockClient />
      <CountryFactsSection hubSlug="japan" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in South Korea","href":"/south-korea/"},{"label":"Time in China","href":"/china/"},{"label":"Time in Singapore","href":"/singapore/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time in Philippines","href":"/philippines/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Osaka time","href":"/osaka/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Japan: Asia/Tokyo (JST, UTC+9). No DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
