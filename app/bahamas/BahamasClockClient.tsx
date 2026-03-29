'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BahamasClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Nassau', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Nassau', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in The Bahamas</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">EST/EDT &middot; UTC-5 / UTC-4</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Observes DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~400K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'EST/EDT (UTC\u22125/\u22124)'],
            ['Population', '~400,000'],
            ['Capital', 'Nassau'],
            ['DST', 'Yes (Mar\u2013Nov)'],
            ['Currency', 'Bahamian Dollar (BSD)'],
            ['Dialing Code', '+1-242'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Islands & History */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>700 Islands of Paradise</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Bahamas comprises <strong>700 islands and cays</strong>, of which only about 30 are
          inhabited. The famous <strong>swimming pigs of Exuma</strong> draw visitors from around the
          world. Nassau&apos;s <strong>pirate history</strong> dates back to the early 1700s when it served
          as a base for Blackbeard and other notorious pirates. <strong>Atlantis Paradise Island</strong> is
          one of the Caribbean&apos;s most iconic resorts. The Bahamas is also a major
          <strong> financial center</strong> and tax haven, with no income, capital gains, or wealth taxes.
        </p>
      </div>

      {/* Natural Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Natural Wonders</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Dean&apos;s Blue Hole on Long Island is the world&apos;s deepest known blue hole (202 m)</li>
          <li>The Exuma Cays Land and Sea Park was the Caribbean&apos;s first marine park</li>
          <li>Andros Island has the third-largest barrier reef in the world</li>
          <li>Pink sand beaches on Harbour Island get their colour from crushed coral and shells</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Islands &amp; Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Nassau', '275K', 'Capital / New Providence'],
            ['Freeport', '27K', 'Grand Bahama'],
            ['Marsh Harbour', '6K', 'Abaco Islands'],
            ['George Town', '1.5K', 'Exuma capital'],
            ['Governor\u2019s Harbour', '1.5K', 'Eleuthera'],
            ['Alice Town', '800', 'Bimini gateway'],
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
