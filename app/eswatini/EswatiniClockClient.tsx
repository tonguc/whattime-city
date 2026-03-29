'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Mbabane'

export default function EswatiniClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50 p-4' : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  const cities = [
    { name: 'Manzini', pop: '110K', note: 'Largest city' },
    { name: 'Mbabane', pop: '95K', note: 'Admin capital' },
    { name: 'Lobamba', pop: '—', note: 'Ceremonial capital' },
    { name: 'Siteki', pop: '25K', note: 'Eastern region' },
    { name: 'Nhlangano', pop: '10K', note: 'Southern hub' },
    { name: 'Big Bend', pop: '10K', note: 'Sugar industry' },
  ]

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Eswatini</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">SAST &middot; UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~1.2M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~1.2 million'],
            ['Time Zone', 'SAST (UTC+2)'],
            ['DST', 'Not observed'],
            ['Currency', 'Swazi lilangeni (SZL)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monarchy */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Africa&apos;s Last Absolute Monarchy</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Eswatini&mdash;formerly known as Swaziland until its renaming in 2018&mdash;is the last absolute
          monarchy in Africa. The country has two capitals: Mbabane serves as the administrative capital,
          while Lobamba is the traditional and ceremonial seat of the monarchy. The annual Umhlanga
          (Reed Dance) festival draws tens of thousands of young women in a celebration of cultural
          heritage and national unity.
        </p>
      </div>

      {/* Wildlife */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Hlane Royal National Park</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Hlane Royal National Park is Eswatini&apos;s largest protected area and a key site for rhino
          conservation in southern Africa. The park shelters both white and black rhinos alongside
          elephants, lions, and diverse birdlife. Despite being one of Africa&apos;s smallest countries
          at just 17,364&nbsp;km&sup2;, Eswatini&apos;s varied terrain&mdash;from highveld mountains to
          lowveld savanna&mdash;supports remarkable ecological diversity.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid gap-2">
          {cities.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
                <p className={`text-xs ${mutedText}`}>{c.note}</p>
              </div>
              <span className={`text-xs font-medium ${subText}`}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
