import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'BST to CST — British Summer Time to Central Time Converter',
  description: 'Convert BST to CST instantly. British Summer Time (UTC+1) is 6 hours ahead of Central Standard Time (UTC-6). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/bst-to-cst/' },
  openGraph: { title: 'BST to CST Converter — British Summer Time to Central', description: 'BST is 6 hours ahead of CST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/bst-to-cst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'BST to CST — British Summer Time to Central Time', description: 'BST is 6 hours ahead of CST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'BST',
  toAbbr: 'CST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/Chicago',
  fromFullName: 'British Summer Time',
  toFullName: 'Central Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['Chicago, IL', 'Houston, TX', 'Dallas, TX', 'Minneapolis, MN', 'Kansas City, MO', 'New Orleans, LA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is BST ahead of CST?', acceptedAnswer: { '@type': 'Answer', text: 'BST (British Summer Time, UTC+1) is 6 hours ahead of CST (Central Standard Time, UTC-6). During US Central Daylight Time (CDT, UTC-5), BST is 6 hours ahead. The gap stays at 6 hours throughout summer when both zones observe daylight saving simultaneously.' } },
    { '@type': 'Question', name: 'What is 9 AM BST in CST/CDT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM BST is 3:00 AM CST or 3:00 AM CDT. The best overlap is 3:00–5:00 PM BST = 9:00–11:00 AM CDT in summer.' } },
    { '@type': 'Question', name: 'What is the best overlap for London (BST) and Chicago (CDT)?', acceptedAnswer: { '@type': 'Answer', text: 'In summer, the best BST–CDT overlap is 3:00–6:00 PM BST = 9:00 AM–12:00 PM CDT. This gives Chicago a morning window while London is in mid-to-late afternoon.' } },
  ],
}

export default function BSTtoCST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">BST to CST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">British Summer Time → Central Standard Time · BST is <strong>6 hours ahead</strong> of CDT in summer</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">BST vs CST — London to Chicago</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">BST</strong> is UTC+1 (UK summer). <strong className="text-slate-700 dark:text-slate-200">CST</strong> is UTC-6 (US Central winter). In summer when both use daylight saving: BST (UTC+1) vs CDT (UTC-5) = 6 hours.</p>
            <p>Best overlap window: <strong>3:00–6:00 PM BST = 9:00 AM–12:00 PM CDT</strong>.</p>
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
