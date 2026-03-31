'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function HondurasClockClient() {
  const { time, date, mounted } = useClockState('America/Tegucigalpa')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Honduras', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CST &middot; UTC-6' },
          { label: 'No DST' },
          { label: 'Pop. ~10.4M' },
        ]}
      />


      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Maya Ruins &amp; Reef Diving</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Honduras is home to Cop&aacute;n Ruinas, a UNESCO World Heritage Site renowned for its elaborate Maya stelae and hieroglyphic stairway&mdash;the longest ancient Maya text ever discovered. Off the Caribbean coast, the Bay Islands (Roat&aacute;n, Utila, Guanaja) sit along the Mesoamerican Barrier Reef, the second largest in the world, offering world-class scuba diving and snorkeling.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Cloud Forests &amp; Coffee</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          La Mosquitia, often called the &ldquo;Central American Amazon,&rdquo; is one of the largest remaining tracts of tropical rainforest in the Americas. Honduras is also a major coffee exporter, with high-altitude beans from regions like Marcala gaining international recognition. The country&apos;s cloud forests shelter rare wildlife including the resplendent quetzal.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Tegucigalpa', '1.2M \u00b7 Capital'],
            ['San Pedro Sula', '700K'],
            ['Choloma', '253K'],
            ['La Ceiba', '200K'],
            ['El Progreso', '188K'],
            ['Comayagua', '82K'],
          ].map(([city, info]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
