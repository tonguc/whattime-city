'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function HawaiiClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Honolulu')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Hawaii', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'HST · UTC-10' },
          { label: 'No DST — Always UTC-10' },
          { label: 'Honolulu' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Hawaii Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Hawaii Standard Time (HST)' },
              { label: 'UTC Offset', value: 'UTC-10 (always)' },
              { label: 'Daylight Saving', value: 'None — Hawaii never changes clocks' },
              { label: 'IANA Identifier', value: 'Pacific/Honolulu' },
              { label: 'US Offset Rank', value: 'Most behind — 10 hrs behind UTC' },
              { label: 'Major Cities', value: 'Honolulu, Hilo, Kailua, Pearl City' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hawaii vs Mainland */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Hawaii vs US Mainland Time</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Hawaii (HST, UTC-10) never changes. The time difference with the mainland shifts twice a year when the mainland observes DST.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Mainland Zone</th>
                  <th className="pb-2 pr-4">Winter (Standard Time)</th>
                  <th className="pb-2">Summer (Daylight Time)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700'}`}>
                {[
                  { zone: 'Eastern (ET)', winter: 5, summer: 6 },
                  { zone: 'Central (CT)', winter: 4, summer: 5 },
                  { zone: 'Mountain (MT)', winter: 3, summer: 4 },
                  { zone: 'Pacific (PT)', winter: 2, summer: 3 },
                  { zone: 'Alaska (AKT)', winter: 1, summer: 2 },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{winter} hrs ahead of Hawaii</td>
                    <td className={`py-2 ${subText}`}>{summer} hrs ahead of Hawaii</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>
            Example: When it is 12:00 PM HST in Honolulu, it is 5:00 PM EST (6:00 PM EDT) in New York.
          </p>
        </div>
      </section>

      {/* Why no DST */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Doesn&apos;t Hawaii Observe Daylight Saving Time?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Hawaii opted out of Daylight Saving Time under the <strong className={heading}>Uniform Time Act of 1966</strong>. The state is close to the equator (latitude ~20°N), which means daylight hours vary little between summer and winter — making DST largely pointless.
            </p>
            <p>
              Hawaii and Arizona are the only two states that do not observe DST. Hawaii uses <strong className={heading}>HST (UTC-10)</strong> all year, every year. The clock in Honolulu never moves.
            </p>
            <p>
              Because Hawaii is so far west of the mainland, adding evening daylight hours in summer would push sunset past 8:30 PM — which residents and businesses did not want. The current year-round HST keeps sunset at a reasonable 7:20–7:40 PM in summer.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
