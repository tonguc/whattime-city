'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function WyomingClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Denver')
  const { card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Wyoming', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'MDT UTC\u22126' : 'MST UTC\u22127' },
          { label: 'Mountain Time' },
          { label: 'Equality State' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'Mountain Time (entire state)' },
          { label: 'IANA Identifier', value: 'America/Denver' },
          { label: 'UTC Offset', value: 'UTC\u22127 standard / UTC\u22126 DST' },
          { label: 'Daylight Saving', value: 'Yes \u2014 observes DST' },
          { label: 'State Capital', value: 'Cheyenne (Mountain Time)' },
          { label: 'Population', value: '~580K \u2014 least populous state' },
        ]}
      />

      <NarrativeSection title="Yellowstone, Cowboys & Energy" card={card} heading={heading} subText={subText}>
        <p>
          Wyoming is the <strong className={heading}>least populated US state</strong> \u2014 but among the most geographically dramatic. <strong className={heading}>Yellowstone National Park</strong>, the world&apos;s first national park (1872), sits in the northwest corner. <strong className={heading}>Grand Teton National Park</strong> and the resort town of <strong className={heading}>Jackson Hole</strong> draw millions of visitors annually.
        </p>
        <p>
          Wyoming is a major <strong className={heading}>energy producer</strong> \u2014 the nation&apos;s largest coal producer and a significant source of natural gas and oil. The <strong className={heading}>Powder River Basin</strong> contains massive low-sulfur coal reserves. Wyoming also leads the US in <strong className={heading}>uranium production</strong>.
        </p>
        <p>
          All of Wyoming operates on <strong className={heading}>Mountain Time (America/Denver)</strong>. There are no time zone splits within the state, making scheduling across Wyoming straightforward \u2014 unlike neighboring Idaho or South Dakota, which span two time zones.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Wyoming Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Cheyenne', detail: 'Pop. 65K \u00B7 MT \u00B7 State capital, I-25/I-80' },
          { name: 'Casper', detail: 'Pop. 59K \u00B7 MT \u00B7 Oil country hub' },
          { name: 'Laramie', detail: 'Pop. 33K \u00B7 MT \u00B7 UW, high plains city' },
          { name: 'Gillette', detail: 'Pop. 32K \u00B7 MT \u00B7 Coal capital, Powder River' },
          { name: 'Jackson', detail: 'Pop. 11K \u00B7 MT \u00B7 Jackson Hole ski resort' },
          { name: 'Rock Springs', detail: 'Pop. 23K \u00B7 MT \u00B7 Trona mining, US-191' },
        ]}
      />
    </div>
  )
}
