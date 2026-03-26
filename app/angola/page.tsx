import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AngolaClockClient from './AngolaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Angola Now — WAT · Luanda · UTC+1',
  description: 'What time is it in Angola right now? Angola uses West Africa Time (WAT, UTC+1) year-round with no Daylight Saving Time. Luanda live clock and time zone comparison.',
  keywords: ['time in angola', 'angola time now', 'what time is it in angola', 'luanda time', 'angola time zone', 'WAT angola', 'angola utc+1', 'luanda current time', 'angola no dst', 'west africa time angola'],
  alternates: { canonical: 'https://whattime.city/angola/' },
  openGraph: { title: 'Current Time in Angola — WAT · Luanda', description: 'Live Angola time. Luanda and all of Angola use West Africa Time (WAT, UTC+1) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/angola/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Angola right now?', acceptedAnswer: { '@type': 'Answer', text: 'Angola uses West Africa Time (WAT, UTC+1) year-round. Luanda, Huambo, Lobito, and all Angolan cities share the same time. The live clock above shows the current time in Angola.' } },
    { '@type': 'Question', name: 'What time zone is Luanda, Angola in?', acceptedAnswer: { '@type': 'Answer', text: 'Luanda, the capital of Angola, uses the West Africa Time zone (Africa/Luanda, WAT, UTC+1). Angola does not observe Daylight Saving Time. It shares the same time as Lagos (Nigeria), Kinshasa (DRC), Brazzaville (Republic of Congo), and Cameroon.' } },
    { '@type': 'Question', name: 'Does Angola observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Angola does not observe Daylight Saving Time. Clocks across Angola remain at WAT (UTC+1) throughout the entire year.' } },
    { '@type': 'Question', name: 'What is the time difference between Angola and Portugal?', acceptedAnswer: { '@type': 'Answer', text: 'Angola (WAT, UTC+1) and Portugal (WET, UTC+0) differ by 1 hour in winter — Angola is 1 hour ahead. In summer, Portugal moves to WEST (UTC+1), making Angola and Portugal temporarily on the same time. Angola\'s former colonial ties with Portugal make this a common comparison.' } },
    { '@type': 'Question', name: 'What is the time difference between Angola and South Africa?', acceptedAnswer: { '@type': 'Answer', text: 'Angola (WAT, UTC+1) and South Africa (SAST, UTC+2) differ by 1 hour — Luanda is always 1 hour behind Johannesburg and Cape Town. Neither country observes Daylight Saving Time.' } },
    { '@type': 'Question', name: 'Is Angola on the same time as Nigeria and DRC?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Angola, Nigeria, and the Democratic Republic of the Congo (DRC/Kinshasa) all use WAT (UTC+1) year-round with no Daylight Saving Time. There is no time difference between Luanda, Lagos, and Kinshasa.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Angola', item: 'https://whattime.city/angola/' }] }

export default function AngolaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Angola" subtitle="WAT (UTC+1) · Luanda · No Daylight Saving Time" />
      <AngolaClockClient />
      <CountryFactsSection hubSlug="angola" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Nigeria time', href: '/nigeria/' }, { label: 'South Africa time', href: '/south-africa/' }, { label: 'Kenya time', href: '/kenya/' }, { label: 'Ghana time', href: '/ghana/' }, { label: 'Cameroon time', href: '/cameroon/' }, { label: 'Lisbon time', href: '/lisbon/' }, { label: 'London time', href: '/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Africa & Related Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. Angola: Africa/Luanda (WAT, UTC+1, no DST)."
      />
    </ContentPageWrapper>
  )
}
