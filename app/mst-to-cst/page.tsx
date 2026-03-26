import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'MST to CST — Mountain to Central Time Converter',
  description: 'Convert MST to CST instantly. Mountain Standard Time is 1 hour behind Central Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/mst-to-cst/' },
  openGraph: { title: 'MST to CST Time Converter — Mountain to Central', description: 'MST is 1 hour behind CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/mst-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'MST to CST — Mountain to Central Time', description: 'MST is 1 hour behind CST. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'MST',
  toAbbr: 'CST',
  fromTimezone: 'America/Denver',
  toTimezone: 'America/Chicago',
  fromFullName: 'Mountain Standard Time',
  toFullName: 'Central Standard Time',
  fromCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is MST behind CST?', acceptedAnswer: { '@type': 'Answer', text: 'MST (Mountain Standard Time, UTC-7) is 1 hour behind CST (Central Standard Time, UTC-6). Both zones observe DST on the same dates, so the 1-hour difference stays constant year-round.' } },
    { '@type': 'Question', name: 'When it is 9 AM MST, what time is it CST?', acceptedAnswer: { '@type': 'Answer', text: 'When it is 9:00 AM MST, it is 10:00 AM CST. MST is always 1 hour behind CST.' } },
    { '@type': 'Question', name: 'What is the time difference between Denver and Chicago?', acceptedAnswer: { '@type': 'Answer',text: 'Chicago (Central Time) is 1 hour ahead of Denver (Mountain Time) year-round. Both cities shift clocks simultaneously for DST, keeping the gap at exactly 1 hour.' } },
  ],
}

export default function MSTtoCST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">MST to CST Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Mountain Standard Time → Central Standard Time · MST is <strong>1 hour behind</strong> CST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">MST vs CST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">MST (Mountain Standard Time)</strong> is UTC-7, covering Colorado, Utah, and Montana. In summer it becomes <strong>MDT (UTC-6)</strong>.</p>
            <p><strong className="text-slate-700">CST (Central Standard Time)</strong> is UTC-6, covering Illinois, Texas, and Louisiana. In summer it becomes <strong>CDT (UTC-5)</strong>.</p>
            <p>Denver to Chicago is 1 hour — among the easiest US cross-timezone gaps to manage.</p>
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
