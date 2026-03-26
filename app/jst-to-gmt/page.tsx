import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to GMT — Japan Standard Time to Greenwich Mean Time Converter',
  description: 'Convert JST to GMT instantly. Japan Standard Time (UTC+9) is 9 hours ahead of GMT (UTC+0). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/jst-to-gmt/' },
  openGraph: { title: 'JST to GMT Converter — Japan to Greenwich Mean Time', description: 'JST is 9 hours ahead of GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-gmt/', siteName: 'whattime.city' },
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
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">JST to GMT Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Japan Standard Time → Greenwich Mean Time · JST is <strong>9 hours ahead</strong> of GMT</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">JST vs GMT — Tokyo to London</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">JST (UTC+9)</strong> — Japan has no DST, always UTC+9. <strong className="text-slate-700 dark:text-slate-200">GMT (UTC+0)</strong> — UK winter time. London shifts to <strong>BST (UTC+1)</strong> from late March to late October.</p>
            <p>In UK winter: JST is 9 hours ahead. In UK summer (BST): JST is 8 hours ahead. The Tokyo–London overlap is narrow — Tokyo afternoons (5–9 PM JST) reach London at 8 AM–12 PM GMT.</p>
            <p>This corridor matters for finance: Tokyo Stock Exchange (9 AM–3 PM JST) closes before the London Stock Exchange opens (8 AM GMT / 5 PM JST). There is a brief 2-hour overlap when Tokyo is in its afternoon session and London has just opened.</p>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
                <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-500 dark:text-slate-400">
        Timezone data sourced from <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>. Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
