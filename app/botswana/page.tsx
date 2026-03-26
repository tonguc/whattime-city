import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BotswanaClockClient from './BotswanaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Botswana Now — CAT (UTC+2) · Gaborone',
  description: 'What time is it in Botswana right now? Live Gaborone clock, time zone info (CAT (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in botswana', 'botswana time now', 'what time is it in botswana', 'gaborone time', 'botswana time zone'],
  alternates: { canonical: 'https://whattime.city/botswana/' },
  openGraph: { title: 'Current Time in Botswana — CAT · Gaborone', description: 'Live Botswana time. Gaborone on CAT (UTC+2).', type: 'website', url: 'https://whattime.city/botswana/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Botswana right now?', acceptedAnswer: { '@type': 'Answer', text: 'Botswana uses CAT (UTC+2). Gaborone is the capital. The live clock above shows the current local time in Botswana.' } },
    { '@type': 'Question', name: 'What time zone is Gaborone in?', acceptedAnswer: { '@type': 'Answer', text: 'Gaborone uses CAT (UTC+2). The IANA time zone identifier is Africa/Gaborone. ' } },
    { '@type': 'Question', name: 'Does Botswana observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Botswana offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Botswana?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Botswana is during local business hours: Monday–Friday, 9 AM–5 PM CAT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Botswana', item: 'https://whattime.city/botswana/' }] }

export default function BotswanaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Botswana" subtitle="CAT (UTC+2) · Gaborone · UTC+2" />
      <BotswanaClockClient />
      <CountryFactsSection hubSlug="botswana" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Botswana & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Botswana: Africa/Gaborone (CAT (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
