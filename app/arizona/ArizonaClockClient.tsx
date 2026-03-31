'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ArizonaClockClient() {
  const { time, date, mounted } = useClockState('America/Phoenix')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Arizona', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'MST · UTC-7' },
          { label: 'No DST — Always UTC-7' },
          { label: 'Phoenix' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Arizona Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Mountain Standard Time (MST)' },
              { label: 'UTC Offset', value: 'UTC-7 (always)' },
              { label: 'Daylight Saving', value: 'None — Arizona never changes clocks' },
              { label: 'IANA Identifier', value: 'America/Phoenix' },
              { label: 'DST Exception', value: 'Navajo Nation observes DST' },
              { label: 'Major Cities', value: 'Phoenix, Tucson, Scottsdale, Mesa' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arizona vs Other Time Zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Arizona vs US Time Zones</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Arizona (MST, UTC-7) never changes. The time difference with other zones shifts when they observe DST.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">Winter (Standard)</th>
                  <th className="pb-2">Summer (Daylight)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Eastern (ET)', winter: '+2 hrs', summer: '+3 hrs' },
                  { zone: 'Central (CT)', winter: '+1 hr', summer: '+2 hrs' },
                  { zone: 'Mountain (MT)', winter: 'Same', summer: '+1 hr' },
                  { zone: 'Pacific (PT)', winter: '−1 hr', summer: 'Same' },
                  { zone: 'Alaska (AKT)', winter: '−2 hrs', summer: '−1 hr' },
                  { zone: 'Hawaii (HST)', winter: '−3 hrs', summer: '−3 hrs' },
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
          <p className={`text-xs mt-3 ${mutedText}`}>
            Example: When it is 12:00 PM MST in Phoenix, it is 2:00 PM EST (3:00 PM EDT) in New York.
          </p>
        </div>
      </section>

      {/* Why no DST */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Doesn&apos;t Arizona Observe Daylight Saving Time?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Arizona opted out of Daylight Saving Time under the <strong className={heading}>Uniform Time Act of 1966</strong>. With summer temperatures regularly exceeding <strong className={heading}>110°F (43°C)</strong> in Phoenix, residents preferred cooler evening hours over an extra hour of scorching afternoon sun.
            </p>
            <p>
              Arizona and Hawaii are the only two US states that do not observe DST. Arizona stays on <strong className={heading}>MST (UTC-7)</strong> year-round. This means in summer, Arizona matches Pacific Daylight Time (California), and in winter it matches Mountain Standard Time (Colorado).
            </p>
            <p>
              The practical effect: Arizonans never change their clocks. But the time difference between Arizona and states that do observe DST <strong className={heading}>shifts twice a year</strong> — in March (spring forward) and November (fall back).
            </p>
          </div>
        </div>
      </section>

      {/* Navajo Nation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Navajo Nation &amp; Hopi Reservation Exception</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Navajo Nation</strong> in northeastern Arizona is the exception. It spans 27,000 square miles across Arizona, Utah, and New Mexico — and <strong className={heading}>observes Daylight Saving Time</strong> like the rest of the Mountain Time Zone (America/Denver).
            </p>
            <p>
              Even more unusual: the <strong className={heading}>Hopi Reservation</strong>, which is completely surrounded by Navajo land, does <strong className={heading}>not</strong> observe DST. This creates a rare &ldquo;time zone donut&rdquo; — driving through northeastern Arizona, you could change time zones multiple times.
            </p>
            <div className={innerCard}>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className={`text-xs ${mutedText} mb-1`}>Arizona (most)</div>
                  <div className={`text-sm font-bold ${heading}`}>MST</div>
                  <div className={`text-xs ${mutedText}`}>No DST</div>
                </div>
                <div>
                  <div className={`text-xs ${mutedText} mb-1`}>Navajo Nation</div>
                  <div className={`text-sm font-bold ${heading}`}>MST/MDT</div>
                  <div className={`text-xs ${mutedText}`}>Observes DST</div>
                </div>
                <div>
                  <div className={`text-xs ${mutedText} mb-1`}>Hopi (inside Navajo)</div>
                  <div className={`text-sm font-bold ${heading}`}>MST</div>
                  <div className={`text-xs ${mutedText}`}>No DST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arizona Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Arizona Cities — All on MST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Phoenix', pop: '1.6M', note: 'State capital, 5th largest US city' },
              { city: 'Tucson', pop: '543K', note: 'University of Arizona' },
              { city: 'Mesa', pop: '508K', note: 'East Valley, 3rd largest in AZ' },
              { city: 'Scottsdale', pop: '242K', note: 'Resorts, golf, Old Town' },
              { city: 'Flagstaff', pop: '73K', note: 'NAU, Grand Canyon gateway' },
              { city: 'Tempe', pop: '185K', note: 'Arizona State University' },
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
