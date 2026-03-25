import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import EgyptClockClient from './EgyptClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Egypt Now — EET (UTC+2) · Cairo, Alexandria · No DST',
  description:
    'What time is it in Egypt right now? Egypt uses Eastern European Time (EET, UTC+2) year-round with no Daylight Saving Time since 2011. Live Cairo clock, Egypt vs world cities, and best time to call.',
  keywords: [
    'time in egypt', 'egypt time now', 'what time is it in egypt',
    'cairo time', 'egypt time zone', 'EET time zone', 'egypt utc+2',
    'egypt no daylight saving', 'cairo time now', 'egypt time vs usa',
    'egypt time vs uk', 'egypt time vs dubai', 'egypt time vs germany',
    'alexandria time', 'current time in cairo',
  ],
  alternates: { canonical: 'https://whattime.city/egypt/' },
  openGraph: {
    title: 'Current Time in Egypt — EET (UTC+2) · No Daylight Saving Time',
    description: 'Live Egypt time. Eastern European Time (EET, UTC+2) used year-round. No DST since 2011. Cairo, Alexandria, Giza all on the same time.',
    type: 'website', url: 'https://whattime.city/egypt/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Egypt right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Egypt uses Eastern European Time (EET, UTC+2) year-round. All cities — Cairo, Alexandria, Giza, Luxor, Aswan, and Sharm el-Sheikh — are on the same time. Egypt has not observed Daylight Saving Time since 2011. The live clock above shows the current time in Egypt.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Egypt in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Egypt is in the Eastern European Time (EET) zone, which is UTC+2. The IANA identifier is Africa/Cairo. Egypt shares this UTC+2 offset with countries such as Greece, Romania, Bulgaria, and South Africa (SAST). Egypt permanently abandoned Daylight Saving Time in 2011, so EET (UTC+2) is the only offset Egypt uses.' },
    },
    {
      '@type': 'Question',
      name: 'Does Egypt observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Egypt abolished Daylight Saving Time permanently in 2011, following a brief reintroduction in 2010. Egypt had previously used DST for many years but ended it definitively after the 2011 revolution. Since then, Egypt has remained on EET (UTC+2) year-round with no clock changes.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cairo (EET, UTC+2) is 7 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 6 hours. Cairo is 10 hours ahead of Los Angeles (PST, UTC−8) in winter, or 9 hours ahead during PDT. Since Egypt has no DST, the difference changes only when the US adjusts its clocks in March and November.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cairo (EET, UTC+2) is 2 hours ahead of London (GMT, UTC+0) in winter. During UK Summer Time (BST, UTC+1), the gap narrows to 1 hour. Since Egypt has no DST, this difference shifts when the UK changes clocks in late March and late October. There is a brief window each spring and autumn when the difference is 1 hour vs. the usual 2 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dubai (GST, UTC+4) is 2 hours ahead of Cairo (EET, UTC+2). Both regions have no Daylight Saving Time, so this 2-hour gap is constant year-round. When it is 9:00 AM in Cairo, it is 11:00 AM in Dubai.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Egypt and Germany?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cairo (EET, UTC+2) and Berlin (CET/CEST) are usually 1 hour apart, with Egypt ahead. In winter, Germany uses CET (UTC+1), so Cairo is 1 hour ahead. In summer, Germany uses CEST (UTC+2) — the same offset as Egypt — so the two countries are temporarily on the same time. This makes Germany one of Egypt\'s most time-compatible European trading partners during summer months.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Egypt', item: 'https://whattime.city/egypt/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function EgyptTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Egypt</h1>
      <p className="text-sm text-slate-500 mb-6">Eastern European Time (EET) · UTC+2 · No Daylight Saving Time since 2011</p>
      <EgyptClockClient />
      <CountryFactsSection hubSlug="egypt" />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">EET Quick Reference — When it is noon in Cairo</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when EET = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'New York', tz: 'EST (UTC−5)', local: '5:00 AM', note: '6:00 AM EDT during US summer' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '2:00 AM', note: '3:00 AM PDT during US summer' },
                  { city: 'London', tz: 'GMT (UTC+0)', local: '10:00 AM', note: '11:00 AM BST during UK summer' },
                  { city: 'Berlin / Paris', tz: 'CET (UTC+1)', local: '11:00 AM', note: '12:00 PM CEST (same as Cairo in summer)' },
                  { city: 'Istanbul', tz: 'TRT (UTC+3)', local: '1:00 PM', note: 'No DST' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '2:00 PM', note: 'No DST' },
                  { city: 'Mumbai (IST)', tz: 'IST (UTC+5:30)', local: '3:30 PM', note: 'No DST' },
                  { city: 'Singapore / Beijing', tz: 'SGT/CST (UTC+8)', local: '6:00 PM', note: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '7:00 PM', note: 'No DST' },
                ].map(row => (
                  <tr key={row.city}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.city}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.tz}</td>
                    <td className="py-2 text-slate-700">
                      {row.local}
                      <span className="ml-2 text-xs text-slate-400">({row.note})</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
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
      <section className="mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Egypt City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Cairo time', href: '/cairo/' },
              { label: 'Alexandria time', href: '/alexandria/' },
              { label: 'Cairo → London', href: '/time/cairo/london/' },
              { label: 'Cairo → New York', href: '/time/cairo/new-york/' },
              { label: 'Cairo → Dubai', href: '/time/cairo/dubai/' },
              { label: 'Cairo → Riyadh', href: '/time/cairo/riyadh/' },
              { label: 'Cairo → Istanbul', href: '/time/cairo/istanbul/' },
              { label: 'Cairo → Berlin', href: '/time/cairo/berlin/' },
              { label: 'Time converter tool', href: '/time-converter/' },
            ].map(lnk => (
              <Link key={lnk.href} href={lnk.href}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center">
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <footer className="text-xs text-slate-400 text-center mt-2 mb-4">
        Time zone data powered by the IANA Time Zone Database. Egypt: Africa/Cairo (EET UTC+2, no DST since 2011).
      </footer>
    </ContentPageWrapper>
  )
}
