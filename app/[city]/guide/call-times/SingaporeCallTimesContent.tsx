'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import QuickTimeFinder from './QuickTimeFinder'

interface Props {
  city: City
}

export default function SingaporeCallTimesContent({ city }: Props) {
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Singapore from New York
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Managing the 13-hour time difference with Asia-Pacific's business hub
        </p>
      </header>

      {/* Quick Time Finder */}
      <QuickTimeFinder
        currentCity="Singapore"
        currentTime="5:16 AM"
        cities={[
          { name: 'New York', slug: 'new-york', time: '4:16 PM' },
          { name: 'Tokyo', slug: 'tokyo', time: '6:16 AM' },
          { name: 'Sydney', slug: 'sydney', time: '8:16 AM' },
          { name: 'Dubai', slug: 'dubai', time: '1:16 AM' }
        ]}
      />

      {/* Featured Snippet Section */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-3">
          <strong>Singapore is 13 hours ahead of New York</strong> (12 hours when NYC observes daylight saving time). 
          The best time for business calls is <strong className="text-green-600 dark:text-green-400">7:00 PM - 11:00 PM EST</strong>, 
          which reaches Singapore during their morning hours (8:00 AM - 12:00 PM SGT next day).
        </p>
        <p className="text-sm">
          <strong>Alternative:</strong> Early morning NYC (6:00-8:00 AM EST) catches Singapore's evening (7:00-9:00 PM SGT), 
          but this is after standard business hours.
        </p>
      </section>

      {/* Best Times Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Best Calling Windows
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Your Time (NYC)</th>
                <th className="text-left p-3 font-medium">Singapore Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">6:00 AM - 8:00 AM</td>
                <td className="p-3">7:00 PM - 9:00 PM</td>
                <td className="p-3 text-amber-600">⚠️ After hours (personal/urgent only)</td>
              </tr>
              <tr>
                <td className="p-3">9:00 AM - 6:00 PM</td>
                <td className="p-3">10:00 PM - 7:00 AM</td>
                <td className="p-3 text-red-600">❌ Night/very early morning</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">7:00 PM - 11:00 PM</td>
                <td className="p-3 font-medium">8:00 AM - 12:00 PM (next day)</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Morning Singapore</strong></td>
              </tr>
              <tr>
                <td className="p-3">11:01 PM - 2:00 AM</td>
                <td className="p-3">12:01 PM - 3:00 PM</td>
                <td className="p-3 text-amber-600">✅ Good (but very late for you!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Warning */}
      <section className={`mb-8 p-5 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h3 className={`font-semibold mb-2 ${blueText}`}>🕐 Time Difference Alert</h3>
        <p className="mb-2">
          <strong>Singapore does NOT observe daylight saving time.</strong> Singapore Time (SGT, UTC+8) remains constant year-round.
        </p>
        <p className="text-sm">
          When NYC switches to EDT in March, the difference becomes 12 hours instead of 13. When NYC returns to EST in November, 
          the gap returns to 13 hours. The good news: this actually improves your calling window slightly during US summer!
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Coordinating calls between New York and Singapore requires significant schedule flexibility due to the 13-hour 
          time difference. There is essentially no overlap between standard 9-to-5 business hours in both cities — when 
          NYC wakes up, Singapore is winding down, and when Singapore starts their workday, NYC is sleeping.
        </p>
        <p>
          Singapore is the financial and tech hub of Southeast Asia, with a highly efficient, English-speaking business 
          environment. Many professionals in Singapore are accustomed to late evening or early morning calls with US contacts, 
          especially in tech, finance, and international business sectors. The key is finding a mutually acceptable time and 
          sticking to it consistently.
        </p>
        <p>
          This guide covers practical strategies for reaching Singapore contacts, understanding their work culture, and 
          making the most of limited overlap opportunities between the two financial capitals.
        </p>
      </section>

      {/* Detailed Analysis */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Understanding the Time Gap
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Evening NYC (7-11 PM EST)</h3>
            <p className="mb-2">
              <strong>Singapore time:</strong> 8 AM - 12 PM (morning, next day)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Catches Singapore professionals at the start of their day when they're fresh and responsive. 
              This is the most practical window for regular business calls.
            </p>
            <p className="text-sm">
              <strong>Cons:</strong> Late for you. Best for scheduled standing calls rather than ad-hoc conversations.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Very Late NYC (11 PM - 2 AM EST)</h3>
            <p className="mb-2">
              <strong>Singapore time:</strong> 12 PM - 3 PM (midday)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Mid-day Singapore, post-lunch when energy returns.
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              <strong>Cons:</strong> Extremely late for you. Only viable for critical issues or pre-arranged calls.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Early Morning NYC (6-8 AM EST)</h3>
            <p className="mb-2">
              <strong>Singapore time:</strong> 7-9 PM (evening)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Catches Singapore professionals before they sign off, though many have already left.
            </p>
            <p className="text-sm">
              <strong>Cons:</strong> After standard business hours. Better for personal calls or urgent matters with contacts 
              who work late.
            </p>
          </div>
        </div>
      </section>

      {/* Async Communication */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💬 When Async Makes Sense
        </h2>
        
        <div className={`p-6 rounded-xl border-2 ${tableBorder} ${cardBg}`}>
          <p className="mb-4">
            Given the challenging time difference, consider asynchronous communication for routine updates:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>🎥 Video Messages</h3>
              <p className="text-sm mb-2">Tools like Loom or Slack video messages let you share updates without live calls.</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Project updates, presentations, demos</p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>📧 Detailed Emails</h3>
              <p className="text-sm mb-2">Well-structured emails can replace many calls when thoughtfully written.</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Status reports, decisions, action items</p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>📝 Shared Documents</h3>
              <p className="text-sm mb-2">Google Docs/Notion with comments enable async collaboration.</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Editing, planning, brainstorming</p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>🔄 Rotating Schedule</h3>
              <p className="text-sm mb-2">Alternate who takes the inconvenient time slot (fairness matters!).</p>
              <p className="text-xs text-green-600 dark:text-green-400">✓ Best for: Regular team syncs, weekly check-ins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reverse Direction */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Calling NYC from Singapore
        </h2>
        
        <p className="mb-4">
          If you're in Singapore calling New York contacts:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Your Time (Singapore)</th>
                <th className="text-left p-3 font-medium">NYC Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">9:00 AM - 2:00 PM</td>
                <td className="p-3">8:00 PM - 1:00 AM</td>
                <td className="p-3 text-red-600">❌ Too late in NYC</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">10:00 PM - 2:00 AM</td>
                <td className="p-3 font-medium">9:00 AM - 1:00 PM</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Morning NYC</strong></td>
              </tr>
              <tr>
                <td className="p-3">7:00 PM - 9:00 PM</td>
                <td className="p-3">6:00 AM - 8:00 AM</td>
                <td className="p-3 text-amber-600">⚠️ Early, but workable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Pro tip:</strong> Many Singapore tech companies have employees work late hours (10 PM - 2 AM SGT) 
            specifically to overlap with US business hours. If you're in such a role, coordinate with your NYC contacts 
            for 10-11 PM SGT calls (9-10 AM NYC).
          </p>
        </div>
      </section>

      {/* Comparison with Other Cities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌐 Singapore vs Other Major Cities (NYC Perspective)
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">City</th>
                <th className="text-left p-3 font-medium">Hours Ahead</th>
                <th className="text-left p-3 font-medium">Best NYC Call Time</th>
                <th className="text-left p-3 font-medium">Overlap Quality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">London</td>
                <td className="p-3">+5</td>
                <td className="p-3">9 AM - 12 PM</td>
                <td className="p-3 text-green-600">Excellent (3h)</td>
              </tr>
              <tr>
                <td className="p-3">Paris</td>
                <td className="p-3">+6</td>
                <td className="p-3">9 AM - 12 PM</td>
                <td className="p-3 text-green-600">Excellent (3h)</td>
              </tr>
              <tr>
                <td className="p-3">Dubai</td>
                <td className="p-3">+9</td>
                <td className="p-3">6-8 AM or 6-11 PM</td>
                <td className="p-3 text-amber-600">Challenging</td>
              </tr>
              <tr className="bg-amber-100 dark:bg-slate-600 font-semibold">
                <td className="p-3 font-medium">Singapore</td>
                <td className="p-3 font-medium">+13</td>
                <td className="p-3 font-medium">7-11 PM</td>
                <td className="p-3 text-red-600 font-medium">Difficult</td>
              </tr>
              <tr>
                <td className="p-3">Tokyo</td>
                <td className="p-3">+14</td>
                <td className="p-3">7-11 PM</td>
                <td className="p-3 text-red-600">Difficult</td>
              </tr>
              <tr>
                <td className="p-3">Sydney</td>
                <td className="p-3">+15-16</td>
                <td className="p-3">6-11 PM</td>
                <td className="p-3 text-red-600">Very Difficult</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Singapore Work Culture */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🇸🇬 Singapore Business Culture Tips
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Work Ethic</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Highly efficient, results-oriented</li>
              <li>✓ Punctuality is critical</li>
              <li>✓ Long hours common (especially tech/finance)</li>
              <li>✓ English is primary business language</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Business Hours</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>9:00 AM - 6:00 PM SGT</strong> (standard)</li>
              <li>✓ Tech companies: flexible, often 8:30 AM - 5:30 PM</li>
              <li>✓ Many work late for US overlap</li>
              <li>✓ Lunch: 12-1 PM (not as sacred as Europe)</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Communication Style</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Direct but polite</li>
              <li>✓ Hierarchy respected (but not rigid)</li>
              <li>✓ Face-saving important (avoid public criticism)</li>
              <li>✓ Written communication valued</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Best Practices</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Schedule calls well in advance</li>
              <li>✓ Be on time (no "fashionably late")</li>
              <li>✓ Send agenda beforehand</li>
              <li>✓ Follow up with written summary</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ❓ Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What is the best time to call Singapore from New York?</h3>
            <p className="text-sm">
              Between 7:00 PM and 11:00 PM EST, which reaches Singapore during their morning (8 AM - 12 PM SGT, next day). 
              This is when Singapore professionals are fresh and available. Early morning NYC (6-8 AM EST) is an alternative 
              but reaches Singapore after standard business hours.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How many hours is Singapore ahead of New York?</h3>
            <p className="text-sm">
              Singapore is 13 hours ahead when NYC is on EST (winter), and 12 hours ahead when NYC is on EDT (summer). 
              Singapore does not observe daylight saving time, remaining on SGT (UTC+8) year-round.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Should I use async communication instead of calls?</h3>
            <p className="text-sm">
              For routine updates, yes! Video messages (Loom), detailed emails, and shared documents work well for 
              NYC-Singapore collaboration. Reserve live calls for important discussions, negotiations, or relationship building. 
              Consider rotating who takes the inconvenient time slot for regular team calls.
            </p>
          </div>
        </div>
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
              <span className={`font-medium ${headingColor}`}>Singapore Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>Complete schedule guide</p>
            </div>
          </Link>
          <Link
            href="/meeting/"
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
