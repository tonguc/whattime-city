import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import ColombiaClockClient from './ColombiaClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Colombia Now — COT (UTC−5) · Bogotá · No DST',
  description: 'What time is it in Colombia right now? Colombia uses Colombia Time (COT, UTC−5) year-round with no Daylight Saving Time. Live Bogotá clock, Colombia vs world cities, and best time to call.',
  keywords: ['time in colombia', 'colombia time now', 'what time is it in colombia', 'bogota time', 'colombia time zone', 'COT colombia', 'colombia utc-5', 'medellin time', 'cali time', 'colombia time vs usa', 'colombia time vs uk', 'colombia time vs spain'],
  alternates: { canonical: 'https://whattime.city/colombia/' },
  openGraph: { title: 'Current Time in Colombia — COT (UTC−5) · No DST', description: 'Live Colombia time. COT (UTC−5) year-round. Bogotá, Medellín, Cali, Cartagena all on the same time.', type: 'website', url: 'https://whattime.city/colombia/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Colombia right now?', acceptedAnswer: { '@type': 'Answer', text: 'Colombia uses Colombia Time (COT, UTC−5) year-round. All cities — Bogotá, Medellín, Cali, Cartagena, and Barranquilla — are on the same time zone. Colombia does not observe Daylight Saving Time. The live clock above shows the current time in Colombia.' } },
    { '@type': 'Question', name: 'What time zone is Colombia in?', acceptedAnswer: { '@type': 'Answer', text: 'Colombia uses Colombia Time (COT, UTC−5). The IANA identifier is America/Bogota. Colombia shares UTC−5 with Peru, Ecuador, and parts of the eastern United States (EST, UTC−5) during winter. Colombia abolished Daylight Saving Time in 1993.' } },
    { '@type': 'Question', name: 'Does Colombia observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Colombia does not observe Daylight Saving Time. COT (UTC−5) is fixed year-round. Colombia last observed DST in 1993. Located near the equator, Colombia has minimal seasonal daylight variation, making DST impractical.' } },
    { '@type': 'Question', name: 'What is the time difference between Colombia and the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Bogotá (COT, UTC−5) is on the same time as New York (EST, UTC−5) in winter. However, during US Daylight Saving Time (EDT, UTC−4), New York moves 1 hour ahead of Bogotá. Bogotá is 2 hours ahead of Los Angeles (PST, UTC−8) in winter.' } },
    { '@type': 'Question', name: 'What is the time difference between Colombia and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Bogotá (COT, UTC−5) is 5 hours behind London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), Bogotá is 6 hours behind London. Since Colombia has no DST, this difference changes only when the UK adjusts its clocks.' } },
    { '@type': 'Question', name: 'What is the time difference between Colombia and Spain?', acceptedAnswer: { '@type': 'Answer', text: 'Bogotá (COT, UTC−5) is 6 hours behind Madrid (CET, UTC+1) in winter. During Spanish Summer Time (CEST, UTC+2), Bogotá is 7 hours behind Madrid. Both countries share the Spanish language but have very different time zones.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Colombia', item: 'https://whattime.city/colombia/' }] }
const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function ColombiaTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Colombia</h1>
      <p className="text-sm text-slate-500 mb-6">Colombia Time (COT) · UTC−5 · No Daylight Saving Time</p>
      <ColombiaClockClient />
      <CountryFactsSection hubSlug="colombia" />
      <section className="mt-4 mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">{faqSchema.mainEntity.map((item, i) => (<div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div><div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div></div>))}</div>
      </div></section>
      <section className="mb-4"><div className={card}>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Colombia City Times & Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[{ label: 'Bogotá time', href: '/bogota/' }, { label: 'Lima time', href: '/lima/' }, { label: 'Buenos Aires time', href: '/buenos-aires/' }, { label: 'Bogotá → New York', href: '/time/bogota/new-york/' }, { label: 'Bogotá → London', href: '/time/bogota/london/' }, { label: 'Bogotá → Madrid', href: '/time/bogota/madrid/' }, { label: 'Time in Argentina', href: '/argentina/' }, { label: 'Time converter tool', href: '/time-converter/' }].map(lnk => (<Link key={lnk.href} href={lnk.href} className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">{lnk.label}</Link>))}
        </div>
      </div></section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">Time zone data powered by the IANA Time Zone Database. Colombia: America/Bogota (COT UTC−5, no DST).</footer>
    </ContentPageWrapper>
  )
}
