'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SerbiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Belgrade', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Belgrade', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' })
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
            Current Time in Serbia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Europe&apos;s Rising IT Hub</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Belgrade</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Serbia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU rules)' },
              { label: 'IANA Identifier', value: 'Europe/Belgrade' },
              { label: 'Population', value: '~6.6 million' },
              { label: 'EU Status', value: 'Candidate since 2012 — not yet member' },
              { label: 'Famous For', value: 'Tesla, Djokovic, rakija, EXIT Festival' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serbia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Serbia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">RS Winter (CET)</th>
                  <th className="pb-2">RS Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'RS +6 hrs', summer: 'RS +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'RS +9 hrs', summer: 'RS +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'RS +1 hr', summer: 'RS +1 hr' },
                  { zone: 'Moscow (MSK)', winter: 'RS −2 hrs', summer: 'RS −1 hr' },
                  { zone: 'India (IST)', winter: 'RS −4:30', summer: 'RS −3:30' },
                  { zone: 'Germany (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* IT Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Serbia&apos;s IT Boom — Eastern Europe&apos;s Hidden Tech Giant</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Serbia has quietly become one of <strong className={heading}>Europe&apos;s fastest-growing IT hubs</strong>. The tech sector exports over <strong className={heading}>$3 billion annually</strong> — more than any other Serbian industry. Over <strong className={heading}>80,000 IT professionals</strong> work in the sector, with salaries that are competitive regionally but <strong className={heading}>50-70% below Western European rates</strong>.
            </p>
            <p>
              Belgrade and Novi Sad host engineering offices for <strong className={heading}>Microsoft, Nordeus</strong> (Top Eleven — world&apos;s most popular football management game, made in Belgrade), <strong className={heading}>FishingBooker, Nutanix, and Vega IT</strong>. The University of Belgrade and University of Novi Sad produce <strong className={heading}>world-class mathematicians and programmers</strong> — Serbia consistently ranks high in international programming olympiads.
            </p>
            <p>
              Serbia&apos;s CET timezone gives it <strong className={heading}>perfect overlap with EU clients</strong> — the same hours as Berlin, Paris, and Rome — while being significantly cheaper. This makes it the <strong className={heading}>go-to nearshoring destination</strong> for DACH (Germany/Austria/Switzerland) companies.
            </p>
          </div>
        </div>
      </section>

      {/* Two Calendars */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Two New Years — Serbia Celebrates Both Gregorian & Julian</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The Serbian Orthodox Church still follows the <strong className={heading}>Julian calendar</strong> for religious holidays. This means Serbia celebrates <strong className={heading}>two New Year&apos;s Eves</strong>: December 31 (Gregorian) and <strong className={heading}>January 13-14 (&ldquo;Serbian New Year&rdquo; / Srpska Nova Godina)</strong>. Orthodox Christmas falls on <strong className={heading}>January 7</strong>.
            </p>
            <p>
              The result: Serbs get an <strong className={heading}>extended holiday season</strong> from late December through mid-January. Belgrade&apos;s <strong className={heading}>Knez Mihailova Street</strong> party on both New Year&apos;s Eves draws hundreds of thousands. The tradition of <strong className={heading}>&ldquo;\u010de\u0161nica&rdquo;</strong> (breaking a special bread with a hidden coin on Orthodox Christmas) is still observed in most Serbian families.
            </p>
          </div>
        </div>
      </section>

      {/* Belgrade Nightlife */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Belgrade: Europe&apos;s Nightlife Capital & EXIT Festival</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Belgrade is legendary for its <strong className={heading}>nightlife</strong>. The floating clubs (<strong className={heading}>splavovi</strong>) on the Danube and Sava rivers are unique to Belgrade — dozens of barge-clubs line the riverbanks, with parties running until <strong className={heading}>5-6 AM CEST</strong> in summer. Belgrade locals rarely head out before <strong className={heading}>midnight</strong>.
            </p>
            <p>
              <strong className={heading}>EXIT Festival</strong> in Novi Sad (held at the Petrovaradin Fortress) is one of <strong className={heading}>Europe&apos;s biggest music festivals</strong> — 200,000+ attendees over 4 days in July. It won &ldquo;Best Major European Festival&rdquo; multiple times.
            </p>
            <p>
              The Belgrade party schedule: dinner at <strong className={heading}>9-10 PM</strong> → pre-drinks (<em>kafana</em>) at <strong className={heading}>11 PM</strong> → clubs at <strong className={heading}>1 AM</strong> → home at <strong className={heading}>5-6 AM</strong>. This rhythm is deeply embedded — trying to start a party before midnight in Belgrade is considered premature.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Serbian Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Belgrade', pop: '1.7M', note: 'Capital, Danube & Sava confluence' },
              { city: 'Novi Sad', pop: '380K', note: '2nd city, EXIT Festival, Vojvodina capital' },
              { city: 'Ni\u0161', pop: '260K', note: '3rd city, Constantine birthplace, IT hub' },
              { city: 'Kragujevac', pop: '180K', note: 'Fiat/Stellantis factory, central' },
              { city: 'Subotica', pop: '140K', note: 'Art Nouveau, Hungarian minority, north' },
              { city: 'Zlatibor', pop: '30K', note: 'Mountain resort, wellness tourism' },
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
