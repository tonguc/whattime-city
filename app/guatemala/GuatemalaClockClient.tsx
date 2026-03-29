'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function GuatemalaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Guatemala', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Guatemala', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Guatemala</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CST &middot; UTC-6</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~18M</span>
          </div>
        </div>
      </section>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Heart of the Maya World</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Guatemala was the cradle of Maya civilization, home to the monumental ruins of Tikal&mdash;a UNESCO World Heritage Site rising above the Pet&eacute;n jungle canopy. Antigua Guatemala, another UNESCO site, showcases beautifully preserved colonial architecture set against a backdrop of three volcanoes. The country is also one of the world&apos;s top coffee producers, with highland beans prized for their complexity.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Natural Wonders</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Lake Atitl&aacute;n, ringed by volcanoes and indigenous Maya villages, has been called the &ldquo;most beautiful lake in the world.&rdquo; Deeper in the jungle, the turquoise limestone pools of Semuc Champey remain one of Central America&apos;s best-kept secrets, drawing adventurous travelers year-round.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Guatemala City', '1M \u00b7 Capital'],
            ['Mixco', '473K'],
            ['Villa Nueva', '406K'],
            ['Pet\u00e9n', '170K'],
            ['Quetzaltenango', '152K'],
            ['Escuintla', '103K'],
          ].map(([city, info]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
