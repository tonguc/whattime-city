'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IraqClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Baghdad', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Baghdad', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Iraq
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-green-400/40">AST &middot; UTC+3 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Baghdad</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Iraq Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Arabia Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Abolished 2008 — last used during Saddam era' },
              { label: 'IANA Identifier', value: 'Asia/Baghdad' },
              { label: 'Population', value: '~43 million' },
              { label: 'Weekend', value: 'Friday-Saturday' },
              { label: 'Famous For', value: 'Mesopotamia, oil, Tigris & Euphrates' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iraq vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Iraq Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'IQ +8 hrs', summer: 'IQ +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'IQ +3 hrs', summer: 'IQ +2 hrs' },
                  { zone: 'Iran (IRST)', winter: 'IQ −0:30', summer: 'IQ −0:30' },
                  { zone: 'Saudi Arabia (AST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Turkey (TRT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'IQ −2:30', summer: 'IQ −2:30' },
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

      {/* Cradle of Timekeeping */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mesopotamia — Where Humanity First Measured Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iraq sits on <strong className={heading}>Mesopotamia</strong> — literally &ldquo;land between two rivers&rdquo; (Tigris &amp; Euphrates). The <strong className={heading}>Sumerians</strong> invented the <strong className={heading}>base-60 (sexagesimal) number system</strong> around 3500 BCE — the reason we have <strong className={heading}>60 seconds in a minute and 60 minutes in an hour</strong>.
            </p>
            <p>
              The <strong className={heading}>Babylonians</strong> (1800 BCE) divided the day into <strong className={heading}>12 hours of daylight and 12 hours of darkness</strong> — giving us our <strong className={heading}>24-hour day</strong>. They also created the <strong className={heading}>360-degree circle</strong> (6 × 60) and <strong className={heading}>7-day week</strong> (one day for each visible celestial body: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn).
            </p>
            <p>
              Modern timekeeping — <strong className={heading}>hours, minutes, seconds, calendar</strong> — all trace back to this region. Iraq is quite literally the <strong className={heading}>birthplace of time measurement</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Oil & Kurdistan */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Oil Exports &amp; Kurdistan — One Country, Complex Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iraq has the <strong className={heading}>world&apos;s 5th largest proven oil reserves</strong> (~145 billion barrels). The oil industry operates on <strong className={heading}>24/7 shifts</strong> in Basra&apos;s southern oilfields, with export schedules timed to <strong className={heading}>tanker arrivals at Umm Qasr port</strong> and global commodity markets in London (UTC+0/+1) and New York (UTC-5/-4).
            </p>
            <p>
              The <strong className={heading}>Kurdistan Region</strong> (Erbil, Sulaymaniyah, Duhok) is an autonomous region within Iraq. While it shares <strong className={heading}>UTC+3 with Baghdad</strong>, Kurdistan operates its own economic calendar with different <strong className={heading}>public holidays</strong> (Kurdish New Year/Newroz on March 21) and has its own <strong className={heading}>international airports</strong> with different flight schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Iraqi Cities — All on AST (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Baghdad', pop: '8.1M', note: 'Capital, Tigris, 1001 Nights city' },
              { city: 'Basra', pop: '2.8M', note: 'Oil capital, southern port' },
              { city: 'Erbil', pop: '1.5M', note: 'Kurdistan capital, oldest city' },
              { city: 'Sulaymaniyah', pop: '900K', note: 'Kurdish cultural hub, universities' },
              { city: 'Mosul', pop: '1.8M', note: 'Northern hub, Nineveh ruins' },
              { city: 'Najaf', pop: '1.2M', note: 'Shia holy city, Imam Ali shrine' },
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
