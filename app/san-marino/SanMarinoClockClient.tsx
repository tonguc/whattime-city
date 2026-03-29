'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Europe/San_Marino'

export default function SanMarinoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in San Marino</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CET &middot; UTC+1 / UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Observes DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~34K</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~34,000 &mdash; one of the world&apos;s smallest and oldest republics</li>
          <li>&bull; Founded on 3 September 301&nbsp;AD, making it the oldest surviving sovereign state</li>
          <li>&bull; Entirely surrounded by Italy, perched on Mount Titano (UNESCO World Heritage)</li>
          <li>&bull; More registered vehicles than residents &mdash; and reportedly no national debt</li>
        </ul>
      </div>

      {/* Landmarks & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Landmarks &amp; Culture</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Three Towers of San Marino</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Guaita, Cesta, and Montale &mdash; medieval fortifications crowning the three peaks of Mount Titano, visible from miles away.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Mount Titano</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A UNESCO site at 739&nbsp;m elevation, offering panoramic views from the Adriatic coast to the Apennine mountains.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Oldest Republic</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Founded by Saint Marinus in 301&nbsp;AD. The constitution dates to 1600, making it the world&apos;s oldest written governing document still in effect.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Formula One &amp; Stamps</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Famous for hosting the San Marino Grand Prix and its collectible postage stamps, a notable source of national revenue.</p>
          </div>
        </div>
      </div>

      {/* Castelli (Municipalities) */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Castelli (Municipalities)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Serravalle', pop: '11K' },
            { name: 'Borgo Maggiore', pop: '7K' },
            { name: 'San Marino City', pop: '4.5K' },
            { name: 'Domagnano', pop: '3.5K' },
            { name: 'Fiorentino', pop: '2.6K' },
            { name: 'Acquaviva', pop: '2K' },
          ].map((c) => (
            <div key={c.name} className={innerCard}>
              <p className={`font-medium text-sm ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
