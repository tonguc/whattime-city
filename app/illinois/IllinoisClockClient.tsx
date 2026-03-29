'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IllinoisClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Chicago' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Chicago' })
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Illinois</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'CDT · UTC-5' : 'CST · UTC-6'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Central Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Prairie State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Illinois Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~12.6 million — 6th largest US state' },
              { label: 'Chicago GDP', value: '$770B+ — 3rd largest US metro economy' },
              { label: 'Famous For', value: 'Chicago, deep dish pizza, Obama, blues' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Chicago Time — The Central Time Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Chicago</strong> is the de facto capital of <strong className={heading}>Central Time</strong>. The <strong className={heading}>CME Group (Chicago Mercantile Exchange)</strong> — the world&apos;s largest derivatives marketplace — opens at <strong className={heading}>8:30 AM CT</strong>. Futures markets for <strong className={heading}>corn, soybeans, cattle, and Treasury bonds</strong> are priced on Chicago time, making CT the <strong className={heading}>world&apos;s agricultural and derivatives clock</strong>.
            </p>
            <p>
              Illinois is <strong className={heading}>1 hour behind New York</strong> and <strong className={heading}>2 hours ahead of California</strong>, placing it at the <strong className={heading}>geographic center of the US timezone spectrum</strong>. This makes Chicago a natural <strong className={heading}>meeting-time compromise</strong> — when it&apos;s <strong className={heading}>10 AM in Chicago</strong>, it&apos;s <strong className={heading}>11 AM in NYC and 8 AM in LA</strong>.
            </p>
            <p>
              <strong className={heading}>O&apos;Hare International Airport (ORD)</strong> was the world&apos;s busiest airport for decades and remains a <strong className={heading}>major hub for United and American Airlines</strong>. Its Central Time location makes it the <strong className={heading}>ideal connection point</strong> between East Coast and West Coast flights.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Illinois Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Chicago', pop: '2.7M', note: '3rd largest US city, deep dish, blues' },
              { city: 'Aurora', pop: '180K', note: '2nd largest, Fox River, Wayne\'s World' },
              { city: 'Naperville', pop: '150K', note: 'Top suburb, tech corridor' },
              { city: 'Rockford', pop: '145K', note: 'Manufacturing, aerospace' },
              { city: 'Springfield', pop: '115K', note: 'State capital, Lincoln\'s home' },
              { city: 'Peoria', pop: '110K', note: 'Caterpillar HQ, "Will it play in Peoria?"' },
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
