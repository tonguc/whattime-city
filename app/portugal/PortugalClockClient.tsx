'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PortugalClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ lisbon: '--:--', azores: '--:--' })
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({ lisbon: fmt('Europe/Lisbon'), azores: fmt('Atlantic/Azores') })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Lisbon', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Lisbon' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Lisbon' })
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
      {/* Live Clock — 2 zones */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Portugal
          </div>
          <div className="grid grid-cols-2 gap-6 mb-3">
            {[
              { city: 'Mainland + Madeira', tz: isDST ? 'WEST UTC+1' : 'WET UTC+0', time: times.lisbon },
              { city: 'Azores', tz: isDST ? 'AZOST UTC+0' : 'AZOT UTC−1', time: times.azores },
            ].map(z => (
              <div key={z.city}>
                <div className="text-xs opacity-70 mb-1">{z.city}</div>
                <div className="text-3xl sm:text-4xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {mounted ? z.time : '--:--:--'}
                </div>
                <div className="text-xs opacity-60 mt-0.5">{z.tz}</div>
              </div>
            ))}
          </div>
          <div className="text-sm opacity-80">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap mt-3">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">3 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Same Time as London (NOT Spain)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">DST observed</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Portugal Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Mainland + Madeira', value: 'WET (UTC+0) / WEST (UTC+1)' },
              { label: 'Azores', value: 'AZOT (UTC−1) / AZOST (UTC+0)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Lisbon' },
              { label: 'Population', value: '~10.3 million' },
              { label: 'Same Zone As', value: 'UK, Ireland, Iceland (NOT Spain!)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portugal vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Portugal Time vs World (Lisbon)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Portugal Winter (WET)</th>
                  <th className="pb-2">Portugal Summer (WEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Portugal +5 hrs', summer: 'Portugal +5 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Portugal +8 hrs', summer: 'Portugal +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Spain (CET/CEST)', winter: 'Portugal −1 hr', summer: 'Portugal −1 hr' },
                  { zone: 'Brazil (BRT)', winter: 'Portugal −3 hrs', summer: 'Portugal −4 hrs' },
                  { zone: 'India (IST)', winter: 'Portugal −5:30', summer: 'Portugal −4:30' },
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

      {/* Portugal vs Spain */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Portugal-Spain Time Border</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Portugal and Spain share the <strong className={heading}>Iberian Peninsula</strong> and nearly identical longitudes — yet they&apos;re in <strong className={heading}>different time zones</strong>. Crossing the border from Portugal to Spain means jumping <strong className={heading}>1 hour forward</strong> (WET → CET).
            </p>
            <p>
              This is because Spain followed Germany&apos;s CET during WWII (1940) and never changed back, while Portugal <strong className={heading}>kept its geographically correct GMT/WET</strong>. The result: Lisbon is on the same time as London, while Madrid — at nearly the same longitude — is 1 hour ahead.
            </p>
            <p>
              When it&apos;s <strong className={heading}>12:00 PM in Lisbon</strong>, it&apos;s <strong className={heading}>1:00 PM in Madrid</strong> — despite both cities being at roughly <strong className={heading}>3.7°W longitude</strong>. Portugal&apos;s correct timezone is one reason it has <strong className={heading}>earlier dinners (7:30–8:30 PM)</strong> compared to Spain&apos;s famously late 9:30 PM.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Nomad Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Portugal: Europe&apos;s Digital Nomad Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Lisbon has become <strong className={heading}>Europe&apos;s #1 digital nomad destination</strong>. The combination of WET/GMT timezone (5 hours from US East Coast), affordable cost of living, excellent weather, and the <strong className={heading}>D7 and Digital Nomad visas</strong> have attracted thousands of remote workers.
            </p>
            <p>
              Portugal&apos;s timezone is its secret weapon: <strong className={heading}>same time as London</strong> for UK clients, only <strong className={heading}>1 hour behind</strong> most EU clients, and a <strong className={heading}>5-hour overlap</strong> with US East Coast afternoon. No other Western European country offers this flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Portuguese Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Lisbon', pop: '2.9M metro', note: 'Capital, WET (UTC+0)' },
              { city: 'Porto', pop: '1.7M metro', note: 'Northern hub, port wine' },
              { city: 'Funchal', pop: '110K', note: 'Madeira, WET (UTC+0)' },
              { city: 'Faro', pop: '70K', note: 'Algarve, tourism capital' },
              { city: 'Ponta Delgada', pop: '68K', note: 'Azores, AZOT (UTC−1)' },
              { city: 'Braga', pop: '200K', note: 'Northern university city' },
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
