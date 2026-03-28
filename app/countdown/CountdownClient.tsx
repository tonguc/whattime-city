'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

/* ───── helpers ───── */

function getTimeRemaining(target: Date) {
  const now = Date.now()
  const diff = target.getTime() - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0, past: true }

  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds, total: diff, past: false }
}

function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
}

/* ───── preset events ───── */

function getPresets() {
  const now = new Date()
  const year = now.getFullYear()
  const nextYear = year + 1

  // Helper: if date has passed this year, use next year
  const upcoming = (month: number, day: number, label: string, yearOverride?: number) => {
    const y = yearOverride ?? year
    const d = new Date(y, month - 1, day, 0, 0, 0)
    if (d.getTime() <= now.getTime() && !yearOverride) {
      return { label: `${label} ${nextYear}`, date: new Date(nextYear, month - 1, day, 0, 0, 0) }
    }
    return { label: `${label} ${y}`, date: d }
  }

  return [
    upcoming(1, 1, 'New Year', nextYear),
    upcoming(12, 25, 'Christmas'),
    upcoming(10, 31, 'Halloween'),
    upcoming(2, 14, "Valentine's Day"),
    upcoming(7, 4, 'Independence Day (US)'),
    upcoming(3, 17, "St. Patrick's Day"),
    upcoming(11, 27, 'Thanksgiving (US)'),
    upcoming(12, 31, "New Year's Eve"),
  ]
}

const faqItems = [
  { q: 'How many days until New Year 2027?', a: 'Select "New Year 2027" from the presets or enter January 1, 2027 as the target date. The timer shows exact days, hours, minutes, and seconds remaining in real time.' },
  { q: 'How do I create a countdown to a specific date?', a: 'Click "Custom Date", enter your target date and optionally a time and title. The countdown starts immediately and updates every second.' },
  { q: 'How many days until Christmas 2026?', a: 'Select "Christmas 2026" from the presets to see the exact countdown to December 25, 2026.' },
  { q: 'Can I count down to a specific time?', a: 'Yes. In custom mode, set both a date and a specific hour/minute. Useful for meeting countdowns, product launches, or events at a precise time.' },
  { q: 'How many hours are left in this year?', a: 'Select "New Year" from the presets. The countdown shows hours, minutes, and seconds remaining until January 1 of next year.' },
]

/* ───── component ───── */

export default function CountdownClient() {
  const { isLight } = useCityContext()

  const presets = useMemo(() => getPresets(), [])
  const [target, setTarget] = useState<Date>(presets[0].date)
  const [eventLabel, setEventLabel] = useState(presets[0].label)
  const [customDate, setCustomDate] = useState('')
  const [customTime, setCustomTime] = useState('00:00')
  const [customTitle, setCustomTitle] = useState('')
  const [mode, setMode] = useState<'presets' | 'custom'>('presets')
  const [remaining, setRemaining] = useState(getTimeRemaining(target))
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getTimeRemaining(target))
    }, 1000)
    return () => clearInterval(interval)
  }, [target])

  const selectPreset = useCallback((preset: { label: string; date: Date }) => {
    setTarget(preset.date)
    setEventLabel(preset.label)
    setMode('presets')
  }, [])

  const applyCustom = useCallback(() => {
    if (!customDate) return
    const [h, m] = customTime.split(':').map(Number)
    const [y, mo, d] = customDate.split('-').map(Number)
    const date = new Date(y, mo - 1, d, h || 0, m || 0, 0)
    setTarget(date)
    setEventLabel(customTitle || `${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`)
  }, [customDate, customTime, customTitle])

  /* ───── styles ───── */
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white' : 'rounded-2xl border border-slate-700 bg-slate-800'
  const nestedCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50' : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const accent = isLight ? 'text-violet-600' : 'text-violet-400'
  const accentBg = isLight ? 'bg-violet-50 border-violet-200' : 'bg-violet-900/30 border-violet-700/50'
  const inputClass = isLight
    ? 'bg-white border border-slate-200 text-slate-800 focus:ring-2 focus:ring-violet-500'
    : 'bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-violet-400'
  const btnActive = isLight ? 'bg-violet-600 text-white' : 'bg-violet-500 text-white'
  const btnInactive = isLight ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
  const presetBtn = isLight
    ? 'border border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
    : 'border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200'
  const presetBtnActive = isLight
    ? 'border border-violet-300 bg-violet-50 text-violet-700'
    : 'border border-violet-600 bg-violet-900/40 text-violet-300'

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Countdown Timer</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          Countdown Timer
        </h1>
        <p className={`text-lg ${subText}`}>
          Count down to <strong>New Year, holidays, birthdays</strong>, or any custom date.
        </p>
      </header>

      {/* ───── Countdown Display ───── */}
      <section className={`${card} p-6 sm:p-8 space-y-6`}>
        {/* Event label */}
        <div className="text-center">
          <p className={`text-sm font-medium ${mutedText}`}>Counting down to</p>
          <p className={`text-xl font-bold ${heading} mt-1`}>{eventLabel}</p>
        </div>

        {/* Big countdown */}
        {remaining.past ? (
          <div className={`text-center p-8 rounded-xl border ${accentBg}`}>
            <p className={`text-3xl font-bold ${accent}`}>Event has passed!</p>
            <p className={`text-sm ${mutedText} mt-2`}>Select a new date or preset above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {[
              { value: remaining.days, label: 'Days' },
              { value: remaining.hours, label: 'Hours' },
              { value: remaining.minutes, label: 'Minutes' },
              { value: remaining.seconds, label: 'Seconds' },
            ].map(item => (
              <div key={item.label} className={`rounded-xl border ${accentBg} p-4 sm:p-6 text-center`}>
                <p
                  className={`text-3xl sm:text-5xl font-bold ${accent}`}
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {item.value.toString().padStart(2, '0')}
                </p>
                <p className={`text-xs sm:text-sm ${mutedText} mt-1`}>{item.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Total summary */}
        {!remaining.past && (
          <p className={`text-center text-sm ${mutedText}`}>
            {remaining.days.toLocaleString()} days, {remaining.hours} hours, {remaining.minutes} minutes, {remaining.seconds} seconds remaining
          </p>
        )}
      </section>

      {/* ───── Mode Toggle + Selection ───── */}
      <section className={`${card} p-6 space-y-4`}>
        {/* Toggle */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setMode('presets')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'presets' ? btnActive : btnInactive}`}
          >
            Popular Events
          </button>
          <button
            onClick={() => setMode('custom')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'custom' ? btnActive : btnInactive}`}
          >
            Custom Date
          </button>
        </div>

        {mode === 'presets' ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {presets.map(p => (
              <button
                key={p.label}
                onClick={() => selectPreset(p)}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  eventLabel === p.label ? presetBtnActive : presetBtn
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className={`block text-xs font-medium mb-1 ${mutedText}`}>Date</label>
                <input
                  type="date"
                  value={customDate || toDateStr(new Date())}
                  onChange={e => setCustomDate(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg outline-none text-sm ${inputClass}`}
                />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1 ${mutedText}`}>Time (optional)</label>
                <input
                  type="time"
                  value={customTime}
                  onChange={e => setCustomTime(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg outline-none text-sm ${inputClass}`}
                />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1 ${mutedText}`}>Event name (optional)</label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={e => setCustomTitle(e.target.value)}
                  placeholder="e.g. My Birthday"
                  className={`w-full px-3 py-2.5 rounded-lg outline-none text-sm ${inputClass}`}
                />
              </div>
            </div>
            <button
              onClick={applyCustom}
              className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${btnActive}`}
            >
              Start Countdown
            </button>
          </div>
        )}
      </section>

      {/* ───── Popular Countdowns Table ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Upcoming Events</h2>
        <div className="space-y-2">
          {presets.map(p => {
            const r = getTimeRemaining(p.date)
            return (
              <button
                key={p.label}
                onClick={() => selectPreset(p)}
                className={`w-full flex items-center justify-between ${nestedCard} p-3 hover:scale-[1.01] transition-transform`}
              >
                <span className={`font-medium text-sm ${heading}`}>{p.label}</span>
                <span className={`text-sm ${mutedText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {r.past ? 'Passed' : `${r.days}d ${r.hours}h ${r.minutes}m`}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ───── Use Cases ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Popular Countdown Uses</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Holidays & New Year', desc: 'Count down to Christmas, New Year\'s Eve, Halloween, Valentine\'s Day, and other holidays around the world.' },
            { title: 'Personal Events', desc: 'Birthdays, anniversaries, weddings, graduations, baby due dates, and retirement dates.' },
            { title: 'Work & Deadlines', desc: 'Project deadlines, product launches, contract end dates, quarterly reviews, and fiscal year milestones.' },
            { title: 'Travel & Events', desc: 'Vacation departures, concert dates, sports events, conference dates, and flight times.' },
          ].map(item => (
            <div key={item.title} className={`${nestedCard} p-4`}>
              <h3 className={`font-semibold ${heading} mb-1`}>{item.title}</h3>
              <p className={`text-sm ${subText}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className={`${nestedCard} overflow-hidden`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`w-full flex items-center justify-between p-4 text-left font-medium ${heading}`}
              >
                <span>{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''} ${mutedText}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className={`px-4 pb-4 text-sm ${subText}`}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ───── Related Tools ───── */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/days-from-today/', label: 'Days From Today' },
            { href: '/date-calculator/', label: 'Date Calculator' },
            { href: '/time-converter/', label: 'Time Converter' },
            { href: '/meeting/', label: 'Meeting Planner' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${nestedCard} p-3 text-center text-sm font-medium ${heading} hover:scale-[1.02] transition-transform`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <p className={`text-center text-xs ${mutedText}`}>
        Countdown is based on your device&apos;s local time. All calculations use the Gregorian calendar.
      </p>
    </div>
  )
}
