import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import TurkeyClockClient from './TurkeyClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Turkey Now — TRT (UTC+3) · Istanbul, Ankara · No DST since 2016',
  description:
    'What time is it in Turkey right now? Turkey uses TRT (Turkey Time, UTC+3) year-round — no Daylight Saving Time since 2016. Live Istanbul clock, Turkey vs world cities, and best time to call.',
  keywords: [
    'time in turkey', 'turkey time now', 'what time is it in turkey',
    'turkey time', 'TRT time zone', 'turkey standard time',
    'istanbul time now', 'ankara time now', 'turkey utc+3',
    'turkey time vs uk', 'turkey time vs est', 'time difference turkey usa',
    'turkey no daylight saving', 'turkey time right now',
  ],
  alternates: { canonical: 'https://whattime.city/turkey/' },
  openGraph: {
    title: 'Current Time in Turkey — TRT (UTC+3)',
    description: 'Live Turkey / Istanbul time. TRT is UTC+3, fixed year-round since Turkey abolished DST in 2016. Check Turkey vs US, UK, Europe, and Middle East.',
    type: 'website', url: 'https://whattime.city/turkey/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Turkey right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Turkey uses Turkey Time (TRT), which is UTC+3, fixed year-round. Turkey abolished Daylight Saving Time in September 2016 and has remained on UTC+3 permanently since then. All cities — Istanbul, Ankara, Izmir, Antalya, Bursa — are on the same time zone.' },
    },
    {
      '@type': 'Question',
      name: 'Did Turkey abolish Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Turkey permanently moved to UTC+3 in September 2016, effectively staying on "permanent summer time." Before 2016, Turkey used UTC+2 in winter (EET) and UTC+3 in summer (EEST). By staying on UTC+3 year-round, Turkey no longer changes clocks. This means Turkey\'s offset from European countries changes twice a year when those countries adjust their clocks.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Turkey in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Turkey uses Turkey Time (TRT), UTC+3. The IANA time zone identifier is Europe/Istanbul. Turkey sits geographically at the intersection of Europe and Asia and uses a single time zone nationwide. UTC+3 is also used by Russia\'s Moscow time and the East African Time zone.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Turkey and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Turkey (TRT, UTC+3) is always 3 hours ahead of London (GMT, UTC+0) in UK winter. During British Summer Time (BST, UTC+1), Turkey is 2 hours ahead of London. Because Turkey no longer changes clocks, the gap changes only when the UK switches between GMT and BST.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Turkey and Germany?',
      acceptedAnswer: { '@type': 'Answer', text: 'Turkey (TRT, UTC+3) is 2 hours ahead of Germany (CET, UTC+1) in winter. During Central European Summer Time (CEST, UTC+2), Turkey is 1 hour ahead of Germany. Because Turkey has no DST, the gap shrinks from 2h to 1h when Germany advances its clocks in late March.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Turkey and the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'Turkey (TRT, UTC+3) is 8 hours ahead of New York (EST, UTC−5) and 11 hours ahead of Los Angeles (PST, UTC−8) in winter. During US Daylight Saving Time, the gaps narrow by 1 hour: 7h ahead of New York (EDT) and 10h ahead of Los Angeles (PDT).' },
    },
    {
      '@type': 'Question',
      name: 'Is Turkey time the same as Moscow time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Turkey Time (TRT, UTC+3) and Moscow Time (MSK, UTC+3) are the same offset. There is no time difference between Istanbul and Moscow. Both are on UTC+3 year-round.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Turkey', item: 'https://whattime.city/turkey/' },
  ],
}


export default function TurkeyTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Turkey" subtitle="Turkey Time (TRT) · UTC+3 · No Daylight Saving Time since September 2016" />
      <TurkeyClockClient />
      <CountryFactsSection hubSlug="turkey" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Greece","href":"/greece/"},{"label":"Time in UAE","href":"/united-arab-emirates/"},{"label":"Time in Russia","href":"/russia/"},{"label":"Time in Egypt","href":"/egypt/"},{"label":"Istanbul time","href":"/istanbul/"},{"label":"London time","href":"/london/"},{"label":"Time in Germany","href":"/germany/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Turkey: Europe/Istanbul (TRT, UTC+3). No DST since 2016.
      "
      />
    </ContentPageWrapper>
  )
}
