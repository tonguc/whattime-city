import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import OklahomaClockClient from './OklahomaClockClient'

export const metadata: Metadata = {
  title: 'Time in Oklahoma Now — CST/CDT (UTC−6/−5)',
  description: 'What time is it in Oklahoma right now? Oklahoma uses Central Time (CST/CDT). Oklahoma City is on CST (UTC−6) in winter and CDT (UTC−5) in summer. Live clock and best time to call.',
  keywords: ['time in oklahoma', 'oklahoma time now', 'what time is it in oklahoma', 'oklahoma city time', 'oklahoma time zone', 'CST CDT oklahoma', 'oklahoma utc-6', 'tulsa time', 'oklahoma central time', 'oklahoma time vs eastern', 'oklahoma time vs uk'],
  alternates: { canonical: 'https://whattime.city/oklahoma/' },
  openGraph: { title: 'Current Time in Oklahoma — CST/CDT · Oklahoma City', description: 'Live Oklahoma time. Oklahoma City and Tulsa on Central Time — CST (UTC−6) in winter, CDT (UTC−5) in summer.', type: 'website', url: 'https://whattime.city/oklahoma/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Oklahoma right now?', acceptedAnswer: { '@type': 'Answer', text: 'Oklahoma uses Central Time. Oklahoma City (capital), Tulsa, Norman, Broken Arrow, and all Oklahoma cities are on CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. The live clock above shows the current time in Oklahoma.' } },
    { '@type': 'Question', name: 'What time zone is Oklahoma City in?', acceptedAnswer: { '@type': 'Answer', text: 'Oklahoma City is in the Central Time zone (America/Chicago). Oklahoma City uses CST (UTC−6) during standard time and CDT (UTC−5) during Daylight Saving Time. Oklahoma City is on the same time as Dallas, Chicago, and Kansas City.' } },
    { '@type': 'Question', name: 'Does Oklahoma observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Oklahoma observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from CST UTC−6 to CDT UTC−5) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Oklahoma and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Oklahoma (Central Time) is always 1 hour behind New York (Eastern Time). When it is noon in New York, it is 11:00 AM in Oklahoma City. Both states observe DST on the same schedule, so the 1-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Oklahoma and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Oklahoma City (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Oklahoma City moves to CDT (UTC−5), making it 5 hours behind London (GMT). When both the US and UK observe summer time, Oklahoma City (CDT) is 6 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Oklahoma and Texas?', acceptedAnswer: { '@type': 'Answer', text: 'Oklahoma (Central Time) and Texas (Central Time) are on the same time year-round. There is no time difference between Oklahoma City and Dallas or Houston. Both states use CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Oklahoma', item: 'https://whattime.city/oklahoma/' }] }

export default function OklahomaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Oklahoma" subtitle="Central Time (CST/CDT) · Oklahoma City · UTC−6 / UTC−5" />
      <OklahomaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Dallas time', href: '/dallas/' }, { label: 'Kansas City time', href: '/kansas-city/' }, { label: 'Chicago time', href: '/chicago/' }, { label: 'Time in Texas', href: '/texas/' }, { label: 'Time in Kansas', href: '/kansas/' }, { label: 'Time in Missouri', href: '/missouri/' }, { label: 'Time in Arkansas', href: '/arkansas/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Oklahoma City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Oklahoma: America/Chicago (CST/CDT, Central Time)."
      />
    </ContentPageWrapper>
  )
}
