import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import GermanyClockClient from './GermanyClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Germany Now — CET/CEST (UTC+1/+2)',
  description:
    'What time is it in Germany right now? Germany uses CET (UTC+1) in winter and CEST (UTC+2) during Central European Summer Time. Live Berlin clock, Germany vs US/UK/Asia, and best time to call.',
  keywords: [
    'time in germany',
    'germany time now',
    'what time is it in germany',
    'germany time',
    'current time in germany',
    'germany time zone',
    'CET time zone',
    'CEST time zone',
    'central european time',
    'berlin time now',
    'munich time now',
    'germany time vs est',
    'germany time vs uk',
    'time difference germany usa',
    'germany utc offset',
    'germany time right now',
    'europe time zone germany',
  ],
  alternates: {
    canonical: 'https://whattime.city/germany/',
  },
  openGraph: {
    title: 'Current Time in Germany — CET/CEST (UTC+1/+2)',
    description:
      'Live Germany / Berlin time clock. CET is UTC+1 in winter; CEST is UTC+2 during Central European Summer Time. Check Germany time vs US, UK, and Asia.',
    type: 'website',
    url: 'https://whattime.city/germany/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Germany Now — CET/CEST',
    description:
      'Live Germany time. CET (UTC+1) in winter, CEST (UTC+2) in summer. Berlin, Munich, Hamburg, Frankfurt all share one time zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Germany right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) from late March to late October. The live clock at the top of this page shows the current time in Germany. All cities — Berlin, Munich, Hamburg, Frankfurt, Cologne, Düsseldorf — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Germany in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany uses Central European Time (CET, UTC+1) in standard time and Central European Summer Time (CEST, UTC+2) during daylight saving. The IANA time zone identifier is Europe/Berlin. Germany shares this time zone with France, Italy, Spain, Poland, Austria, Switzerland, the Netherlands, Belgium, and most of continental Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CET and CEST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET (Central European Time) is Germany\'s standard time at UTC+1, observed from late October to late March. CEST (Central European Summer Time) is UTC+2, observed from late March to late October. The switch follows the EU\'s harmonized Daylight Saving Time schedule: clocks spring forward on the last Sunday in March and fall back on the last Sunday in October.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Germany and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) and 9 hours ahead of Los Angeles (PST, UTC−8) in winter. During US Daylight Saving Time, the gap narrows to 5 hours vs New York (EDT) and 8 hours vs Los Angeles (PDT). When Germany is on CEST (UTC+2), the gap grows by 1 more hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Germany and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany is always 1 hour ahead of the UK. In winter, Germany is on CET (UTC+1) and the UK is on GMT (UTC+0). In summer, Germany is on CEST (UTC+2) and the UK is on BST (UTC+1). Because both countries switch clocks on the same schedule, the 1-hour gap is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Germany observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Germany observes Daylight Saving Time as part of the EU\'s harmonized DST schedule. Clocks advance 1 hour on the last Sunday in March (CET to CEST) and fall back on the last Sunday in October (CEST to CET). The EU voted to abolish mandatory DST in 2019, but implementation has been stalled, and Germany continues to observe it as of 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Germany and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India (IST, UTC+5:30) is 4 hours and 30 minutes ahead of Germany in winter (CET, UTC+1). During German summer time (CEST, UTC+2), India is 3 hours and 30 minutes ahead. India has no DST, so the Germany–India gap oscillates between 3.5h and 4.5h depending on whether Germany is on CET or CEST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What countries share Germany\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Germany shares the CET/CEST time zone with France, Italy, Spain, Poland, Austria, Switzerland, the Netherlands, Belgium, Luxembourg, Czech Republic, Slovakia, Hungary, Croatia, Serbia, and most of continental Europe. This large common time zone makes European business coordination straightforward.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Germany', item: 'https://whattime.city/germany/' },
  ],
}


export default function GermanyTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in Germany
      " subtitle="
        Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Central European Summer Time
      " />

      <GermanyClockClient />
      <CountryFactsSection hubSlug="germany" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in France","href":"/france/"},{"label":"Time in Netherlands","href":"/netherlands/"},{"label":"Time in Austria","href":"/austria/"},{"label":"Time in Switzerland","href":"/switzerland/"},{"label":"Time in Poland","href":"/poland/"},{"label":"Berlin time","href":"/berlin/"},{"label":"London time","href":"/london/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Germany: Europe/Berlin (CET UTC+1 / CEST UTC+2). DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
