import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to CST — Central European Time to Central Time Converter',
  description: 'Convert CET to CST instantly. Central European Time (UTC+1) is 7 hours ahead of Central Standard Time (UTC-6). Live clocks, Europe–US Central scheduling guide.',
  alternates: { canonical: 'https://whattime.city/cet-to-cst/' },
  openGraph: { title: 'CET to CST Converter — Central Europe to Central US', description: 'CET is 7 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cet-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CET to CST — Central European to Central Time', description: 'CET is 7 hours ahead of CST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'CST',
  fromTimezone: 'Europe/Berlin',
  toTimezone: 'America/Chicago',
  fromFullName: 'Central European Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is CET ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'CET (Central European Time, UTC+1) is 7 hours ahead of CST (Central Standard Time, UTC-6). During summer, both Europe (CEST, UTC+2) and the US (CDT, UTC-5) observe daylight saving time, keeping the gap at 7 hours. Brief 6-hour or 8-hour gaps occur during transition weeks in March and October.' } },
    { '@type': 'Question', name: 'What is 9 AM CET in CST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM CET (Frankfurt/Berlin) is 2:00 AM CST (Chicago). For a 9:00 AM Chicago start, it is already 4:00 PM CET in Europe. The best overlap window is 9:00 AM–12:00 PM CST = 4:00–7:00 PM CET — catching US morning while Europe wraps up the workday.' } },
    { '@type': 'Question', name: 'What is the best time to call Chicago from Frankfurt?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap for Frankfurt (CET) and Chicago (CST) is 4:00–6:00 PM CET = 9:00–11:00 AM CST. This gives Frankfurt a late-afternoon slot while Chicago has a productive morning window. In summer (CEST/CDT), the same hours apply: 4:00–6:00 PM CEST = 9:00–11:00 AM CDT.' } },
    { '@type': 'Question', name: 'Which countries use CET?', acceptedAnswer: { '@type': 'Answer', text: 'CET covers most of continental Europe: Germany, France, Italy, Spain, Netherlands, Belgium, Austria, Switzerland, Poland, Czech Republic, Hungary, Slovakia, Slovenia, Croatia, Serbia, Bosnia, North Macedonia, Albania, Kosovo, Monaco, Luxembourg, Andorra, San Marino, and Vatican City. In summer all shift to CEST (UTC+2).' } },
  ],
}

export default function CETtoCST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">CET to CST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Central European Time → Central Standard Time · CET is <strong>7 hours ahead</strong> of CST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">CET vs CST — Europe to Central US</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">CET (UTC+1)</strong> — Central European Time, used by Germany, France, Italy, Spain, and ~20 more countries. Shifts to CEST (UTC+2) in summer (last Sunday in March → last Sunday in October).</p>
            <p><strong className="text-slate-700 dark:text-slate-200">CST (UTC-6)</strong> — US Central Standard Time. Chicago, Houston, Dallas shift to CDT (UTC-5) in summer (second Sunday in March → first Sunday in November).</p>
            <p>Best overlap: <strong>4:00–6:00 PM CET = 9:00–11:00 AM CST</strong>. DST transitions in March and October can temporarily shift the gap to 6 or 8 hours for 1–2 weeks.</p>
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
