'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NewZealandClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ auckland: '--:--', chatham: '--:--' })
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({ auckland: fmt('Pacific/Auckland'), chatham: fmt('Pacific/Chatham') })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Pacific/Auckland', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Pacific/Auckland' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Pacific/Auckland' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-indigo-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in New Zealand
          </div>
          <div className="grid grid-cols-2 gap-6 mb-3">
            {[
              { city: 'Auckland / Wellington', tz: isDST ? 'NZDT UTC+13' : 'NZST UTC+12', time: times.auckland },
              { city: 'Chatham Islands', tz: isDST ? 'CHADT UTC+13:45' : 'CHAST UTC+12:45', time: times.chatham },
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">First Country to See Sunrise</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">DST: Southern Hemisphere</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">45-min offset (Chatham)</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>New Zealand Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Standard Time', value: 'NZST (UTC+12)' },
              { label: 'Daylight Saving', value: 'NZDT (UTC+13) — Sep to Apr' },
              { label: 'Chatham Islands', value: 'CHAST (UTC+12:45) — 45 min ahead' },
              { label: 'DST Rule', value: 'Last Sunday Sep → First Sunday Apr' },
              { label: 'IANA Identifier', value: 'Pacific/Auckland' },
              { label: 'First Sunrise', value: 'Gisborne — first city to see the sun' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NZ vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>New Zealand Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            NZ DST runs Sep–Apr (Southern Hemisphere). The double-DST effect with Northern Hemisphere countries creates dramatic seasonal swings.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">NZ Summer (NZDT)</th>
                  <th className="pb-2">NZ Winter (NZST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', nzSummer: 'NZ −18 hrs', nzWinter: 'NZ −16 hrs' },
                  { zone: 'Los Angeles (PT)', nzSummer: 'NZ −21 hrs', nzWinter: 'NZ −19 hrs' },
                  { zone: 'London (GMT/BST)', nzSummer: 'NZ −13 hrs', nzWinter: 'NZ −11 hrs' },
                  { zone: 'India (IST)', nzSummer: 'NZ −7:30', nzWinter: 'NZ −6:30' },
                  { zone: 'Sydney (AET)', nzSummer: 'NZ −2 hrs', nzWinter: 'NZ −2 hrs' },
                  { zone: 'Japan (JST)', nzSummer: 'NZ −4 hrs', nzWinter: 'NZ −3 hrs' },
                ].map(({ zone, nzSummer, nzWinter }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{nzSummer}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{nzWinter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* First Sunrise */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>First Country to See the New Day</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              New Zealand is the <strong className={heading}>first major country to see each new day&apos;s sunrise</strong>. The city of <strong className={heading}>Gisborne</strong> on the North Island&apos;s east coast is the first city in the world to greet each morning.
            </p>
            <p>
              During NZDT, New Zealand runs at <strong className={heading}>UTC+13</strong> — actually ahead of the International Date Line. The <strong className={heading}>Chatham Islands</strong> (population ~600) push even further at <strong className={heading}>UTC+13:45</strong>, making them among the most time-forward inhabited places on Earth.
            </p>
            <p>
              This makes New Zealand the <strong className={heading}>global epicenter of New Year&apos;s Eve celebrations</strong> — Auckland&apos;s Sky Tower fireworks are broadcast worldwide as the first New Year countdown each year.
            </p>
          </div>
        </div>
      </section>

      {/* Chatham Islands */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Chatham Islands: UTC+12:45</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Chatham Islands</strong> use one of the world&apos;s rarest time offsets: <strong className={heading}>UTC+12:45</strong> (CHAST), which is <strong className={heading}>45 minutes ahead</strong> of mainland New Zealand. Only Nepal (UTC+5:45) shares this 45-minute offset distinction.
            </p>
            <p>
              Home to just <strong className={heading}>~600 people</strong>, the Chathams are 800 km east of mainland NZ. The 45-minute offset was chosen to approximate the islands&apos; geographic longitude while maintaining a reasonable relationship with the mainland clock.
            </p>
          </div>
        </div>
      </section>

      {/* DST Dates */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>NZ DST Switch Dates (NZST ↔ NZDT)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Period</th>
                  <th className="pb-2 pr-4">Spring Forward (→ NZDT)</th>
                  <th className="pb-2">Fall Back (→ NZST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { period: '2025–26', spring: 'Sep 28, 2025 at 2:00 AM', fall: 'Apr 5, 2026 at 3:00 AM' },
                  { period: '2026–27', spring: 'Sep 27, 2026 at 2:00 AM', fall: 'Apr 4, 2027 at 3:00 AM' },
                  { period: '2027–28', spring: 'Sep 26, 2027 at 2:00 AM', fall: 'Apr 2, 2028 at 3:00 AM' },
                ].map(({ period, spring, fall }) => (
                  <tr key={period}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{period}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{spring}</td>
                    <td className={`py-2 ${subText}`}>{fall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>
            Southern Hemisphere: DST starts in September (spring) and ends in April (autumn).
          </p>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major New Zealand Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Auckland', pop: '1.7M metro', note: 'Largest city, North Island' },
              { city: 'Wellington', pop: '420K metro', note: 'Capital, windy, North Island' },
              { city: 'Christchurch', pop: '390K', note: 'Largest in South Island' },
              { city: 'Hamilton', pop: '180K', note: 'Waikato region, North Island' },
              { city: 'Queenstown', pop: '50K', note: 'Adventure capital, South Island' },
              { city: 'Gisborne', pop: '38K', note: 'First city to see sunrise' },
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
