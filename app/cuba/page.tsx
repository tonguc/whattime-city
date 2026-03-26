import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CubaClockClient from './CubaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Cuba Now — CST/CDT (UTC−5/−4) · Havana · Caribbean DST',
  description: 'What time is it in Cuba right now? Cuba uses Cuba Standard Time (CST, UTC−5) in winter and Cuba Daylight Time (CDT, UTC−4) in summer. Live Havana clock and best time to call.',
  keywords: ['time in cuba', 'cuba time now', 'what time is it in cuba', 'havana time', 'cuba time zone', 'CST CDT cuba', 'cuba utc-5', 'santiago de cuba time', 'cuba dst', 'cuba time vs usa', 'cuba time vs uk', 'cuba time vs miami'],
  alternates: { canonical: 'https://whattime.city/cuba/' },
  openGraph: { title: 'Current Time in Cuba — CST/CDT · Havana', description: 'Live Cuba time. Havana on Cuba Standard Time (UTC−5) in winter, Cuba Daylight Time (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/cuba/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Cuba right now?', acceptedAnswer: { '@type': 'Answer', text: 'Cuba uses Cuba Standard Time (CST, UTC−5) in winter and Cuba Daylight Time (CDT, UTC−4) during Daylight Saving Time. Havana, Santiago de Cuba, Camagüey, and all Cuban cities are in the same time zone. The live clock above shows the current time in Cuba.' } },
    { '@type': 'Question', name: 'What time zone is Havana in?', acceptedAnswer: { '@type': 'Answer', text: 'Havana uses Cuba Standard Time (CST, UTC−5) in winter and CDT (UTC−4) in summer. The IANA identifier is America/Havana. Note: Cuba\'s CST abbreviation (Cuba Standard Time) is different from the US Central Standard Time (also CST). Cuba\'s time is the same as US Eastern Time (EST/EDT) for most of the year.' } },
    { '@type': 'Question', name: 'Does Cuba observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cuba observes Daylight Saving Time. Clocks spring forward 1 hour in mid-March and fall back 1 hour in late October. Cuba\'s DST schedule is similar to, but not always identical to, the US schedule, so for brief periods in spring and fall there can be a temporary 1-hour difference between Havana and Miami.' } },
    { '@type': 'Question', name: 'What is the time difference between Cuba and the USA (Miami)?', acceptedAnswer: { '@type': 'Answer', text: 'For most of the year, Havana (CST/CDT) and Miami (EST/EDT) are on the same time. However, during the brief transition periods when Cuba and the US switch DST on different dates, there can be a 1-hour difference. Generally, plan for Havana and Miami to be on the same time.' } },
    { '@type': 'Question', name: 'What is the time difference between Cuba and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Havana (CST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During Cuba\'s summer time (CDT, UTC−4), Havana is 4 hours behind London (GMT). When both the UK and Cuba observe DST, Havana (CDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Cuba and Colombia?', acceptedAnswer: { '@type': 'Answer', text: 'Havana (CST, UTC−5) is on the same time as Bogotá (COT, UTC−5) in winter. During Cuba\'s summer time (CDT, UTC−4), Havana is 1 hour ahead of Bogotá, since Colombia does not observe DST. The relationship shifts seasonally.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Cuba', item: 'https://whattime.city/cuba/' }] }

export default function CubaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Cuba" subtitle="Cuba Standard Time (CST/CDT) · Havana · UTC−5 / UTC−4" />
      <CubaClockClient />
      <CountryFactsSection hubSlug="cuba" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Miami time', href: '/miami/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Mexico City time', href: '/mexico-city/' }, { label: 'Time in Colombia', href: '/colombia/' }, { label: 'Time in Venezuela', href: '/venezuela/' }, { label: 'Time in Mexico', href: '/mexico/' }, { label: 'Time in Florida', href: '/florida/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Cuba & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Cuba: America/Havana (CST UTC−5 / CDT UTC−4)."
      />
    </ContentPageWrapper>
  )
}
