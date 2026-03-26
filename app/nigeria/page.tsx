import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NigeriaClockClient from './NigeriaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Nigeria Now — WAT (UTC+1) · Lagos, Abuja',
  description:
    'What time is it in Nigeria right now? Nigeria uses WAT (West Africa Time, UTC+1) year-round — no Daylight Saving Time. Live Lagos clock, Nigeria vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in nigeria',
    'nigeria time now',
    'nigeria time',
    'lagos time',
    'lagos time now',
    'abuja time',
    'WAT time zone',
    'west africa time',
    'current time in nigeria',
    'what time is it in nigeria',
    'nigeria time vs uk',
    'nigeria time vs est',
    'time difference nigeria usa',
    'time difference nigeria uk',
    'nigeria utc offset',
    'nigeria wat utc+1',
  ],
  alternates: {
    canonical: 'https://whattime.city/nigeria/',
  },
  openGraph: {
    title: 'Current Time in Nigeria — WAT (UTC+1)',
    description:
      'Live Nigeria / Lagos time clock. WAT is UTC+1 — Nigeria has no Daylight Saving Time. Check Nigeria time vs US, UK, Europe, and more.',
    type: 'website',
    url: 'https://whattime.city/nigeria/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Nigeria Now — WAT UTC+1',
    description:
      'Live Nigeria time. WAT is UTC+1. Lagos and all Nigeria use a single time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Nigeria (Lagos) right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria uses West Africa Time (WAT), which is UTC+1. The live clock at the top of this page shows the current time in Nigeria. Lagos, Abuja, Kano, Port Harcourt, and all other Nigerian cities are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Nigeria\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria uses West Africa Time (WAT), which is UTC+1. The IANA time zone identifier is Africa/Lagos. Nigeria uses a single time zone across the entire country — from Lagos in the south to Kano in the north.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Nigeria observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Nigeria does not observe Daylight Saving Time. WAT is fixed at UTC+1 year-round. This means the time difference between Nigeria and DST-observing countries like the US and UK changes seasonally when those countries adjust their clocks, but Nigeria itself never changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Nigeria and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria (WAT, UTC+1) is 1 hour ahead of London (GMT, UTC+0) during winter. During British Summer Time (BST, UTC+1), Nigeria and the UK are on the same time. When it is 12:00 PM in London (GMT), it is 1:00 PM in Lagos. During BST, both cities show the same time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Nigeria and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria (WAT, UTC+1) is 6 hours ahead of New York (EST, UTC−5) and 9 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time, the difference shrinks by 1 hour: 5 hours ahead of New York (EDT) and 8 hours ahead of Los Angeles (PDT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Nigeria from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From US Eastern time (EST), the best window to reach Nigeria during business hours (8 AM–5 PM WAT) is 2:00 AM to 11:00 AM EST. From US Pacific time (PST), try 11:00 PM to 8:00 AM PST. For practical calls, 7:00–11:00 AM EST (1:00–5:00 PM WAT) catches Nigeria\'s afternoon while remaining a reasonable US morning hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lagos time the same as Abuja time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lagos, Abuja, Kano, Port Harcourt, and every other city in Nigeria all use the same time zone: West Africa Time (WAT, UTC+1). Nigeria has just one time zone nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Nigeria and the Netherlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nigeria (WAT, UTC+1) and the Netherlands (CET, UTC+1 in winter) are on the same time during European winter. During Central European Summer Time (CEST, UTC+2), the Netherlands is 1 hour ahead of Nigeria. This is why "lagos netherlands time difference" is a common search — the gap oscillates between 0 and 1 hour depending on European DST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Nigeria', item: 'https://whattime.city/nigeria/' },
  ],
}


export default function NigeriaTimePage() {
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
        Current Time in Nigeria
      " subtitle="
        West Africa Time (WAT) · UTC+1 · No Daylight Saving Time
      " />

      <NigeriaClockClient />
      <CountryFactsSection hubSlug="nigeria" />

      {/* WAT Explained */}
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Ghana","href":"/ghana/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"Time in Cameroon","href":"/cameroon/"},{"label":"Time in Senegal","href":"/senegal/"},{"label":"Lagos time","href":"/lagos/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Nigeria: Africa/Lagos (WAT, UTC+1). No DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
