import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to UTC — Australian Eastern Time to UTC Converter',
  description: 'Convert AEST to UTC instantly. Australian Eastern Standard Time (UTC+10) is 10 hours ahead of UTC. Live clocks, full conversion table, and AEST offset reference.',
  alternates: { canonical: 'https://whattime.city/aest-to-utc/' },
  openGraph: { title: 'AEST to UTC Converter — Australian Eastern Time to UTC', description: 'AEST is 10 hours ahead of UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/aest-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'AEST to UTC — Australian Eastern Time to UTC', description: 'AEST is 10 hours ahead of UTC. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'UTC',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'UTC',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Newcastle', 'Wollongong'],
  toCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is AEST in UTC?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time) is UTC+10. Sydney, Melbourne, Brisbane, and Canberra use AEST in winter. During Australian summer (October–April), NSW, VIC, ACT, and TAS shift to AEDT (UTC+11). Queensland stays on AEST (UTC+10) year-round.' } },
    { '@type': 'Question', name: 'How do I convert AEST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert AEST to UTC, subtract 10 hours. Examples: 9:00 AM AEST = 11:00 PM UTC (previous day). 12:00 PM AEST = 2:00 AM UTC. 6:00 PM AEST = 8:00 AM UTC. 10:00 PM AEST = 12:00 PM (noon) UTC. Note: during AEDT (Australian DST), subtract 11 hours instead.' } },
    { '@type': 'Question', name: 'What is the difference between AEST and AEDT?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time) is UTC+10 and is used in winter (approximately April–October). AEDT (Australian Eastern Daylight Time) is UTC+11 and is used in summer (approximately October–April). Queensland does not observe DST and stays on AEST (UTC+10) year-round.' } },
    { '@type': 'Question', name: 'What is 00:00 UTC in AEST?', acceptedAnswer: { '@type': 'Answer', text: '00:00 UTC (midnight UTC) is 10:00 AM AEST (next day). UTC midnight corresponds to mid-morning in Sydney. For developers: to display UTC timestamps in Australian Eastern Time, add 10 hours (AEST) or 11 hours (AEDT). The IANA timezone identifier is Australia/Sydney.' } },
  ],
}

export default function AESTtoUTC() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">AEST to UTC Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Australian Eastern Standard Time → Coordinated Universal Time · AEST is <strong>10 hours ahead</strong> of UTC</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">AEST vs UTC — Sydney to World Standard Time</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">AEST (UTC+10)</strong> — Australian Eastern Standard Time. Used by NSW, VIC, QLD, ACT, and TAS. NSW/VIC/ACT/TAS shift to AEDT (UTC+11) in summer; Queensland stays on AEST year-round.</p>
            <p><strong className="text-slate-700 dark:text-slate-200">UTC (UTC+0)</strong> — The world's primary time standard. All global time zones are defined relative to UTC.</p>
            <p>AEST = UTC + 10 hours. Sydney 9 AM business start = UTC 11 PM (previous night). Australian systems and APIs often need UTC↔AEST conversion. Use <strong>Australia/Sydney</strong> IANA ID for DST-aware conversions.</p>
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
