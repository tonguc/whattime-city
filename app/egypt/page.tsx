import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import EgyptClockClient from './EgyptClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Egypt Now — EET (UTC+2) · Cairo, Alexandria · No DST',
  description:
    'What time is it in Egypt right now? Egypt uses Eastern European Time (EET, UTC+2) year-round with no Daylight Saving Time since 2011. Live Cairo clock, Egypt vs world cities, and best time to call.',
  keywords: [
    'time in egypt', 'egypt time now', 'what time is it in egypt',
    'cairo time', 'egypt time zone', 'EET time zone', 'egypt utc+2',
    'egypt no daylight saving', 'cairo time now', 'egypt time vs usa',
    'egypt time vs uk', 'egypt time vs dubai', 'egypt time vs germany',
    'alexandria time', 'current time in cairo',
  ],
  alternates: { canonical: 'https://whattime.city/egypt/' },
  openGraph: {
    title: 'Current Time in Egypt — EET (UTC+2) · No Daylight Saving Time',
    description: 'Live Egypt time. Eastern European Time (EET, UTC+2) used year-round. No DST since 2011. Cairo, Alexandria, Giza all on the same time.',
    type: 'website', url: 'https://whattime.city/egypt/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Egypt right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Egypt uses Eastern European Time (EET, UTC+2) year-round. All cities — Cairo, Alexandria, Giza, Luxor, Aswan, and Sharm el-Sheikh — are on the same time. Egypt has not observed Daylight Saving Time since 2011. The live clock above shows the current time in Egypt.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Egypt in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Egypt is in the Eastern European Time (EET) zone, which is UTC+2. The IANA identifier is Africa/Cairo. Egypt shares this UTC+2 offset with countries such as Greece, Romania, Bulgaria, and South Africa (SAST). Egypt permanently abandoned Daylight Saving Time in 2011, so EET (UTC+2) is the only offset Egypt uses.' },
    },
    {
      '@type': 'Question',
      name: 'Does Egypt observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Egypt abolished Daylight Saving Time permanently in 2011, following a brief reintroduction in 2010. Egypt had previously used DST for many years but ended it definitively after the 2011 revolution. Since then, Egypt has remained on EET (UTC+2) year-round with no clock changes.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cairo (EET, UTC+2) is 7 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 6 hours. Cairo is 10 hours ahead of Los Angeles (PST, UTC−8) in winter, or 9 hours ahead during PDT. Since Egypt has no DST, the difference changes only when the US adjusts its clocks in March and November.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cairo (EET, UTC+2) is 2 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 1 hour. Since Egypt has no DST, this difference shifts when the UK changes clocks in late March and late October. There is a brief window each spring and autumn when the difference is 1 hour vs. the usual 2 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dubai (GST, UTC+4) is 2 hours ahead of Cairo (EET, UTC+2). Both regions have no Daylight Saving Time, so this 2-hour gap is constant year-round. When it is 9:00 AM in Cairo, it is 11:00 AM in Dubai.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and Germany?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cairo (EET, UTC+2) and Berlin (CET/CEST) are usually 1 hour apart, with Egypt ahead. In winter, Germany uses CET (UTC+1), so Cairo is 1 hour ahead. In summer, Germany uses CEST (UTC+2) — the same offset as Egypt — so the two countries are temporarily on the same time. This makes Germany one of Egypt\'s most time-compatible European trading partners during summer months.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Egypt', item: 'https://whattime.city/egypt/' },
  ],
}


export default function EgyptTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Egypt" subtitle="Eastern European Time (EET) · UTC+2 · No Daylight Saving Time since 2011" />
      <EgyptClockClient />
      <CountryFactsSection hubSlug="egypt" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Saudi Arabia","href":"/saudi-arabia/"},{"label":"Time in Turkey","href":"/turkey/"},{"label":"Time in Nigeria","href":"/nigeria/"},{"label":"Time in Kenya","href":"/kenya/"},{"label":"Cairo time","href":"/cairo/"},{"label":"London time","href":"/london/"},{"label":"Dubai time","href":"/dubai/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Egypt: Africa/Cairo (EET UTC+2, no DST since 2011).
      "
      />
    </ContentPageWrapper>
  )
}
