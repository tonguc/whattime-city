import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'UTC to JST — UTC to Japan Standard Time Converter',
  description: 'Convert UTC to JST instantly. UTC is 9 hours behind Japan Standard Time (UTC+9). Live clocks, full conversion table, and JST offset reference for developers.',
  alternates: { canonical: 'https://whattime.city/utc-to-jst/' },
  openGraph: { title: 'UTC to JST Converter — UTC to Japan Standard Time', description: 'UTC is 9 hours behind JST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/utc-to-jst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'UTC to JST — UTC to Japan Standard Time', description: 'UTC is 9 hours behind JST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'UTC',
  toAbbr: 'JST',
  fromTimezone: 'UTC',
  toTimezone: 'Asia/Tokyo',
  fromFullName: 'Coordinated Universal Time',
  toFullName: 'Japan Standard Time',
  fromCities: ['UTC Reference', 'London (winter)', 'Reykjavik', 'Accra', 'Abidjan', 'Dakar'],
  toCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I convert UTC to JST?', acceptedAnswer: { '@type': 'Answer', text: 'To convert UTC to JST, add 9 hours. Examples: 00:00 UTC = 09:00 JST. 06:00 UTC = 15:00 JST. 12:00 UTC = 21:00 JST. 18:00 UTC = 03:00 JST (next day). Japan does not observe Daylight Saving Time, so this +9 hours formula never changes throughout the year.' } },
    { '@type': 'Question', name: 'What is midnight UTC in JST?', acceptedAnswer: { '@type': 'Answer', text: '00:00 UTC (midnight) is 09:00 JST (9:00 AM Japan Standard Time). UTC midnight marks a new calendar day in UTC, while Tokyo is already 9 hours into its morning. For server logs and API timestamps in UTC, Tokyo time is always 9 hours ahead.' } },
    { '@type': 'Question', name: 'What is JST UTC offset?', acceptedAnswer: { '@type': 'Answer', text: 'JST is UTC+9. Japan Standard Time is fixed at 9 hours ahead of UTC year-round with no exceptions. Japan abolished Daylight Saving Time in 1952 and has not observed it since. The IANA timezone identifier is Asia/Tokyo.' } },
    { '@type': 'Question', name: 'How do developers handle UTC to JST conversion?', acceptedAnswer: { '@type': 'Answer', text: 'In code, UTC to JST is: add 9 hours (32,400 seconds). In JavaScript: new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }). In Python: datetime.now(timezone.utc).astimezone(ZoneInfo("Asia/Tokyo")). Since there is no DST, a static +9h offset is always accurate for Japan.' } },
  ],
}

export default function UTCtoJST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">UTC to JST Converter</h1>
      <p className="text-lg text-slate-600 mb-6">Coordinated Universal Time → Japan Standard Time · UTC is <strong>9 hours behind</strong> JST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">UTC vs JST — Converting to Japan Time</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">UTC (UTC+0)</strong> — The world's primary time standard, used in software, aviation, and international communications.</p>
            <p><strong className="text-slate-700">JST (UTC+9)</strong> — Japan Standard Time. Fixed offset with no DST — the same year-round. One of the most stable and developer-friendly time zones globally.</p>
            <p>Quick reference: UTC + 9h = JST. UTC midnight = 9 AM JST. UTC noon = 9 PM JST. Japanese business hours (9 AM–6 PM JST) correspond to UTC 00:00–09:00.</p>
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
