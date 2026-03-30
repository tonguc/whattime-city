import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import PolandClockClient from './PolandClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Poland Now — CET/CEST (UTC+1/+2)',
  description: 'What time is it in Poland right now? Poland uses Central European Time (CET, UTC+1) in winter and CEST (UTC+2) in summer. Live Warsaw clock, Poland vs world cities, and best time to call.',
  keywords: ['time in poland', 'poland time now', 'what time is it in poland', 'warsaw time', 'poland time zone', 'CET CEST poland', 'poland utc+1', 'krakow time', 'gdansk time', 'wroclaw time', 'poland time vs uk', 'poland time vs usa'],
  alternates: { canonical: 'https://whattime.city/poland/' },
  openGraph: { title: 'Current Time in Poland — CET/CEST · Warsaw', description: 'Live Poland time. Warsaw on CET (UTC+1) in winter and CEST (UTC+2) in summer.', type: 'website', url: 'https://whattime.city/poland/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Poland right now?', acceptedAnswer: { '@type': 'Answer', text: 'Poland uses Central European Time (CET, UTC+1) in winter (standard time) and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. All Polish cities — Warsaw, Kraków, Gdańsk, Wrocław, and Poznań — are in the same time zone. The live clock above shows the current time in Poland.' } },
    { '@type': 'Question', name: 'What time zone is Warsaw in?', acceptedAnswer: { '@type': 'Answer', text: 'Warsaw uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) in summer. The IANA identifier is Europe/Warsaw. Warsaw is on the same time as Berlin, Paris, Rome, Madrid, and Amsterdam. Poland has been a member of the EU and follows the same DST schedule as other Central European countries.' } },
    { '@type': 'Question', name: 'Does Poland observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Poland observes Daylight Saving Time. Clocks spring forward 1 hour to CEST (UTC+2) on the last Sunday of March and fall back to CET (UTC+1) on the last Sunday of October. The EU has discussed abolishing DST, but as of now Poland continues to change its clocks twice a year.' } },
    { '@type': 'Question', name: 'What is the time difference between Poland and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Warsaw (CET, UTC+1) is 1 hour ahead of London (GMT, UTC+0) in winter. During both the UK\'s BST (UTC+1) and Poland\'s CEST (UTC+2) in summer, Warsaw remains 1 hour ahead of London. The 1-hour gap is constant year-round because both countries observe DST on the same schedule.' } },
    { '@type': 'Question', name: 'What is the time difference between Poland and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Warsaw (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time, New York moves to EDT (UTC−4), narrowing the gap to 5 hours. When Poland also switches to CEST (UTC+2) in late March, Warsaw is 6 hours ahead of New York again.' } },
    { '@type': 'Question', name: 'What is the time difference between Poland and Ukraine?', acceptedAnswer: { '@type': 'Answer', text: 'Warsaw (CET/CEST) is 1 hour behind Kyiv (EET/EEST, UTC+2 in winter, UTC+3 in summer). Since both countries observe DST on the same schedule (last Sunday of March / last Sunday of October), the 1-hour difference is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Poland', item: 'https://whattime.city/poland/' }] }

export default function PolandTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Poland" subtitle="Central European Time (CET/CEST) · Warsaw · UTC+1 / UTC+2" />
      <PolandClockClient />
      <CountryFactsSection hubSlug="poland" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Warsaw time', href: '/warsaw/' }, { label: 'Berlin time', href: '/berlin/' }, { label: 'London time', href: '/london/' }, { label: 'Time in Germany', href: '/germany/' }, { label: 'Time in Ukraine', href: '/ukraine/' }, { label: 'Time in Sweden', href: '/sweden/' }, { label: 'Warsaw → New York', href: '/time/warsaw/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Poland & Nearby Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Poland: Europe/Warsaw (CET UTC+1 / CEST UTC+2)."
      />
    </ContentPageWrapper>
  )
}
