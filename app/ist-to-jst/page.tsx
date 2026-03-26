import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to JST — India Standard Time to Japan Standard Time Converter',
  description: 'Convert IST to JST instantly. India Standard Time (UTC+5:30) is 3 hours 30 minutes behind Japan Standard Time (UTC+9). Live clocks and conversion table.',
  alternates: { canonical: 'https://whattime.city/ist-to-jst/' },
  openGraph: { title: 'IST to JST Converter — India to Japan', description: 'IST is 3:30 behind JST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/ist-to-jst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'IST to JST — India to Japan Standard Time', description: 'IST is 3:30 behind JST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'JST',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'Asia/Tokyo',
  fromFullName: 'India Standard Time',
  toFullName: 'Japan Standard Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
  toCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is IST behind JST?', acceptedAnswer: { '@type': 'Answer', text: 'IST (India Standard Time, UTC+5:30) is 3 hours 30 minutes behind JST (Japan Standard Time, UTC+9). Neither India nor Japan observes DST, so this gap is completely fixed throughout the year — always 3:30, never changing.' } },
    { '@type': 'Question', name: 'What is 9 AM IST in JST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM IST (Mumbai/Delhi) is 12:30 PM JST (Tokyo). Indian morning business hours (9 AM–1 PM IST) correspond to Japanese afternoon hours (12:30 PM–4:30 PM JST), making the India-to-Japan direction slightly more workable for morning IST standups.' } },
    { '@type': 'Question', name: 'What is the best time to call Tokyo from Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'The best window for Bangalore (IST) to Tokyo (JST) calls is 9:00 AM–1:00 PM IST = 12:30–4:30 PM JST. Indian morning hours reach Japan in the afternoon before the close of business. This is the standard window for India–Japan tech and automotive sector collaboration.' } },
    { '@type': 'Question', name: 'Do IST and JST ever have a different gap?', acceptedAnswer: { '@type': 'Answer', text: 'No. JST and IST are both fixed offsets with no DST. JST is always UTC+9 and IST is always UTC+5:30. The gap is always exactly 3 hours 30 minutes, 365 days a year — making JST↔IST one of the most predictable timezone pairs for scheduling.' } },
  ],
}

export default function ISTtoJST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">IST to JST Converter</h1>
      <p className="text-lg text-slate-600 mb-6">India Standard Time → Japan Standard Time · IST is <strong>3 hours 30 minutes behind</strong> JST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">IST vs JST — Bangalore to Tokyo</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p><strong className="text-slate-700">IST (UTC+5:30)</strong> — India Standard Time, fixed year-round. <strong className="text-slate-700">JST (UTC+9)</strong> — Japan Standard Time, fixed year-round.</p>
            <p>Both countries have no DST, making IST↔JST one of the world's most predictable timezone pairs. The 3:30 gap is permanent — no March/October recalculations needed.</p>
            <p>Best overlap: <strong>9:00 AM–1:00 PM IST = 12:30–4:30 PM JST</strong>. Indian mornings land in Japanese afternoons — a workable window for the growing India–Japan tech and manufacturing corridor.</p>
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
