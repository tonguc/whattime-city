import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import MilitaryTimeClient from './MilitaryTimeClient'

export const metadata: Metadata = {
  title: 'Military Time — Convert 24-Hour to 12-Hour Clock',
  description: 'Convert military time to standard time instantly. Full military time chart (0000–2359), how to read military time, and a live clock showing both formats.',
  alternates: {
    canonical: 'https://whattime.city/military-time',
  },
  openGraph: {
    title: 'Military Time Converter — 24-Hour to 12-Hour',
    description: 'Full military time chart, live clock in both formats, and instant converter. 0000 to 2359 explained.',
    type: 'website',
    url: 'https://whattime.city/military-time',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Military Time — 24-Hour Clock Converter & Chart',
    description: 'Convert military time to standard time. Full 0000–2359 chart.',
  },
}

const militaryTimes = Array.from({ length: 24 }, (_, h) => {
  const military = `${h.toString().padStart(2, '0')}00`
  const ampm = h === 0 ? '12:00 AM (Midnight)'
    : h < 12 ? `${h}:00 AM`
    : h === 12 ? '12:00 PM (Noon)'
    : `${h - 12}:00 PM`
  const spoken = h === 0 ? 'Zero hundred hours'
    : h < 10 ? `Zero ${h} hundred hours`
    : `${h} hundred hours`
  return { military, ampm, spoken, h }
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Military time is a 24-hour clock system where the day runs from 0000 (midnight) to 2359 (11:59 PM). It eliminates AM/PM ambiguity by using a continuous count: 0100 = 1:00 AM, 1300 = 1:00 PM, 2300 = 11:00 PM. It is used by the military, emergency services, hospitals, aviation, and many international contexts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you convert military time to standard time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For hours 0000–1159: remove the leading zero and add AM (e.g., 0900 = 9:00 AM). For hours 1200–2359: subtract 1200 and add PM (e.g., 1500 = 3:00 PM, 2100 = 9:00 PM). Midnight is 0000 and noon is 1200.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 1300 in military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1300 in military time is 1:00 PM. To convert: 1300 - 1200 = 100, which is 1:00 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 0000 in military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '0000 (zero hundred hours) in military time is midnight — the start of a new day. It is equivalent to 12:00 AM. Note: 2400 is sometimes used to mean the end of a day (same clock moment as 0000 of the next day).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 1800 in military time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1800 (eighteen hundred hours) in military time is 6:00 PM. 1800 - 1200 = 600 = 6:00 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you say military time out loud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Military time is spoken as hours followed by "hundred hours" (for whole hours) or "hours" (for minutes). Examples: 0900 = "zero nine hundred hours", 1430 = "fourteen thirty hours", 0015 = "zero zero fifteen hours". The word "hours" can be omitted in informal usage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What countries use 24-hour time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of the world outside the US, Canada, Australia, and the UK uses the 24-hour clock as the everyday standard, including all EU countries, most of Asia, Latin America, and Africa. In the US and UK, 24-hour time is mainly used in technical, military, medical, and transportation contexts.',
      },
    },
  ],
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Military Time Converter',
  url: 'https://whattime.city/military-time',
  description: 'Convert military time (24-hour) to standard time (12-hour) instantly.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function MilitaryTimePage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
          Military Time Converter
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Convert between 24-hour military time and 12-hour standard time
        </p>

        {/* Live interactive converter */}
        <MilitaryTimeClient />

        {/* Full Chart */}
        <section className="mt-4 mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800">Military Time Chart — 0000 to 2359</h2>
          </div>
          <div className="overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold">Military</th>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold">Standard</th>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold hidden sm:table-cell">Spoken</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {militaryTimes.map(({ military, ampm, spoken, h }) => (
                  <tr key={h} className={h % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-4 py-2 font-mono font-semibold text-sky-600">{military}</td>
                    <td className="px-4 py-2 text-slate-700">{ampm}</td>
                    <td className="px-4 py-2 text-slate-500 text-xs hidden sm:table-cell">{spoken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </section>

        {/* How to convert */}
        <section className="mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">How to Convert Military Time</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-200 p-4 bg-emerald-50">
              <h3 className="font-semibold text-emerald-700 mb-2">Military → Standard</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• 0000–0059: add 12, it&apos;s AM (0000 = 12:00 AM)</li>
                <li>• 0100–1159: remove leading zero, add AM</li>
                <li>• 1200–1259: keep as-is, add PM</li>
                <li>• 1300–2359: subtract 1200, add PM</li>
              </ul>
              <div className="mt-3 text-xs text-emerald-600 font-mono">
                1730 → 1730 - 1200 = 530 → 5:30 PM
              </div>
            </div>
            <div className="rounded-xl border border-sky-200 p-4 bg-sky-50">
              <h3 className="font-semibold text-sky-700 mb-2">Standard → Military</h3>
              <ul className="text-sm text-sky-700 space-y-1">
                <li>• 12:xx AM: replace 12 with 00</li>
                <li>• 1:00–11:59 AM: add leading zero if needed</li>
                <li>• 12:xx PM: keep as-is (1200)</li>
                <li>• 1:00–11:59 PM: add 1200</li>
              </ul>
              <div className="mt-3 text-xs text-sky-600 font-mono">
                3:45 PM → 3:45 + 12:00 = 15:45 → 1545
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Quick reference */}
        <section className="mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Reference — Common Times</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { mil: '0000', std: '12:00 AM' },
              { mil: '0600', std: '6:00 AM' },
              { mil: '0800', std: '8:00 AM' },
              { mil: '0900', std: '9:00 AM' },
              { mil: '1200', std: '12:00 PM' },
              { mil: '1300', std: '1:00 PM' },
              { mil: '1500', std: '3:00 PM' },
              { mil: '1700', std: '5:00 PM' },
              { mil: '1800', std: '6:00 PM' },
              { mil: '2000', std: '8:00 PM' },
              { mil: '2100', std: '9:00 PM' },
              { mil: '2359', std: '11:59 PM' },
            ].map(({ mil, std }) => (
              <div key={mil} className="rounded-lg border border-slate-200 p-3 bg-white text-center">
                <div className="font-mono font-bold text-sky-600">{mil}</div>
                <div className="text-xs text-slate-500 mt-1">{std}</div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/time-converter', title: 'Time Converter', desc: 'Convert between any two cities' },
              { href: '/meeting', title: 'Meeting Planner', desc: 'Find best overlap time' },
              { href: '/pst-to-est', title: 'PST to EST', desc: 'Pacific to Eastern conversion' },
            ].map(({ href, title, desc }) => (
              <a
                key={href}
                href={href}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-colors"
              >
                <div className="font-medium text-slate-800 text-sm">{title}</div>
                <div className="text-xs text-slate-500 mt-1">{desc}</div>
              </a>
            ))}
          </div>
          </div>
        </section>

        {/* E-E-A-T Footer */}
        <footer className="rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500">
          Military time follows the ISO 8601 international standard for time notation.
          Last updated March 2026.
        </footer>
      </div>
    </ContentPageWrapper>
  )
}
