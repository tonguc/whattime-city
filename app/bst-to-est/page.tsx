import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'BST to EST — British Summer Time to Eastern Time Converter',
  description: 'Convert BST to EST instantly. British Summer Time (UTC+1) is 5 hours ahead of Eastern Standard Time (UTC-5). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/bst-to-est/' },
  openGraph: { title: 'BST to EST Converter — British Summer Time to Eastern', description: 'BST is 5 hours ahead of EST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/bst-to-est/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'BST to EST — British Summer Time to Eastern Time', description: 'BST is 5 hours ahead of EST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'BST',
  toAbbr: 'EST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/New_York',
  fromFullName: 'British Summer Time',
  toFullName: 'Eastern Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['New York, NY', 'Miami, FL', 'Boston, MA', 'Atlanta, GA', 'Washington D.C.', 'Philadelphia, PA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is BST ahead of EST?', acceptedAnswer: { '@type': 'Answer', text: 'BST (British Summer Time, UTC+1) is 5 hours ahead of EST (Eastern Standard Time, UTC-5). However, this comparison is slightly unusual: BST is the UK\'s summer time (active March–October), while EST is the US East Coast\'s winter time (active November–March). In summer when the US uses EDT (UTC-4), BST is only 5 hours ahead. When both zones are on summer time simultaneously (briefly in spring/autumn), the gap can be 5 or 4 hours.' } },
    { '@type': 'Question', name: 'What is 9 AM BST in EST/EDT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM BST (London summer) is 4:00 AM EST or 4:00 AM EDT (New York). The UK and US typically observe summer time simultaneously from mid-March to late October, during which BST (UTC+1) is 5 hours ahead of EDT (UTC-4). Outside US DST, BST is 6 hours ahead of EST (UTC-5).' } },
    { '@type': 'Question', name: 'What is the best time to call New York from London in summer?', acceptedAnswer: { '@type': 'Answer', text: 'The best overlap window between London (BST) and New York (EDT) in summer is 2:00–6:00 PM BST, which equals 9:00 AM–1:00 PM EDT. This gives New York a solid morning window while London is in mid-to-late afternoon.' } },
    { '@type': 'Question', name: 'What is the difference between GMT and BST?', acceptedAnswer: { '@type': 'Answer', text: 'GMT (Greenwich Mean Time) is UTC+0 and is used in the UK from late October to late March. BST (British Summer Time) is UTC+1 and is used from the last Sunday of March to the last Sunday of October. BST is the UK\'s Daylight Saving Time.' } },
  ],
}

export default function BSTtoEST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">BST to EST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">British Summer Time → Eastern Time · BST is <strong>5 hours ahead</strong> of EDT in summer</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">BST vs EST — London to New York in Summer</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">BST (British Summer Time)</strong> is UTC+1, active from the last Sunday of March to the last Sunday of October. Outside this window, the UK uses GMT (UTC+0).</p>
            <p><strong className="text-slate-700 dark:text-slate-200">EST (Eastern Standard Time)</strong> is UTC-5, used by New York in winter. In summer the US East Coast uses <strong>EDT (UTC-4)</strong>.</p>
            <p>The London–New York corridor is the world&apos;s most traded financial route. In summer, when both cities are on BST and EDT, the gap is 5 hours. The <strong>best overlap window</strong> is 2:00–6:00 PM BST / 9:00 AM–1:00 PM EDT.</p>
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
