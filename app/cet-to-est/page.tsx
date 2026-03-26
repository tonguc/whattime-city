import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'CET to EST — Central European to Eastern Time Converter',
  description: 'Convert CET to EST instantly. Central European Time is 6 hours ahead of Eastern Standard Time. Live clocks, full conversion table, and Europe–US East Coast scheduling guide.',
  alternates: { canonical: 'https://whattime.city/cet-to-est' },
  openGraph: {
    title: 'CET to EST — Central European to Eastern Time Converter',
    description: 'CET is 6 hours ahead of EST. Live clocks, conversion table, and best overlap hours for Europe–US East Coast calls.',
    type: 'website',
    url: 'https://whattime.city/cet-to-est',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CET to EST Converter',
    description: 'CET is 6 hours ahead of EST. Live converter and full table.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'CET',
  toAbbr: 'EST',
  fromTimezone: 'Europe/Berlin',
  toTimezone: 'America/New_York',
  fromFullName: 'Central European Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['Frankfurt', 'Berlin', 'Paris', 'Amsterdam', 'Madrid', 'Rome', 'Vienna', 'Zurich'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours ahead is CET compared to EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET (UTC+1) is 6 hours ahead of EST (UTC-5). During summer, both Europe (CEST, UTC+2) and the US (EDT, UTC-4) observe daylight saving time, keeping the gap at 6 hours. However, brief 5-hour or 7-hour gaps occur during transition weeks in March and October when the two regions switch clocks on different dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM in Frankfurt (CET), what time is it in New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM CET in Frankfurt, it is 3:00 AM EST in New York. For a 9:00 AM New York start time, it is already 3:00 PM CET in Frankfurt — well into the European afternoon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Europe from New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best window for business calls between New York and CET cities (Frankfurt, Berlin, Paris) is 9:00 AM to 12:00 PM EST, which corresponds to 3:00 PM to 6:00 PM CET. This gives a 3-hour overlap during standard working hours on both sides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the CET to EST time difference ever change?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard difference is 6 hours. It briefly changes to 5 hours in mid-March when the US switches to EDT before Europe switches to CEST, and to 7 hours in late October when Europe switches back to CET before the US switches back to EST. These transitional gaps last about 1–2 weeks each.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries are in the CET time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CET covers most of continental Europe: Germany, France, Italy, Spain, Netherlands, Belgium, Austria, Switzerland, Poland, Czech Republic, Hungary, Slovakia, Slovenia, Croatia, Serbia, Bosnia, North Macedonia, Albania, Kosovo, Monaco, Luxembourg, Andorra, San Marino, and Vatican City.',
      },
    },
  ],
}

export default function CetToEstPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
        CET to EST Converter
      </h1>
      <p className="text-lg text-slate-600 mb-6" dangerouslySetInnerHTML={{ __html: 'Central European Time → Eastern Standard Time · CET is <strong>6 hours ahead</strong> of EST' }} />
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">CET vs EST — What You Need to Know</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: '<strong>Central European Time (CET)</strong> is UTC+1. During summer, it becomes <strong>CEST (UTC+2)</strong> when most of Europe observes Daylight Saving Time (last Sunday in March → last Sunday in October).' }} />
            <p dangerouslySetInnerHTML={{ __html: '<strong>Eastern Standard Time (EST)</strong> is UTC-5. During summer, it becomes <strong>EDT (UTC-4)</strong> from the second Sunday in March to the first Sunday in November.' }} />
            <p dangerouslySetInnerHTML={{ __html: 'The standard gap is <strong>6 hours</strong>. The best overlap for business calls is <strong>9 AM – 12 PM EST = 3 PM – 6 PM CET</strong> — a practical 3-hour window where both sides are comfortably within working hours.' }} />
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">DST transition gap:</strong>
              <p className="text-amber-700 mt-1">In mid-March, the US switches to EDT about 2 weeks before Europe switches to CEST — briefly creating a 5-hour gap. In late October, Europe switches back to CET 1 week before the US switches back to EST — briefly creating a 7-hour gap.</p>
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
