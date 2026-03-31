'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function UTCClockClient() {
  const { time, date, mounted } = useClockState('UTC')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'UTC — Coordinated Universal Time', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'UTC+0' },
          { label: 'No DST — Always UTC+0' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>UTC Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'UTC Offset', value: 'UTC+0' },
              { label: 'Abbreviation', value: 'UTC' },
              { label: 'Full Name', value: 'Coordinated Universal Time' },
              { label: 'Daylight Saving', value: 'None — never changes' },
              { label: 'IANA Identifier', value: 'UTC' },
              { label: 'Also known as', value: 'GMT, Zulu Time (Z)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UTC offset table */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>UTC vs Major Time Zones</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            UTC never changes. Other time zones move around it — especially those observing Daylight Saving Time.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Time Zone</th>
                  <th className="pb-2 pr-4">Offset from UTC</th>
                  <th className="pb-2">DST?</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700'}`}>
                {offsets.map(({ label, offset, dst }) => (
                  <tr key={label}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{label}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>
                      UTC{offset >= 0 ? '+' : ''}{offset % 1 === 0 ? offset : offset.toString().replace('.5', ':30')}
                    </td>
                    <td className={`py-2 text-xs ${dst ? 'text-amber-500' : mutedText}`}>
                      {dst ? 'DST active' : 'No DST'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DST explanation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Is UTC 4 or 5 Hours Ahead of EST?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>UTC is 5 hours ahead of EST and 4 hours ahead of EDT.</strong>{' '}
              The answer depends on the time of year — not UTC (which never changes), but the US East Coast.
            </p>
            <p>
              During winter (November–March), the US East Coast observes <strong className={heading}>EST (UTC-5)</strong> — so UTC is 5 hours ahead.
            </p>
            <p>
              During summer (March–November), Daylight Saving Time activates and the East Coast switches to <strong className={heading}>EDT (UTC-4)</strong> — so UTC is only 4 hours ahead.
            </p>
            <p>
              UTC itself is always UTC+0. It is the clock that never moves. Every other time zone is defined as an offset from UTC.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
