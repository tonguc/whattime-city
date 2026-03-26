import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import ArizonaClockClient from './ArizonaClockClient'

export const metadata: Metadata = {
  title: 'Time in Arizona Now — MST (UTC−7) Year-Round · Phoenix · No Daylight Saving Time',
  description: 'What time is it in Arizona right now? Arizona uses Mountain Standard Time (MST, UTC−7) year-round and does NOT observe Daylight Saving Time — except the Navajo Nation. Live Phoenix clock and world comparison.',
  keywords: ['time in arizona', 'arizona time now', 'what time is it in arizona', 'phoenix time', 'arizona time zone', 'MST arizona', 'arizona no daylight saving', 'arizona utc-7', 'arizona time vs california', 'arizona time vs new york', 'navajo nation time zone', 'arizona dst exception'],
  alternates: { canonical: 'https://whattime.city/arizona/' },
  openGraph: { title: 'Current Time in Arizona — MST (UTC−7) Year-Round · No DST', description: 'Live Arizona time. MST (UTC−7) used all year — Arizona does not observe Daylight Saving Time. Navajo Nation is the exception. Phoenix, Tucson, Scottsdale on permanent MST.', type: 'website', url: 'https://whattime.city/arizona/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Arizona right now?', acceptedAnswer: { '@type': 'Answer', text: 'Arizona uses Mountain Standard Time (MST, UTC−7) year-round. Most of the state — including Phoenix, Tucson, Scottsdale, Mesa, and Flagstaff — does not observe Daylight Saving Time. The major exception is the Navajo Nation in northeastern Arizona, which does observe DST. The live clock above shows the current time in Phoenix (MST, UTC−7).' } },
    { '@type': 'Question', name: 'Why does Arizona not observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Arizona opted out of Daylight Saving Time under the Uniform Time Act of 1966. The state legislature decided that an extra hour of evening daylight in the already intensely hot Arizona summer was not beneficial. With temperatures regularly exceeding 110°F (43°C) in Phoenix in summer, residents prefer cooler evening hours over extended afternoon heat. Arizona has maintained this exemption ever since.' } },
    { '@type': 'Question', name: 'What time zone is Arizona in?', acceptedAnswer: { '@type': 'Answer', text: 'Arizona uses Mountain Standard Time (MST, UTC−7) year-round. The IANA identifier is America/Phoenix. Because Arizona does not observe DST, in summer Arizona is on the same time as California and other Pacific Daylight Time states (PDT, UTC−7). In winter, Arizona matches Colorado and other Mountain Standard Time states (MST, UTC−7).' } },
    { '@type': 'Question', name: 'What is the time difference between Arizona and California?', acceptedAnswer: { '@type': 'Answer', text: 'In winter, Arizona (MST, UTC−7) is 1 hour ahead of California (PST, UTC−8). In summer, Arizona (MST, UTC−7) and California (PDT, UTC−7) are on the same time — because California springs forward while Arizona stays put. This means the Arizona–California difference alternates between 0 and 1 hour each year.' } },
    { '@type': 'Question', name: 'What is the time difference between Arizona and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Arizona (MST, UTC−7) is 2 hours behind New York (EST, UTC−5) in winter. In summer, Arizona (MST, UTC−7) is 3 hours behind New York (EDT, UTC−4) — because New York springs forward but Arizona does not. This means the Arizona–New York gap alternates between 2 and 3 hours each year.' } },
    { '@type': 'Question', name: 'Does the Navajo Nation in Arizona observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Navajo Nation, which spans northeastern Arizona, southeastern Utah, and northwestern New Mexico, observes Daylight Saving Time. This makes the Navajo Nation an enclave where DST is observed within Arizona\'s otherwise DST-exempt territory. Additionally, the Hopi Reservation — which is completely surrounded by the Navajo Nation — does NOT observe DST, creating a rare nested time zone situation.' } },
    { '@type': 'Question', name: 'What is the time difference between Arizona and London?', acceptedAnswer: { '@type': 'Answer', text: 'Phoenix (MST, UTC−7) is 7 hours behind London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap widens to 8 hours. Since Arizona has no DST, this difference changes only when the UK adjusts its clocks.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Arizona', item: 'https://whattime.city/arizona/' }] }

export default function ArizonaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Arizona" subtitle="Mountain Standard Time (MST) · UTC−7 · Year-round · No Daylight Saving Time · Navajo Nation exception" />
      <ArizonaClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Phoenix time', href: '/phoenix/' }, { label: 'Tucson time', href: '/tucson/' }, { label: 'Scottsdale time', href: '/scottsdale/' }, { label: 'Phoenix → Los Angeles', href: '/time/phoenix/los-angeles/' }, { label: 'Phoenix → New York', href: '/time/phoenix/new-york/' }, { label: 'Phoenix → Chicago', href: '/time/phoenix/chicago/' }, { label: 'Phoenix → London', href: '/time/phoenix/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Frequently Asked Questions"
        footerText="Time zone data powered by the IANA Time Zone Database. Arizona: America/Phoenix (MST UTC−7, no DST). Navajo Nation: America/Denver (MST/MDT)."
      />
    </ContentPageWrapper>
  )
}
