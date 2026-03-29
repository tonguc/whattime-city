'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function KentuckyClockClient() {
  const { isLight } = useCityContext()
  const [timeET, setTimeET] = useState('--:--:--')
  const [timeCT, setTimeCT] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeET(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeCT(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/New_York' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/New_York' })
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
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Kentucky</div>
          <div className="flex justify-center gap-6 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeET : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">{isDST ? 'EDT · UTC-4' : 'EST · UTC-5'} — Eastern</div>
            </div>
            <div className="border-l border-white/30" />
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">{isDST ? 'CDT · UTC-5' : 'CST · UTC-6'} — Central</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">ET + CT Split</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Bluegrass State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kentucky Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zones', value: 'ET (most of state) + CT (western counties)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifiers', value: 'America/New_York + America/Chicago' },
              { label: 'Population', value: '~4.5 million — 26th largest state' },
              { label: 'Capital', value: 'Frankfort — Eastern Time zone' },
              { label: 'Famous For', value: 'Bourbon, Derby, Fort Knox gold' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bourbon, the Derby &amp; Fort Knox — Kentucky Across Two Time Zones</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Kentucky Derby</strong> at <strong className={heading}>Churchill Downs</strong> in Louisville is the most famous <span style={{ fontVariantNumeric: 'tabular-nums' }}>2</span> minutes in sports. Post time for the main race is traditionally around <span style={{ fontVariantNumeric: 'tabular-nums' }}>6:57 PM ET</span> on the first Saturday in May — that&apos;s <span style={{ fontVariantNumeric: 'tabular-nums' }}>5:57 PM CT</span> for fans in western Kentucky. The Derby has run every year since <span style={{ fontVariantNumeric: 'tabular-nums' }}>1875</span>, making it the longest continuously held sporting event in the U.S.
            </p>
            <p>
              Kentucky produces <span style={{ fontVariantNumeric: 'tabular-nums' }}>95%</span> of the world&apos;s <strong className={heading}>bourbon whiskey</strong>. The <strong className={heading}>Bourbon Trail</strong> stretches across the Bluegrass region with distilleries like Maker&apos;s Mark, Woodford Reserve, and Buffalo Trace — all on <strong className={heading}>Eastern Time</strong>. Bourbon must age a minimum of <span style={{ fontVariantNumeric: 'tabular-nums' }}>2</span> years in new charred oak barrels, and there are more barrels of bourbon aging in Kentucky than there are people living in the state.
            </p>
            <p>
              <strong className={heading}>Fort Knox</strong>, near Louisville, holds roughly <span style={{ fontVariantNumeric: 'tabular-nums' }}>4,580</span> tons of gold bullion — about half of the U.S. Treasury&apos;s gold reserves. The vault operates on <strong className={heading}>Eastern Time</strong>. Kentucky&apos;s time zone split runs roughly along a north-south line: <strong className={heading}>Louisville, Lexington, and Covington</strong> are on ET, while <strong className={heading}>Bowling Green, Owensboro, and Paducah</strong> observe CT — a <span style={{ fontVariantNumeric: 'tabular-nums' }}>1</span>-hour difference that affects everything from TV schedules to business calls.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Kentucky Cities — ET &amp; CT Split</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Louisville', pop: '633K', note: 'Largest city, Derby, ET zone' },
              { city: 'Lexington', pop: '322K', note: 'Horse capital, UK Wildcats, ET' },
              { city: 'Bowling Green', pop: '78K', note: 'Corvette Museum, CT zone' },
              { city: 'Owensboro', pop: '61K', note: 'BBQ capital of KY, CT zone' },
              { city: 'Covington', pop: '41K', note: 'Cincinnati metro, ET zone' },
              { city: 'Paducah', pop: '27K', note: 'UNESCO Creative City, CT zone' },
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
