'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

interface CityLink {
  name: string
  href: string
}

interface Props {
  tz: string
  abbr: string
  stdName: string
  stdAbbr: string
  dstAbbr: string
  utcStd: string
  utcDst: string
  color: string
  states: string[]
  majorCities: CityLink[]
  dstNote: string
}

export default function TZExplainerClient({
  tz, abbr, stdName, stdAbbr, dstAbbr, utcStd, utcDst, color, states, majorCities, dstNote
}: Props) {
  const { isLight } = useCityContext()

  function getInitial() {
    const now = new Date()
    const ca = now.toLocaleTimeString('en-US', { timeZone: tz, timeZoneName: 'short' }).split(' ').pop() ?? ''
    return {
      time: now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      date: now.toLocaleDateString('en-US', { timeZone: tz, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      currentAbbr: ca,
    }
  }
  const init = getInitial()
  const [time, setTime] = useState(init.time)
  const [date, setDate] = useState(init.date)
  const [currentAbbr, setCurrentAbbr] = useState(init.currentAbbr)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const ca = now.toLocaleTimeString('en-US', { timeZone: tz, timeZoneName: 'short' }).split(' ').pop() ?? ''
      setTime(now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
      setDate(now.toLocaleDateString('en-US', { timeZone: tz, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      setCurrentAbbr(ca)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [tz])

  const isDST = currentAbbr === dstAbbr
  const currentOffset = isDST ? utcDst : utcStd

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-600 bg-slate-700 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <section>
        <div className={`rounded-2xl text-white p-6 text-center ${color}`}>
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            {abbr} — {stdName}
          </div>
          <div suppressHydrationWarning className="text-6xl font-bold tabular-nums tracking-tight mb-1">
            {time}
          </div>
          <div suppressHydrationWarning className="text-sm opacity-80 mb-3">
            {date}
          </div>
          <div className="flex justify-center gap-4 text-sm">
            <span className={`px-3 py-1 rounded-full font-medium ${isDST ? 'bg-white/20' : 'bg-white/40'}`}>
              {stdAbbr} {utcStd}
            </span>
            <span className={`px-3 py-1 rounded-full font-medium ${isDST ? 'bg-white/40' : 'bg-white/20'}`}>
              {dstAbbr} {utcDst} (DST)
            </span>
          </div>
          <div suppressHydrationWarning className="mt-2 text-xs opacity-75">
            Currently: {currentAbbr} ({currentOffset})
            {isDST ? ' · Daylight Saving Time active' : ' · Standard Time active'}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Standard Offset', value: utcStd },
              { label: 'DST Offset', value: utcDst },
              { label: 'Standard Abbr', value: stdAbbr },
              { label: 'DST Abbr', value: dstAbbr },
              { label: 'IANA Identifier', value: tz },
              { label: 'DST Schedule', value: dstNote.split(':')[1]?.trim() ?? dstNote },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>States in {abbr} — {stdName.replace('Standard ', '')}</h2>
          <div className="flex flex-wrap gap-2">
            {states.map(state => (
              <span key={state} className={`px-3 py-1 rounded-full text-sm border ${isLight ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-slate-600 bg-slate-700 text-slate-200'}`}>
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in {abbr}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {majorCities.map(city => (
              <Link
                key={city.href}
                href={city.href}
                className={`px-3 py-2 rounded-xl border text-sm text-center transition-colors ${
                  isLight
                    ? 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                    : 'border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500'
                }`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DST Info */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Daylight Saving Time</h2>
          <div className={`text-sm leading-relaxed space-y-2 ${subText}`}>
            <p>
              <strong className={heading}>{dstNote}</strong>
            </p>
            <p>
              Clocks spring forward 1 hour at 2:00 AM on the second Sunday in March,
              changing from {stdAbbr} ({utcStd}) to {dstAbbr} ({utcDst}).
            </p>
            <p>
              Clocks fall back 1 hour at 2:00 AM on the first Sunday in November,
              returning from {dstAbbr} ({utcDst}) to {stdAbbr} ({utcStd}).
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
