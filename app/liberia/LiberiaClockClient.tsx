'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LiberiaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Monrovia')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Liberia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~5.3M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'GMT (UTC+0)'],
            ['DST', 'Not observed'],
            ['Population', '~5.3 million'],
            ['Dial Code', '+231'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Did You Know?</h3>
        <ul className={`list-disc space-y-2 pl-5 text-sm ${subText}`}>
          <li>Founded in 1847 by freed American slaves, Liberia is the oldest republic in Africa.</li>
          <li>Liberian ship registration is the world&apos;s largest &mdash; more vessels fly the Liberian flag than any other nation&apos;s.</li>
          <li>Sapo National Park protects one of West Africa&apos;s largest remaining tropical rainforests.</li>
          <li>The Firestone rubber plantation near Harbel was once the world&apos;s largest, spanning over 400 km&sup2;.</li>
          <li>Liberia and the United States share a deep historical bond, reflected in Liberia&apos;s flag and capital name, Monrovia (after President Monroe).</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Monrovia', '1.6M', 'Capital'],
            ['Gbarnga', '50K', ''],
            ['Ganta', '42K', ''],
            ['Buchanan', '35K', ''],
            ['Kakata', '34K', ''],
            ['Harper', '33K', ''],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop}{note ? ` \u00B7 ${note}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
