'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BrazilClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ brasilia: '--:--', manaus: '--:--', acre: '--:--' })
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({
        brasilia: fmt('America/Sao_Paulo'),
        manaus: fmt('America/Manaus'),
        acre: fmt('America/Rio_Branco'),
      })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-green-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Brazil
          </div>
          <div className="grid grid-cols-3 gap-4 mb-3">
            {[
              { city: 'Brasília/São Paulo', tz: 'BRT UTC−3', time: times.brasilia },
              { city: 'Manaus', tz: 'AMT UTC−4', time: times.manaus },
              { city: 'Acre', tz: 'ACT UTC−5', time: times.acre },
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">4 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2019</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">215M People</span>
          </div>
        </div>
      </section>

      {/* Time Zone Overview */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Brazil&apos;s 4 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">UTC Offset</th>
                  <th className="pb-2 pr-4">Abbreviation</th>
                  <th className="pb-2">Coverage</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Fernando de Noronha', offset: 'UTC−2', abbr: 'FNT', coverage: 'Atlantic islands only' },
                  { zone: 'Brasília', offset: 'UTC−3', abbr: 'BRT', coverage: 'São Paulo, Rio, Brasília, most of country' },
                  { zone: 'Amazon', offset: 'UTC−4', abbr: 'AMT', coverage: 'Manaus, Amazonas, Mato Grosso' },
                  { zone: 'Acre', offset: 'UTC−5', abbr: 'ACT', coverage: 'Acre state, western Amazonas' },
                ].map(({ zone, offset, abbr, coverage }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{offset}</td>
                    <td className={`py-2 pr-4 ${mutedText}`}>{abbr}</td>
                    <td className={`py-2 ${subText}`}>{coverage}</td>
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
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Brazil Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Number of Time Zones', value: '4 (UTC−2 to UTC−5)' },
              { label: 'Reference Zone', value: 'Brasília Time (BRT, UTC−3)' },
              { label: 'DST Status', value: 'Abolished in 2019 by Bolsonaro' },
              { label: 'IANA Identifier', value: 'America/Sao_Paulo (main)' },
              { label: 'Population', value: '~215 million (6th largest)' },
              { label: 'Same Offset As', value: 'Argentina, Uruguay (UTC−3)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brazil vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Brazil Time vs World (Brasília BRT)</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Since 2019, Brazil no longer observes DST. Differences change only when other countries shift their clocks.
          </p>
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
                  { zone: 'New York (ET)', winter: 'Brazil +2 hrs', summer: 'Brazil +1 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'Brazil +5 hrs', summer: 'Brazil +4 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Brazil −3 hrs', summer: 'Brazil −4 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Brazil −4 hrs', summer: 'Brazil −5 hrs' },
                  { zone: 'India (IST)', winter: 'Brazil −8:30', summer: 'Brazil −8:30' },
                  { zone: 'Japan (JST)', winter: 'Brazil −12 hrs', summer: 'Brazil −12 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Brazil −14 hrs', summer: 'Brazil −13 hrs' },
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

      {/* DST Abolition */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Did Brazil Abolish DST?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>April 2019</strong>, President Bolsonaro signed a decree ending daylight saving time in Brazil. The decision was backed by a <strong className={heading}>government study</strong> showing DST no longer saved significant energy — the original justification from the 1930s.
            </p>
            <p>
              Brazil&apos;s energy matrix had shifted: <strong className={heading}>hydroelectric power</strong> dominated, and air conditioning (not lighting) became the peak load. A public poll showed <strong className={heading}>73% of Brazilians</strong> supported ending DST, citing disrupted sleep and confusion.
            </p>
            <p>
              Before 2019, only <strong className={heading}>southern and southeastern states</strong> observed DST (São Paulo, Rio, Brasília). Northern tropical states near the equator never participated, as daylight hours barely change year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Brazilian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'São Paulo', pop: '22M metro', note: 'Financial capital, BRT (UTC−3)' },
              { city: 'Rio de Janeiro', pop: '13M metro', note: 'Cultural icon, BRT (UTC−3)' },
              { city: 'Brasília', pop: '4.8M metro', note: 'Federal capital, BRT (UTC−3)' },
              { city: 'Manaus', pop: '2.2M', note: 'Amazon gateway, AMT (UTC−4)' },
              { city: 'Salvador', pop: '4M metro', note: 'Northeast hub, BRT (UTC−3)' },
              { city: 'Fortaleza', pop: '4.1M metro', note: 'Coastal northeast, BRT (UTC−3)' },
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
