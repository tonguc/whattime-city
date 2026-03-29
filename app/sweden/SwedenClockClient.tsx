'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SwedenClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Stockholm', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Stockholm' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Stockholm' })
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
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Sweden
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-yellow-400 text-blue-900">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Midnight Sun & Polar Night</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Stockholm</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Sweden Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Stockholm' },
              { label: 'Population', value: '~10.5 million' },
              { label: 'Latitude Range', value: '55°N – 69°N (extreme daylight variation)' },
              { label: 'Famous For', value: 'Midnight Sun, fika, Spotify, IKEA' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extreme Daylight */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Midnight Sun &amp; Polar Night — Sweden&apos;s Extreme Daylight</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Sweden stretches from <strong className={heading}>55°N to 69°N latitude</strong>, creating one of the most dramatic daylight variations of any country. In northern Sweden (above the Arctic Circle), the <strong className={heading}>midnight sun</strong> shines for weeks in summer, while <strong className={heading}>polar night</strong> brings weeks of darkness in winter.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">City</th>
                  <th className="pb-2 pr-4">Midsummer (Jun 21)</th>
                  <th className="pb-2">Midwinter (Dec 21)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { city: 'Stockholm (59°N)', summer: '~18.5 hrs daylight', winter: '~6 hrs daylight' },
                  { city: 'Umeå (64°N)', summer: '~22 hrs daylight', winter: '~4 hrs daylight' },
                  { city: 'Kiruna (67°N)', summer: '24 hrs (midnight sun)', winter: '~0 hrs (polar night)' },
                ].map(({ city, summer, winter }) => (
                  <tr key={city}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{city}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{summer}</td>
                    <td className={`py-2 ${subText}`}>{winter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fika Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Fika — Sweden&apos;s Sacred Coffee Break</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Fika</strong> is Sweden&apos;s institutionalized coffee break — a cultural ritual so important that many Swedish companies have <strong className={heading}>mandatory fika times</strong> (usually 10:00 AM and 3:00 PM). It&apos;s not just coffee; it&apos;s a social event with pastries (especially <strong className={heading}>kanelbullar</strong> — cinnamon buns).
            </p>
            <p>
              Tech companies like <strong className={heading}>Spotify, Klarna, and King</strong> (all Stockholm-based) famously build fika into their work culture. A Swedish workday without fika is considered incomplete — it&apos;s estimated Swedes drink <strong className={heading}>3–5 cups of coffee per day</strong>, making Sweden the 6th highest per-capita coffee consumer in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Stockholm: Europe&apos;s Unicorn Factory</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Stockholm produces more <strong className={heading}>billion-dollar tech companies per capita</strong> than any city outside Silicon Valley. <strong className={heading}>Spotify, Klarna, King (Candy Crush), Mojang (Minecraft), Skype</strong> (co-founded), and <strong className={heading}>iZettle</strong> all originated here.
            </p>
            <p>
              Sweden&apos;s CET timezone provides <strong className={heading}>perfect European market coverage</strong> and a useful afternoon overlap with US East Coast. The combination of high English proficiency, fast internet, and progressive work culture makes Stockholm a magnet for global tech talent.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Swedish Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Stockholm', pop: '2.4M metro', note: 'Capital, tech unicorn hub' },
              { city: 'Gothenburg', pop: '1M metro', note: 'West coast, Volvo HQ' },
              { city: 'Malmö', pop: '750K metro', note: 'Southern, Øresund Bridge to Denmark' },
              { city: 'Uppsala', pop: '230K', note: 'Oldest university (1477)' },
              { city: 'Kiruna', pop: '23K', note: 'Arctic Circle, midnight sun, LKAB mine' },
              { city: 'Lund', pop: '95K', note: 'University city, MAX IV synchrotron' },
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
