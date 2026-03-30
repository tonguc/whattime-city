import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ChileClockClient from './ChileClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Chile Now — CLT/CLST (UTC−4/−3)',
  description: 'What time is it in Chile right now? Chile uses CLT (UTC−4) in winter and CLST (UTC−3) in summer. DST runs Oct–Apr (Southern Hemisphere). Easter Island is 2 hours behind. Live Santiago clock.',
  keywords: ['time in chile', 'chile time now', 'what time is it in chile', 'santiago time', 'chile time zone', 'CLT CLST chile', 'chile dst', 'chile southern hemisphere dst', 'easter island time', 'valparaiso time', 'chile time vs uk', 'chile time vs usa'],
  alternates: { canonical: 'https://whattime.city/chile/' },
  openGraph: { title: 'Time in Chile Now — CLT/CLST (UTC−4/−3)', description: 'Live Chile time. Santiago on CLT (UTC−4) in winter, CLST (UTC−3) in summer. Easter Island shown separately.', type: 'website', url: 'https://whattime.city/chile/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Chile right now?', acceptedAnswer: { '@type': 'Answer', text: 'Chile uses Chile Standard Time (CLT, UTC−4) in winter and Chile Summer Time (CLST, UTC−3) during Daylight Saving Time. Because Chile is in the Southern Hemisphere, its summer falls during the Northern Hemisphere\'s winter — DST runs approximately from October to April. Easter Island is 2 hours behind mainland Chile. The live clock above shows Santiago time.' } },
    { '@type': 'Question', name: 'What time zone is Santiago in?', acceptedAnswer: { '@type': 'Answer', text: 'Santiago uses America/Santiago (CLT, UTC−4 in winter; CLST, UTC−3 in summer). Chile\'s DST schedule is reversed from the northern hemisphere: clocks spring forward in October and fall back in April. Magallanes Region (far south) stays on UTC−3 year-round without DST changes.' } },
    { '@type': 'Question', name: 'Does Chile observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Chile observes Daylight Saving Time, but since Chile is in the Southern Hemisphere, the schedule is reversed. Clocks spring forward (to CLST, UTC−3) in early October and fall back (to CLT, UTC−4) in late March or April. The exact dates are set annually by the Chilean government.' } },
    { '@type': 'Question', name: 'What time zone is Easter Island in?', acceptedAnswer: { '@type': 'Answer', text: 'Easter Island (Isla de Pascua) uses Pacific/Easter time zone — EAST (UTC−6) in standard time and EASST (UTC−5) during Daylight Saving Time. Easter Island is always 2 hours behind mainland Chile (Santiago). Despite being part of Chile, Easter Island\'s remote location in the Pacific Ocean puts it in a significantly different time zone.' } },
    { '@type': 'Question', name: 'What is the time difference between Chile and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Santiago (CLT, UTC−4) is 4 hours behind London (GMT, UTC+0) during Chile\'s winter. During Chile\'s summer (CLST, UTC−3), Santiago is 3 hours behind London. During UK Summer Time (BST, UTC+1), Santiago is 5 hours behind London (CLT) or 4 hours behind (CLST). The exact difference varies by season.' } },
    { '@type': 'Question', name: 'What is the time difference between Chile and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Santiago (CLT, UTC−4) is on the same time as New York (EST, UTC−5) during Chile\'s winter plus 1 hour. During Chile\'s summer (CLST, UTC−3), Santiago is 2 hours ahead of New York (EST). The relationship is complex because Chile observes DST in the opposite season to the US.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Chile', item: 'https://whattime.city/chile/' }] }

export default function ChileTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Chile" subtitle="Chile Time (CLT/CLST) · Santiago · UTC−4 / UTC−3 · Easter Island 2h behind" />
      <ChileClockClient />
      <CountryFactsSection hubSlug="chile" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Santiago time', href: '/santiago/' }, { label: 'Buenos Aires time', href: '/buenos-aires/' }, { label: 'Lima time', href: '/lima/' }, { label: 'Time in Argentina', href: '/argentina/' }, { label: 'Time in Peru', href: '/peru/' }, { label: 'Time in Colombia', href: '/colombia/' }, { label: 'Santiago → New York', href: '/time/santiago/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Chile & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Chile: America/Santiago (CLT UTC−4 / CLST UTC−3); Easter Island: Pacific/Easter."
      />
    </ContentPageWrapper>
  )
}
