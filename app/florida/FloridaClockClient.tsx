'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function FloridaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Florida', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4 / CDT · UTC-5' : 'EST · UTC-5 / CST · UTC-6', highlight: true },
          { label: '2 Time Zones' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Florida Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'Panhandle', value: 'CT — Central Time (west of Apalachicola)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'Population', value: '~22 million — 3rd largest US state' },
              { label: 'Sunshine Act', value: 'Voted permanent DST in 2018 (awaiting Congress)' },
              { label: 'Famous For', value: 'Disney, beaches, NASA, retirees, LatAm hub' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Sunshine Protection Act — Florida Wants Permanent DST</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In 2018, Florida passed the <strong className={heading}>Sunshine Protection Act</strong> — voting to stay on <strong className={heading}>permanent Daylight Saving Time (EDT/CDT year-round)</strong>. However, this requires <strong className={heading}>Congressional approval</strong> which hasn&apos;t happened yet. Floridians want <strong className={heading}>more evening sunlight</strong> and dislike &ldquo;falling back&rdquo; to standard time.
            </p>
            <p>
              Florida&apos;s <strong className={heading}>ET timezone</strong> makes it the <strong className={heading}>gateway to Latin America</strong>. Miami is the <strong className={heading}>business capital of Latin America</strong> in practice — aligned with <strong className={heading}>Bogot&aacute; (UTC-5), Lima (UTC-5), and S&atilde;o Paulo (UTC-3)</strong> during business hours. <strong className={heading}>70% of US-Latin American trade</strong> flows through Florida.
            </p>
            <p>
              <strong className={heading}>Cape Canaveral (Kennedy Space Center)</strong> launches on <strong className={heading}>ET</strong>. SpaceX, NASA, and ULA all operate from Florida&apos;s Space Coast — the <strong className={heading}>easternmost point in the continental US</strong>, ideal for launches because Earth&apos;s rotation gives an <strong className={heading}>extra speed boost</strong> eastward.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Florida Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Miami', pop: '6.2M metro', note: 'ET · LatAm gateway, Art Deco, crypto' },
              { city: 'Orlando', pop: '2.7M metro', note: 'ET · Disney, Universal, tourism' },
              { city: 'Tampa', pop: '3.3M metro', note: 'ET · Bay area, finance, Bucs' },
              { city: 'Jacksonville', pop: '1M', note: 'ET · Largest city by area in US' },
              { city: 'Fort Lauderdale', pop: '180K', note: 'ET · Cruise capital, beaches' },
              { city: 'Pensacola', pop: '55K', note: 'CT · Panhandle, Navy base, beaches' },
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
