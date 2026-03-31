'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MyanmarClockClient() {
  const { time, date, mounted } = useClockState('Asia/Yangon')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Myanmar', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'MMT · UTC+6:30 (always)' },
          { label: 'Half-Hour Offset' },
          { label: 'Yangon' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Myanmar Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'MMT — Myanmar Time (UTC+6:30)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Yangon' },
              { label: 'Population', value: '~55 million' },
              { label: 'Unique Offset', value: 'One of only 3 countries on :30 offset' },
              { label: 'Measurement', value: 'Uses imperial units (with Liberia & US)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myanmar vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Myanmar Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Myanmar&apos;s :30 offset creates unusual time differences — it&apos;s never on the hour with most countries.
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
                  { zone: 'New York (ET)', winter: 'MM +11:30', summer: 'MM +10:30' },
                  { zone: 'London (GMT/BST)', winter: 'MM +6:30', summer: 'MM +5:30' },
                  { zone: 'India (IST)', winter: 'MM +1:00', summer: 'MM +1:00' },
                  { zone: 'Thailand (ICT)', winter: 'MM −0:30', summer: 'MM −0:30' },
                  { zone: 'China (CST)', winter: 'MM −1:30', summer: 'MM −1:30' },
                  { zone: 'Japan (JST)', winter: 'MM −2:30', summer: 'MM −2:30' },
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

      {/* Half-Hour Club */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Half-Hour Club — Myanmar&apos;s Stubborn UTC+6:30</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Myanmar is one of only a handful of places using a <strong className={heading}>:30 minute UTC offset</strong>. The others are <strong className={heading}>India (UTC+5:30), Iran (UTC+3:30), Afghanistan (UTC+4:30), Sri Lanka (UTC+5:30), Nepal (UTC+5:45)</strong>, and a few Australian zones.
            </p>
            <p>
              The <strong className={heading}>UTC+6:30 offset</strong> was chosen to match Myanmar&apos;s <strong className={heading}>geographic longitude</strong> (roughly 96°E). At 15° per hour, 96° ÷ 15 = 6.4 hours — making UTC+6:30 a surprisingly precise choice. Myanmar is one of the few countries whose timezone <strong className={heading}>actually matches its solar position</strong>.
            </p>
            <p>
              This creates a consistent <strong className={heading}>30-minute offset</strong> with both neighbors: Myanmar is always 30 minutes behind <strong className={heading}>Thailand (UTC+7)</strong> and 1 hour ahead of <strong className={heading}>India (UTC+5:30)</strong>. Crossing the India-Myanmar border shifts your clock by exactly <strong className={heading}>1 hour forward</strong>; crossing into Thailand shifts <strong className={heading}>30 minutes forward</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Triple Oddity */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Myanmar&apos;s Triple Oddity: Time, Units & Driving</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Myanmar is famous for being one of the world&apos;s <strong className={heading}>most contrarian countries</strong> in international standards:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className={heading}>Timezone</strong>: UTC+6:30 — non-standard half-hour offset</li>
              <li><strong className={heading}>Measurement</strong>: One of only 3 countries (with USA and Liberia) that hasn&apos;t officially adopted the metric system</li>
              <li><strong className={heading}>Driving</strong>: Drives on the <strong className={heading}>right side</strong> — but most cars have the <strong className={heading}>steering wheel on the right</strong> too (imported from Japan), making passing extremely dangerous</li>
            </ul>
            <p>
              Myanmar also uses its own traditional <strong className={heading}>calendar system</strong> alongside the Gregorian calendar. The Myanmar calendar is a lunisolar system — <strong className={heading}>Thingyan</strong> (Water Festival / New Year) typically falls in April and is a 4-5 day national celebration where the entire country essentially shuts down.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Myanmar Cities — All on MMT (UTC+6:30)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Yangon', pop: '5.7M', note: 'Largest city, Shwedagon Pagoda' },
              { city: 'Mandalay', pop: '1.7M', note: 'Cultural capital, last royal capital' },
              { city: 'Naypyidaw', pop: '1.2M', note: 'Capital since 2006, planned city' },
              { city: 'Mawlamyine', pop: '490K', note: 'Mon State, colonial-era capital' },
              { city: 'Bagan', pop: '50K', note: '2,200+ temples, UNESCO, sunrise tours' },
              { city: 'Taunggyi', pop: '390K', note: 'Shan State, Inle Lake gateway' },
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
