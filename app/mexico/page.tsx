import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MexicoClockClient from './MexicoClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Mexico Now — CST (UTC−6) · Mexico City, Cancún, Tijuana',
  description:
    'What time is it in Mexico right now? Mexico City uses CST (UTC−6) with no DST since 2023. Mexico has 4 time zones. Live CDMX clock, all Mexican zones, and best time to call.',
  keywords: [
    'time in mexico',
    'mexico time now',
    'what time is it in mexico',
    'mexico time',
    'current time in mexico',
    'mexico city time now',
    'mexico time zone',
    'CST mexico',
    'mexico no daylight saving',
    'mexico time vs est',
    'mexico time vs uk',
    'time difference mexico usa',
    'mexico utc offset',
    'cancun time zone',
    'mexico time right now',
    'cdmx time',
  ],
  alternates: {
    canonical: 'https://whattime.city/mexico/',
  },
  openGraph: {
    title: 'Current Time in Mexico — CST (UTC−6) · No DST since 2023',
    description:
      'Live Mexico City time. Most of Mexico abolished DST in 2023 — CDMX is now fixed at CST (UTC−6). Cancún uses EST (UTC−5). Check all Mexican time zones.',
    type: 'website',
    url: 'https://whattime.city/mexico/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Mexico Now — CST UTC−6, No DST',
    description: 'Live Mexico time. Mexico City: CST (UTC−6), no DST since 2023. Cancún: EST (UTC−5). Tijuana: PST/PDT.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Mexico right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mexico has four time zones. Mexico City (CDMX), Guadalajara, and Monterrey use CST (UTC−6), fixed year-round since Mexico abolished DST for most of the country in October 2023. Cancún uses EST (UTC−5) with no DST. Tijuana and Baja California use PST/PDT (UTC−8/−7, with DST). The live clocks above show current times across Mexico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Did Mexico abolish Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mexico abolished Daylight Saving Time for most of the country in October 2023. Mexico City, Guadalajara, Monterrey, and most Mexican states now stay on CST (UTC−6) year-round. The exceptions are states bordering the US — Baja California (Tijuana, UTC−8/−7) and Chihuahua (Ciudad Juárez, UTC−7/−6) continue to observe DST in sync with US border crossings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Mexico City in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mexico City (CDMX) uses Central Standard Time (CST), which is UTC−6, fixed year-round since October 2023. Before 2023, Mexico City used CDT (UTC−5) during summer. The IANA time zone identifier is America/Mexico_City.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Cancún in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cancún and Quintana Roo state use Eastern Standard Time (EST, UTC−5) year-round with no Daylight Saving Time. Cancún switched to EST in 2015 to better align with US Eastern Time, which is the primary market for its tourism industry. The IANA identifier is America/Cancun.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Mexico City and New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mexico City (CST, UTC−6) is 1 hour behind New York (EST, UTC−5) in winter. During US Daylight Saving Time, New York moves to EDT (UTC−4), making New York 2 hours ahead of Mexico City. Since Mexico City no longer observes DST (since 2023), the gap alternates between 1 hour (US winter) and 2 hours (US summer).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Mexico and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mexico City (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), London is 7 hours ahead of Mexico City. Since Mexico City no longer observes DST, the gap changes only when the UK switches clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Mexico have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mexico has four time zones: CST (UTC−6) covering most of the country including Mexico City; EST (UTC−5, no DST) covering Quintana Roo (Cancún); MST/MDT (UTC−7/−6) covering Sonora (Hermosillo, no DST) and parts of Chihuahua; and PST/PDT (UTC−8/−7) covering Baja California (Tijuana). After the 2023 DST abolition, most of Mexico stays fixed at CST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Mexico', item: 'https://whattime.city/mexico/' },
  ],
}


export default function MexicoTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in Mexico
      " subtitle="
        Central Standard Time (CST) · UTC−6 · No DST since October 2023 for most of Mexico
      " />

      <MexicoClockClient />
      <CountryFactsSection hubSlug="mexico" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in USA","href":"/united-states/"},{"label":"Time in Cuba","href":"/cuba/"},{"label":"Time in Guatemala","href":"/guatemala/"},{"label":"Time in Colombia","href":"/colombia/"},{"label":"Mexico City time","href":"/mexico-city/"},{"label":"New York time","href":"/new-york/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Mexico main zone: America/Mexico_City (CST, UTC−6). DST abolished October 2023.
      "
      />
    </ContentPageWrapper>
  )
}
