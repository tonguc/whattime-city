import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import KentuckyClockClient from './KentuckyClockClient'

export const metadata: Metadata = {
  title: 'Time in Kentucky Now — EST/EDT (UTC−5/−4)',
  description: 'What time is it in Kentucky right now? Most of Kentucky uses Eastern Time (EST/EDT). Some western counties use Central Time (CST/CDT). Live Louisville clock and best time to call.',
  keywords: ['time in kentucky', 'kentucky time now', 'what time is it in kentucky', 'louisville time', 'kentucky time zone', 'EST EDT kentucky', 'lexington kentucky time', 'kentucky two time zones', 'bowling green time', 'kentucky eastern time', 'kentucky central time', 'kentucky time vs uk'],
  alternates: { canonical: 'https://whattime.city/kentucky/' },
  openGraph: { title: 'Current Time in Kentucky — EST/EDT (Louisville) · Some Counties on CST', description: 'Live Kentucky time. Louisville and Lexington on Eastern Time. Some western counties on Central Time — 1 hour behind.', type: 'website', url: 'https://whattime.city/kentucky/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Kentucky right now?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Kentucky uses Eastern Time (EST/EDT). Louisville, Lexington, Frankfort (capital), Bowling Green, and most Kentucky cities are on EST (UTC−5) in winter and EDT (UTC−4) in summer. Some counties in the western part of the state use Central Time (CST/CDT), which is 1 hour behind. The live clock above shows Louisville (Eastern) time.' } },
    { '@type': 'Question', name: 'What time zone is Louisville in?', acceptedAnswer: { '@type': 'Answer', text: 'Louisville uses Eastern Time (America/Kentucky/Louisville). Louisville is on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. Louisville is on the same time as New York, Atlanta, and Cincinnati.' } },
    { '@type': 'Question', name: 'Which Kentucky counties use Central Time?', acceptedAnswer: { '@type': 'Answer', text: 'Several counties in the western tip of Kentucky use Central Time rather than Eastern Time. These include Fulton, Hickman, Carlisle, Ballard, McCracken, Graves, Marshall, Calloway, and adjacent counties bordering Tennessee\'s Central Time zone. The city of Bowling Green uses Eastern Time despite being geographically in the western part of the state.' } },
    { '@type': 'Question', name: 'Does Kentucky observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kentucky observes Daylight Saving Time. Eastern counties spring forward to EDT (UTC−4) and Central counties spring forward to CDT (UTC−5), both on the second Sunday in March. Both fall back on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Kentucky and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Kentucky (Eastern Time) is on the same time as New York year-round. Western Kentucky counties (Central Time) are always 1 hour behind New York. Both zones observe DST on the same schedule as New York.' } },
    { '@type': 'Question', name: 'What is the time difference between Kentucky and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Louisville (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Louisville moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK are on summer time, Louisville (EDT) is 5 hours behind London (BST, UTC+1).' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Kentucky', item: 'https://whattime.city/kentucky/' }] }

export default function KentuckyTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Kentucky" subtitle="Eastern Time (EST/EDT) · Louisville · Some Western Counties on Central Time" />
      <KentuckyClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Louisville time', href: '/louisville/' }, { label: 'Cincinnati time', href: '/cincinnati/' }, { label: 'Nashville time', href: '/nashville/' }, { label: 'Time in Ohio', href: '/ohio/' }, { label: 'Time in Tennessee', href: '/tennessee/' }, { label: 'Time in Indiana', href: '/indiana/' }, { label: 'Time in Virginia', href: '/virginia/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Kentucky City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Kentucky: America/Kentucky/Louisville (EST/EDT) for most; America/Chicago (CST/CDT) for western counties."
      />
    </ContentPageWrapper>
  )
}
