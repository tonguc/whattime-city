import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to MST — Japan Standard Time to Mountain Time Converter',
  description: 'Convert JST to MST instantly. Japan Standard Time (UTC+9) is 16 hours ahead of Mountain Standard Time (UTC-7). Live clocks, Tokyo–Denver scheduling guide.',
  alternates: { canonical: 'https://whattime.city/jst-to-mst/' },
  openGraph: { title: 'JST to MST Converter — Japan to Mountain Time', description: 'JST is 16 hours ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to MST — Japan Standard Time to Mountain Time', description: 'JST is 16 hours ahead of MST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'MST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'America/Denver',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is JST ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time, UTC+9) is 16 hours ahead of MST (Mountain Standard Time, UTC-7). During US Mountain Daylight Time (MDT, UTC-6), JST is 15 hours ahead. Japan does not observe DST, so the gap only changes when the US shifts clocks in spring and autumn.' } },
    { '@type': 'Question', name: 'What is 9 AM JST in MST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM JST (Tokyo) is 5:00 PM MST the previous day. For example, Tuesday 9:00 AM Tokyo = Monday 5:00 PM Denver (in winter). During MDT (US summer), 9:00 AM JST = 6:00 PM MDT the previous day.' } },
    { '@type': 'Question', name: 'What is the best time to call Denver from Tokyo?', acceptedAnswer: { '@type': 'Answer', text: 'The best window to call Denver (MST) from Tokyo (JST) in winter is 4:00–8:00 PM JST = 12:00 AM–4:00 AM MST — which is impractical. In practice, Tokyo evening (8:00–10:00 PM JST) = Denver morning (4:00–6:00 AM MST) is the closest workable overlap. Async communication is standard for Japan–Mountain US teams.' } },
    { '@type': 'Question', name: 'What date is it in Denver when it is Monday in Tokyo?', acceptedAnswer: { '@type': 'Answer', text: 'With a 16-hour lead, Tokyo is always on the next calendar day compared to Denver. When it is Monday morning in Tokyo, it is still Sunday in Denver. A Tuesday meeting in Tokyo must be booked as a Monday in Denver.' } },
  ],
}

export default function JSTtoMST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">JST to MST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Japan Standard Time → Mountain Standard Time · JST is <strong>16 hours ahead</strong> of MST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">JST vs MST — Tokyo to Denver</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">JST (UTC+9)</strong> — Japan has no DST, always UTC+9. <strong className="text-slate-700 dark:text-slate-200">MST (UTC-7)</strong> — Mountain US shifts to MDT (UTC-6) in summer.</p>
            <p>At 16 hours ahead, Tokyo is always on the next calendar day compared to Denver. The gap is among the largest for regular business pairs. Async-first workflows are essential for Japan–Mountain US collaboration.</p>
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
