'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LatviaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Riga')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Latvia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST · UTC+3' : 'EET · UTC+2' },
          { label: 'EU DST Rules' },
          { label: 'Riga' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Latvia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Riga' },
              { label: 'Population', value: '~1.8 million' },
              { label: 'Forest Cover', value: '54% — one of Europe\'s greenest' },
              { label: 'Famous For', value: 'Art Nouveau Riga, Midsummer, choir festivals' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latvia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Latvia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">LV Winter (EET)</th>
                  <th className="pb-2">LV Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'LV +7 hrs', summer: 'LV +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'LV +2 hrs', summer: 'LV +2 hrs' },
                  { zone: 'Estonia/Lithuania', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Germany (CET/CEST)', winter: 'LV −1 hr', summer: 'LV −1 hr' },
                  { zone: 'Russia-Moscow (MSK)', winter: 'LV −1 hr', summer: 'Same time!' },
                  { zone: 'Japan (JST)', winter: 'LV −7 hrs', summer: 'LV −6 hrs' },
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

      {/* Jāņi Midsummer */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>J&#257;&#326;i — The Night That Never Gets Dark</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>J&#257;&#326;i (Midsummer, June 23-24)</strong> is Latvia&apos;s most important celebration — a pagan festival predating Christianity. At latitude <strong className={heading}>57°N</strong>, Riga gets <strong className={heading}>~18.5 hours of daylight</strong> at midsummer, with twilight lasting all night. Latvians stay up <strong className={heading}>the entire night</strong> — jumping over bonfires, singing folk songs, wearing flower wreaths, and searching for the mythical <strong className={heading}>fern blossom</strong>.
            </p>
            <p>
              The contrast is extreme: in December, Riga gets only <strong className={heading}>~6.5 hours of daylight</strong>. This <strong className={heading}>12-hour swing</strong> between summer and winter deeply shapes Latvian work patterns — productivity and socializing peak during the <strong className={heading}>white nights of June-July</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Baltic IT */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Baltic IT Hub — Riga&apos;s Growing Tech Scene</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Latvia&apos;s <strong className={heading}>EET timezone</strong> gives it a unique position in European outsourcing: <strong className={heading}>2 hours ahead of London, 7 ahead of New York</strong>, but in the <strong className={heading}>same timezone as Finland and the Baltics</strong>. Riga hosts growing IT and fintech sectors, with companies like <strong className={heading}>Printful (on-demand printing unicorn)</strong> founded here.
            </p>
            <p>
              Riga&apos;s <strong className={heading}>Art Nouveau district</strong> (800+ buildings, the world&apos;s highest concentration) is a <strong className={heading}>UNESCO World Heritage site</strong>. The city also has a thriving <strong className={heading}>digital nomad scene</strong> — affordable, fast internet, and direct flights to major European hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Latvia Key Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Riga', pop: '615K', note: 'Capital, Art Nouveau, EU culture hub' },
              { city: 'Daugavpils', pop: '80K', note: '2nd city, Rothko birthplace' },
              { city: 'Liep\u0101ja', pop: '70K', note: 'Wind city, music venue, navy port' },
              { city: 'Jelgava', pop: '55K', note: 'University city, Rundale Palace nearby' },
              { city: 'J\u016brmala', pop: '50K', note: 'Beach resort, spa town, 33km beach' },
              { city: 'Ventspils', pop: '34K', note: 'Ice-free port, cleanest city' },
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
