'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AzerbaijanClockClient() {
  const { time, date, mounted } = useClockState('Asia/Baku')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Azerbaijan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AZT · UTC+4 (always)', highlight: true },
          { label: 'No DST since 2016' },
          { label: 'Land of Fire', highlight: true },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Azerbaijan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AZT — Azerbaijan Time (UTC+4)' },
              { label: 'DST Status', value: 'Abolished in 2016' },
              { label: 'IANA Identifier', value: 'Asia/Baku' },
              { label: 'Population', value: '~10.2 million' },
              { label: 'Same TZ As', value: 'Dubai, Georgia, Mauritius' },
              { label: 'Famous For', value: 'Oil, Flame Towers, F1 Grand Prix, fire temples' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Azerbaijan vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Azerbaijan Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'AZ +9 hrs', summer: 'AZ +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'AZ +4 hrs', summer: 'AZ +3 hrs' },
                  { zone: 'Turkey (TRT)', winter: 'AZ +1 hr', summer: 'AZ +1 hr' },
                  { zone: 'Moscow (MSK)', winter: 'AZ +1 hr', summer: 'AZ +1 hr' },
                  { zone: 'Dubai (GST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Georgia (GET)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Land of Fire */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Land of Fire — Where Natural Gas Burns Eternally</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Azerbaijan&apos;s name likely derives from <strong className={heading}>&ldquo;Land of Fire&rdquo;</strong> — and for good reason. <strong className={heading}>Yanar Dag</strong> (Burning Mountain) near Baku has been <strong className={heading}>burning continuously for centuries</strong>, fueled by natural gas seeping from the ground. The <strong className={heading}>Ateshgah Fire Temple</strong> (17th century) was built around a natural gas vent that ancient Zoroastrians worshipped.
            </p>
            <p>
              Azerbaijan was the <strong className={heading}>birthplace of the modern oil industry</strong>. The first industrial oil well was drilled in <strong className={heading}>Baku in 1846</strong> — 13 years before Drake&apos;s famous well in Pennsylvania. By 1901, Baku produced <strong className={heading}>50% of the world&apos;s oil</strong>. The Nobel brothers (yes, the Nobel Prize Nobels) made their fortune in Baku oil.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Baku */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Baku: F1, Eurovision & the Flame Towers</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Modern Baku is a city of contrasts: the <strong className={heading}>UNESCO-listed Old City (Icherisheher)</strong> sits next to the <strong className={heading}>Flame Towers</strong> — three skyscrapers shaped like flames that light up with LED displays visible across the city. Baku hosts the <strong className={heading}>Azerbaijan Grand Prix</strong> (F1 street circuit through the city center) and hosted <strong className={heading}>Eurovision 2012</strong>.
            </p>
            <p>
              Azerbaijan&apos;s UTC+4 timezone places it in a <strong className={heading}>strategic position</strong>: <strong className={heading}>same time as Dubai</strong>, 1 hour ahead of Turkey and Moscow, with morning overlap with European markets. Baku is positioning itself as a <strong className={heading}>bridge between Europe and Central Asia</strong> — the <strong className={heading}>Middle Corridor</strong> trade route from China to Europe passes through Azerbaijan.
            </p>
            <p>
              The country&apos;s exclave <strong className={heading}>Nakhchivan</strong> (separated from mainland Azerbaijan by Armenia) uses the same AZT timezone despite being geographically closer to Turkey&apos;s timezone.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Azerbaijani Cities — All on AZT (UTC+4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Baku', pop: '2.3M', note: 'Capital, Flame Towers, F1 circuit' },
              { city: 'Ganja', pop: '335K', note: '2nd city, Nizami Ganjavi birthplace' },
              { city: 'Sumgait', pop: '350K', note: 'Industrial, Black Sea coast' },
              { city: 'Mingachevir', pop: '110K', note: 'Energy capital, largest reservoir' },
              { city: 'Lankaran', pop: '85K', note: 'Southern subtropical hub, tea region' },
              { city: 'Sheki', pop: '65K', note: 'Silk Road city, Khan Palace UNESCO' },
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
