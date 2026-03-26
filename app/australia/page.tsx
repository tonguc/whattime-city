import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import AustraliaClockClient from './AustraliaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Australia Now — AEST/AEDT · Sydney, Melbourne, Brisbane, Perth',
  description:
    'What time is it in Australia right now? Australia has 5 time zones — AEST (UTC+10), ACST (UTC+9:30), AWST (UTC+8), and more. Live Sydney clock, all Australian time zones, and best time to call.',
  keywords: [
    'time in australia',
    'australia time now',
    'what time is it in australia',
    'australia time',
    'current time in australia',
    'australia time zone',
    'AEST time zone',
    'AEDT time zone',
    'sydney time now',
    'melbourne time now',
    'brisbane time now',
    'perth time now',
    'australia time vs est',
    'australia time vs uk',
    'time difference australia usa',
    'australia utc offset',
    'australian eastern standard time',
    'australian time zones',
  ],
  alternates: {
    canonical: 'https://whattime.city/australia/',
  },
  openGraph: {
    title: 'Current Time in Australia — AEST/AEDT & All Time Zones',
    description:
      'Live Australia time. Sydney uses AEST (UTC+10) or AEDT (UTC+11). Australia spans 5 time zones from Perth (UTC+8) to Sydney (UTC+10/+11). Check all Australian city times.',
    type: 'website',
    url: 'https://whattime.city/australia/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Australia Now — AEST/AEDT',
    description:
      'Live Australia time across all time zones. Sydney AEST/AEDT, Brisbane AEST (no DST), Perth AWST, Adelaide ACST/ACDT, Darwin ACST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Australia right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australia has multiple time zones. Sydney and Melbourne use AEST (UTC+10) in winter and AEDT (UTC+11) during Daylight Saving Time. Brisbane is always AEST (UTC+10) with no DST. Perth uses AWST (UTC+8). Adelaide uses ACST (UTC+9:30) or ACDT (UTC+10:30). The live clock at the top shows the current Sydney time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Australia have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australia has five main time zones: AWST (UTC+8) used by Western Australia (Perth); ACWST (UTC+8:45) used by a small region in WA; ACST (UTC+9:30) used by South Australia (Adelaide) and Northern Territory (Darwin); AEST (UTC+10) used by Queensland (Brisbane), NSW (Sydney), Victoria (Melbourne), and Tasmania; and Lord Howe Island at UTC+10:30/+11. Not all of these observe Daylight Saving Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Australia observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only some Australian states observe Daylight Saving Time. NSW, Victoria, South Australia, Tasmania, and the ACT switch to DST during the Southern Hemisphere summer (roughly October through April). Queensland, Western Australia, and the Northern Territory do NOT observe DST and remain on their standard time year-round. This creates varying time gaps between Australian cities in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Sydney and Perth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perth (AWST, UTC+8) is 2 hours behind Sydney during Australian Eastern Standard Time (AEST, UTC+10). During Sydney\'s Daylight Saving Time (AEDT, UTC+11), Perth is 3 hours behind Sydney. Perth does not observe DST, so the gap changes seasonally: 2 hours in winter, 3 hours in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Sydney and Brisbane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brisbane (AEST, UTC+10) and Sydney (AEST, UTC+10) are on the same time in winter. However, Sydney observes Daylight Saving Time (AEDT, UTC+11) while Brisbane does not. During DST (October–April), Sydney is 1 hour ahead of Brisbane. This is why Sydney–Brisbane time comparisons confuse many Australians.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Australia and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sydney (AEST, UTC+10) is 15 hours ahead of New York (EST, UTC−5) and 18 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time, these gaps shrink by 1 hour. During Sydney\'s own DST (AEDT, UTC+11), the gap increases by another hour. The exact offset changes four times per year as each region switches DST independently.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Australia and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sydney (AEST, UTC+10) is 10 hours ahead of London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), the gap narrows to 9 hours. When Sydney is also on AEDT (UTC+11), the gap is 11 hours vs GMT and 10 hours vs BST. The UK and Australia observe DST in opposite seasons (Northern vs Southern Hemisphere), which means the gap shifts frequently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Brisbane have a different time than Sydney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brisbane (Queensland) does not observe Daylight Saving Time, while Sydney (NSW) does. In winter, both are on AEST (UTC+10) and show the same time. From October to April, Sydney advances its clocks to AEDT (UTC+11), making Sydney 1 hour ahead of Brisbane. Queensland last trialled DST in 1992 and voted against it in a 1992 referendum, partly due to objections from farming communities in rural Queensland.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Australia', item: 'https://whattime.city/australia/' },
  ],
}


export default function AustraliaTimePage() {
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
        Current Time in Australia
      " subtitle="
        Australian Eastern Standard Time (AEST) · UTC+10 · Multiple time zones across the country
      " />

      <AustraliaClockClient />
      <CountryFactsSection hubSlug="australia" />

      {/* Australia Time Zones Explained */}
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database.
        Australia main zone: Australia/Sydney (AEST UTC+10 / AEDT UTC+11). DST in NSW, VIC, SA, TAS, ACT.
      "
      />
    </ContentPageWrapper>
  )
}
