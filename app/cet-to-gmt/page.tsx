import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to GMT — Central European Time to GMT Converter',
  description: 'Convert CET to GMT instantly. Central European Time (UTC+1) is 1 hour ahead of GMT (UTC+0). Live clocks, Europe–UK scheduling guide and conversion table.',
  alternates: { canonical: 'https://whattime.city/cet-to-gmt/' },
  openGraph: { title: 'CET to GMT Converter — Central Europe to UK', description: 'CET is 1 hour ahead of GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/cet-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'CET to GMT — Central European Time to GMT', description: 'CET is 1 hour ahead of GMT. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'GMT',
  fromTimezone: 'Europe/Berlin',
  toTimezone: 'Europe/London',
  fromFullName: 'Central European Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
  toCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is CET ahead of GMT?', acceptedAnswer: { '@type': 'Answer', text: 'CET (Central European Time, UTC+1) is 1 hour ahead of GMT (UTC+0). This 1-hour gap is consistent in winter. In summer, both regions observe daylight saving: CEST (UTC+2) is 1 hour ahead of BST (UTC+1), keeping the same 1-hour difference. The gap stays at 1 hour throughout the year.' } },
    { '@type': 'Question', name: 'What is 9 AM CET in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM CET is 8:00 AM GMT. Since the gap is only 1 hour, business hours overlap almost completely. A 9:00 AM Frankfurt meeting equals 8:00 AM London, and a 5:00 PM Berlin end of day equals 4:00 PM London.' } },
    { '@type': 'Question', name: 'Does the CET to GMT gap change in summer?', acceptedAnswer: { '@type': 'Answer', text: 'No. The 1-hour gap stays constant throughout the year. In winter, CET (UTC+1) is 1 hour ahead of GMT (UTC+0). In summer, CEST (UTC+2) is 1 hour ahead of BST (UTC+1). Both regions observe DST simultaneously, so the offset between them never changes.' } },
    { '@type': 'Question', name: 'What is the difference between CET and GMT for business?', acceptedAnswer: { '@type': 'Answer', text: 'The 1-hour difference means European CET cities (Frankfurt, Berlin, Paris, Amsterdam) are always just 1 hour ahead of London. This makes scheduling easy — any working hour in London is a working hour in Frankfurt. The London Stock Exchange and Frankfurt/Euronext exchanges have significant daily overlap.' } },
  ],
}

export default function CETtoGMT() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">CET to GMT Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Central European Time → Greenwich Mean Time · CET is <strong>1 hour ahead</strong> of GMT</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">CET vs GMT — Frankfurt to London</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">CET (UTC+1)</strong> — Central European Time, covering Germany, France, Italy, Spain, Netherlands, and ~20 more countries. Shifts to CEST (UTC+2) in summer.</p>
            <p><strong className="text-slate-700">GMT (UTC+0)</strong> — UK winter time. London uses BST (UTC+1) from late March to late October.</p>
            <p>With only 1 hour between them, CET and GMT cities share nearly identical working hours. The gap stays at 1 hour year-round, making Europe–UK scheduling the simplest of all cross-timezone combinations.</p>
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
