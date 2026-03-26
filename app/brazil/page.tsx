import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import BrazilClockClient from './BrazilClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Brazil Now — BRT (UTC−3) · São Paulo, Rio, Brasília',
  description:
    'What time is it in Brazil right now? Brazil uses BRT (UTC−3) — Daylight Saving Time was abolished in 2019. Live São Paulo clock, Brazil time zones, and time vs US, UK, Europe.',
  keywords: [
    'time in brazil',
    'brazil time now',
    'brazil time',
    'sao paulo time',
    'brasil time',
    'brazil time zone',
    'BRT time zone',
    'current time in brazil',
    'what time is it in brazil',
    'brazil time vs est',
    'brazil time vs uk',
    'time difference brazil usa',
    'brazil utc offset',
    'brazil current time zone 2026',
    'brazil time zones cities',
  ],
  alternates: {
    canonical: 'https://whattime.city/brazil/',
  },
  openGraph: {
    title: 'Current Time in Brazil — BRT (UTC−3)',
    description:
      'Live Brazil time clock. BRT is UTC−3 — Brazil abolished Daylight Saving Time in 2019. Check Brazil time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/brazil/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Brazil Now — BRT UTC−3',
    description:
      'Live Brazil Standard Time. BRT is UTC−3. Brazil has 4 time zones; São Paulo and most cities use BRT.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Brazil right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Brazil, including São Paulo, Rio de Janeiro, and Brasília, uses Brasília Time (BRT), which is UTC−3. The live clock at the top of this page shows the exact current time in Brazil.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Brazil have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brazil has four official time zones: BRT (UTC−3) covering most states including São Paulo, Rio, and Brasília; AMT (UTC−4) covering Amazon states like Manaus and Mato Grosso; ACT (UTC−5) covering the state of Acre and southwest Amazonas; and FNT (UTC−2) used only by the Fernando de Noronha island territory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Brazil observe Daylight Saving Time (DST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Brazil abolished Daylight Saving Time in 2019 under a decree by President Bolsonaro. Before that, southern states (including São Paulo and Rio) used to advance clocks by one hour during the Southern Hemisphere summer (October–February). Since 2019, Brazil\'s time zones are fixed year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is São Paulo\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São Paulo uses Brasília Time (BRT), which is UTC−3. The IANA time zone identifier is America/Sao_Paulo. São Paulo shares this time zone with Rio de Janeiro, Belo Horizonte, Brasília, Fortaleza, Salvador, and most other major Brazilian cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Brazil and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São Paulo (BRT, UTC−3) is 2 hours ahead of New York (EST, UTC−5) and 5 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time (EDT, UTC−4), São Paulo is 1 hour ahead of New York. During PDT, São Paulo is 4 hours ahead of Los Angeles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Brazil and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São Paulo (BRT, UTC−3) is 3 hours behind London (GMT, UTC+0). During British Summer Time (BST, UTC+1), São Paulo is 4 hours behind London. When it is 12:00 PM in São Paulo, it is 3:00 PM in London (winter) or 4:00 PM (summer).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Brazil from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From US Eastern time (EST), the best window to reach Brazil during business hours is 7:00 AM to 12:00 PM EST, which corresponds to 9:00 AM to 2:00 PM BRT in São Paulo. From US Pacific time (PST), try 4:00 AM to 9:00 AM PST for the same São Paulo morning window.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UTC offset is Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brazil\'s main time zone is BRT (Brasília Time) at UTC−3, covering São Paulo, Rio de Janeiro, Brasília, and most of the country. The Amazon region uses UTC−4, the state of Acre uses UTC−5, and Fernando de Noronha island uses UTC−2.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Brazil', item: 'https://whattime.city/brazil/' },
  ],
}


export default function BrazilTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HubPageHeader title="
        Current Time in Brazil
      " subtitle="
        Brasília Time (BRT) · UTC−3 · No Daylight Saving Time since 2019
      " />

      <BrazilClockClient />
      <CountryFactsSection hubSlug="brazil" />

      {/* BRT Explained */}
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Brazil main zone: America/Sao_Paulo (BRT, UTC−3). DST abolished April 2019.
      "
      />
    </ContentPageWrapper>
  )
}
