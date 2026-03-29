'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BarbadosClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Barbados', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Barbados', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-cyan-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Barbados</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">AST &middot; UTC-4</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~288K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'AST (UTC\u22124)'],
            ['Population', '~288,000'],
            ['Capital', 'Bridgetown'],
            ['DST', 'Not observed'],
            ['Currency', 'Barbadian Dollar (BBD)'],
            ['Dialing Code', '+1-246'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Heritage & Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Island Heritage</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Barbados is the <strong>birthplace of Rihanna</strong> and home to one of the oldest parliaments
          in the Americas, established in <strong>1639</strong>. The island&apos;s rum heritage runs deep&mdash;
          <strong>Mount Gay</strong> distillery, founded in 1703, is the oldest commercial rum producer in
          the world. Barbados became a <strong>republic in 2021</strong>, replacing the British monarch as
          head of state. Cricket is a national passion, and the island is a celebrated coral formation.
        </p>
      </div>

      {/* Island Life */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Island Life</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Bridgetown&apos;s historic garrison area is a UNESCO World Heritage Site</li>
          <li>Barbados has produced more cricket legends per capita than any other nation</li>
          <li>Oistins Fish Fry is a beloved Friday night tradition for locals and visitors</li>
          <li>The island is the easternmost Caribbean island&mdash;entirely in the Atlantic</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Towns</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Bridgetown', '110K', 'Capital / UNESCO'],
            ['Speightstown', '3.5K', 'Historic north'],
            ['Oistins', '3K', 'Fishing village'],
            ['Holetown', '2K', 'First settlement'],
            ['St. Lawrence Gap', '2K', 'Nightlife hub'],
            ['Bathsheba', '1.5K', 'East coast surf'],
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
