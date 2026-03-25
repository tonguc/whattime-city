import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import PeruClockClient from './PeruClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Peru Now — PET (UTC−5) · Lima · No DST',
  description: 'What time is it in Peru right now? Peru uses Peru Time (PET, UTC−5) year-round with no Daylight Saving Time. Live Lima clock, Peru vs world cities, and best time to call.',
  keywords: ['time in peru', 'peru time now', 'what time is it in peru', 'lima time', 'peru time zone', 'PET peru', 'peru utc-5', 'cusco time', 'arequipa time', 'peru time vs usa', 'peru time vs uk', 'peru time vs colombia'],
  alternates: { canonical: 'https://whattime.city/peru/' },
  openGraph: { title: 'Current Time in Peru — PET (UTC−5) · No DST', description: 'Live Peru time. Lima and all of Peru on PET (UTC−5) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/peru/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Peru right now?', acceptedAnswer: { '@type': 'Answer', text: 'Peru uses Peru Time (PET, UTC−5) year-round. All cities — Lima, Cusco, Arequipa, Trujillo, and Iquitos — are in the same time zone. Peru does not observe Daylight Saving Time. The live clock above shows the current time in Peru.' } },
    { '@type': 'Question', name: 'What time zone is Lima in?', acceptedAnswer: { '@type': 'Answer', text: 'Lima uses Peru Time (PET, UTC−5). The IANA identifier is America/Lima. Peru shares UTC−5 with Colombia (COT), Ecuador (ECT), and — during winter — the eastern United States (EST). Peru abolished Daylight Saving Time in 1994.' } },
    { '@type': 'Question', name: 'Does Peru observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Peru does not observe Daylight Saving Time. PET (UTC−5) is fixed year-round. Peru last observed DST in 1994. Located near the equator, Peru has minimal seasonal daylight variation, making DST impractical.' } },
    { '@type': 'Question', name: 'What is the time difference between Peru and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Lima (PET, UTC−5) is on the same time as New York (EST, UTC−5) in winter. However, during US Daylight Saving Time (EDT, UTC−4), New York moves 1 hour ahead of Lima. Lima is 3 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Peru and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Lima (PET, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), Lima is 6 hours behind London. Since Peru has no DST, the difference only changes when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Peru and Colombia?', acceptedAnswer: { '@type': 'Answer', text: 'Peru (PET, UTC−5) and Colombia (COT, UTC−5) are on the same time year-round. There is no time difference between Lima and Bogotá. Neither country observes Daylight Saving Time, so this zero difference is constant.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Peru', item: 'https://whattime.city/peru/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function PeruTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Peru</h1>
      <p className="text-sm text-slate-500 mb-6">Peru Time (PET) · UTC−5 · No Daylight Saving Time</p>
      <PeruClockClient />
      <CountryFactsSection hubSlug="peru" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Peru & Nearby Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Lima time', href: '/lima/' }, { label: 'Bogotá time', href: '/bogota/' }, { label: 'Buenos Aires time', href: '/buenos-aires/' }, { label: 'Time in Colombia', href: '/colombia/' }, { label: 'Time in Argentina', href: '/argentina/' }, { label: 'Time in Chile', href: '/chile/' }, { label: 'Lima → New York', href: '/time/lima/new-york/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Peru: America/Lima (PET UTC−5, no DST).</footer>
    </ContentPageWrapper>
  )
}
