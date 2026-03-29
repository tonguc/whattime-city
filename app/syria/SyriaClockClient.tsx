'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SyriaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Damascus', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Damascus', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Syria</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/30">AST &middot; UTC+3</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST (since 2022)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Damascus</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Syria Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Arabia Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Permanent UTC+3 since 2022' },
              { label: 'IANA Identifier', value: 'Asia/Damascus' },
              { label: 'Previous Zone', value: 'Was EET/EEST (UTC+2/+3) with DST until 2022' },
              { label: 'Population', value: '~22 million (pre-war)' },
              { label: 'Famous For', value: 'Damascus — oldest continuously inhabited city' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Damascus — The World&apos;s Oldest Continuously Inhabited City</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Damascus</strong> is widely considered the <strong className={heading}>oldest continuously inhabited city in the world</strong> — with evidence of habitation from <strong className={heading}>10,000-8,000 BC</strong>. Humans have been telling time in Damascus for <strong className={heading}>12,000 years</strong>. The city has seen Aramean, Roman, Byzantine, Umayyad, and Ottoman clocks.
            </p>
            <p>
              In <strong className={heading}>2022</strong>, Syria switched to <strong className={heading}>permanent UTC+3</strong> — effectively staying on summer time year-round, like neighboring Jordan. Before this, Syria used <strong className={heading}>EET/EEST with DST</strong>. The change aligns Syria with <strong className={heading}>Saudi Arabia, Iraq, and Jordan</strong> at UTC+3.
            </p>
            <p>
              Syria&apos;s <strong className={heading}>Umayyad Mosque in Damascus</strong> (built 705 AD) is one of the oldest and largest mosques in the world. The country was historically the <strong className={heading}>center of the Umayyad Caliphate</strong> — the world&apos;s largest empire at its peak, stretching from Spain to India.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Syria Key Cities — All on UTC+3</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Damascus', pop: '2.5M', note: 'Capital, oldest city, Umayyad Mosque' },
              { city: 'Aleppo', pop: '2.1M', note: 'Ancient Citadel, UNESCO, souk' },
              { city: 'Homs', pop: '775K', note: 'Central Syria, Krak des Chevaliers nearby' },
              { city: 'Latakia', pop: '400K', note: 'Mediterranean port, coastal city' },
              { city: 'Hama', pop: '350K', note: 'Famous norias (water wheels)' },
              { city: 'Palmyra', pop: '50K', note: 'Ancient ruins, Roman-era UNESCO site' },
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
