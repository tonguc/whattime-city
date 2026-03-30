import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IllinoisClockClient from './IllinoisClockClient'

export const metadata: Metadata = {
  title: 'Time in Illinois Now — CST/CDT (UTC−6/−5)',
  description:
    'What time is it in Illinois right now? Illinois uses Central Standard Time (CST, UTC−6) in winter and Central Daylight Time (CDT, UTC−5) during Daylight Saving Time. Live Chicago clock, Illinois vs world cities, and best time to call.',
  keywords: [
    'time in illinois', 'illinois time now', 'what time is it in illinois',
    'chicago time', 'illinois time zone', 'CST illinois', 'CDT illinois',
    'central time illinois', 'current time chicago', 'illinois utc-6',
    'illinois time vs new york', 'illinois time vs california', 'illinois time vs london',
    'chicago time zone', 'springfield illinois time', 'central standard time',
  ],
  alternates: { canonical: 'https://whattime.city/illinois/' },
  openGraph: {
    title: 'Current Time in Illinois — CST/CDT (UTC−6/−5)',
    description: 'Live Illinois time. CST (UTC−6) in winter, CDT (UTC−5) during Daylight Saving Time. Chicago, Springfield, Rockford all on Central Time.',
    type: 'website', url: 'https://whattime.city/illinois/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Illinois right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Illinois uses Central Time — CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. All cities in Illinois — Chicago, Springfield, Rockford, Peoria, Champaign, and Aurora — are on the same time zone. The live clock above shows the current time in Illinois.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Illinois in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Illinois is in the Central Time Zone. In winter, Illinois uses Central Standard Time (CST, UTC−6). During Daylight Saving Time (March–November), Illinois uses Central Daylight Time (CDT, UTC−5). The IANA identifier is America/Chicago. Illinois shares the Central Time Zone with Texas, Minnesota, Wisconsin, Missouri, Iowa, and most of the central United States.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Illinois and New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Illinois (Central Time). When it is 9:00 AM in Chicago, it is 10:00 AM in New York. Both states switch to Daylight Saving Time on the same dates, so the 1-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Illinois and California?',
      acceptedAnswer: { '@type': 'Answer', text: 'Illinois (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 7:00 AM in Los Angeles, it is 9:00 AM in Chicago. Both states switch to Daylight Saving Time on the same dates, so the 2-hour gap is constant year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Illinois and London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chicago (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US and UK Daylight Saving Time (when both switch, roughly April–October), Chicago (CDT, UTC−5) is typically 6 hours behind London (BST, UTC+1). There are brief transition windows each spring and autumn when the gap temporarily becomes 5 or 7 hours, because the US and UK switch clocks on different dates.' },
    },
    {
      '@type': 'Question',
      name: 'Does Illinois observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Illinois observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (CST to CDT) and fall back on the first Sunday in November (CDT to CST). As of 2026, Illinois continues to observe DST, though there have been various state legislative discussions about ending the clock-change practice.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Chicago from Europe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chicago business hours (9:00 AM – 6:00 PM CST) correspond to 3:00 PM – Midnight GMT in London, or 4:00 PM – 1:00 AM CET in Berlin and Paris. This means European callers should phone Chicago in the early-to-mid afternoon local time to reach colleagues during standard Chicago business hours. Morning calls from Europe will arrive before Chicago opens for business.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Illinois', item: 'https://whattime.city/illinois/' },
  ],
}


export default function IllinoisTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Illinois" subtitle="Central Time (CT) · CST (UTC−6) in winter · CDT (UTC−5) during Daylight Saving Time" />
      <IllinoisClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Time in Michigan","href":"/michigan/"},{"label":"Time in Indiana","href":"/indiana/"},{"label":"Time in Wisconsin","href":"/wisconsin/"},{"label":"Time in Ohio","href":"/ohio/"},{"label":"Chicago time","href":"/chicago/"},{"label":"Time in Missouri","href":"/missouri/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Illinois: America/Chicago (CST UTC−6 / CDT UTC−5).
      "
      />
    </ContentPageWrapper>
  )
}
