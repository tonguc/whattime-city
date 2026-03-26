import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CongoClockClient from './CongoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Congo Now — WAT (UTC+1) · Brazzaville',
  description: 'What time is it in Congo right now? Live Brazzaville clock, time zone info (WAT (UTC+1)), best time to call, and time difference with major cities.',
  keywords: ['time in congo', 'congo time now', 'what time is it in congo', 'brazzaville time', 'congo time zone'],
  alternates: { canonical: 'https://whattime.city/congo/' },
  openGraph: { title: 'Current Time in Congo — WAT · Brazzaville', description: 'Live Congo time. Brazzaville on WAT (UTC+1).', type: 'website', url: 'https://whattime.city/congo/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Congo right now?', acceptedAnswer: { '@type': 'Answer', text: 'Congo uses WAT (UTC+1). Brazzaville is the capital. The live clock above shows the current local time in Congo.' } },
    { '@type': 'Question', name: 'What time zone is Brazzaville in?', acceptedAnswer: { '@type': 'Answer', text: 'Brazzaville uses WAT (UTC+1). The IANA time zone identifier is Africa/Brazzaville. ' } },
    { '@type': 'Question', name: 'Does Congo observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Congo offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Congo?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Congo is during local business hours: Monday–Friday, 9 AM–5 PM WAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Congo', item: 'https://whattime.city/congo/' }] }

export default function CongoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Congo" subtitle="WAT (UTC+1) · Brazzaville · UTC+1" />
      <CongoClockClient />
      <CountryFactsSection hubSlug="congo" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Congo & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Congo: Africa/Brazzaville (WAT (UTC+1))."
      />
    </ContentPageWrapper>
  )
}
