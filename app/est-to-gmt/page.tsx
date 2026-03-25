import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'EST to GMT — Eastern to Greenwich Time Converter',
  description: 'Convert EST to GMT instantly. Eastern Standard Time is 5 hours behind GMT. Live clocks, full conversion table, and US–UK business hours overlap guide.',
  alternates: { canonical: 'https://whattime.city/est-to-gmt' },
  openGraph: {
    title: 'EST to GMT Time Converter — Eastern to Greenwich',
    description: 'EST is 5 hours behind GMT. Live clocks and full conversion table.',
    type: 'website',
    url: 'https://whattime.city/est-to-gmt',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EST to GMT — Eastern to Greenwich Time',
    description: 'EST is 5 hours behind GMT. Live converter.',
  },
}

const config: TZPairConfig = {
  fromAbbr: 'EST',
  toAbbr: 'GMT',
  fromTimezone: 'America/New_York',
  toTimezone: 'Europe/London',
  fromFullName: 'Eastern Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Toronto, Canada'],
  toCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Abidjan'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours behind is EST compared to GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EST (UTC-5) is 5 hours behind GMT (UTC+0) during standard time. During US Daylight Saving Time, EDT (UTC-4) is 4 hours behind GMT. When the UK is on BST (UTC+1), EST is 6 hours behind. The actual difference depends on which DST periods are active.',
      },
    },
    {
      '@type': 'Question',
      name: 'When it is 9:00 AM EST, what time is it in London (GMT)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When it is 9:00 AM EST, it is 2:00 PM GMT (during UK standard time). During British Summer Time (BST), London is at UTC+1, so 9:00 AM EST = 3:00 PM BST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for a New York to London call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best window is 9:00 AM to 12:00 PM EST (2:00–5:00 PM GMT). London business hours end around 6 PM GMT (1 PM EST), giving only a 4-hour daily overlap. Schedule calls for morning New York time to catch London before close of business.',
      },
    },
  ],
}

export default function ESTtoGMTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
          EST to GMT Converter
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Eastern Standard Time → Greenwich Mean Time · EST is <strong>5 hours behind</strong> GMT
        </p>
        <TZPairClient config={config} />
        <section className="mt-4 mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">EST vs GMT — What You Need to Know</h2>
            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-700">EST (UTC-5)</strong> is the US East Coast in winter.
              Summer: <strong>EDT (UTC-4)</strong>.
            </p>
            <p>
              <strong className="text-slate-700">GMT (UTC+0)</strong> is London in winter.
              Summer: <strong>BST (UTC+1)</strong>.
            </p>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">
              <strong className="text-amber-700">2026 shifting gap:</strong>
              <ul className="mt-1 list-disc list-inside text-amber-700 space-y-1">
                <li>Before March 8: EST vs GMT → <strong>5h</strong></li>
                <li>March 8–29 (US on EDT, UK still GMT): <strong>4h</strong></li>
                <li>March 29 – Oct 25 (both on summer time): <strong>5h</strong></li>
                <li>Oct 25 – Nov 1 (UK on GMT, US still EDT): <strong>4h</strong></li>
                <li>After Nov 1: EST vs GMT → <strong>5h</strong></li>
              </ul>
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
