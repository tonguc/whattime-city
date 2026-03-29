'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function YemenClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Aden', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Aden', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      <div className="rounded-2xl bg-red-800 p-6 text-center text-white">
        <p className="text-sm font-medium uppercase tracking-wide opacity-80">Current Time in Yemen</p>
        <p className="mt-2 text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </p>
        <p className="mt-1 text-base opacity-90">{mounted ? date : '\u00A0'}</p>
        <p className="mt-1 text-xs font-medium opacity-70">AST &middot; UTC+3 &middot; No DST</p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'AST (UTC+3)'],
            ['Population', '~34 million'],
            ['Capital', 'Sana\u2019a'],
            ['DST', 'Not observed'],
            ['Currency', 'Yemeni Rial (YER)'],
            ['Calling Code', '+967'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Ancient Heritage &amp; UNESCO Sites</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Old City of Sana&apos;a is a UNESCO World Heritage Site with distinctive multi-story tower houses
          dating back over 2,500 years. Socotra Island, another UNESCO site, is called the &ldquo;Galapagos of
          the Indian Ocean&rdquo; for its alien-like dragon blood trees and flora found nowhere else on Earth.
          Yemen is widely considered the birthplace of the Arabian coffee tradition.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Trade &amp; Culture</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Aden&apos;s natural harbor has been a vital trade port for millennia, linking East Africa, India, and
          the Mediterranean via the ancient spice and incense routes. Frankincense and myrrh from Yemen&apos;s
          interior fueled one of the ancient world&apos;s most profitable trades. The country&apos;s architectural
          heritage includes the mud-brick towers of Shibam, often called &ldquo;the Manhattan of the Desert.&rdquo;
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Sana\u2019a', '4M', 'Capital'],
            ['Aden', '1M', 'Port city'],
            ['Taiz', '615K', 'Cultural center'],
            ['Ibb', '480K', 'Green city'],
            ['Al Hudaydah', '430K', 'Red Sea port'],
            ['Mukalla', '300K', 'Coastal hub'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
