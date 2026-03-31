'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function NepalClockClient() {
  const { time, date, mounted } = useClockState('Asia/Kathmandu')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Nepal', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'NPT \u00B7 UTC+5:45 (always)', highlight: true },
          { label: 'World\u2019s Only :45 Offset!' },
          { label: 'Kathmandu' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'NPT \u2014 Nepal Time (UTC+5:45)' },
          { label: 'Unique Offset', value: 'World\'s ONLY :45 offset timezone' },
          { label: 'DST Status', value: 'Never observed' },
          { label: 'IANA Identifier', value: 'Asia/Kathmandu' },
          { label: 'Population', value: '~30 million' },
          { label: 'Famous For', value: 'Everest, Himalaya, Bikram Sambat calendar' },
        ]}
      />

      <ComparisonTable
        title="Nepal Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'NP +10:45', summer: 'NP +9:45' },
          { location: 'London (GMT/BST)', winter: 'NP +5:45', summer: 'NP +4:45' },
          { location: 'India (IST)', winter: 'NP +0:15', summer: 'NP +0:15' },
          { location: 'China (CST)', winter: 'NP \u22122:15', summer: 'NP \u22122:15' },
          { location: 'Japan (JST)', winter: 'NP \u22123:15', summer: 'NP \u22123:15' },
          { location: 'Dubai (GST)', winter: 'NP \u22121:45', summer: 'NP \u22121:45' },
        ]}
      />

      <NarrativeSection title="Why UTC+5:45? The World&apos;s Strangest Timezone Offset" card={card} heading={heading} subText={subText}>
        <p>
          Nepal is the <strong className={heading}>only country in the world with a :45 offset</strong>. Most countries use full-hour offsets, a few use :30 (India, Iran, Myanmar), but <strong className={heading}>only Nepal uses :45</strong>. This creates bizarre time math: when it&apos;s <strong className={heading}>12:00 noon in London, it&apos;s 5:45 PM in Nepal</strong>.
        </p>
        <p>
          The offset was chosen in <strong className={heading}>1986</strong> to assert Nepal&apos;s <strong className={heading}>independence from India&apos;s IST (UTC+5:30)</strong>. The <strong className={heading}>15-minute difference</strong> from India is a constant source of confusion for travelers crossing the border \u2014 every clock needs manual adjustment by an awkward 15 minutes.
        </p>
        <p>
          Before 1986, Nepal used <strong className={heading}>UTC+5:40</strong> \u2014 based on the <strong className={heading}>solar noon at the Gaurishankar peak</strong> (7,134m), a sacred mountain east of Kathmandu. The switch to +5:45 was simply for <strong className={heading}>mathematical convenience</strong> (divisible by 15).
        </p>
      </NarrativeSection>

      <NarrativeSection title="Bikram Sambat \u2014 Nepal&apos;s Calendar Is 56 Years Ahead" card={card} heading={heading} subText={subText}>
        <p>
          Nepal uses the <strong className={heading}>Bikram Sambat (BS) calendar</strong> as its official calendar \u2014 currently in <strong className={heading}>year ~2082/2083 BS</strong>. When the Gregorian world says 2026, Nepal says <strong className={heading}>2082/83</strong>. The Nepali New Year falls in <strong className={heading}>mid-April</strong> (Baisakh 1).
        </p>
        <p>
          The BS calendar has <strong className={heading}>different month lengths each year</strong> (28-32 days), making it one of the world&apos;s <strong className={heading}>most complex calendars to program</strong>. Nepali software developers must maintain <strong className={heading}>lookup tables</strong> for each year \u2014 there&apos;s no simple formula to convert between BS and Gregorian dates.
        </p>
        <p>
          Nepal&apos;s weekend is <strong className={heading}>Saturday only</strong> \u2014 one of the few countries with a <strong className={heading}>6-day workweek</strong>. Saturday is the holy day in Hindu tradition. This means when Americans have a 2-day weekend, Nepalis are working \u2014 creating <strong className={heading}>unique coordination windows</strong> for US-Nepal business.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Everest Time \u2014 Summit Windows and Climbing Schedules" card={card} heading={heading} subText={subText}>
        <p>
          Mount Everest (<strong className={heading}>8,849m, world&apos;s tallest</strong>) has a narrow <strong className={heading}>summit window</strong> in May when jet stream winds briefly abate. Climbers leave Camp 4 at <strong className={heading}>9-10 PM NPT</strong> for an overnight push, aiming to summit by <strong className={heading}>6-9 AM NPT</strong> and descend before afternoon storms.
        </p>
        <p>
          Nepal&apos;s tourism industry revolves around <strong className={heading}>trekking seasons</strong>: October-November (post-monsoon, clear skies) and March-May (pre-monsoon, rhododendron bloom). The <strong className={heading}>Annapurna Circuit</strong> and <strong className={heading}>Everest Base Camp</strong> treks attract 200,000+ trekkers annually \u2014 all navigating Nepal&apos;s unique <strong className={heading}>:45 timezone</strong>.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Nepali Cities \u2014 All on NPT (UTC+5:45)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Kathmandu', detail: 'Pop. 1.5M \u00B7 Capital, temples, Durbar Square' },
          { name: 'Pokhara', detail: 'Pop. 500K \u00B7 Trekking gateway, Phewa Lake' },
          { name: 'Lalitpur (Patan)', detail: 'Pop. 300K \u00B7 Ancient city, Newari architecture' },
          { name: 'Biratnagar', detail: 'Pop. 250K \u00B7 Eastern hub, India border trade' },
          { name: 'Bharatpur', detail: 'Pop. 200K \u00B7 Chitwan gateway, jungle safaris' },
          { name: 'Lumbini', detail: 'Sacred site \u00B7 Buddha\'s birthplace, UNESCO site' },
        ]}
      />
    </div>
  )
}
