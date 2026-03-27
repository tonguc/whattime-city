'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import MilitaryTimeClient from './MilitaryTimeClient'

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

const faqItems = [
  {
    name: 'What is military time?',
    text: 'Military time is a 24-hour clock system where the day runs from 0000 (midnight) to 2359 (11:59 PM). It eliminates AM/PM ambiguity by using a continuous count: 0100 = 1:00 AM, 1300 = 1:00 PM, 2300 = 11:00 PM. It is used by the military, emergency services, hospitals, aviation, and many international contexts.',
  },
  {
    name: 'How do you convert military time to standard time?',
    text: 'For hours 0000–1159: remove the leading zero and add AM (e.g., 0900 = 9:00 AM). For hours 1200–2359: subtract 1200 and add PM (e.g., 1500 = 3:00 PM, 2100 = 9:00 PM). Midnight is 0000 and noon is 1200.',
  },
  {
    name: 'What is 1300 in military time?',
    text: '1300 in military time is 1:00 PM. To convert: 1300 - 1200 = 100, which is 1:00 PM.',
  },
  {
    name: 'What is 0000 in military time?',
    text: '0000 (zero hundred hours) in military time is midnight — the start of a new day. It is equivalent to 12:00 AM. Note: 2400 is sometimes used to mean the end of a day (same clock moment as 0000 of the next day).',
  },
  {
    name: 'What is 1800 in military time?',
    text: '1800 (eighteen hundred hours) in military time is 6:00 PM. 1800 - 1200 = 600 = 6:00 PM.',
  },
  {
    name: 'How do you say military time out loud?',
    text: 'Military time is spoken as hours followed by "hundred hours" (for whole hours) or "hours" (for minutes). Examples: 0900 = "zero nine hundred hours", 1430 = "fourteen thirty hours", 0015 = "zero zero fifteen hours". The word "hours" can be omitted in informal usage.',
  },
  {
    name: 'What countries use 24-hour time?',
    text: 'Most of the world outside the US, Canada, Australia, and the UK uses the 24-hour clock as the everyday standard, including all EU countries, most of Asia, Latin America, and Africa. In the US and UK, 24-hour time is mainly used in technical, military, medical, and transportation contexts.',
  },
]

export default function MilitaryTimePageClient() {
  const { isLight } = useCityContext()

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white'
    : 'rounded-2xl border border-slate-700 bg-slate-800'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const tableHead = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const tableHeadText = isLight ? 'text-slate-600' : 'text-slate-300'
  const tableDivider = isLight ? 'divide-y divide-slate-100' : 'divide-y divide-slate-700'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700 bg-slate-700/50 p-4'
  const borderLight = isLight ? 'border-slate-100' : 'border-slate-700'
  const footerClass = isLight
    ? 'rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500'
    : 'rounded-xl border border-slate-700/50 p-4 bg-slate-800/50 text-xs text-slate-400'

  return (
    <div>
      <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${heading}`}>
        Military Time Converter
      </h1>
      <p className={`text-lg mb-6 ${subText}`}>
        Convert between 24-hour military time and 12-hour standard time
      </p>

      {/* Live interactive converter */}
      <MilitaryTimeClient />

      {/* Full Chart */}
      <section className="mt-4 mb-4">
        <div className={`${card} overflow-hidden`}>
          <div className={`px-6 pt-6 pb-4 border-b ${borderLight}`}>
            <h2 className={`text-xl font-semibold ${heading}`}>Military Time Chart — 0000 to 2359</h2>
          </div>
          <div className="overflow-hidden">
            <table className="w-full text-sm">
              <thead className={tableHead}>
                <tr>
                  <th className={`text-left px-4 py-2 font-semibold ${tableHeadText}`}>Military</th>
                  <th className={`text-left px-4 py-2 font-semibold ${tableHeadText}`}>Standard</th>
                  <th className={`text-left px-4 py-2 font-semibold hidden sm:table-cell ${tableHeadText}`}>Spoken</th>
                </tr>
              </thead>
              <tbody className={tableDivider}>
                {militaryTimes.map(({ military, ampm, spoken, h }) => (
                  <tr key={h} className={h % 2 === 0 ? (isLight ? 'bg-white' : 'bg-slate-800') : (isLight ? 'bg-slate-50/50' : 'bg-slate-700/30')}>
                    <td className={`px-4 py-2 font-semibold tabular-nums ${isLight ? 'text-sky-600' : 'text-sky-400'}`}>{military}</td>
                    <td className={`px-4 py-2 ${subText}`}>{ampm}</td>
                    <td className={`px-4 py-2 text-xs hidden sm:table-cell ${mutedText}`}>{spoken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to convert */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>How to Convert Military Time</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`rounded-xl border p-4 ${isLight ? 'border-emerald-200 bg-emerald-50' : 'border-emerald-700/50 bg-emerald-900/20'}`}>
              <h3 className={`font-semibold mb-2 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>Military → Standard</h3>
              <ul className={`text-sm space-y-1 ${isLight ? 'text-emerald-700' : 'text-emerald-300'}`}>
                <li>• 0000–0059: add 12, it&apos;s AM (0000 = 12:00 AM)</li>
                <li>• 0100–1159: remove leading zero, add AM</li>
                <li>• 1200–1259: keep as-is, add PM</li>
                <li>• 1300–2359: subtract 1200, add PM</li>
              </ul>
              <div className={`mt-3 text-xs tabular-nums ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
                1730 → 1730 - 1200 = 530 → 5:30 PM
              </div>
            </div>
            <div className={`rounded-xl border p-4 ${isLight ? 'border-sky-200 bg-sky-50' : 'border-sky-700/50 bg-sky-900/20'}`}>
              <h3 className={`font-semibold mb-2 ${isLight ? 'text-sky-700' : 'text-sky-400'}`}>Standard → Military</h3>
              <ul className={`text-sm space-y-1 ${isLight ? 'text-sky-700' : 'text-sky-300'}`}>
                <li>• 12:xx AM: replace 12 with 00</li>
                <li>• 1:00–11:59 AM: add leading zero if needed</li>
                <li>• 12:xx PM: keep as-is (1200)</li>
                <li>• 1:00–11:59 PM: add 1200</li>
              </ul>
              <div className={`mt-3 text-xs tabular-nums ${isLight ? 'text-sky-600' : 'text-sky-400'}`}>
                3:45 PM → 3:45 + 12:00 = 15:45 → 1545
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick reference */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Quick Reference — Common Times</h2>
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
              <div key={mil} className={`${innerCard} text-center`}>
                <div className={`font-bold tabular-nums ${isLight ? 'text-sky-600' : 'text-sky-400'}`}>{mil}</div>
                <div className={`text-xs mt-1 ${mutedText}`}>{std}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={innerCard}>
                <h3 className={`font-semibold text-sm mb-1 ${heading}`}>{item.name}</h3>
                <p className={`text-sm ${subText}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-4">
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/time-converter/', title: 'Time Converter', desc: 'Convert between any two cities' },
              { href: '/meeting/', title: 'Meeting Planner', desc: 'Find best overlap time' },
              { href: '/pst-to-est/', title: 'PST to EST', desc: 'Pacific to Eastern conversion' },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className={`p-4 rounded-xl border transition-colors ${isLight ? 'border-slate-200 bg-white hover:border-sky-300' : 'border-slate-700 bg-slate-700/30 hover:border-sky-500'}`}
              >
                <div className={`font-medium text-sm ${heading}`}>{title}</div>
                <div className={`text-xs mt-1 ${mutedText}`}>{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T Footer */}
      <footer className={footerClass}>
        Military time follows the ISO 8601 international standard for time notation.
        Last updated March 2026.
      </footer>
    </div>
  )
}
