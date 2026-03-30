import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PhilippinesClockClient from './PhilippinesClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in the Philippines Now — PHT (UTC+8)',
  description:
    'What time is it in the Philippines right now? The Philippines uses PHT (Philippine Time, UTC+8) year-round — no Daylight Saving Time. Live Manila clock, Philippines vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in the philippines',
    'philippines time now',
    'philippine time',
    'manila time now',
    'philippines time',
    'PHT time zone',
    'philippine standard time',
    'current time in philippines',
    'what time is it in the philippines',
    'philippines time vs est',
    'philippines time vs uk',
    'time difference philippines usa',
    'time difference philippines uk',
    'philippines utc offset',
    'philippines utc+8',
    'manila time zone',
    'philippines time right now',
  ],
  alternates: {
    canonical: 'https://whattime.city/philippines/',
  },
  openGraph: {
    title: 'Current Time in the Philippines — PHT',
    description:
      'Live Philippines / Manila time clock. PHT is UTC+8 — the Philippines has no Daylight Saving Time. Check Philippines time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/philippines/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in the Philippines Now — PHT UTC+8',
    description:
      'Live Philippines time. PHT is UTC+8. Manila, Cebu, Davao all share one time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in the Philippines right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines uses Philippine Time (PHT), which is UTC+8. The live clock at the top of this page shows the exact current time in the Philippines. All major cities — Manila, Cebu, Davao, Quezon City, and Makati — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is the Philippines in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines uses Philippine Standard Time (PST), also known as Philippine Time (PHT), which is UTC+8. The IANA time zone identifier is Asia/Manila. The Philippines shares this UTC+8 offset with Singapore, Malaysia, China, Hong Kong, and Taiwan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Philippines observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Philippines does not observe Daylight Saving Time. PHT is fixed at UTC+8 year-round. The Philippines last experimented with DST in 1990 for the SEA Games and briefly in 1992, but abandoned it due to minimal benefit at tropical latitudes. The time offset from US and European countries changes seasonally when those countries adjust their clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Philippines and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines (PHT, UTC+8) is 13 hours ahead of New York (EST, UTC−5) and 16 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time, the difference shrinks by 1 hour: 12 hours ahead of New York (EDT) and 15 hours ahead of Los Angeles (PDT). Because the gap exceeds 12 hours, the Philippines is effectively "the next day" compared to US time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Philippines and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines (PHT, UTC+8) is 8 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), the Philippines is 7 hours ahead of London. When it is 8:00 AM in Manila, it is midnight (12:00 AM) in London (winter) or 1:00 AM (summer).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call the Philippines from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To reach the Philippines during business hours (9 AM–6 PM PHT), callers from US Eastern time (EST) should call between 8:00 PM and 5:00 AM EST. From US Pacific time (PST), the window is 5:00 PM to 2:00 AM PST. For practical daytime calls, 8:00–11:00 PM EST reaches the Philippines around 9 AM–noon the next day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Manila time the same as Cebu and Davao time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Manila, Cebu, Davao, Quezon City, Makati, Zamboanga, and every other city in the Philippines all use the same time zone: Philippine Time (PHT, UTC+8). The Philippines has a single time zone nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Philippines and Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Philippines (PHT, UTC+8) is 2 hours behind Sydney during Australian Eastern Standard Time (AEST, UTC+10), and 3 hours behind during Australian Eastern Daylight Time (AEDT, UTC+11). When it is 10:00 AM in Manila, it is 12:00 PM (noon) in Sydney (AEST) or 1:00 PM (AEDT).',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in the Philippines', item: 'https://whattime.city/philippines/' },
  ],
}


export default function PhilippinesTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HubPageHeader title="
        Current Time in the Philippines
      " subtitle="
        Philippine Time (PHT) · UTC+8 · No Daylight Saving Time
      " />

      <PhilippinesClockClient />
      <CountryFactsSection hubSlug="philippines" />

      {/* PHT Explained */}
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Singapore","href":"/singapore/"},{"label":"Time in Malaysia","href":"/malaysia/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in South Korea","href":"/south-korea/"},{"label":"Time in Indonesia","href":"/indonesia/"},{"label":"Manila time","href":"/manila/"},{"label":"Time in China","href":"/china/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Philippines: Asia/Manila (PHT, UTC+8). No DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
