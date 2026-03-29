'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Conakry'

export default function GuineaClockClient() {
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

  const cities = [
    { name: 'Conakry', pop: '1.9M', note: 'Capital' },
    { name: 'Nzérékoré', pop: '250K', note: 'Forest region' },
    { name: 'Kankan', pop: '195K', note: 'Upper Guinea' },
    { name: 'Kindia', pop: '180K', note: 'Fouta gateway' },
    { name: 'Labé', pop: '90K', note: 'Fouta Djallon' },
    { name: 'Kissidougou', pop: '90K', note: 'Southern hub' },
  ]

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <div className={card}>
        <div className="mb-1 flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-green-700" />
          <span className={`text-sm font-medium ${subText}`}>GMT &middot; UTC+0 &middot; No DST</span>
        </div>
        <div className={`text-4xl font-semibold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${mutedText}`}>{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~14 million'],
            ['Time Zone', 'GMT (UTC+0)'],
            ['DST', 'Not observed'],
            ['Currency', 'Guinean franc (GNF)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bauxite & Rivers */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>World&apos;s Bauxite Giant</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Guinea holds the largest known bauxite reserves on Earth&mdash;an estimated one-third of the global total.
          The country is also the headwater source of three major West African rivers: the Niger, the Gambia,
          and the Senegal. The Fouta Djallon highlands, sometimes called the &ldquo;water tower of West Africa,&rdquo;
          feed these river systems that sustain millions across the region.
        </p>
      </div>

      {/* Mount Nimba */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Mount Nimba &amp; Natural Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Mount Nimba Strict Nature Reserve, shared with C&ocirc;te d&apos;Ivoire and Liberia, is a UNESCO World
          Heritage Site reaching 1,752&nbsp;m. Its high-altitude grasslands harbor viviparous toads and
          other endemic species found nowhere else. Guinea&apos;s landscape transitions from coastal mangroves
          to savanna plains to dense highland forests.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid gap-2">
          {cities.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
                <p className={`text-xs ${mutedText}`}>{c.note}</p>
              </div>
              <span className={`text-xs font-medium ${subText}`}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
