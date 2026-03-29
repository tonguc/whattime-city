'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AlabamaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Chicago' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Chicago' })
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Alabama</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">{isDST ? 'CDT · UTC-5' : 'CST · UTC-6'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Central Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Heart of Dixie</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Alabama Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~5 million — 24th largest state' },
              { label: 'Capital', value: 'Montgomery — cradle of civil rights' },
              { label: 'Famous For', value: 'NASA, college football, civil rights' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Rockets, Rivalries &amp; Civil Rights — Alabama on Central Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Huntsville</strong>, known as <strong className={heading}>Rocket City</strong>, is home to <strong className={heading}>NASA&apos;s Marshall Space Flight Center</strong> — where the Saturn V rocket was developed. Today the city is one of America&apos;s fastest-growing tech hubs, with defense contractors and aerospace firms scheduling launches and meetings on <strong className={heading}>Central Time</strong>. Redstone Arsenal, adjacent to Marshall, employs over <span style={{ fontVariantNumeric: 'tabular-nums' }}>44,000</span> people.
            </p>
            <p>
              Every fall, the state divides along one line: <strong className={heading}>Auburn vs. Alabama</strong>. The Iron Bowl rivalry is the biggest event on Alabama&apos;s calendar. Game day kickoffs — typically <strong className={heading}>2:30 PM or 7:00 PM CT</strong> — bring the entire state to a standstill. Bryant-Denny Stadium in Tuscaloosa holds over <span style={{ fontVariantNumeric: 'tabular-nums' }}>100,000</span> fans.
            </p>
            <p>
              <strong className={heading}>Birmingham</strong> played a pivotal role in the <strong className={heading}>American civil rights movement</strong>. The 16th Street Baptist Church bombing, the Birmingham Campaign of 1963, and the marches from Selma to Montgomery are foundational moments in U.S. history. Alabama is also a growing automotive powerhouse — <strong className={heading}>Mercedes-Benz</strong> and <strong className={heading}>Hyundai</strong> operate major assembly plants here, with shifts running around the clock on CT.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Alabama Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Birmingham', pop: '196K', note: 'Largest city, civil rights history' },
              { city: 'Huntsville', pop: '220K', note: 'Rocket City, NASA Marshall center' },
              { city: 'Montgomery', pop: '200K', note: 'State capital, Rosa Parks legacy' },
              { city: 'Mobile', pop: '187K', note: 'Port city, original Mardi Gras' },
              { city: 'Tuscaloosa', pop: '100K', note: 'Univ. of Alabama, Roll Tide' },
              { city: 'Auburn', pop: '78K', note: 'Auburn University, War Eagle' },
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
