'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function OklahomaClockClient() {
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Oklahoma</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">{isDST ? 'CDT · UTC-5' : 'CST · UTC-6'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Central Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Sooner State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Oklahoma Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~4 million — 28th largest state' },
              { label: 'Capital', value: 'Oklahoma City — heart of the plains' },
              { label: 'Famous For', value: 'Oil, tornadoes, tribal heritage' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Oil, Thunder &amp; Tornado Alley — Oklahoma on Central Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Oklahoma sits at the heart of <strong className={heading}>Tornado Alley</strong>, and severe weather season from April through June keeps the state on high alert. The National Weather Center in <strong className={heading}>Norman</strong> — home to NOAA&apos;s Storm Prediction Center — issues tornado watches and warnings timestamped in <strong className={heading}>Central Time</strong>. Oklahoma averages <span style={{ fontVariantNumeric: 'tabular-nums' }}>56</span> tornadoes per year, with peak activity between <span style={{ fontVariantNumeric: 'tabular-nums' }}>4:00 PM</span> and <span style={{ fontVariantNumeric: 'tabular-nums' }}>9:00 PM CT</span>.
            </p>
            <p>
              The <strong className={heading}>oil and gas industry</strong> has shaped Oklahoma since the Tulsa oil boom of the early <span style={{ fontVariantNumeric: 'tabular-nums' }}>1900</span>s. Today, <strong className={heading}>Tulsa</strong> is experiencing a renaissance — the Gathering Place park, a revitalized Arts District, and tech startup incentives like Tulsa Remote have drawn thousands of new residents. Oklahoma City&apos;s <strong className={heading}>Thunder NBA</strong> team tips off home games at <strong className={heading}>Paycom Center</strong>, typically at <span style={{ fontVariantNumeric: 'tabular-nums' }}>7:00 PM CT</span>.
            </p>
            <p>
              Oklahoma is home to <span style={{ fontVariantNumeric: 'tabular-nums' }}>39</span> <strong className={heading}>tribal nations</strong>, more than any other state. The <strong className={heading}>Cherokee, Chickasaw, Choctaw, Creek, and Seminole</strong> nations have their headquarters here, and tribal governance, casinos, and cultural events operate on Central Time. The word &quot;Oklahoma&quot; itself comes from the Choctaw words <em>okla</em> (people) and <em>humma</em> (red) — literally &quot;red people.&quot;
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Oklahoma Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Oklahoma City', pop: '681K', note: 'State capital, Thunder NBA' },
              { city: 'Tulsa', pop: '413K', note: 'Oil capital, tech renaissance' },
              { city: 'Norman', pop: '128K', note: 'OU Sooners, weather center' },
              { city: 'Broken Arrow', pop: '116K', note: 'Tulsa suburb, fastest-growing' },
              { city: 'Edmond', pop: '97K', note: 'OKC suburb, UCO university' },
              { city: 'Lawton', pop: '90K', note: 'Fort Sill, SW Oklahoma hub' },
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
