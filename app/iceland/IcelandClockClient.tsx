'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IcelandClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Atlantic/Reykjavik', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Atlantic/Reykjavik', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Iceland
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">GMT · UTC+0 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Reykjav&iacute;k</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Iceland Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'GMT / UTC+0 (permanent)' },
              { label: 'DST Status', value: 'Never observed — too extreme' },
              { label: 'Geographic Zone', value: 'Should be UTC-1 (15°W–24°W longitude)' },
              { label: 'IANA Identifier', value: 'Atlantic/Reykjavik' },
              { label: 'Population', value: '~380,000' },
              { label: 'Latitude', value: '63°N – 66°N (touches Arctic Circle)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iceland vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Iceland Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Iceland uses GMT year-round with no DST changes — the clock never moves. This makes it uniquely simple for scheduling.
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
                  { zone: 'New York (ET)', winter: 'Iceland +5 hrs', summer: 'Iceland +4 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Iceland +8 hrs', summer: 'Iceland +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Same time!', summer: 'Iceland +1 hr behind' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Iceland −1 hr', summer: 'Iceland −2 hrs' },
                  { zone: 'India (IST)', winter: 'Iceland −5:30', summer: 'Iceland −5:30' },
                  { zone: 'Greenland (Nuuk)', winter: 'Iceland +2 hrs', summer: 'Iceland +1 hr' },
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

      {/* Wrong Timezone */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Is Iceland on GMT Instead of UTC-1?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iceland sits between <strong className={heading}>13°W and 24°W longitude</strong> — geographically it belongs in the <strong className={heading}>UTC-1 or even UTC-2 zone</strong>. Reykjav&iacute;k (21.9°W) is further west than most of <strong className={heading}>West Africa</strong>.
            </p>
            <p>
              Iceland adopted GMT in <strong className={heading}>1968</strong> to align with European trading partners, particularly the <strong className={heading}>UK</strong> (its largest trade partner at the time). Before that, Iceland used UTC-1. The shift was controversial — it means Iceland&apos;s solar noon is around <strong className={heading}>1:30 PM</strong> in Reykjav&iacute;k and even later in western Iceland.
            </p>
            <p>
              Iceland also <strong className={heading}>never uses DST</strong>. The reasoning: at 64-66°N, summer daylight is already <strong className={heading}>~21-24 hours</strong>, so pushing clocks forward would make sunset absurdly late. And in winter with only <strong className={heading}>4-5 hours of daylight</strong>, DST wouldn&apos;t help either.
            </p>
          </div>
        </div>
      </section>

      {/* Extreme Daylight */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Midnight Sun & Sk&oacute;gamm — Iceland&apos;s Extreme Light</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iceland touches the <strong className={heading}>Arctic Circle</strong> at Gr&iacute;msey island (66.5°N). Even Reykjav&iacute;k (64°N) gets <strong className={heading}>near-midnight sun</strong> — the sun barely dips below the horizon in June, creating a twilight that never becomes true darkness.
            </p>
            <p>
              In winter, the reverse: Reykjav&iacute;k gets only <strong className={heading}>~4-5 hours of daylight</strong> in December. Icelanders call the dark period <strong className={heading}>&ldquo;sk&oacute;gamm&rdquo;</strong> (shadow-darkness). To cope, Icelanders are <strong className={heading}>among the world&apos;s highest consumers of antidepressants and Vitamin D</strong> — and also some of the most prolific readers, writers, and hot tub enthusiasts per capita.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-2 gap-4 text-center text-xs">
              {[
                { label: 'Jun 21 (Reykjav\u00edk)', value: '~21 hrs daylight', note: 'Never truly dark' },
                { label: 'Dec 21 (Reykjav\u00edk)', value: '~4 hrs daylight', note: 'Sunrise ~11:20 AM, Sunset ~3:30 PM' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`}>{z.value}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geothermal Power */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>100% Renewable Energy & Data Center Boom</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iceland runs on <strong className={heading}>100% renewable electricity</strong> — ~70% geothermal, ~30% hydroelectric. This cheap, clean energy has attracted <strong className={heading}>data centers and crypto mining operations</strong>. Combined with naturally cold air for cooling, Iceland is one of the most energy-efficient places to run servers.
            </p>
            <p>
              Its <strong className={heading}>GMT timezone</strong> and position between Europe and North America make it a natural <strong className={heading}>submarine cable landing point</strong>. The <strong className={heading}>DANICE and FARICE cables</strong> connect Iceland to both continents, with latency comparable to other European data center locations.
            </p>
          </div>
        </div>
      </section>

      {/* Major Locations */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Key Iceland Locations — All on GMT (UTC+0)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Reykjav\u00edk', pop: '230K metro', note: 'Capital, world\'s northernmost capital' },
              { city: 'Akureyri', pop: '19K', note: 'Northern capital, 65°N, midnight sun' },
              { city: 'Keflavík', pop: '19K', note: 'International airport, NATO base' },
              { city: 'Ísafjörður', pop: '2.6K', note: 'Westfjords, extreme isolation' },
              { city: 'Grímsey', pop: '60', note: 'Arctic Circle island, 66.5°N' },
              { city: 'Vík', pop: '750', note: 'Southernmost village, black sand beaches' },
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
