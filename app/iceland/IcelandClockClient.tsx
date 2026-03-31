'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function IcelandClockClient() {
  const { time, date, mounted } = useClockState('Atlantic/Reykjavik')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Iceland', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT \u00B7 UTC+0 (always)' },
          { label: 'No DST \u2014 Year-round' },
          { label: 'Reykjav\u00edk' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'GMT / UTC+0 (permanent)' },
          { label: 'DST Status', value: 'Never observed \u2014 too extreme' },
          { label: 'Geographic Zone', value: 'Should be UTC-1 (15\u00B0W\u201324\u00B0W longitude)' },
          { label: 'IANA Identifier', value: 'Atlantic/Reykjavik' },
          { label: 'Population', value: '~380,000' },
          { label: 'Latitude', value: '63\u00B0N \u2013 66\u00B0N (touches Arctic Circle)' },
        ]}
      />

      <ComparisonTable
        title="Iceland Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'Iceland +5 hrs', summer: 'Iceland +4 hrs' },
          { location: 'Los Angeles (PT)', winter: 'Iceland +8 hrs', summer: 'Iceland +7 hrs' },
          { location: 'London (GMT/BST)', winter: 'Same time!', summer: 'Iceland +1 hr behind' },
          { location: 'Berlin (CET/CEST)', winter: 'Iceland \u22121 hr', summer: 'Iceland \u22122 hrs' },
          { location: 'India (IST)', winter: 'Iceland \u22125:30', summer: 'Iceland \u22125:30' },
          { location: 'Greenland (Nuuk)', winter: 'Iceland +2 hrs', summer: 'Iceland +1 hr' },
        ]}
      />

      <NarrativeSection title="Why Is Iceland on GMT Instead of UTC-1?" card={card} heading={heading} subText={subText}>
        <p>
          Iceland sits between <strong className={heading}>13\u00B0W and 24\u00B0W longitude</strong> \u2014 geographically it belongs in the <strong className={heading}>UTC-1 or even UTC-2 zone</strong>. Reykjav\u00edk (21.9\u00B0W) is further west than most of <strong className={heading}>West Africa</strong>.
        </p>
        <p>
          Iceland adopted GMT in <strong className={heading}>1968</strong> to align with European trading partners, particularly the <strong className={heading}>UK</strong> (its largest trade partner at the time). Before that, Iceland used UTC-1. The shift was controversial \u2014 it means Iceland&apos;s solar noon is around <strong className={heading}>1:30 PM</strong> in Reykjav\u00edk and even later in western Iceland.
        </p>
        <p>
          Iceland also <strong className={heading}>never uses DST</strong>. The reasoning: at 64-66\u00B0N, summer daylight is already <strong className={heading}>~21-24 hours</strong>, so pushing clocks forward would make sunset absurdly late. And in winter with only <strong className={heading}>4-5 hours of daylight</strong>, DST wouldn&apos;t help either.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Midnight Sun & Sk\u00f3gamm \u2014 Iceland&apos;s Extreme Light</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Iceland touches the <strong className={heading}>Arctic Circle</strong> at Gr\u00edmsey island (66.5\u00B0N). Even Reykjav\u00edk (64\u00B0N) gets <strong className={heading}>near-midnight sun</strong> \u2014 the sun barely dips below the horizon in June, creating a twilight that never becomes true darkness.
            </p>
            <p>
              In winter, the reverse: Reykjav\u00edk gets only <strong className={heading}>~4-5 hours of daylight</strong> in December. Icelanders call the dark period <strong className={heading}>&ldquo;sk\u00f3gamm&rdquo;</strong> (shadow-darkness). To cope, Icelanders are <strong className={heading}>among the world&apos;s highest consumers of antidepressants and Vitamin D</strong> \u2014 and also some of the most prolific readers, writers, and hot tub enthusiasts per capita.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-2 gap-4 text-center text-xs">
              {[
                { label: 'Jun 21 (Reykjav\u00edk)', value: '~21 hrs daylight', note: 'Never truly dark' },
                { label: 'Dec 21 (Reykjav\u00edk)', value: '~4 hrs daylight', note: 'Sunrise ~11:20 AM, Sunset ~3:30 PM' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`}>{z.value}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NarrativeSection title="100% Renewable Energy & Data Center Boom" card={card} heading={heading} subText={subText}>
        <p>
          Iceland runs on <strong className={heading}>100% renewable electricity</strong> \u2014 ~70% geothermal, ~30% hydroelectric. This cheap, clean energy has attracted <strong className={heading}>data centers and crypto mining operations</strong>. Combined with naturally cold air for cooling, Iceland is one of the most energy-efficient places to run servers.
        </p>
        <p>
          Its <strong className={heading}>GMT timezone</strong> and position between Europe and North America make it a natural <strong className={heading}>submarine cable landing point</strong>. The <strong className={heading}>DANICE and FARICE cables</strong> connect Iceland to both continents, with latency comparable to other European data center locations.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Key Iceland Locations \u2014 All on GMT (UTC+0)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Reykjav\u00edk', detail: 'Pop. 230K metro \u00B7 Capital, world\'s northernmost capital' },
          { name: 'Akureyri', detail: 'Pop. 19K \u00B7 Northern capital, 65\u00B0N, midnight sun' },
          { name: 'Keflav\u00edk', detail: 'Pop. 19K \u00B7 International airport, NATO base' },
          { name: '\u00cdsafj\u00f6r\u00f0ur', detail: 'Pop. 2.6K \u00B7 Westfjords, extreme isolation' },
          { name: 'Gr\u00edmsey', detail: 'Pop. 60 \u00B7 Arctic Circle island, 66.5\u00B0N' },
          { name: 'V\u00edk', detail: 'Pop. 750 \u00B7 Southernmost village, black sand beaches' },
        ]}
      />
    </div>
  )
}
