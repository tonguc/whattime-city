import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ArgentinaClockClient from './ArgentinaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Argentina Now — ART (UTC−3) · Buenos Aires · No DST since 2008',
  description: 'What time is it in Argentina right now? Argentina uses Argentina Time (ART, UTC−3) year-round with no Daylight Saving Time since 2008. Live Buenos Aires clock, Argentina vs world cities, and best time to call.',
  keywords: ['time in argentina', 'argentina time now', 'what time is it in argentina', 'buenos aires time', 'argentina time zone', 'ART time zone', 'argentina utc-3', 'argentina no daylight saving', 'argentina time vs usa', 'argentina time vs spain', 'argentina time vs uk'],
  alternates: { canonical: 'https://whattime.city/argentina/' },
  openGraph: { title: 'Current Time in Argentina — ART (UTC−3) · No DST since 2008', description: 'Live Argentina time. ART (UTC−3) used year-round. No Daylight Saving Time since 2008. Buenos Aires, Córdoba, Rosario all on the same time.', type: 'website', url: 'https://whattime.city/argentina/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Argentina right now?', acceptedAnswer: { '@type': 'Answer', text: 'Argentina uses Argentina Time (ART, UTC−3) year-round. All provinces — Buenos Aires, Córdoba, Rosario, Mendoza, and Tucumán — are on the same time zone. Argentina has not observed Daylight Saving Time since 2008. The live clock above shows the current time in Argentina.' } },
    { '@type': 'Question', name: 'Does Argentina observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Argentina permanently abolished Daylight Saving Time in 2008. Argentina had used DST on and off since 1930, most recently from 2007–2008, but the inconsistent switching caused confusion. Since 2008, ART (UTC−3) is fixed year-round across all Argentine provinces.' } },
    { '@type': 'Question', name: 'What is the time difference between Argentina and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Buenos Aires (ART, UTC−3) is 2 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 1 hour. Since Argentina has no DST, the difference changes only when the US adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Argentina and Spain?', acceptedAnswer: { '@type': 'Answer', text: 'Madrid (CET, UTC+1) is 4 hours ahead of Buenos Aires (ART, UTC−3) in winter. During Spanish summer (CEST, UTC+2), the gap widens to 5 hours. Argentina has no DST, so the difference shifts only when Spain changes its clocks. Despite the time gap, Spain and Argentina share the Spanish language and maintain strong cultural and business ties.' } },
    { '@type': 'Question', name: 'What is the time difference between Argentina and Brazil?', acceptedAnswer: { '@type': 'Answer', text: 'São Paulo (BRT, UTC−3) and Buenos Aires (ART, UTC−3) are usually on the same time. Brazil observes Daylight Saving Time in its southern states (BRST, UTC−2) from November to March, which would put São Paulo 1 hour ahead of Buenos Aires during that window. However, Brazil abolished its southern-state DST in 2019, so since then Brazil and Argentina are always on the same UTC−3 offset.' } },
    { '@type': 'Question', name: 'What is the time difference between Argentina and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Buenos Aires (ART, UTC−3) is 3 hours behind London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), London moves to 4 hours ahead of Buenos Aires. Since Argentina has no DST, this difference shifts only when the UK changes its clocks in late March and late October.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Argentina', item: 'https://whattime.city/argentina/' }] }

export default function ArgentinaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Argentina" subtitle="Argentina Time (ART) · UTC−3 · No Daylight Saving Time since 2008" />
      <ArgentinaClockClient />
      <CountryFactsSection hubSlug="argentina" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Buenos Aires time', href: '/buenos-aires/' }, { label: 'Córdoba time', href: '/cordoba/' }, { label: 'Buenos Aires → Madrid', href: '/time/buenos-aires/madrid/' }, { label: 'Buenos Aires → New York', href: '/time/buenos-aires/new-york/' }, { label: 'Buenos Aires → London', href: '/time/buenos-aires/london/' }, { label: 'Buenos Aires → São Paulo', href: '/time/buenos-aires/sao-paulo/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Argentina City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Argentina: America/Argentina/Buenos_Aires (ART UTC−3, no DST since 2008)."
      />
    </ContentPageWrapper>
  )
}
