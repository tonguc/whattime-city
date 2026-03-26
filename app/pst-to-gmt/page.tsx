import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'PST to GMT — Pacific Time to Greenwich Time Converter',
  description: 'Convert PST to GMT instantly. Pacific Standard Time (UTC-8) is 8 hours behind GMT. Live clocks, full conversion table, and hourly reference.',
  alternates: { canonical: 'https://whattime.city/pst-to-gmt/' },
  openGraph: { title: 'PST to GMT Converter — Pacific to Greenwich Time', description: 'PST is 8 hours behind GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/pst-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'PST to GMT — Pacific to Greenwich Time', description: 'PST is 8 hours behind GMT. Live converter and full table.' },
}

const config: TZPairConfig = {
  fromAbbr: 'PST',
  toAbbr: 'GMT',
  fromTimezone: 'America/Los_Angeles',
  toTimezone: 'Europe/London',
  fromFullName: 'Pacific Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
  toCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Dakar'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I convert PST to GMT?', acceptedAnswer: { '@type': 'Answer', text: 'To convert PST to GMT: add 8 hours. Example: 9:00 AM PST = 17:00 GMT. During PDT (US summer), add 7 hours: 9:00 AM PDT = 16:00 GMT. During UK summer (BST), London is UTC+1, so PST is 9 hours behind BST.' } },
    { '@type': 'Question', name: 'What is 9 AM PST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM PST is 17:00 GMT (5:00 PM GMT). During US Pacific Daylight Time (PDT), 9:00 AM PDT is 16:00 GMT (4:00 PM). Note: during UK summer London uses BST (UTC+1), not GMT.' } },
    { '@type': 'Question', name: 'What is the PST offset from GMT?', acceptedAnswer: { '@type': 'Answer', text: 'PST (Pacific Standard Time) is GMT-8, or 8 hours behind GMT. During Daylight Saving Time the West Coast uses PDT (GMT-7). GMT itself has no DST, but London switches to BST (GMT+1) in summer.' } },
    { '@type': 'Question', name: 'What time is noon PST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '12:00 PM (noon) PST is 20:00 GMT (8:00 PM GMT). In PDT (summer), noon PDT is 19:00 GMT (7:00 PM).' } },
  ],
}

export default function PSTtoGMT() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">PST to GMT Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Pacific Standard Time → Greenwich Mean Time · PST is <strong>8 hours behind</strong> GMT</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">PST vs GMT — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">PST (Pacific Standard Time)</strong> is UTC-8 / GMT-8, used by the US West Coast from November to March. During summer it shifts to <strong>PDT (UTC-7)</strong>.</p>
            <p><strong className="text-slate-700">GMT (Greenwich Mean Time)</strong> is UTC+0. London uses GMT in winter and <strong>BST (UTC+1)</strong> in summer from late March to late October.</p>
            <p>West Coast tech companies (Silicon Valley, Seattle) frequently coordinate with London. A 9:00 AM PST standup hits London at 5:00 PM GMT — end of business, but still reachable.</p>
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
