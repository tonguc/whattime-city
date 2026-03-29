'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CambodiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Phnom_Penh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Phnom_Penh', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Cambodia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">ICT · UTC+7 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Phnom Penh</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Cambodia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ICT — Indochina Time (UTC+7)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Phnom_Penh' },
              { label: 'Population', value: '~17 million' },
              { label: 'Same TZ As', value: 'Thailand, Vietnam, Laos' },
              { label: 'Calendar', value: 'Buddhist Era — currently ~2569-2570 BE' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cambodia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Cambodia Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'KH +12 hrs', summer: 'KH +11 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'KH +15 hrs', summer: 'KH +14 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'KH +7 hrs', summer: 'KH +6 hrs' },
                  { zone: 'Thailand (ICT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'China/Singapore (CST)', winter: 'KH −1 hr', summer: 'KH −1 hr' },
                  { zone: 'Japan (JST)', winter: 'KH −2 hrs', summer: 'KH −2 hrs' },
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

      {/* Angkor Wat */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Angkor Wat — The World&apos;s Largest Religious Monument & Its Solar Alignment</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Angkor Wat</strong> — built in the 12th century by King Suryavarman II — is the <strong className={heading}>world&apos;s largest religious monument</strong> and Cambodia&apos;s national symbol (it&apos;s on the flag). The temple complex spans <strong className={heading}>162.6 hectares</strong> and draws 2.5M+ tourists annually.
            </p>
            <p>
              The temple is a masterpiece of <strong className={heading}>astronomical alignment</strong>: during the <strong className={heading}>spring equinox (March 21)</strong>, the sun rises directly over the central tower. Sunrise at Angkor Wat is one of the world&apos;s most photographed moments — visitors arrive at <strong className={heading}>5:00 AM ICT</strong> to secure viewing spots.
            </p>
            <p>
              The Khmer Empire that built Angkor was one of the <strong className={heading}>most powerful empires in Southeast Asian history</strong> (802-1431 AD), covering present-day Cambodia, Thailand, Laos, and Vietnam. Khmer astronomers maintained sophisticated <strong className={heading}>solar and lunar calendars</strong> — the temples themselves were timekeeping instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Nomad & Dollar Economy */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dollar Economy & Southeast Asia&apos;s Digital Nomad Hub</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Cambodia has a <strong className={heading}>dual currency economy</strong>: the official Riel (KHR) circulates alongside the <strong className={heading}>US Dollar</strong>, which is accepted everywhere in cities. ATMs dispense dollars. This dollarization, combined with <strong className={heading}>low cost of living</strong> ($600-800/month in Phnom Penh), makes Cambodia attractive to digital nomads and expats.
            </p>
            <p>
              <strong className={heading}>Siem Reap</strong> (Angkor Wat gateway) and <strong className={heading}>Phnom Penh</strong> have growing co-working scenes. Cambodia&apos;s ICT timezone aligns perfectly with <strong className={heading}>Thai and Vietnamese colleagues</strong> (same time) and overlaps with <strong className={heading}>Chinese/Singaporean clients</strong> (just 1 hour behind).
            </p>
            <p>
              Khmer New Year (<strong className={heading}>Choul Chnam Thmey</strong>) in mid-April is a 3-day national celebration — the country essentially stops. Water Festival (<strong className={heading}>Bon Om Touk</strong>) in November features dramatic boat races on the Tonle Sap river reversal — one of the world&apos;s only rivers that <strong className={heading}>changes direction seasonally</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Cambodian Cities — All on ICT (UTC+7)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Phnom Penh', pop: '2.3M', note: 'Capital, Royal Palace, riverside' },
              { city: 'Siem Reap', pop: '250K', note: 'Angkor Wat gateway, tourism hub' },
              { city: 'Battambang', pop: '200K', note: '2nd city, colonial architecture' },
              { city: 'Sihanoukville', pop: '160K', note: 'Beach resort, Chinese investment' },
              { city: 'Kampong Cham', pop: '120K', note: 'Mekong river city, bamboo bridge' },
              { city: 'Kep', pop: '40K', note: 'Seaside retreat, famous for crab market' },
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
