import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CameroonClockClient from './CameroonClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Cameroon Now — WAT (UTC+1) · Yaoundé · No DST',
  description: 'What time is it in Cameroon right now? Cameroon uses West Africa Time (WAT, UTC+1) year-round with no Daylight Saving Time. Live Yaoundé clock, Cameroon vs world cities.',
  keywords: ['time in cameroon', 'cameroon time now', 'what time is it in cameroon', 'yaounde time', 'cameroon time zone', 'WAT cameroon', 'cameroon utc+1', 'douala time', 'cameroon time vs uk', 'cameroon time vs usa', 'cameroon time vs nigeria', 'west africa time'],
  alternates: { canonical: 'https://whattime.city/cameroon/' },
  openGraph: { title: 'Current Time in Cameroon — WAT (UTC+1) · No DST', description: 'Live Cameroon time. Yaoundé and Douala on WAT (UTC+1) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/cameroon/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Cameroon right now?', acceptedAnswer: { '@type': 'Answer', text: 'Cameroon uses West Africa Time (WAT, UTC+1) year-round. Yaoundé (capital), Douala, Bamenda, Garoua, and all Cameroonian cities are on UTC+1 with no Daylight Saving Time. The live clock above shows the current time in Cameroon.' } },
    { '@type': 'Question', name: 'What time zone is Yaoundé in?', acceptedAnswer: { '@type': 'Answer', text: 'Yaoundé uses West Africa Time (WAT, UTC+1). The IANA identifier is Africa/Douala. Cameroon shares WAT (UTC+1) with Nigeria, Niger, Chad, Central African Republic, Republic of Congo, and Gabon. In winter, Cameroon is on the same time as most of Western Europe (CET).' } },
    { '@type': 'Question', name: 'Does Cameroon observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Cameroon does not observe Daylight Saving Time. WAT (UTC+1) is fixed year-round. Like most equatorial African countries, Cameroon\'s proximity to the equator means minimal seasonal daylight variation, making DST unnecessary.' } },
    { '@type': 'Question', name: 'What is the time difference between Cameroon and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Yaoundé (WAT, UTC+1) is 1 hour ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), Cameroon and the UK are on the same time. Since Cameroon has no DST, this relationship changes only when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Cameroon and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Yaoundé (WAT, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), Yaoundé is 5 hours ahead. Yaoundé is 9 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Cameroon and Nigeria?', acceptedAnswer: { '@type': 'Answer', text: 'Cameroon (WAT, UTC+1) and Nigeria (WAT, UTC+1) are on the same time year-round. There is no time difference between Yaoundé or Douala and Lagos or Abuja. Both countries use West Africa Time with no DST.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Cameroon', item: 'https://whattime.city/cameroon/' }] }

export default function CameroonTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Cameroon" subtitle="West Africa Time (WAT) · UTC+1 · No Daylight Saving Time" />
      <CameroonClockClient />
      <CountryFactsSection hubSlug="cameroon" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Lagos time', href: '/lagos/' }, { label: 'Accra time', href: '/accra/' }, { label: 'Nairobi time', href: '/nairobi/' }, { label: 'Time in Nigeria', href: '/nigeria/' }, { label: 'Time in Ghana', href: '/ghana/' }, { label: 'Time in Kenya', href: '/kenya/' }, { label: 'Time in South Africa', href: '/south-africa/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Cameroon & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Cameroon: Africa/Douala (WAT UTC+1, no DST)."
      />
    </ContentPageWrapper>
  )
}
