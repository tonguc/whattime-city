import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to MST — India Standard Time to Mountain Time Converter',
  description: 'Convert IST to MST instantly. India Standard Time (UTC+5:30) is 12 hours 30 minutes ahead of Mountain Standard Time (UTC-7). Live clocks and conversion table.',
  alternates: { canonical: 'https://whattime.city/ist-to-mst/' },
  openGraph: { title: 'IST to MST Converter — India to Mountain Time', description: 'IST is 12.5 hours ahead of MST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/ist-to-mst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'IST to MST — India Standard Time to Mountain Time', description: 'IST is 12.5 hours ahead of MST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'MST',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'America/Denver',
  fromFullName: 'India Standard Time',
  toFullName: 'Mountain Standard Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
  toCities: ['Denver, CO', 'Salt Lake City, UT', 'Albuquerque, NM', 'Tucson, AZ', 'Boise, ID', 'El Paso, TX'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is IST ahead of MST?', acceptedAnswer: { '@type': 'Answer', text: 'IST (India Standard Time, UTC+5:30) is 12 hours 30 minutes ahead of MST (Mountain Standard Time, UTC-7). During US Mountain Daylight Time (MDT, UTC-6), the difference is 11 hours 30 minutes. India does not observe DST, so the gap only changes when the US shifts clocks.' } },
    { '@type': 'Question', name: 'What is 9 AM IST in MST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM IST is 8:30 PM MST the previous evening in winter (12.5 hours behind). During MDT (US summer), 9:00 AM IST = 9:30 PM MDT the previous evening.' } },
    { '@type': 'Question', name: 'What is the best time to call Denver from India?', acceptedAnswer: { '@type': 'Answer', text: 'The best window to call Denver (MST) from India (IST) is 8:30 PM–11:30 PM IST, which reaches Denver at 8:00 AM–11:00 AM MST. In summer (MDT), call 7:30 PM–10:30 PM IST to reach Denver 8:00 AM–11:00 AM MDT.' } },
    { '@type': 'Question', name: 'Why does India have a 30-minute offset?', acceptedAnswer: { '@type': 'Answer', text: 'India uses UTC+5:30, a half-hour offset, because when India standardised its time zone in 1906 it chose a meridian at 82°30\'E that falls halfway between UTC+5 and UTC+6. This single national time zone was a political decision to unify the vast country under one time, despite spanning over 30 degrees of longitude.' } },
  ],
}

export default function ISTtoMST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">IST to MST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">India Standard Time → Mountain Standard Time · IST is <strong>12 hours 30 minutes ahead</strong> of MST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">IST vs MST — India to Rocky Mountains</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">IST (India Standard Time)</strong> is UTC+5:30, with no DST. India&apos;s half-hour offset makes it unique — conversions always involve :30 minutes.</p>
            <p><strong className="text-slate-700 dark:text-slate-200">MST (Mountain Standard Time)</strong> is UTC-7, covering Colorado, Utah, and Montana. It shifts to <strong>MDT (UTC-6)</strong> in summer.</p>
            <p>The 12.5-hour gap is most common in IT outsourcing (Bangalore or Hyderabad teams coordinating with Denver or Salt Lake City clients).</p>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
                <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-500 dark:text-slate-400">
        Timezone data sourced from <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">IANA Time Zone Database</a>. Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
