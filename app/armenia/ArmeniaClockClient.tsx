'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ArmeniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Yerevan', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Yerevan', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Armenia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">AMT · UTC+4 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2012</span>
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/30">Yerevan</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Armenia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AMT — Armenia Time (UTC+4)' },
              { label: 'DST Status', value: 'Abolished in 2012' },
              { label: 'IANA Identifier', value: 'Asia/Yerevan' },
              { label: 'Population', value: '~2.8 million (10M+ diaspora!)' },
              { label: 'Same TZ As', value: 'Dubai, Baku, Tbilisi' },
              { label: 'Famous For', value: 'First Christian nation, brandy, tech, chess' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Armenia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Armenia Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'AM +9 hrs', summer: 'AM +8 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'AM +12 hrs', summer: 'AM +11 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'AM +4 hrs', summer: 'AM +3 hrs' },
                  { zone: 'Moscow (MSK)', winter: 'AM +1 hr', summer: 'AM +1 hr' },
                  { zone: 'Georgia (GET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Iran (IRST)', winter: 'AM +0:30', summer: 'AM −0:30' },
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

      {/* First Christian Nation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s First Christian Nation — Since 301 AD</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Armenia became the <strong className={heading}>world&apos;s first nation to adopt Christianity as its state religion</strong> in <strong className={heading}>301 AD</strong> — 12 years before the Roman Empire. The <strong className={heading}>Armenian Apostolic Church</strong> is one of the oldest Christian institutions, and Armenia&apos;s unique <strong className={heading}>alphabet</strong> (created in 405 AD by Mesrop Mashtots) was designed specifically to translate the Bible.
            </p>
            <p>
              The Armenian calendar has its own numbering: Armenia is in the <strong className={heading}>Armenian year ~1475</strong>. The view of <strong className={heading}>Mount Ararat</strong> (now in Turkey) from Yerevan is central to Armenian identity — Noah&apos;s Ark is said to have landed on its summit. The mountain appears on Armenia&apos;s coat of arms despite being across the border.
            </p>
          </div>
        </div>
      </section>

      {/* Diaspora & Tech */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The 10 Million Diaspora & Armenia&apos;s Tech Renaissance</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Armenia&apos;s <strong className={heading}>diaspora (~10 million)</strong> is more than <strong className={heading}>3 times its home population (~2.8 million)</strong>. Major Armenian communities: <strong className={heading}>Los Angeles (300K+, &ldquo;Little Armenia&rdquo;), Moscow, Paris, Beirut, Buenos Aires, and Sydney</strong>. Diaspora Armenians span nearly every timezone.
            </p>
            <p>
              Armenia&apos;s tech sector is booming: <strong className={heading}>TUMO Center for Creative Technologies</strong> (Yerevan) is a free after-school program that&apos;s been replicated globally. <strong className={heading}>PicsArt</strong> (photo editing app, 150M+ monthly users) was founded in Yerevan. Armenia produces more <strong className={heading}>chess grandmasters per capita</strong> than any other country — chess is a <strong className={heading}>mandatory school subject</strong>.
            </p>
            <p>
              The UTC+4 timezone gives Armenian tech teams <strong className={heading}>overlap with both European mornings and US East Coast afternoons</strong> — similar to Georgia&apos;s advantage. Yerevan is increasingly popular with <strong className={heading}>Russian and post-Soviet tech workers</strong> relocating since 2022.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Armenian Cities — All on AMT (UTC+4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Yerevan', pop: '1.1M', note: 'Capital, pink tuff stone, Ararat view' },
              { city: 'Gyumri', pop: '120K', note: '2nd city, cultural capital, crafts' },
              { city: 'Vanadzor', pop: '80K', note: '3rd city, industrial, northern hub' },
              { city: 'Vagharshapat', pop: '55K', note: 'Echmiadzin, spiritual center since 301 AD' },
              { city: 'Dilijan', pop: '20K', note: '"Armenian Switzerland", TUMO, nature' },
              { city: 'Jermuk', pop: '6K', note: 'Mineral springs, spa town, brandy region' },
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
