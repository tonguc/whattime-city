'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function PhilippinesClockClient() {
  const { time, date, mounted } = useClockState('Asia/Manila')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in the Philippines', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'PHT \u00B7 UTC+8' },
          { label: 'No DST \u2014 Year-round' },
          { label: 'Manila' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'Philippine Time (PHT)' },
          { label: 'UTC Offset', value: 'UTC+8 (always)' },
          { label: 'Daylight Saving', value: 'Not observed since 1978' },
          { label: 'IANA Identifier', value: 'Asia/Manila' },
          { label: 'Population', value: '~115 million' },
          { label: 'Same Offset As', value: 'China, Singapore, Hong Kong, Taiwan, Perth' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Philippines Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>PHT (UTC+8) is constant. Differences change only when other countries observe DST.</p>
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
                  { zone: 'New York (ET)', winter: 'PHT +13 hrs', summer: 'PHT +12 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'PHT +16 hrs', summer: 'PHT +15 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'PHT +8 hrs', summer: 'PHT +7 hrs' },
                  { zone: 'India (IST)', winter: 'PHT +2:30', summer: 'PHT +2:30' },
                  { zone: 'Japan (JST)', winter: 'PHT \u22121 hr', summer: 'PHT \u22121 hr' },
                  { zone: 'Sydney (AET)', winter: 'PHT \u22123 hrs', summer: 'PHT \u22122 hrs' },
                  { zone: 'Dubai (GST)', winter: 'PHT +4 hrs', summer: 'PHT +4 hrs' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{winter}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NarrativeSection title="The Philippines: BPO Capital of the World" card={card} heading={heading} subText={subText}>
        <p>
          The Philippines is the <strong className={heading}>world&apos;s #1 destination for voice-based business process outsourcing (BPO)</strong>, surpassing India in 2010. The industry employs over <strong className={heading}>1.4 million Filipinos</strong> and generates $30+ billion annually.
        </p>
        <p>
          Being <strong className={heading}>12&ndash;16 hours ahead of the US</strong> means Filipino call center agents typically work the <strong className={heading}>graveyard shift (10 PM &ndash; 7 AM PHT)</strong> to align with US business hours. This has created a unique &ldquo;night shift culture&rdquo; in Manila and Cebu, with 24-hour restaurants, gyms, and services catering to BPO workers.
        </p>
        <p>
          The combination of <strong className={heading}>English fluency</strong> (Philippines is the 3rd largest English-speaking country), cultural affinity with the US, and competitive labor costs makes the timezone gap manageable for US companies.
        </p>
      </NarrativeSection>

      <NarrativeSection title="\u201cFilipino Time\u201d \u2014 A Cultural Phenomenon" card={card} heading={heading} subText={subText}>
        <p>
          <strong className={heading}>&ldquo;Filipino Time&rdquo;</strong> is a well-known cultural concept referring to the habit of arriving <strong className={heading}>15&ndash;30 minutes late</strong> to social gatherings. It&apos;s so ingrained that event organizers often state times as &ldquo;5:00 PM <strong className={heading}>sharp</strong>&rdquo; (meaning actually on time) versus &ldquo;5:00 PM&rdquo; (meaning 5:30 PM is fine).
        </p>
        <p>
          Interestingly, this only applies to <strong className={heading}>social situations</strong>. In the BPO industry and corporate settings, Filipino workers are known for <strong className={heading}>punctuality and reliability</strong> &mdash; the &ldquo;Filipino Time&rdquo; concept does not extend to professional life.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Best Time to Call the Philippines From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '8:00 PM \u2013 11:00 PM ET', ph: '9:00 AM \u2013 12:00 PM PHT (next day)', note: 'PH morning, US evening' },
              { label: 'US West Coast (PT)', best: '5:00 PM \u2013 8:00 PM PT', ph: '9:00 AM \u2013 12:00 PM PHT (next day)', note: 'PH morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '7:00 AM \u2013 9:00 AM ET', ph: '8:00 PM \u2013 10:00 PM PHT', note: 'PH evening, US morning' },
              { label: 'OFW Tip', best: '8:00 PM \u2013 10:00 PM ET', ph: '9:00 AM \u2013 11:00 AM PHT', note: 'Popular for OFW family calls' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold tabular-nums ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.ph}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>OFW = Overseas Filipino Workers \u2014 over 10 million Filipinos work abroad, making cross-timezone calling extremely common.</p>
        </div>
      </section>

      <CitiesGrid
        title="Major Philippine Cities \u2014 All on PHT (UTC+8)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Manila', detail: 'Pop. 14M metro \u00B7 Capital, Luzon island' },
          { name: 'Cebu City', detail: 'Pop. 3.3M metro \u00B7 Visayas hub, BPO center' },
          { name: 'Davao City', detail: 'Pop. 1.8M \u00B7 Mindanao, agricultural hub' },
          { name: 'Quezon City', detail: 'Pop. 3M \u00B7 Largest city by area in Metro Manila' },
          { name: 'Makati', detail: 'Pop. 630K \u00B7 Financial district, corporate HQ' },
          { name: 'Taguig (BGC)', detail: 'Pop. 890K \u00B7 Modern business district' },
        ]}
      />
    </div>
  )
}
