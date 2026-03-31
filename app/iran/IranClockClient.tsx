'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function IranClockClient() {
  const { time, date, mounted, isDST } = useClockState('Asia/Tehran')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Iran', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'IRDT \u00B7 UTC+4:30' : 'IRST \u00B7 UTC+3:30' },
          { label: 'Half-Hour Offset' },
          { label: 'Solar Hijri Calendar' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Standard Time', value: 'IRST (UTC+3:30)' },
          { label: 'Daylight Saving', value: 'IRDT (UTC+4:30) \u2014 observed' },
          { label: 'DST Rule', value: 'Solar Hijri calendar-based (not fixed Gregorian)' },
          { label: 'IANA Identifier', value: 'Asia/Tehran' },
          { label: 'Population', value: '~88 million' },
          { label: 'Calendar', value: 'Solar Hijri (Jalali) \u2014 year ~1404' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Iran Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>Iran&apos;s half-hour offset means it&apos;s always :30 minutes off from most countries.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Iran Standard (IRST)</th>
                  <th className="pb-2">Iran DST (IRDT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', irst: 'Iran +8:30', irdt: 'Iran +8:30' },
                  { zone: 'Los Angeles (PT)', irst: 'Iran +11:30', irdt: 'Iran +11:30' },
                  { zone: 'London (GMT/BST)', irst: 'Iran +3:30', irdt: 'Iran +3:30' },
                  { zone: 'Berlin (CET/CEST)', irst: 'Iran +2:30', irdt: 'Iran +2:30' },
                  { zone: 'India (IST)', irst: 'Iran \u22122:00', irdt: 'Iran \u22121:00' },
                  { zone: 'Dubai (GST)', irst: 'Iran \u22120:30', irdt: 'Iran +0:30' },
                  { zone: 'Japan (JST)', irst: 'Iran \u22125:30', irdt: 'Iran \u22124:30' },
                ].map(({ zone, irst, irdt }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{irst}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{irdt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NarrativeSection title="Why UTC+3:30? Iran\u2019s Half-Hour Time Zone" card={card} heading={heading} subText={subText}>
        <p>
          Iran is one of only a handful of countries using a <strong className={heading}>half-hour offset</strong> (others include India at UTC+5:30, Afghanistan at UTC+4:30, and Nepal at UTC+5:45). Iran adopted UTC+3:30 in <strong className={heading}>1946</strong>.
        </p>
        <p>
          The offset was chosen because Tehran sits at roughly <strong className={heading}>51.4&deg;E longitude</strong>, which corresponds to approximately <strong className={heading}>3 hours 26 minutes</strong> east of Greenwich &mdash; making +3:30 a very accurate geographic match. Rather than rounding to UTC+3 or UTC+4, Iran chose precision.
        </p>
        <p>
          This creates scheduling headaches for international businesses. When it&apos;s <strong className={heading}>9:00 AM in New York</strong>, it&apos;s <strong className={heading}>5:30 PM in Tehran</strong> &mdash; the :30 offset means Iran is always out of sync with round-hour time zones.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>The Solar Hijri Calendar &mdash; Iran&apos;s Unique System</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iran uses the <strong className={heading}>Solar Hijri (Shamsi) calendar</strong>, which is fundamentally different from both the Gregorian and the Islamic (Lunar Hijri) calendar. The current year is approximately <strong className={heading}>1404 SH</strong>.
            </p>
            <p>
              Unlike the Lunar Hijri used in Saudi Arabia (which drifts ~11 days/year), Iran&apos;s Solar Hijri follows the <strong className={heading}>solar year precisely</strong> &mdash; its new year (<strong className={heading}>Nowruz</strong>) falls on the <strong className={heading}>spring equinox (March 20/21)</strong>, making it astronomically accurate.
            </p>
            <p>
              The first 6 months have <strong className={heading}>31 days</strong>, the next 5 have <strong className={heading}>30 days</strong>, and the last has 29 (30 in leap years). Iran&apos;s DST dates are tied to this calendar, not Gregorian dates &mdash; making them <strong className={heading}>particularly challenging for timezone database maintainers</strong> to predict years in advance.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Gregorian', value: '2026' },
                { label: 'Solar Hijri', value: '~1404\u20131405 SH' },
                { label: 'New Year (Nowruz)', value: 'March 20/21' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`}>{z.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CitiesGrid
        title="Major Iranian Cities \u2014 All on IRST/IRDT"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Tehran', detail: 'Pop. 16M metro \u00B7 Capital, Alborz Mountains' },
          { name: 'Isfahan', detail: 'Pop. 2.2M metro \u00B7 \u201cHalf the World\u201d, Safavid capital' },
          { name: 'Mashhad', detail: 'Pop. 3.4M metro \u00B7 Holy city, Imam Reza shrine' },
          { name: 'Shiraz', detail: 'Pop. 1.9M metro \u00B7 Poetry capital, Persepolis' },
          { name: 'Tabriz', detail: 'Pop. 1.7M \u00B7 Northwest hub, Azerbaijan border' },
          { name: 'Kish Island', detail: 'Pop. 40K \u00B7 Free trade zone, Persian Gulf' },
        ]}
      />
    </div>
  )
}
