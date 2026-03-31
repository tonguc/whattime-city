'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BoliviaClockClient() {
  const { time, date, mounted } = useClockState('America/La_Paz')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Bolivia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'BOT · UTC-4 (always)', highlight: true },
          { label: 'No DST' },
          { label: 'World&apos;s Highest Capital', highlight: true },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Bolivia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'BOT — Bolivia Time (UTC-4)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'America/La_Paz' },
              { label: 'Population', value: '~12.4 million' },
              { label: 'Capitals', value: 'Sucre (constitutional) + La Paz (administrative)' },
              { label: 'Altitude', value: 'La Paz at 3,640m — highest admin capital' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bolivia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bolivia Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'BO +1 hr', summer: 'Same time!' },
                  { zone: 'Los Angeles (PT)', winter: 'BO +4 hrs', summer: 'BO +3 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'BO −4 hrs', summer: 'BO −5 hrs' },
                  { zone: 'Argentina (ART)', winter: 'BO +1 hr', summer: 'BO +1 hr' },
                  { zone: 'Brazil (BRT)', winter: 'BO +1 hr', summer: 'BO +1 hr' },
                  { zone: 'Peru (PET)', winter: 'BO −1 hr', summer: 'BO −1 hr' },
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

      {/* Backwards Clock */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Backwards Clock of Congress — Bolivia&apos;s Anti-Colonial Statement</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In 2014, Bolivia&apos;s government installed a <strong className={heading}>backwards clock</strong> on the Congress building in La Paz — the numbers run counter-clockwise. Foreign Minister David Choquehuanca called it the <strong className={heading}>&ldquo;Clock of the South&rdquo;</strong>, saying Bolivians should stop living by Northern Hemisphere conventions.
            </p>
            <p>
              The clock was a symbolic gesture under President <strong className={heading}>Evo Morales</strong>&apos; indigenous rights movement. The argument: if the sun moves from left to right when you face south (as it does in the Southern Hemisphere), clocks should too. While the reversed clock confused tourists, it became a <strong className={heading}>symbol of Bolivian cultural sovereignty</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Altitude */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Highest Capital — Where Altitude Changes Everything</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>La Paz</strong> sits at <strong className={heading}>3,640m (11,942 ft)</strong> — the world&apos;s highest administrative capital. The neighboring city of <strong className={heading}>El Alto</strong> is even higher at <strong className={heading}>4,150m</strong>, making it the highest city over 1 million people on Earth.
            </p>
            <p>
              Altitude affects daily life in unusual ways: water boils at <strong className={heading}>87°C instead of 100°C</strong>, cooking takes longer, and newcomers experience <em>soroche</em> (altitude sickness). Local remedy: <strong className={heading}>mate de coca</strong> (coca leaf tea), served freely in every hotel lobby. Football matches in La Paz are infamous — visiting teams from sea level lose an estimated <strong className={heading}>13% of their aerobic capacity</strong>.
            </p>
            <p>
              Bolivia&apos;s <strong className={heading}>Salar de Uyuni</strong> — the world&apos;s largest salt flat (10,582 km²) at 3,656m — contains <strong className={heading}>~50-70% of the world&apos;s lithium reserves</strong>. This could make Bolivia the &ldquo;Saudi Arabia of lithium&rdquo; for the electric vehicle era.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Bolivian Cities — All on BOT (UTC-4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'La Paz', pop: '2.0M metro', note: 'Admin capital, 3,640m, Mi Telef\u00e9rico' },
              { city: 'Santa Cruz', pop: '2.3M', note: 'Largest city, lowlands, economic engine' },
              { city: 'El Alto', pop: '1.2M', note: '4,150m, highest major city on Earth' },
              { city: 'Cochabamba', pop: '800K', note: 'Eternal spring climate, Cristo Redentor' },
              { city: 'Sucre', pop: '300K', note: 'Constitutional capital, UNESCO White City' },
              { city: 'Oruro', pop: '280K', note: 'Carnival UNESCO, mining heritage' },
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
