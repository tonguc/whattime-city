'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AustriaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Vienna')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Austria', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1' },
          { label: 'Heart of Europe' },
          { label: 'Vienna' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Austria Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Vienna' },
              { label: 'Population', value: '~9.1 million' },
              { label: 'Borders', value: '8 countries — most in EU' },
              { label: 'Famous For', value: 'Mozart, Red Bull, Kaffeehauskultur' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Austria vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Austria Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">AT Winter (CET)</th>
                  <th className="pb-2">AT Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'AT +6 hrs', summer: 'AT +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'AT +9 hrs', summer: 'AT +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'AT +1 hr', summer: 'AT +1 hr' },
                  { zone: 'India (IST)', winter: 'AT −4:30', summer: 'AT −3:30' },
                  { zone: 'Japan (JST)', winter: 'AT −8 hrs', summer: 'AT −7 hrs' },
                  { zone: 'Germany (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Kaffeehauskultur */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Kaffeehauskultur — Vienna&apos;s UNESCO-Listed Coffee Culture</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Vienna&apos;s <strong className={heading}>coffee house culture</strong> is so significant it was added to the <strong className={heading}>UNESCO Intangible Cultural Heritage</strong> list in 2011. The Viennese <em>Kaffeehaus</em> isn&apos;t just a place to drink coffee — it&apos;s a <strong className={heading}>temporal institution</strong>.
            </p>
            <p>
              The tradition dates to <strong className={heading}>1683</strong> when coffee beans were left behind after the Ottoman siege of Vienna. Today, the unwritten rule: you can sit in a <em>Kaffeehaus</em> for <strong className={heading}>hours with a single Melange</strong> (Viennese cappuccino), reading newspapers, working, or simply existing. Nobody will rush you. The waiter (<em>Herr Ober</em>) brings water on a silver tray — and leaves you in peace.
            </p>
            <p>
              Famous patrons: <strong className={heading}>Freud, Trotsky, Stefan Zweig, and Klimt</strong> all held court in Viennese coffee houses. Caf&eacute; Central alone claims Freud, Trotsky, Lenin, and Hitler as former regulars — sometimes simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Borders */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>8 Neighbors, 2 Time Zones at the Border</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Austria borders <strong className={heading}>8 countries</strong> — Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein. All share CET/CEST except none — making Austria&apos;s border timezone situation remarkably simple.
            </p>
            <p>
              Vienna&apos;s position at the <strong className={heading}>crossroads of Western and Eastern Europe</strong> made it the seat of the <strong className={heading}>Habsburg Empire</strong> for 640 years and home to many international organizations today: <strong className={heading}>OPEC, OSCE, IAEA, and the UN Vienna office</strong>. This central position — both geographic and temporal — keeps Vienna a major hub for international diplomacy and conferences.
            </p>
          </div>
        </div>
      </section>

      {/* Red Bull */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Red Bull, Glock & the Austrian Business Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Austria punches well above its weight economically. <strong className={heading}>Red Bull</strong> (HQ: Fuschl am See) sells 12+ billion cans annually and is the world&apos;s most valuable private company in beverages. <strong className={heading}>Glock</strong> (Deutsch-Wagram) is one of the world&apos;s largest handgun manufacturers. <strong className={heading}>Swarovski</strong> (Wattens) dominates luxury crystal.
            </p>
            <p>
              Austrian business culture values <strong className={heading}>punctuality highly</strong> — more so than many European neighbors. Meetings start on time, and being 5 minutes late is noticed. The typical workday runs <strong className={heading}>8:00 AM – 5:00 PM CET</strong>, with a strong separation between work and personal time.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Austrian Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Vienna', pop: '2M metro', note: 'Capital, UN city, Kaffeehauskultur' },
              { city: 'Graz', pop: '330K', note: '2nd city, UNESCO Old Town, tech hub' },
              { city: 'Linz', pop: '210K', note: 'Danube city, Ars Electronica, industry' },
              { city: 'Salzburg', pop: '155K', note: 'Mozart\'s birthplace, Red Bull HQ nearby' },
              { city: 'Innsbruck', pop: '135K', note: 'Alpine capital, Winter Olympics (1964, 1976)' },
              { city: 'Klagenfurt', pop: '105K', note: 'Southern hub, Lake Wörthersee' },
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
