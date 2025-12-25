'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import QuickTimeFinder from './QuickTimeFinder'

interface Props {
  city: City
}

export default function SydneyCallTimesContent({ city }: Props) {
  const { isLight, setActiveCity } = useCityContext()
  
  // Update active city when component mounts to sync background with Sydney's time
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Sydney from New York
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Navigating the 15-16 hour time difference and opposite seasons
        </p>
      </header>

      {/* Quick Time Finder */}
      <QuickTimeFinder
        currentCity="Sydney"
        currentTime="8:16 AM"
        cities={[
          { name: 'New York', slug: 'new-york', time: '4:16 PM' },
          { name: 'Tokyo', slug: 'tokyo', time: '6:16 AM' },
          { name: 'Singapore', slug: 'singapore', time: '5:16 AM' },
          { name: 'London', slug: 'london', time: '9:16 PM' }
        ]}
      />

      {/* Featured Snippet Section */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-3">
          <strong>Sydney is 15-16 hours ahead of New York</strong> (varies by DST — both cities observe it at opposite times). 
          The best time for business calls is <strong className="text-green-600 dark:text-green-400">6:00 PM - 11:00 PM EST</strong>, 
          which reaches Sydney during their morning/midday (10:00 AM - 3:00 PM AEST/AEDT next day).
        </p>
        <p className="text-sm">
          <strong>Alternative:</strong> Early morning NYC (6:00-8:00 AM EST) catches Sydney's evening (9:00-11:00 PM AEST/AEDT), 
          but most Australians have left work by then due to strong work-life balance culture.
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
                <th className="text-left p-3 font-medium">Sydney Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">6:00 AM - 8:00 AM</td>
                <td className="p-3">9:00 PM - 11:00 PM</td>
                <td className="p-3 text-amber-600">⚠️ After hours (personal/urgent only)</td>
              </tr>
              <tr>
                <td className="p-3">9:00 AM - 5:00 PM</td>
                <td className="p-3">12:00 AM - 8:00 AM</td>
                <td className="p-3 text-red-600">❌ Night/very early morning</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">6:00 PM - 11:00 PM</td>
                <td className="p-3 font-medium">10:00 AM - 3:00 PM (next day)</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Mid-morning Sydney</strong></td>
              </tr>
              <tr>
                <td className="p-3">11:01 PM - 3:00 AM</td>
                <td className="p-3">3:01 PM - 7:00 PM</td>
                <td className="p-3 text-amber-600">✅ Good afternoon window (very late for you!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Warning */}
      <section className={`mb-8 p-5 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h3 className={`font-semibold mb-2 ${blueText}`}>🕐 Opposite DST Alert</h3>
        <p className="mb-2">
          <strong>Sydney and NYC observe daylight saving time at OPPOSITE times of the year.</strong> This creates seasonal variation:
        </p>
        <ul className="text-sm space-y-1">
          <li>• <strong>NYC Summer (Apr-Sep):</strong> Sydney is 14 hours ahead (Sydney winter, no DST)</li>
          <li>• <strong>NYC Winter (Oct-Mar):</strong> Sydney is 16 hours ahead (Sydney summer, DST active)</li>
          <li>• <strong>Transition weeks:</strong> Briefly 15 hours when one city changes before the other</li>
        </ul>
        <p className="text-sm mt-2">
          Always verify the current time difference before scheduling — it changes throughout the year!
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          The NYC-Sydney connection is one of the most challenging time zone pairings for business calls. With a 15-16 hour 
          difference (literally opposite sides of the planet), there is minimal overlap between standard business hours. 
          When New Yorkers start their day, Sydneysiders are winding down or already home.
        </p>
        <p>
          Australian work culture strongly emphasizes work-life balance. Unlike in Singapore or Tokyo, where staying late 
          for international calls is common, Sydney professionals typically leave the office by 5:30 PM sharp. "Friday arvo 
          drinks" (afternoon drinks) are a cherished tradition, with offices often emptying by 4 PM on Fridays.
        </p>
        <p>
          This guide covers practical strategies for reaching Sydney contacts, understanding Australian work culture, and 
          determining when asynchronous communication might be more effective than attempting live calls.
        </p>
      </section>

      {/* Detailed Analysis */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Understanding the Time Gap
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Evening NYC (6-11 PM EST)</h3>
            <p className="mb-2">
              <strong>Sydney time:</strong> 10 AM - 3 PM (mid-morning to afternoon, next day)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Catches Sydney professionals during their most productive hours. They're engaged, 
              coffee'd up, and available for substantive conversations.
            </p>
            <p className="text-sm">
              <strong>Cons:</strong> Late for you. This is the most practical window, but requires NYC-side flexibility.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Very Late NYC (11 PM - 3 AM EST)</h3>
            <p className="mb-2">
              <strong>Sydney time:</strong> 3 PM - 7 PM (afternoon to early evening)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Afternoon Sydney, still within business hours.
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              <strong>Cons:</strong> Absurdly late for you. Many Australians start leaving by 5 PM. Only for critical issues.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Early Morning NYC (6-8 AM EST)</h3>
            <p className="mb-2">
              <strong>Sydney time:</strong> 9-11 PM (evening)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Early for you, but manageable.
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              <strong>Cons:</strong> After standard business hours. Most Australians are home. Only works for personal calls 
              or urgent matters with specific contacts who agree to late calls.
            </p>
          </div>
        </div>
      </section>

      {/* Work-Life Balance Culture */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🇦🇺 Australian Work-Life Balance Culture
        </h2>
        
        <div className={`p-6 rounded-xl border-2 ${tableBorder} ${cardBg}`}>
          <p className="mb-4">
            <strong>Critical cultural insight:</strong> Australians fiercely protect their personal time. Unlike many 
            Asian countries where late calls are accepted, Sydney professionals generally resist after-hours communication.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>⏰ Strict 9-to-5</h3>
              <p className="text-sm">
                Most offices operate 9 AM - 5 PM sharp. By 5:30 PM, desks are empty. Working late is uncommon and 
                sometimes viewed negatively ("no life outside work").
              </p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>🍻 Friday Arvo Culture</h3>
              <p className="text-sm">
                "Friday afternoon drinks" are a cherished tradition. Offices empty by 4 PM on Fridays. 
                Avoid scheduling Friday calls if possible.
              </p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>🏖️ Annual Leave</h3>
              <p className="text-sm">
                4 weeks annual leave is standard (vs 2 weeks in US). December-January is peak vacation season. 
                Plan ahead for summer months.
              </p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>💬 Direct Communication</h3>
              <p className="text-sm">
                Australians are direct, informal, and value honesty. "Mate" culture means less corporate hierarchy 
                than other markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Async Communication */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💬 Strongly Consider Async Communication
        </h2>
        
        <div className={`p-6 rounded-xl border-2 border-amber-500 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
          <p className="mb-4 font-medium">
            Given the extreme time difference and Australian work culture, asynchronous communication often works better 
            than struggling to find call times:
          </p>
          
          <div className="space-y-3">
            <div className={`p-3 rounded-lg ${cardBg}`}>
              <h3 className={`font-medium mb-1 ${headingColor}`}>📧 Detailed Email Updates</h3>
              <p className="text-sm">Well-structured emails with clear action items work excellently across 15+ hour gaps.</p>
            </div>
            
            <div className={`p-3 rounded-lg ${cardBg}`}>
              <h3 className={`font-medium mb-1 ${headingColor}`}>🎥 Loom Videos</h3>
              <p className="text-sm">Record screen shares or presentations. They watch during their morning, you sleep during theirs.</p>
            </div>
            
            <div className={`p-3 rounded-lg ${cardBg}`}>
              <h3 className={`font-medium mb-1 ${headingColor}`}>📝 Shared Docs</h3>
              <p className="text-sm">Google Docs/Notion with comments enable collaboration without synchronous time.</p>
            </div>
            
            <div className={`p-3 rounded-lg ${cardBg}`}>
              <h3 className={`font-medium mb-1 ${headingColor}`}>🔄 Rotating Hardship</h3>
              <p className="text-sm">If calls are necessary, alternate who takes the painful time slot. Fairness matters in Aussie culture!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reverse Direction */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Calling NYC from Sydney
        </h2>
        
        <p className="mb-4">
          If you're in Sydney calling New York contacts:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Your Time (Sydney)</th>
                <th className="text-left p-3 font-medium">NYC Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">9:00 AM - 3:00 PM</td>
                <td className="p-3">5:00 PM - 11:00 PM</td>
                <td className="p-3 text-red-600">❌ Too late in NYC</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">11:00 PM - 3:00 AM</td>
                <td className="p-3 font-medium">9:00 AM - 1:00 PM</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Morning NYC</strong></td>
              </tr>
              <tr>
                <td className="p-3">9:00 PM - 11:00 PM</td>
                <td className="p-3">6:00 AM - 8:00 AM</td>
                <td className="p-3 text-amber-600">⚠️ Early, but workable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Cultural note:</strong> Most Sydney professionals will NOT take 11 PM - 3 AM calls regularly. 
            This violates Australian work-life balance norms. If you're in Sydney and US calls are essential, 
            negotiate this explicitly in your employment contract.
          </p>
        </div>
      </section>

      {/* Comparison with Other Cities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌐 Sydney vs Other Major Cities (NYC Perspective)
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
              <tr>
                <td className="p-3">Tokyo</td>
                <td className="p-3">+14</td>
                <td className="p-3">7-11 PM</td>
                <td className="p-3 text-red-600">Difficult</td>
              </tr>
              <tr className="bg-amber-100 dark:bg-slate-600 font-semibold">
                <td className="p-3 font-medium">Sydney</td>
                <td className="p-3 font-medium">+15-16</td>
                <td className="p-3 font-medium">6-11 PM (or async!)</td>
                <td className="p-3 text-red-600 font-medium">Very Difficult</td>
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
            <h3 className={`font-medium mb-2 ${headingColor}`}>What is the best time to call Sydney from New York?</h3>
            <p className="text-sm">
              Between 6:00 PM and 11:00 PM EST, reaching Sydney during their mid-morning to afternoon (10 AM - 3 PM AEST/AEDT, next day). 
              This is the most practical window, though it requires NYC-side evening flexibility. Given the extreme time difference, 
              strongly consider asynchronous communication instead.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How many hours is Sydney ahead of New York?</h3>
            <p className="text-sm">
              Sydney is 15-16 hours ahead, varying seasonally because both cities observe daylight saving time at opposite times. 
              When NYC is in summer (Apr-Sep), Sydney is 14 hours ahead. When NYC is in winter (Oct-Mar), Sydney is 16 hours ahead. 
              Always verify current difference before scheduling.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Will Sydney professionals take late evening calls?</h3>
            <p className="text-sm">
              Generally no. Australian work culture strongly values work-life balance. Most professionals leave by 5-5:30 PM and 
              resist after-hours calls. Unlike Singapore or Tokyo where late calls are accepted, Sydney professionals typically decline. 
              Async communication (email, Loom, shared docs) is often more culturally appropriate and effective.
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
              <span className={`font-medium ${headingColor}`}>Sydney Business Hours</span>
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
