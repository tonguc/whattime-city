'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SouthAfricaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Johannesburg', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in South Africa
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">SAST · UTC+2</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">3 Capitals</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>South Africa Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'South Africa Standard Time (SAST)' },
              { label: 'UTC Offset', value: 'UTC+2 (always)' },
              { label: 'Daylight Saving', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Africa/Johannesburg' },
              { label: 'Population', value: '~60 million (Rainbow Nation)' },
              { label: 'Same Offset As', value: 'Egypt, Israel, Greece, Romania' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SA vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>South Africa Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            SAST (UTC+2) never changes. A major advantage for business: SA overlaps with both European and Asian business hours.
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
                  { zone: 'New York (ET)', winter: 'SA +7 hrs', summer: 'SA +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'SA +10 hrs', summer: 'SA +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'SA +2 hrs', summer: 'SA +1 hr' },
                  { zone: 'Berlin (CET/CEST)', winter: 'SA +1 hr', summer: 'Same as SA' },
                  { zone: 'India (IST)', winter: 'SA −3:30', summer: 'SA −3:30' },
                  { zone: 'China (CST)', winter: 'SA −6 hrs', summer: 'SA −6 hrs' },
                  { zone: 'Sydney (AET)', winter: 'SA −9 hrs', summer: 'SA −8 hrs' },
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

      {/* Business Overlap */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>South Africa&apos;s Strategic Time Zone Advantage</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              South Africa&apos;s UTC+2 position gives it a <strong className={heading}>unique business advantage</strong>: significant overlap with both <strong className={heading}>European and Asian</strong> working hours in a single day.
            </p>
            <p>
              A Johannesburg-based worker can call <strong className={heading}>London from 9:00 AM to 5:00 PM</strong> (overlaps fully), <strong className={heading}>Mumbai from 8:00 AM to 4:00 PM</strong> (overlaps ~6 hours), and still reach <strong className={heading}>New York from 3:00 PM to 5:00 PM</strong> (2-hour overlap in winter).
            </p>
            <p>
              This makes South Africa an increasingly popular hub for <strong className={heading}>international BPO, fintech, and remote work</strong> — a bridge between Europe, Asia, and the Americas.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Capitals */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Three Capitals, One Time Zone</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              South Africa is one of the few countries with <strong className={heading}>three capital cities</strong>, each serving a different branch of government:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-3">
            {[
              { city: 'Pretoria', role: 'Administrative Capital', branch: 'Executive (President & Cabinet)', pop: '2.6M metro' },
              { city: 'Cape Town', role: 'Legislative Capital', branch: 'Parliament', pop: '4.6M metro' },
              { city: 'Bloemfontein', role: 'Judicial Capital', branch: 'Supreme Court of Appeal', pop: '750K metro' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs font-medium ${subText}`}>{c.role}</div>
                <div className={`text-xs ${mutedText} mt-1`}>{c.branch}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load Shedding */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Load Shedding & Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              South Africa&apos;s <strong className={heading}>load shedding</strong> (scheduled power outages) has made time management uniquely critical. Eskom, the state power utility, implements rolling blackouts in <strong className={heading}>2–4 hour blocks</strong> on a published schedule.
            </p>
            <p>
              South Africans plan their entire day around load shedding stages — cooking, charging devices, and scheduling meetings must account for <strong className={heading}>when power will be available</strong>. Apps like EskomSePush became essential tools, with millions of daily users checking their time-block schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major South African Cities — All on SAST (UTC+2)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Johannesburg', pop: '6M metro', note: 'Financial capital, Gauteng' },
              { city: 'Cape Town', pop: '4.6M metro', note: 'Legislative capital, Western Cape' },
              { city: 'Durban', pop: '3.9M metro', note: 'Indian Ocean coast, KZN' },
              { city: 'Pretoria', pop: '2.6M metro', note: 'Admin capital, Jacaranda City' },
              { city: 'Port Elizabeth', pop: '1.3M metro', note: 'Eastern Cape, automotive' },
              { city: 'Stellenbosch', pop: '180K', note: 'Wine capital, university town' },
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
