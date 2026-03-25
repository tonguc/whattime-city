import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import UkraineClockClient from './UkraineClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Ukraine Now — EET/EEST (UTC+2/+3) · Kyiv · Eastern European Time',
  description: 'What time is it in Ukraine right now? Ukraine uses Eastern European Time (EET, UTC+2) in winter and EEST (UTC+3) in summer. Live Kyiv clock, Ukraine vs world cities, and best time to call.',
  keywords: ['time in ukraine', 'ukraine time now', 'what time is it in ukraine', 'kyiv time', 'ukraine time zone', 'EET EEST ukraine', 'ukraine utc+2', 'kharkiv time', 'odessa time', 'lviv time', 'ukraine time vs uk', 'ukraine time vs usa'],
  alternates: { canonical: 'https://whattime.city/ukraine/' },
  openGraph: { title: 'Current Time in Ukraine — EET/EEST · Kyiv', description: 'Live Ukraine time. Kyiv on EET (UTC+2) in winter and EEST (UTC+3) in summer.', type: 'website', url: 'https://whattime.city/ukraine/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Ukraine right now?', acceptedAnswer: { '@type': 'Answer', text: 'Ukraine uses Eastern European Time (EET, UTC+2) in winter and Eastern European Summer Time (EEST, UTC+3) during Daylight Saving Time. All Ukrainian cities — Kyiv, Kharkiv, Odesa, Lviv, and Dnipro — are in the same time zone. The live clock above shows the current time in Ukraine.' } },
    { '@type': 'Question', name: 'What time zone is Kyiv in?', acceptedAnswer: { '@type': 'Answer', text: 'Kyiv (also spelled Kiev) uses Eastern European Time (EET, UTC+2) in winter and EEST (UTC+3) in summer. The IANA identifier is Europe/Kyiv. Kyiv is 1 hour ahead of Warsaw and Berlin (CET), and 2 hours ahead of London (GMT) in winter.' } },
    { '@type': 'Question', name: 'Does Ukraine observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ukraine observes Daylight Saving Time. Clocks spring forward 1 hour to EEST (UTC+3) on the last Sunday of March and fall back to EET (UTC+2) on the last Sunday of October. Ukraine follows the same DST schedule as EU countries.' } },
    { '@type': 'Question', name: 'What is the time difference between Ukraine and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Kyiv (EET, UTC+2) is 2 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1) and Ukraine\'s EEST (UTC+3) in summer, Kyiv remains 2 hours ahead of London. The 2-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Ukraine and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Kyiv (EET, UTC+2) is 7 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 6 hours. When both regions observe DST, Kyiv (EEST, UTC+3) is 7 hours ahead of New York (EDT, UTC−4).' } },
    { '@type': 'Question', name: 'What is the time difference between Ukraine and Russia (Moscow)?', acceptedAnswer: { '@type': 'Answer', text: 'Kyiv (EET/EEST) and Moscow (MSK, UTC+3 year-round) differ depending on the season. In winter, Kyiv (UTC+2) is 1 hour behind Moscow (UTC+3). In summer, Kyiv moves to EEST (UTC+3), putting Kyiv and Moscow on the same time. Russia does not observe DST (abolished in 2014).' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Ukraine', item: 'https://whattime.city/ukraine/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function UkraineTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Ukraine</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern European Time (EET/EEST) · Kyiv · UTC+2 / UTC+3</p>
      <UkraineClockClient />
      <CountryFactsSection hubSlug="ukraine" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Ukraine & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Kyiv time', href: '/kyiv/' }, { label: 'Warsaw time', href: '/warsaw/' }, { label: 'Moscow time', href: '/moscow/' }, { label: 'Time in Poland', href: '/poland/' }, { label: 'Time in Russia', href: '/russia/' }, { label: 'Time in Turkey', href: '/turkey/' }, { label: 'Kyiv → New York', href: '/time/kyiv/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Ukraine: Europe/Kyiv (EET UTC+2 / EEST UTC+3).</footer>
    </ContentPageWrapper>
  )
}
