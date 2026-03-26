import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to UTC — Mountain Time to UTC Converter',
  description: 'Convert MST to UTC instantly. Mountain Standard Time (UTC-7) is 7 hours behind UTC. Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/mst-to-utc/' },
  openGraph: { title: 'MST to UTC Converter — Mountain Time to Universal Time', description: 'MST is 7 hours behind UTC. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/mst-to-utc/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'MST to UTC — Mountain Time to Universal Time', description: 'MST is 7 hours behind UTC. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'UTC',
  fromTimezone: 'America/Denver',
  toTimezone: 'UTC',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Coordinated Universal Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
  toCities: ['London (winter)', 'Reykjavik', 'Dakar', 'Accra', 'Dublin (winter)', 'Lisbon (winter)'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I convert MST to UTC?', acceptedAnswer: { '@type': 'Answer', text: 'To convert MST to UTC: add 7 hours. Example: 9:00 AM MST = 16:00 UTC (4:00 PM UTC). During MDT (US summer, UTC-6), add only 6 hours: 9:00 AM MDT = 15:00 UTC.' } },
    { '@type': 'Question', name: 'What is 9 AM MST in UTC?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM MST is 16:00 UTC (4:00 PM UTC). During MDT (summer), 9:00 AM MDT is 15:00 UTC (3:00 PM UTC).' } },
    { '@type': 'Question', name: 'What is the MST UTC offset?', acceptedAnswer: { '@type': 'Answer', text: 'MST (Mountain Standard Time) has a UTC offset of UTC-7, meaning it is 7 hours behind Coordinated Universal Time. During Daylight Saving Time, Mountain Time uses MDT (UTC-6). Arizona stays at UTC-7 year-round.' } },
  ],
}

export default function MSTtoUTC() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">MST to UTC Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Mountain Standard Time → Coordinated Universal Time · MST is <strong>7 hours behind</strong> UTC</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">MST vs UTC — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">MST (UTC-7)</strong> covers the Rocky Mountain US states. In summer it becomes <strong>MDT (UTC-6)</strong> — except Arizona (no DST, always UTC-7).</p>
            <p><strong className="text-slate-700">UTC</strong> is the global time standard used in servers and APIs. A 9 AM MST start equals 16:00 UTC in winter.</p>
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
