'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function VenezuelaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Caracas', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Caracas', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-cyan-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Venezuela
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">VET · UTC-4 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/30">Was UTC-4:30 (2007-2016)!</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Caracas</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Venezuela Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'VET — Venezuela Time (UTC-4)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'Past Quirk', value: 'UTC-4:30 from 2007 to 2016 (Ch\u00e1vez!)' },
              { label: 'IANA Identifier', value: 'America/Caracas' },
              { label: 'Population', value: '~28 million (was 33M pre-crisis)' },
              { label: 'Famous For', value: 'Oil reserves #1, Angel Falls, Miss Universe' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venezuela vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Venezuela Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'VE +1 hr', summer: 'Same time!' },
                  { zone: 'Los Angeles (PT)', winter: 'VE +4 hrs', summer: 'VE +3 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'VE −4 hrs', summer: 'VE −5 hrs' },
                  { zone: 'Colombia (COT)', winter: 'VE −1 hr', summer: 'VE −1 hr' },
                  { zone: 'Bolivia (BOT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Cuba (CST/CDT)', winter: 'VE +1 hr', summer: 'Same time!' },
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

      {/* The UTC-4:30 Story */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ch&aacute;vez&apos;s UTC-4:30 — The World&apos;s Most Political Timezone Change</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>December 2007</strong>, President Hugo Ch&aacute;vez moved Venezuela&apos;s clocks <strong className={heading}>back 30 minutes</strong> — from UTC-4 to <strong className={heading}>UTC-4:30</strong>. His reasoning: the half-hour shift better matched Venezuela&apos;s geographic position and would give children more morning daylight for school.
            </p>
            <p>
              Critics called it a <strong className={heading}>vanity project</strong> — a way for Ch&aacute;vez to literally put Venezuela on its own time, separate from the US and Colombia. The move created chaos for airlines, international businesses, and IANA timezone database maintainers. Venezuela became one of only a handful of countries with a <strong className={heading}>:30 offset</strong>.
            </p>
            <p>
              In <strong className={heading}>May 2016</strong> — three years after Ch&aacute;vez&apos;s death — President Maduro moved the clocks <strong className={heading}>forward 30 minutes back to UTC-4</strong>, citing the need to save electricity during a severe energy crisis. The 9-year timezone experiment was over.
            </p>
          </div>
        </div>
      </section>

      {/* Oil & Crisis */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Largest Oil Reserves & the Migration Crisis</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Venezuela sits atop the <strong className={heading}>world&apos;s largest proven oil reserves</strong> (~304 billion barrels — more than Saudi Arabia). Yet the economic crisis that began in 2014 has caused one of the <strong className={heading}>largest displacement crises in modern history</strong>: over <strong className={heading}>7.7 million Venezuelans</strong> have left the country (~25% of the population).
            </p>
            <p>
              The Venezuelan diaspora now spans dozens of timezones: large communities in <strong className={heading}>Colombia (UTC-5), Peru (UTC-5), Chile (UTC-4/-3), Spain (CET/CEST), and the US (multiple zones)</strong>. Venezuelan families routinely coordinate across 5+ timezones to stay in touch — making timezone awareness a daily necessity for millions.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Venezuelan Cities — All on VET (UTC-4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Caracas', pop: '2.9M', note: 'Capital, 900m altitude valley' },
              { city: 'Maracaibo', pop: '1.6M', note: 'Oil capital, Lake Maracaibo lightning' },
              { city: 'Valencia', pop: '1.5M', note: 'Industrial hub, central location' },
              { city: 'Barquisimeto', pop: '1.1M', note: '"Musical capital", sunset city' },
              { city: 'Maracay', pop: '950K', note: 'Military hub, Henri Pittier park' },
              { city: 'Ciudad Guayana', pop: '900K', note: 'Orinoco, Angel Falls gateway' },
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
