'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TongaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Pacific/Tongatapu', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Pacific/Tongatapu', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-purple-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Tonga</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">TOT &middot; UTC+13</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~107K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'TOT (UTC+13)'],
            ['Population', '~107,000'],
            ['DST', 'Not observed'],
            ['Status', 'Polynesian kingdom'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pacific Kingdom */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Pacific&apos;s Only Kingdom</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Tonga is the only Pacific island nation never colonized by a European power, maintaining its Polynesian monarchy for over a thousand years. The Ha&apos;amonga &apos;a Maui trilithon&mdash;often called the &ldquo;Stonehenge of the Pacific&rdquo;&mdash;dates to around 1200&nbsp;AD. In January 2022, the Hunga Tonga&ndash;Hunga Ha&apos;apai eruption was one of the most powerful volcanic events in recorded history. Today, Tonga is renowned for humpback whale watching and its warm Polynesian hospitality.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Settlements</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Nuku\u02bbalofa', '25K', 'Capital'],
            ['Neiafu', '6K', 'Vava\u02bbu hub'],
            ['Haveluloto', '4K', 'Tongatapu'],
            ['Vaini', '3K', 'Tongatapu'],
            ['Pangai', '2K', 'Ha\u02bbapai'],
            ['Ohonua', '1K', '\u02bbEua island'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
