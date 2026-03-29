'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function JordanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Amman', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Amman', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Jordan
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">AST &middot; UTC+3 (permanent since 2022)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No More DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Amman</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Jordan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Arabia Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Abolished Oct 2022 — permanent UTC+3' },
              { label: 'IANA Identifier', value: 'Asia/Amman' },
              { label: 'Population', value: '~11 million' },
              { label: 'Weekend', value: 'Friday-Saturday' },
              { label: 'Famous For', value: 'Petra, Dead Sea, Wadi Rum, hospitality' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jordan vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Jordan Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Since October 2022, Jordan stays on permanent UTC+3 — the former &ldquo;summer time&rdquo; became the new standard.
          </p>
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
                  { zone: 'New York (ET)', winter: 'JO +8 hrs', summer: 'JO +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'JO +3 hrs', summer: 'JO +2 hrs' },
                  { zone: 'Saudi Arabia (AST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Israel (IST)', winter: 'JO +1 hr', summer: 'Same time!' },
                  { zone: 'Dubai (GST)', winter: 'JO −1 hr', summer: 'JO −1 hr' },
                  { zone: 'India (IST)', winter: 'JO −2:30', summer: 'JO −2:30' },
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

      {/* Permanent DST */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Jordan&apos;s 2022 Decision — Permanent Summer Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>October 2022</strong>, Jordan decided to <strong className={heading}>stay on &ldquo;summer time&rdquo; permanently</strong> — making UTC+3 the year-round standard. This means Jordan is now <strong className={heading}>always 1 hour ahead of where its geographic longitude suggests</strong> (it sits at ~36°E, which naturally corresponds to UTC+2).
            </p>
            <p>
              The rationale: <strong className={heading}>longer evening daylight hours</strong> reduce electricity costs and align better with Gulf business partners (Saudi Arabia, UAE, Qatar — all UTC+3 or UTC+4). During winter, sunrise in Amman is now <strong className={heading}>after 7:30 AM</strong> — meaning schoolchildren commute in darkness.
            </p>
            <p>
              This creates an interesting dynamic with <strong className={heading}>neighboring Israel/Palestine</strong>: during winter, Jordan is <strong className={heading}>1 hour ahead</strong> of Jerusalem (UTC+2), but in summer both are on UTC+3. The <strong className={heading}>Jordan-Israel border</strong> requires timezone adjustments for half the year.
            </p>
          </div>
        </div>
      </section>

      {/* Petra */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Petra by Night — Where Ancient Time Meets Modern</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Petra</strong>, the rose-red Nabataean city carved into cliffs 2,300 years ago, hosts <strong className={heading}>&ldquo;Petra by Night&rdquo;</strong> every Monday, Wednesday, and Thursday — 1,500 candles illuminate the Treasury (Al-Khazneh) starting at <strong className={heading}>8:30 PM AST</strong>. The Nabataeans were master astronomers who aligned their monuments with <strong className={heading}>solar events</strong>.
            </p>
            <p>
              The <strong className={heading}>Dead Sea</strong> (the world&apos;s lowest point at <strong className={heading}>−430m</strong>) is shared with Israel/Palestine. Due to the timezone difference in winter, you can <strong className={heading}>swim at the Jordanian shore</strong> and see the Israeli side operating <strong className={heading}>1 hour behind</strong> — visible on the clocks of resorts across the water.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Jordanian Cities — All on AST (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Amman', pop: '4.1M', note: 'Capital, 7 hills, startup scene' },
              { city: 'Zarqa', pop: '1.5M', note: '2nd city, industrial hub' },
              { city: 'Irbid', pop: '700K', note: 'University city, northern hub' },
              { city: 'Aqaba', pop: '200K', note: 'Red Sea port, diving, free zone' },
              { city: 'Petra / Wadi Musa', pop: '35K', note: 'UNESCO Wonder, tourism capital' },
              { city: 'Wadi Rum', pop: '—', note: 'Mars-like desert, UNESCO, Bedouin camps' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop !== '—' ? `Pop. ${c.pop}` : 'Desert reserve'}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
