'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SaudiArabiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Riyadh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Riyadh', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Saudi Arabia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">AST · UTC+3</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Riyadh</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Saudi Arabia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Arabia Standard Time (AST)' },
              { label: 'UTC Offset', value: 'UTC+3 (always)' },
              { label: 'Daylight Saving', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Riyadh' },
              { label: 'Calendar Systems', value: 'Hijri (Islamic) + Gregorian' },
              { label: 'Same Offset As', value: 'Moscow, Turkey, East Africa, Qatar, Bahrain' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Saudi Arabia Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Saudi +8 hrs', summer: 'Saudi +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Saudi +11 hrs', summer: 'Saudi +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Saudi +3 hrs', summer: 'Saudi +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Saudi +2 hrs', summer: 'Saudi +1 hr' },
                  { zone: 'India (IST)', winter: 'Saudi −2:30', summer: 'Saudi −2:30' },
                  { zone: 'China (CST)', winter: 'Saudi −5 hrs', summer: 'Saudi −5 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Saudi −8 hrs', summer: 'Saudi −7 hrs' },
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

      {/* Islamic Calendar */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Hijri Calendar — Saudi Arabia&apos;s Official Calendar</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Saudi Arabia is one of few countries that officially uses the <strong className={heading}>Hijri (Islamic) calendar</strong> for government and religious purposes. The Hijri year is approximately <strong className={heading}>11 days shorter</strong> than the Gregorian year because it follows the <strong className={heading}>lunar cycle</strong>.
            </p>
            <p>
              This means Islamic dates (Ramadan, Eid, Hajj) <strong className={heading}>shift 11 days earlier</strong> each Gregorian year. The current Hijri year is approximately <strong className={heading}>1447 AH</strong> (After Hijra — the Prophet Muhammad&apos;s migration from Mecca to Medina in 622 CE).
            </p>
            <p>
              In <strong className={heading}>2016</strong>, Saudi Arabia switched government payroll and fiscal budgets to the Gregorian calendar for financial planning, while keeping the Hijri calendar for religious observances and official dating of royal decrees.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Gregorian', value: '2026' },
                { label: 'Hijri (approx.)', value: '1447–1448 AH' },
                { label: 'Year Length', value: '354–355 days (lunar)' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Prayer Times & the Saudi Work Schedule</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Daily life in Saudi Arabia revolves around the <strong className={heading}>five Islamic prayer times</strong> (Fajr, Dhuhr, Asr, Maghrib, Isha). Businesses close briefly during each prayer — typically <strong className={heading}>15–30 minutes</strong>.
            </p>
            <p>
              The Saudi work week runs <strong className={heading}>Sunday through Thursday</strong>, with Friday and Saturday as the weekend. This changed in <strong className={heading}>2013</strong> — before that, the weekend was Thursday–Friday. The shift was made to increase overlap with global financial markets.
            </p>
            <p>
              During <strong className={heading}>Ramadan</strong>, working hours are shortened by law (maximum 6 hours/day for government workers), and business operating hours shift significantly — many shops open late at night and close in the early morning.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Saudi Cities — All on AST (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Riyadh', pop: '7.7M', note: 'Capital, government center' },
              { city: 'Jeddah', pop: '4.7M', note: 'Red Sea port, commercial hub' },
              { city: 'Mecca', pop: '2.4M', note: 'Holiest city in Islam, Hajj' },
              { city: 'Medina', pop: '1.5M', note: 'Second holiest city, Prophet\'s Mosque' },
              { city: 'Dammam', pop: '1.3M', note: 'Eastern Province, oil industry' },
              { city: 'NEOM', pop: 'Planned', note: 'Futuristic megacity project, Tabuk' },
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
