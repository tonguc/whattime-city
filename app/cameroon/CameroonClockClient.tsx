'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function CameroonClockClient() {
  const { time, date, mounted } = useClockState('Africa/Douala')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Cameroon', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~28M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~28 million'],
            ['Capital', 'Yaound\u00E9'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['Languages', 'French & English'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Africa in Miniature */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>&ldquo;Africa in Miniature&rdquo;</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Cameroon is called &ldquo;Africa in miniature&rdquo; because it contains every climate and landscape found on the continent.</li>
          <li>Mount Cameroon (4,095 m) is the highest peak in West Africa and an active volcano near the coast.</li>
          <li>Waza National Park in the far north is home to elephants, lions, giraffes, and over 370 bird species.</li>
          <li>The country is one of only a few in Africa that is officially bilingual&mdash;French and English.</li>
        </ul>
      </div>

      {/* Football &amp; Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Football &amp; Culture</h3>
        <p className={`text-sm ${subText}`}>
          The Indomitable Lions are among Africa&apos;s most storied football teams, having appeared in seven FIFA World Cups.
          Roger Milla&apos;s iconic corner-flag dance at the 1990 World Cup remains one of football&apos;s most celebrated moments.
          Cameroon&apos;s culture blends over 250 ethnic groups, with vibrant traditions in music, dance, and craftsmanship
          spanning from the Bamileke highlands to the Sawa coastal peoples.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Yaound\u00E9', '4M', 'Capital'],
            ['Douala', '3.7M', 'Economic hub'],
            ['Bamenda', '500K', 'Northwest'],
            ['Garoua', '436K', 'Northern'],
            ['Bafoussam', '360K', 'West'],
            ['Maroua', '319K', 'Far North'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
