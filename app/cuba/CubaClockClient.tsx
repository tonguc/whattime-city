'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CubaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Havana', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Havana', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Havana' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Havana' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Cuba
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CDT · UTC-4' : 'CST · UTC-5'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Caribbean&apos;s Largest Island</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Havana</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Cuba Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CST (UTC-5) / CDT (UTC-4)' },
              { label: 'DST Rule', value: 'Cuba sets its own DST — not US pattern' },
              { label: 'IANA Identifier', value: 'America/Havana' },
              { label: 'Population', value: '~11.1 million' },
              { label: 'Same TZ As', value: 'US Eastern (EST/EDT) — mostly aligned' },
              { label: 'Famous For', value: 'Classic cars, cigars, rum, salsa, healthcare' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuba vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Cuba Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">CU Winter (CST)</th>
                  <th className="pb-2">CU Summer (CDT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Miami (ET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'London (GMT/BST)', winter: 'CU −5 hrs', summer: 'CU −5 hrs' },
                  { zone: 'Mexico City (CST)', winter: 'CU +1 hr', summer: 'CU +1 hr' },
                  { zone: 'Madrid (CET/CEST)', winter: 'CU −6 hrs', summer: 'CU −6 hrs' },
                  { zone: 'Moscow (MSK)', winter: 'CU −8 hrs', summer: 'CU −7 hrs' },
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

      {/* Cuba's Own DST */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Cuba&apos;s Independent DST — The Caribbean&apos;s Only Clock-Changer</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Cuba is the <strong className={heading}>only Caribbean nation that observes DST</strong>. While the rest of the Caribbean stays on fixed time year-round, Cuba sets its <strong className={heading}>own DST schedule</strong> — independent from the US, despite using the same UTC-5/UTC-4 offsets.
            </p>
            <p>
              Cuba&apos;s DST dates have been <strong className={heading}>unpredictable</strong> historically. The government sometimes announces the switch just days in advance, and the dates don&apos;t follow a fixed formula. This creates headaches for <strong className={heading}>IANA timezone database</strong> maintainers who must scramble to update when Cuba makes last-minute announcements.
            </p>
            <p>
              The practical effect: Cuba is <strong className={heading}>usually aligned with US Eastern Time</strong>, but there can be brief periods where the clocks diverge by an hour if Cuba switches DST on a different date than the US.
            </p>
          </div>
        </div>
      </section>

      {/* Two Cubas */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dual Currency, Dual Economy — Cuba&apos;s Time Warp</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Cuba famously feels like a <strong className={heading}>time capsule</strong> — 1950s American cars cruise the Malec&oacute;n, colonial buildings line Havana&apos;s streets, and internet access only became widely available in <strong className={heading}>2018</strong> via mobile data. Until 2021, Cuba had <strong className={heading}>two currencies</strong> (CUP and CUC), creating a surreal dual economy.
            </p>
            <p>
              Daily life follows a distinctive rhythm: Cubans wake early (<strong className={heading}>~6 AM</strong>) due to heat, state jobs run <strong className={heading}>8 AM – 5 PM</strong>, and the vibrant street life — dominos, music, socializing — peaks in the <strong className={heading}>cooler evening hours (7-11 PM)</strong>. The famous Tropicana cabaret show starts at <strong className={heading}>10 PM</strong>.
            </p>
            <p>
              Despite economic challenges, Cuba has one of the <strong className={heading}>world&apos;s highest doctor-to-patient ratios</strong> and sends medical teams worldwide. Cuban doctors operate across multiple time zones — a soft power strategy unmatched by any country of similar size.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Cuban Cities — All on CST/CDT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Havana', pop: '2.1M', note: 'Capital, Malecón, Old Havana UNESCO' },
              { city: 'Santiago de Cuba', pop: '510K', note: '2nd city, Afro-Cuban culture hub' },
              { city: 'Camag\u00fcey', pop: '325K', note: '3rd city, colonial labyrinth streets' },
              { city: 'Holgu\u00edn', pop: '295K', note: 'Eastern hub, "City of Parks"' },
              { city: 'Santa Clara', pop: '240K', note: 'Che Guevara memorial, central' },
              { city: 'Trinidad', pop: '80K', note: 'UNESCO colonial gem, sugar history' },
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
