import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'IST to EST — India to Eastern Time Converter',
  description: 'Convert IST to EST instantly. India Standard Time is 10.5 hours ahead of EST (9.5 hours during EDT). Live clocks, conversion table, and India-US call scheduling.',
  alternates: { canonical: 'https://whattime.city/ist-to-est' },
  openGraph: {
    title: 'IST to EST Converter — India to Eastern Time',
    description: 'IST is 10.5 hours ahead of EST. Live clocks, conversion table, and best India-US meeting times.',
    type: 'website',
    url: 'https://whattime.city/ist-to-est',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IST to EST — India to Eastern Time',
    description: 'IST is 10.5 hours ahead of EST. Live converter.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'IST',
  toAbbr: 'EST',
  fromTimezone: 'Asia/Kolkata',
  toTimezone: 'America/New_York',
  fromFullName: 'India Standard Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours ahead is IST compared to EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IST (India Standard Time, UTC+5:30) is 10.5 hours ahead of EST (UTC-5) during US standard time, and 9.5 hours ahead during EDT (UTC-4). India does not observe Daylight Saving Time, so the difference shifts by 1 hour when the US switches between standard and daylight time.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM IST, what time is it EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM IST, it is 10:30 PM EST the previous day (during US standard time) or 11:30 PM EDT (during US daylight time). India business hours largely do not overlap with US East Coast business hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for a call between India (IST) and New York (EST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The only practical overlap window is 6:30 PM to 8:30 PM IST (8:00 AM to 10:00 AM EST during standard time). This requires Indian participants to stay late. Alternatively, early IST morning calls (7:30–8:30 AM IST) correspond to late US evening (9–10 PM EST the previous night), which rarely works for business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does IST observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. India does not observe Daylight Saving Time. IST remains at UTC+5:30 year-round. This means the IST-to-EST time difference changes twice per year: it is 10.5 hours during US standard time (November–March) and 9.5 hours during US daylight time (March–November).',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does India have a 30-minute UTC offset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India uses UTC+5:30 (a half-hour offset) to better reflect the geographic center of the country. When India standardized its timezone in 1947, a compromise was made between the eastern regions (closer to UTC+6) and western regions (closer to UTC+5). This makes IST unique among major economies for its non-whole-hour offset.',
      },
    },
  ],
}

export default function ISTtoESTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
          IST to EST Converter
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          India Standard Time → Eastern Standard Time · IST is <strong>10.5 hours ahead</strong> of EST
        </p>
        <TZPairClient config={config} />
        <section className="mt-4 mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">IST vs EST — What You Need to Know</h2>
            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700">India Standard Time (IST)</strong> is UTC+5:30 — a half-hour offset that applies uniformly
              across all of India. India does not observe DST. IST is used in Mumbai, Delhi, Bangalore, and every other Indian city.
            </p>
            <p>
              <strong className="text-slate-700">Eastern Standard Time (EST)</strong> is UTC-5 (EDT: UTC-4 in summer).
            </p>
            <p>
              With a 10.5-hour gap, India and the US East Coast have <strong>minimal business-hours overlap</strong>.
              The standard strategy for India-US teams is the <strong>"end of India day / start of US day"</strong> window:
              6:30–8:00 PM IST = 8:00–9:30 AM EST.
            </p>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">Note on DST shift:</strong>
              <p className="text-amber-700 mt-1">
                The gap changes when the US observes DST (March–November): 10.5h → 9.5h.
                India stays at UTC+5:30 year-round, so the overlap window shifts by 1 hour during US summer.
              </p>
            </div>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4">
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
