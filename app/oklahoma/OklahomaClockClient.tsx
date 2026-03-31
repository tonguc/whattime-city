'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function OklahomaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Oklahoma', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CDT · UTC-5' : 'CST · UTC-6', highlight: true },
          { label: 'Central Time' },
          { label: 'The Sooner State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Oklahoma Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~4 million — 28th largest state' },
              { label: 'Capital', value: 'Oklahoma City — heart of the plains' },
              { label: 'Famous For', value: 'Oil, tornadoes, tribal heritage' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Oil, Thunder &amp; Tornado Alley — Oklahoma on Central Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Oklahoma sits at the heart of <strong className={heading}>Tornado Alley</strong>, and severe weather season from April through June keeps the state on high alert. The National Weather Center in <strong className={heading}>Norman</strong> — home to NOAA&apos;s Storm Prediction Center — issues tornado watches and warnings timestamped in <strong className={heading}>Central Time</strong>. Oklahoma averages <span style={{ fontVariantNumeric: 'tabular-nums' }}>56</span> tornadoes per year, with peak activity between <span style={{ fontVariantNumeric: 'tabular-nums' }}>4:00 PM</span> and <span style={{ fontVariantNumeric: 'tabular-nums' }}>9:00 PM CT</span>.
            </p>
            <p>
              The <strong className={heading}>oil and gas industry</strong> has shaped Oklahoma since the Tulsa oil boom of the early <span style={{ fontVariantNumeric: 'tabular-nums' }}>1900</span>s. Today, <strong className={heading}>Tulsa</strong> is experiencing a renaissance — the Gathering Place park, a revitalized Arts District, and tech startup incentives like Tulsa Remote have drawn thousands of new residents. Oklahoma City&apos;s <strong className={heading}>Thunder NBA</strong> team tips off home games at <strong className={heading}>Paycom Center</strong>, typically at <span style={{ fontVariantNumeric: 'tabular-nums' }}>7:00 PM CT</span>.
            </p>
            <p>
              Oklahoma is home to <span style={{ fontVariantNumeric: 'tabular-nums' }}>39</span> <strong className={heading}>tribal nations</strong>, more than any other state. The <strong className={heading}>Cherokee, Chickasaw, Choctaw, Creek, and Seminole</strong> nations have their headquarters here, and tribal governance, casinos, and cultural events operate on Central Time. The word &quot;Oklahoma&quot; itself comes from the Choctaw words <em>okla</em> (people) and <em>humma</em> (red) — literally &quot;red people.&quot;
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Oklahoma Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Oklahoma City', pop: '681K', note: 'State capital, Thunder NBA' },
              { city: 'Tulsa', pop: '413K', note: 'Oil capital, tech renaissance' },
              { city: 'Norman', pop: '128K', note: 'OU Sooners, weather center' },
              { city: 'Broken Arrow', pop: '116K', note: 'Tulsa suburb, fastest-growing' },
              { city: 'Edmond', pop: '97K', note: 'OKC suburb, UCO university' },
              { city: 'Lawton', pop: '90K', note: 'Fort Sill, SW Oklahoma hub' },
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
