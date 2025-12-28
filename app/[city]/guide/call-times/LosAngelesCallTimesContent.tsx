'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import QuickTimeFinder from './QuickTimeFinder'

interface Props {
  city: City
}

export default function LosAngelesCallTimesContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const greenBg = isLight ? 'bg-green-50' : 'bg-green-900/20'
  const blueBg = isLight ? 'bg-blue-50' : 'bg-blue-900/20'
  const blueText = isLight ? 'text-blue-700' : 'text-blue-300'
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call International Contacts from Los Angeles
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete guide to scheduling calls across all major time zones from LA
        </p>
      </header>

      {/* Featured Snippet Section */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-3">
          <strong>For East Coast cities (New York):</strong> Call between <strong className="text-green-600 dark:text-green-400">6:00 AM - 3:00 PM PST</strong> 
          to catch their business hours (9 AM - 6 PM EST). The 3-hour difference makes early LA mornings ideal.
        </p>
        <p className="mb-3">
          <strong>For European cities (London, Paris):</strong> Call between <strong className="text-green-600 dark:text-green-400">12:00 AM - 4:00 AM PST</strong> 
          for their afternoon (9 AM - 1 PM local). Alternatively, <strong className="text-green-600 dark:text-green-400">late afternoon LA time (4-6 PM PST)</strong> catches them early next morning.
        </p>
        <p className="text-sm">
          <strong>For Asian cities (Tokyo, Singapore):</strong> Evening LA time <strong className="text-green-600 dark:text-green-400">4:00-8:00 PM PST</strong> 
          reaches their morning hours next day. Or early LA morning (5-7 AM PST) for their late evening.
        </p>
      </section>

      {/* Quick Time Finder */}
      <QuickTimeFinder
        currentCity="Los Angeles"
        currentTime="1:16 PM"
        cities={[
          { name: 'New York', slug: 'new-york', time: '4:16 PM' },
          { name: 'London', slug: 'london', time: '9:16 PM' },
          { name: 'Tokyo', slug: 'tokyo', time: '6:16 AM' },
          { name: 'Sydney', slug: 'sydney', time: '8:16 AM' }
        ]}
      />

      {/* Regional Breakdown */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Regional Calling Strategy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {/* East Coast US */}
          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇺🇸 East Coast</h3>
            <p className="text-sm mb-3">
              <strong>Time difference:</strong> -3 hours<br />
              <strong>Best window:</strong> 6 AM - 3 PM PST<br />
              <strong>Overlap quality:</strong> Excellent (9 hours)
            </p>
            <p className="text-xs mb-2">
              <strong>Cities:</strong> New York, Boston, Miami
            </p>
            <p className="text-xs">
              ✓ Perfect overlap all day long<br />
              ✓ Your morning = their afternoon<br />
              ✓ Most convenient for daily calls
            </p>
          </div>

          {/* Europe */}
          <div className={`p-5 rounded-xl border-2 border-amber-300 dark:border-amber-700 ${
            isLight ? 'bg-amber-50' : 'bg-amber-900/20'
          }`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇪🇺 Europe</h3>
            <p className="text-sm mb-3">
              <strong>Time difference:</strong> -8 to -9 hours<br />
              <strong>Best window:</strong> 12-4 AM or 4-6 PM PST<br />
              <strong>Overlap quality:</strong> Poor
            </p>
            <p className="text-xs mb-2">
              <strong>Cities:</strong> London (-8h), Paris (-9h)
            </p>
            <p className="text-xs">
              ⚠️ Very early LA mornings needed<br />
              ⚠️ Or late LA afternoon = their early AM<br />
              → Consider async communication
            </p>
          </div>

          {/* Asia-Pacific */}
          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${
            isLight ? 'bg-red-50' : 'bg-red-900/20'
          }`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌏 Asia-Pacific</h3>
            <p className="text-sm mb-3">
              <strong>Time difference:</strong> -17 to -19 hours<br />
              <strong>Best window:</strong> 4-8 PM PST<br />
              <strong>Overlap quality:</strong> Challenging
            </p>
            <p className="text-xs mb-2">
              <strong>Cities:</strong> Tokyo (-17h), Singapore (-16h), Sydney (-19h)
            </p>
            <p className="text-xs">
              ❌ Nearly opposite schedules<br />
              ❌ Evening calls from LA required<br />
              → Async strongly recommended
            </p>
          </div>
        </div>
      </section>

      {/* Time Zone Reference Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📊 Complete Time Zone Reference
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">City</th>
                <th className="text-left p-3 font-medium">Time Diff</th>
                <th className="text-left p-3 font-medium">When LA is 9 AM</th>
                <th className="text-left p-3 font-medium">Best Call Time (PST)</th>
                <th className="text-left p-3 font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-green-50 dark:bg-green-900/20">
                <td className="p-3 font-medium">New York</td>
                <td className="p-3">-3h</td>
                <td className="p-3">12:00 PM (noon)</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">6 AM - 3 PM</strong></td>
                <td className="p-3">✅ Easy</td>
              </tr>
              <tr>
                <td className="p-3">London</td>
                <td className="p-3">-8h</td>
                <td className="p-3">5:00 PM (same day)</td>
                <td className="p-3">12-4 AM or 4-6 PM</td>
                <td className="p-3">⚠️ Hard</td>
              </tr>
              <tr>
                <td className="p-3">Paris</td>
                <td className="p-3">-9h</td>
                <td className="p-3">6:00 PM (same day)</td>
                <td className="p-3">12-3 AM or 4-6 PM</td>
                <td className="p-3">⚠️ Hard</td>
              </tr>
              <tr>
                <td className="p-3">Dubai</td>
                <td className="p-3">-12h</td>
                <td className="p-3">9:00 PM (same day)</td>
                <td className="p-3">9 PM - 1 AM or 5-7 AM</td>
                <td className="p-3">❌ Very Hard</td>
              </tr>
              <tr>
                <td className="p-3">Singapore</td>
                <td className="p-3">-16h</td>
                <td className="p-3">1:00 AM (next day)</td>
                <td className="p-3">4-8 PM</td>
                <td className="p-3">❌ Very Hard</td>
              </tr>
              <tr>
                <td className="p-3">Tokyo</td>
                <td className="p-3">-17h</td>
                <td className="p-3">2:00 AM (next day)</td>
                <td className="p-3">4-8 PM</td>
                <td className="p-3">❌ Very Hard</td>
              </tr>
              <tr>
                <td className="p-3">Sydney</td>
                <td className="p-3">-19h</td>
                <td className="p-3">4:00 AM (next day)</td>
                <td className="p-3">3-7 PM</td>
                <td className="p-3">❌ Extremely Hard</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Warning */}
      <section className={`mb-8 p-5 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h3 className={`font-semibold mb-2 ${blueText}`}>🕐 DST Complexity Alert</h3>
        <p className="mb-2">
          <strong>The US, Europe, and other regions change clocks on different dates.</strong> This creates 
          temporary shifts in time differences for 2-3 weeks in March/April and October/November.
        </p>
        <p className="text-sm mb-3">
          • <strong>US → Europe:</strong> LA switches to PDT in mid-March. London switches to BST in late March. 
          Between these dates, the time difference shifts by 1 hour.<br />
          • <strong>Australia:</strong> Sydney switches in opposite season (October vs March), creating a 
          variable 18-19 hour difference depending on month.
        </p>
        <p className="text-sm">
          <strong>Pro tip:</strong> Use our{' '}
          <Link href="/tools/converter/" className={linkColor}>Time Zone Converter</Link> for exact 
          calculations during DST transition periods.
        </p>
      </section>

      {/* Async Communication Section */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💬 When Async Communication Works Better
        </h2>
        <p className="mb-4">
          For teams working across LA and Asia-Pacific or Europe, <strong>asynchronous communication</strong> can 
          be more effective than struggling to find overlapping hours.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>📹 Video Updates</h3>
            <p className="text-sm mb-2">
              Tools like Loom or Slack clips let you record updates on your schedule and let colleagues watch 
              on theirs. Perfect for project updates, demos, or feedback.
            </p>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>📝 Written Docs</h3>
            <p className="text-sm mb-2">
              Detailed write-ups in Notion, Google Docs, or Confluence ensure everyone has context without 
              requiring live meetings. Add comments for discussion.
            </p>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>📧 Email Threads</h3>
            <p className="text-sm mb-2">
              Well-structured email discussions with clear action items let teams collaborate across time zones 
              without synchronous calls.
            </p>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🔄 Rotating Schedule</h3>
            <p className="text-sm mb-2">
              For critical sync meetings, alternate who sacrifices: Week 1 = LA takes early call (6 AM), 
              Week 2 = London takes late call (7 PM).
            </p>
          </div>
        </div>
      </section>

      {/* LA-Specific Tips */}
      <section className={`mb-10 p-6 rounded-2xl border-l-4 border-amber-500 ${
        isLight ? 'bg-amber-50' : 'bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🌴 LA-Specific Calling Tips
        </h2>
        <ul className="space-y-3">
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            <span><strong>West Coast culture starts later:</strong> Many LA offices don't start until 9-10 AM PST. 
            Don't schedule 8 AM PST calls expecting full attendance.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            <span><strong>Entertainment industry lunch:</strong> 12:30-2:30 PM PST is sacred lunch time in 
            Hollywood. Avoid scheduling calls during this window if working with entertainment professionals.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            <span><strong>Friday afternoons:</strong> LA empties out early on Fridays, especially in summer. 
            By 3 PM PST, many Westside offices have cleared out.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            <span><strong>Traffic affects availability:</strong> LA traffic is legendary. People commuting from 
            the Valley or South Bay may not be available until 9:30-10 AM, and may leave early (4-5 PM) to beat traffic.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            <span><strong>Tech startup hours:</strong> Silicon Beach (Santa Monica, Venice, Playa Vista) startups 
            often keep later hours than traditional businesses. 6-7 PM PST calls are common.</span>
          </li>
        </ul>
      </section>

      {/* Related Resources */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          📚 Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🏢</span>
            <div>
              <span className={`font-medium ${headingColor}`}>LA Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>Complete schedule guide</p>
            </div>
          </Link>
          <Link
            href="/tools/meeting-planner/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Meeting Planner</span>
              <p className={`text-xs ${mutedColor}`}>Find the perfect time</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
