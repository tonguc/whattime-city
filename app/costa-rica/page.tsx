import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import CostaRicaClockClient from './CostaRicaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Costa Rica Now — CST (UTC−6)',
  description: 'What time is it in Costa Rica right now? Live San José clock, time zone info (CST (UTC-6)), best time to call, and time difference with major cities.',
  keywords: ['time in costa rica', 'costa rica time now', 'what time is it in costa rica', 'san josé time', 'costa rica time zone'],
  alternates: { canonical: 'https://whattime.city/costa-rica/' },
  openGraph: { title: 'Current Time in Costa Rica — CST · San José', description: 'Live Costa Rica time. San José on CST (UTC-6).', type: 'website', url: 'https://whattime.city/costa-rica/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Costa Rica right now?', acceptedAnswer: { '@type': 'Answer', text: 'San José, Costa Rica uses Central Standard Time (CST, UTC-6) year-round. Costa Rica does not observe Daylight Saving Time. The IANA identifier is America/Costa_Rica. Costa Rica\'s consistent UTC-6 offset means it aligns with US Central Time during winter months and US Mountain Time during US summer months. The live clock above shows the current local time in Costa Rica.' } },
    { '@type': 'Question', name: 'What time zone is Costa Rica in?', acceptedAnswer: { '@type': 'Answer', text: 'Costa Rica is in Central Standard Time (CST) at UTC-6 throughout the entire year. The IANA identifier is America/Costa_Rica. During US standard time (November–March), Costa Rica matches US Central Time cities like Chicago and Dallas. During US daylight saving time (March–November), Costa Rica falls 1 hour behind CDT and instead aligns with US Mountain Daylight Time. Neighboring Panama is 1 hour ahead at UTC-5, while Nicaragua shares the same CST (UTC-6) offset. The entire country uses a single timezone.' } },
    { '@type': 'Question', name: 'Does Costa Rica observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Costa Rica does not observe Daylight Saving Time and has not done so since 1980. The country briefly experimented with DST in 1979–1980 but abandoned it permanently. Located near the equator (between 8 and 11 degrees North), Costa Rica experiences relatively consistent daylight hours year-round — making DST unnecessary. Costa Rica stays at UTC-6 every day of the year.' } },
    { '@type': 'Question', name: 'What is the time difference between Costa Rica and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Costa Rica (CST, UTC-6) is 1 hour behind New York (EST, UTC-5) in winter. During US Daylight Saving Time (mid-March to early November), the gap widens to 2 hours behind New York (EDT, UTC-4). When it is 9:00 AM in New York during summer, it is 7:00 AM in Costa Rica.' } },
    { '@type': 'Question', name: 'What is the time difference between Costa Rica and London?', acceptedAnswer: { '@type': 'Answer', text: 'Costa Rica (CST, UTC-6) is 6 hours behind London (GMT, UTC+0) in winter. During British Summer Time (late March to late October), the gap widens to 7 hours as London moves to BST (UTC+1). When it is 3:00 PM in London during summer, it is 8:00 AM in Costa Rica.' } },
    { '@type': 'Question', name: 'What is the time difference between Costa Rica and Los Angeles?', acceptedAnswer: { '@type': 'Answer', text: 'Costa Rica (CST, UTC-6) is 2 hours ahead of Los Angeles (PST, UTC-8) in winter. During US daylight saving time, the gap narrows to 1 hour as LA moves to PDT (UTC-7) while Costa Rica stays at UTC-6. This small difference makes Costa Rica a convenient nearshore destination for West Coast US companies.' } },
    { '@type': 'Question', name: 'What are typical business hours in Costa Rica?', acceptedAnswer: { '@type': 'Answer', text: 'Standard business hours in Costa Rica are 8:00 AM to 5:00 PM CST, Monday through Friday. Government offices typically operate 8:00 AM to 4:00 PM. Costa Rica has become a major nearshore outsourcing hub for North American companies — Amazon, Intel, HP, and IBM all operate service centers there — because the business day overlaps almost entirely with US hours.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Costa Rica', item: 'https://whattime.city/costa-rica/' }] }

export default function CostaRicaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Costa Rica" subtitle="CST (UTC-6) · San José · UTC-6" />
      <CostaRicaClockClient />
      <CountryFactsSection hubSlug="costa-rica" />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"New York time","href":"/new-york/"},{"label":"Miami time","href":"/miami/"},{"label":"Los Angeles time","href":"/los-angeles/"},{"label":"Time in Brazil","href":"/brazil/"},{"label":"Time in Mexico","href":"/mexico/"},{"label":"Time in Argentina","href":"/argentina/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Costa Rica & Related Times"
        footerText="Time zone data powered by the IANA Time Zone Database. Costa Rica: America/Costa_Rica (CST (UTC-6))."
      />
    </ContentPageWrapper>
  )
}
