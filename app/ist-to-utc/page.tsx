import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to UTC — India Standard Time to UTC Converter',
  description: 'Convert IST to UTC instantly. India Standard Time (UTC+5:30) is 5 hours 30 minutes ahead of UTC. Live clocks, full conversion table, and IST offset reference.',
  alternates: { canonical: 'https://whattime.city/ist-to-utc/' },
  openGraph: { title: 'IST to UTC Converter — India Standard Time to UTC', description: 'IST is 5 hours 30 minutes ahead of UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/ist-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'IST to UTC — India Standard Time to UTC', description: 'IST is 5:30 ahead of UTC. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'UTC',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'UTC',
  fromFullName: 'India Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
  toCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is IST in UTC?', acceptedAnswer: { '@type': 'Answer', text: 'IST (India Standard Time) is UTC+5:30 — 5 hours and 30 minutes ahead of UTC. India does not observe Daylight Saving Time, making IST a fixed offset year-round. The :30 half-hour component is what makes IST conversions distinctive.' } },
    { '@type': 'Question', name: 'How do I convert IST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert IST to UTC, subtract 5 hours and 30 minutes. Examples: 9:00 AM IST = 3:30 AM UTC. 12:00 PM (noon) IST = 6:30 AM UTC. 6:00 PM IST = 12:30 PM UTC. 11:30 PM IST = 6:00 PM UTC. Since India has no DST, this formula is constant throughout the year.' } },
    { '@type': 'Question', name: 'Why does India use a 30-minute UTC offset?', acceptedAnswer: { '@type': 'Answer', text: 'India uses UTC+5:30 because when India standardised its time zone in 1906, it chose the 82°30\'E meridian — exactly halfway between UTC+5 and UTC+6. Using a single national time zone across a country spanning over 30 degrees of longitude was a political decision for unity, and the half-hour offset was the compromise.' } },
    { '@type': 'Question', name: 'What is 00:00 UTC in IST?', acceptedAnswer: { '@type': 'Answer', text: '00:00 UTC (midnight UTC) is 05:30 IST (5:30 AM India Standard Time). For developers: when working with UTC timestamps in Indian systems, add 5.5 hours (19,800 seconds) to get IST. UTC noon (12:00) = IST 17:30 (5:30 PM).' } },
  ],
}

export default function ISTtoUTC() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">IST to UTC Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">India Standard Time → Coordinated Universal Time · IST is <strong>5 hours 30 minutes ahead</strong> of UTC</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">IST vs UTC — Fixed Half-Hour Offset</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">IST (UTC+5:30)</strong> — India Standard Time, one of only a handful of half-hour UTC offsets in the world. No DST, fixed year-round. Used across the entire Indian subcontinent — India has a single national time zone.</p>
            <p><strong className="text-slate-700 dark:text-slate-200">UTC (UTC+0)</strong> — The world's primary time standard. All other zones are offset from UTC.</p>
            <p>The half-hour offset means IST conversions always produce :00 or :30 minutes — never :15 or :45. For tech teams: UTC midnight = 5:30 AM IST; UTC noon = 5:30 PM IST.</p>
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
