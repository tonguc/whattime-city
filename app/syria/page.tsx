import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import SyriaClockClient from './SyriaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Syria Now — EET (UTC+3) · Damascus',
  description: 'What time is it in Syria right now? Live Damascus clock, time zone info (EET (UTC+3)), best time to call, and time difference with major cities.',
  keywords: ['time in syria', 'syria time now', 'what time is it in syria', 'damascus time', 'syria time zone'],
  alternates: { canonical: 'https://whattime.city/syria/' },
  openGraph: { title: 'Current Time in Syria — EET · Damascus', description: 'Live Syria time. Damascus on EET (UTC+3).', type: 'website', url: 'https://whattime.city/syria/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Syria right now?', acceptedAnswer: { '@type': 'Answer', text: 'Syria uses EET (UTC+3). Damascus is the capital. The live clock above shows the current local time in Syria.' } },
    { '@type': 'Question', name: 'What time zone is Damascus in?', acceptedAnswer: { '@type': 'Answer', text: 'Damascus uses EET (UTC+3). The IANA time zone identifier is Asia/Damascus. ' } },
    { '@type': 'Question', name: 'Does Syria observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Syria observes Daylight Saving Time (UTC+3) typically from the last Friday in March to the last Friday in October. Outside DST, Syria uses EET (UTC+2).' } },
    { '@type': 'Question', name: 'What is the best time to call Syria?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Syria is during local business hours: Monday–Friday, 9 AM–5 PM EET. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Syria', item: 'https://whattime.city/syria/' }] }

export default function SyriaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Syria" subtitle="EET (UTC+3) · Damascus · UTC+3" />
      <SyriaClockClient />
      <CountryFactsSection hubSlug="syria" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Syria & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Syria: Asia/Damascus (EET (UTC+3))."
      />
    </ContentPageWrapper>
  )
}
