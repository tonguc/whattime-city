import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PakistanClockClient from './PakistanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Pakistan Now — PKT (UTC+5) · Karachi, Lahore, Islamabad',
  description:
    'What time is it in Pakistan right now? Pakistan uses PKT (Pakistan Standard Time, UTC+5) year-round — no Daylight Saving Time. Live Karachi clock, Pakistan vs world cities, and best time to call.',
  keywords: [
    'time in pakistan', 'pakistan time now', 'what time is it in pakistan',
    'pakistan time', 'PKT time zone', 'pakistan standard time',
    'karachi time now', 'lahore time now', 'islamabad time now',
    'pakistan time vs uk', 'pakistan time vs est', 'pakistan utc+5',
    'time difference pakistan usa', 'pakistan time right now',
  ],
  alternates: { canonical: 'https://whattime.city/pakistan/' },
  openGraph: {
    title: 'Current Time in Pakistan — PKT (UTC+5)',
    description: 'Live Pakistan time. PKT is UTC+5, fixed year-round. Karachi, Lahore, Islamabad all on the same time zone with no DST.',
    type: 'website', url: 'https://whattime.city/pakistan/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Pakistan right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan uses Pakistan Standard Time (PKT), which is UTC+5. There is no Daylight Saving Time. All cities — Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad — are on the same time zone. The live clock at the top shows the current time in Pakistan.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Pakistan in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan uses Pakistan Standard Time (PKT, UTC+5). The IANA time zone identifier is Asia/Karachi. Pakistan is one of few countries at UTC+5 — others include Uzbekistan, Tajikistan, Turkmenistan, and the Maldives. India (IST) is 30 minutes ahead at UTC+5:30.' },
    },
    {
      '@type': 'Question',
      name: 'Does Pakistan observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Pakistan does not currently observe Daylight Saving Time. Pakistan briefly experimented with DST in 2008 and 2009, advancing clocks by 1 hour during summer. The practice was abandoned in 2009 due to public confusion and minimal energy savings at Pakistan\'s tropical latitude.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan (PKT, UTC+5) is 5 hours ahead of London (GMT, UTC+0) in winter. During British Summer Time (BST, UTC+1), Pakistan is 4 hours ahead. When it is 9:00 AM in London (GMT), it is 2:00 PM in Karachi.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan (PKT, UTC+5) is 10 hours ahead of New York (EST, UTC−5) and 13 hours ahead of Los Angeles (PST, UTC−8). During US DST, the gaps narrow by 1 hour. Pakistan is effectively "the next day" compared to US Western time zones.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'India (IST, UTC+5:30) is 30 minutes ahead of Pakistan (PKT, UTC+5). This half-hour gap is one of the smallest time differences between neighboring countries in the world. When it is 9:00 AM in Karachi, it is 9:30 AM in Mumbai or New Delhi.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Pakistan and Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pakistan (PKT, UTC+5) is 1 hour ahead of Dubai (GST, UTC+4). When it is 9:00 AM in Dubai, it is 10:00 AM in Karachi. This gap is fixed year-round as neither country observes DST.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Pakistan', item: 'https://whattime.city/pakistan/' },
  ],
}


export default function PakistanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Pakistan" subtitle="Pakistan Standard Time (PKT) · UTC+5 · No Daylight Saving Time" />
      <PakistanClockClient />
      <CountryFactsSection hubSlug="pakistan" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Pakistan: Asia/Karachi (PKT, UTC+5). No DST.
      "
      />
    </ContentPageWrapper>
  )
}
