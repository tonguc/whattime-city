'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'
import CompareWidget from '@/components/CompareWidget'

export default function TimeConverterClient() {
  const { theme, isLight } = useCityContext()

  const cardClass = `rounded-2xl p-6 backdrop-blur-xl border ${theme.card}`
  const boxClass = isLight
    ? 'bg-white/60 border border-white/70 rounded-xl'
    : 'bg-slate-800/60 border border-slate-600/60 rounded-xl'

  return (
    <ToolPageWrapper footer={<Footer />}>
      <ToolsMiniNav />

      <div className="text-center mb-6">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
          Time Converter
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>
          Convert time between any two cities instantly
        </p>
      </div>

      <div className="mb-4">
        <CompareWidget />
      </div>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Common Use Cases</h2>
        <ul className={`space-y-3 ${theme.textMuted}`}>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Scheduling international calls</strong> — Find the right time to call colleagues, clients, or family abroad.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Planning virtual meetings</strong> — Coordinate meeting times across multiple time zones.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Travel preparation</strong> — Know what time it will be at your destination when you depart.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Remote work coordination</strong> — Align working hours with distributed team members.</div></li>
        </ul>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-3 ${theme.text}`}>Who Is This Tool For?</h2>
        <p className={theme.textMuted}>
          This tool is ideal for remote workers, international business professionals, frequent travelers, 
          and anyone who needs to coordinate across time zones. Whether you're scheduling a call with overseas 
          clients or planning when to contact family abroad, the Time Converter gives you instant answers.
        </p>
      </section>

      {/* ── Popular Time Zone Conversions ── */}
      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Popular Time Zone Conversions</h2>
        <p className={`text-sm mb-4 ${theme.textMuted}`}>Quick reference for the most common time zone pairs. DST shifts apply in the months indicated.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <th className={`text-left py-2 pr-4 font-semibold ${theme.text}`}>Conversion</th>
                <th className={`text-left py-2 pr-4 font-semibold ${theme.text}`}>Difference</th>
                <th className={`text-left py-2 font-semibold ${theme.text}`}>Example</th>
              </tr>
            </thead>
            <tbody className={`${theme.textMuted} divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
              {[
                { from: 'EST → GMT (London)', diff: '+5h winter / +4h summer', ex: '9:00 AM EST = 2:00 PM GMT' },
                { from: 'EST → IST (India)', diff: '+10h 30m', ex: '9:00 AM EST = 7:30 PM IST' },
                { from: 'EST → CST (Chicago)', diff: '−1h', ex: '9:00 AM EST = 8:00 AM CST' },
                { from: 'EST → MST (Denver)', diff: '−2h', ex: '9:00 AM EST = 7:00 AM MST' },
                { from: 'EST → PST (LA)', diff: '−3h', ex: '9:00 AM EST = 6:00 AM PST' },
                { from: 'PST → EST (New York)', diff: '+3h', ex: '9:00 AM PST = 12:00 PM EST' },
                { from: 'PST → GMT (London)', diff: '+8h winter / +7h summer', ex: '9:00 AM PST = 5:00 PM GMT' },
                { from: 'PST → IST (India)', diff: '+13h 30m winter / +12h 30m summer', ex: '9:00 AM PST = 10:30 PM IST' },
                { from: 'PST → JST (Tokyo)', diff: '+17h', ex: '9:00 AM PST = 2:00 AM JST (+1 day)' },
                { from: 'GMT → IST (India)', diff: '+5h 30m', ex: '9:00 AM GMT = 2:30 PM IST' },
                { from: 'GMT → JST (Tokyo)', diff: '+9h', ex: '9:00 AM GMT = 6:00 PM JST' },
                { from: 'GMT → AEST (Sydney)', diff: '+10h / +11h summer', ex: '9:00 AM GMT = 7:00 PM AEST' },
                { from: 'CET → EST (New York)', diff: '−6h winter / −5h summer', ex: '9:00 AM CET = 3:00 AM EST' },
                { from: 'IST → GMT (London)', diff: '−5h 30m', ex: '9:00 AM IST = 3:30 AM GMT' },
                { from: 'IST → EST (New York)', diff: '−10h 30m', ex: '9:00 AM IST = 10:30 PM EST (prev)' },
                { from: 'IST → PST (LA)', diff: '−13h 30m', ex: '9:00 AM IST = 7:30 PM PST (prev)' },
                { from: 'JST → EST (New York)', diff: '−14h', ex: '9:00 AM JST = 7:00 PM EST (prev)' },
                { from: 'AEST → GMT (London)', diff: '−10h / −11h winter', ex: '9:00 AM AEST = 11:00 PM GMT (prev)' },
              ].map(({ from, diff, ex }) => (
                <tr key={from}>
                  <td className={`py-2 pr-4 font-medium ${theme.text}`}>{from}</td>
                  <td className="py-2 pr-4 tabular-nums">{diff}</td>
                  <td className="py-2 tabular-nums">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Time Zone Quick Reference ── */}
      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Time Zone Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <th className={`text-left py-2 pr-4 font-semibold ${theme.text}`}>Abbreviation</th>
                <th className={`text-left py-2 pr-4 font-semibold ${theme.text}`}>Full Name</th>
                <th className={`text-left py-2 pr-4 font-semibold ${theme.text}`}>UTC Offset</th>
                <th className={`text-left py-2 font-semibold ${theme.text}`}>Region</th>
              </tr>
            </thead>
            <tbody className={`${theme.textMuted} divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
              {[
                { abbr: 'EST', name: 'Eastern Standard Time', offset: 'UTC−5', region: 'US East Coast (winter)' },
                { abbr: 'EDT', name: 'Eastern Daylight Time', offset: 'UTC−4', region: 'US East Coast (summer)' },
                { abbr: 'CST', name: 'Central Standard Time', offset: 'UTC−6', region: 'US Midwest (winter)' },
                { abbr: 'CDT', name: 'Central Daylight Time', offset: 'UTC−5', region: 'US Midwest (summer)' },
                { abbr: 'MST', name: 'Mountain Standard Time', offset: 'UTC−7', region: 'US Rockies (winter)' },
                { abbr: 'MDT', name: 'Mountain Daylight Time', offset: 'UTC−6', region: 'US Rockies (summer)' },
                { abbr: 'PST', name: 'Pacific Standard Time', offset: 'UTC−8', region: 'US West Coast (winter)' },
                { abbr: 'PDT', name: 'Pacific Daylight Time', offset: 'UTC−7', region: 'US West Coast (summer)' },
                { abbr: 'AKST', name: 'Alaska Standard Time', offset: 'UTC−9', region: 'Alaska (winter)' },
                { abbr: 'HST', name: 'Hawaii Standard Time', offset: 'UTC−10', region: 'Hawaii (no DST)' },
                { abbr: 'GMT', name: 'Greenwich Mean Time', offset: 'UTC+0', region: 'UK (winter), West Africa' },
                { abbr: 'BST', name: 'British Summer Time', offset: 'UTC+1', region: 'UK (summer)' },
                { abbr: 'CET', name: 'Central European Time', offset: 'UTC+1', region: 'Western Europe (winter)' },
                { abbr: 'CEST', name: 'Central European Summer Time', offset: 'UTC+2', region: 'Western Europe (summer)' },
                { abbr: 'EET', name: 'Eastern European Time', offset: 'UTC+2', region: 'Eastern Europe (winter)' },
                { abbr: 'IST', name: 'India Standard Time', offset: 'UTC+5:30', region: 'India (no DST)' },
                { abbr: 'PKT', name: 'Pakistan Standard Time', offset: 'UTC+5', region: 'Pakistan (no DST)' },
                { abbr: 'CST', name: 'China Standard Time', offset: 'UTC+8', region: 'China (no DST)' },
                { abbr: 'SGT', name: 'Singapore Standard Time', offset: 'UTC+8', region: 'Singapore (no DST)' },
                { abbr: 'JST', name: 'Japan Standard Time', offset: 'UTC+9', region: 'Japan (no DST)' },
                { abbr: 'AEST', name: 'Australian Eastern Standard Time', offset: 'UTC+10', region: 'Eastern Australia (winter)' },
                { abbr: 'AEDT', name: 'Australian Eastern Daylight Time', offset: 'UTC+11', region: 'Eastern Australia (summer)' },
              ].map(({ abbr, name, offset, region }) => (
                <tr key={abbr + offset}>
                  <td className={`py-2 pr-4 font-mono font-semibold ${theme.text}`}>{abbr}</td>
                  <td className="py-2 pr-4">{name}</td>
                  <td className="py-2 pr-4 tabular-nums font-medium">{offset}</td>
                  <td className="py-2">{region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/meeting" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Meeting Planner</div>
            <div className={`text-xs ${theme.textMuted}`}>Find overlap hours</div>
          </Link>
          <Link href="/event-time" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Event Time</div>
            <div className={`text-xs ${theme.textMuted}`}>Share event times</div>
          </Link>
          <Link href="/" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>World Clock</div>
            <div className={`text-xs ${theme.textMuted}`}>See all time zones</div>
          </Link>
        </div>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Frequently Asked Questions</h2>
        <div className={`space-y-4 ${theme.textMuted}`}>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Does this tool account for Daylight Saving Time?</h3>
            <p className="text-sm">Yes. The converter automatically adjusts for DST based on each city&apos;s current rules, using the IANA Time Zone Database.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>How accurate is the time conversion?</h3>
            <p className="text-sm">Conversions use the IANA Time Zone Database — the same source used by operating systems, browsers, and major time services worldwide.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>How do you convert UTC time to EST?</h3>
            <p className="text-sm">Subtract 5 hours from UTC to get EST (Eastern Standard Time, winter). Example: 20:00 UTC = 3:00 PM EST. During EDT (summer), subtract 4 hours.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>What is the time difference between PST and EST?</h3>
            <p className="text-sm">PST (UTC−8) is 3 hours behind EST (UTC−5). When it&apos;s 9:00 AM EST, it&apos;s 6:00 AM PST.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>What time is it in India when it is 9 AM in London?</h3>
            <p className="text-sm">When it is 9:00 AM GMT in London, it is 2:30 PM IST in India. India Standard Time is always UTC+5:30 — 5 hours 30 minutes ahead of GMT.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>What are the 4 time zones in the US?</h3>
            <p className="text-sm">Eastern (ET, UTC−5/−4), Central (CT, UTC−6/−5), Mountain (MT, UTC−7/−6), Pacific (PT, UTC−8/−7). Alaska (UTC−9) and Hawaii (UTC−10, no DST) are additional US zones.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>How do I convert London time to New York time?</h3>
            <p className="text-sm">Subtract 5 hours from London (GMT) in winter, or 4 hours in summer. Example: 3:00 PM GMT = 10:00 AM EST.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>What is the time difference between IST and PST?</h3>
            <p className="text-sm">IST (UTC+5:30) is 13 hours 30 minutes ahead of PST (UTC−8). During PDT (summer), the gap is 12 hours 30 minutes. Common for India–US West Coast tech scheduling.</p>
          </div>
        </div>
      </section>
    </ToolPageWrapper>
  )
}
