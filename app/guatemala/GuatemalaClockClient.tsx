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
      <div className={`${card} text-center`}>
        <div className="inline-block rounded-xl bg-blue-700 px-6 py-4">
          <p className="text-3xl font-bold text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</p>
        </div>
        <p className={`mt-3 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-1 text-xs ${mutedText}`}>CST UTC&minus;6 &middot; No DST</p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Population', '~18 Million'],
            ['Timezone', 'CST (Central)'],
            ['UTC Offset', 'UTC\u22126'],
            ['Capital', 'Guatemala City'],
            ['Currency', 'Quetzal (Q)'],
            ['Language', 'Spanish'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

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
