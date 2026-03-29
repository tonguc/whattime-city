'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BelarusClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Minsk', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Minsk', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-green-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Belarus</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">MSK &middot; UTC+3 (permanent)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2011</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Minsk</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Belarus Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'MSK — Moscow Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Abolished 2011 — permanent UTC+3' },
              { label: 'IANA Identifier', value: 'Europe/Minsk' },
              { label: 'Population', value: '~9.4 million' },
              { label: 'IT Sector', value: 'Hi-Tech Park — World of Tanks, Viber, EPAM' },
              { label: 'Famous For', value: 'Belovezhskaya Pushcha, IT outsourcing' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Belarus Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'BY +8 hrs', summer: 'BY +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'BY +3 hrs', summer: 'BY +2 hrs' },
                  { zone: 'Moscow (MSK)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Poland (CET/CEST)', winter: 'BY −2 hrs', summer: 'BY −1 hr' },
                  { zone: 'Lithuania (EET/EEST)', winter: 'BY −1 hr', summer: 'Same time!' },
                  { zone: 'Ukraine (EET/EEST)', winter: 'BY −1 hr', summer: 'Same time!' },
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

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Moscow Time on EU&apos;s Border — The Timezone Gap</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Belarus uses <strong className={heading}>Moscow Time (UTC+3) permanently</strong> — making it the <strong className={heading}>only European country besides Russia and Turkey</strong> on permanent UTC+3. This creates a <strong className={heading}>2-hour gap</strong> with neighboring <strong className={heading}>Poland (CET, UTC+1)</strong> during winter — one of the largest timezone jumps at any land border in Europe.
            </p>
            <p>
              The <strong className={heading}>Hi-Tech Park (HTP)</strong> in Minsk was Belarus&apos;s Silicon Valley — home to <strong className={heading}>EPAM Systems</strong> (now a $10B+ NYSE-listed IT services company), <strong className={heading}>Wargaming (World of Tanks)</strong>, and development of <strong className={heading}>Viber</strong>. The HTP leveraged the <strong className={heading}>UTC+3 timezone</strong> to serve both European and Asian clients during overlap hours.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Belarus Key Cities — All on MSK (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Minsk', pop: '2M', note: 'Capital, IT hub, Soviet architecture' },
              { city: 'Gomel', pop: '530K', note: '2nd city, SE Belarus, Chernobyl affected' },
              { city: 'Mogilev', pop: '380K', note: '3rd city, Dnieper River' },
              { city: 'Vitebsk', pop: '370K', note: 'Chagall\'s birthplace, Slavianski Bazaar' },
              { city: 'Grodno', pop: '370K', note: 'Western hub, Polish border, historic' },
              { city: 'Brest', pop: '340K', note: 'Fortress, Polish border crossing' },
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
