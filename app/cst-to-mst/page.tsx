import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CST to MST — Central to Mountain Time Converter',
  description: 'Convert CST to MST instantly. Central Standard Time is 1 hour ahead of Mountain Standard Time. Live clocks, conversion table, and business hours overlap.',
  alternates: { canonical: 'https://whattime.city/cst-to-mst/' },
  openGraph: { title: 'CST to MST Time Converter — Central to Mountain', description: 'CST is 1 hour ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cst-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CST to MST — Central to Mountain Time', description: 'CST is 1 hour ahead of MST. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CST',
  toAbbr: 'MST',
  fromTimezone: 'America/Chicago',
  toTimezone: 'America/Denver',
  fromFullName: 'Central Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is CST ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'CST (Central Standard Time, UTC-6) is 1 hour ahead of MST (Mountain Standard Time, UTC-7). Both zones observe DST on the same dates, keeping the 1-hour gap constant year-round.' } },
    { '@type': 'Question', name: 'When it is 9 AM CST, what time is it MST?', acceptedAnswer: { '@type': 'Answer', text: 'When it is 9:00 AM CST, it is 8:00 AM MST. CST is always 1 hour ahead of MST.' } },
    { '@type': 'Question', name: 'What is the time difference between Chicago and Denver?', acceptedAnswer: { '@type': 'Answer', text: 'Chicago (Central Time) is 1 hour ahead of Denver (Mountain Time) year-round. Both cities observe Daylight Saving Time simultaneously, maintaining the constant 1-hour difference.' } },
  ],
}

export default function CSTtoMST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">CST to MST Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Central Standard Time → Mountain Standard Time · CST is <strong>1 hour ahead</strong> of MST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">CST vs MST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">CST (Central Standard Time)</strong> is UTC-6, covering Illinois, Texas, Minnesota and Louisiana. In summer it becomes <strong>CDT (UTC-5)</strong>.</p>
            <p><strong className="text-slate-700">MST (Mountain Standard Time)</strong> is UTC-7, covering Colorado, Utah, Montana and New Mexico. In summer it becomes <strong>MDT (UTC-6)</strong>.</p>
            <p>The 1-hour gap is constant. A 9 AM Denver meeting is 10 AM in Chicago — easy cross-timezone coordination.</p>
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
