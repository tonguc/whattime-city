'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import QuickTimeFinder from './QuickTimeFinder'

interface Props {
  city: City
}

export default function CallTimesContent({ city }: Props) {
  const { isLight, setActiveCity } = useCityContext()
  
  // Update active city when component mounts to sync background with NYC's time
  useEffect(() => {
    setActiveCity(city)
  }, [city, setActiveCity])
  
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to New York Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call International Contacts from New York
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete guide to scheduling calls across all major time zones from NYC
        </p>
      </header>

      {/* Quick Time Finder */}
      <QuickTimeFinder
        currentCity="New York"
        currentTime="4:16 PM"
        cities={[
          { name: 'London', slug: 'london', time: '9:16 PM' },
          { name: 'Paris', slug: 'paris', time: '10:16 PM' },
          { name: 'Dubai', slug: 'dubai', time: '1:16 AM' },
          { name: 'Tokyo', slug: 'tokyo', time: '6:16 AM' }
        ]}
      />

      {/* Featured Snippet Section */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-3">
          <strong>For European cities (London, Paris):</strong> Call between <strong className="text-green-600 dark:text-green-400">9:00 AM - 12:00 PM EST</strong> 
          to catch their afternoon (2-5 PM local). This creates a comfortable 3-hour overlap.
        </p>
        <p className="mb-3">
          <strong>For Asian cities (Tokyo, Singapore):</strong> Call between <strong className="text-green-600 dark:text-green-400">7:00-11:00 PM EST</strong> 
          to reach their morning hours. This requires evening flexibility on your end.
        </p>
        <p className="text-sm">
          <strong>For Middle East (Dubai):</strong> Early morning (6-8 AM EST) or evening (6-11 PM EST) works best, 
          though overlap is limited.
        </p>
      </section>

      {/* Regional Breakdown */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Regional Calling Strategy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {/* Europe */}
          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇪🇺 Europe</h3>
            <p className="text-sm mb-3">
              <strong>Time difference:</strong> +5-6 hours<br />
              <strong>Best window:</strong> 9 AM - 12 PM EST<br />
              <strong>Overlap quality:</strong> Excellent (3 hours)
            </p>
            <p className="text-xs mb-2">
              <strong>Cities:</strong> London (+5h), Paris (+6h), Berlin (+6h)
            </p>
            <p className="text-xs">
              ✓ Most convenient calls from NYC<br />
              ✓ Morning your time = afternoon theirs<br />
              ⚠️ Avoid Paris lunch (6-8 AM EST)
            </p>
            <Link href="/london/guide/call-times/" className={`text-xs ${linkColor} mt-2 inline-block`}>
              → London detailed guide
            </Link>
          </div>

          {/* Middle East */}
          <div className={`p-5 rounded-xl border-2 border-amber-300 dark:border-amber-700 ${
            isLight ? 'bg-amber-50' : 'bg-amber-900/20'
          }`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🕌 Middle East</h3>
            <p className="text-sm mb-3">
              <strong>Time difference:</strong> +8-9 hours<br />
              <strong>Best window:</strong> 6-8 AM or 6-11 PM EST<br />
              <strong>Overlap quality:</strong> Challenging
            </p>
            <p className="text-xs mb-2">
              <strong>Cities:</strong> Dubai (+9h), Abu Dhabi (+9h)
            </p>
            <p className="text-xs">
              ⚠️ Limited overlap windows<br />
              ⚠️ Sunday-Thursday work week<br />
              ✓ No DST (constant difference)
            </p>
            <Link href="/dubai/guide/call-times/" className={`text-xs ${linkColor} mt-2 inline-block`}>
              → Dubai detailed guide
            </Link>
          </div>

          {/* Asia-Pacific */}
          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${
            isLight ? 'bg-red-50' : 'bg-red-900/20'
          }`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌏 Asia-Pacific</h3>
            <p className="text-sm mb-3">
              <strong>Time difference:</strong> +12-16 hours<br />
              <strong>Best window:</strong> 7-11 PM EST (or async!)<br />
              <strong>Overlap quality:</strong> Difficult
            </p>
            <p className="text-xs mb-2">
              <strong>Cities:</strong> Tokyo (+14h), Singapore (+13h), Sydney (+15-16h)
            </p>
            <p className="text-xs">
              ❌ Minimal business hour overlap<br />
              ✓ Evening NYC = morning there<br />
              💡 Consider async communication
            </p>
            <Link href="/tokyo/guide/call-times/" className={`text-xs ${linkColor} mt-2 inline-block`}>
              → Tokyo detailed guide
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Time Zone Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🕐 Complete Time Zone Reference
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">City</th>
                <th className="text-left p-3 font-medium">Hours Ahead</th>
                <th className="text-left p-3 font-medium">Your Best Call Time</th>
                <th className="text-left p-3 font-medium">Their Local Time</th>
                <th className="text-left p-3 font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className={greenBg}>
                <td className="p-3 font-medium">London</td>
                <td className="p-3">+5</td>
                <td className="p-3">9 AM - 12 PM</td>
                <td className="p-3">2 PM - 5 PM</td>
                <td className="p-3 text-green-600">Easy ✓</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">Paris</td>
                <td className="p-3">+6</td>
                <td className="p-3">9 AM - 12 PM<br /><span className="text-xs">(avoid 6-8 AM)</span></td>
                <td className="p-3">3 PM - 6 PM</td>
                <td className="p-3 text-green-600">Easy ✓</td>
              </tr>
              <tr>
                <td className="p-3">Dubai</td>
                <td className="p-3">+9</td>
                <td className="p-3">6-8 AM or 6-11 PM</td>
                <td className="p-3">3-5 PM or 3-8 AM</td>
                <td className="p-3 text-amber-600">Medium</td>
              </tr>
              <tr>
                <td className="p-3">Singapore</td>
                <td className="p-3">+13</td>
                <td className="p-3">7-11 PM</td>
                <td className="p-3">8 AM - 12 PM</td>
                <td className="p-3 text-red-600">Hard</td>
              </tr>
              <tr>
                <td className="p-3">Tokyo</td>
                <td className="p-3">+14 / +13*</td>
                <td className="p-3">7-11 PM</td>
                <td className="p-3">9 AM - 1 PM</td>
                <td className="p-3 text-red-600">Hard</td>
              </tr>
              <tr>
                <td className="p-3">Sydney</td>
                <td className="p-3">+15-16*</td>
                <td className="p-3">6-11 PM (or async!)</td>
                <td className="p-3">10 AM - 3 PM</td>
                <td className="p-3 text-red-600">Very Hard</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-xs mt-2 text-slate-500 dark:text-slate-400">
          * Time differences vary seasonally due to DST changes. Always verify current difference before scheduling.
        </p>
      </section>

      {/* DST Complexity */}
      <section className={`mb-8 p-5 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h3 className={`font-semibold mb-2 ${blueText}`}>🕐 Daylight Saving Time Complexity</h3>
        <p className="mb-3">
          <strong>Not all regions observe DST at the same time (or at all).</strong> This creates seasonal variations 
          in time differences that can catch you off guard.
        </p>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <p className="font-medium mb-1">Europe (London, Paris):</p>
            <ul className="text-xs space-y-1">
              <li>• Changes clocks in late March / late October</li>
              <li>• For 2-3 weeks, out of sync with US</li>
              <li>• London: usually +5h, briefly +4h</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-1">Asia-Pacific:</p>
            <ul className="text-xs space-y-1">
              <li>• Japan/Singapore: NO DST (constant)</li>
              <li>• Sydney: DST opposite US (Oct-Apr)</li>
              <li>• Creates seasonal variation</li>
            </ul>
          </div>
        </div>
        <p className="text-xs mt-3">
          <strong>Pro tip:</strong> Always use a time zone converter before scheduling. Don't assume you "know" the difference.
        </p>
      </section>

      {/* Async Communication */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💬 When Async Communication Makes More Sense
        </h2>
        
        <div className={`p-6 rounded-xl border-2 ${tableBorder} ${cardBg}`}>
          <p className="mb-4">
            For Asia-Pacific contacts especially, asynchronous communication often works better than struggling 
            to find overlapping call times:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>🎥 Loom Videos</h3>
              <p className="text-sm mb-1">Record your screen + voice for demos, updates, presentations.</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Project updates, walkthroughs, feedback</p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>📧 Structured Emails</h3>
              <p className="text-sm mb-1">Well-written emails with clear action items and deadlines.</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Decisions, status reports, requests</p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>📝 Collaborative Docs</h3>
              <p className="text-sm mb-1">Google Docs, Notion, or Confluence with comments and suggestions.</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Planning, editing, brainstorming</p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>💬 Slack Threads</h3>
              <p className="text-sm mb-1">Threaded conversations that don't require real-time responses.</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Quick questions, casual updates, links</p>
            </div>
          </div>

          <div className={`mt-4 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <p className="text-sm">
              <strong>💡 Hybrid Approach:</strong> Use async for routine updates and sync (live calls) for negotiations, 
              relationship building, or complex discussions. Save everyone's evening hours for what truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Cultural Considerations by Region
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Europe</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>UK:</strong> Direct, punctual, tea breaks</li>
              <li>✓ <strong>France:</strong> Respect lunch (12:30-2 PM)</li>
              <li>✓ Work-life balance valued</li>
              <li>✓ August vacations common</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Middle East</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>UAE:</strong> Sunday-Thursday work week</li>
              <li>✓ Relationship building important</li>
              <li>✓ Professional, punctual</li>
              <li>✓ Ramadan affects hours</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Asia-Pacific</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>Japan:</strong> Hierarchy, formality, after-hours culture</li>
              <li>✓ <strong>Singapore:</strong> Efficient, English-speaking</li>
              <li>✓ <strong>Australia:</strong> Strong work-life balance</li>
              <li>✓ Pre-arrange late calls</li>
            </ul>
          </div>
        </div>
      </section>

      {/* City-Specific Guides */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📚 Detailed City-Specific Guides
        </h2>
        
        <div className="grid md:grid-cols-2 gap-3">
          <Link
            href="/london/guide/call-times/"
            className={`flex items-center gap-3 p-4 rounded-lg border ${tableBorder} hover:bg-slate-100 dark:hover:bg-slate-800 transition`}
          >
            <span className="text-2xl">🇬🇧</span>
            <div>
              <span className={`font-medium ${headingColor}`}>London Call Times</span>
              <p className={`text-xs ${mutedColor}`}>+5 hours • 3-hour overlap • Easiest European connection</p>
            </div>
          </Link>

          <Link
            href="/paris/guide/call-times/"
            className={`flex items-center gap-3 p-4 rounded-lg border ${tableBorder} hover:bg-slate-100 dark:hover:bg-slate-800 transition`}
          >
            <span className="text-2xl">🇫🇷</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Paris Call Times</span>
              <p className={`text-xs ${mutedColor}`}>+6 hours • Avoid lunch break • French business culture</p>
            </div>
          </Link>

          <Link
            href="/dubai/guide/call-times/"
            className={`flex items-center gap-3 p-4 rounded-lg border ${tableBorder} hover:bg-slate-100 dark:hover:bg-slate-800 transition`}
          >
            <span className="text-2xl">🇦🇪</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Dubai Call Times</span>
              <p className={`text-xs ${mutedColor}`}>+9 hours • Sunday-Thursday week • Limited overlap</p>
            </div>
          </Link>

          <Link
            href="/singapore/guide/call-times/"
            className={`flex items-center gap-3 p-4 rounded-lg border ${tableBorder} hover:bg-slate-100 dark:hover:bg-slate-800 transition`}
          >
            <span className="text-2xl">🇸🇬</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Singapore Call Times</span>
              <p className={`text-xs ${mutedColor}`}>+13 hours • Evening calls • Consider async</p>
            </div>
          </Link>

          <Link
            href="/tokyo/guide/call-times/"
            className={`flex items-center gap-3 p-4 rounded-lg border ${tableBorder} hover:bg-slate-100 dark:hover:bg-slate-800 transition`}
          >
            <span className="text-2xl">🇯🇵</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Tokyo Call Times</span>
              <p className={`text-xs ${mutedColor}`}>+14/13 hours • Japanese work culture • Hierarchy important</p>
            </div>
          </Link>

          <Link
            href="/sydney/guide/call-times/"
            className={`flex items-center gap-3 p-4 rounded-lg border ${tableBorder} hover:bg-slate-100 dark:hover:bg-slate-800 transition`}
          >
            <span className="text-2xl">🇦🇺</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Sydney Call Times</span>
              <p className={`text-xs ${mutedColor}`}>+15-16 hours • Opposite DST • Work-life balance culture</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Tools */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🛠️ Helpful Tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/tools/meeting-planner/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Meeting Planner</span>
              <p className={`text-xs ${mutedColor}`}>Find overlap for multiple time zones</p>
            </div>
          </Link>
          <Link
            href="/tools/converter/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🔄</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Time Converter</span>
              <p className={`text-xs ${mutedColor}`}>Convert between any two cities</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
