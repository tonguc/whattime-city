import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to EST — Australia Eastern to US Eastern Time',
  description: 'Convert AEST to EST instantly. Australian Eastern Standard Time is 15 hours ahead of US EST (16h during AEDT). Live clocks, Sydney–New York call scheduling.',
  alternates: { canonical: 'https://whattime.city/aest-to-est' },
  openGraph: {
    title: 'AEST to EST — Australia Eastern to US Eastern Time',
    description: 'Convert AEST to EST instantly. Australian Eastern Standard Time is 15 hours ahead of US EST (16h during AEDT). Live clocks, Sydney–New York call scheduling.',
    type: 'website',
    url: 'https://whattime.city/aest-to-est',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEST to EST Converter',
    description: 'Convert AEST to EST instantly. Australian Eastern Standard Time is 15 hours ahead of US EST (16h during AEDT). Live clocks, Sydney–New York call scheduling.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'EST',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'America/New_York',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'US Eastern Standard Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Newcastle', 'Wollongong'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    "@type": "Question",
    "name": "How many hours ahead is AEST compared to US EST?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AEST (UTC+10) is 15 hours ahead of US EST (UTC-5). During Australian DST, AEDT (UTC+11) is 16 hours ahead of EST. During US EDT, AEST is 14 hours ahead."
    }
  },
  {
    "@type": "Question",
    "name": "When it is 9:00 AM in Sydney (AEST), what time is it in New York?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When it is 9:00 AM AEST in Sydney, it is 6:00 PM EST the previous day in New York. During EDT, 9:00 AM AEST = 7:00 PM EDT the prior evening."
    }
  },
  {
    "@type": "Question",
    "name": "What is the best time to call between Sydney and New York?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The most practical window is 7:00\u20139:00 AM EST (New York), which is 10:00 PM\u2013midnight AEST in Sydney. Alternatively, 5:00\u20137:00 PM AEST = 2:00\u20134:00 AM EST \u2014 which almost never works for business."
    }
  },
  {
    "@type": "Question",
    "name": "Does Brisbane (Queensland) observe daylight saving time?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Queensland stays on AEST (UTC+10) year-round. During Australian DST, Sydney and Melbourne move to AEDT (UTC+11) while Brisbane remains 1 hour behind them."
    }
  }
],
}

export default function AestToEstPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
        AEST to EST Converter
      </h1>
      <p className="text-lg text-slate-600 mb-6" dangerouslySetInnerHTML={{ __html: 'Australian Eastern Standard Time → US Eastern Standard Time · AEST is <strong>15 hours ahead</strong> of EST' }} />
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">AEST vs EST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: '<strong>Australian Eastern Standard Time (AEST)</strong> is UTC+10. During Australian DST (October–April), NSW, VIC, ACT, and TAS observe AEDT (UTC+11). Queensland stays on AEST year-round.' }} />
            <p dangerouslySetInnerHTML={{ __html: '<strong>US Eastern Standard Time (EST)</strong> is UTC-5 (EDT: UTC-4 from March to November).' }} />
            <p dangerouslySetInnerHTML={{ __html: 'The gap is 15h (AEST vs EST) to 16h (AEDT vs EST), making Australia–US East Coast one of the widest time zone gaps among major trading partners. The <strong>best window</strong> is <strong>7:00–9:00 AM EST = 10:00 PM–12:00 AM AEST</strong> — requiring Australian participants to work into the late evening.' }} />
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">Note on DST shift:</strong>
              <p className="text-amber-700 mt-1">Both regions observe DST but on opposite hemispheres: Australia (Oct–Apr) and the US (Mar–Nov). The gap is widest (16h) when Australia is in AEDT and the US is in EST simultaneously (November–March).</p>
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
