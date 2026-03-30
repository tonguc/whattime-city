import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import KazakhstanClockClient from './KazakhstanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Kazakhstan Now — AQTT (UTC+5)',
  description: 'What time is it in Kazakhstan right now? Live Astana clock, time zone info (AQTT (UTC+5)), best time to call, and time difference with major cities.',
  keywords: ['time in kazakhstan', 'kazakhstan time now', 'what time is it in kazakhstan', 'astana time', 'kazakhstan time zone'],
  alternates: { canonical: 'https://whattime.city/kazakhstan/' },
  openGraph: { title: 'Current Time in Kazakhstan — AQTT · Astana', description: 'Live Kazakhstan time. Astana on AQTT (UTC+5).', type: 'website', url: 'https://whattime.city/kazakhstan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kazakhstan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Kazakhstan uses AQTT (UTC+5). Astana is the capital. The live clock above shows the current local time in Kazakhstan.' } },
    { '@type': 'Question', name: 'What time zone is Astana in?', acceptedAnswer: { '@type': 'Answer', text: 'Astana uses AQTT (UTC+5). The IANA time zone identifier is Asia/Almaty. Kazakhstan spans multiple time zones: AQTT (UTC+5), ALMT (UTC+6).' } },
    { '@type': 'Question', name: 'Does Kazakhstan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Kazakhstan does not observe Daylight Saving Time. Kazakhstan uses Alma-Ata Time (ALMT, UTC+6) year-round.' } },
    { '@type': 'Question', name: 'What is the best time to call Kazakhstan?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Kazakhstan is during local business hours: Monday–Friday, 9 AM–5 PM AQTT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kazakhstan', item: 'https://whattime.city/kazakhstan/' }] }

export default function KazakhstanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Kazakhstan" subtitle="AQTT (UTC+5) · Astana · UTC+5" />
      <KazakhstanClockClient />
      <CountryFactsSection hubSlug="kazakhstan" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Dubai time","href":"/dubai/"},{"label":"Tokyo time","href":"/tokyo/"},{"label":"Singapore time","href":"/singapore/"},{"label":"Time in Japan","href":"/japan/"},{"label":"Time in China","href":"/china/"},{"label":"Time in India","href":"/india/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Kazakhstan & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Kazakhstan: Asia/Almaty (AQTT (UTC+5))."
      />
    </ContentPageWrapper>
  )
}
