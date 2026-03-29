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
      <div className={card}>
        <div className="mb-1 flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-red-600" />
          <span className={`text-sm font-medium ${subText}`}>Tonga Time (TOT)</span>
        </div>
        <div className={`text-4xl font-semibold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${mutedText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>UTC+13 &mdash; No Daylight Saving Time</p>
      </div>

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
