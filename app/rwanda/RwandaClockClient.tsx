'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function RwandaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Kigali')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Rwanda', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~14M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'CAT (UTC+2)'],
            ['DST', 'Not observed'],
            ['Population', '~14 million'],
            ['Capital', 'Kigali'],
            ['Currency', 'Rwandan Franc (RWF)'],
            ['Languages', 'Kinyarwanda, English, French'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Country Highlights */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Land of a Thousand Hills</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Rwanda is often called the &ldquo;Land of a Thousand Hills&rdquo; for its stunning
          mountainous terrain. The country has become a leading tech hub in East Africa,
          earning the nickname &ldquo;Singapore of Africa.&rdquo; Kigali is widely regarded as
          the cleanest city on the continent, with mandatory monthly <em>Umuganda</em> community
          service days. Rwanda&apos;s Volcanoes National Park is one of only three places on Earth
          where endangered mountain gorillas can be observed in the wild.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Kigali', '1.2M'],
            ['Butare', '90K'],
            ['Gisenyi', '83K'],
            ['Ruhengeri', '87K'],
            ['Muhanga', '68K'],
            ['Byumba', '70K'],
          ].map(([city, pop]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
