'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NetherlandsClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Amsterdam', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Amsterdam', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-orange-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in the Netherlands
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Amsterdam</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Amsterdam Time → CET (1940)</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Netherlands Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'Historical Zone', value: 'Amsterdam Time was UTC+0:19:32!' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Amsterdam' },
              { label: 'Population', value: '~17.8 million' },
              { label: 'Same Zone As', value: 'Germany, France, Belgium, Luxembourg' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Netherlands vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Netherlands Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">NL Winter (CET)</th>
                  <th className="pb-2">NL Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'NL +6 hrs', summer: 'NL +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'NL +9 hrs', summer: 'NL +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'NL +1 hr', summer: 'NL +1 hr' },
                  { zone: 'India (IST)', winter: 'NL −4:30', summer: 'NL −3:30' },
                  { zone: 'Japan (JST)', winter: 'NL −8 hrs', summer: 'NL −7 hrs' },
                  { zone: 'Indonesia (WIB)', winter: 'NL −6 hrs', summer: 'NL −5 hrs' },
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

      {/* Amsterdam Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Amsterdam Time: The Quirkiest Timezone in History</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Before 1940, the Netherlands used <strong className={heading}>&ldquo;Amsterdam Time&rdquo;</strong> — one of the most precise (and absurd) timezone offsets ever: <strong className={heading}>UTC+0:19:32.13</strong>. That&apos;s exactly 19 minutes and 32.13 seconds ahead of Greenwich.
            </p>
            <p>
              This hyper-precise offset was based on the <strong className={heading}>exact longitude of Amsterdam&apos;s Westerkerk tower</strong> (4.883°E × 4 min/degree = 19m 32s). The Dutch took geographic accuracy very seriously.
            </p>
            <p>
              During the <strong className={heading}>German occupation in May 1940</strong>, the Netherlands was forced to adopt CET (UTC+1) to align with Berlin. Like France, the Netherlands <strong className={heading}>never reverted</strong> after liberation. The 19-minute offset vanished into history.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Before 1940', value: 'UTC+0:19:32', note: 'Amsterdam Time' },
                { label: '1940 (Occupation)', value: 'UTC+1:40', note: 'German summer time' },
                { label: 'Today', value: 'UTC+1/+2', note: 'CET/CEST' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.value}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMS-IX & Tech */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Amsterdam: Internet Exchange Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Amsterdam hosts <strong className={heading}>AMS-IX</strong>, one of the <strong className={heading}>world&apos;s largest internet exchange points</strong> by traffic volume. Over <strong className={heading}>900+ networks</strong> peer here, making Amsterdam a global internet backbone hub.
            </p>
            <p>
              This, combined with CET timezone, liberal data laws, and multilingual workforce, has made the Netherlands a <strong className={heading}>top location for European data centers</strong>. Netflix, Microsoft, and Google all run major infrastructure from Dutch soil.
            </p>
            <p>
              The Dutch tech scene (<strong className={heading}>Booking.com, TomTom, Adyen, Elastic</strong>) benefits from CET&apos;s central position — <strong className={heading}>full European overlap</strong> and a useful 6-hour overlap with US East Coast.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Dutch Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Amsterdam', pop: '2.5M metro', note: 'Capital, canals, AMS-IX hub' },
              { city: 'Rotterdam', pop: '1.5M metro', note: 'Europe\'s largest port' },
              { city: 'The Hague', pop: '1.1M metro', note: 'Government seat, ICJ, ICC' },
              { city: 'Utrecht', pop: '700K metro', note: 'Central hub, university city' },
              { city: 'Eindhoven', pop: '770K metro', note: 'Tech hub, Philips, ASML HQ' },
              { city: 'Groningen', pop: '230K', note: 'Northern hub, student city' },
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
