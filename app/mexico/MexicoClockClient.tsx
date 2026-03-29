'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MexicoClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ mexico: '--:--', tijuana: '--:--', cancun: '--:--' })
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({
        mexico: fmt('America/Mexico_City'),
        tijuana: fmt('America/Tijuana'),
        cancun: fmt('America/Cancun'),
      })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Mexico_City', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      {/* Live Clock — 3 zones */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Mexico
          </div>
          <div className="grid grid-cols-3 gap-4 mb-3">
            {[
              { city: 'Mexico City', tz: 'CST UTC−6', time: times.mexico },
              { city: 'Tijuana', tz: 'PST UTC−8', time: times.tijuana },
              { city: 'Cancún', tz: 'EST UTC−5', time: times.cancun },
            ].map(z => (
              <div key={z.city}>
                <div className="text-xs opacity-70 mb-1">{z.city}</div>
                <div className="text-2xl sm:text-3xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {mounted ? z.time : '--:--:--'}
                </div>
                <div className="text-xs opacity-60 mt-0.5">{z.tz}</div>
              </div>
            ))}
          </div>
          <div className="text-sm opacity-80">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap mt-3">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">4 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2022</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">130M People</span>
          </div>
        </div>
      </section>

      {/* Time Zones Table */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Mexico&apos;s 4 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">UTC Offset</th>
                  <th className="pb-2 pr-4">Abbreviation</th>
                  <th className="pb-2">Coverage</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Southeast', offset: 'UTC−5', abbr: 'EST', coverage: 'Quintana Roo (Cancún)' },
                  { zone: 'Central', offset: 'UTC−6', abbr: 'CST', coverage: 'Mexico City, Guadalajara, most of country' },
                  { zone: 'Pacific', offset: 'UTC−7', abbr: 'MST', coverage: 'Chihuahua, Sinaloa, Sonora' },
                  { zone: 'Northwest', offset: 'UTC−8', abbr: 'PST', coverage: 'Baja California (Tijuana)' },
                ].map(({ zone, offset, abbr, coverage }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{offset}</td>
                    <td className={`py-2 pr-4 ${mutedText}`}>{abbr}</td>
                    <td className={`py-2 ${subText}`}>{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Mexico Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Number of Time Zones', value: '4 (UTC−5 to UTC−8)' },
              { label: 'Reference Zone', value: 'Central Time (CST, UTC−6)' },
              { label: 'DST Status', value: 'Abolished nationwide in Oct 2022' },
              { label: 'Exception', value: 'Border towns near US may keep DST' },
              { label: 'Population', value: '~130 million' },
              { label: 'Same Offset As', value: 'Chicago, Guatemala (UTC−6)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mexico vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mexico Time vs World (Mexico City CST)</h2>
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
                  { zone: 'New York (ET)', winter: 'Mexico +1 hr', summer: 'Same time as Mexico' },
                  { zone: 'Los Angeles (PT)', winter: 'Mexico +2 hrs', summer: 'Mexico +1 hr' },
                  { zone: 'London (GMT/BST)', winter: 'Mexico −6 hrs', summer: 'Mexico −7 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Mexico −7 hrs', summer: 'Mexico −8 hrs' },
                  { zone: 'India (IST)', winter: 'Mexico −11:30', summer: 'Mexico −11:30' },
                  { zone: 'Japan (JST)', winter: 'Mexico −15 hrs', summer: 'Mexico −15 hrs' },
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

      {/* DST Abolition */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mexico&apos;s 2022 DST Abolition</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>October 2022</strong>, Mexico officially abolished daylight saving time nationwide. The reform, championed by President López Obrador, ended nearly <strong className={heading}>26 years</strong> of seasonal clock changes that began in 1996.
            </p>
            <p>
              The government cited <strong className={heading}>health concerns</strong> — studies showed increased heart attacks, strokes, and traffic accidents during the transition week. A congressional study found DST saved less than <strong className={heading}>1% of national energy consumption</strong>.
            </p>
            <p>
              <strong className={heading}>One exception exists:</strong> municipalities within 20 km of the US border (like Tijuana, Ciudad Juárez, and Nuevo Laredo) may continue observing US DST schedules to maintain economic alignment with their American twin cities.
            </p>
          </div>
        </div>
      </section>

      {/* Cancún Story */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Is Cancún on Eastern Time?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2015</strong>, Quintana Roo (home to Cancún) switched from Central Time to <strong className={heading}>Eastern Standard Time (UTC−5)</strong>. The state never changes its clocks — it stays on EST year-round.
            </p>
            <p>
              The reason was <strong className={heading}>tourism</strong>. With most visitors coming from the US East Coast, aligning with Eastern Time eliminated confusion for hotel check-ins, flight schedules, and dinner reservations. It also gave the resort zone an extra hour of evening sunlight for beach activities.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Mexican Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Mexico City', pop: '21.8M metro', note: 'Capital, CST (UTC−6)' },
              { city: 'Guadalajara', pop: '5.3M metro', note: 'Jalisco, CST (UTC−6)' },
              { city: 'Monterrey', pop: '5.3M metro', note: 'Industrial hub, CST (UTC−6)' },
              { city: 'Cancún', pop: '900K', note: 'Tourism, EST (UTC−5)' },
              { city: 'Tijuana', pop: '2M metro', note: 'Border city, PST (UTC−8)' },
              { city: 'Puebla', pop: '3.2M metro', note: 'Colonial city, CST (UTC−6)' },
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
