'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ColombiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Bogota', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Bogota', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-yellow-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Colombia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">COT · UTC−5</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Equatorial</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Bogotá</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Colombia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Colombia Time (COT)' },
              { label: 'UTC Offset', value: 'UTC−5 (always)' },
              { label: 'Daylight Saving', value: 'Never observed (equatorial)' },
              { label: 'IANA Identifier', value: 'America/Bogota' },
              { label: 'Population', value: '~52 million' },
              { label: 'Same Offset As', value: 'US Eastern (EST winter), Peru, Ecuador' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colombia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Colombia Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            COT (UTC−5) is constant and matches US Eastern Standard Time in winter — a massive advantage for business.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Their Winter</th>
                  <th className="pb-2">Their Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Same as Colombia!', summer: 'Colombia +1 hr behind' },
                  { zone: 'Los Angeles (PT)', winter: 'Colombia +3 hrs', summer: 'Colombia +2 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Colombia −5 hrs', summer: 'Colombia −6 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Colombia −6 hrs', summer: 'Colombia −7 hrs' },
                  { zone: 'India (IST)', winter: 'Colombia −10:30', summer: 'Colombia −10:30' },
                  { zone: 'Japan (JST)', winter: 'Colombia −14 hrs', summer: 'Colombia −14 hrs' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{winter}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Nearshoring Boom */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Colombia&apos;s Nearshoring Boom — The EST Advantage</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Colombia&apos;s <strong className={heading}>UTC−5 offset matches US Eastern Time in winter</strong> and is just 1 hour behind in summer. This makes it one of the <strong className={heading}>most timezone-aligned countries</strong> with the US market.
            </p>
            <p>
              This has fueled a massive <strong className={heading}>nearshoring boom</strong>. Bogotá and Medellín have become hubs for US companies outsourcing customer service, software development, and back-office operations. Unlike India (12+ hours difference), Colombian teams work <strong className={heading}>the exact same business hours</strong> as their US clients.
            </p>
            <p>
              Combined with <strong className={heading}>high English proficiency</strong> (especially in Bogotá&apos;s tech sector), a young educated workforce, and <strong className={heading}>similar flight times to Miami as New York to LA</strong>, Colombia has become Latin America&apos;s fastest-growing outsourcing destination.
            </p>
          </div>
        </div>
      </section>

      {/* Equatorial Consistency */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Equatorial Consistency — 12 Hours of Daylight, Always</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Colombia straddles the <strong className={heading}>equator</strong>, which means daylight hours barely change throughout the year. Bogotá gets approximately <strong className={heading}>12 hours of light and 12 hours of darkness</strong> every single day — sunrise around <strong className={heading}>6:00 AM</strong>, sunset around <strong className={heading}>6:00 PM</strong>, year-round.
            </p>
            <p>
              This eliminates the need for DST entirely. There&apos;s no &ldquo;lost hour&rdquo; of evening light to recover in summer. The consistency also means <strong className={heading}>no seasonal mood changes</strong> — something that affects productivity in northern countries with dark winters.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-2 gap-4 text-center text-xs">
              {[
                { label: 'Sunrise (year-round)', value: '~5:45 – 6:15 AM' },
                { label: 'Sunset (year-round)', value: '~5:45 – 6:15 PM' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Colombian Cities — All on COT (UTC−5)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Bogotá', pop: '11M metro', note: 'Capital, 2,640m altitude' },
              { city: 'Medellín', pop: '4M metro', note: '"City of Eternal Spring", tech hub' },
              { city: 'Cali', pop: '2.5M', note: 'Salsa capital, Pacific region' },
              { city: 'Barranquilla', pop: '2.2M metro', note: 'Caribbean coast, Carnival' },
              { city: 'Cartagena', pop: '1.1M', note: 'UNESCO walled city, tourism' },
              { city: 'Santa Marta', pop: '540K', note: 'Oldest city in Colombia (1525)' },
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
