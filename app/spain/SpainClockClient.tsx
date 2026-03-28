'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SpainClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ madrid: '--:--', canary: '--:--' })
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({ madrid: fmt('Europe/Madrid'), canary: fmt('Atlantic/Canary') })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Madrid', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Madrid' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Madrid' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Spain
          </div>
          <div className="grid grid-cols-2 gap-6 mb-3">
            {[
              { city: 'Mainland Spain', tz: isDST ? 'CEST UTC+2' : 'CET UTC+1', time: times.madrid },
              { city: 'Canary Islands', tz: isDST ? 'WEST UTC+1' : 'WET UTC+0', time: times.canary },
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Wrong Time Zone Since 1940</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">47M People</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Spain Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Mainland Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'Canary Islands', value: 'WET (UTC+0) / WEST (UTC+1)' },
              { label: 'Geographic Zone', value: 'Should be GMT/WET (same as UK/Portugal)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Madrid' },
              { label: 'Population', value: '~47 million' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spain vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Spain Time vs World (Madrid)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Spain Winter (CET)</th>
                  <th className="pb-2">Spain Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Spain +6 hrs', summer: 'Spain +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Spain +9 hrs', summer: 'Spain +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Spain +1 hr', summer: 'Spain +1 hr' },
                  { zone: 'Portugal (WET)', winter: 'Spain +1 hr', summer: 'Spain +1 hr' },
                  { zone: 'India (IST)', winter: 'Spain −4:30', summer: 'Spain −3:30' },
                  { zone: 'Japan (JST)', winter: 'Spain −8 hrs', summer: 'Spain −7 hrs' },
                  { zone: 'Mexico City (CST)', winter: 'Spain −7 hrs', summer: 'Spain −8 hrs' },
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

      {/* Wrong Time Zone */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Spain Is in the &ldquo;Wrong&rdquo; Time Zone — Here&apos;s Why</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Spain lies at roughly the <strong className={heading}>same longitude as Britain and Portugal</strong> (between 10°W and 3°E). Geographically, it should use <strong className={heading}>GMT/WET (UTC+0)</strong> — the same as London and Lisbon.
            </p>
            <p>
              In <strong className={heading}>1940</strong>, Franco moved Spain&apos;s clocks forward to <strong className={heading}>CET (UTC+1)</strong> to align with Nazi Germany as a gesture of solidarity during WWII. After the war ended, Spain simply <strong className={heading}>never changed back</strong>.
            </p>
            <p>
              The consequence: solar noon in Madrid occurs around <strong className={heading}>1:30 PM</strong>, and in <strong className={heading}>Galicia (northwest Spain)</strong> as late as <strong className={heading}>2:00 PM</strong>. This is why Spain has Europe&apos;s latest dinner time (<strong className={heading}>9:00–10:00 PM</strong>), late nightlife, and the famous <strong className={heading}>siesta</strong> culture.
            </p>
            <p>
              In <strong className={heading}>2013</strong>, a parliamentary commission recommended returning to GMT, arguing the misalignment costs Spain <strong className={heading}>€8 billion annually</strong> in lost productivity and health issues. The proposal was never implemented.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Lisbon (WET)', value: '12:00 PM', note: 'Same longitude as Madrid' },
                { label: 'Madrid (CET)', value: '1:00 PM', note: '1 hour ahead of geographic zone' },
                { label: 'Vigo (CET)', value: '1:00 PM', note: 'Solar noon actually ~2:00 PM' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.value}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
            <div className={`text-center mt-2 text-xs ${mutedText}`}>When the sun is at its highest (solar noon)</div>
          </div>
        </div>
      </section>

      {/* Spanish Schedule */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Spanish Schedule — Europe&apos;s Latest</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Lunch', time: '2:00 – 3:30 PM', note: 'Main meal, often 2+ courses' },
              { label: 'Siesta / Break', time: '2:00 – 5:00 PM', note: 'Many shops close' },
              { label: 'Dinner', time: '9:00 – 10:30 PM', note: 'Latest in Europe' },
              { label: 'Prime Time TV', time: '10:30 PM – 12:00 AM', note: 'News at 9 PM, shows after' },
            ].map(item => (
              <div key={item.label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{item.time}</div>
                <div className={`text-xs ${subText} mt-1`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Spanish Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Madrid', pop: '6.8M metro', note: 'Capital, CET (UTC+1)' },
              { city: 'Barcelona', pop: '5.6M metro', note: 'Catalonia, CET (UTC+1)' },
              { city: 'Valencia', pop: '1.8M metro', note: 'Mediterranean coast' },
              { city: 'Seville', pop: '1.5M metro', note: 'Andalusia, flamenco' },
              { city: 'Las Palmas', pop: '380K', note: 'Canary Islands, WET (UTC+0)' },
              { city: 'Bilbao', pop: '1M metro', note: 'Basque Country, Guggenheim' },
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
