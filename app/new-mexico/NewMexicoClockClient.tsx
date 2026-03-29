'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NewMexicoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Denver', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in New Mexico
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">MT · UTC-7 / UTC-6</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Observes DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~2.1 Million</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>New Mexico Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Mountain Time (MT)' },
              { label: 'UTC Offset', value: 'UTC-7 (standard) / UTC-6 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — clocks spring forward in March' },
              { label: 'IANA Identifier', value: 'America/Denver' },
              { label: 'Note', value: 'Navajo Nation in NW observes DST separately' },
              { label: 'Population', value: '~2.1 million (2024 est.)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Los Alamos & Science */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Land of Enchantment &mdash; Science &amp; Discovery</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              New Mexico played a pivotal role in the 20th century&apos;s most consequential scientific achievement. <strong className={heading}>Los Alamos National Laboratory</strong>, established in 1943 as part of the <strong className={heading}>Manhattan Project</strong>, is where J. Robert Oppenheimer and his team developed the first atomic bomb. Today, Los Alamos remains one of the world&apos;s premier research institutions, with an annual budget exceeding $4 billion.
            </p>
            <p>
              <strong className={heading}>White Sands</strong> &mdash; both a national park and a missile range &mdash; is where the Trinity Test detonated the first nuclear device on July 16, 1945. White Sands National Park protects 275 square miles of brilliant white gypsum sand dunes, the largest such formation on Earth.
            </p>
            <p>
              <strong className={heading}>Sandia National Laboratories</strong> in Albuquerque and the <strong className={heading}>Very Large Array</strong> radio telescope on the Plains of San Agustin continue New Mexico&apos;s legacy as a hub for cutting-edge science and space exploration. <strong className={heading}>Spaceport America</strong> near Truth or Consequences is the world&apos;s first purpose-built commercial spaceport, home to Virgin Galactic.
            </p>
          </div>
        </div>
      </section>

      {/* Santa Fe & Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Santa Fe &mdash; The Oldest US State Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Santa Fe</strong>, founded in 1610, is the <strong className={heading}>oldest state capital in the United States</strong> &mdash; predating the Pilgrims&apos; landing at Plymouth Rock by a decade. Its distinctive adobe architecture, world-class art galleries on Canyon Road, and the Santa Fe Opera make it a cultural jewel.
            </p>
            <p>
              New Mexico&apos;s multicultural heritage blends <strong className={heading}>Native American, Hispanic, and Anglo</strong> traditions. The state has 23 federally recognized tribes, including the <strong className={heading}>Navajo Nation</strong> (the largest reservation in the US, spanning NM, AZ, and UT) and 19 Pueblo communities. <strong className={heading}>Roswell</strong> draws UFO enthusiasts from around the world to the site of the famous 1947 incident, with the International UFO Museum welcoming hundreds of thousands of visitors annually.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major New Mexico Cities &mdash; All on Mountain Time</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Albuquerque', pop: '564K', note: 'Largest city, Balloon Fiesta' },
              { city: 'Las Cruces', pop: '111K', note: 'NMSU, Organ Mountains' },
              { city: 'Rio Rancho', pop: '104K', note: 'Intel fab, ABQ metro' },
              { city: 'Santa Fe', pop: '88K', note: 'State capital, founded 1610' },
              { city: 'Roswell', pop: '48K', note: '1947 UFO incident, dairy hub' },
              { city: 'Los Alamos', pop: '13K', note: 'National lab, Manhattan Project' },
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
