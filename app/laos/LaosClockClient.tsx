'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LaosClockClient() {
  const { time, date, mounted } = useClockState('Asia/Vientiane')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Laos', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'ICT · UTC+7 (always)' },
          { label: 'No DST' },
          { label: 'Vientiane', highlight: true },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Laos Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ICT — Indochina Time (UTC+7)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Vientiane' },
              { label: 'Population', value: '~7.6 million' },
              { label: 'Same TZ As', value: 'Thailand, Vietnam, Cambodia' },
              { label: 'Famous For', value: 'Mekong, Luang Prabang, "Bor Pen Nyang"' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laos vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Laos Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Their Winter</th>
                  <th className="pb-2">Their Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'LA +12 hrs', summer: 'LA +11 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'LA +7 hrs', summer: 'LA +6 hrs' },
                  { zone: 'Thailand (ICT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'China (CST)', winter: 'LA −1 hr', summer: 'LA −1 hr' },
                  { zone: 'India (IST)', winter: 'LA +1:30', summer: 'LA +1:30' },
                  { zone: 'Australia (AEST)', winter: 'LA −4 hrs', summer: 'LA −3 hrs' },
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
        </div>
      </section>

      {/* Bor Pen Nyang */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>&ldquo;Bor Pen Nyang&rdquo; — The Lao Philosophy of Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Laos is famous for the phrase <strong className={heading}>&ldquo;Bor Pen Nyang&rdquo;</strong> (ບໍ່ເປັນຫຍັງ) — literally &ldquo;it&apos;s nothing&rdquo; or &ldquo;no problem.&rdquo; It encapsulates the <strong className={heading}>Lao attitude toward time</strong>: relaxed, unhurried, and philosophical. Laos is sometimes called the <strong className={heading}>&ldquo;Land of a Million Elephants and One Traffic Light&rdquo;</strong> — a joke that captures its pace.
            </p>
            <p>
              Daily rhythm in Laos follows the <strong className={heading}>Buddhist temple cycle</strong>: monks walk in <strong className={heading}>alms rounds at 5:30-6:30 AM ICT</strong> (especially in Luang Prabang, where tourists line up to watch and participate). Markets open early (<strong className={heading}>5-6 AM</strong>), the midday heat brings a siesta-like pause, and evenings center on the <strong className={heading}>night markets (5-10 PM)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Most Bombed Country */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Most Bombed Country in History — Laos&apos;s Hidden Legacy</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Between 1964 and 1973, the US dropped over <strong className={heading}>2 million tons of bombs</strong> on Laos during the &ldquo;Secret War&rdquo; — making Laos the <strong className={heading}>most heavily bombed country per capita in history</strong>. That&apos;s a planeload of bombs every 8 minutes, 24 hours a day, for 9 years.
            </p>
            <p>
              An estimated <strong className={heading}>30% of bombs didn&apos;t detonate</strong> — leaving up to <strong className={heading}>80 million unexploded ordnance (UXO)</strong> across the countryside. To this day, UXO kills or injures ~50 Lao people per year. The <strong className={heading}>COPE Visitor Centre</strong> in Vientiane documents this legacy and provides prosthetics to survivors.
            </p>
            <p>
              Despite this history, Laos has become one of Southeast Asia&apos;s <strong className={heading}>most peaceful and welcoming destinations</strong>. <strong className={heading}>Luang Prabang</strong> (UNESCO World Heritage City) is routinely voted one of the world&apos;s most beautiful small cities.
            </p>
          </div>
        </div>
      </section>

      {/* China-Laos Railway */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>China-Laos Railway — From Landlocked to Land-Linked</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In December 2021, the <strong className={heading}>China-Laos Railway</strong> opened — a 1,035 km high-speed line from Kunming (China) to Vientiane. The journey that once took <strong className={heading}>2 days by road</strong> now takes <strong className={heading}>~10 hours by train</strong>. Despite crossing the border, <strong className={heading}>both countries use the same timezone offset from UTC</strong> (China UTC+8, Laos UTC+7 — just 1 hour difference).
            </p>
            <p>
              Laos is transforming from <strong className={heading}>landlocked to &ldquo;land-linked&rdquo;</strong> — the railway connects it to China&apos;s massive market and, eventually, to Thailand and Singapore via the planned pan-Asian rail network. Laos is also the <strong className={heading}>&ldquo;Battery of Southeast Asia&rdquo;</strong> — with dozens of hydropower dams on the Mekong generating electricity for export.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Lao Cities — All on ICT (UTC+7)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Vientiane', pop: '950K', note: 'Capital, Mekong riverside, That Luang' },
              { city: 'Luang Prabang', pop: '70K', note: 'UNESCO city, monks\' alms rounds' },
              { city: 'Savannakhet', pop: '125K', note: 'Southern hub, colonial architecture' },
              { city: 'Pakse', pop: '90K', note: 'Bolaven Plateau, coffee, Wat Phou' },
              { city: 'Vang Vieng', pop: '25K', note: 'Karst mountains, adventure tourism' },
              { city: 'Phongsali', pop: '30K', note: 'Northern tea country, ethnic diversity' },
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
