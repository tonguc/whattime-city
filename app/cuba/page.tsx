import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import CubaClockClient from './CubaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Cuba Now — CST/CDT (UTC−5/−4) · Havana · Caribbean DST',
  description: 'What time is it in Cuba right now? Cuba uses Cuba Standard Time (CST, UTC−5) in winter and Cuba Daylight Time (CDT, UTC−4) in summer. Live Havana clock and best time to call.',
  keywords: ['time in cuba', 'cuba time now', 'what time is it in cuba', 'havana time', 'cuba time zone', 'CST CDT cuba', 'cuba utc-5', 'santiago de cuba time', 'cuba dst', 'cuba time vs usa', 'cuba time vs uk', 'cuba time vs miami'],
  alternates: { canonical: 'https://whattime.city/cuba/' },
  openGraph: { title: 'Current Time in Cuba — CST/CDT · Havana', description: 'Live Cuba time. Havana on Cuba Standard Time (UTC−5) in winter, Cuba Daylight Time (UTC−4) in summer.', type: 'website', url: 'https://whattime.city/cuba/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Cuba right now?', acceptedAnswer: { '@type': 'Answer', text: 'Cuba uses Cuba Standard Time (CST, UTC−5) in winter and Cuba Daylight Time (CDT, UTC−4) during Daylight Saving Time. Havana, Santiago de Cuba, Camagüey, and all Cuban cities are in the same time zone. The live clock above shows the current time in Cuba.' } },
    { '@type': 'Question', name: 'What time zone is Havana in?', acceptedAnswer: { '@type': 'Answer', text: 'Havana uses Cuba Standard Time (CST, UTC−5) in winter and CDT (UTC−4) in summer. The IANA identifier is America/Havana. Note: Cuba\'s CST abbreviation (Cuba Standard Time) is different from the US Central Standard Time (also CST). Cuba\'s time is the same as US Eastern Time (EST/EDT) for most of the year.' } },
    { '@type': 'Question', name: 'Does Cuba observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cuba observes Daylight Saving Time. Clocks spring forward 1 hour in mid-March and fall back 1 hour in late October. Cuba\'s DST schedule is similar to, but not always identical to, the US schedule, so for brief periods in spring and fall there can be a temporary 1-hour difference between Havana and Miami.' } },
    { '@type': 'Question', name: 'What is the time difference between Cuba and the USA (Miami)?', acceptedAnswer: { '@type': 'Answer', text: 'For most of the year, Havana (CST/CDT) and Miami (EST/EDT) are on the same time. However, during the brief transition periods when Cuba and the US switch DST on different dates, there can be a 1-hour difference. Generally, plan for Havana and Miami to be on the same time.' } },
    { '@type': 'Question', name: 'What is the time difference between Cuba and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Havana (CST, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During Cuba\'s summer time (CDT, UTC−4), Havana is 4 hours behind London (GMT). When both the UK and Cuba observe DST, Havana (CDT) is 5 hours behind London (BST, UTC+1).' } },
    { '@type': 'Question', name: 'What is the time difference between Cuba and Colombia?', acceptedAnswer: { '@type': 'Answer', text: 'Havana (CST, UTC−5) is on the same time as Bogotá (COT, UTC−5) in winter. During Cuba\'s summer time (CDT, UTC−4), Havana is 1 hour ahead of Bogotá, since Colombia does not observe DST. The relationship shifts seasonally.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Cuba', item: 'https://whattime.city/cuba/' }] }
const card = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6'

export default function CubaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Cuba</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Cuba Standard Time (CST/CDT) · Havana · UTC−5 / UTC−4</p>
      <CubaClockClient />
      <CountryFactsSection hubSlug="cuba" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4"><div className="font-medium text-slate-800 dark:text-white text-sm mb-1">{item.name}</div><div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Cuba & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Miami time', href: '/miami/' }, { label: 'New York time', href: '/new-york/' }, { label: 'Mexico City time', href: '/mexico-city/' }, { label: 'Time in Colombia', href: '/colombia/' }, { label: 'Time in Venezuela', href: '/venezuela/' }, { label: 'Time in Mexico', href: '/mexico/' }, { label: 'Time in Florida', href: '/florida/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Cuba: America/Havana (CST UTC−5 / CDT UTC−4).</footer>
    </ContentPageWrapper>
  )
}
