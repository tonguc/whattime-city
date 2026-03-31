'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GMTClockClient() {
  const { time, date, mounted } = useClockState('Etc/GMT')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  const offsets = [
    { label: 'EST (New York, winter)', offset: -5 },
    { label: 'EDT (New York, summer)', offset: -4 },
    { label: 'CST (Chicago, winter)', offset: -6 },
    { label: 'PST (Los Angeles, winter)', offset: -8 },
    { label: 'BST (UK, summer)', offset: 1 },
    { label: 'CET (Paris, winter)', offset: 1 },
    { label: 'IST (India)', offset: 5.5 },
    { label: 'JST (Tokyo)', offset: 9 },
  ]

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'GMT — Greenwich Mean Time', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT+0' },
          { label: 'No DST — Always GMT+0' },
          { label: 'UK uses BST in summer' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>GMT Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'UTC Offset', value: 'UTC+0 / GMT+0' },
              { label: 'Abbreviation', value: 'GMT' },
              { label: 'Full Name', value: 'Greenwich Mean Time' },
              { label: 'Daylight Saving', value: 'None — GMT never changes' },
              { label: 'Named After', value: 'Royal Observatory, Greenwich' },
              { label: 'Also known as', value: 'UTC, Zulu Time (Z)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GMT offset table */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>GMT vs Major Time Zones</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            GMT is always UTC+0. Other time zones shift relative to GMT — especially US zones that observe Daylight Saving Time.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Time Zone</th>
                  <th className="pb-2 pr-4">Offset from GMT</th>
                  <th className="pb-2">Difference</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700'}`}>
                {offsets.map(({ label, offset }) => (
                  <tr key={label}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{label}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>
                      GMT{offset >= 0 ? '+' : ''}{offset % 1 === 0 ? offset : offset.toString().replace('.5', ':30')}
                    </td>
                    <td className={`py-2 text-xs ${subText}`}>
                      {offset < 0 ? `${Math.abs(offset)} hrs behind GMT` : `${offset % 1 === 0 ? offset : offset.toString().replace('.5', ':30')} hrs ahead of GMT`}
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Is GMT 4 or 5 Hours Ahead of EST?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>GMT is 5 hours ahead of EST and 4 hours ahead of EDT.</strong>{' '}
              GMT itself never changes — it is always UTC+0. The difference depends on the US East Coast.
            </p>
            <p>
              During winter (November–March), the US East Coast observes <strong className={heading}>EST (UTC-5)</strong> — so GMT is 5 hours ahead.
            </p>
            <p>
              During summer (March–November), Daylight Saving Time activates and the East Coast switches to <strong className={heading}>EDT (UTC-4)</strong> — so GMT is only 4 hours ahead.
            </p>
            <p>
              Note: The UK observes <strong className={heading}>BST (British Summer Time, UTC+1)</strong> from the last Sunday in March to the last Sunday in October. During BST, the UK clock is 1 hour ahead of GMT.
            </p>
          </div>
        </div>
      </section>

      {/* Countries on GMT */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Which Countries Use GMT Year-Round?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              These countries observe GMT (UTC+0) permanently — they do not switch to summer time:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Iceland', 'Ghana', 'Ivory Coast', 'Senegal', 'Guinea',
                'Guinea-Bissau', 'Gambia', 'Sierra Leone', 'Liberia',
                'Togo', 'Burkina Faso', 'São Tomé & Príncipe',
              ].map(country => (
                <div key={country} className={innerCard}>
                  <span className={`text-xs font-medium ${heading}`}>{country}</span>
                </div>
              ))}
            </div>
            <p>
              The <strong className={heading}>United Kingdom</strong> observes GMT in winter (October–March) but switches to BST (UTC+1) during Daylight Saving Time in summer.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
