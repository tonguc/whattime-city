import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to UTC — Japan Standard Time to UTC Converter',
  description: 'Convert JST to UTC instantly. Japan Standard Time (UTC+9) is 9 hours ahead of UTC. Live clocks, full conversion table, and JST offset reference.',
  alternates: { canonical: 'https://whattime.city/jst-to-utc/' },
  openGraph: { title: 'JST to UTC Converter — Japan Standard Time to UTC', description: 'JST is 9 hours ahead of UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/jst-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'JST to UTC — Japan Standard Time to UTC', description: 'JST is 9 hours ahead of UTC. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'UTC',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'UTC',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
  toCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is JST in UTC?', acceptedAnswer: { '@type': 'Answer', text: 'JST (Japan Standard Time) is UTC+9. Japan is 9 hours ahead of UTC at all times. Japan does not observe Daylight Saving Time, making JST one of the most stable and predictable offsets globally — always exactly UTC+9, year-round.' } },
    { '@type': 'Question', name: 'How do I convert JST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert JST to UTC, subtract 9 hours. For example: 9:00 AM JST = 12:00 AM (midnight) UTC. 6:00 PM JST = 9:00 AM UTC. 12:00 PM (noon) JST = 3:00 AM UTC. Since Japan does not observe DST, this formula never changes.' } },
    { '@type': 'Question', name: 'Why does Japan not observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Japan abolished Daylight Saving Time in 1952, after a brief post-WWII experiment. Cultural and practical reasons cited include: Japan\'s latitude means daylight hours vary less than in Europe or North America; the disruption to train schedules was significant; and public opposition was strong. Japan has not observed DST since.' } },
    { '@type': 'Question', name: 'What is 00:00 UTC in JST?', acceptedAnswer: { '@type': 'Answer', text: '00:00 UTC (midnight UTC) is 09:00 JST (9:00 AM Japan Standard Time). Server timestamps in UTC+0 are exactly 9 hours behind Tokyo local time. For developers: to convert UTC epoch to JST, add 9 hours (or 32,400 seconds).' } },
  ],
}

export default function JSTtoUTC() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">JST to UTC Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Japan Standard Time → Coordinated Universal Time · JST is <strong>9 hours ahead</strong> of UTC</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">JST vs UTC — Fixed Offset, No DST</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">JST (UTC+9)</strong> — Japan Standard Time is one of the world's most stable offsets. No DST, no seasonal changes — always exactly 9 hours ahead of UTC.</p>
            <p><strong className="text-slate-700">UTC (UTC+0)</strong> — The world's primary time standard, maintained by atomic clocks. All other timezones are defined as offsets from UTC.</p>
            <p>For developers and engineers working with Japanese APIs or databases: JST = UTC + 9h. Midnight UTC is 9:00 AM JST. Common in server log analysis and cross-timezone scheduling.</p>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500">
        Timezone data sourced from <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>. Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
