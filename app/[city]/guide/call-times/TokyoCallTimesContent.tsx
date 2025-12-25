'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import QuickTimeFinder from './QuickTimeFinder'

interface Props {
  city: City
}

export default function TokyoCallTimesContent({ city }: Props) {
  const { isLight, setActiveCity } = useCityContext()
  
  // Update active city when component mounts to sync background with Tokyo's time
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Tokyo from New York
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Managing the 14-hour time difference with respect for Japanese work culture
        </p>
      </header>

      {/* Quick Time Finder */}
      <QuickTimeFinder
        currentCity="Tokyo"
        currentTime="6:16 AM"
        cities={[
          { name: 'New York', slug: 'new-york', time: '4:16 PM' },
          { name: 'London', slug: 'london', time: '9:16 PM' },
          { name: 'Singapore', slug: 'singapore', time: '5:16 AM' },
          { name: 'Sydney', slug: 'sydney', time: '8:16 AM' }
        ]}
      />

      {/* Featured Snippet Section */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-3">
          <strong>Tokyo is 14 hours ahead of New York in winter</strong> (13 hours in summer when NYC observes DST). 
          The best time for business calls is <strong className="text-green-600 dark:text-green-400">7:00 PM - 11:00 PM EST</strong>, 
          which reaches Tokyo during their morning hours (9:00 AM - 1:00 PM JST next day).
        </p>
        <p className="text-sm">
          <strong>Important:</strong> Japan does not observe daylight saving time, so the time difference shifts between 13-14 hours 
          depending on US clock changes.
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
                <th className="text-left p-3 font-medium">Tokyo Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">6:00 AM - 9:00 AM</td>
                <td className="p-3">8:00 PM - 11:00 PM</td>
                <td className="p-3 text-amber-600">⚠️ After official hours (but some still working)</td>
              </tr>
              <tr>
                <td className="p-3">9:00 AM - 6:00 PM</td>
                <td className="p-3">11:00 PM - 8:00 AM</td>
                <td className="p-3 text-red-600">❌ Night/very early morning</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">7:00 PM - 11:00 PM</td>
                <td className="p-3 font-medium">9:00 AM - 1:00 PM (next day)</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Morning Tokyo</strong></td>
              </tr>
              <tr>
                <td className="p-3">11:01 PM - 2:00 AM</td>
                <td className="p-3">1:01 PM - 4:00 PM</td>
                <td className="p-3 text-amber-600">✅ Afternoon Tokyo (very late for you)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Warning */}
      <section className={`mb-8 p-5 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h3 className={`font-semibold mb-2 ${blueText}`}>🕐 Japan Standard Time (No DST)</h3>
        <p className="mb-2">
          <strong>Japan does NOT observe daylight saving time.</strong> Japan Standard Time (JST, UTC+9) remains constant year-round.
        </p>
        <p className="text-sm">
          When NYC switches to EDT in March, Tokyo becomes 13 hours ahead instead of 14. When NYC returns to EST in November, 
          the gap returns to 14 hours. The one-hour shift means your ideal calling window stays roughly the same clock-time, 
          just reaching Tokyo one hour earlier/later in their day.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Coordinating calls between New York and Tokyo requires both schedule flexibility and cultural awareness. The 14-hour 
          time difference means there is no overlap between standard business hours — when NYC starts work, Tokyo is already 
          winding down or has gone home, and when Tokyo begins their day, New Yorkers are sleeping.
        </p>
        <p>
          Japanese work culture is undergoing change. Traditional long hours (残業, zangyo) are being discouraged by government 
          "work-style reform" initiatives, but many professionals still work late. This creates a complex dynamic: officially, 
          business hours end at 6 PM, but in reality, many Tokyo professionals remain at their desks until 8-9 PM or later, 
          especially in certain industries.
        </p>
        <p>
          This guide covers optimal calling times, Japanese business etiquette, and strategies for respectfully navigating 
          the cultural expectations around after-hours communication.
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
              <strong>Tokyo time:</strong> 9 AM - 1 PM (morning, next day)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Catches Tokyo professionals at the start of their day when they're most focused and energized. 
              Morning calls are culturally appropriate and professional in Japan.
            </p>
            <p className="text-sm">
              <strong>Cons:</strong> Late for you. Reserve for important client calls, negotiations, or regular standing meetings.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Very Late NYC (11 PM - 2 AM EST)</h3>
            <p className="mb-2">
              <strong>Tokyo time:</strong> 1 PM - 4 PM (afternoon)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Afternoon Tokyo, post-lunch when energy returns.
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              <strong>Cons:</strong> Extremely late for you. Only for urgent or pre-arranged calls.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Early Morning NYC (6-9 AM EST)</h3>
            <p className="mb-2">
              <strong>Tokyo time:</strong> 8-11 PM (evening)
            </p>
            <p className="mb-2">
              <strong>Caution:</strong> While many Tokyo professionals are still at the office at this hour, it's technically after hours. 
              Best for contacts you know well who have agreed to evening calls.
            </p>
            <p className="text-sm">
              <strong>Cultural note:</strong> Despite late-working culture, calling someone at 9-10 PM can still be seen as imposing. 
              Pre-arrange these calls rather than cold-calling.
            </p>
          </div>
        </div>
      </section>

      {/* Japanese Work Culture */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🇯🇵 Japanese Business Culture Essentials
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Hierarchy & Respect</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Hierarchy is deeply important</li>
              <li>✓ Address people by title + last name (Tanaka-san)</li>
              <li>✓ Defer to senior colleagues</li>
              <li>✓ Formal communication initially</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Business Hours</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>Official:</strong> 9:00 AM - 6:00 PM JST</li>
              <li>✓ <strong>Reality:</strong> Many work until 8-9 PM</li>
              <li>✓ Work-style reform reducing overtime</li>
              <li>✓ Friday evenings increasingly protected</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Communication Style</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Indirect, harmony-focused (和, wa)</li>
              <li>✓ "Reading the air" (空気を読む)</li>
              <li>✓ Silence is acceptable, not awkward</li>
              <li>✓ Group consensus valued over individual opinion</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>After-Hours Etiquette</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Pre-arrange late calls, don't surprise</li>
              <li>✓ Apologize for the late hour (お時間頂きありがとうございます)</li>
              <li>✓ Respect government work-style reforms</li>
              <li>✓ Email is preferred for non-urgent matters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reverse Direction */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Calling NYC from Tokyo
        </h2>
        
        <p className="mb-4">
          If you're in Tokyo calling New York contacts:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Your Time (Tokyo)</th>
                <th className="text-left p-3 font-medium">NYC Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">9:00 AM - 2:00 PM</td>
                <td className="p-3">7:00 PM - 12:00 AM</td>
                <td className="p-3 text-red-600">❌ Too late in NYC</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">11:00 PM - 3:00 AM</td>
                <td className="p-3 font-medium">9:00 AM - 1:00 PM</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Morning NYC</strong></td>
              </tr>
              <tr>
                <td className="p-3">8:00 PM - 10:00 PM</td>
                <td className="p-3">6:00 AM - 8:00 AM</td>
                <td className="p-3 text-amber-600">⚠️ Early, but workable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Cultural observation:</strong> Japanese professionals are often more willing to accommodate late-night calls 
            with US contacts than Western professionals are. However, government work-style reforms are changing this. 
            Always ask explicitly and express appreciation for their flexibility.
          </p>
        </div>
      </section>

      {/* Comparison with Other Cities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌐 Tokyo vs Other Major Cities (NYC Perspective)
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
              <tr>
                <td className="p-3">Singapore</td>
                <td className="p-3">+13</td>
                <td className="p-3">7-11 PM</td>
                <td className="p-3 text-red-600">Difficult</td>
              </tr>
              <tr className="bg-amber-100 dark:bg-slate-600 font-semibold">
                <td className="p-3 font-medium">Tokyo</td>
                <td className="p-3 font-medium">+14 (winter) / +13 (summer)</td>
                <td className="p-3 font-medium">7-11 PM</td>
                <td className="p-3 text-red-600 font-medium">Difficult</td>
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

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ❓ Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What is the best time to call Tokyo from New York?</h3>
            <p className="text-sm">
              Between 7:00 PM and 11:00 PM EST, reaching Tokyo during their morning (9 AM - 1 PM JST, next day). 
              Morning calls are culturally appropriate and professional in Japan. Early morning NYC (6-9 AM EST) reaches 
              Tokyo's evening (8-11 PM JST), but pre-arrange these calls rather than cold-calling.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How many hours is Tokyo ahead of New York?</h3>
            <p className="text-sm">
              Tokyo is 14 hours ahead during NYC's winter (EST) and 13 hours ahead during NYC's summer (EDT). 
              Japan does not observe daylight saving time, so the difference shifts when US clocks change. 
              Always verify current time difference before scheduling.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is it OK to call Tokyo professionals after 6 PM their time?</h3>
            <p className="text-sm">
              Culturally complex. Officially, business hours end at 6 PM JST, and work-style reforms discourage late hours. 
              In reality, many professionals still work until 8-9 PM, especially in certain industries. Best practice: 
              pre-arrange evening calls explicitly, apologize for the late hour, and respect if someone declines. 
              Don't assume availability after official hours.
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
              <span className={`font-medium ${headingColor}`}>Tokyo Business Hours</span>
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
