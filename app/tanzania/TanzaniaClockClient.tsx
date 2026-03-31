'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TanzaniaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Dar_es_Salaam')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Tanzania', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT · UTC+3 (always)', highlight: true },
          { label: 'No DST — Near Equator' },
          { label: 'Dodoma / Dar es Salaam', highlight: true },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Tanzania Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EAT — East Africa Time (UTC+3)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Africa/Dar_es_Salaam' },
              { label: 'Population', value: '~65 million' },
              { label: 'Clock System', value: 'Swahili time (like Kenya) — sunrise = hour 1' },
              { label: 'Famous For', value: 'Kilimanjaro, Serengeti, Zanzibar, Olduvai' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tanzania vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Tanzania Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'TZ +8 hrs', summer: 'TZ +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'TZ +3 hrs', summer: 'TZ +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'TZ +2 hrs', summer: 'TZ +1 hr' },
                  { zone: 'South Africa (SAST)', winter: 'TZ +1 hr', summer: 'TZ +1 hr' },
                  { zone: 'Kenya (EAT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'TZ −2:30', summer: 'TZ −2:30' },
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

      {/* Kilimanjaro */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mount Kilimanjaro — Africa&apos;s Roof & the 5 AM Summit Push</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Mount Kilimanjaro (5,895m / 19,341 ft)</strong> is <strong className={heading}>Africa&apos;s highest peak</strong> and the world&apos;s tallest free-standing mountain. Unlike most peaks of its height, Kilimanjaro requires no technical climbing equipment — making it the <strong className={heading}>most accessible &ldquo;extreme altitude&rdquo; mountain</strong> on Earth.
            </p>
            <p>
              The traditional summit push begins at <strong className={heading}>midnight (12:00 AM EAT)</strong> from the final camp, with climbers reaching Uhuru Peak at <strong className={heading}>sunrise (~6:00-7:00 AM)</strong>. This timing is critical: afternoon clouds typically obscure the summit, and the frozen scree is more stable in the cold night hours.
            </p>
            <p>
              Kilimanjaro&apos;s glaciers have shrunk by <strong className={heading}>~85% since 1912</strong> and may disappear entirely by <strong className={heading}>2040-2050</strong>. The mountain spans 5 climate zones from base to summit: tropical rainforest → heath → moorland → alpine desert → arctic ice — sometimes called &ldquo;Africa in miniature.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Serengeti & Zanzibar */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Serengeti Migration & Zanzibar — Tanzania&apos;s Twin Icons</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Great Wildebeest Migration</strong> in the Serengeti is the <strong className={heading}>largest movement of animals on Earth</strong> — 1.5 million wildebeest plus 400,000 zebras and gazelles circle between Tanzania&apos;s Serengeti and Kenya&apos;s Maasai Mara annually. Game drives typically start at <strong className={heading}>6:00 AM EAT</strong> (sunrise) when animals are most active.
            </p>
            <p>
              <strong className={heading}>Zanzibar</strong> — the semi-autonomous island archipelago — adds a cultural layer. <strong className={heading}>Stone Town</strong> (UNESCO World Heritage) was the center of the East African <strong className={heading}>spice trade and slave trade</strong>. Freddie Mercury (born Farrokh Bulsara) was <strong className={heading}>born in Stone Town in 1946</strong>. Zanzibar&apos;s blend of African, Arab, Indian, and European influences is unique in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Swahili Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Swahili Time in Tanzania — &ldquo;Saa Sita&rdquo; Means Noon</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Like Kenya, Tanzania uses <strong className={heading}>Swahili time</strong> alongside international time. The clock starts at sunrise (~6 AM), so <strong className={heading}>&ldquo;saa sita&rdquo; (hour six) = 12:00 noon</strong>, and <strong className={heading}>&ldquo;saa kumi na mbili&rdquo; (hour twelve) = 6:00 PM</strong>.
            </p>
            <p>
              In practice, Tanzanians freely switch between systems. Business, aviation, and tech use international time, while social life often runs on Swahili time. The classic confusion: a bus departing at <strong className={heading}>&ldquo;saa mbili asubuhi&rdquo; (hour two morning)</strong> leaves at <strong className={heading}>8:00 AM</strong>, not 2:00 AM!
            </p>
            <p>
              Tanzania also has unique place in human history: <strong className={heading}>Olduvai Gorge</strong> (in the Serengeti) is where the Leakeys discovered some of the <strong className={heading}>oldest human ancestor fossils</strong> — earning it the nickname <strong className={heading}>&ldquo;Cradle of Mankind.&rdquo;</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Tanzanian Cities — All on EAT (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Dar es Salaam', pop: '7.4M', note: 'Largest city, economic capital, port' },
              { city: 'Dodoma', pop: '750K', note: 'Official capital since 1996, central' },
              { city: 'Mwanza', pop: '1.2M', note: 'Lake Victoria, "Rock City"' },
              { city: 'Arusha', pop: '620K', note: 'Safari gateway, Kilimanjaro base' },
              { city: 'Zanzibar City', pop: '500K', note: 'Stone Town UNESCO, Freddie Mercury' },
              { city: 'Moshi', pop: '210K', note: 'Kilimanjaro foothills, coffee region' },
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
