import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'UTC to IST — UTC to India Standard Time Converter',
  description: 'Convert UTC to IST instantly. UTC is 5 hours 30 minutes behind India Standard Time (UTC+5:30). Live clocks, full conversion table, and IST offset reference.',
  alternates: { canonical: 'https://whattime.city/utc-to-ist/' },
  openGraph: { title: 'UTC to IST Converter — UTC to India Standard Time', description: 'UTC is 5:30 behind IST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/utc-to-ist/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'UTC to IST — UTC to India Standard Time', description: 'UTC is 5:30 behind IST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'UTC',
  toAbbr: 'IST',
  fromTimezone: 'UTC',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Coordinated Universal Time',
  toFullName: 'India Standard Time',
  fromCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I convert UTC to IST?', acceptedAnswer: { '@type': 'Answer', text: 'To convert UTC to IST, add 5 hours and 30 minutes. Examples: 00:00 UTC = 05:30 IST. 06:00 UTC = 11:30 IST. 12:00 UTC = 17:30 IST. 18:00 UTC = 23:30 IST. India does not observe DST, so this conversion is always the same regardless of time of year.' } },
    { '@type': 'Question', name: 'What is 9 AM UTC in IST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM UTC is 2:30 PM IST. A 9 AM UTC meeting means Indian participants are already in mid-afternoon. For morning IST hours: IST 9:00 AM = UTC 3:30 AM, and IST business hours (9 AM–6 PM) correspond to UTC 3:30 AM–12:30 PM.' } },
    { '@type': 'Question', name: 'What time is it in India when it is midnight UTC?', acceptedAnswer: { '@type': 'Answer', text: 'Midnight UTC (00:00) is 5:30 AM IST in India. This is early morning in India — before most business hours begin. UTC midnight marks the start of a new calendar day in UTC, while India is already 5.5 hours into its day.' } },
    { '@type': 'Question', name: 'Is IST the same as UTC+5:30?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. IST (India Standard Time) is exactly UTC+5:30. There is no DST in India, so IST is always UTC+5:30 throughout the year. India is one of the few countries with a 30-minute (non-integer) UTC offset, along with Iran, Afghanistan, India, Sri Lanka, Myanmar, and a few others.' } },
  ],
}

export default function UTCtoIST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">UTC to IST Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Coordinated Universal Time → India Standard Time · UTC is <strong>5 hours 30 minutes behind</strong> IST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">UTC vs IST — Converting to India Time</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">UTC (UTC+0)</strong> — Coordinated Universal Time, the world's primary time standard. Used in aviation, software, finance, and international communications.</p>
            <p><strong className="text-slate-700">IST (UTC+5:30)</strong> — India Standard Time, a fixed half-hour offset. No DST. The entire country of India — from Mumbai to Kolkata — uses the same single time zone.</p>
            <p>Quick reference: UTC + 5:30 = IST. IST business hours (9 AM–6 PM IST) = UTC 3:30 AM–12:30 PM. Teams working across UTC and IST often schedule standups at UTC 4:00–5:00 AM = IST 9:30–10:30 AM.</p>
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
