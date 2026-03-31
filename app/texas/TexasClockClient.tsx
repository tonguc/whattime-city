'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TIMEZONES = {
  'Most of Texas (CT)': 'America/Chicago',
  'Far West TX (MT)': 'America/Denver',
}

export default function TexasClockClient() {
  const { times, date, mounted, isDST } = useMultiClockState(TIMEZONES, 'America/Chicago')
  const { card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={Object.entries(TIMEZONES).map(([label]) => ({ label, time: times[label] || '--:--:--' }))}
        date={date}
        mounted={mounted}
        timeSize="text-5xl"
        badges={[
          { label: isDST ? 'CDT \u00B7 UTC-5 / MDT \u00B7 UTC-6' : 'CST \u00B7 UTC-6 / MST \u00B7 UTC-7', highlight: true },
          { label: '2 Time Zones' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Primary Zone', value: 'CT \u2014 Central Time (UTC-6/UTC-5)' },
          { label: 'Far West Texas', value: 'MT \u2014 Mountain Time (El Paso area)' },
          { label: 'DST Rule', value: '2nd Sunday Mar \u2192 1st Sunday Nov' },
          { label: 'Population', value: '~30 million \u2014 2nd largest US state' },
          { label: 'Area', value: '696,241 km\u00B2 \u2014 bigger than France!' },
          { label: 'Famous For', value: 'Oil, NASA, BBQ, tech (Austin), cowboys' },
        ]}
      />

      <NarrativeSection title="Texas&apos;s Two Time Zones \u2014 The El Paso Split" card={card} heading={heading} subText={subText}>
        <p>
          Most of Texas is on <strong className={heading}>Central Time</strong>, but <strong className={heading}>El Paso and Hudspeth County</strong> in far west Texas use <strong className={heading}>Mountain Time</strong>. El Paso is geographically closer to <strong className={heading}>Los Angeles</strong> than to Houston \u2014 and is <strong className={heading}>closer to three state capitals</strong> (Santa Fe, NM; Phoenix, AZ; Chihuahua, MX) than to Austin.
        </p>
        <p>
          Texas&apos;s <strong className={heading}>energy industry</strong> runs the state like a country: if Texas were independent, it would have the <strong className={heading}>9th largest economy in the world</strong>. The <strong className={heading}>Texas power grid (ERCOT)</strong> is unique \u2014 it&apos;s <strong className={heading}>not connected to the rest of the US grid</strong>, operating independently across both Central and Mountain time zones.
        </p>
        <p>
          <strong className={heading}>NASA&apos;s Johnson Space Center</strong> in Houston operates on CT \u2014 &ldquo;Houston, we have a problem&rdquo; was transmitted at <strong className={heading}>CST</strong>. <strong className={heading}>Austin&apos;s tech boom</strong> (Tesla, Oracle, Samsung, SpaceX) has made it &ldquo;Silicon Hills&rdquo; \u2014 attracting workers from California who gain <strong className={heading}>2 extra hours</strong> relative to Pacific Time colleagues.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Texas Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Houston', detail: 'Pop. 2.3M \u00B7 CT \u00B7 Energy capital, NASA, diverse' },
          { name: 'San Antonio', detail: 'Pop. 1.5M \u00B7 CT \u00B7 Alamo, River Walk, military' },
          { name: 'Dallas', detail: 'Pop. 1.3M \u00B7 CT \u00B7 Finance, Cowboys, DFW airport' },
          { name: 'Austin', detail: 'Pop. 1M \u00B7 CT \u00B7 State capital, tech, live music' },
          { name: 'Fort Worth', detail: 'Pop. 960K \u00B7 CT \u00B7 Stockyards, "where West begins"' },
          { name: 'El Paso', detail: 'Pop. 680K \u00B7 MT \u00B7 Border city, bilingual, desert' },
        ]}
      />
    </div>
  )
}
