'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SanMarinoClockClient() {
  const { time, date, mounted } = useClockState('Europe/San_Marino')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in San Marino', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CET &middot; UTC+1 / UTC+2' },
          { label: 'Observes DST' },
          { label: 'Pop. ~34K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~34,000 &mdash; one of the world&apos;s smallest and oldest republics</li>
          <li>&bull; Founded on 3 September 301&nbsp;AD, making it the oldest surviving sovereign state</li>
          <li>&bull; Entirely surrounded by Italy, perched on Mount Titano (UNESCO World Heritage)</li>
          <li>&bull; More registered vehicles than residents &mdash; and reportedly no national debt</li>
        </ul>
      </div>

      {/* Landmarks & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Landmarks &amp; Culture</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Three Towers of San Marino</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Guaita, Cesta, and Montale &mdash; medieval fortifications crowning the three peaks of Mount Titano, visible from miles away.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Mount Titano</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A UNESCO site at 739&nbsp;m elevation, offering panoramic views from the Adriatic coast to the Apennine mountains.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Oldest Republic</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Founded by Saint Marinus in 301&nbsp;AD. The constitution dates to 1600, making it the world&apos;s oldest written governing document still in effect.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Formula One &amp; Stamps</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Famous for hosting the San Marino Grand Prix and its collectible postage stamps, a notable source of national revenue.</p>
          </div>
        </div>
      </div>

      {/* Castelli (Municipalities) */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Castelli (Municipalities)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Serravalle', pop: '11K' },
            { name: 'Borgo Maggiore', pop: '7K' },
            { name: 'San Marino City', pop: '4.5K' },
            { name: 'Domagnano', pop: '3.5K' },
            { name: 'Fiorentino', pop: '2.6K' },
            { name: 'Acquaviva', pop: '2K' },
          ].map((c) => (
            <div key={c.name} className={innerCard}>
              <p className={`font-medium text-sm ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
