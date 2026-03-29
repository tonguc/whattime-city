'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function FinlandClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Helsinki', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Helsinki', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Finland
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'EEST · UTC+3' : 'EET · UTC+2'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Midnight Sun & Polar Night</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Helsinki</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Finland Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Helsinki' },
              { label: 'Population', value: '~5.6 million' },
              { label: 'Latitude Range', value: '60°N – 70°N (extreme daylight variation)' },
              { label: 'Famous For', value: 'Happiest country, saunas, Nokia, Linux' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finland vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Finland Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Finland is on EET/EEST — one hour ahead of Central Europe, same as the Baltic states and Eastern Europe.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">FI Winter (EET)</th>
                  <th className="pb-2">FI Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'FI +7 hrs', summer: 'FI +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'FI +10 hrs', summer: 'FI +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'FI +2 hrs', summer: 'FI +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'FI +1 hr', summer: 'FI +1 hr' },
                  { zone: 'India (IST)', winter: 'FI −3:30', summer: 'FI −2:30' },
                  { zone: 'Estonia (EET/EEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Extreme Daylight */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Midnight Sun & Kaamos — Finland&apos;s Extreme Light Cycle</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Finland is one of the <strong className={heading}>world&apos;s northernmost countries</strong> — one-third lies above the <strong className={heading}>Arctic Circle</strong>. This creates the most extreme daylight variation in the EU.
            </p>
            <p>
              In <strong className={heading}>Utsjoki</strong> (Finland&apos;s northernmost municipality, 70°N), the sun doesn&apos;t set for <strong className={heading}>73 consecutive days</strong> in summer. In winter, it doesn&apos;t rise for <strong className={heading}>51 days</strong> — a period Finns call <strong className={heading}>&ldquo;kaamos&rdquo;</strong> (polar night). Even Helsinki gets only <strong className={heading}>~6 hours of daylight</strong> in December.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">City</th>
                  <th className="pb-2 pr-4">Midsummer (Jun 21)</th>
                  <th className="pb-2">Midwinter (Dec 21)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { city: 'Helsinki (60°N)', summer: '~19 hrs daylight', winter: '~5.5 hrs daylight' },
                  { city: 'Oulu (65°N)', summer: '~24 hrs (near midnight sun)', winter: '~3 hrs daylight' },
                  { city: 'Utsjoki (70°N)', summer: '73 days continuous sun', winter: '51 days polar night' },
                ].map(({ city, summer, winter }) => (
                  <tr key={city}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{city}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{summer}</td>
                    <td className={`py-2 ${subText}`}>{winter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sauna Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Sauna Nation — 3.3 Million Saunas for 5.6 Million People</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Finland has <strong className={heading}>3.3 million saunas</strong> for a population of <strong className={heading}>5.6 million</strong> — nearly one sauna per household. The Finnish Parliament building has a sauna. So do McDonald&apos;s locations, Burger Kings, and even a Ferris wheel gondola in Helsinki.
            </p>
            <p>
              The traditional Finnish sauna ritual is <strong className={heading}>deeply tied to time</strong>: the ideal sauna session is <strong className={heading}>Saturday evening</strong> (the word <em>lauantai</em> comes from &ldquo;washing day&rdquo;). Business saunas are common — many Finnish deals are closed in the sauna, not the boardroom. If a Finnish colleague invites you to sauna, it&apos;s a sign of <strong className={heading}>trust and respect</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Finland: Where Linux, Nokia & Supercell Were Born</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Linus Torvalds</strong> created Linux in his Helsinki dorm room in <strong className={heading}>1991</strong>. <strong className={heading}>Nokia</strong> — once the world&apos;s largest phone maker — is headquartered in Espoo. <strong className={heading}>Supercell</strong> (Clash of Clans, $10B valuation) and <strong className={heading}>Rovio</strong> (Angry Birds) are Finnish gaming powerhouses.
            </p>
            <p>
              Finland&apos;s EET timezone gives a <strong className={heading}>1-hour lead over Central Europe</strong> and a meaningful overlap with both <strong className={heading}>Asian markets</strong> (afternoon) and <strong className={heading}>US East Coast</strong> (late afternoon). The country has been ranked the <strong className={heading}>happiest in the world</strong> for 7 consecutive years — a major talent attractor for the tech sector.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Finnish Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Helsinki', pop: '1.3M metro', note: 'Capital, design district, tech hub' },
              { city: 'Espoo', pop: '300K', note: 'Nokia HQ, Aalto University' },
              { city: 'Tampere', pop: '250K', note: 'Industrial heart, "sauna capital"' },
              { city: 'Turku', pop: '200K', note: 'Former capital, oldest city' },
              { city: 'Oulu', pop: '210K', note: 'Arctic tech hub, 5G R&D center' },
              { city: 'Rovaniemi', pop: '65K', note: 'Arctic Circle, Santa Claus Village' },
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
