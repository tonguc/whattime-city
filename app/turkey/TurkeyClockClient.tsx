'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TurkeyClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Istanbul', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Turkey
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">TRT · UTC+3</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Permanent Summer Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Istanbul</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Turkey Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Turkey Time (TRT)' },
              { label: 'UTC Offset', value: 'UTC+3 (always — permanent summer time)' },
              { label: 'Geographic Zone', value: 'Should be UTC+2 based on longitude' },
              { label: 'DST Status', value: 'Permanent summer time since Sep 2016' },
              { label: 'IANA Identifier', value: 'Europe/Istanbul' },
              { label: 'Same Offset As', value: 'Moscow, Saudi Arabia, East Africa' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turkey vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Turkey Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            TRT (UTC+3) is fixed year-round. Differences shift when other countries observe DST.
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
                  { zone: 'New York (ET)', winter: 'Turkey +8 hrs', summer: 'Turkey +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Turkey +11 hrs', summer: 'Turkey +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Turkey +3 hrs', summer: 'Turkey +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Turkey +2 hrs', summer: 'Turkey +1 hr' },
                  { zone: 'Dubai (GST)', winter: 'Turkey −1 hr', summer: 'Turkey −1 hr' },
                  { zone: 'India (IST)', winter: 'Turkey −2:30', summer: 'Turkey −2:30' },
                  { zone: 'Japan (JST)', winter: 'Turkey −6 hrs', summer: 'Turkey −6 hrs' },
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

      {/* Permanent Summer Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Turkey&apos;s Permanent Summer Time — Why UTC+3?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>September 2016</strong>, Turkey made a controversial decision: instead of falling back to winter time (UTC+2), the government kept clocks on <strong className={heading}>permanent summer time (UTC+3)</strong>. The change was announced just days before the scheduled switch.
            </p>
            <p>
              Geographically, Turkey sits mostly between <strong className={heading}>26°E and 45°E longitude</strong>, which corresponds to UTC+2 (like Greece and Eastern Europe). By staying on UTC+3, Turkey&apos;s solar noon occurs around <strong className={heading}>1:00 PM</strong> instead of 12:00 PM — meaning mornings are darker and evenings are lighter.
            </p>
            <p>
              The government cited <strong className={heading}>energy savings</strong> and alignment with Middle Eastern business hours (Saudi Arabia, UAE, and Russia are all UTC+3 or later). Critics argue the late winter sunrises — around <strong className={heading}>8:30 AM in Istanbul</strong> and even later in eastern Turkey — affect school children and morning commuters.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-2 gap-4 text-center text-xs">
              {[
                { label: 'Winter Sunrise (Istanbul)', value: '~8:15 AM', note: 'Would be ~7:15 AM on UTC+2' },
                { label: 'Winter Sunset (Istanbul)', value: '~5:30 PM', note: 'Would be ~4:30 PM on UTC+2' },
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

      {/* Turkey Time History */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Turkey&apos;s Time Zone History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Period</th>
                  <th className="pb-2 pr-4">Standard</th>
                  <th className="pb-2">Notes</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { period: 'Before 1910', standard: 'Local solar time', notes: 'No standardized time' },
                  { period: '1910–1978', standard: 'EET (UTC+2)', notes: 'Standard European time' },
                  { period: '1978–2016', standard: 'EET/EEST', notes: 'Seasonal DST like EU (UTC+2 winter, UTC+3 summer)' },
                  { period: '2016–Present', standard: 'TRT (UTC+3)', notes: 'Permanent summer time, no DST' },
                ].map(({ period, standard, notes }) => (
                  <tr key={period}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{period}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{standard}</td>
                    <td className={`py-2 ${mutedText}`}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Turkish Cities — All on TRT (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Istanbul', pop: '16M', note: 'Largest city, spans two continents' },
              { city: 'Ankara', pop: '5.7M', note: 'Capital, government center' },
              { city: 'Izmir', pop: '4.4M', note: 'Aegean coast, third largest' },
              { city: 'Antalya', pop: '2.6M', note: 'Mediterranean tourism hub' },
              { city: 'Bursa', pop: '3.1M', note: 'Industrial center, former capital' },
              { city: 'Adana', pop: '2.3M', note: 'Southern hub, agriculture' },
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
