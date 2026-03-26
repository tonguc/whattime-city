import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CanadaClockClient from './CanadaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Canada Now — All Time Zones · Toronto, Vancouver, Montreal, Calgary',
  description:
    'What time is it in Canada right now? Canada spans 6 time zones from Newfoundland (NST, UTC−3:30) to Pacific (PST, UTC−8). Live Toronto clock, all Canadian time zones, and best time to call.',
  keywords: [
    'time in canada',
    'canada time now',
    'what time is it in canada',
    'canada time',
    'current time in canada',
    'canada time zone',
    'EST canada',
    'toronto time now',
    'vancouver time now',
    'montreal time now',
    'calgary time now',
    'canada time vs uk',
    'time difference canada usa',
    'canada utc offset',
    'canadian time zones',
    'canada time right now',
    'NST newfoundland time',
  ],
  alternates: {
    canonical: 'https://whattime.city/canada/',
  },
  openGraph: {
    title: 'Current Time in Canada — All 6 Time Zones',
    description:
      'Live Canada time. Toronto (EST/EDT), Vancouver (PST/PDT), Montreal (EST/EDT), Calgary (MST/MDT), Halifax (AST/ADT), St. John\'s (NST/NDT). All Canadian time zones live.',
    type: 'website',
    url: 'https://whattime.city/canada/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Canada Now — All Time Zones',
    description:
      'Live Canada time across all 6 time zones. Toronto EST/EDT, Vancouver PST/PDT, Montreal EST, Calgary MST, Halifax AST, St. John\'s NST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Canada right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canada spans six time zones. Toronto and Montreal use EST (UTC−5) or EDT (UTC−4). Vancouver uses PST (UTC−8) or PDT (UTC−7). Calgary uses MST (UTC−7) or MDT (UTC−6). Halifax uses AST (UTC−4) or ADT (UTC−3). St. John\'s uses the unique NST (UTC−3:30) or NDT (UTC−2:30). The live clocks above show all current Canadian times.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Canada have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canada officially observes six time zones: Pacific (PST/PDT, UTC−8/−7), Mountain (MST/MDT, UTC−7/−6), Central (CST/CDT, UTC−6/−5), Eastern (EST/EDT, UTC−5/−4), Atlantic (AST/ADT, UTC−4/−3), and Newfoundland (NST/NDT, UTC−3:30/−2:30). Newfoundland\'s half-hour offset is unique among North American time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Canada observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Canada observes Daylight Saving Time. Exceptions include most of Saskatchewan (which stays on CST/UTC−6 year-round), some parts of British Columbia, and some First Nations communities. The DST switch follows the same schedule as the US: second Sunday in March (spring forward) and first Sunday in November (fall back).',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Toronto in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toronto is in the Eastern Time Zone (ET). In winter, Toronto uses Eastern Standard Time (EST, UTC−5). During Daylight Saving Time (March–November), Toronto uses Eastern Daylight Time (EDT, UTC−4). Toronto shares this time zone with Montreal, Ottawa, and New York City.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Toronto and Vancouver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vancouver (Pacific Time) is always 3 hours behind Toronto (Eastern Time). When it is 12:00 PM (noon) in Toronto, it is 9:00 AM in Vancouver. Both cities switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Canada and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toronto (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During British Summer Time (BST), Toronto is 5 hours behind (because both Canada and the UK also switch DST, roughly cancelling the change). Vancouver (PST, UTC−8) is 8 hours behind London in winter. There are brief transition windows each spring and autumn when the gap shifts by 1 hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Newfoundland have a half-hour time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Newfoundland Standard Time (NST) is UTC−3:30, a 30-minute offset that makes it unique in North America. This unusual offset dates to the 19th century when Newfoundland set its clocks by the mean solar time of its capital, St. John\'s. When Newfoundland joined Canada in 1949, it retained its distinctive time zone rather than aligning with the Atlantic (UTC−4) or Eastern (UTC−5) zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Saskatchewan in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Saskatchewan uses Central Standard Time (CST, UTC−6) year-round and does not observe Daylight Saving Time. This means Saskatchewan is on the same time as Mountain Daylight Time (MDT, UTC−6) in summer — effectively aligned with Alberta in summer and Manitoba in winter.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Canada', item: 'https://whattime.city/canada/' },
  ],
}


export default function CanadaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HubPageHeader title="
        Current Time in Canada
      " subtitle="
        6 Time Zones · Eastern (UTC−5) · Pacific (UTC−8) · Newfoundland (UTC−3:30)
      " />

      <CanadaClockClient />
      <CountryFactsSection hubSlug="canada" />

            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Canada main zones: America/Toronto · America/Vancouver · America/St_Johns and more.
      "
      />
    </ContentPageWrapper>
  )
}
