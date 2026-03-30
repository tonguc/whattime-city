import type { Metadata } from 'next'
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to GMT Converter — Japan to GMT',
  description: 'Convert JST to GMT instantly. Japan Standard Time (UTC+9) is 9 hours ahead of GMT (UTC+0). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/jst-to-gmt/' },
  openGraph: { title: 'JST to GMT — Japan Standard to Greenwich', description: 'JST is 9 hours ahead of GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to GMT — Japan Standard Time to GMT', description: 'JST is 9 hours ahead of GMT. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'GMT',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'Europe/London',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Abuja'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is JST ahead of GMT?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 9 hours ahead of GMT (UTC+0). Japan does not observe Daylight Saving Time, so this gap is fixed year-round. However, the UK observes BST (UTC+1) in summer (late March–late October), making JST only 8 hours ahead of London time during those months.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 12:00 AM GMT (midnight) the same day. For scheduling: a 9 AM Tokyo meeting starts at midnight in London (winter/GMT) or 1:00 AM BST (summer). The practical overlap window is very limited — Tokyo afternoon (5:00–8:00 PM JST) = London morning (8:00–11:00 AM GMT).' } },
    { '@type': 'Question', name: 'What is the best time to call London from Tokyo?', acceptedAnswer: { '@type': 'Answer', text: 'The best window to call London (GMT) from Tokyo (JST) in winter is 5:00–9:00 PM JST = 8:00 AM–12:00 PM GMT. In UK summer (BST, UTC+1), Tokyo must call between 6:00–10:00 PM JST to reach London at 9:00 AM–1:00 PM BST. Tokyo afternoons are the only viable overlap window.' } },
    { '@type': 'Question', name: 'Is GMT the same as UTC?', acceptedAnswer: { '@type': 'Answer', text: 'GMT (Greenwich Mean Time) and UTC (Coordinated Universal Time) are effectively identical for everyday use — both are UTC+0. The technical difference is that UTC is the international time standard maintained by atomic clocks, while GMT is a time zone used by the UK and West Africa in winter. For time conversion purposes, GMT = UTC.' } },
  ],
}

export default function JSTtoGMT() {
  return (
    <ConverterPageShell
      title="JST to GMT Converter"
      subtitle={<>Japan Standard Time → Greenwich Mean Time · JST is <strong>9 hours ahead</strong> of GMT</>}
      config={config}
      infoTitle="JST vs GMT — Tokyo to London"
      infoBody={<>
        <p><strong>JST (UTC+9)</strong> — Japan has no DST, always UTC+9. <strong>GMT (UTC+0)</strong> — UK winter time. London shifts to <strong>BST (UTC+1)</strong> from late March to late October.</p>
            <p>In UK winter: JST is 9 hours ahead. In UK summer (BST): JST is 8 hours ahead. The Tokyo–London overlap is narrow — Tokyo afternoons (5–9 PM JST) reach London at 8 AM–12 PM GMT.</p>
            <p>This corridor matters for finance: Tokyo Stock Exchange (9 AM–3 PM JST) closes before the London Stock Exchange opens (8 AM GMT / 5 PM JST). There is a brief 2-hour overlap when Tokyo is in its afternoon session and London has just opened.</p>
      </>}
      faqSchema={faqSchema}
    />
  )
}
