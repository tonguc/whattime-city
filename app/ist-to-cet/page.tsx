import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to CET — India Standard Time to Central European Time Converter',
  description: 'Convert IST to CET instantly. India Standard Time (UTC+5:30) is 4 hours 30 minutes ahead of Central European Time (UTC+1). Live clocks and conversion table.',
  alternates: { canonical: 'https://whattime.city/ist-to-cet/' },
  openGraph: { title: 'IST to CET Converter — India to Central Europe', description: 'IST is 4:30 ahead of CET. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/ist-to-cet/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'IST to CET — India Standard Time to Central Europe', description: 'IST is 4:30 ahead of CET. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'CET',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'Europe/Berlin',
  fromFullName: 'India Standard Time',
  toFullName: 'Central European Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
  toCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is IST ahead of CET?', acceptedAnswer: { '@type': 'Answer', text: 'IST (UTC+5:30) is 4 hours 30 minutes ahead of CET (UTC+1). During European summer (CEST, UTC+2), IST is 3 hours 30 minutes ahead. India does not observe DST, so the gap changes only when Europe shifts clocks.' } },
    { '@type': 'Question', name: 'What is 9 AM IST in CET?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM IST (India) is 4:30 AM CET (Frankfurt/Berlin). For Indian morning standups at 9 AM IST, European participants are still before 5 AM. The best IST–CET overlap is 1:30–5:30 PM IST = 9:00 AM–1:00 PM CET (winter) or 12:30–4:30 PM IST = 9:00 AM–1:00 PM CEST (summer).' } },
    { '@type': 'Question', name: 'What is the best time to call Europe from India?', acceptedAnswer: { '@type': 'Answer', text: 'The best window to call CET cities (Frankfurt, Berlin, Paris) from India is 1:30–5:30 PM IST in winter = 9:00 AM–1:00 PM CET. In summer (CEST): 12:30–4:30 PM IST = 9:00 AM–1:00 PM CEST. Indian afternoons align with European mornings — the ideal window for India–Europe calls.' } },
    { '@type': 'Question', name: 'Why is the IST to CET offset always a half-hour?', acceptedAnswer: { '@type': 'Answer', text: 'Because India uses UTC+5:30, a half-hour offset. CET is UTC+1 (a whole-hour offset). The difference between UTC+5:30 and UTC+1 is 4 hours 30 minutes — always producing a :30 result. Any IST-to-CET conversion will always end in :00 or :30 minutes, never :15 or :45.' } },
  ],
}

export default function ISTtoCET() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">IST to CET Converter</h1>
      <p className="text-lg text-slate-600 mb-6">India Standard Time → Central European Time · IST is <strong>4 hours 30 minutes ahead</strong> of CET</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">IST vs CET — India to Europe</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">IST (UTC+5:30)</strong> — India Standard Time, fixed year-round with no DST. One national time zone for the entire country.</p>
            <p><strong className="text-slate-700">CET (UTC+1)</strong> — Central European Time. Shifts to CEST (UTC+2) in summer (late March–late October).</p>
            <p>Best overlap: <strong>1:30–5:30 PM IST = 9:00 AM–1:00 PM CET</strong> (winter). Indian afternoons are consistently the prime window for Bangalore, Mumbai, or Delhi teams coordinating with Frankfurt, Berlin, or Paris.</p>
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
