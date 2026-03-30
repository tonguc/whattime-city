import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import NetherlandsClockClient from './NetherlandsClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Netherlands Now — CET/CEST (UTC+1/+2)',
  description:
    'What time is it in the Netherlands right now? The Netherlands uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. Live Amsterdam clock, Netherlands vs world cities.',
  keywords: [
    'time in netherlands', 'netherlands time now', 'what time is it in netherlands',
    'amsterdam time', 'netherlands time zone', 'CET netherlands', 'CEST netherlands',
    'central european time netherlands', 'current time amsterdam', 'netherlands utc+1',
    'netherlands time vs usa', 'netherlands time vs uk', 'netherlands time vs india',
    'rotterdam time', 'the hague time', 'holland time zone',
  ],
  alternates: { canonical: 'https://whattime.city/netherlands/' },
  openGraph: {
    title: 'Current Time in the Netherlands — CET/CEST (UTC+1/+2)',
    description: 'Live Netherlands time. CET (UTC+1) in winter, CEST (UTC+2) during Daylight Saving Time. Amsterdam, Rotterdam, The Hague all on Central European Time.',
    type: 'website', url: 'https://whattime.city/netherlands/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in the Netherlands right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Netherlands uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. All cities — Amsterdam, Rotterdam, The Hague, Utrecht, and Eindhoven — are on the same time. The live clock above shows the current time in the Netherlands.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is the Netherlands in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Netherlands is in the Central European Time (CET) zone. In winter, the Netherlands uses CET (UTC+1). During Daylight Saving Time (late March–late October), it switches to CEST (UTC+2). The IANA identifier is Europe/Amsterdam. The Netherlands shares Central European Time with Germany, France, Belgium, Spain, Italy, Poland, and most of continental Europe.' },
    },
    {
      '@type': 'Question',
      name: 'Does the Netherlands observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Netherlands follows EU Daylight Saving Time rules. Clocks spring forward 1 hour on the last Sunday of March (CET to CEST) and fall back on the last Sunday of October (CEST to CET). The EU has voted to end the practice of changing clocks, but as of 2026 no final EU-wide date for abolition has been set and the Netherlands continues to change clocks twice a year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Amsterdam (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 5 hours. When both the US and Netherlands are on summer time, Amsterdam (CEST, UTC+2) is typically 6 hours ahead of New York (EDT, UTC−4). Amsterdam is 9 hours ahead of Los Angeles (PST, UTC−8) in winter, narrowing to 8 hours during PDT.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Amsterdam (CET/CEST) is always 1 hour ahead of London (GMT/BST). Both the Netherlands and UK change clocks on the same dates (last Sunday of March and October), so the 1-hour gap is constant year-round. When it is 9:00 AM in London, it is 10:00 AM in Amsterdam.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Mumbai (IST, UTC+5:30) is 4.5 hours ahead of Amsterdam (CET, UTC+1) in winter. During CEST (UTC+2), the gap narrows to 3.5 hours. India has no DST, so the difference changes only when the Netherlands adjusts its clocks. This makes the Netherlands and India reasonably compatible for business calls, with a mid-morning window in the Netherlands corresponding to early afternoon in India.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and Singapore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 7 hours ahead of Amsterdam (CET, UTC+1) in winter. During CEST (UTC+2), the gap narrows to 6 hours. Singapore has no DST. This means Amsterdam business hours (9 AM – 6 PM CET) correspond to 4:00 PM – 1:00 AM in Singapore — making real-time collaboration challenging, but possible for late-afternoon Amsterdam / early-evening Singapore calls.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in the Netherlands', item: 'https://whattime.city/netherlands/' },
  ],
}


export default function NetherlandsTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in the Netherlands" subtitle="Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Daylight Saving Time" />
      <NetherlandsClockClient />
      <CountryFactsSection hubSlug="netherlands" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{"label":"Time in Germany","href":"/germany/"},{"label":"Time in Belgium","href":"/belgium/"},{"label":"Time in France","href":"/france/"},{"label":"Time in UK","href":"/uk/"},{"label":"Amsterdam time","href":"/amsterdam/"},{"label":"London time","href":"/london/"},{"label":"Time in Luxembourg","href":"/luxembourg/"},{"label":"Time converter tool","href":"/time-converter/"}]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Netherlands: Europe/Amsterdam (CET UTC+1 / CEST UTC+2).
      "
      />
    </ContentPageWrapper>
  )
}
