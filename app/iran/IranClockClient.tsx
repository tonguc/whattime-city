'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IranClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Tehran', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Asia/Tehran' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Asia/Tehran' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Iran
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'IRDT · UTC+4:30' : 'IRST · UTC+3:30'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Half-Hour Offset</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Solar Hijri Calendar</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Iran Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Standard Time', value: 'IRST (UTC+3:30)' },
              { label: 'Daylight Saving', value: 'IRDT (UTC+4:30) — observed' },
              { label: 'DST Rule', value: 'Solar Hijri calendar-based (not fixed Gregorian)' },
              { label: 'IANA Identifier', value: 'Asia/Tehran' },
              { label: 'Population', value: '~88 million' },
              { label: 'Calendar', value: 'Solar Hijri (Jalali) — year ~1404' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iran vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Iran Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Iran&apos;s half-hour offset means it&apos;s always :30 minutes off from most countries.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Iran Standard (IRST)</th>
                  <th className="pb-2">Iran DST (IRDT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', irst: 'Iran +8:30', irdt: 'Iran +8:30' },
                  { zone: 'Los Angeles (PT)', irst: 'Iran +11:30', irdt: 'Iran +11:30' },
                  { zone: 'London (GMT/BST)', irst: 'Iran +3:30', irdt: 'Iran +3:30' },
                  { zone: 'Berlin (CET/CEST)', irst: 'Iran +2:30', irdt: 'Iran +2:30' },
                  { zone: 'India (IST)', irst: 'Iran −2:00', irdt: 'Iran −1:00' },
                  { zone: 'Dubai (GST)', irst: 'Iran −0:30', irdt: 'Iran +0:30' },
                  { zone: 'Japan (JST)', irst: 'Iran −5:30', irdt: 'Iran −4:30' },
                ].map(({ zone, irst, irdt }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{irst}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{irdt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Half-Hour Offset */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why UTC+3:30? Iran&apos;s Half-Hour Time Zone</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iran is one of only a handful of countries using a <strong className={heading}>half-hour offset</strong> (others include India at UTC+5:30, Afghanistan at UTC+4:30, and Nepal at UTC+5:45). Iran adopted UTC+3:30 in <strong className={heading}>1946</strong>.
            </p>
            <p>
              The offset was chosen because Tehran sits at roughly <strong className={heading}>51.4°E longitude</strong>, which corresponds to approximately <strong className={heading}>3 hours 26 minutes</strong> east of Greenwich — making +3:30 a very accurate geographic match. Rather than rounding to UTC+3 or UTC+4, Iran chose precision.
            </p>
            <p>
              This creates scheduling headaches for international businesses. When it&apos;s <strong className={heading}>9:00 AM in New York</strong>, it&apos;s <strong className={heading}>5:30 PM in Tehran</strong> — the :30 offset means Iran is always out of sync with round-hour time zones.
            </p>
          </div>
        </div>
      </section>

      {/* Solar Hijri Calendar */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Solar Hijri Calendar — Iran&apos;s Unique System</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iran uses the <strong className={heading}>Solar Hijri (Shamsi) calendar</strong>, which is fundamentally different from both the Gregorian and the Islamic (Lunar Hijri) calendar. The current year is approximately <strong className={heading}>1404 SH</strong>.
            </p>
            <p>
              Unlike the Lunar Hijri used in Saudi Arabia (which drifts ~11 days/year), Iran&apos;s Solar Hijri follows the <strong className={heading}>solar year precisely</strong> — its new year (<strong className={heading}>Nowruz</strong>) falls on the <strong className={heading}>spring equinox (March 20/21)</strong>, making it astronomically accurate.
            </p>
            <p>
              The first 6 months have <strong className={heading}>31 days</strong>, the next 5 have <strong className={heading}>30 days</strong>, and the last has 29 (30 in leap years). This mirrors the actual distribution of the Earth&apos;s orbital speed — the northern hemisphere summer months are astronomically longer.
            </p>
            <p>
              Iran&apos;s DST dates are tied to this calendar, not Gregorian dates — making them <strong className={heading}>particularly challenging for timezone database maintainers</strong> to predict years in advance.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Gregorian', value: '2026' },
                { label: 'Solar Hijri', value: '~1404–1405 SH' },
                { label: 'New Year (Nowruz)', value: 'March 20/21' },
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

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Iranian Cities — All on IRST/IRDT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tehran', pop: '16M metro', note: 'Capital, Alborz Mountains' },
              { city: 'Isfahan', pop: '2.2M metro', note: '"Half the World", Safavid capital' },
              { city: 'Mashhad', pop: '3.4M metro', note: 'Holy city, Imam Reza shrine' },
              { city: 'Shiraz', pop: '1.9M metro', note: 'Poetry capital, Persepolis' },
              { city: 'Tabriz', pop: '1.7M', note: 'Northwest hub, Azerbaijan border' },
              { city: 'Kish Island', pop: '40K', note: 'Free trade zone, Persian Gulf' },
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
