import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'JST to EST — Japan to Eastern Time Converter',
  description: 'Convert JST to EST instantly. Japan Standard Time is 14 hours ahead of EST (13 during EDT). Live clocks, conversion table, Japan–US East Coast scheduling.',
  alternates: { canonical: 'https://whattime.city/jst-to-est' },
  openGraph: {
    title: 'JST to EST — Japan to Eastern Time Converter',
    description: 'Convert JST to EST instantly. Japan Standard Time is 14 hours ahead of EST (13 during EDT). Live clocks, conversion table, Japan–US East Coast scheduling.',
    type: 'website',
    url: 'https://whattime.city/jst-to-est',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JST to EST Converter',
    description: 'Convert JST to EST instantly. Japan Standard Time is 14 hours ahead of EST (13 during EDT). Live clocks, conversion table, Japan–US East Coast scheduling.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'JST',
  toAbbr: 'EST',
  fromTimezone: 'Asia/Tokyo',
  toTimezone: 'America/New_York',
  fromFullName: 'Japan Standard Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo', 'Fukuoka'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    "@type": "Question",
    "name": "How many hours ahead is JST compared to EST?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JST (UTC+9) is 14 hours ahead of EST (UTC-5) during US standard time, and 13 hours ahead during EDT (UTC-4). Japan does not observe DST."
    }
  },
  {
    "@type": "Question",
    "name": "When it is 9:00 AM in Tokyo (JST), what time is it in New York?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When it is 9:00 AM JST, it is 7:00 PM EST the previous day (19:00). During EDT, 9:00 AM JST = 8:00 PM EDT the previous day."
    }
  },
  {
    "@type": "Question",
    "name": "What is the best time to call between Japan and the US East Coast?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The most practical window is 8:00\u201311:00 PM EST (New York time), which corresponds to 10:00 AM\u20131:00 PM JST next day in Tokyo. This requires US participants to work evening hours."
    }
  },
  {
    "@type": "Question",
    "name": "Does Japan observe Daylight Saving Time?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Japan abolished DST in 1952 and has not used it since. JST is fixed at UTC+9 year-round, so the time difference with DST-observing countries changes twice per year."
    }
  }
],
}

export default function JstToEstPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
        JST to EST Converter
      </h1>
      <p className="text-lg text-slate-600 mb-6" dangerouslySetInnerHTML={{ __html: 'Japan Standard Time → Eastern Standard Time · JST is <strong>14 hours ahead</strong> of EST' }} />
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">JST vs EST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: '<strong>Japan Standard Time (JST)</strong> is UTC+9. Japan does not observe Daylight Saving Time — JST is fixed year-round.' }} />
            <p dangerouslySetInnerHTML={{ __html: '<strong>Eastern Standard Time (EST)</strong> is UTC-5 (EDT: UTC-4 from March to November).' }} />
            <p dangerouslySetInnerHTML={{ __html: 'The 14-hour gap makes Japan–US East Coast scheduling challenging. The <strong>best overlap window</strong> is the evening in New York aligning with the Japan morning: <strong>8:00–11:00 PM EST = 10:00 AM–1:00 PM JST next day</strong>. Alternatively, Japan end-of-day (5:00–7:00 PM JST) = 3:00–5:00 AM EST, which rarely works.' }} />
            <p dangerouslySetInnerHTML={{ __html: 'Japanese business with the US East Coast relies heavily on early-morning calls in New York.' }} />
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">Note on DST shift:</strong>
              <p className="text-amber-700 mt-1">The gap changes when the US observes EDT (March–November): 14h → 13h. Japan stays at UTC+9 year-round with no DST.</p>
            </div>
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
