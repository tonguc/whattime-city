'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AustraliaClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ sydney: '--:--', perth: '--:--', adelaide: '--:--' })
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({ sydney: fmt('Australia/Sydney'), perth: fmt('Australia/Perth'), adelaide: fmt('Australia/Adelaide') })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Australia/Sydney', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      {/* Live Clock — 3 time zones */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Australia
          </div>
          <div className="grid grid-cols-3 gap-4 mb-3">
            {[
              { city: 'Sydney', tz: 'AEST/AEDT', time: times.sydney },
              { city: 'Adelaide', tz: 'ACST/ACDT', time: times.adelaide },
              { city: 'Perth', tz: 'AWST', time: times.perth },
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">3 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Half-hour offsets</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Split DST rules</span>
          </div>
        </div>
      </section>

      {/* Time Zone Overview */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Australia&apos;s 3 Main Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">Standard</th>
                  <th className="pb-2 pr-4">Summer (DST)</th>
                  <th className="pb-2">States</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Eastern', std: 'AEST (UTC+10)', dst: 'AEDT (UTC+11)', states: 'NSW, VIC, TAS, ACT — QLD no DST' },
                  { zone: 'Central', std: 'ACST (UTC+9:30)', dst: 'ACDT (UTC+10:30)', states: 'SA — NT no DST' },
                  { zone: 'Western', std: 'AWST (UTC+8)', dst: 'None', states: 'WA — No DST' },
                ].map(({ zone, std, dst, states }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{std}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{dst}</td>
                    <td className={`py-2 ${mutedText}`}>{states}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Australia Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Australia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Number of Time Zones', value: '3 main + 2 half-hour variants' },
              { label: 'Widest Span', value: 'UTC+8 (Perth) to UTC+11 (Sydney DST)' },
              { label: 'Half-Hour Zones', value: 'SA & NT use UTC+9:30' },
              { label: 'DST Splits', value: 'QLD, WA, NT do NOT observe DST' },
              { label: 'DST Starts', value: 'First Sunday in October' },
              { label: 'DST Ends', value: 'First Sunday in April' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Australia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Australia Time vs World (Sydney AEST/AEDT)</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Australia&apos;s DST runs October → April (southern hemisphere summer). When it&apos;s summer in Australia, it&apos;s winter in the US/Europe — both sides shift.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">AU Summer (Oct–Apr)</th>
                  <th className="pb-2">AU Winter (Apr–Oct)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', auSummer: 'Sydney +16 hrs', auWinter: 'Sydney +14 hrs' },
                  { zone: 'Los Angeles (PT)', auSummer: 'Sydney +19 hrs', auWinter: 'Sydney +17 hrs' },
                  { zone: 'London (GMT/BST)', auSummer: 'Sydney +11 hrs', auWinter: 'Sydney +9 hrs' },
                  { zone: 'India (IST)', auSummer: 'Sydney +5:30', auWinter: 'Sydney +4:30' },
                  { zone: 'Japan (JST)', auSummer: 'Sydney +2 hrs', auWinter: 'Sydney +1 hr' },
                  { zone: 'New Zealand (NZT)', auSummer: 'Sydney −2 hrs', auWinter: 'Sydney −2 hrs' },
                ].map(({ zone, auSummer, auWinter }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{auSummer}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{auWinter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DST Confusion */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Australia&apos;s Time Zones Are So Confusing</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Australia has <strong className={heading}>3 main time zones</strong>, but DST rules split them further. During summer, Australia effectively has <strong className={heading}>5 different offsets</strong>: UTC+8 (Perth), UTC+9:30 (Darwin), UTC+10 (Brisbane), UTC+10:30 (Adelaide), and UTC+11 (Sydney).
            </p>
            <p>
              <strong className={heading}>Queensland</strong> (Brisbane) is in the Eastern zone but refuses DST, creating a 1-hour difference with neighboring NSW during summer. This means a phone call from Sydney to Brisbane crosses a time zone despite being the same longitude.
            </p>
            <p>
              <strong className={heading}>South Australia</strong> uses the unusual <strong className={heading}>UTC+9:30</strong> offset — one of few half-hour time zones in the world. When Adelaide observes DST, it moves to UTC+10:30, putting it 30 minutes ahead of Brisbane (which doesn&apos;t change).
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { city: 'Perth', offset: 'UTC+8', dst: 'No DST' },
                { city: 'Darwin', offset: 'UTC+9:30', dst: 'No DST' },
                { city: 'Brisbane', offset: 'UTC+10', dst: 'No DST' },
                { city: 'Adelaide', offset: 'UTC+10:30', dst: 'DST ✓' },
                { city: 'Sydney', offset: 'UTC+11', dst: 'DST ✓' },
              ].map(z => (
                <div key={z.city}>
                  <div className={mutedText}>{z.city}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.offset}</div>
                  <div className={mutedText}>{z.dst}</div>
                </div>
              ))}
            </div>
            <div className={`text-center mt-2 text-xs ${mutedText}`}>Summer offsets (Oct–Apr)</div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Australian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Sydney', pop: '5.3M', note: 'NSW, AEST/AEDT, Opera House' },
              { city: 'Melbourne', pop: '5.1M', note: 'VIC, AEST/AEDT, cultural capital' },
              { city: 'Brisbane', pop: '2.6M', note: 'QLD, AEST only (no DST)' },
              { city: 'Perth', pop: '2.1M', note: 'WA, AWST (UTC+8), no DST' },
              { city: 'Adelaide', pop: '1.4M', note: 'SA, ACST/ACDT (UTC+9:30)' },
              { city: 'Darwin', pop: '150K', note: 'NT, ACST only (no DST)' },
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
