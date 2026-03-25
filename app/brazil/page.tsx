import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import BrazilClockClient from './BrazilClockClient'

export const metadata: Metadata = {
  title: 'Time in Brazil Now — BRT (UTC−3) · São Paulo, Rio, Brasília',
  description:
    'What time is it in Brazil right now? Brazil uses BRT (UTC−3) — Daylight Saving Time was abolished in 2019. Live São Paulo clock, Brazil time zones, and time vs US, UK, Europe.',
  keywords: [
    'time in brazil',
    'brazil time now',
    'brazil time',
    'sao paulo time',
    'brasil time',
    'brazil time zone',
    'BRT time zone',
    'current time in brazil',
    'what time is it in brazil',
    'brazil time vs est',
    'brazil time vs uk',
    'time difference brazil usa',
    'brazil utc offset',
    'brazil current time zone 2026',
    'brazil time zones cities',
  ],
  alternates: {
    canonical: 'https://whattime.city/brazil/',
  },
  openGraph: {
    title: 'Current Time in Brazil — BRT (UTC−3)',
    description:
      'Live Brazil time clock. BRT is UTC−3 — Brazil abolished Daylight Saving Time in 2019. Check Brazil time vs US, UK, Europe, and Asia.',
    type: 'website',
    url: 'https://whattime.city/brazil/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time in Brazil Now — BRT UTC−3',
    description:
      'Live Brazil Standard Time. BRT is UTC−3. Brazil has 4 time zones; São Paulo and most cities use BRT.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Brazil right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Brazil, including São Paulo, Rio de Janeiro, and Brasília, uses Brasília Time (BRT), which is UTC−3. The live clock at the top of this page shows the exact current time in Brazil.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many time zones does Brazil have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brazil has four official time zones: BRT (UTC−3) covering most states including São Paulo, Rio, and Brasília; AMT (UTC−4) covering Amazon states like Manaus and Mato Grosso; ACT (UTC−5) covering the state of Acre and southwest Amazonas; and FNT (UTC−2) used only by the Fernando de Noronha island territory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Brazil observe Daylight Saving Time (DST)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Brazil abolished Daylight Saving Time in 2019 under a decree by President Bolsonaro. Before that, southern states (including São Paulo and Rio) used to advance clocks by one hour during the Southern Hemisphere summer (October–February). Since 2019, Brazil\'s time zones are fixed year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is São Paulo\'s time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São Paulo uses Brasília Time (BRT), which is UTC−3. The IANA time zone identifier is America/Sao_Paulo. São Paulo shares this time zone with Rio de Janeiro, Belo Horizonte, Brasília, Fortaleza, Salvador, and most other major Brazilian cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Brazil and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São Paulo (BRT, UTC−3) is 2 hours ahead of New York (EST, UTC−5) and 5 hours ahead of Los Angeles (PST, UTC−8). During US daylight saving time (EDT, UTC−4), São Paulo is 1 hour ahead of New York. During PDT, São Paulo is 4 hours ahead of Los Angeles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Brazil and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São Paulo (BRT, UTC−3) is 3 hours behind London (GMT, UTC+0). During British Summer Time (BST, UTC+1), São Paulo is 4 hours behind London. When it is 12:00 PM in São Paulo, it is 3:00 PM in London (winter) or 4:00 PM (summer).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to call Brazil from the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From US Eastern time (EST), the best window to reach Brazil during business hours is 7:00 AM to 12:00 PM EST, which corresponds to 9:00 AM to 2:00 PM BRT in São Paulo. From US Pacific time (PST), try 4:00 AM to 9:00 AM PST for the same São Paulo morning window.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UTC offset is Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brazil\'s main time zone is BRT (Brasília Time) at UTC−3, covering São Paulo, Rio de Janeiro, Brasília, and most of the country. The Amazon region uses UTC−4, the state of Acre uses UTC−5, and Fernando de Noronha island uses UTC−2.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Brazil', item: 'https://whattime.city/brazil/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function BrazilTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
        Current Time in Brazil
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Brasília Time (BRT) · UTC−3 · No Daylight Saving Time since 2019
      </p>

      <BrazilClockClient />

      {/* BRT Explained */}
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Brazil Time Zones Explained</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Brazil spans an unusually wide range of longitudes for a single country, which is why it uses
              four different time zones. The vast majority of Brazilians — including everyone in São Paulo,
              Rio de Janeiro, and Brasília — live in <strong>BRT (Brasília Time, UTC−3)</strong>.
            </p>
            <p>
              <strong>Brazil abolished Daylight Saving Time in 2019.</strong> Previously, southern states
              moved clocks forward by one hour during the Southern Hemisphere summer (roughly October through
              February). Since April 2019, all Brazilian time zones are fixed year-round. This means the
              time difference between Brazil and DST-observing countries like the US and UK
              changes when those countries adjust their clocks — but Brazil never changes its own.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">Zone</th>
                    <th className="text-left py-2 pr-4 font-medium text-slate-600">UTC Offset</th>
                    <th className="text-left py-2 font-medium text-slate-600">States / Region</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { zone: 'BRT — Brasília Time', utc: 'UTC−3', states: 'São Paulo, Rio, Brasília, Bahia, Ceará, most states' },
                    { zone: 'AMT — Amazon Time', utc: 'UTC−4', states: 'Manaus, Mato Grosso, Rondônia, parts of Amazonas' },
                    { zone: 'ACT — Acre Time', utc: 'UTC−5', states: 'Acre state, southwest Amazonas' },
                    { zone: 'FNT — Fernando de Noronha', utc: 'UTC−2', states: 'Fernando de Noronha island territory' },
                  ].map((row) => (
                    <tr key={row.zone}>
                      <td className="py-2 pr-4 font-medium text-slate-700">{row.zone}</td>
                      <td className="py-2 pr-4 text-slate-500">{row.utc}</td>
                      <td className="py-2 text-slate-600">{row.states}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">BRT Quick Reference — When it is noon in São Paulo</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when BRT = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'New York', tz: 'EST (UTC−5)', local: '10:00 AM', dst: '11:00 AM EDT in summer' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '7:00 AM', dst: '8:00 AM PDT in summer' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '3:00 PM', dst: '4:00 PM BST in summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '4:00 PM', dst: '5:00 PM CEST in summer' },
                  { city: 'Lagos (Nigeria)', tz: 'WAT (UTC+1)', local: '4:00 PM', dst: 'No DST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '7:00 PM', dst: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '8:30 PM', dst: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '11:00 PM', dst: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: 'Midnight', dst: 'No DST' },
                ].map((row) => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      {row.dst !== 'No DST' && (
                        <span className="ml-2 text-xs text-slate-400">({row.dst})</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-medium text-slate-800 text-sm mb-1">{item.name}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Brazil City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'São Paulo time', href: '/sao-paulo/' },
              { label: 'Rio de Janeiro time', href: '/rio-de-janeiro/' },
              { label: 'Brasília time', href: '/brasilia/' },
              { label: 'Manaus time', href: '/manaus/' },
              { label: 'São Paulo → New York', href: '/time/sao-paulo/new-york/' },
              { label: 'São Paulo → London', href: '/time/sao-paulo/london/' },
              { label: 'São Paulo → San Francisco', href: '/time/sao-paulo/san-francisco/' },
              { label: 'Brazil country info', href: '/country/brazil/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database.
        Brazil main zone: America/Sao_Paulo (BRT, UTC−3). DST abolished April 2019.
      </footer>
    </ContentPageWrapper>
  )
}
