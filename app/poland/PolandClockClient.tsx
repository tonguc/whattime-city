'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PolandClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Warsaw', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Warsaw' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Warsaw' })
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
            Current Time in Poland
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">
              {isDST ? 'Summer Time (Czas Letni)' : 'Winter Time (Czas Zimowy)'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Warsaw</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Poland Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'Polish Name', value: 'Czas Zimowy / Czas Letni' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Warsaw' },
              { label: 'Population', value: '~38 million' },
              { label: 'Same Zone As', value: 'Germany, France, Italy, Spain' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poland vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Poland Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Poland Winter (CET)</th>
                  <th className="pb-2">Poland Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Poland +6 hrs', summer: 'Poland +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Poland +9 hrs', summer: 'Poland +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Poland +1 hr', summer: 'Poland +1 hr' },
                  { zone: 'India (IST)', winter: 'Poland −4:30', summer: 'Poland −3:30' },
                  { zone: 'Japan (JST)', winter: 'Poland −8 hrs', summer: 'Poland −7 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Poland −10 hrs', summer: 'Poland −8 hrs' },
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

      {/* Poland's IT Boom */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Poland: Europe&apos;s IT Outsourcing Powerhouse</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Poland has become <strong className={heading}>Europe&apos;s #1 destination for IT outsourcing</strong>, with over <strong className={heading}>300,000 software developers</strong> — the largest developer pool in Central Europe. Cities like <strong className={heading}>Warsaw, Kraków, and Wrocław</strong> host offices for Google, Amazon, Microsoft, and hundreds of EU startups.
            </p>
            <p>
              Poland&apos;s CET timezone is a <strong className={heading}>massive advantage</strong>: full overlap with Western European business hours, and a <strong className={heading}>6-hour overlap with US East Coast</strong> (9 AM–3 PM US = 3 PM–9 PM Poland). This makes Poland ideal for nearshoring — European quality at competitive rates.
            </p>
            <p>
              Polish developers consistently rank in the <strong className={heading}>top 5 globally</strong> on HackerRank and TopCoder. Combined with EU membership and CET timezone, Poland has attracted <strong className={heading}>$2+ billion in IT investment</strong> annually.
            </p>
          </div>
        </div>
      </section>

      {/* Name Day Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Imieniny — Poland&apos;s Name Day Tradition</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In Poland, <strong className={heading}>imieniny</strong> (name days) are often celebrated <strong className={heading}>more than birthdays</strong>. Every day of the calendar is associated with specific Polish names, and people celebrate when their name day arrives — often with cake, flowers, and parties.
            </p>
            <p>
              Polish calendars and daily newspapers print the day&apos;s names. Colleagues at work bring treats on their <strong className={heading}>imieniny</strong>, and it&apos;s considered more important than a birthday in traditional Polish culture. This time-linked tradition makes the <strong className={heading}>calendar deeply personal</strong> in Poland.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Polish Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Warsaw', pop: '3.1M metro', note: 'Capital, business hub' },
              { city: 'Kraków', pop: '1.7M metro', note: 'Cultural capital, IT hub' },
              { city: 'Wrocław', pop: '1.1M metro', note: 'Tech hub, "Polish Silicon Valley"' },
              { city: 'Gdańsk', pop: '800K metro', note: 'Baltic coast, Solidarity movement' },
              { city: 'Poznań', pop: '850K metro', note: 'Trade fair city, western Poland' },
              { city: 'Łódź', pop: '680K', note: 'Film school city, central Poland' },
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
