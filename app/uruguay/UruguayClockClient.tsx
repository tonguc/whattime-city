'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function UruguayClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Montevideo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Montevideo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-sky-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Uruguay
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">UYT · UTC-3 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2015</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Montevideo</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Uruguay Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'UYT — Uruguay Standard Time (UTC-3)' },
              { label: 'DST Status', value: 'Abolished in 2015' },
              { label: 'IANA Identifier', value: 'America/Montevideo' },
              { label: 'Population', value: '~3.4 million' },
              { label: 'Same TZ As', value: 'Argentina, S\u00e3o Paulo, Buenos Aires' },
              { label: 'Famous For', value: '100% renewable energy, mate, digital gov' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uruguay vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Uruguay Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'UY +2 hrs', summer: 'UY +1 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'UY +5 hrs', summer: 'UY +4 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'UY −3 hrs', summer: 'UY −4 hrs' },
                  { zone: 'Argentina (ART)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Brazil-SP (BRT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'UY −8:30', summer: 'UY −8:30' },
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

      {/* Progressive Nation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Latin America&apos;s Most Progressive Nation</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Uruguay consistently ranks as <strong className={heading}>South America&apos;s most progressive and stable country</strong>. Under President Jos&eacute; Mujica (2010-2015) — the &ldquo;world&apos;s poorest president&rdquo; who donated 90% of his salary — Uruguay became the first country in the world to <strong className={heading}>fully legalize cannabis</strong> (2013), legalized <strong className={heading}>same-sex marriage</strong> (2013), and pushed <strong className={heading}>near-100% renewable electricity</strong>.
            </p>
            <p>
              Today, <strong className={heading}>~98% of Uruguay&apos;s electricity</strong> comes from renewable sources (wind, hydro, solar, biomass). Uruguay is also a <strong className={heading}>digital government pioneer</strong> — the Plan Ceibal program gave every school child a laptop, making Uruguay the first country to achieve 1:1 laptop-to-student ratio nationally.
            </p>
          </div>
        </div>
      </section>

      {/* Mate Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mate Culture — Uruguay&apos;s Constant Companion</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Uruguay has the <strong className={heading}>highest per-capita mate consumption in the world</strong> — far exceeding Argentina. Uruguayans carry their <strong className={heading}>thermos and mate gourd everywhere</strong>: to work, to the park, to the beach, to football matches. It&apos;s not uncommon to see someone driving with a thermos tucked between their legs.
            </p>
            <p>
              The mate ritual structures the Uruguayan day: <strong className={heading}>morning mate (6-9 AM)</strong> to start the day, <strong className={heading}>afternoon mate (3-5 PM)</strong> during the <em>merienda</em> break. Sharing mate is a social bond — offering someone mate is a gesture of <strong className={heading}>friendship and inclusion</strong>. Refusing is considered rude.
            </p>
            <p>
              Uruguayan dinner happens <strong className={heading}>late by global standards</strong> — typically <strong className={heading}>9:00-10:00 PM</strong>, with the national obsession of <strong className={heading}>asado</strong> (barbecue) often starting even later on weekends.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Uruguayan Cities — All on UYT (UTC-3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Montevideo', pop: '1.8M metro', note: 'Capital, 55% of population, port' },
              { city: 'Salto', pop: '105K', note: '2nd city, hot springs, citrus' },
              { city: 'Paysand\u00fa', pop: '80K', note: 'Western hub, cross-border trade' },
              { city: 'Ciudad de la Costa', pop: '120K', note: 'Coastal suburb, fastest-growing' },
              { city: 'Punta del Este', pop: '25K', note: '"Monaco of South America", NYE fireworks' },
              { city: 'Colonia del Sacramento', pop: '30K', note: 'UNESCO, Portuguese colonial, ferry to BA' },
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
