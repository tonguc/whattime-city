'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import QuickTimeFinder from './QuickTimeFinder'

interface Props {
  city: City
}

export default function DubaiCallTimesContent({ city }: Props) {
  const { isLight, setActiveCity } = useCityContext()
  
  // Update active city when component mounts to sync background with Dubai's time
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Dubai from New York
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Navigate the 9-hour time difference between NYC and Dubai for effective business calls
        </p>
      </header>

      {/* Quick Time Finder */}
      <QuickTimeFinder
        currentCity="Dubai"
        currentTime="1:16 AM"
        cities={[
          { name: 'New York', slug: 'new-york', time: '4:16 PM' },
          { name: 'London', slug: 'london', time: '9:16 PM' },
          { name: 'Singapore', slug: 'singapore', time: '5:16 AM' },
          { name: 'Tokyo', slug: 'tokyo', time: '6:16 AM' }
        ]}
      />

      {/* Featured Snippet Section */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-3">
          <strong>Dubai is 9 hours ahead of New York year-round</strong> (UAE does not observe DST). 
          The best time for business calls is between <strong className="text-green-600 dark:text-green-400">6:00-8:00 AM EST</strong> (reaches Dubai 3-5 PM) 
          or <strong className="text-green-600 dark:text-green-400">6:00-11:00 PM EST</strong> (reaches Dubai early morning, 3-8 AM next day).
        </p>
        <p className="text-sm">
          <strong>Note:</strong> Dubai's work week is Sunday-Thursday. Friday and Saturday are the weekend in the UAE.
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
                <th className="text-left p-3 font-medium">Dubai Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">12:00 AM - 5:00 AM</td>
                <td className="p-3">9:00 AM - 2:00 PM</td>
                <td className="p-3 text-amber-600">✅ Perfect for business (but very early for you!)</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">6:00 AM - 8:00 AM</td>
                <td className="p-3 font-medium">3:00 PM - 5:00 PM</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Afternoon Dubai time</strong></td>
              </tr>
              <tr>
                <td className="p-3">9:00 AM - 5:00 PM</td>
                <td className="p-3">6:00 PM - 2:00 AM</td>
                <td className="p-3 text-red-600">❌ After business hours in Dubai</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">6:00 PM - 11:00 PM</td>
                <td className="p-3 font-medium">3:00 AM - 8:00 AM (next day)</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ GOOD - Early morning Dubai</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Warning */}
      <section className={`mb-8 p-5 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h3 className={`font-semibold mb-2 ${blueText}`}>🕐 Time Difference Alert</h3>
        <p className="mb-2">
          <strong>Dubai does NOT observe daylight saving time.</strong> The UAE stays on Gulf Standard Time (GST, UTC+4) year-round.
        </p>
        <p className="text-sm">
          When New York switches to EDT in March, the difference becomes 8 hours instead of 9 hours. 
          When NYC switches back to EST in November, it returns to 9 hours. Always verify current time difference before scheduling!
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Coordinating calls between New York and Dubai can be challenging due to the 9-hour time difference and 
          different work weeks. Dubai operates Sunday through Thursday, with Friday and Saturday as the weekend – 
          a critical detail many NYC-based professionals overlook.
        </p>
        <p>
          The UAE's business culture is professional and punctual. Unlike some Middle Eastern countries, Dubai runs 
          on a tight schedule with meetings starting exactly on time. However, the lack of overlap with NYC's standard 
          9-5 workday means you'll need to be flexible with your calling schedule.
        </p>
        <p>
          This guide covers practical strategies for reaching Dubai contacts, understanding UAE work culture, and 
          making the most of the limited overlap windows between the two cities.
        </p>
      </section>

      {/* Detailed Analysis */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Understanding the Time Gap
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Early Morning NYC (6-8 AM EST)</h3>
            <p className="mb-2">
              <strong>Dubai time:</strong> 3-5 PM (afternoon)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Catches Dubai professionals before end of workday. They're wrapping up but still available.
            </p>
            <p className="text-sm">
              <strong>Cons:</strong> Very early for you. Consider this for your most important Dubai contacts only.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Evening NYC (6-11 PM EST)</h3>
            <p className="mb-2">
              <strong>Dubai time:</strong> 3-8 AM (early morning, next day)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Reaches Dubai professionals at the start of their workday when they're fresh and responsive.
            </p>
            <p className="text-sm">
              <strong>Cons:</strong> Late for you. Best for scheduled calls, not impromptu conversations.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Middle of Your Workday (9 AM - 5 PM EST)</h3>
            <p className="mb-2">
              <strong>Dubai time:</strong> 6 PM - 2 AM (evening/night)
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              <strong>Avoid:</strong> This is after hours in Dubai. Only for emergency contacts who you've coordinated with in advance.
            </p>
          </div>
        </div>
      </section>

      {/* Reverse Direction */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Calling NYC from Dubai
        </h2>
        
        <p className="mb-4">
          If you're in Dubai calling New York contacts, here's the reverse perspective:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Your Time (Dubai)</th>
                <th className="text-left p-3 font-medium">NYC Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">9:00 AM - 2:00 PM</td>
                <td className="p-3">12:00 AM - 5:00 AM</td>
                <td className="p-3 text-red-600">❌ Too early in NYC</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">3:00 PM - 6:00 PM</td>
                <td className="p-3 font-medium">6:00 AM - 9:00 AM</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Early morning NYC</strong></td>
              </tr>
              <tr>
                <td className="p-3">7:00 PM onwards</td>
                <td className="p-3">10:00 AM onwards</td>
                <td className="p-3 text-amber-600">✅ Good, but you're after hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Pro tip:</strong> Most Dubai professionals are accustomed to late afternoon calls with NYC contacts. 
            Scheduling standing calls at 4-5 PM Dubai time (7-8 AM NYC) works well for regular check-ins.
          </p>
        </div>
      </section>

      {/* Comparison with Other Cities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌐 Dubai vs Other Major Cities (NYC Perspective)
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
              <tr className="bg-amber-100 dark:bg-slate-600 font-semibold">
                <td className="p-3 font-medium">Dubai</td>
                <td className="p-3 font-medium">+9</td>
                <td className="p-3 font-medium">6-8 AM or 6-11 PM</td>
                <td className="p-3 text-amber-600 font-medium">Challenging</td>
              </tr>
              <tr>
                <td className="p-3">Singapore</td>
                <td className="p-3">+13</td>
                <td className="p-3">7-11 PM</td>
                <td className="p-3 text-red-600">Difficult</td>
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

      {/* UAE Work Culture */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏢 UAE Business Culture Tips
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Work Week</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>Sunday-Thursday:</strong> Standard work week</li>
              <li>✓ <strong>Friday-Saturday:</strong> Weekend</li>
              <li>✓ Ramadan hours are shorter (check dates annually)</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Business Hours</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>Government:</strong> 7:30 AM - 2:30 PM</li>
              <li>✓ <strong>Private sector:</strong> 9 AM - 6 PM</li>
              <li>✓ Many companies close Thu afternoon</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Communication Style</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Professional and direct</li>
              <li>✓ Punctual – start calls on time</li>
              <li>✓ Relationship building valued</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Best Practices</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Email first, then call</li>
              <li>✓ Confirm appointments 24h ahead</li>
              <li>✓ Be aware of prayer times (5x daily)</li>
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
            <h3 className={`font-medium mb-2 ${headingColor}`}>What is the best time to call Dubai from New York?</h3>
            <p className="text-sm">
              Early morning NYC (6-8 AM EST) catches Dubai's afternoon (3-5 PM). Evening NYC (6-11 PM EST) 
              reaches Dubai's early morning (3-8 AM next day). Both work, but early morning is generally preferred 
              as Dubai professionals are wrapping up their day.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Dubai observe daylight saving time?</h3>
            <p className="text-sm">
              No. Dubai stays on Gulf Standard Time (GST, UTC+4) year-round. When NYC switches to EDT, 
              the difference becomes 8 hours. When NYC is on EST, it's 9 hours. Always verify the current gap before scheduling.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What days does Dubai work?</h3>
            <p className="text-sm">
              The UAE work week is Sunday through Thursday. Friday and Saturday are the weekend. 
              This is critical to remember when scheduling – what's a Monday meeting in NYC might fall 
              on Dubai's Tuesday.
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
              <span className={`font-medium ${headingColor}`}>Dubai Business Hours</span>
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
