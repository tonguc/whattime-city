'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MichiganClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Detroit')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Michigan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4 / CDT · UTC-5' : 'EST · UTC-5 / CST · UTC-6', highlight: true },
          { label: '2 Time Zones' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Michigan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'ET — Eastern Time (Lower Peninsula + most UP)' },
              { label: 'CT Counties', value: 'Gogebic, Iron, Dickinson, Menominee (UP west)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifiers', value: 'America/Detroit + America/Menominee' },
              { label: 'Population', value: '~10 million' },
              { label: 'Famous For', value: 'Detroit auto industry, Great Lakes, Motown' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Detroit Time — When the Auto Industry Sets the Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Michigan has its own <strong className={heading}>IANA timezone identifier — America/Detroit</strong> — separate from America/New_York. This is because Michigan <strong className={heading}>adopted Eastern Time later than the East Coast</strong> and had a different DST history. Detroit was originally on <strong className={heading}>Central Time</strong> and only switched to ET in <strong className={heading}>1915</strong>.
            </p>
            <p>
              The <strong className={heading}>Big Three automakers</strong> (GM, Ford, Stellantis) all headquarter in metro Detroit and operate on <strong className={heading}>ET</strong>. When Detroit announces <strong className={heading}>quarterly earnings, new model launches, or factory shifts</strong>, the global auto industry follows <strong className={heading}>Michigan time</strong>. The <strong className={heading}>North American International Auto Show (NAIAS)</strong> is scheduled around ET.
            </p>
            <p>
              Michigan&apos;s <strong className={heading}>Upper Peninsula (UP)</strong> is split between timezones — most follows <strong className={heading}>ET</strong> like the Lower Peninsula, but the <strong className={heading}>four westernmost counties use CT</strong>. The UP is closer to <strong className={heading}>Wisconsin and Minnesota</strong> than to Detroit, making CT more practical for daily life.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Michigan Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Detroit', pop: '640K', note: 'ET · Motor City, Motown, comeback' },
              { city: 'Grand Rapids', pop: '200K', note: 'ET · Furniture capital, craft beer' },
              { city: 'Ann Arbor', pop: '125K', note: 'ET · University of Michigan' },
              { city: 'Lansing', pop: '115K', note: 'ET · State capital, GM factory' },
              { city: 'Traverse City', pop: '15K', note: 'ET · Cherry capital, wine, tourism' },
              { city: 'Marquette', pop: '20K', note: 'ET · UP\'s largest, Northern Michigan U' },
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
