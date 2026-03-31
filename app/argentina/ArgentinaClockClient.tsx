'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ArgentinaClockClient() {
  const { time, date, mounted } = useClockState('America/Argentina/Buenos_Aires')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Argentina', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'ART · UTC−3' },
          { label: 'No DST since 2009' },
          { label: 'Buenos Aires' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Argentina Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Argentina Time (ART)' },
              { label: 'UTC Offset', value: 'UTC−3 (always)' },
              { label: 'Geographic Zone', value: 'Should be UTC−4 based on longitude' },
              { label: 'DST Status', value: 'Abolished in 2009' },
              { label: 'IANA Identifier', value: 'America/Argentina/Buenos_Aires' },
              { label: 'Same Offset As', value: 'Brazil (BRT), Uruguay, French Guiana' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Argentina vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Argentina Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Argentina +2 hrs', summer: 'Argentina +1 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'Argentina +5 hrs', summer: 'Argentina +4 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Argentina −3 hrs', summer: 'Argentina −4 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Argentina −4 hrs', summer: 'Argentina −5 hrs' },
                  { zone: 'India (IST)', winter: 'Argentina −8:30', summer: 'Argentina −8:30' },
                  { zone: 'Japan (JST)', winter: 'Argentina −12 hrs', summer: 'Argentina −12 hrs' },
                  { zone: 'Brazil (BRT)', winter: 'Same time', summer: 'Same time' },
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

      {/* Wrong Time Zone */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Argentina&apos;s &ldquo;Permanent Summer Time&rdquo; — Like Spain</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Argentina&apos;s geographic longitude (roughly <strong className={heading}>58°W to 74°W</strong>) places it squarely in the <strong className={heading}>UTC−4 zone</strong> — the same as Chile, Bolivia, and eastern Canada. But Argentina uses <strong className={heading}>UTC−3</strong>, effectively living on permanent summer time.
            </p>
            <p>
              This means <strong className={heading}>late sunrises in winter</strong> — in Buenos Aires, the sun doesn&apos;t rise until <strong className={heading}>8:00 AM in June</strong>. In <strong className={heading}>Mendoza (western Argentina)</strong>, winter sunrise is closer to <strong className={heading}>8:30 AM</strong>.
            </p>
            <p>
              The offset was adopted to align with <strong className={heading}>Brazil and Uruguay</strong> for economic reasons. Argentina briefly reintroduced DST in <strong className={heading}>2007–2009</strong> due to an energy crisis, but public backlash led to its permanent abolition.
            </p>
          </div>
        </div>
      </section>

      {/* Argentine Culture & Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Argentine Time Culture</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Argentina has one of the <strong className={heading}>latest daily schedules in the Americas</strong>. Dinner typically starts at <strong className={heading}>9:30–10:30 PM</strong>, nightclubs open at <strong className={heading}>2:00 AM</strong>, and weekend nights often end at <strong className={heading}>6:00–7:00 AM</strong>.
            </p>
            <p>
              The traditional <strong className={heading}>merienda</strong> (afternoon tea/snack) at <strong className={heading}>5:00–6:00 PM</strong> bridges the gap between a late lunch (1:00–2:00 PM) and the very late dinner. <strong className={heading}>Mate</strong> (yerba mate tea) is consumed throughout the day as a social ritual.
            </p>
            <p>
              Business meetings in Buenos Aires rarely start before <strong className={heading}>10:00 AM</strong>, and a <strong className={heading}>&ldquo;business lunch&rdquo;</strong> at 1:30–2:00 PM can extend to 4:00 PM. The late culture is deeply connected to Argentina being 1 hour ahead of its natural solar time.
            </p>
          </div>
        </div>
      </section>

      {/* San Luis Exception */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The San Luis Rebellion</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In a bizarre episode, <strong className={heading}>San Luis province</strong> unilaterally adopted its own DST rules from <strong className={heading}>2009 to 2010</strong>, using UTC−4 in winter and UTC−3 in summer — different from the rest of Argentina. The national government declared this illegal.
            </p>
            <p>
              The governor argued the early darkness in winter hurt agricultural productivity. This created a <strong className={heading}>timezone border within Argentina</strong> where crossing from San Luis to neighboring provinces meant changing your clock — until the province was forced to comply.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Argentine Cities — All on ART (UTC−3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Buenos Aires', pop: '15.5M metro', note: 'Capital, "Paris of South America"' },
              { city: 'Córdoba', pop: '1.6M', note: 'Second city, university hub' },
              { city: 'Rosario', pop: '1.3M', note: 'Messi\'s birthplace, Paraná River' },
              { city: 'Mendoza', pop: '1.1M metro', note: 'Wine capital, Andes gateway' },
              { city: 'Ushuaia', pop: '80K', note: 'World\'s southernmost city' },
              { city: 'Bariloche', pop: '145K', note: 'Patagonian lake district' },
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
