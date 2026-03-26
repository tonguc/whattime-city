import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

export const metadata: Metadata = {
  title: 'GMT to IST — Greenwich Mean Time to India Standard Time Converter',
  description: 'Convert GMT to IST instantly. GMT (UTC+0) is 5 hours 30 minutes behind India Standard Time (UTC+5:30). Live clocks, London–India scheduling guide.',
  alternates: { canonical: 'https://whattime.city/gmt-to-ist/' },
  openGraph: { title: 'GMT to IST Converter — London to India', description: 'GMT is 5:30 behind IST. Live clocks and full conversion table.', type: 'website', url: 'https://whattime.city/gmt-to-ist/', siteName: 'whattime.city' },
  twitter: { card: 'summary_large_image', title: 'GMT to IST — GMT to India Standard Time', description: 'GMT is 5:30 behind IST. Live converter.' },
}

const config: TZPairConfig = {
  fromAbbr: 'GMT',
  toAbbr: 'IST',
  fromTimezone: 'Europe/London',
  toTimezone: 'Asia/Kolkata',
  fromFullName: 'Greenwich Mean Time',
  toFullName: 'India Standard Time',
  fromCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Dublin', 'Cardiff'],
  toCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many hours is GMT behind IST?', acceptedAnswer: { '@type': 'Answer', text: 'GMT (UTC+0) is 5 hours 30 minutes behind IST (UTC+5:30). During UK summer (BST, UTC+1), the gap shrinks to 4 hours 30 minutes. India does not observe DST, so the offset only changes when the UK shifts clocks in late March and late October.' } },
    { '@type': 'Question', name: 'What is 9 AM GMT in IST?', acceptedAnswer: { '@type': 'Answer', text: '9:00 AM GMT (London winter) is 2:30 PM IST. During UK BST (summer), 9:00 AM BST = 1:30 PM IST. The best GMT–IST overlap for business calls is 9:00 AM–12:00 PM GMT = 2:30–5:30 PM IST (winter) or 9:00 AM–12:00 PM BST = 1:30–4:30 PM IST (summer).' } },
    { '@type': 'Question', name: 'What is the best time to call India from London?', acceptedAnswer: { '@type': 'Answer', text: 'In winter (GMT): 9:00 AM–12:00 PM GMT = 2:30–5:30 PM IST. In summer (BST): 9:00 AM–1:00 PM BST = 1:30–5:30 PM IST. London mornings are the prime window — they catch Indian afternoons before the end of the IST business day.' } },
    { '@type': 'Question', name: 'Does the GMT to IST gap change in summer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but only on the UK side. India does not observe DST. When the UK shifts to BST (UTC+1) in late March, the gap changes from 5.5 hours to 4.5 hours. When the UK reverts to GMT (UTC+0) in late October, the gap returns to 5.5 hours. India is always ahead by either 4:30 or 5:30.' } },
  ],
}

export default function GMTtoIST() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-white">GMT to IST Converter</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Greenwich Mean Time → India Standard Time · GMT is <strong>5 hours 30 minutes behind</strong> IST</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">GMT vs IST — London to India</h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p><strong className="text-slate-700 dark:text-slate-200">GMT (UTC+0)</strong> — UK winter time. London uses BST (UTC+1) from late March to late October.</p>
            <p><strong className="text-slate-700 dark:text-slate-200">IST (UTC+5:30)</strong> — India Standard Time, fixed year-round. The :30 offset means IST conversions always produce :00 or :30 minutes.</p>
            <p>The London–India corridor is one of the world's most active IT outsourcing and financial routes. Best overlap: <strong>9 AM–12 PM GMT = 2:30–5:30 PM IST</strong>. London mornings consistently catch Indian afternoons within working hours.</p>
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
