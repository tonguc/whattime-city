'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PennsylvaniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/New_York' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/New_York' })
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Pennsylvania</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Eastern Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Keystone State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Pennsylvania Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~13 million — 5th largest US state' },
              { label: 'Historic Role', value: 'Declaration of Independence signed here' },
              { label: 'Famous For', value: 'Philly cheesesteaks, Amish, steel, Liberty Bell' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Where American Time Began — Pennsylvania&apos;s Clock Legacy</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Pennsylvania played a pivotal role in <strong className={heading}>American time standardization</strong>. The <strong className={heading}>Pennsylvania Railroad</strong> — once the largest corporation in the world — was instrumental in pushing for <strong className={heading}>standard time zones in 1883</strong>. Before that, every city set its own local solar time, causing <strong className={heading}>over 300 different local times</strong> across the US.
            </p>
            <p>
              <strong className={heading}>Punxsutawney Phil</strong> — the world&apos;s most famous groundhog — makes his prediction at <strong className={heading}>7:25 AM ET on February 2nd</strong> every year. This event, held since <strong className={heading}>1887</strong>, is broadcast globally and is one of the few <strong className={heading}>time-specific annual traditions</strong> known worldwide.
            </p>
            <p>
              Philadelphia and Pittsburgh anchor opposite ends of the state — both on <strong className={heading}>ET</strong>. Philadelphia is part of the <strong className={heading}>I-95 Northeast Corridor</strong> (alongside NYC and DC), while Pittsburgh is a <strong className={heading}>reinvented tech and healthcare hub</strong> with Carnegie Mellon and UPMC driving a robotics renaissance.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Pennsylvania Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Philadelphia', pop: '1.6M', note: 'Largest city, Liberty Bell, cheesesteaks' },
              { city: 'Pittsburgh', pop: '300K', note: 'Steel City → tech/healthcare hub' },
              { city: 'Allentown', pop: '125K', note: 'Lehigh Valley, logistics center' },
              { city: 'Erie', pop: '95K', note: 'Great Lakes port, Presque Isle' },
              { city: 'Harrisburg', pop: '50K', note: 'State capital, Susquehanna River' },
              { city: 'State College', pop: '42K', note: 'Penn State University, Happy Valley' },
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
