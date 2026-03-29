'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MichiganClockClient() {
  const { isLight } = useCityContext()
  const [timeET, setTimeET] = useState('--:--:--')
  const [timeCT, setTimeCT] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeET(now.toLocaleTimeString('en-US', { timeZone: 'America/Detroit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeCT(now.toLocaleTimeString('en-US', { timeZone: 'America/Menominee', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Detroit', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Detroit' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Detroit' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Michigan</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeET : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Lower Peninsula (ET)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Upper Peninsula west (CT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">
              {isDST ? 'EDT · UTC-4 / CDT · UTC-5' : 'EST · UTC-5 / CST · UTC-6'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Michigan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'ET — Eastern Time (Lower Peninsula + most UP)' },
              { label: 'CT Counties', value: 'Gogebic, Iron, Dickinson, Menominee (UP west)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifiers', value: 'America/Detroit + America/Menominee' },
              { label: 'Population', value: '~10 million' },
              { label: 'Famous For', value: 'Detroit auto industry, Great Lakes, Motown' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Detroit Time — When the Auto Industry Sets the Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Michigan has its own <strong className={heading}>IANA timezone identifier — America/Detroit</strong> — separate from America/New_York. This is because Michigan <strong className={heading}>adopted Eastern Time later than the East Coast</strong> and had a different DST history. Detroit was originally on <strong className={heading}>Central Time</strong> and only switched to ET in <strong className={heading}>1915</strong>.
            </p>
            <p>
              The <strong className={heading}>Big Three automakers</strong> (GM, Ford, Stellantis) all headquarter in metro Detroit and operate on <strong className={heading}>ET</strong>. When Detroit announces <strong className={heading}>quarterly earnings, new model launches, or factory shifts</strong>, the global auto industry follows <strong className={heading}>Michigan time</strong>. The <strong className={heading}>North American International Auto Show (NAIAS)</strong> is scheduled around ET.
            </p>
            <p>
              Michigan&apos;s <strong className={heading}>Upper Peninsula (UP)</strong> is split between timezones — most follows <strong className={heading}>ET</strong> like the Lower Peninsula, but the <strong className={heading}>four westernmost counties use CT</strong>. The UP is closer to <strong className={heading}>Wisconsin and Minnesota</strong> than to Detroit, making CT more practical for daily life.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Michigan Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Detroit', pop: '640K', note: 'ET · Motor City, Motown, comeback' },
              { city: 'Grand Rapids', pop: '200K', note: 'ET · Furniture capital, craft beer' },
              { city: 'Ann Arbor', pop: '125K', note: 'ET · University of Michigan' },
              { city: 'Lansing', pop: '115K', note: 'ET · State capital, GM factory' },
              { city: 'Traverse City', pop: '15K', note: 'ET · Cherry capital, wine, tourism' },
              { city: 'Marquette', pop: '20K', note: 'ET · UP\'s largest, Northern Michigan U' },
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
