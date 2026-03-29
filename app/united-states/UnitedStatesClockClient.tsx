'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const ZONES = [
  { label: 'Eastern', short: 'ET', tz: 'America/New_York' },
  { label: 'Central', short: 'CT', tz: 'America/Chicago' },
  { label: 'Mountain', short: 'MT', tz: 'America/Denver' },
  { label: 'Pacific', short: 'PT', tz: 'America/Los_Angeles' },
] as const

export default function UnitedStatesClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState<string[]>(['--:--', '--:--', '--:--', '--:--'])
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimes(ZONES.map(z => now.toLocaleTimeString('en-US', { timeZone: z.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50 p-4' : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">Current Time in the United States</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            {ZONES.map((z, i) => (
              <div key={z.short} className="rounded-xl bg-white/15 p-3">
                <div className="text-xs font-semibold uppercase tracking-wide opacity-80 mb-1">{z.label}</div>
                <div className="text-2xl sm:text-3xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {mounted ? times[i] : '--:--'}
                </div>
                <div className="text-xs opacity-70 mt-0.5">{z.short}</div>
              </div>
            ))}
          </div>
          <div className="text-sm opacity-80 mb-2">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">6 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">DST (except AZ &amp; HI)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~335 Million</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>US Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Total Zones', value: '6 (ET, CT, MT, PT, AKT, HST)' },
              { label: 'Span', value: '6 hours from East to Hawaii' },
              { label: 'Daylight Saving', value: 'Mar&ndash;Nov (most states)' },
              { label: 'No DST States', value: 'Arizona &amp; Hawaii' },
              { label: 'Most Populated TZ', value: 'Eastern Time (~50% of US)' },
              { label: 'Population', value: '~335 million (2024 est.)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`} dangerouslySetInnerHTML={{ __html: value }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>50 States Spanning 6 Hours</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The contiguous United States covers <strong className={heading}>four main time zones</strong> &mdash; Eastern, Central, Mountain, and Pacific &mdash; while Alaska and Hawaii add two more. This <strong className={heading}>6-hour span</strong> means when New Yorkers sit down for dinner at 6 PM, it&apos;s only noon in Honolulu.
            </p>
            <p>
              <strong className={heading}>Daylight Saving Time</strong> is observed from the second Sunday in March through the first Sunday in November in most states. Arizona (except the Navajo Nation) and Hawaii permanently stay on standard time. The <strong className={heading}>Sunshine Protection Act</strong> has been proposed multiple times to make DST permanent nationwide.
            </p>
            <p>
              As the <strong className={heading}>world&apos;s largest economy</strong>, US time zones drive global business rhythms. Wall Street&apos;s opening bell at 9:30 AM ET sets the pace for financial markets worldwide, while Silicon Valley operates 3 hours behind on Pacific Time &mdash; creating a <strong className={heading}>coast-to-coast work corridor</strong> that extends the American business day.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Cities by Time Zone</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'New York', pop: '8.3M', note: 'Eastern Time (UTC-5/-4)' },
              { city: 'Chicago', pop: '2.7M', note: 'Central Time (UTC-6/-5)' },
              { city: 'Denver', pop: '713K', note: 'Mountain Time (UTC-7/-6)' },
              { city: 'Los Angeles', pop: '3.9M', note: 'Pacific Time (UTC-8/-7)' },
              { city: 'Anchorage', pop: '291K', note: 'Alaska Time (UTC-9/-8)' },
              { city: 'Honolulu', pop: '350K', note: 'Hawaii Time (UTC-10, no DST)' },
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
