import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import WashingtonStateClockClient from './WashingtonStateClockClient'

export const metadata: Metadata = {
  title: 'Time in Washington State Now — PST/PDT',
  description:
    'What time is it in Washington State right now? Washington uses Pacific Standard Time (PST, UTC−8) in winter and Pacific Daylight Time (PDT, UTC−7) during Daylight Saving Time. Live Seattle clock, WA vs world cities, and best time to call.',
  keywords: [
    'time in washington state', 'washington state time now', 'what time is it in washington state',
    'seattle time', 'washington time zone', 'PST washington', 'PDT washington',
    'pacific time washington', 'current time seattle', 'washington utc-8',
    'washington time vs new york', 'washington time vs chicago', 'washington time vs london',
    'spokane time', 'tacoma time', 'bellevue time', 'pacific standard time',
  ],
  alternates: { canonical: 'https://whattime.city/washington-state/' },
  openGraph: {
    title: 'Current Time in Washington State — PST/PDT (UTC−8/−7)',
    description: 'Live Washington State time. PST (UTC−8) in winter, PDT (UTC−7) during Daylight Saving Time. Seattle, Spokane, Tacoma, Bellevue all on Pacific Time.',
    type: 'website', url: 'https://whattime.city/washington-state/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Washington State right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington State uses Pacific Time — PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. All cities in Washington — Seattle, Spokane, Tacoma, Bellevue, Everett, and Olympia — are on the same time zone. Washington shares Pacific Time with Oregon and California. The live clock above shows the current time in Washington State.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Washington State in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington State is in the Pacific Time Zone. In winter, Washington uses Pacific Standard Time (PST, UTC−8). During Daylight Saving Time (March–November), Washington uses Pacific Daylight Time (PDT, UTC−7). The IANA identifier is America/Los_Angeles. Washington State is distinct from Washington D.C., which is on Eastern Time (EST/EDT, UTC−5/−4) on the opposite coast.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 3 hours ahead of Washington State (Pacific Time). When it is 9:00 AM in Seattle, it is 12:00 PM (noon) in New York. Both states switch to Daylight Saving Time on the same dates, so the 3-hour gap is constant year-round. This difference is important for scheduling calls, as New York business hours start 3 hours earlier than Seattle business hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and Chicago?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chicago (Central Time) is always 2 hours ahead of Washington State (Pacific Time). When it is 9:00 AM in Seattle, it is 11:00 AM in Chicago. Both cities switch to Daylight Saving Time on the same dates, so the 2-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seattle (PST, UTC−8) is 8 hours behind London (GMT, UTC+0) in winter. During US and UK Daylight Saving Time (roughly April–October), Seattle (PDT, UTC−7) is typically still 8 hours behind London (BST, UTC+1). There are brief windows each spring and autumn when the gap becomes 7 or 9 hours, because the US and UK switch clocks on different dates. The 8-hour gap makes real-time collaboration between Seattle and London teams challenging.' },
    },
    {
      '@type': 'Question',
      name: 'Does Washington State observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Washington State observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (PST to PDT) and fall back on the first Sunday in November (PDT to PST). Washington State passed legislation in 2019 to permanently adopt PDT (UTC−7) year-round, but this requires federal approval or a multistate agreement. As of 2026, Washington State continues to change clocks twice per year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Washington State and Tokyo?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tokyo (JST, UTC+9) is 17 hours ahead of Seattle (PST, UTC−8) in winter. During US Daylight Saving Time (PDT, UTC−7), the difference narrows to 16 hours. Japan has no DST, so the gap shifts only when Washington State changes its clocks. This 16–17 hour difference means that Seattle and Tokyo business days barely overlap — when Seattle opens at 9:00 AM, it is already 2:00 AM the next day in Tokyo.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Washington State', item: 'https://whattime.city/washington-state/' },
  ],
}


export default function WashingtonStateTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Washington State" subtitle="Pacific Time (PT) · PST (UTC−8) in winter · PDT (UTC−7) during Daylight Saving Time" />
      <WashingtonStateClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Oregon","href":"/oregon/"},{"label":"Time in California","href":"/california/"},{"label":"Time in Idaho","href":"/idaho/"},{"label":"New York time","href":"/new-york/"},{"label":"Seattle time","href":"/seattle/"},{"label":"Time in Canada","href":"/canada/"},{"label":"Time in New York State","href":"/new-york-state/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Washington State: America/Los_Angeles (PST UTC−8 / PDT UTC−7).
      "
      />
    </ContentPageWrapper>
  )
}
