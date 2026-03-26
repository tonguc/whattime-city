import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BangladeshClockClient from './BangladeshClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Bangladesh Now — BST (UTC+6) · Dhaka · No DST',
  description: 'What time is it in Bangladesh right now? Bangladesh uses Bangladesh Standard Time (BST, UTC+6) year-round with no Daylight Saving Time. Live Dhaka clock, Bangladesh vs world cities.',
  keywords: ['time in bangladesh', 'bangladesh time now', 'what time is it in bangladesh', 'dhaka time', 'bangladesh time zone', 'BST bangladesh', 'bangladesh utc+6', 'chittagong time', 'bangladesh time vs uk', 'bangladesh time vs usa', 'bangladesh time vs india'],
  alternates: { canonical: 'https://whattime.city/bangladesh/' },
  openGraph: { title: 'Current Time in Bangladesh — BST (UTC+6) · No DST', description: 'Live Bangladesh time. Dhaka on BST (UTC+6) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/bangladesh/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Bangladesh right now?', acceptedAnswer: { '@type': 'Answer', text: 'Bangladesh uses Bangladesh Standard Time (BST, UTC+6) year-round. All cities — Dhaka, Chittagong, Khulna, Sylhet, and Rajshahi — are in the same time zone. Bangladesh does not observe Daylight Saving Time. The live clock above shows the current time in Bangladesh.' } },
    { '@type': 'Question', name: 'What time zone is Dhaka in?', acceptedAnswer: { '@type': 'Answer', text: 'Dhaka uses Bangladesh Standard Time (BST, UTC+6). The IANA identifier is Asia/Dhaka. BST (UTC+6) should not be confused with British Summer Time (BST, UTC+1). Bangladesh is 30 minutes ahead of India (IST, UTC+5:30) and 1 hour ahead of Pakistan (PKT, UTC+5).' } },
    { '@type': 'Question', name: 'Does Bangladesh observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Bangladesh does not currently observe Daylight Saving Time. Bangladesh briefly experimented with DST in 2009–2010 but abolished it. BST (UTC+6) is fixed year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Bangladesh and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Dhaka (BST, UTC+6) is 6 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 5 hours ahead. Since Bangladesh has no DST, the difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Bangladesh and India?', acceptedAnswer: { '@type': 'Answer', text: 'Bangladesh (BST, UTC+6) is 30 minutes ahead of India (IST, UTC+5:30). When it is 12:00 noon in Dhaka, it is 11:30 AM in Kolkata and Mumbai. Neither country observes DST, so this 30-minute gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Bangladesh and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Dhaka (BST, UTC+6) is 11 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 10 hours. Dhaka is 14 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Bangladesh', item: 'https://whattime.city/bangladesh/' }] }

export default function BangladeshTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Bangladesh" subtitle="Bangladesh Standard Time (BST) · UTC+6 · No Daylight Saving Time" />
      <BangladeshClockClient />
      <CountryFactsSection hubSlug="bangladesh" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Dhaka time', href: '/dhaka/' }, { label: 'Kolkata time', href: '/kolkata/' }, { label: 'Singapore time', href: '/singapore/' }, { label: 'Time in India', href: '/india/' }, { label: 'Time in Pakistan', href: '/pakistan/' }, { label: 'Time in Thailand', href: '/thailand/' }, { label: 'Dhaka → London', href: '/time/dhaka/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Bangladesh & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Bangladesh: Asia/Dhaka (BST UTC+6, no DST)."
      />
    </ContentPageWrapper>
  )
}
