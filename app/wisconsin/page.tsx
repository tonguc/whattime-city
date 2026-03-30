import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import WisconsinClockClient from './WisconsinClockClient'

export const metadata: Metadata = {
  title: 'Time in Wisconsin Now — CST/CDT (UTC−6/−5)',
  description: 'What time is it in Wisconsin right now? Wisconsin uses Central Time (CST/CDT). Milwaukee is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in wisconsin', 'wisconsin time now', 'what time is it in wisconsin', 'milwaukee time', 'wisconsin time zone', 'CST CDT wisconsin', 'wisconsin utc-6', 'madison time', 'green bay time', 'wisconsin central time', 'wisconsin time vs eastern', 'wisconsin time vs uk'],
  alternates: { canonical: 'https://whattime.city/wisconsin/' },
  openGraph: { title: 'Time in Wisconsin Now — CST/CDT', description: 'Live Wisconsin time. Milwaukee and Madison on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/wisconsin/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Wisconsin right now?', acceptedAnswer: { '@type': 'Answer', text: 'Wisconsin uses Central Time. Milwaukee, Madison, Green Bay, Kenosha, and all Wisconsin cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Wisconsin.' } },
    { '@type': 'Question', name: 'What time zone is Milwaukee in?', acceptedAnswer: { '@type': 'Answer', text: 'Milwaukee is in the Central Time zone (America/Chicago). Milwaukee uses CST (UTC−6) during standard time (November to March) and CDT (UTC−5) during Daylight Saving Time (March to November). Milwaukee is on the same time as Chicago, Dallas, and Kansas City, and is 1 hour behind New York.' } },
    { '@type': 'Question', name: 'Does Wisconsin observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wisconsin observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Wisconsin and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Wisconsin (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Milwaukee. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Wisconsin and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Milwaukee (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Milwaukee moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK are on summer time, Milwaukee (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Wisconsin and California?', acceptedAnswer: { '@type': 'Answer', text: 'Wisconsin (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 10:00 AM in Los Angeles, it is noon in Milwaukee. Both states observe DST on the same schedule, so the 2-hour difference is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Wisconsin', item: 'https://whattime.city/wisconsin/' }] }

export default function WisconsinTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Wisconsin" subtitle="Central Time (CST/CDT) · Milwaukee · UTC−6 / UTC−5" />
      <WisconsinClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Milwaukee time', href: '/milwaukee/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Minneapolis time', href: '/minneapolis/' }, { label: 'Time in Illinois', href: '/illinois/' }, { label: 'Time in Minnesota', href: '/minnesota/' }, { label: 'Time in Michigan', href: '/michigan/' }, { label: 'Time in Ohio', href: '/ohio/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Wisconsin City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Wisconsin: America/Chicago (CST/CDT, Central Time)."
      />
    </ContentPageWrapper>
  )
}
