'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IsraelClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Jerusalem', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Israel
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'IDT · UTC+3' : 'IST · UTC+2'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">
              {isDST ? 'Summer Time (שעון קיץ)' : 'Winter Time (שעון חורף)'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Jerusalem</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Israel Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Standard Time', value: 'IST (UTC+2)' },
              { label: 'Daylight Saving', value: 'IDT (UTC+3) — observed' },
              { label: 'DST Rule', value: 'Friday before last Sunday Mar → last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Asia/Jerusalem' },
              { label: 'Calendar Systems', value: 'Hebrew + Gregorian (dual use)' },
              { label: 'Same Zone As', value: 'Greece, Romania, Egypt (winter)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Israel vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Israel Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Israel Winter (IST)</th>
                  <th className="pb-2">Israel Summer (IDT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Israel +7 hrs', summer: 'Israel +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Israel +10 hrs', summer: 'Israel +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Israel +2 hrs', summer: 'Israel +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Israel +1 hr', summer: 'Israel +1 hr' },
                  { zone: 'India (IST)', winter: 'Israel −3:30', summer: 'Israel −2:30' },
                  { zone: 'Japan (JST)', winter: 'Israel −7 hrs', summer: 'Israel −6 hrs' },
                  { zone: 'Silicon Valley (PT)', winter: 'Israel +10 hrs', summer: 'Israel +10 hrs' },
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

      {/* Startup Nation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Startup Nation: Israel&apos;s Tech Timezone Challenge</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Israel has the <strong className={heading}>highest number of startups per capita</strong> in the world, with over <strong className={heading}>7,000 active tech companies</strong>. Tel Aviv is consistently ranked among the top 5 global tech ecosystems alongside Silicon Valley, London, and Singapore.
            </p>
            <p>
              The <strong className={heading}>10-hour gap with Silicon Valley</strong> is both a challenge and an opportunity. Israeli tech workers often adopt a <strong className={heading}>split schedule</strong>: normal hours for European clients (9 AM–5 PM), then a second shift from <strong className={heading}>6 PM–10 PM</strong> to overlap with US West Coast morning (8 AM–12 PM PT).
            </p>
            <p>
              This &ldquo;follow-the-sun&rdquo; model means Israeli teams hand off work to US colleagues at end of day, and receive completed work by morning — effectively creating a <strong className={heading}>24-hour development cycle</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Hebrew Calendar */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Hebrew Calendar — Shabbat & DST Complexity</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Israel uses both the <strong className={heading}>Hebrew (lunisolar) calendar</strong> and the Gregorian calendar simultaneously. The Hebrew year is currently <strong className={heading}>5786–5787</strong>. Jewish holidays follow the Hebrew calendar, which means they fall on different Gregorian dates each year.
            </p>
            <p>
              <strong className={heading}>Shabbat</strong> (Saturday sabbath) begins at <strong className={heading}>sunset Friday</strong> and ends at nightfall Saturday. This sunset-based schedule means Shabbat start times shift throughout the year — from as early as <strong className={heading}>4:00 PM in December</strong> to as late as <strong className={heading}>7:45 PM in June</strong>.
            </p>
            <p>
              Israel&apos;s DST dates were historically tied to the Hebrew calendar and political negotiations between religious and secular parties. The <strong className={heading}>2013 reform</strong> standardized DST to roughly align with EU dates, ending decades of annual political battles over clock changes.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Work Week */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Israel&apos;s Unique Work Week</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Israel&apos;s work week runs <strong className={heading}>Sunday through Thursday</strong> (or Friday noon). The weekend is <strong className={heading}>Friday–Saturday</strong> (Shabbat). This means Israel&apos;s first business day is <strong className={heading}>Sunday</strong> — when most of the world is off.
            </p>
            <p>
              For global business, this creates a unique overlap: Israel works on <strong className={heading}>Sunday when the US/Europe is closed</strong>, and is off on <strong className={heading}>Friday afternoon/Saturday when the US works</strong>. The actual overlap window for US-Israel business is roughly <strong className={heading}>Monday–Thursday</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Israeli Cities — All on IST/IDT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tel Aviv', pop: '4.1M metro', note: 'Tech capital, "Silicon Wadi"' },
              { city: 'Jerusalem', pop: '1.3M metro', note: 'Capital, holy city' },
              { city: 'Haifa', pop: '1.1M metro', note: 'Northern hub, port, Technion' },
              { city: 'Be\'er Sheva', pop: '660K metro', note: 'Negev, cybersecurity hub' },
              { city: 'Eilat', pop: '55K', note: 'Red Sea resort, no VAT' },
              { city: 'Herzliya', pop: '100K', note: 'Startup corridor, VC hub' },
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
