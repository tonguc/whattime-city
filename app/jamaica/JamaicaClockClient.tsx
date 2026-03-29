'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function JamaicaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Jamaica', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Jamaica', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Jamaica
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-yellow-400/40">EST · UTC-5 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — &ldquo;Island Time&rdquo;</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Kingston</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Jamaica Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EST — Eastern Standard Time (UTC-5)' },
              { label: 'DST Status', value: 'Never observed — permanent EST' },
              { label: 'IANA Identifier', value: 'America/Jamaica' },
              { label: 'Population', value: '~3 million' },
              { label: 'Offset Note', value: 'Matches NYC in winter, 1hr behind in summer' },
              { label: 'Famous For', value: 'Bob Marley, reggae, Usain Bolt, Blue Mountain' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jamaica vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Jamaica Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Jamaica stays on EST (UTC-5) year-round. When the US shifts to EDT, Jamaica falls 1 hour behind New York/Miami.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">US Winter</th>
                  <th className="pb-2">US Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York / Miami (ET)', winter: 'Same time!', summer: 'JM −1 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'JM +3 hrs', summer: 'JM +2 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'JM −5 hrs', summer: 'JM −6 hrs' },
                  { zone: 'Toronto (ET)', winter: 'Same time!', summer: 'JM −1 hr' },
                  { zone: 'Cayman Islands', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Trinidad & Tobago (AST)', winter: 'JM +1 hr', summer: 'JM +1 hr' },
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

      {/* Reggae Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Reggae, Bob Marley & &ldquo;Soon Come&rdquo; — Jamaican Time Culture</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Jamaica&apos;s most famous cultural export is <strong className={heading}>reggae music</strong> — born in Kingston in the late 1960s. <strong className={heading}>Bob Marley</strong> (1945-1981) became the genre&apos;s global ambassador. His home at <strong className={heading}>56 Hope Road</strong> is now a museum. Jamaica also gave the world <strong className={heading}>ska, rocksteady, dancehall, and dub</strong>.
            </p>
            <p>
              The phrase <strong className={heading}>&ldquo;soon come&rdquo;</strong> is quintessentially Jamaican — it means &ldquo;I&apos;ll be there eventually&rdquo; with no specific timeframe. It captures the <strong className={heading}>relaxed Jamaican approach to time</strong>: events start when they start, stress is optional, and <strong className={heading}>&ldquo;irie&rdquo;</strong> (everything&apos;s alright) is the default state.
            </p>
            <p>
              <strong className={heading}>Usain Bolt</strong> — the fastest human in history (9.58s for 100m) — is Jamaican. For a nation of <strong className={heading}>3 million people</strong>, Jamaica dominates world sprinting like no other country. The annual <strong className={heading}>Champs</strong> high school track meet in Kingston is one of the world&apos;s most intense athletic competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Diaspora */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Jamaican Diaspora — 3M at Home, 3M+ Abroad</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Jamaica&apos;s diaspora roughly <strong className={heading}>equals its home population</strong>. Large Jamaican communities in <strong className={heading}>New York (especially Brooklyn), Miami, Toronto, London (Brixton/Notting Hill)</strong>, and across the Caribbean. The permanent EST timezone is convenient for the US connection — matching the <strong className={heading}>East Coast corridor</strong> that most Jamaicans abroad call home.
            </p>
            <p>
              Jamaica&apos;s <strong className={heading}>Blue Mountain Coffee</strong> is among the world&apos;s most expensive — ~$65/lb retail. Over 80% goes to <strong className={heading}>Japan</strong>, which has had a special trade relationship since the 1960s. Jamaican <strong className={heading}>jerk seasoning</strong>, <strong className={heading}>rum (Appleton Estate)</strong>, and <strong className={heading}>patties</strong> have become global food staples.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Jamaican Cities — All on EST (UTC-5)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kingston', pop: '1.2M metro', note: 'Capital, Bob Marley Museum, tech hub' },
              { city: 'Montego Bay', pop: '115K', note: 'Tourism capital, "MoBay", Hip Strip' },
              { city: 'Spanish Town', pop: '165K', note: 'Former capital, historic, St. Catherine' },
              { city: 'Portmore', pop: '185K', note: 'Dormitory city, dancehall culture' },
              { city: 'Ocho Rios', pop: '17K', note: 'Cruise port, Dunn\'s River Falls' },
              { city: 'Negril', pop: '7K', note: 'Seven Mile Beach, sunset capital' },
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
