import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SpainClockClient from './SpainClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Spain Now — CET/CEST (UTC+1/+2) · Madrid, Barcelona · Canary Islands',
  description:
    'What time is it in Spain right now? Spain uses Central European Time (CET, UTC+1) in winter and CEST (UTC+2) in summer. The Canary Islands are 1 hour behind the mainland. Live Madrid clock, Spain vs world cities, and best time to call.',
  keywords: [
    'time in spain', 'spain time now', 'what time is it in spain',
    'madrid time', 'barcelona time', 'spain time zone', 'CET spain', 'CEST spain',
    'central european time spain', 'current time madrid', 'spain utc+1',
    'spain time vs usa', 'spain time vs uk', 'canary islands time',
    'spain canary islands time difference', 'spain wrong time zone', 'spain utc-1 geography',
  ],
  alternates: { canonical: 'https://whattime.city/spain/' },
  openGraph: {
    title: 'Current Time in Spain — CET/CEST (UTC+1/+2) · Canary Islands 1h behind',
    description: 'Live Spain time. CET (UTC+1) in winter, CEST (UTC+2) during Daylight Saving Time. Canary Islands are 1h behind the Spanish mainland. Madrid, Barcelona on Central European Time.',
    type: 'website', url: 'https://whattime.city/spain/', siteName: 'whattime.city',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is it in Spain right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spain (mainland) uses Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) during Daylight Saving Time. All mainland cities — Madrid, Barcelona, Seville, Valencia, Bilbao — are on the same time. The Canary Islands (Tenerife, Gran Canaria, Lanzarote) use WET/WEST (UTC+0/+1), which is always 1 hour behind the mainland. The live clock above shows the current time in Madrid.' },
    },
    {
      '@type': 'Question',
      name: 'Why does Spain use Central European Time if it is geographically in the west?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spain\'s geographic position is close to UTC−1 to UTC+0. Greenwich, England — at 0° longitude — is actually in a similar geographic zone. Spain adopted Central European Time (CET, UTC+1) in 1940, when General Franco aligned Spanish time with Nazi Germany\'s occupied Europe during World War II. Spain has never reverted. As a result, Spain\'s solar noon (when the sun is directly overhead) often occurs around 2:00–2:30 PM CET, contributing to the country\'s famously late meal and activity schedule.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Spain and the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spain (CET/CEST) is always 1 hour ahead of the UK (GMT/BST). Both countries change clocks on the same dates (last Sunday of March and October), so the 1-hour gap is constant year-round. When it is 9:00 AM in London, it is 10:00 AM in Madrid.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Spain and the USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Madrid (CET, UTC+1) is 6 hours ahead of New York (EST, UTC−5) in winter. During US Daylight Saving Time (EDT, UTC−4), the gap narrows to 5 hours. During European summer (CEST, UTC+2), the gap is typically 6 hours ahead of EDT. Madrid is 9 hours ahead of Los Angeles (PST, UTC−8) in winter. There are brief transition periods in spring and autumn when the gap shifts by an extra hour.' },
    },
    {
      '@type': 'Question',
      name: 'What time zone are the Canary Islands in?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Canary Islands (Tenerife, Gran Canaria, Lanzarote, Fuerteventura, etc.) use Western European Time (WET, UTC+0) in winter and Western European Summer Time (WEST, UTC+1) during Daylight Saving Time. They are always 1 hour behind mainland Spain. The IANA identifier is Atlantic/Canary. When it is 12:00 PM in Madrid, it is 11:00 AM in Tenerife.' },
    },
    {
      '@type': 'Question',
      name: 'Does Spain observe Daylight Saving Time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Spain follows EU Daylight Saving Time rules. Clocks spring forward 1 hour on the last Sunday of March and fall back on the last Sunday of October. The EU has voted to abolish DST, but as of 2026 this has not been implemented. If Spain were to permanently adopt summer time (CEST, UTC+2), it would place Madrid on the same time as Eastern Europe year-round.' },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between Spain and Argentina?',
      acceptedAnswer: { '@type': 'Answer', text: 'Buenos Aires (ART, UTC−3) is 4 hours behind Madrid (CET, UTC+1) in winter. During Spanish summer (CEST, UTC+2), the gap widens to 5 hours. Argentina does not observe DST since 2008. This makes Spain one of the more manageable time zones for Latin American business connections in Europe.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Time in Spain', item: 'https://whattime.city/spain/' },
  ],
}

const card = 'rounded-2xl border border-slate-200 bg-white p-6'

export default function SpainTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">Current Time in Spain</h1>
      <p className="text-sm text-slate-500 mb-6">Central European Time (CET) · UTC+1 in winter · CEST (UTC+2) in summer · Canary Islands 1h behind</p>
      <SpainClockClient />
      <CountryFactsSection hubSlug="spain" />
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Spain Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Region</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Winter</th>
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Summer</th>
                  <th className="text-left py-2 font-medium text-slate-600">Cities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { region: 'Mainland Spain', winter: 'CET (UTC+1)', summer: 'CEST (UTC+2)', cities: 'Madrid, Barcelona, Seville, Valencia, Bilbao' },
                  { region: 'Canary Islands', winter: 'WET (UTC+0)', summer: 'WEST (UTC+1)', cities: 'Tenerife, Gran Canaria, Lanzarote, Fuerteventura' },
                ].map(row => (
                  <tr key={row.region}>
                    <td className="py-2 pr-4 font-medium text-slate-700">{row.region}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.winter}</td>
                    <td className="py-2 pr-4 text-slate-500">{row.summer}</td>
                    <td className="py-2 text-slate-700">{row.cities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">The Canary Islands are always 1 hour behind mainland Spain regardless of the season.</p>
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Spain City Times & Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Madrid time', href: '/madrid/' },
              { label: 'Barcelona time', href: '/barcelona/' },
              { label: 'Seville time', href: '/seville/' },
              { label: 'Tenerife time', href: '/tenerife/' },
              { label: 'Madrid → London', href: '/time/madrid/london/' },
              { label: 'Madrid → New York', href: '/time/madrid/new-york/' },
              { label: 'Madrid → Dubai', href: '/time/madrid/dubai/' },
              { label: 'Madrid → Buenos Aires', href: '/time/madrid/buenos-aires/' },
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
        Time zone data powered by the IANA Time Zone Database. Spain: Europe/Madrid (CET UTC+1 / CEST UTC+2) · Atlantic/Canary (WET UTC+0 / WEST UTC+1).
      </footer>
    </ContentPageWrapper>
  )
}
