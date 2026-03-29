'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function EcuadorClockClient() {
  const { isLight } = useCityContext()
  const [timeMainland, setTimeMainland] = useState('--:--:--')
  const [timeGalapagos, setTimeGalapagos] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeMainland(now.toLocaleTimeString('en-US', { timeZone: 'America/Guayaquil', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeGalapagos(now.toLocaleTimeString('en-US', { timeZone: 'Pacific/Galapagos', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Guayaquil', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      {/* Live Clocks */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Ecuador
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? timeMainland : '--:--:--'}
              </div>
              <div className="text-xs opacity-70 mt-1">Mainland · ECT · UTC-5</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? timeGalapagos : '--:--:--'}
              </div>
              <div className="text-xs opacity-70 mt-1">Gal&aacute;pagos · GALT · UTC-6</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mt-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap mt-3">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Equatorial</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Named After the Equator</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Ecuador Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Mainland Time', value: 'ECT — Ecuador Time (UTC-5)' },
              { label: 'Gal\u00e1pagos Time', value: 'GALT (UTC-6) — 1 hour behind' },
              { label: 'DST Status', value: 'Never — equator = consistent daylight' },
              { label: 'IANA Identifiers', value: 'America/Guayaquil, Pacific/Galapagos' },
              { label: 'Population', value: '~18 million' },
              { label: 'Name Origin', value: 'Spanish for "equator" — it literally is!' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecuador vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ecuador Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Ecuador&apos;s mainland matches US Eastern Standard Time (EST) year-round. But when the US shifts to EDT in summer, Ecuador falls 1 hour behind.
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
                  { zone: 'New York (ET)', winter: 'Same time!', summer: 'EC −1 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'EC +3 hrs', summer: 'EC +2 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'EC −5 hrs', summer: 'EC −6 hrs' },
                  { zone: 'Colombia (COT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Peru (PET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Gal\u00e1pagos (GALT)', winter: 'EC +1 hr', summer: 'EC +1 hr' },
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

      {/* Equator */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Country Named After the Equator — Where Time Stands Still</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ecuador is literally named after the <strong className={heading}>equator (la l&iacute;nea ecuatorial)</strong> which crosses the country just north of Quito. At the <strong className={heading}>Mitad del Mundo</strong> (Middle of the World) monument, you can stand with one foot in each hemisphere.
            </p>
            <p>
              Being on the equator means <strong className={heading}>~12 hours of daylight every single day</strong>, year-round. Sunrise is always around <strong className={heading}>6:00-6:15 AM</strong>, sunset around <strong className={heading}>6:15-6:30 PM</strong>. There&apos;s virtually no twilight — the sun drops below the horizon and <strong className={heading}>darkness comes within 20 minutes</strong>. This consistency is why Ecuador has never needed DST.
            </p>
            <p>
              Quito, at <strong className={heading}>2,850m altitude</strong>, is the world&apos;s <strong className={heading}>highest official capital city</strong>. Despite being on the equator, its altitude gives it a spring-like climate year-round (~15°C average).
            </p>
          </div>
        </div>
      </section>

      {/* Gal&aacute;pagos */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Gal&aacute;pagos Islands — Darwin&apos;s Lab on a Different Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Gal&aacute;pagos Islands</strong> — 1,000 km off Ecuador&apos;s coast — use <strong className={heading}>GALT (UTC-6)</strong>, one hour behind the mainland. Charles Darwin&apos;s 1835 visit here inspired <strong className={heading}>On the Origin of Species</strong> and changed biology forever.
            </p>
            <p>
              Today the islands are a <strong className={heading}>UNESCO World Heritage Site</strong> with strict visitor limits. The archipelago&apos;s unique wildlife — <strong className={heading}>giant tortoises, marine iguanas, blue-footed boobies</strong> — evolved in isolation, much like the islands operate on their own timezone.
            </p>
            <p>
              Tourist flights from Quito/Guayaquil to Gal&aacute;pagos must account for the <strong className={heading}>1-hour time change</strong>. A flight departing Quito at 9:30 AM lands in Gal&aacute;pagos at ~11:00 AM local time (noon mainland time) — the 2.5-hour flight appears to take 1.5 hours on your watch.
            </p>
          </div>
        </div>
      </section>

      {/* Dollarization */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>US Dollars, US Timezone — Ecuador&apos;s American Connection</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ecuador adopted the <strong className={heading}>US Dollar as its official currency in 2000</strong> after a catastrophic banking crisis. Combined with its <strong className={heading}>EST-aligned timezone</strong>, this makes Ecuador uniquely convenient for American businesses and retirees.
            </p>
            <p>
              <strong className={heading}>Cuenca</strong> has become one of the world&apos;s top retirement destinations for Americans — same timezone, same currency, and a cost of living <strong className={heading}>60-70% lower than the US</strong>. Ecuador also has a growing <strong className={heading}>nearshoring</strong> sector, with its EST alignment making real-time collaboration with US East Coast seamless.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Ecuadorian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Quito', pop: '2.8M', note: 'Capital (UTC-5), 2,850m, UNESCO Old Town' },
              { city: 'Guayaquil', pop: '2.7M', note: 'Largest city, Pacific coast, business hub' },
              { city: 'Cuenca', pop: '600K', note: 'UNESCO, expat favorite, colonial charm' },
              { city: 'Santo Domingo', pop: '450K', note: 'Tropical lowlands, agriculture hub' },
              { city: 'Ambato', pop: '380K', note: 'Central highlands, "Garden of Ecuador"' },
              { city: 'Puerto Ayora', pop: '15K', note: 'Gal\u00e1pagos (UTC-6), Darwin Research' },
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
