'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BelarusClockClient() {
  const { time, date, mounted } = useClockState('Europe/Minsk')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Belarus', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'MSK &middot; UTC+3 (permanent)', highlight: true },
          { label: 'No DST since 2011' },
          { label: 'Minsk' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Belarus Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'MSK — Moscow Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Abolished 2011 — permanent UTC+3' },
              { label: 'IANA Identifier', value: 'Europe/Minsk' },
              { label: 'Population', value: '~9.4 million' },
              { label: 'IT Sector', value: 'Hi-Tech Park — World of Tanks, Viber, EPAM' },
              { label: 'Famous For', value: 'Belovezhskaya Pushcha, IT outsourcing' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Belarus Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'BY +8 hrs', summer: 'BY +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'BY +3 hrs', summer: 'BY +2 hrs' },
                  { zone: 'Moscow (MSK)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Poland (CET/CEST)', winter: 'BY −2 hrs', summer: 'BY −1 hr' },
                  { zone: 'Lithuania (EET/EEST)', winter: 'BY −1 hr', summer: 'Same time!' },
                  { zone: 'Ukraine (EET/EEST)', winter: 'BY −1 hr', summer: 'Same time!' },
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

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Moscow Time on EU&apos;s Border — The Timezone Gap</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Belarus uses <strong className={heading}>Moscow Time (UTC+3) permanently</strong> — making it the <strong className={heading}>only European country besides Russia and Turkey</strong> on permanent UTC+3. This creates a <strong className={heading}>2-hour gap</strong> with neighboring <strong className={heading}>Poland (CET, UTC+1)</strong> during winter — one of the largest timezone jumps at any land border in Europe.
            </p>
            <p>
              The <strong className={heading}>Hi-Tech Park (HTP)</strong> in Minsk was Belarus&apos;s Silicon Valley — home to <strong className={heading}>EPAM Systems</strong> (now a $10B+ NYSE-listed IT services company), <strong className={heading}>Wargaming (World of Tanks)</strong>, and development of <strong className={heading}>Viber</strong>. The HTP leveraged the <strong className={heading}>UTC+3 timezone</strong> to serve both European and Asian clients during overlap hours.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Belarus Key Cities — All on MSK (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Minsk', pop: '2M', note: 'Capital, IT hub, Soviet architecture' },
              { city: 'Gomel', pop: '530K', note: '2nd city, SE Belarus, Chernobyl affected' },
              { city: 'Mogilev', pop: '380K', note: '3rd city, Dnieper River' },
              { city: 'Vitebsk', pop: '370K', note: 'Chagall\'s birthplace, Slavianski Bazaar' },
              { city: 'Grodno', pop: '370K', note: 'Western hub, Polish border, historic' },
              { city: 'Brest', pop: '340K', note: 'Fortress, Polish border crossing' },
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
