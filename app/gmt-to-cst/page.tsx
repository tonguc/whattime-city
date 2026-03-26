import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'GMT to CST — Greenwich to Central Time Converter',
  description: 'Convert GMT to CST instantly. GMT is 6 hours ahead of Central Standard Time (CST, UTC-6). Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/gmt-to-cst/' },
  openGraph: { title: 'GMT to CST Converter — Greenwich to Central Time', description: 'GMT is 6 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/gmt-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'GMT to CST — Greenwich to Central Time', description: 'GMT is 6 hours ahead of CST. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'GMT',
  toAbbr: 'CST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/Chicago',
  fromFullName: 'Greenwich Mean Time',
  toFullName: 'Central Standard Time',
  fromCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Dakar'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is GMT ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'GMT is 6 hours ahead of CST (Central Standard Time, UTC-6) in winter. During US Daylight Saving Time (CDT, UTC-5), GMT is 5 hours ahead. During UK summer (BST, UTC+1), BST is 7 hours ahead of CST.' } },
    { '@type': 'Question', name: 'What is 12:00 GMT in CST?', acceptedAnswer: { '@type': 'Answer', text: '12:00 GMT is 6:00 AM CST (UTC-6) in winter, or 7:00 AM CDT (UTC-5) in summer. Subtract 6 hours from GMT to get CST, or subtract 5 hours for CDT.' } },
    { '@type': 'Question', name: 'What time is 9 AM CST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM CST is 15:00 GMT (3:00 PM). In CDT (US summer), 9:00 AM CDT is 14:00 GMT (2:00 PM).' } },
    { '@type': 'Question', name: 'What is the best overlap window for GMT and CST?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap window for London (GMT) and Chicago (CST) is 2:00–5:00 PM GMT, which is 8:00–11:00 AM CST. This gives both parties reasonable business hours — London is in mid-afternoon and Chicago is in the morning.' } },
  ],
}

export default function GMTtoCST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">GMT to CST Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Greenwich Mean Time → Central Standard Time · GMT is <strong>6 hours ahead</strong> of CST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">GMT vs CST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">GMT (Greenwich Mean Time)</strong> is UTC+0. London uses GMT in winter and BST (UTC+1) in British Summer Time from late March to late October.</p>
            <p><strong className="text-slate-700">CST (Central Standard Time)</strong> is UTC-6, covering Illinois, Texas, and Minnesota. From March to November it shifts to <strong>CDT (UTC-5)</strong>.</p>
            <p>London–Chicago is a key financial corridor. The 6-hour gap in winter means a 2:00 PM GMT call reaches Chicago at 8:00 AM CST — a solid morning start for Central Time.</p>
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
