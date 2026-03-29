'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IndonesiaClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ jakarta: '--:--', makassar: '--:--', jayapura: '--:--' })
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({
        jakarta: fmt('Asia/Jakarta'),
        makassar: fmt('Asia/Makassar'),
        jayapura: fmt('Asia/Jayapura'),
      })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Indonesia
          </div>
          <div className="grid grid-cols-3 gap-4 mb-3">
            {[
              { city: 'Jakarta (WIB)', tz: 'UTC+7', time: times.jakarta },
              { city: 'Makassar (WITA)', tz: 'UTC+8', time: times.makassar },
              { city: 'Jayapura (WIT)', tz: 'UTC+9', time: times.jayapura },
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">3 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Equatorial</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">275M People</span>
          </div>
        </div>
      </section>

      {/* Time Zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Indonesia&apos;s 3 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">Indonesian Name</th>
                  <th className="pb-2 pr-4">UTC</th>
                  <th className="pb-2">Coverage</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'WIB', name: 'Waktu Indonesia Barat (Western)', utc: 'UTC+7', coverage: 'Sumatra, Java, West/Central Kalimantan' },
                  { zone: 'WITA', name: 'Waktu Indonesia Tengah (Central)', utc: 'UTC+8', coverage: 'Bali, Sulawesi, East/South Kalimantan, Nusa Tenggara' },
                  { zone: 'WIT', name: 'Waktu Indonesia Timur (Eastern)', utc: 'UTC+9', coverage: 'Papua, Maluku Islands' },
                ].map(({ zone, name, utc, coverage }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-bold ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{name}</td>
                    <td className={`py-2 pr-4 ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{utc}</td>
                    <td className={`py-2 ${mutedText}`}>{coverage}</td>
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
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Indonesia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Number of Time Zones', value: '3 (WIB, WITA, WIT)' },
              { label: 'Reference Zone', value: 'WIB (UTC+7) — Jakarta, capital' },
              { label: 'DST Status', value: 'Never observed (equatorial)' },
              { label: 'IANA Identifier', value: 'Asia/Jakarta (WIB)' },
              { label: 'East–West Span', value: '5,120 km — wider than continental US' },
              { label: 'Population', value: '~275 million (4th largest)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indonesia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Indonesia Time vs World (Jakarta WIB)</h2>
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
                  { zone: 'New York (ET)', winter: 'WIB +12 hrs', summer: 'WIB +11 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'WIB +15 hrs', summer: 'WIB +14 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'WIB +7 hrs', summer: 'WIB +6 hrs' },
                  { zone: 'India (IST)', winter: 'WIB +1:30', summer: 'WIB +1:30' },
                  { zone: 'Singapore (SGT)', winter: 'WIB −1 hr', summer: 'WIB −1 hr' },
                  { zone: 'Japan (JST)', winter: 'WIB −2 hrs', summer: 'WIB −2 hrs' },
                  { zone: 'Sydney (AET)', winter: 'WIB −4 hrs', summer: 'WIB −3 hrs' },
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

      {/* Single Zone Debate */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Single Time Zone Proposal</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2012 and again in 2022</strong>, Indonesian officials proposed unifying the country under a <strong className={heading}>single time zone (WITA, UTC+8)</strong>. The argument: simplify business, reduce scheduling confusion, and boost productivity.
            </p>
            <p>
              The proposal would move Jakarta&apos;s clocks <strong className={heading}>1 hour forward</strong> to UTC+8, aligning with Singapore and Malaysia. Proponents cited economic studies showing a potential <strong className={heading}>GDP boost of 0.5%</strong> from reduced confusion in inter-island commerce.
            </p>
            <p>
              Critics argued it would mean <strong className={heading}>sunrise at 7:30 AM in Papua</strong> (currently 5:30 AM) and <strong className={heading}>4:30 AM in Sumatra</strong> — disrupting prayer times (especially Fajr), agriculture, and daily routines for millions. The proposal remains under discussion.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Indonesian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Jakarta', pop: '34M metro', note: 'Capital, WIB (UTC+7)' },
              { city: 'Surabaya', pop: '7.6M metro', note: 'East Java, WIB (UTC+7)' },
              { city: 'Bali (Denpasar)', pop: '950K', note: 'Tourism hub, WITA (UTC+8)' },
              { city: 'Bandung', pop: '8.5M metro', note: 'Highland city, WIB (UTC+7)' },
              { city: 'Makassar', pop: '1.5M', note: 'Sulawesi, WITA (UTC+8)' },
              { city: 'Medan', pop: '2.5M', note: 'Sumatra, WIB (UTC+7)' },
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
