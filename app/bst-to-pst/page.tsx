import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'BST to PST — British Summer Time to Pacific Time Converter',
  description: 'Convert BST to PST instantly. British Summer Time (UTC+1) is 8 hours ahead of Pacific Standard Time (UTC-8). Live clocks, conversion table, and overlap window.',
  alternates: { canonical: 'https://whattime.city/bst-to-pst/' },
  openGraph: { title: 'BST to PST Converter — British Summer Time to Pacific', description: 'BST is 8 hours ahead of PST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/bst-to-pst/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'BST to PST — British Summer Time to Pacific Time', description: 'BST is 8 hours ahead of PST. Live converter and overlap guide.' },
}

const config: TZPairConfig = {
  fromAbbr: 'BST',
  toAbbr: 'PST',
  fromTimezone: 'Europe/London',
  toTimezone: 'America/Los_Angeles',
  fromFullName: 'British Summer Time',
  toFullName: 'Pacific Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['Los Angeles, CA', 'San Francisco, CA', 'Seattle, WA', 'Portland, OR', 'Las Vegas, NV', 'San Diego, CA'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is BST ahead of PST/PDT?', acceptedAnswer: { '@type': 'Answer', text: 'BST (British Summer Time, UTC+1) is 8 hours ahead of PST (UTC-8) in US winter. During US Daylight Saving Time (PDT, UTC-7), BST is 8 hours ahead. Both the UK (BST) and US West Coast (PDT) observe summer time simultaneously from mid-March to late October, making the gap consistently 8 hours during that period.' } },
    { '@type': 'Question', name: 'What is 9 AM BST in PST/PDT?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM BST (London summer) is 1:00 AM PST the same day, or 2:00 AM PDT. A 9 AM London morning call is the middle of the night in Los Angeles. The practical overlap window is 5:00–7:00 PM BST = 9:00–11:00 AM PDT.' } },
    { '@type': 'Question', name: 'What is the best time to schedule a London–Los Angeles meeting in summer?', acceptedAnswer: { '@type': 'Answer', text: 'In summer when London uses BST (UTC+1) and LA uses PDT (UTC-7), the best overlap is 5:00–7:00 PM BST = 9:00–11:00 AM PDT. This is late afternoon for London and morning for Los Angeles.' } },
  ],
}

export default function BSTtoPST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">BST to PST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">British Summer Time → Pacific Standard Time · BST is <strong>8 hours ahead</strong> of PDT in summer</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">BST vs PST — London to West Coast</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">BST</strong> is UTC+1, the UK&apos;s summer time (late March–late October). <strong className="text-slate-700 dark:text-slate-200">PST</strong> is UTC-8, US West Coast winter time. In summer both shift: BST (UTC+1) vs PDT (UTC-7) = 8 hours apart.</p>
            <p>The London–Silicon Valley gap is 8 hours in summer. The standard overlap: <strong>5:00–7:00 PM BST = 9:00–11:00 AM PDT</strong>.</p>
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
