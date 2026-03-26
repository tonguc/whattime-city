import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import DubaiClockClient from './DubaiClockClient'

export const metadata: Metadata = {
  title: 'Time in Dubai Now — GST (UTC+4) · UAE · Abu Dhabi, Sharjah',
  description:
    'What time is it in Dubai right now? Dubai uses GST (Gulf Standard Time, UTC+4) year-round — no Daylight Saving Time. Live Dubai clock, UAE vs US/UK/Europe, and best time to call.',
  keywords: [
    'time in dubai',
    'dubai time now',
    'what time is it in dubai',
    'dubai time',
    'current time in dubai',
    'dubai time zone',
    'GST time zone',
    'gulf standard time',
    'UAE time',
    'abu dhabi time now',
    'dubai time vs uk',
    'dubai time vs est',
    'time difference dubai usa',
    'time difference dubai uk',
    'dubai utc offset',
    'dubai utc+4',
    'dubai time right now',
    'uae time zone',
  ],
  alternates: {
    canonical: 'https://whattime.city/dubai/',
  },
  openGraph: {
    title: 'Current Time in Dubai — GST (UTC+4)',
    description:
      'Live Dubai / UAE time clock. GST is UTC+4 — Dubai has no Daylight Saving Time. Check Dubai time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/dubai/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Dubai Now — GST UTC+4',
    description: 'Live Dubai time. GST is UTC+4, fixed year-round. Dubai, Abu Dhabi, Sharjah all on the same time zone with no DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Dubai right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai uses Gulf Standard Time (GST), which is UTC+4. The live clock at the top of this page shows the exact current time in Dubai. All cities in the UAE — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Dubai in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai is in the Gulf Standard Time (GST) zone, which is UTC+4. The IANA time zone identifier is Asia/Dubai. The UAE uses a single time zone nationwide, and it is shared with Oman. GST is not an abbreviation used by any other country — it is specific to the Gulf states.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dubai observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dubai and the entire UAE do not observe Daylight Saving Time. GST is fixed at UTC+4 year-round. Because DST-observing countries like the US and UK change their clocks twice a year, the time difference between Dubai and those countries changes seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Dubai and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai (GST, UTC+4) is 4 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Dubai is 3 hours ahead of London. When it is 9:00 AM in London (GMT), it is 1:00 PM in Dubai. During BST, when it is 9:00 AM in London, it is 12:00 PM (noon) in Dubai.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Dubai and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai (GST, UTC+4) is 9 hours ahead of New York (EST, UTC−5) and 12 hours ahead of Los Angeles (PST, UTC−8). During US Daylight Saving Time, the gap narrows by 1 hour: 8 hours ahead of New York (EDT) and 11 hours ahead of Los Angeles (PDT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Dubai and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India (IST, UTC+5:30) is 1 hour and 30 minutes ahead of Dubai (GST, UTC+4). This gap is fixed year-round because neither country observes DST. When it is 9:00 AM in Dubai, it is 10:30 AM in Mumbai and New Delhi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dubai time the same as Abu Dhabi time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dubai and Abu Dhabi (and all other UAE emirates) are on the same time zone: Gulf Standard Time (GST, UTC+4). There is no time difference within the UAE.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Dubai from Europe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From London (GMT), the best window to reach Dubai during business hours (9 AM–6 PM GST) is 5:00 AM to 2:00 PM GMT. From Berlin or Paris (CET), the window is 6:00 AM to 3:00 PM CET. Dubai starts work significantly earlier than European cities, so European mornings align best.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Dubai', item: 'https://whattime.city/dubai/' },
  ],
}


export default function DubaiTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in Dubai
      " subtitle="
        Gulf Standard Time (GST) · UTC+4 · No Daylight Saving Time
      " />

      <DubaiClockClient />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Dubai / UAE: Asia/Dubai (GST, UTC+4). No DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
