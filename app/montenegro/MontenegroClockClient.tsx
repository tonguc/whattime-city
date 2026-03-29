'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MontenegroClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Podgorica', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Podgorica', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Podgorica' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Podgorica' })
      setIsDST(new Date(nowStr).getTimezoneOffset() !== new Date(janStr).getTimezoneOffset())
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Montenegro</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">{isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU-style DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Podgorica</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Montenegro Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Podgorica' },
              { label: 'Population', value: '~620,000' },
              { label: 'Coastline', value: '294 km of Adriatic shore' },
              { label: 'Famous For', value: 'Bay of Kotor, Sveti Stefan, hiking' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bay of Kotor — Europe&apos;s Southernmost Fjord</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Bay of Kotor</strong> is a <strong className={heading}>UNESCO World Heritage site</strong> — often called <strong className={heading}>Europe&apos;s southernmost fjord</strong> (technically a submerged river canyon). The medieval town of <strong className={heading}>Kotor</strong> with its Venetian walls and labyrinthine streets is one of the <strong className={heading}>fastest-growing cruise destinations</strong> in the Mediterranean.
            </p>
            <p>
              Montenegro means <strong className={heading}>&ldquo;Black Mountain&rdquo;</strong> — and the country lives up to the name with <strong className={heading}>Durmitor National Park</strong> (UNESCO, peaks to 2,522m) and the <strong className={heading}>Tara River Canyon</strong> (the deepest canyon in Europe at 1,300m). Despite its tiny size, Montenegro has become a <strong className={heading}>major tourism and real estate destination</strong>, with <strong className={heading}>Porto Montenegro</strong> in Tivat attracting superyachts.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Montenegro Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Podgorica', pop: '190K', note: 'Capital, modern city, Morača canyon' },
              { city: 'Kotor', pop: '13K', note: 'UNESCO Old Town, Bay of Kotor' },
              { city: 'Budva', pop: '20K', note: 'Beach resort, nightlife, Old Town' },
              { city: 'Nik\u0161i\u0107', pop: '56K', note: '2nd city, Trebjesa brewery' },
              { city: 'Tivat', pop: '15K', note: 'Porto Montenegro, superyacht marina' },
              { city: '\u017dabljak', pop: '2K', note: 'Durmitor ski/hiking, Black Lake' },
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
