'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function PeruClockClient() {
  const { time, date, mounted } = useClockState('America/Lima')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Peru', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'PET · UTC−5' },
          { label: 'No DST — Year-round' },
          { label: 'Lima' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Peru Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Peru Time (PET)' },
              { label: 'UTC Offset', value: 'UTC−5 (always)' },
              { label: 'Daylight Saving', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'America/Lima' },
              { label: 'Population', value: '~34 million' },
              { label: 'Same Offset As', value: 'US Eastern (EST), Colombia, Ecuador' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peru vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Peru Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Same as Peru!', summer: 'Peru +1 hr behind' },
                  { zone: 'Los Angeles (PT)', winter: 'Peru +3 hrs', summer: 'Peru +2 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Peru −5 hrs', summer: 'Peru −6 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Peru −6 hrs', summer: 'Peru −7 hrs' },
                  { zone: 'Japan (JST)', winter: 'Peru −14 hrs', summer: 'Peru −14 hrs' },
                  { zone: 'Colombia (COT)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Inca Timekeeping */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Inca Timekeeping — Ancient Precision</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Inca Empire</strong> had sophisticated timekeeping. The <strong className={heading}>Intihuatana stone</strong> at Machu Picchu (meaning &ldquo;hitching post of the sun&rdquo;) was a precise astronomical clock that tracked <strong className={heading}>solstices, equinoxes, and planting seasons</strong>.
            </p>
            <p>
              The Incas used a <strong className={heading}>solar calendar of 12 months</strong> (each 30 days) plus 5 extra days, remarkably similar to the modern calendar. They tracked the <strong className={heading}>Pleiades constellation</strong> to determine optimal planting times for potatoes and maize at different altitudes.
            </p>
            <p>
              <strong className={heading}>Cusco</strong> (the Inca capital, at 3,400m altitude) served as the empire&apos;s <strong className={heading}>timezone reference</strong> — messenger runners (chasquis) synchronized activities across 4,000 km of Inca roads using solar positions relative to Cusco.
            </p>
          </div>
        </div>
      </section>

      {/* "Hora Peruana" */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>&ldquo;Hora Peruana&rdquo; — Peru&apos;s Time Culture</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>&ldquo;Hora Peruana&rdquo;</strong> (Peruvian time) is a well-known cultural concept meaning events typically start <strong className={heading}>30–60 minutes late</strong>. It&apos;s so recognized that in <strong className={heading}>2007</strong>, the government launched a national campaign called <strong className={heading}>&ldquo;La Hora Sin Demora&rdquo;</strong> (The Hour Without Delay) to promote punctuality.
            </p>
            <p>
              The campaign had limited success — &ldquo;Hora Peruana&rdquo; remains deeply embedded in social culture. However, Lima&apos;s growing <strong className={heading}>tech and startup scene</strong> operates on strict international time, and formal business meetings are expected to be punctual.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Peruvian Cities — All on PET (UTC−5)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Lima', pop: '11M metro', note: 'Capital, Pacific coast, food capital' },
              { city: 'Arequipa', pop: '1.1M', note: '"White City", volcanic setting' },
              { city: 'Cusco', pop: '430K', note: 'Inca capital, Machu Picchu gateway' },
              { city: 'Trujillo', pop: '1M metro', note: 'Northern coast, Moche ruins' },
              { city: 'Iquitos', pop: '500K', note: 'Amazon, largest city with no roads in' },
              { city: 'Huancayo', pop: '500K', note: 'Central Andes, 3,271m altitude' },
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
