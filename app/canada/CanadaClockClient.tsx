'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CanadaClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ stjohns: '--:--', toronto: '--:--', vancouver: '--:--' })
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({
        stjohns: fmt('America/St_Johns'),
        toronto: fmt('America/Toronto'),
        vancouver: fmt('America/Vancouver'),
      })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Toronto', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      {/* Live Clock — 3 key time zones */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-red-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Canada
          </div>
          <div className="grid grid-cols-3 gap-4 mb-3">
            {[
              { city: 'St. John\'s', tz: 'NST UTC−3:30', time: times.stjohns },
              { city: 'Toronto', tz: 'ET UTC−5/−4', time: times.toronto },
              { city: 'Vancouver', tz: 'PT UTC−8/−7', time: times.vancouver },
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">6 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Half-hour zone (Newfoundland)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">DST observed</span>
          </div>
        </div>
      </section>

      {/* All 6 Time Zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Canada&apos;s 6 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">Standard</th>
                  <th className="pb-2 pr-4">DST</th>
                  <th className="pb-2">Provinces</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Pacific', std: 'PST (UTC−8)', dst: 'PDT (UTC−7)', provinces: 'BC, Yukon' },
                  { zone: 'Mountain', std: 'MST (UTC−7)', dst: 'MDT (UTC−6)', provinces: 'AB, parts of BC/SK/NT' },
                  { zone: 'Central', std: 'CST (UTC−6)', dst: 'CDT (UTC−5)', provinces: 'MB, SK (no DST), ON west' },
                  { zone: 'Eastern', std: 'EST (UTC−5)', dst: 'EDT (UTC−4)', provinces: 'ON, QC, Nunavut south' },
                  { zone: 'Atlantic', std: 'AST (UTC−4)', dst: 'ADT (UTC−3)', provinces: 'NB, NS, PE, parts of QC' },
                  { zone: 'Newfoundland', std: 'NST (UTC−3:30)', dst: 'NDT (UTC−2:30)', provinces: 'NL (Newfoundland & Labrador)' },
                ].map(({ zone, std, dst, provinces }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{std}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{dst}</td>
                    <td className={`py-2 ${mutedText}`}>{provinces}</td>
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
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Canada Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Number of Time Zones', value: '6 (including half-hour Newfoundland)' },
              { label: 'DST Rule', value: 'Second Sunday in March → First Sunday in November' },
              { label: 'No-DST Exception', value: 'Saskatchewan stays on CST year-round' },
              { label: 'Widest Span', value: 'UTC−3:30 (NL) to UTC−8 (BC)' },
              { label: 'Unique Feature', value: 'Newfoundland is 30 min ahead of Atlantic' },
              { label: 'Same DST Dates As', value: 'United States (since 2007)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canada vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Canada Time vs World (Toronto ET)</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Canada follows the same DST schedule as the US. Most provinces spring forward in March and fall back in November.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Winter (EST)</th>
                  <th className="pb-2">Summer (EDT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Los Angeles (PT)', winter: 'Toronto +3 hrs', summer: 'Toronto +3 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Toronto −5 hrs', summer: 'Toronto −5 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Toronto −6 hrs', summer: 'Toronto −6 hrs' },
                  { zone: 'India (IST)', winter: 'Toronto −10:30', summer: 'Toronto −9:30' },
                  { zone: 'Japan (JST)', winter: 'Toronto −14 hrs', summer: 'Toronto −13 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Toronto −16 hrs', summer: 'Toronto −14 hrs' },
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

      {/* Newfoundland Explainer */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Does Newfoundland Have a Half-Hour Time Zone?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Newfoundland Standard Time (<strong className={heading}>NST, UTC−3:30</strong>) is one of the few half-hour time zones in the world. It exists because Newfoundland was a <strong className={heading}>separate British dominion</strong> — not part of Canada — until 1949.
            </p>
            <p>
              When Newfoundland set its standard time in 1935, it chose an offset based on its <strong className={heading}>geographic longitude</strong> (roughly 52.5°W), which falls between the Atlantic and Greenland time zones. The half-hour compromise was kept when Newfoundland joined Canada.
            </p>
            <p>
              This creates a unique situation: when it&apos;s <strong className={heading}>12:00 PM in Toronto</strong>, it&apos;s <strong className={heading}>1:30 PM in St. John&apos;s</strong> — not 1:00 or 2:00. Canadian TV networks announce show times as &ldquo;8:00 Eastern, 8:30 in Newfoundland.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Saskatchewan */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Saskatchewan: Canada&apos;s No-DST Province</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Saskatchewan</strong> is the only Canadian province that does not observe DST. It stays on <strong className={heading}>CST (UTC−6)</strong> all year. During summer, when Manitoba shifts to CDT (UTC−5), Saskatchewan effectively aligns with Alberta&apos;s MDT (UTC−6).
            </p>
            <p>
              The exception dates back to <strong className={heading}>1966</strong> when Saskatchewan chose not to adopt uniform DST with the rest of Canada. Farmers argued that shifting clocks disrupted agricultural schedules and livestock routines.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Canadian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Toronto', pop: '6.2M metro', note: 'Ontario, ET (UTC−5/−4)' },
              { city: 'Montreal', pop: '4.3M metro', note: 'Quebec, ET (UTC−5/−4)' },
              { city: 'Vancouver', pop: '2.6M metro', note: 'BC, PT (UTC−8/−7)' },
              { city: 'Calgary', pop: '1.6M metro', note: 'Alberta, MT (UTC−7/−6)' },
              { city: 'Ottawa', pop: '1.5M metro', note: 'Capital, ET (UTC−5/−4)' },
              { city: 'St. John\'s', pop: '210K metro', note: 'NL, NST (UTC−3:30)' },
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
