'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function LesothoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Maseru', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Maseru', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="mb-1 text-sm font-medium uppercase tracking-wider text-blue-700">Lesotho Time &mdash; SAST</div>
        <div className={`text-4xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <div className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</div>
        <div className={`mt-2 text-xs ${mutedText}`}>UTC+2 &middot; No DST observed</div>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'SAST (UTC+2)'],
            ['DST', 'Not observed'],
            ['Population', '~2.3 million'],
            ['Dial Code', '+266'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Did You Know?</h3>
        <ul className={`list-disc space-y-2 pl-5 text-sm ${subText}`}>
          <li>Lesotho is the &ldquo;Kingdom in the Sky&rdquo; &mdash; the only country entirely above 1,000 meters elevation.</li>
          <li>Maletsunyane Falls drops 192 meters, making it one of the highest single-drop waterfalls in southern Africa.</li>
          <li>Afriski Mountain Resort offers skiing and snowboarding in Africa, open from June to August.</li>
          <li>The iconic Basotho blanket is a cultural symbol worn as everyday attire across the country.</li>
          <li>Diamond mining is a key industry; the Letšeng mine produces some of the world&apos;s most valuable stones.</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Maseru', '330K', 'Capital'],
            ['Teyateyaneng', '76K', ''],
            ['Mafeteng', '69K', ''],
            ['Hlotse', '48K', 'Leribe'],
            ['Mohale\u2019s Hoek', '33K', ''],
            ['Qacha\u2019s Nek', '25K', ''],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop}{note ? ` \u00B7 ${note}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
