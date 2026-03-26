import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to IST — Japan Standard Time to India Standard Time Converter',
  description: 'Convert JST to IST instantly. Japan Standard Time (UTC+9) is 3 hours 30 minutes ahead of India Standard Time (UTC+5:30). Live clocks and conversion table.',
  alternates: { canonical: 'https://whattime.city/jst-to-ist/' },
  openGraph: { title: 'JST to IST Converter — Japan to India', description: 'JST is 3:30 ahead of IST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-ist/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to IST — Japan to India Standard Time', description: 'JST is 3:30 ahead of IST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'IST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Japan Standard Time',
  toFullName: 'India Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is JST ahead of IST?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 3 hours 30 minutes ahead of IST (India Standard Time, UTC+5:30). Neither Japan nor India observes Daylight Saving Time, making this a completely fixed offset — always 3.5 hours, year-round, with no seasonal changes.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in IST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 5:30 AM IST (Mumbai/Delhi). For Japan morning meetings, Indian participants are in very early morning. The best practical overlap is 10:00 AM–4:00 PM IST = 1:30 PM–7:30 PM JST — Indian business hours catch Tokyo afternoon.' } },
    { '@type': 'Question', name: 'What is the best time for Japan–India calls?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap window for Tokyo (JST) and Bangalore (IST) is 9:30 AM–1:00 PM IST = 1:00–4:30 PM JST. This gives India a productive morning window while Japan is in the afternoon. Japanese companies with Indian engineering teams often use 10:00 AM IST / 1:30 PM JST for standups.' } },
    { '@type': 'Question', name: 'Why is the JST to IST difference always 3 hours 30 minutes?', acceptedAnswer: { '@type': 'Answer', text: 'JST is UTC+9 and IST is UTC+5:30. The difference is 9 − 5.5 = 3.5 hours = 3 hours 30 minutes. Since neither Japan nor India observes DST, this gap is completely fixed throughout the year — one of the most predictable timezone pairs for international scheduling.' } },
  ],
}

export default function JSTtoIST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">JST to IST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Japan Standard Time → India Standard Time · JST is <strong>3 hours 30 minutes ahead</strong> of IST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">JST vs IST — Tokyo to Bangalore</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">JST (UTC+9)</strong> — Japan Standard Time. Fixed, no DST. <strong className="text-slate-700 dark:text-slate-200">IST (UTC+5:30)</strong> — India Standard Time. Fixed, no DST.</p>
            <p>Both Japan and India have no Daylight Saving Time, making this one of the most predictable timezone pairs in the world. The 3:30 gap never changes — no seasonal recalculation needed.</p>
            <p>Best overlap: <strong>9:30 AM–1:00 PM IST = 1:00–4:30 PM JST</strong>. The Japan–India tech corridor (Tokyo ↔ Bangalore, Hyderabad, Pune) is increasingly active in software and automotive industries.</p>
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
