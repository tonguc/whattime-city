'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TajikistanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dushanbe', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Dushanbe', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <span className="inline-block h-3 w-3 rounded-full bg-red-700" />
          <span className={`text-sm font-medium ${subText}`}>Tajikistan Time (TJT)</span>
        </div>
        <div className={`text-4xl font-semibold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${mutedText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>UTC+5 &mdash; No Daylight Saving Time</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'TJT (UTC+5)'],
            ['Population', '~10 million'],
            ['DST', 'Not observed'],
            ['Terrain', '93% mountainous'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roof of the World */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Roof of the World</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Tajikistan is 93% mountainous, home to the legendary Pamir Highway&mdash;one of the world&apos;s highest international roads. Ismoil Somoni Peak reaches 7,495&nbsp;m, the tallest summit in Central Asia. The Fan Mountains and Iskanderkul Lake draw trekkers, while ancient Silk Road heritage is woven into cities like Panjakent and Istaravshan.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Dushanbe', '863K', 'Capital'],
            ['Khujand', '182K', 'Northern hub'],
            ['Bokhtar', '107K', 'Southern city'],
            ['Kulob', '101K', 'Historic center'],
            ['Istaravshan', '60K', 'Silk Road town'],
            ['Panjakent', '41K', 'Ancient Sogdian site'],
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
