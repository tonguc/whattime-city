import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AfghanistanClockClient from './AfghanistanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Afghanistan Now — AFT (UTC+4:30) · Kabul',
  description: 'What time is it in Afghanistan right now? Live Kabul clock, time zone info (AFT (UTC+4:30)), best time to call, and time difference with major cities.',
  keywords: ['time in afghanistan', 'afghanistan time now', 'what time is it in afghanistan', 'kabul time', 'afghanistan time zone'],
  alternates: { canonical: 'https://whattime.city/afghanistan/' },
  openGraph: { title: 'Current Time in Afghanistan — AFT · Kabul', description: 'Live Afghanistan time. Kabul on AFT (UTC+4:30).', type: 'website', url: 'https://whattime.city/afghanistan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Afghanistan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Afghanistan uses AFT (UTC+4:30). Kabul is the capital. The live clock above shows the current local time in Afghanistan.' } },
    { '@type': 'Question', name: 'What time zone is Kabul in?', acceptedAnswer: { '@type': 'Answer', text: 'Kabul uses AFT (UTC+4:30). The IANA time zone identifier is Asia/Kabul. ' } },
    { '@type': 'Question', name: 'Does Afghanistan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Afghanistan offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Afghanistan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Afghanistan is during local business hours: Monday–Friday, 9 AM–5 PM AFT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Afghanistan', item: 'https://whattime.city/afghanistan/' }] }

export default function AfghanistanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Afghanistan" subtitle="AFT (UTC+4:30) · Kabul · UTC+4:30" />
      <AfghanistanClockClient />
      <CountryFactsSection hubSlug="afghanistan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Afghanistan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Afghanistan: Asia/Kabul (AFT (UTC+4:30))."
      />
    </ContentPageWrapper>
  )
}
