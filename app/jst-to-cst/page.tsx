import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to CST — Japan Standard Time to Central Time Converter',
  description: 'Convert JST to CST instantly. Japan Standard Time (UTC+9) is 15 hours ahead of Central Standard Time (UTC-6). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/jst-to-cst/' },
  openGraph: { title: 'JST to CST Converter — Japan to Central Time', description: 'JST is 15 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to CST — Japan Standard Time to Central Time', description: 'JST is 15 hours ahead of CST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'CST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'America/Chicago',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is JST ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 15 hours ahead of CST (Central Standard Time, UTC-6) in US winter. During US CDT (UTC-5), JST is 14 hours ahead. Japan does not observe DST, so the gap only changes when the US shifts clocks.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in CST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 6:00 PM CST the previous day. For example, Tuesday 9:00 AM Tokyo = Monday 6:00 PM Chicago. During CDT (US summer), 9:00 AM JST = 7:00 PM CDT previous day.' } },
    { '@type': 'Question', name: 'What is the time difference between Tokyo and Chicago?', acceptedAnswer: { '@type': 'Answer', text: 'Tokyo (JST, UTC+9) is 15 hours ahead of Chicago (CST, UTC-6) in winter, and 14 hours ahead in summer (CDT, UTC-5). Tokyo is always on the next calendar day compared to Chicago.' } },
  ],
}

export default function JSTtoCST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">JST to CST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Japan Standard Time → Central Standard Time · JST is <strong>15 hours ahead</strong> of CST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">JST vs CST — Tokyo to Chicago</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">JST (UTC+9)</strong> — Japan has no DST, always UTC+9. <strong className="text-slate-700 dark:text-slate-200">CST (UTC-6)</strong> — Central US shifts to CDT (UTC-5) in summer.</p>
            <p>The 14–15 hour gap means Tokyo is always on the next calendar day. Async communication is standard for Japan–Central US teams.</p>
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
