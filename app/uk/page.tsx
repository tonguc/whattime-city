import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import UKClockClient from './UKClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in the UK Now — GMT/BST (UTC+0/+1)',
  description:
    'What time is it in the UK right now? The UK uses GMT (UTC+0) in winter and BST (UTC+1) during British Summer Time. Live London clock, UK vs US/Europe/Asia, and best time to call.',
  keywords: [
    'time in the uk',
    'uk time now',
    'what time is it in the uk',
    'uk time',
    'current time in uk',
    'uk time zone',
    'GMT time zone',
    'BST time zone',
    'british summer time',
    'greenwich mean time',
    'london time now',
    'uk time vs est',
    'uk time vs pst',
    'time difference uk usa',
    'uk gmt utc offset',
    'uk time right now',
    'england time now',
    'britain time zone',
  ],
  alternates: {
    canonical: 'https://whattime.city/uk/',
  },
  openGraph: {
    title: 'Current Time in the UK — GMT/BST (UTC+0/+1)',
    description:
      'Live UK / London time clock. GMT is UTC+0 in winter; BST is UTC+1 during British Summer Time (late March–late October). Check UK time vs US, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/uk/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in the UK Now — GMT/BST',
    description:
      'Live UK time. GMT (UTC+0) in winter, BST (UTC+1) in summer. London, Manchester, Birmingham, Edinburgh all share the same time zone.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in the UK right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK uses Greenwich Mean Time (GMT, UTC+0) in winter and British Summer Time (BST, UTC+1) from late March to late October. The live clock at the top of this page shows the exact current time in the UK. All major UK cities — London, Manchester, Birmingham, Leeds, Glasgow, and Edinburgh — are on the same time zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is the UK in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK uses Greenwich Mean Time (GMT, UTC+0) in winter and British Summer Time (BST, UTC+1) during summer. The IANA time zone identifier is Europe/London. Note: GMT and UTC are different standards but have the same numeric offset (UTC+0). The UK switches to BST on the last Sunday in March and returns to GMT on the last Sunday in October.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between GMT and BST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GMT (Greenwich Mean Time) is the UK\'s standard time in winter, at UTC+0. BST (British Summer Time) is the UK\'s daylight saving time in summer, at UTC+1 — one hour ahead of GMT. The switch happens on the last Sunday in March (clocks go forward) and the last Sunday in October (clocks go back). The phrase "spring forward, fall back" describes this change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the UK and New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK (GMT/BST) is typically 5 hours ahead of New York (EST/EDT). In winter (GMT vs EST), London is 5 hours ahead. In summer (BST vs EDT), London is still 5 hours ahead, because both regions switch clocks at different but roughly offsetting times. There are a few weeks each spring and autumn when the gap is temporarily 4 or 6 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the UK and Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK is typically 8 hours ahead of Los Angeles. In winter (GMT vs PST), London is 8 hours ahead. In summer (BST vs PDT), London is 8 hours ahead. As with New York, there are brief windows in spring and autumn where the gap is 7 or 9 hours while only one region has switched clocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the UK observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The UK observes Daylight Saving Time under the name British Summer Time (BST). Clocks advance by 1 hour on the last Sunday in March and fall back on the last Sunday in October. There have been parliamentary debates about abolishing this practice, but as of 2026, the UK continues to observe BST.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all UK cities have the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. England, Scotland, Wales, and Northern Ireland all use the same time zone (Europe/London). London, Manchester, Birmingham, Glasgow, Edinburgh, Cardiff, and Belfast are all on GMT in winter and BST in summer. There are no time zone boundaries within the United Kingdom.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the UK and India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India (IST, UTC+5:30) is 5 hours and 30 minutes ahead of the UK in winter (GMT). During British Summer Time (BST, UTC+1), India is 4 hours and 30 minutes ahead. IST never changes, so the UK–India gap oscillates between 4.5h and 5.5h depending on whether the UK is on GMT or BST.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in the UK', item: 'https://whattime.city/uk/' },
  ],
}


export default function UKTimePage() {
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
        Current Time in the UK
      " subtitle="
        Greenwich Mean Time (GMT) · UTC+0 in winter · BST (UTC+1) during British Summer Time
      " />

      <UKClockClient />
      <CountryFactsSection hubSlug="uk" />

      {/* GMT/BST Explained */}
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in France","href":"/france/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time in Spain","href":"/spain/"},{"label":"Time in Ireland","href":"/ireland/"},{"label":"London time","href":"/london/"},{"label":"New York time","href":"/new-york/"},{"label":"Time in Australia","href":"/australia/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        UK: Europe/London (GMT UTC+0 / BST UTC+1). DST observed.
      "
      />
    </ContentPageWrapper>
  )
}
