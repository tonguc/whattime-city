import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import FranceClockClient from './FranceClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in France Now — CET/CEST (UTC+1/+2)',
  description:
    'What time is it in France right now? France uses CET (UTC+1) in winter and CEST (UTC+2) during Central European Summer Time. Live Paris clock, France vs US/UK/Asia, and best time to call.',
  keywords: [
    'time in france',
    'france time now',
    'what time is it in france',
    'france time',
    'current time in france',
    'paris time now',
    'france time zone',
    'CET france',
    'france time vs est',
    'france time vs uk',
    'time difference france usa',
    'france utc offset',
    'france time right now',
    'paris time zone',
    'france central european time',
  ],
  alternates: {
    canonical: 'https://whattime.city/france/',
  },
  openGraph: {
    title: 'Current Time in France — CET/CEST (UTC+1/+2)',
    description:
      'Live France / Paris time clock. CET is UTC+1 in winter; CEST is UTC+2 during Central European Summer Time. Check France time vs US, UK, and Asia.',
    type: 'website',
    url: 'https://whattime.city/france/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in France Now — CET/CEST',
    description: 'Live France time. CET (UTC+1) in winter, CEST (UTC+2) in summer. Paris, Lyon, Marseille all on the same zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in France right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) from late March to late October. The live clock at the top of this page shows the current time in France. All cities — Paris, Lyon, Marseille, Bordeaux, Toulouse, Nantes — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is France in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France uses CET (Central European Time, UTC+1) in winter and CEST (Central European Summer Time, UTC+2) in summer. The IANA identifier is Europe/Paris. France shares this time zone with Germany, Italy, Spain, Belgium, the Netherlands, and most of continental Europe. Note: geographically, France spans UTC+0 (and even UTC−10 including overseas territories), but metropolitan France uses CET/CEST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between France and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) and 9 hours ahead of Los Angeles (PST, UTC−8) in winter. During US Daylight Saving Time, the gap narrows to 5 hours vs New York (EDT) and 8 hours vs Los Angeles (PDT). When France is on CEST (UTC+2), add 1 more hour to each difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between France and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France is always 1 hour ahead of the UK. In winter, France uses CET (UTC+1) and the UK uses GMT (UTC+0). In summer, France uses CEST (UTC+2) and the UK uses BST (UTC+1). Both switch clocks on the same schedule, so the 1-hour gap is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does France observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. France switches to CEST (UTC+2) on the last Sunday in March and returns to CET (UTC+1) on the last Sunday in October, following the EU\'s harmonized DST schedule. The EU voted in 2019 to abolish mandatory DST, but the measure has been delayed indefinitely in the European Parliament.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone are France\'s overseas territories in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'France has overseas territories across multiple time zones. French Guiana (UTC−3), Martinique and Guadeloupe (UTC−4), Réunion (UTC+4), New Caledonia (UTC+11), French Polynesia/Tahiti (UTC−10), and Saint Pierre & Miquelon (UTC−3:30). Metropolitan France (the European part) uses CET/CEST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in France', item: 'https://whattime.city/france/' },
  ],
}


export default function FranceTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in France
      " subtitle="
        Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Central European Summer Time
      " />

      <FranceClockClient />
      <CountryFactsSection hubSlug="france" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Germany","href":"/germany/"},{"label":"Time in Spain","href":"/spain/"},{"label":"Time in Italy","href":"/italy/"},{"label":"Time in UK","href":"/uk/"},{"label":"Time in Belgium","href":"/belgium/"},{"label":"Paris time","href":"/paris/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        France: Europe/Paris (CET UTC+1 / CEST UTC+2). DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
