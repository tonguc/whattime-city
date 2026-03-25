import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SwedenClockClient from './SwedenClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Sweden Now — CET/CEST (UTC+1/+2) · Stockholm, Gothenburg',
  description: 'What time is it in Sweden right now? Sweden uses CET (UTC+1) in winter and CEST (UTC+2) during Daylight Saving Time. Live Stockholm clock, Sweden vs world cities, and best time to call.',
  keywords: ['time in sweden', 'sweden time now', 'what time is it in sweden', 'stockholm time', 'sweden time zone', 'CET sweden', 'CEST sweden', 'sweden utc+1', 'stockholm time zone', 'sweden time vs usa', 'sweden time vs uk'],
  alternates: { canonical: 'https://whattime.city/sweden/' },
  openGraph: { title: 'Current Time in Sweden — CET/CEST (UTC+1/+2)', description: 'Live Sweden time. CET (UTC+1) in winter, CEST (UTC+2) during DST. Stockholm, Gothenburg, Malmö all on Central European Time.', type: 'website', url: 'https://whattime.city/sweden/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Sweden right now?', acceptedAnswer: { '@type': 'Answer', text: 'Sweden uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. All cities — Stockholm, Gothenburg, Malmö, Uppsala, and Västerås — are on the same time zone. The live clock above shows the current time in Sweden.' } },
    { '@type': 'Question', name: 'What time zone is Sweden in?', acceptedAnswer: { '@type': 'Answer', text: 'Sweden is in the Central European Time (CET) zone. In winter it uses CET (UTC+1) and during Daylight Saving Time it uses CEST (UTC+2). The IANA identifier is Europe/Stockholm. Sweden shares this zone with Germany, France, the Netherlands, Spain, Italy, and most of continental Europe.' } },
    { '@type': 'Question', name: 'Does Sweden observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sweden follows EU DST rules: clocks spring forward on the last Sunday of March and fall back on the last Sunday of October. The EU voted to end DST but as of 2026 the proposal has not been finalised, so Sweden continues to change clocks twice a year.' } },
    { '@type': 'Question', name: 'What is the time difference between Sweden and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Stockholm (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter, or 5 hours ahead during US Daylight Saving Time (EDT, UTC−4). Stockholm is 9 hours ahead of Los Angeles (PST, UTC−8) in winter, or 8 hours during PDT.' } },
    { '@type': 'Question', name: 'What is the time difference between Sweden and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Sweden (CET/CEST) is always 1 hour ahead of the UK (GMT/BST). Both countries change clocks on the same dates, so the 1-hour gap is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Sweden and India?', acceptedAnswer: { '@type': 'Answer', text: 'Mumbai (IST, UTC+5:30) is 4.5 hours ahead of Stockholm (CET, UTC+1) in winter, or 3.5 hours ahead during Swedish summer (CEST, UTC+2). India has no DST so the difference changes only when Sweden adjusts its clocks.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Sweden', item: 'https://whattime.city/sweden/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function SwedenTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Sweden</h1>
      <p className="text-sm text-slate-500 mb-6">Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Daylight Saving Time</p>
      <SwedenClockClient />
      <CountryFactsSection hubSlug="sweden" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Sweden City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Stockholm time', href: '/stockholm/' }, { label: 'Gothenburg time', href: '/gothenburg/' }, { label: 'Stockholm → London', href: '/time/stockholm/london/' }, { label: 'Stockholm → New York', href: '/time/stockholm/new-york/' }, { label: 'Stockholm → Dubai', href: '/time/stockholm/dubai/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Sweden: Europe/Stockholm (CET UTC+1 / CEST UTC+2).</footer>
    </ContentPageWrapper>
  )
}
