import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BelizeClockClient from './BelizeClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Belize Now — CST (UTC-6) · Belmopan',
  description: 'What time is it in Belize right now? Live Belmopan clock, time zone info (CST (UTC-6)), best time to call, and time difference with major cities.',
  keywords: ['time in belize', 'belize time now', 'what time is it in belize', 'belmopan time', 'belize time zone'],
  alternates: { canonical: 'https://whattime.city/belize/' },
  openGraph: { title: 'Current Time in Belize — CST · Belmopan', description: 'Live Belize time. Belmopan on CST (UTC-6).', type: 'website', url: 'https://whattime.city/belize/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Belize right now?', acceptedAnswer: { '@type': 'Answer', text: 'Belize uses CST (UTC-6). Belmopan is the capital. The live clock above shows the current local time in Belize.' } },
    { '@type': 'Question', name: 'What time zone is Belmopan in?', acceptedAnswer: { '@type': 'Answer', text: 'Belmopan uses CST (UTC-6). The IANA time zone identifier is America/Belize. ' } },
    { '@type': 'Question', name: 'Does Belize observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Belize offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Belize?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Belize is during local business hours: Monday–Friday, 9 AM–5 PM CST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Belize', item: 'https://whattime.city/belize/' }] }

export default function BelizeTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Belize" subtitle="CST (UTC-6) · Belmopan · UTC-6" />
      <BelizeClockClient />
      <CountryFactsSection hubSlug="belize" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Belize & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Belize: America/Belize (CST (UTC-6))."
      />
    </ContentPageWrapper>
  )
}
