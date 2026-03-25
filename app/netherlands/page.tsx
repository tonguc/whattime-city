import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import NetherlandsClockClient from './NetherlandsClockClient'

export const metadata: Metadata = {
  title: 'Time in the Netherlands Now — CET/CEST (UTC+1/+2) · Amsterdam, Rotterdam',
  description:
    'What time is it in the Netherlands right now? The Netherlands uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. Live Amsterdam clock, Netherlands vs world cities.',
  keywords: [
    'time in netherlands', 'netherlands time now', 'what time is it in netherlands',
    'amsterdam time', 'netherlands time zone', 'CET netherlands', 'CEST netherlands',
    'central european time netherlands', 'current time amsterdam', 'netherlands utc+1',
    'netherlands time vs usa', 'netherlands time vs uk', 'netherlands time vs india',
    'rotterdam time', 'the hague time', 'holland time zone',
  ],
  alternates: { canonical: 'https://whattime.city/netherlands/' },
  openGraph: {
    title: 'Current Time in the Netherlands — CET/CEST (UTC+1/+2)',
    description: 'Live Netherlands time. CET (UTC+1) in winter, CEST (UTC+2) during Daylight Saving Time. Amsterdam, Rotterdam, The Hague all on Central European Time.',
    type: 'website', url: 'https://whattime.city/netherlands/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in the Netherlands right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Netherlands uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. All cities — Amsterdam, Rotterdam, The Hague, Utrecht, and Eindhoven — are on the same time. The live clock above shows the current time in the Netherlands.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone is the Netherlands in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Netherlands is in the Central European Time (CET) zone. In winter, the Netherlands uses CET (UTC+1). During Daylight Saving Time (late March–late October), it switches to CEST (UTC+2). The IANA identifier is Europe/Amsterdam. The Netherlands shares Central European Time with Germany, France, Belgium, Spain, Italy, Poland, and most of continental Europe.' },
    },
    {
      '@type': 'Question',
      name: 'Does the Netherlands observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Netherlands follows EU Daylight Saving Time rules. Clocks spring forward 1 hour on the last Sunday of March (CET to CEST) and fall back on the last Sunday of October (CEST to CET). The EU has voted to end the practice of changing clocks, but as of 2026 no final EU-wide date for abolition has been set and the Netherlands continues to change clocks twice a year.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Amsterdam (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 5 hours. When both the US and Netherlands are on summer time, Amsterdam (CEST, UTC+2) is typically 6 hours ahead of New York (EDT, UTC−4). Amsterdam is 9 hours ahead of Los Angeles (PST, UTC−8) in winter, narrowing to 8 hours during PDT.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Amsterdam (CET/CEST) is always 1 hour ahead of London (GMT/BST). Both the Netherlands and UK change clocks on the same dates (last Sunday of March and October), so the 1-hour gap is constant year-round. When it is 9:00 AM in London, it is 10:00 AM in Amsterdam.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Mumbai (IST, UTC+5:30) is 4.5 hours ahead of Amsterdam (CET, UTC+1) in winter. During CEST (UTC+2), the gap narrows to 3.5 hours. India has no DST, so the difference changes only when the Netherlands adjusts its clocks. This makes the Netherlands and India reasonably compatible for business calls, with a mid-morning window in the Netherlands corresponding to early afternoon in India.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between the Netherlands and Singapore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Singapore (SGT, UTC+8) is 7 hours ahead of Amsterdam (CET, UTC+1) in winter. During CEST (UTC+2), the gap narrows to 6 hours. Singapore has no DST. This means Amsterdam business hours (9 AM – 6 PM CET) correspond to 4:00 PM – 1:00 AM in Singapore — making real-time collaboration challenging, but possible for late-afternoon Amsterdam / early-evening Singapore calls.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in the Netherlands', item: 'https://whattime.city/netherlands/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function NetherlandsTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in the Netherlands</h1>
      <p className="text-sm text-slate-500 mb-6">Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) during Daylight Saving Time</p>
      <NetherlandsClockClient />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">CET Quick Reference — When it is noon in Amsterdam</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">City / Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Time Zone</th>
                  <th className="text-left py-2 font-medium text-slate-600">Local Time (when CET = 12:00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { city: 'London', tz: 'GMT (UTC+0)', local: '11:00 AM', note: '12:00 PM BST in summer (gap constant)' },
                  { city: 'New York', tz: 'EST (UTC−5)', local: '6:00 AM', note: '7:00 AM EDT (US summer, gap may vary ±1h)' },
                  { city: 'Los Angeles', tz: 'PST (UTC−8)', local: '3:00 AM', note: '4:00 AM PDT' },
                  { city: 'Moscow', tz: 'MSK (UTC+3)', local: '2:00 PM', note: '1:00 PM during CEST (gap 1h)' },
                  { city: 'Dubai', tz: 'GST (UTC+4)', local: '3:00 PM', note: 'No DST' },
                  { city: 'Mumbai', tz: 'IST (UTC+5:30)', local: '4:30 PM', note: 'No DST' },
                  { city: 'Singapore', tz: 'SGT (UTC+8)', local: '7:00 PM', note: 'No DST' },
                  { city: 'Tokyo', tz: 'JST (UTC+9)', local: '8:00 PM', note: 'No DST' },
                  { city: 'Sydney', tz: 'AEST (UTC+10)', local: '9:00 PM', note: '10:00 PM AEDT in Australian summer' },
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Netherlands City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Amsterdam time', href: '/amsterdam/' },
              { label: 'Rotterdam time', href: '/rotterdam/' },
              { label: 'The Hague time', href: '/the-hague/' },
              { label: 'Amsterdam → London', href: '/time/amsterdam/london/' },
              { label: 'Amsterdam → New York', href: '/time/amsterdam/new-york/' },
              { label: 'Amsterdam → Dubai', href: '/time/amsterdam/dubai/' },
              { label: 'Amsterdam → Singapore', href: '/time/amsterdam/singapore/' },
              { label: 'Amsterdam → Tokyo', href: '/time/amsterdam/tokyo/' },
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
        Time zone data powered by the IANA Time Zone Database. Netherlands: Europe/Amsterdam (CET UTC+1 / CEST UTC+2).
      </footer>
    </ContentPageWrapper>
  )
}
