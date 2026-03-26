import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import LiberiaClockClient from './LiberiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Liberia Now — GMT (UTC+0) · Monrovia',
  description: 'What time is it in Liberia right now? Live Monrovia clock, time zone info (GMT (UTC+0)), best time to call, and time difference with major cities.',
  keywords: ['time in liberia', 'liberia time now', 'what time is it in liberia', 'monrovia time', 'liberia time zone'],
  alternates: { canonical: 'https://whattime.city/liberia/' },
  openGraph: { title: 'Current Time in Liberia — GMT · Monrovia', description: 'Live Liberia time. Monrovia on GMT (UTC+0).', type: 'website', url: 'https://whattime.city/liberia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Liberia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Liberia uses GMT (UTC+0). Monrovia is the capital. The live clock above shows the current local time in Liberia.' } },
    { '@type': 'Question', name: 'What time zone is Monrovia in?', acceptedAnswer: { '@type': 'Answer', text: 'Monrovia uses GMT (UTC+0). The IANA time zone identifier is Africa/Monrovia. ' } },
    { '@type': 'Question', name: 'Does Liberia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Check the live clock above for current offset. Many countries observe Daylight Saving Time seasonally — verify the current Liberia offset in the time difference table.' } },
    { '@type': 'Question', name: 'What is the best time to call Liberia?', acceptedAnswer: { '@type': 'Answer', text: 'The best time to call Liberia is during local business hours: Monday–Friday, 9 AM–5 PM GMT. Check the Best Time to Call table on this page for your time zone.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Liberia', item: 'https://whattime.city/liberia/' }] }

export default function LiberiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Liberia" subtitle="GMT (UTC+0) · Monrovia · UTC+0" />
      <LiberiaClockClient />
      <CountryFactsSection hubSlug="liberia" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Cairo time","href":"/cairo/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Time in South Africa","href":"/south-africa/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Liberia & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Liberia: Africa/Monrovia (GMT (UTC+0))."
      />
    </ContentPageWrapper>
  )
}
