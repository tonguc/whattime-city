import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IsraelClockClient from './IsraelClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Israel Now — IST (UTC+2) · Jerusalem',
  description: 'What time is it in Israel right now? Live Jerusalem clock, time zone info (IST (UTC+2)), best time to call, and time difference with major cities.',
  keywords: ['time in israel', 'israel time now', 'what time is it in israel', 'jerusalem time', 'israel time zone'],
  alternates: { canonical: 'https://whattime.city/israel/' },
  openGraph: { title: 'Current Time in Israel — IST · Jerusalem', description: 'Live Israel time. Jerusalem on IST (UTC+2).', type: 'website', url: 'https://whattime.city/israel/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Israel right now?', acceptedAnswer: { '@type': 'Answer', text: 'Israel uses IST (UTC+2). Jerusalem is the capital. The live clock above shows the current local time in Israel.' } },
    { '@type': 'Question', name: 'What time zone is Jerusalem in?', acceptedAnswer: { '@type': 'Answer', text: 'Jerusalem uses IST (UTC+2). The IANA time zone identifier is Asia/Jerusalem. Israel spans multiple time zones: IST (UTC+2), IDT (UTC+3).' } },
    { '@type': 'Question', name: 'Does Israel observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Israel offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Israel?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Israel is during local business hours: Monday–Friday, 9 AM–5 PM IST. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Israel', item: 'https://whattime.city/israel/' }] }

export default function IsraelTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Israel" subtitle="IST (UTC+2) · Jerusalem · UTC+2" />
      <IsraelClockClient />
      <CountryFactsSection hubSlug="israel" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Israel & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Israel: Asia/Jerusalem (IST (UTC+2))."
      />
    </ContentPageWrapper>
  )
}
