import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MassachusettsClockClient from './MassachusettsClockClient'

export const metadata: Metadata = {
  title: 'Time in Massachusetts Now — EST/EDT',
  description: 'What time is it in Massachusetts right now? Massachusetts uses Eastern Time (EST/EDT). Boston is on EST (UTC−5) in winter and EDT (UTC−4) in summer. Live clock, MA vs world cities, and best time to call.',
  keywords: ['time in massachusetts', 'massachusetts time now', 'what time is it in massachusetts', 'boston time', 'massachusetts time zone', 'EST EDT massachusetts', 'massachusetts utc-5', 'cambridge time', 'worcester time', 'springfield time', 'massachusetts time vs uk', 'massachusetts time vs california'],
  alternates: { canonical: 'https://whattime.city/massachusetts/' },
  openGraph: { title: 'Current Time in Massachusetts — EST/EDT · Boston', description: 'Live Massachusetts time. Boston and all of Massachusetts on Eastern Time — EST (UTC−5) in winter, EDT (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/massachusetts/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Massachusetts right now?', acceptedAnswer: { '@type': 'Answer', text: 'Massachusetts uses Eastern Time. Boston, Cambridge, Worcester, Springfield, and all Massachusetts cities are on EST (UTC−5) in winter and EDT (UTC−4) during Daylight Saving Time. The live clock above shows the current time in Massachusetts.' } },
    { '@type': 'Question', name: 'What time zone is Boston in?', acceptedAnswer: { '@type': 'Answer', text: 'Boston is in the Eastern Time zone (America/New_York). Boston uses EST (UTC−5) during standard time (November to March) and EDT (UTC−4) during Daylight Saving Time (March to November). Boston is on the same time as New York City, Philadelphia, Washington D.C., and Atlanta.' } },
    { '@type': 'Question', name: 'Does Massachusetts observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Massachusetts observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March (from EST UTC−5 to EDT UTC−4) and fall back 1 hour on the first Sunday in November.' } },
    { '@type': 'Question', name: 'What is the time difference between Massachusetts and California?', acceptedAnswer: { '@type': 'Answer', text: 'Massachusetts (Eastern Time) is always 3 hours ahead of California (Pacific Time). When it is noon in Boston (EST/EDT), it is 9:00 AM in Los Angeles (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Massachusetts and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Boston (EST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Boston moves to EDT (UTC−4), making it 4 hours behind London (GMT). When both the US and UK are on summer time simultaneously, Boston (EDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Massachusetts and Chicago?', acceptedAnswer: { '@type': 'Answer', text: 'Massachusetts (Eastern Time) is always 1 hour ahead of Chicago (Central Time). When it is noon in Boston, it is 11:00 AM in Chicago. Both use the same DST schedule, so the 1-hour gap is constant year-round.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Massachusetts', item: 'https://whattime.city/massachusetts/' }] }

export default function MassachusettsTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Massachusetts" subtitle="Eastern Time (EST/EDT) · Boston · UTC−5 / UTC−4" />
      <MassachusettsClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Boston time', href: '/boston/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Philadelphia time', href: '/philadelphia/' }, { label: 'Time in New York State', href: '/new-york-state/' }, { label: 'Time in Pennsylvania', href: '/pennsylvania/' }, { label: 'Time in Virginia', href: '/virginia/' }, { label: 'Boston → London', href: '/time/boston/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Massachusetts City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Massachusetts: America/New_York (EST/EDT, Eastern Time)."
      />
    </ContentPageWrapper>
  )
}
