'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ChileClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ santiago: '--:--', easter: '--:--' })
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({ santiago: fmt('America/Santiago'), easter: fmt('Pacific/Easter') })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Santiago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Santiago' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Santiago' })
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
            Current Time in Chile
          </div>
          <div className="grid grid-cols-2 gap-6 mb-3">
            {[
              { city: 'Santiago (Mainland)', tz: isDST ? 'CLST UTC−3' : 'CLT UTC−4', time: times.santiago },
              { city: 'Easter Island', tz: isDST ? 'EASST UTC−5' : 'EAST UTC−6', time: times.easter },
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Southern Hemisphere DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">4,270 km long</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Chile Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Mainland', value: 'CLT (UTC−4) / CLST (UTC−3)' },
              { label: 'Easter Island', value: 'EAST (UTC−6) / EASST (UTC−5)' },
              { label: 'DST Rule', value: 'First Sat in Apr → First Sat in Sep' },
              { label: 'IANA Identifier', value: 'America/Santiago' },
              { label: 'Population', value: '~19.5 million' },
              { label: 'Length', value: '4,270 km — world\'s longest country' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chile vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Chile Time vs World (Santiago)</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Chile&apos;s DST runs Apr–Sep (Southern Hemisphere winter). The double-DST effect with Northern Hemisphere creates seasonal swings.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Chile Summer (CLST)</th>
                  <th className="pb-2">Chile Winter (CLT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', clst: 'Chile +2 hrs', clt: 'Chile +1 hr' },
                  { zone: 'Los Angeles (PT)', clst: 'Chile +5 hrs', clt: 'Chile +3 hrs' },
                  { zone: 'London (GMT/BST)', clst: 'Chile −3 hrs', clt: 'Chile −5 hrs' },
                  { zone: 'Berlin (CET/CEST)', clst: 'Chile −4 hrs', clt: 'Chile −6 hrs' },
                  { zone: 'Japan (JST)', clst: 'Chile −12 hrs', clt: 'Chile −13 hrs' },
                  { zone: 'Sydney (AET)', clst: 'Chile −14 hrs', clt: 'Chile −14 hrs' },
                ].map(({ zone, clst, clt }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{clst}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{clt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Permanent Summer Time Experiment */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Chile&apos;s Failed Permanent Summer Time (2015–2019)</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2015</strong>, Chile tried what Russia, Turkey, and others attempted: <strong className={heading}>permanent summer time (CLST, UTC−3)</strong>. The goal was to maximize evening daylight and save energy.
            </p>
            <p>
              The experiment lasted <strong className={heading}>4 years</strong> — much longer than expected. But it created serious problems: in winter, <strong className={heading}>Santiago didn&apos;t see sunrise until 8:45 AM</strong>, and in southern cities like Punta Arenas, mornings were dark until <strong className={heading}>nearly 10:00 AM</strong>.
            </p>
            <p>
              Parents complained about children going to school in complete darkness. Health experts warned about circadian disruption. In <strong className={heading}>2019</strong>, Chile restored seasonal clock changes — a rare example of a country reversing a permanent-time decision.
            </p>
          </div>
        </div>
      </section>

      {/* Easter Island */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Easter Island — Chile&apos;s Polynesian Outpost</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Easter Island (Rapa Nui)</strong> lies <strong className={heading}>3,700 km west</strong> of mainland Chile in the Pacific Ocean. It has its own timezone: <strong className={heading}>EAST (UTC−6)</strong>, 2 hours behind Santiago.
            </p>
            <p>
              With a population of just <strong className={heading}>~8,000</strong>, it&apos;s one of the most remote inhabited islands on Earth. The famous <strong className={heading}>Moai statues</strong> make it a UNESCO World Heritage Site and a bucket-list destination.
            </p>
            <p>
              Easter Island observes DST synchronized with the mainland — when Santiago is on CLST (UTC−3), Easter Island shifts to <strong className={heading}>EASST (UTC−5)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Chilean Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Santiago', pop: '7.1M metro', note: 'Capital, CLT (UTC−4)' },
              { city: 'Valparaíso', pop: '1M metro', note: 'Port city, UNESCO, Congress' },
              { city: 'Concepción', pop: '1M metro', note: 'Southern hub, university city' },
              { city: 'Antofagasta', pop: '425K', note: 'Mining capital, Atacama Desert' },
              { city: 'Punta Arenas', pop: '130K', note: 'Southernmost city, Patagonia' },
              { city: 'Hanga Roa', pop: '8K', note: 'Easter Island, EAST (UTC−6)' },
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
