import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import MinnesotaClockClient from './MinnesotaClockClient'

export const metadata: Metadata = {
  title: 'Time in Minnesota Now — CST/CDT (UTC−6/−5) · Minneapolis, Saint Paul',
  description: 'What time is it in Minnesota right now? Minnesota uses Central Standard Time (CST, UTC−6) in winter and Central Daylight Time (CDT, UTC−5) during Daylight Saving Time. Live Minneapolis clock and world comparison.',
  keywords: ['time in minnesota', 'minnesota time now', 'what time is it in minnesota', 'minneapolis time', 'saint paul time', 'minnesota time zone', 'CST minnesota', 'CDT minnesota', 'central time minnesota', 'minnesota utc-6', 'minnesota time vs new york', 'minnesota time vs california'],
  alternates: { canonical: 'https://whattime.city/minnesota/' },
  openGraph: { title: 'Current Time in Minnesota — CST/CDT (UTC−6/−5)', description: 'Live Minnesota time. CST (UTC−6) in winter, CDT (UTC−5) during Daylight Saving Time. Minneapolis, Saint Paul, Rochester on Central Time.', type: 'website', url: 'https://whattime.city/minnesota/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Minnesota right now?', acceptedAnswer: { '@type': 'Answer', text: 'Minnesota uses Central Time — CST (UTC−6) in winter and CDT (UTC−5) during Daylight Saving Time. All cities — Minneapolis, Saint Paul, Rochester, Duluth, and Bloomington — are on the same time zone. The live clock above shows the current time in Minnesota.' } },
    { '@type': 'Question', name: 'What time zone is Minnesota in?', acceptedAnswer: { '@type': 'Answer', text: 'Minnesota is in the Central Time Zone. In winter it uses CST (UTC−6) and during DST it uses CDT (UTC−5). The IANA identifier is America/Chicago. Minnesota shares Central Time with Wisconsin, Illinois, Iowa, Missouri, and most of the central United States.' } },
    { '@type': 'Question', name: 'What is the time difference between Minnesota and New York?', acceptedAnswer: { '@type': 'Answer', text: 'New York (Eastern Time) is always 1 hour ahead of Minnesota (Central Time). When it is 9:00 AM in Minneapolis, it is 10:00 AM in New York. Both states change clocks on the same dates, so this 1-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Minnesota and California?', acceptedAnswer: { '@type': 'Answer', text: 'Minnesota (Central Time) is always 2 hours ahead of California (Pacific Time). When it is 9:00 AM in Los Angeles, it is 11:00 AM in Minneapolis. Both states change clocks on the same dates, so this 2-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Minnesota and London?', acceptedAnswer: { '@type': 'Answer', text: 'Minneapolis (CST, UTC−6) is 6 hours behind London (GMT, UTC+0) in winter. During both US and UK summer time, the gap is typically 6–7 hours depending on transition dates.' } },
    { '@type': 'Question', name: 'Does Minnesota observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Minnesota observes Daylight Saving Time. Clocks spring forward on the second Sunday of March and fall back on the first Sunday of November.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Minnesota', item: 'https://whattime.city/minnesota/' }] }

export default function MinnesotaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Minnesota" subtitle="Central Time (CT) · CST (UTC−6) in winter · CDT (UTC−5) during Daylight Saving Time" />
      <MinnesotaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Minneapolis time', href: '/minneapolis/' }, { label: 'Saint Paul time', href: '/saint-paul/' }, { label: 'Minneapolis → New York', href: '/time/minneapolis/new-york/' }, { label: 'Minneapolis → Los Angeles', href: '/time/minneapolis/los-angeles/' }, { label: 'Minneapolis → London', href: '/time/minneapolis/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Minnesota City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Minnesota: America/Chicago (CST UTC−6 / CDT UTC−5)."
      />
    </ContentPageWrapper>
  )
}
