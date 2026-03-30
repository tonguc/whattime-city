import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TurkmenistanClockClient from './TurkmenistanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Turkmenistan Now — TMT (UTC+5)',
  description: 'What time is it in Turkmenistan right now? Live Ashgabat clock, time zone info (TMT (UTC+5)), best time to call, and time difference with major cities.',
  keywords: ['time in turkmenistan', 'turkmenistan time now', 'what time is it in turkmenistan', 'ashgabat time', 'turkmenistan time zone'],
  alternates: { canonical: 'https://whattime.city/turkmenistan/' },
  openGraph: { title: 'Time in Turkmenistan Now — TMT (UTC+5)', description: 'Live Turkmenistan time. Ashgabat on TMT (UTC+5).', type: 'website', url: 'https://whattime.city/turkmenistan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Turkmenistan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Turkmenistan uses TMT (UTC+5). Ashgabat is the capital. The live clock above shows the current local time in Turkmenistan.' } },
    { '@type': 'Question', name: 'What time zone is Ashgabat in?', acceptedAnswer: { '@type': 'Answer', text: 'Ashgabat uses TMT (UTC+5). The IANA time zone identifier is Asia/Ashgabat. ' } },
    { '@type': 'Question', name: 'Does Turkmenistan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Turkmenistan does not observe Daylight Saving Time. Turkmenistan uses Turkmenistan Time (TMT, UTC+5) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Turkmenistan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Turkmenistan is during local business hours: Monday–Friday, 9 AM–5 PM TMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Turkmenistan', item: 'https://whattime.city/turkmenistan/' }] }

export default function TurkmenistanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Turkmenistan" subtitle="TMT (UTC+5) · Ashgabat · UTC+5" />
      <TurkmenistanClockClient />
      <CountryFactsSection hubSlug="turkmenistan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Turkmenistan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Turkmenistan: Asia/Ashgabat (TMT (UTC+5))."
      />
    </ContentPageWrapper>
  )
}
