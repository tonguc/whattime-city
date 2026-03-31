'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function EthiopiaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Addis_Ababa')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Ethiopia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT · UTC+3 (always)' },
          { label: 'Different Calendar & Clock!', highlight: true },
          { label: 'Addis Ababa' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Ethiopia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EAT — East Africa Time (UTC+3)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Africa/Addis_Ababa' },
              { label: 'Population', value: '~126 million (2nd in Africa)' },
              { label: 'Calendar', value: 'Ethiopian calendar — 7-8 years behind!' },
              { label: 'Clock System', value: '12-hour cycle starting at sunrise (6 AM)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethiopia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ethiopia Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Ethiopia +8 hrs', summer: 'Ethiopia +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Ethiopia +11 hrs', summer: 'Ethiopia +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Ethiopia +3 hrs', summer: 'Ethiopia +2 hrs' },
                  { zone: 'Dubai (GST)', winter: 'Ethiopia −1 hr', summer: 'Ethiopia −1 hr' },
                  { zone: 'India (IST)', winter: 'Ethiopia −2:30', summer: 'Ethiopia −2:30' },
                  { zone: 'Kenya (EAT)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Ethiopian Calendar */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Ethiopian Calendar — It&apos;s a Different Year Here</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ethiopia uses the <strong className={heading}>Ethiopian calendar (Ge&apos;ez calendar)</strong>, which is <strong className={heading}>7-8 years behind</strong> the Gregorian calendar. When the rest of the world celebrated the year 2000, Ethiopia marked it on <strong className={heading}>September 12, 2007</strong> (Gregorian). The current Ethiopian year is roughly <strong className={heading}>2018</strong>.
            </p>
            <p>
              The Ethiopian calendar has <strong className={heading}>13 months</strong>: 12 months of 30 days each, plus <strong className={heading}>Pagum&eacute;</strong> — a 13th month of 5 days (6 in a leap year). This is why Ethiopian Airlines&apos; famous slogan is <strong className={heading}>&ldquo;Thirteen Months of Sunshine&rdquo;</strong>.
            </p>
            <p>
              The Ethiopian New Year (<strong className={heading}>Enkutatash</strong>) falls on <strong className={heading}>September 11</strong> (or 12 in leap years) in the Gregorian calendar. The calendar difference comes from a different calculation of the Annunciation of Jesus — Ethiopia follows the ancient Alexandrian computation.
            </p>
          </div>
        </div>
      </section>

      {/* Ethiopian Clock */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ethiopian Clock — When 7 AM Is &ldquo;1 O&apos;Clock&rdquo;</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Like Swahili time in Kenya, Ethiopia uses a <strong className={heading}>sunrise-based 12-hour clock</strong>. The day starts at <strong className={heading}>sunrise (~6:00 AM)</strong>, so:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className={heading}>7:00 AM</strong> = 1 o&apos;clock (s&auml;at and)</li>
              <li><strong className={heading}>12:00 PM (noon)</strong> = 6 o&apos;clock</li>
              <li><strong className={heading}>1:00 PM</strong> = 7 o&apos;clock</li>
              <li><strong className={heading}>6:00 PM (sunset)</strong> = 12 o&apos;clock → cycle resets for night</li>
            </ul>
            <p>
              This causes constant confusion for travelers. If an Ethiopian says a meeting is at &ldquo;3 o&apos;clock,&rdquo; they might mean <strong className={heading}>9:00 AM</strong> (Ethiopian time) or <strong className={heading}>3:00 PM</strong> (international time). Always clarify: <strong className={heading}>&ldquo;Ethiopian time or faranji (foreign) time?&rdquo;</strong>
            </p>
            <p>
              Ethiopian phones and Google typically show <strong className={heading}>international time</strong>, but many Ethiopians mentally convert. The system makes perfect sense at the equator where sunrise/sunset are remarkably consistent year-round.
            </p>
          </div>
        </div>
      </section>

      {/* AU & Coffee */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Birthplace of Coffee & Seat of the African Union</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ethiopia is the <strong className={heading}>birthplace of coffee</strong> — the legend says a goatherd named Kaldi noticed his goats dancing after eating coffee cherries in <strong className={heading}>Kaffa region</strong> (yes, that&apos;s where the word &ldquo;coffee&rdquo; comes from). The Ethiopian coffee ceremony (<strong className={heading}>Buna</strong>) is a 1-2 hour ritual involving roasting, grinding, and three rounds of coffee — it&apos;s a daily social institution.
            </p>
            <p>
              Addis Ababa hosts the <strong className={heading}>African Union headquarters</strong> — making Ethiopia the diplomatic capital of Africa. The AU building (funded by China) coordinates across <strong className={heading}>55 African nations and 6 time zones</strong>. Addis is also the base for <strong className={heading}>Ethiopian Airlines</strong> — Africa&apos;s largest and most profitable airline, connecting the continent to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Ethiopian Cities — All on EAT (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Addis Ababa', pop: '5.5M', note: 'Capital, AU HQ, 2,400m altitude' },
              { city: 'Dire Dawa', pop: '500K', note: 'Eastern hub, French-built railway' },
              { city: 'Adama (Nazret)', pop: '450K', note: 'Industrial, Rift Valley edge' },
              { city: 'Hawassa', pop: '400K', note: 'Sidama capital, tech park planned' },
              { city: 'Gondar', pop: '360K', note: 'Historic "Camelot of Africa"' },
              { city: 'Bahir Dar', pop: '340K', note: 'Lake Tana, Blue Nile source' },
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
