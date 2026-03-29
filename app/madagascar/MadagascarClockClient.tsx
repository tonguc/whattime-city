'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MadagascarClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Indian/Antananarivo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Indian/Antananarivo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <span className="inline-block rounded-md bg-green-700 px-2 py-0.5 text-xs font-semibold text-white">EAT</span>
          <span className={`text-sm font-medium ${subText}`}>UTC+3 &middot; No DST</span>
        </div>
        <div className={`mt-3 text-5xl font-bold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>Madagascar observes East Africa Time (EAT) at UTC+3 year-round with no DST changes.</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~30 million'],
            ['Capital', 'Antananarivo'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['Rank', '4th largest island'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Unique Biodiversity */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Unique Biodiversity</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Roughly 90% of Madagascar&apos;s wildlife is found nowhere else on Earth&mdash;including over 100 species of lemurs.</li>
          <li>The Avenue of the Baobabs features 800-year-old Grandidier&apos;s baobab trees lining a dirt road near Morondava.</li>
          <li>Madagascar is a global biodiversity hotspot with rainforests, dry forests, deserts, and mangroves.</li>
          <li>The island split from the Indian subcontinent about 88 million years ago, allowing species to evolve in isolation.</li>
        </ul>
      </div>

      {/* Vanilla Capital */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Vanilla Capital of the World</h3>
        <p className={`text-sm ${subText}`}>
          Madagascar produces around 80% of the world&apos;s vanilla, primarily in the SAVA region of the northeast.
          Vanilla is the country&apos;s most valuable export and is hand-pollinated by local farmers. The lengthy curing
          process&mdash;taking several months&mdash;makes Malagasy vanilla one of the most labor-intensive crops on the planet.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Antananarivo', '1.4M', 'Capital'],
            ['Toamasina', '326K', 'Port city'],
            ['Antsirabe', '256K', 'Highland'],
            ['Mahajanga', '220K', 'Northwest'],
            ['Fianarantsoa', '195K', 'Cultural'],
            ['Toliara', '157K', 'Southwest'],
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
