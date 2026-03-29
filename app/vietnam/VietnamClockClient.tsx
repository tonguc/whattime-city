'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function VietnamClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Vietnam
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">ICT · UTC+7</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Hanoi</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Vietnam Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Indochina Time (ICT)' },
              { label: 'UTC Offset', value: 'UTC+7 (always)' },
              { label: 'Daylight Saving', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Ho_Chi_Minh' },
              { label: 'Population', value: '~100 million' },
              { label: 'Same Offset As', value: 'Thailand, Laos, Cambodia, Jakarta' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vietnam vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Vietnam Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Vietnam +12 hrs', summer: 'Vietnam +11 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Vietnam +15 hrs', summer: 'Vietnam +14 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Vietnam +7 hrs', summer: 'Vietnam +6 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Vietnam +6 hrs', summer: 'Vietnam +5 hrs' },
                  { zone: 'India (IST)', winter: 'Vietnam +1:30', summer: 'Vietnam +1:30' },
                  { zone: 'Japan (JST)', winter: 'Vietnam −2 hrs', summer: 'Vietnam −2 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Vietnam −4 hrs', summer: 'Vietnam −3 hrs' },
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

      {/* Two IANA Names */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Two Names, One Time: The IANA Curiosity</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Vietnam has <strong className={heading}>two IANA timezone identifiers</strong>: <strong className={heading}>Asia/Ho_Chi_Minh</strong> (southern Vietnam) and <strong className={heading}>Asia/Bangkok</strong> (same offset). Both resolve to UTC+7, but the existence of a Vietnam-specific identifier reflects the country&apos;s unique timezone <strong className={heading}>history</strong>.
            </p>
            <p>
              During the <strong className={heading}>French colonial period</strong>, Vietnam used UTC+7 (then called Indochina Time). During the <strong className={heading}>Vietnam War</strong>, South Vietnam used UTC+8 (aligned with the US military&apos;s preferred reference), while North Vietnam kept UTC+7.
            </p>
            <p>
              After <strong className={heading}>reunification in 1975</strong>, the entire country was standardized to <strong className={heading}>UTC+7</strong>. The IANA database preserves this history — Asia/Ho_Chi_Minh has different historical offset data than Asia/Bangkok, even though they&apos;re identical today.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Nomad Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Vietnam: Rising Digital Nomad Destination</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ho Chi Minh City and Hanoi have become <strong className={heading}>top digital nomad destinations</strong>, rivaling Thailand. The combination of ultra-low cost of living, fast internet, abundant co-working spaces, and <strong className={heading}>UTC+7 timezone</strong> makes Vietnam ideal for remote workers.
            </p>
            <p>
              For <strong className={heading}>European clients</strong>: Vietnam&apos;s 9 AM is 3 AM CET — but by working a shifted schedule (noon–8 PM), nomads can overlap with European afternoon hours. For <strong className={heading}>US clients</strong>: Vietnam&apos;s evening (8 PM–midnight) aligns with US East Coast morning (8 AM–12 PM).
            </p>
            <p>
              Vietnam&apos;s coffee culture (the <strong className={heading}>world&apos;s 2nd largest coffee exporter</strong>) perfectly supports the late-working digital nomad lifestyle — cafes with WiFi are open until midnight across Ho Chi Minh City.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Vietnamese Cities — All on ICT (UTC+7)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Ho Chi Minh City', pop: '13M metro', note: 'Economic capital, southern hub' },
              { city: 'Hanoi', pop: '8.4M metro', note: 'Political capital, northern hub' },
              { city: 'Da Nang', pop: '1.2M', note: 'Central coast, tech & tourism' },
              { city: 'Hai Phong', pop: '2.1M', note: 'Northern port, industrial' },
              { city: 'Can Tho', pop: '1.3M', note: 'Mekong Delta hub, southern' },
              { city: 'Nha Trang', pop: '540K', note: 'Beach resort, Khanh Hoa' },
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
