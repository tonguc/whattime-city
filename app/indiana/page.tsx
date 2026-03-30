import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IndianaClockClient from './IndianaClockClient'

export const metadata: Metadata = {
  title: 'Time in Indiana Now — EST/EDT (UTC−5/−4)',
  description: 'What time is it in Indiana right now? Most of Indiana uses Eastern Time (EST/EDT). Northwest Indiana (Gary, Hammond) uses Central Time (CST/CDT). Live Indianapolis clock and best time to call.',
  keywords: ['time in indiana', 'indiana time now', 'what time is it in indiana', 'indianapolis time', 'indiana time zone', 'EST EDT indiana', 'indiana utc-5', 'gary indiana time', 'indiana two time zones', 'fort wayne time', 'indiana time vs uk', 'indiana central time'],
  alternates: { canonical: 'https://whattime.city/indiana/' },
  openGraph: { title: 'Time in Indiana Now — EST/EDT (UTC−5/−4)', description: 'Live Indiana time. Indianapolis on Eastern Time. Gary and Hammond (northwest corner) on Central Time — 1 hour behind.', type: 'website', url: 'https://whattime.city/indiana/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Indiana right now?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Indiana uses Eastern Time (EST/EDT). Indianapolis, Fort Wayne, South Bend, Evansville, and most Indiana cities are on EST (UTC−5) in winter and EDT (UTC−4) in summer. However, northwest Indiana — including Gary, Hammond, and Merrillville — uses Central Time (CST/CDT), which is 1 hour behind Indianapolis. The live clock above shows Indianapolis (Eastern) time.' } },
    { '@type': 'Question', name: 'What time zone is Indianapolis in?', acceptedAnswer: { '@type': 'Answer', text: 'Indianapolis uses Eastern Time (America/Indiana/Indianapolis). Indianapolis is on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. Indianapolis is on the same time as New York, Atlanta, and Detroit. Indiana was historically notable for not observing DST until 2006, when the state uniformly adopted the Eastern Time DST schedule.' } },
    { '@type': 'Question', name: 'Why does northwest Indiana use Central Time?', acceptedAnswer: { '@type': 'Answer', text: 'Northwest Indiana (Lake County and Porter County, including Gary and Hammond) uses Central Time because the region has strong economic and commuter ties to Chicago, which is on Central Time. Switching to Eastern Time would create an inconvenient 1-hour gap from their primary business hub. These counties use America/Indiana/Knox (CST/CDT).' } },
    { '@type': 'Question', name: 'Does Indiana observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Indiana observes Daylight Saving Time. Before 2006, most Indiana counties did not observe DST. Since 2006, all of Indiana observes DST — Eastern counties spring forward to EDT (UTC−4) and northwest counties spring forward to CDT (UTC−5), both on the second Sunday in March.' } },
    { '@type': 'Question', name: 'What is the time difference between Indiana and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Indiana (Eastern Time) is on the same time as New York year-round. Northwest Indiana (Central Time) is always 1 hour behind New York. Both zones observe DST on the same schedule as New York.' } },
    { '@type': 'Question', name: 'What is the time difference between Indiana and Chicago?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Indiana (Eastern Time) is 1 hour ahead of Chicago (Central Time). When it is noon in Chicago, it is 1:00 PM in Indianapolis. Northwest Indiana is on the same time as Chicago year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Indiana', item: 'https://whattime.city/indiana/' }] }

export default function IndianaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Indiana" subtitle="Eastern Time (EST/EDT) · Indianapolis · NW Indiana on Central Time" />
      <IndianaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Indianapolis time', href: '/indianapolis/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Detroit time', href: '/detroit/' }, { label: 'Time in Illinois', href: '/illinois/' }, { label: 'Time in Ohio', href: '/ohio/' }, { label: 'Time in Michigan', href: '/michigan/' }, { label: 'Time in Tennessee', href: '/tennessee/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Indiana City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Indiana: America/Indiana/Indianapolis (EST/EDT) for most; America/Indiana/Knox (CST/CDT) for northwest counties."
      />
    </ContentPageWrapper>
  )
}
