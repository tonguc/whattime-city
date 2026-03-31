'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GhanaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Accra')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Ghana', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT · UTC+0 (always)', highlight: true },
          { label: 'No DST — Near Equator' },
          { label: 'Accra' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Ghana Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'GMT (UTC+0) — permanent' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Africa/Accra' },
              { label: 'Population', value: '~34 million' },
              { label: 'Latitude', value: '4°N – 11°N (near equator)' },
              { label: 'Famous For', value: 'Gold Coast, cocoa, Azonto, Nkrumah' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ghana vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ghana Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Ghana is permanently on GMT/UTC+0 — the same base timezone as London in winter. When others change clocks, Ghana stays put.
          </p>
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
                  { zone: 'New York (ET)', winter: 'Ghana +5 hrs', summer: 'Ghana +4 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Same time!', summer: 'Ghana −1 hr' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Ghana −1 hr', summer: 'Ghana −2 hrs' },
                  { zone: 'Nigeria (WAT)', winter: 'Ghana −1 hr', summer: 'Ghana −1 hr' },
                  { zone: 'South Africa (SAST)', winter: 'Ghana −2 hrs', summer: 'Ghana −2 hrs' },
                  { zone: 'India (IST)', winter: 'Ghana −5:30', summer: 'Ghana −5:30' },
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

      {/* GMT Connection */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Greenwich Meridian Passes Through Ghana</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Prime Meridian (0° longitude)</strong> — the line that defines GMT — physically passes through <strong className={heading}>Tema, Ghana</strong>, just east of Accra. Ghana is one of the few countries in the world that sits <strong className={heading}>directly on the Greenwich Meridian</strong> and also uses GMT as its timezone.
            </p>
            <p>
              This makes Ghana&apos;s GMT usage <strong className={heading}>geographically perfect</strong> — unlike many countries that are on &ldquo;wrong&rdquo; timezones for political reasons, Ghana&apos;s clock genuinely matches its solar position. Solar noon in Accra occurs almost exactly at <strong className={heading}>12:00 PM</strong>.
            </p>
            <p>
              The historical irony: <strong className={heading}>Greenwich Mean Time</strong> was named after Greenwich, London — but London actually uses GMT for only ~5 months a year (switching to BST in summer). Ghana uses GMT all year, every year, making it arguably the <strong className={heading}>world&apos;s most faithful GMT user</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Tech & Economy */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ghana&apos;s Rising Tech Scene & the GMT Advantage</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ghana has emerged as <strong className={heading}>West Africa&apos;s most stable democracy</strong> and a growing tech hub. Accra hosts <strong className={heading}>Google&apos;s first African AI research center</strong> and <strong className={heading}>Twitter&apos;s (X) African headquarters</strong>. The city&apos;s tech scene — centered around <strong className={heading}>Osu and East Legon</strong> — is growing rapidly.
            </p>
            <p>
              Ghana&apos;s <strong className={heading}>GMT timezone</strong> is a major business advantage: it provides <strong className={heading}>maximum overlap with both London and New York</strong>. Ghanaian developers can collaborate with London teams all day (same timezone in winter, just 1 hour behind in summer) and still catch US East Coast mornings (<strong className={heading}>Ghana noon = NYC 7-8 AM</strong>).
            </p>
            <p>
              <strong className={heading}>Mobile money</strong> (MTN MoMo) has transformed the economy — similar to Kenya&apos;s M-Pesa. Ghana also produces <strong className={heading}>~20% of the world&apos;s cocoa</strong> (2nd after C&ocirc;te d&apos;Ivoire) and was historically called the <strong className={heading}>&ldquo;Gold Coast&rdquo;</strong> by European colonizers.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Ghanaian Cities — All on GMT (UTC+0)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Accra', pop: '4.2M metro', note: 'Capital, Google AI center, tech hub' },
              { city: 'Kumasi', pop: '3.5M metro', note: 'Ashanti capital, cultural heart' },
              { city: 'Tamale', pop: '650K', note: 'Northern hub, savannah gateway' },
              { city: 'Tema', pop: '400K', note: 'Port city, on Prime Meridian!' },
              { city: 'Cape Coast', pop: '190K', note: 'Historic slave castle, UNESCO' },
              { city: 'Takoradi', pop: '530K', note: 'Oil & gas hub, Western Region' },
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
