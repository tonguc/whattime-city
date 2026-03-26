import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'AEST to GMT — Australian Eastern to Greenwich Mean Time Converter',
  description: 'Convert AEST to GMT instantly. Australian Eastern Standard Time (UTC+10) is 10 hours ahead of GMT (UTC+0). Live clocks, Sydney–London scheduling guide.',
  alternates: { canonical: 'https://whattime.city/aest-to-gmt/' },
  openGraph: { title: 'AEST to GMT Converter — Australia to London', description: 'AEST is 10 hours ahead of GMT. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/aest-to-gmt/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'AEST to GMT — Australian Eastern to GMT', description: 'AEST is 10 hours ahead of GMT. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'AEST',
  toAbbr: 'GMT',
  fromTimezone: 'Australia/Sydney',
  toTimezone: 'Europe/London',
  fromFullName: 'Australian Eastern Standard Time',
  toFullName: 'Greenwich Mean Time',
  fromCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Newcastle', 'Wollongong'],
  toCities: ['London', 'Dublin', 'Lisbon', 'Reykjavik', 'Accra', 'Abuja'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is AEST ahead of GMT?', acceptedAnswer: { '@type': 'Answer', text: 'AEST (Australian Eastern Standard Time, UTC+10) is 10 hours ahead of GMT (UTC+0). During Australian DST (AEDT, UTC+11), the gap increases to 11 hours. During UK BST (UTC+1), AEST is only 9 hours ahead. The gap fluctuates between 9 and 11 hours across the year as both regions shift clocks in opposite seasons.' } },
    { '@type': 'Question', name: 'What is 9 AM AEST in GMT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM AEST (Sydney) is 11:00 PM GMT the previous night. This means Sydney mornings overlap only with London late evenings. The best practical window is 7:00–9:00 PM AEST = 9:00–11:00 AM GMT, catching London\'s morning while Sydney wraps up its business day.' } },
    { '@type': 'Question', name: 'What is the best time to schedule a Sydney–London call?', acceptedAnswer: { '@type': 'Answer', text: 'In winter (GMT/AEST): 7:00–9:00 PM AEST = 9:00–11:00 AM GMT. In summer (BST/AEDT): 8:00–10:00 PM AEDT = 9:00–11:00 AM BST. Sydney late afternoon to evening is the prime window for catching London\'s morning business hours.' } },
    { '@type': 'Question', name: 'Does the AEST to GMT gap change throughout the year?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The gap changes when either region shifts clocks. Australia (AEST → AEDT) shifts in October and back in April. The UK (GMT → BST) shifts in late March and back in late October. The standard 10-hour gap (AEST/GMT) can shrink to 9 hours (AEST/BST in UK summer) or grow to 11 hours (AEDT/GMT in Australian summer).' } },
  ],
}

export default function AESTtoGMT() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">AEST to GMT Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Australian Eastern Standard Time → Greenwich Mean Time · AEST is <strong>10 hours ahead</strong> of GMT</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">AEST vs GMT — Sydney to London</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">AEST (UTC+10)</strong> — Australian Eastern Standard Time. NSW, VIC, ACT, and TAS observe AEDT (UTC+11) in Southern Hemisphere summer (October–April). Queensland remains on AEST year-round.</p>
            <p><strong className="text-slate-700 dark:text-slate-200">GMT (UTC+0)</strong> — UK winter time. London uses BST (UTC+1) from late March to late October.</p>
            <p>The Sydney–London corridor spans roughly half the globe. The overlap window is narrow: <strong>7:00–9:00 PM AEST = 9:00–11:00 AM GMT</strong> in winter. This is the most common window for Australia–UK business calls and financial trading desk handoffs.</p>
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
