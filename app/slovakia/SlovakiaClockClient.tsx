'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SlovakiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Bratislava', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Bratislava', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Bratislava' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Bratislava' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Slovakia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU DST Rules</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Bratislava</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Slovakia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Bratislava' },
              { label: 'Population', value: '~5.4 million' },
              { label: 'Cars per Capita', value: '#1 car producer per capita in the world' },
              { label: 'Famous For', value: 'Tatra mountains, castles, auto industry' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SK vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Slovakia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">SK Winter (CET)</th>
                  <th className="pb-2">SK Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'SK +6 hrs', summer: 'SK +6 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'SK +1 hr', summer: 'SK +1 hr' },
                  { zone: 'Czech Republic', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Austria (Vienna)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Ukraine (EET)', winter: 'SK −1 hr', summer: 'SK −1 hr' },
                  { zone: 'Japan (JST)', winter: 'SK −8 hrs', summer: 'SK −7 hrs' },
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

      {/* Auto Industry */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>#1 Car Producer Per Capita — Slovakia&apos;s Auto Empire</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Slovakia produces <strong className={heading}>~1 million cars per year</strong> for a population of 5.4 million — the <strong className={heading}>highest cars-per-capita ratio in the world</strong>. <strong className={heading}>Volkswagen, Kia, Stellantis (Peugeot), and Jaguar Land Rover</strong> all have major plants here.
            </p>
            <p>
              The <strong className={heading}>CET timezone</strong> is critical: Slovak auto plants operate in <strong className={heading}>perfect synchronization with German headquarters</strong> (same timezone) and supply chains across <strong className={heading}>Central Europe</strong>. Just-in-time delivery from Bratislava to Wolfsburg takes <strong className={heading}>8 hours by truck</strong> — all within the same clock.
            </p>
          </div>
        </div>
      </section>

      {/* Twin Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bratislava &amp; Vienna — The World&apos;s Closest Capitals</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Bratislava and Vienna are just <strong className={heading}>60 km apart</strong> — the <strong className={heading}>closest pair of national capitals in the world</strong>. They share the <strong className={heading}>same timezone (CET/CEST)</strong>, making cross-border commuting seamless. Many Slovaks work in Vienna&apos;s higher-paying economy while living in Bratislava&apos;s affordable housing.
            </p>
            <p>
              Slovakia has <strong className={heading}>180+ castles</strong> — the highest number per capita in the world. The <strong className={heading}>High Tatras</strong> are the smallest alpine-type mountain range globally — just <strong className={heading}>26 km long</strong> but reaching <strong className={heading}>2,655m</strong>, earning them the nickname &ldquo;the smallest big mountains in the world.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Slovakia Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Bratislava', pop: '475K', note: 'Capital, Danube, Vienna neighbor' },
              { city: 'Ko\u0161ice', pop: '240K', note: '2nd city, European Capital of Culture' },
              { city: '\u017dilina', pop: '80K', note: 'Kia plant, northern hub' },
              { city: 'Nitra', pop: '77K', note: 'Oldest Slovak city, agriculture hub' },
              { city: 'Bansk\u00e1 Bystrica', pop: '76K', note: 'Central Slovakia, WWII uprising' },
              { city: 'Trnava', pop: '65K', note: '"Little Rome", Stellantis plant' },
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
