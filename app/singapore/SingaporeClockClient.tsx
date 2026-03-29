'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SingaporeClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Singapore', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Singapore
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">SGT · UTC+8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Equatorial</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">City-State</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Singapore Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Singapore Standard Time (SGT)' },
              { label: 'UTC Offset', value: 'UTC+8 (always)' },
              { label: 'Geographic Zone', value: 'Should be UTC+7 (same as Bangkok)' },
              { label: 'DST Status', value: 'Never observed (1.3° north of equator)' },
              { label: 'IANA Identifier', value: 'Asia/Singapore' },
              { label: 'Same Offset As', value: 'China, Hong Kong, Taiwan, Malaysia, Perth' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Singapore vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Singapore Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            SGT (UTC+8) is constant year-round. Singapore sits at the center of the Asian business timezone.
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
                  { zone: 'New York (ET)', winter: 'SGT +13 hrs', summer: 'SGT +12 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'SGT +16 hrs', summer: 'SGT +15 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'SGT +8 hrs', summer: 'SGT +7 hrs' },
                  { zone: 'India (IST)', winter: 'SGT +2:30', summer: 'SGT +2:30' },
                  { zone: 'Japan (JST)', winter: 'SGT −1 hr', summer: 'SGT −1 hr' },
                  { zone: 'Sydney (AET)', winter: 'SGT −3 hrs', summer: 'SGT −2 hrs' },
                  { zone: 'Malaysia (MYT)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Wrong Timezone */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Is Singapore on UTC+8 Instead of UTC+7?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Singapore sits at <strong className={heading}>103.8°E longitude</strong> — geographically in the UTC+7 zone, the same as Bangkok and Jakarta. Yet it uses <strong className={heading}>UTC+8</strong>, a full hour ahead.
            </p>
            <p>
              The shift happened in <strong className={heading}>1982</strong> when Malaysia moved to UTC+8 to align with Hong Kong and China. Since Singapore is <strong className={heading}>physically connected to Malaysia</strong> via two causeways (hundreds of thousands cross daily), it had no choice but to follow — having a 1-hour border difference with your only land neighbor would be chaotic.
            </p>
            <p>
              Before 1982, Singapore used <strong className={heading}>UTC+7:30</strong> (called &ldquo;Malaya Time&rdquo;). The result of the +8 shift: solar noon in Singapore occurs around <strong className={heading}>1:05 PM</strong>, and sunset at the equinox is around <strong className={heading}>7:10 PM</strong> — giving Singapore its famously long, bright evenings.
            </p>
          </div>
        </div>
      </section>

      {/* Finance Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Asia&apos;s Financial Timezone Bridge</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Singapore&apos;s UTC+8 position makes it the <strong className={heading}>central node of Asian finance</strong>. In a single business day, Singapore traders can cover:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className={heading}>Sydney open</strong> (7 AM SGT) — catch Australian markets</li>
              <li><strong className={heading}>Tokyo/Hong Kong</strong> (8-9 AM SGT) — full overlap with Northeast Asia</li>
              <li><strong className={heading}>India open</strong> (6:30 AM SGT) — IST overlap from morning</li>
              <li><strong className={heading}>London open</strong> (3-4 PM SGT) — catch European afternoon</li>
            </ul>
            <p className="mt-2">
              This makes Singapore the <strong className={heading}>world&apos;s 3rd largest financial center</strong> (after New York and London) and the <strong className={heading}>#1 forex trading hub in Asia</strong>, handling $750+ billion in daily forex volume.
            </p>
          </div>
        </div>
      </section>

      {/* 5.5M on 730 km² */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>One Island, One Timezone, One City</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Singapore is a <strong className={heading}>city-state</strong> — the entire country is just <strong className={heading}>733 km²</strong> (smaller than New York City). With <strong className={heading}>5.9 million people</strong>, it has one of the highest population densities in the world.
            </p>
            <p>
              At just <strong className={heading}>1.3° north of the equator</strong>, Singapore has virtually no daylight variation — sunrise is always around <strong className={heading}>7:00 AM</strong> and sunset around <strong className={heading}>7:15 PM</strong>, year-round. There are no seasons, no DST, and functionally <strong className={heading}>one weather mode: hot and humid</strong> (~31°C / 88°F daily).
            </p>
          </div>
        </div>
      </section>

      {/* Key Districts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Key Singapore Districts — All on SGT (UTC+8)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Marina Bay', pop: 'CBD', note: 'Financial district, Marina Bay Sands' },
              { city: 'Orchard Road', pop: 'Central', note: 'Shopping belt, tourism hub' },
              { city: 'Changi', pop: 'East', note: 'World\'s best airport, tech park' },
              { city: 'One-North', pop: 'West', note: 'Tech & biomedical R&D cluster' },
              { city: 'Jurong East', pop: 'West', note: 'Commercial hub, Lake District' },
              { city: 'Sentosa', pop: 'South', note: 'Resort island, Universal Studios' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
