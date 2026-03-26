import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import IndonesiaClockClient from './IndonesiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Indonesia Now — WIB/WITA/WIT · Jakarta, Bali, Papua',
  description:
    'What time is it in Indonesia right now? Indonesia has three time zones: WIB (UTC+7) in Java and Sumatra, WITA (UTC+8) in Bali and Sulawesi, and WIT (UTC+9) in Papua. Live clocks, world comparison, and best time to call Jakarta.',
  keywords: [
    'time in indonesia', 'indonesia time now', 'what time is it in indonesia',
    'jakarta time', 'bali time', 'WIB time zone', 'WITA time zone', 'WIT time zone',
    'indonesia time zone', 'current time jakarta', 'indonesia utc+7',
    'indonesia time vs usa', 'indonesia time vs london', 'indonesia time vs australia',
    'west indonesia time', 'central indonesia time', 'east indonesia time',
  ],
  alternates: { canonical: 'https://whattime.city/indonesia/' },
  openGraph: {
    title: 'Current Time in Indonesia — WIB (UTC+7) · WITA (UTC+8) · WIT (UTC+9)',
    description: 'Live Indonesia time across all three time zones. WIB (UTC+7) for Jakarta, WITA (UTC+8) for Bali, WIT (UTC+9) for Papua. No Daylight Saving Time.',
    type: 'website', url: 'https://whattime.city/indonesia/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Indonesia right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Indonesia has three time zones. West Indonesia Time (WIB, UTC+7) covers Java, Sumatra, and Kalimantan — including Jakarta and Bandung. Central Indonesia Time (WITA, UTC+8) covers Bali, Sulawesi, and Lombok. East Indonesia Time (WIT, UTC+9) covers Papua and Maluku. The live clock above shows the current time in Jakarta (WIB, UTC+7).' },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Indonesia have?',
      acceptedAnswer: { '@type': 'Answer', text: 'Indonesia has three official time zones: WIB (Waktu Indonesia Barat, UTC+7) in the west, WITA (Waktu Indonesia Tengah, UTC+8) in the center, and WIT (Waktu Indonesia Timur, UTC+9) in the east. Indonesia spans roughly 5,000 km from west to east, covering about 5 hours of solar time, but consolidates this into three zones for administrative convenience.' },
    },
    {
      '@type': 'Question',
      name: 'Does Indonesia observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Indonesia does not observe Daylight Saving Time. All three Indonesian time zones (WIB, WITA, WIT) remain constant year-round. Indonesia lies close to the equator, where day length varies only minimally across seasons, making DST unnecessary.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Indonesia (Jakarta) and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Jakarta (WIB, UTC+7) is 12 hours ahead of New York (EST, UTC−5) in winter, or 11 hours ahead during US Daylight Saving Time (EDT, UTC−4). Jakarta is 15 hours ahead of Los Angeles (PST, UTC−8) in winter, or 14 hours ahead during PDT. Because Indonesia has no DST, the difference shifts by 1 hour when the US changes clocks in March and November.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Jakarta and Singapore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Jakarta (WIB, UTC+7) is 1 hour behind Singapore (SGT, UTC+8). Despite being geographically close and in the same ASEAN economic community, Indonesia uses UTC+7 for its western zones while Singapore uses UTC+8. When it is 9:00 AM in Jakarta, it is 10:00 AM in Singapore.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Bali and Jakarta?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bali uses Central Indonesia Time (WITA, UTC+8), which is 1 hour ahead of Jakarta, which uses West Indonesia Time (WIB, UTC+7). When it is 9:00 AM in Jakarta, it is 10:00 AM in Bali. Travelers flying from Jakarta to Bali should set their clocks forward 1 hour on arrival.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Indonesia from Europe?',
      acceptedAnswer: { '@type': 'Answer', text: 'From London (GMT, UTC+0), Jakarta business hours (9:00 AM – 6:00 PM WIB) correspond to 2:00 AM – 11:00 AM GMT. This makes morning calls from London (arriving in the afternoon in Jakarta) the most practical overlap. From Berlin or Paris (CET, UTC+1), the window is 3:00 AM – 12:00 PM CET. Video calls between Europe and Indonesia almost always require at least one party to work outside standard hours.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Indonesia', item: 'https://whattime.city/indonesia/' },
  ],
}


export default function IndonesiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Indonesia" subtitle="Three time zones: WIB (UTC+7) · WITA (UTC+8) · WIT (UTC+9) · No Daylight Saving Time" />
      <IndonesiaClockClient />
      <CountryFactsSection hubSlug="indonesia" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[]}
        linksTitle="Related Time Pages"
        footerText="
        Time zone data powered by the IANA Time Zone Database. Indonesia: Asia/Jakarta (WIB UTC+7) · Asia/Makassar (WITA UTC+8) · Asia/Jayapura (WIT UTC+9).
      "
      />
    </ContentPageWrapper>
  )
}
