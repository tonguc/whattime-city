'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function IsraelClockClient() {
  const { time, date, mounted, isDST } = useClockState('Asia/Jerusalem')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Israel', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'IDT \u00B7 UTC+3' : 'IST \u00B7 UTC+2' },
          { label: isDST ? 'Summer Time (\u05e9\u05e2\u05d5\u05df \u05e7\u05d9\u05e5)' : 'Winter Time (\u05e9\u05e2\u05d5\u05df \u05d7\u05d5\u05e8\u05e3)' },
          { label: 'Jerusalem' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Standard Time', value: 'IST (UTC+2)' },
          { label: 'Daylight Saving', value: 'IDT (UTC+3) \u2014 observed' },
          { label: 'DST Rule', value: 'Friday before last Sunday Mar \u2192 last Sunday Oct' },
          { label: 'IANA Identifier', value: 'Asia/Jerusalem' },
          { label: 'Calendar Systems', value: 'Hebrew + Gregorian (dual use)' },
          { label: 'Same Zone As', value: 'Greece, Romania, Egypt (winter)' },
        ]}
      />

      <ComparisonTable
        title="Israel Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'Israel +7 hrs', summer: 'Israel +7 hrs' },
          { location: 'Los Angeles (PT)', winter: 'Israel +10 hrs', summer: 'Israel +10 hrs' },
          { location: 'London (GMT/BST)', winter: 'Israel +2 hrs', summer: 'Israel +2 hrs' },
          { location: 'Berlin (CET/CEST)', winter: 'Israel +1 hr', summer: 'Israel +1 hr' },
          { location: 'India (IST)', winter: 'Israel \u22123:30', summer: 'Israel \u22122:30' },
          { location: 'Japan (JST)', winter: 'Israel \u22127 hrs', summer: 'Israel \u22126 hrs' },
          { location: 'Silicon Valley (PT)', winter: 'Israel +10 hrs', summer: 'Israel +10 hrs' },
        ]}
      />

      <NarrativeSection title="Startup Nation: Israel\u2019s Tech Timezone Challenge" card={card} heading={heading} subText={subText}>
        <p>
          Israel has the <strong className={heading}>highest number of startups per capita</strong> in the world, with over <strong className={heading}>7,000 active tech companies</strong>. Tel Aviv is consistently ranked among the top 5 global tech ecosystems alongside Silicon Valley, London, and Singapore.
        </p>
        <p>
          The <strong className={heading}>10-hour gap with Silicon Valley</strong> is both a challenge and an opportunity. Israeli tech workers often adopt a <strong className={heading}>split schedule</strong>: normal hours for European clients (9 AM&ndash;5 PM), then a second shift from <strong className={heading}>6 PM&ndash;10 PM</strong> to overlap with US West Coast morning (8 AM&ndash;12 PM PT).
        </p>
        <p>
          This &ldquo;follow-the-sun&rdquo; model means Israeli teams hand off work to US colleagues at end of day, and receive completed work by morning &mdash; effectively creating a <strong className={heading}>24-hour development cycle</strong>.
        </p>
      </NarrativeSection>

      <NarrativeSection title="The Hebrew Calendar \u2014 Shabbat &amp; DST Complexity" card={card} heading={heading} subText={subText}>
        <p>
          Israel uses both the <strong className={heading}>Hebrew (lunisolar) calendar</strong> and the Gregorian calendar simultaneously. The Hebrew year is currently <strong className={heading}>5786&ndash;5787</strong>. Jewish holidays follow the Hebrew calendar, which means they fall on different Gregorian dates each year.
        </p>
        <p>
          <strong className={heading}>Shabbat</strong> (Saturday sabbath) begins at <strong className={heading}>sunset Friday</strong> and ends at nightfall Saturday. This sunset-based schedule means Shabbat start times shift throughout the year &mdash; from as early as <strong className={heading}>4:00 PM in December</strong> to as late as <strong className={heading}>7:45 PM in June</strong>.
        </p>
        <p>
          Israel&apos;s DST dates were historically tied to the Hebrew calendar and political negotiations between religious and secular parties. The <strong className={heading}>2013 reform</strong> standardized DST to roughly align with EU dates, ending decades of annual political battles over clock changes.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Israel\u2019s Unique Work Week" card={card} heading={heading} subText={subText}>
        <p>
          Israel&apos;s work week runs <strong className={heading}>Sunday through Thursday</strong> (or Friday noon). The weekend is <strong className={heading}>Friday&ndash;Saturday</strong> (Shabbat). This means Israel&apos;s first business day is <strong className={heading}>Sunday</strong> &mdash; when most of the world is off.
        </p>
        <p>
          For global business, this creates a unique overlap: Israel works on <strong className={heading}>Sunday when the US/Europe is closed</strong>, and is off on <strong className={heading}>Friday afternoon/Saturday when the US works</strong>. The actual overlap window for US-Israel business is roughly <strong className={heading}>Monday&ndash;Thursday</strong>.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Israeli Cities \u2014 All on IST/IDT"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Tel Aviv', detail: 'Pop. 4.1M metro \u00B7 Tech capital, \u201cSilicon Wadi\u201d' },
          { name: 'Jerusalem', detail: 'Pop. 1.3M metro \u00B7 Capital, holy city' },
          { name: 'Haifa', detail: 'Pop. 1.1M metro \u00B7 Northern hub, port, Technion' },
          { name: "Be'er Sheva", detail: 'Pop. 660K metro \u00B7 Negev, cybersecurity hub' },
          { name: 'Eilat', detail: 'Pop. 55K \u00B7 Red Sea resort, no VAT' },
          { name: 'Herzliya', detail: 'Pop. 100K \u00B7 Startup corridor, VC hub' },
        ]}
      />
    </div>
  )
}
