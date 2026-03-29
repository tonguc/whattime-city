'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BhutanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Thimphu', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Thimphu', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Bhutan</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">BTT &middot; UTC+6</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~780K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'BTT (UTC+6)'],
            ['Population', '~780,000'],
            ['Capital', 'Thimphu'],
            ['DST', 'Not observed'],
            ['Currency', 'Ngultrum (BTN)'],
            ['Dialing Code', '+975'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Happiness & Heritage */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Last Shangri-La</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Bhutan measures prosperity through <strong>Gross National Happiness</strong> rather than GDP&mdash;
          the only country in the world to do so. It is the world&apos;s only <strong>carbon-negative</strong> nation,
          absorbing more CO&#8322; than it produces. The legendary <strong>Tiger&apos;s Nest Monastery</strong> (Paro
          Taktsang) clings to a cliffside at 3,120 metres. Thimphu is the only capital in the world with
          <strong> no traffic lights</strong>&mdash;a policeman directs traffic instead.
        </p>
      </div>

      {/* Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Culture &amp; Traditions</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Archery (datse) is the national sport&mdash;tournaments are festive celebrations</li>
          <li>Television and the internet only arrived in Bhutan in 1999</li>
          <li>Tourism follows a &ldquo;high value, low impact&rdquo; policy with daily fees</li>
          <li>Over 70% of the country is covered by forest, protected by the constitution</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities &amp; Towns</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Thimphu', '115K', 'Capital city'],
            ['Phuntsholing', '27K', 'India border town'],
            ['Paro', '11K', 'Airport &amp; Tiger\u2019s Nest'],
            ['Gelephu', '10K', 'Southern gateway'],
            ['Samdrup Jongkhar', '8K', 'Eastern hub'],
            ['Punakha', '6K', 'Former capital'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop} &middot; {note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
