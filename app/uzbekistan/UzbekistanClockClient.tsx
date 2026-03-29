'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function UzbekistanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tashkent', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Tashkent', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Uzbekistan
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">UZT · UTC+5 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-green-400/30">Heart of the Silk Road</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Uzbekistan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'UZT — Uzbekistan Time (UTC+5)' },
              { label: 'DST Status', value: 'Never observed (post-Soviet)' },
              { label: 'IANA Identifier', value: 'Asia/Tashkent, Asia/Samarkand' },
              { label: 'Population', value: '~36 million (Central Asia\'s largest)' },
              { label: 'Same TZ As', value: 'Pakistan, Maldives, Tajikistan' },
              { label: 'Famous For', value: 'Silk Road cities, Ulugh Beg, plov, cotton' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uzbekistan vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Uzbekistan Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Their Winter</th>
                  <th className="pb-2">Their Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'UZ +10 hrs', summer: 'UZ +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'UZ +5 hrs', summer: 'UZ +4 hrs' },
                  { zone: 'Moscow (MSK)', winter: 'UZ +2 hrs', summer: 'UZ +2 hrs' },
                  { zone: 'India (IST)', winter: 'UZ −0:30', summer: 'UZ −0:30' },
                  { zone: 'China (CST)', winter: 'UZ −3 hrs', summer: 'UZ −3 hrs' },
                  { zone: 'Kazakhstan-West (AQTT)', winter: 'Same time!', summer: 'Same time!' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{winter}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Silk Road */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Silk Road Cities — Where Time Was Measured by Caravan Routes</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Uzbekistan contains the <strong className={heading}>most spectacular Silk Road cities</strong> in the world: <strong className={heading}>Samarkand, Bukhara, and Khiva</strong> — all UNESCO World Heritage Sites. For millennia, these cities were the <strong className={heading}>crossroads of civilizations</strong> — Chinese, Persian, Indian, Turkish, and Greek traders all passed through.
            </p>
            <p>
              <strong className={heading}>Samarkand&apos;s Registan Square</strong> is one of the most beautiful public spaces ever built — three madrasas covered in turquoise tiles from the 15th-17th centuries. <strong className={heading}>Bukhara</strong> had 365 mosques (one for each day of the year) and was the intellectual center of the Islamic world. <strong className={heading}>Khiva&apos;s Itchan Kala</strong> is an entire walled inner city preserved intact.
            </p>
          </div>
        </div>
      </section>

      {/* Ulugh Beg */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ulugh Beg — The Sultan Who Measured the Stars</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>1420</strong>, the Timurid ruler <strong className={heading}>Ulugh Beg</strong> built a <strong className={heading}>massive astronomical observatory in Samarkand</strong> — with a 30-meter sextant that was the largest astronomical instrument in the world. His star catalog listed <strong className={heading}>1,018 stars</strong> with unprecedented precision.
            </p>
            <p>
              Ulugh Beg calculated the <strong className={heading}>length of a year as 365 days, 5 hours, 49 minutes, and 15 seconds</strong> — an error of only <strong className={heading}>25 seconds</strong> compared to modern measurements. This was <strong className={heading}>more accurate than Copernicus</strong> would achieve 100 years later. Central Asia&apos;s obsession with precise timekeeping predates European clockmaking by centuries.
            </p>
            <p>
              Today Uzbekistan is the <strong className={heading}>most populous Central Asian country</strong> (36M) and is experiencing a <strong className={heading}>tourism boom</strong> since President Mirziyoyev&apos;s reforms began in 2016 — visa liberalization has made visiting easier than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Uzbek Cities — All on UZT (UTC+5)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tashkent', pop: '2.9M', note: 'Capital, Soviet-era metro, modern growth' },
              { city: 'Samarkand', pop: '550K', note: 'Registan Square, Ulugh Beg observatory' },
              { city: 'Bukhara', pop: '280K', note: '"Noble Bukhara", 2,500+ years old' },
              { city: 'Namangan', pop: '630K', note: 'Fergana Valley, agriculture hub' },
              { city: 'Andijan', pop: '440K', note: 'Babur\'s birthplace (Mughal founder)' },
              { city: 'Khiva', pop: '90K', note: 'Walled city, Itchan Kala UNESCO' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
