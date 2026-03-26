import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ElSalvadorClockClient from './ElSalvadorClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in El Salvador Now — CST (UTC-6) · San Salvador',
  description: 'What time is it in El Salvador right now? Live San Salvador clock, time zone info (CST (UTC-6)), best time to call, and time difference with major cities.',
  keywords: ['time in el salvador', 'el salvador time now', 'what time is it in el salvador', 'san salvador time', 'el salvador time zone'],
  alternates: { canonical: 'https://whattime.city/el-salvador/' },
  openGraph: { title: 'Current Time in El Salvador — CST · San Salvador', description: 'Live El Salvador time. San Salvador on CST (UTC-6).', type: 'website', url: 'https://whattime.city/el-salvador/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in El Salvador right now?', acceptedAnswer: { '@type': 'Answer', text: 'El Salvador uses CST (UTC-6). San Salvador is the capital. The live clock above shows the current local time in El Salvador.' } },
    { '@type': 'Question', name: 'What time zone is San Salvador in?', acceptedAnswer: { '@type': 'Answer', text: 'San Salvador uses CST (UTC-6). The IANA time zone identifier is America/El_Salvador. ' } },
    { '@type': 'Question', name: 'Does El Salvador observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current El Salvador offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call El Salvador?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call El Salvador is during local business hours: Monday–Friday, 9 AM–5 PM CST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in El Salvador', item: 'https://whattime.city/el-salvador/' }] }

export default function ElSalvadorTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in El Salvador" subtitle="CST (UTC-6) · San Salvador · UTC-6" />
      <ElSalvadorClockClient />
      <CountryFactsSection hubSlug="el-salvador" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="El Salvador & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. El Salvador: America/El_Salvador (CST (UTC-6))."
      />
    </ContentPageWrapper>
  )
}
