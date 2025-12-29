'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import QuickTimeFinder from './QuickTimeFinder'

interface Props {
  city: City
}

export default function ParisCallTimesContent({ city }: Props) {
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Paris Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Paris from New York
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Navigate the 6-hour time difference and French business culture for successful calls
        </p>
      </header>

      {/* Quick Time Finder */}
      <QuickTimeFinder
        currentCity="Paris"
        currentTime="10:16 PM"
        cities={[
          { name: 'New York', slug: 'new-york', time: '4:16 PM' },
          { name: 'London', slug: 'london', time: '9:16 PM' },
          { name: 'Dubai', slug: 'dubai', time: '1:16 AM' },
          { name: 'Singapore', slug: 'singapore', time: '5:16 AM' }
        ]}
      />

      {/* Featured Snippet Section */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-3">
          <strong>Paris is 6 hours ahead of New York</strong> (5 hours during DST transition weeks). 
          The best time for business calls is between <strong className="text-green-600 dark:text-green-400">9:00 AM - 12:00 PM EST</strong>, 
          which reaches Paris during their afternoon (3:00 PM - 6:00 PM CET/CEST).
        </p>
        <p className="text-sm">
          <strong>Critical:</strong> Avoid calling 6:30 AM - 8:00 AM EST (12:30 PM - 2:00 PM Paris) — this is the sacred French lunch break!
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
                <th className="text-left p-3 font-medium">Paris Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">3:00 AM - 5:59 AM</td>
                <td className="p-3">9:00 AM - 11:59 AM</td>
                <td className="p-3 text-amber-600">✅ Good (but very early for you)</td>
              </tr>
              <tr className="bg-red-50 dark:bg-red-900/20">
                <td className="p-3">6:00 AM - 8:00 AM</td>
                <td className="p-3">12:00 PM - 2:00 PM</td>
                <td className="p-3 text-red-600"><strong>❌ AVOID - French lunch hour</strong></td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">9:00 AM - 12:00 PM</td>
                <td className="p-3 font-medium">3:00 PM - 6:00 PM</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Afternoon Paris</strong></td>
              </tr>
              <tr>
                <td className="p-3">12:01 PM - 5:00 PM</td>
                <td className="p-3">6:01 PM - 11:00 PM</td>
                <td className="p-3 text-amber-600">⚠️ Personal calls OK, business ending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Warning */}
      <section className={`mb-8 p-5 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h3 className={`font-semibold mb-2 ${blueText}`}>🕐 DST Transition Alert</h3>
        <p className="mb-2">
          <strong>Europe and North America change clocks on different dates.</strong> For 2-3 weeks in March and October, 
          the time difference shifts from 6 hours to 5 hours.
        </p>
        <p className="text-sm">
          Paris switches to summer time (CEST) in late March. NYC switches to EDT in early-mid March. 
          Between these dates, Paris is only 5 hours ahead instead of 6. Same pattern in reverse during October/November.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Calling Paris from New York offers a comfortable 3-hour overlap window during business hours — one of the 
          easiest European connections for US-based professionals. However, success requires understanding French business 
          culture, particularly the importance of the lunch break.
        </p>
        <p>
          Unlike London or other major European capitals, Paris maintains a strong tradition of the two-hour lunch break 
          (typically 12:30 PM to 2:00 PM). Many professionals are genuinely unavailable during this time, either at 
          restaurants or in internal meetings. Calling during lunch can be perceived as culturally insensitive.
        </p>
        <p>
          This guide covers optimal calling times, French business etiquette, and strategies for building productive 
          relationships with Parisian contacts across the Atlantic.
        </p>
      </section>

      {/* Detailed Analysis */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Understanding the Time Gap
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Morning NYC (9 AM - 12 PM EST)</h3>
            <p className="mb-2">
              <strong>Paris time:</strong> 3 PM - 6 PM (afternoon)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Perfect timing! Parisians are back from lunch, energized, and available. 
              This is the sweet spot for business calls.
            </p>
            <p className="text-sm">
              <strong>Best for:</strong> Client calls, negotiations, important discussions. You're fresh, they're focused.
            </p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Early Morning NYC (3-6 AM EST)</h3>
            <p className="mb-2">
              <strong>Paris time:</strong> 9 AM - 12 PM (morning)
            </p>
            <p className="mb-2">
              <strong>Pros:</strong> Catches Parisians at the start of their day. Good for urgent matters.
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              <strong>Cons:</strong> Extremely early for you. Reserve for high-priority contacts only.
            </p>
          </div>

          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${cardBg}`}>
            <h3 className={`font-medium mb-2 text-red-600 dark:text-red-400`}>
              ❌ The Lunch Hour Trap (6-8 AM NYC)
            </h3>
            <p className="mb-2">
              <strong>Paris time:</strong> 12 PM - 2 PM (SACRED LUNCH)
            </p>
            <p className="text-sm">
              <strong>Why avoid:</strong> French business culture treats lunch as inviolable. Many professionals 
              turn off phones, have extended restaurant meals, or internal team lunches. Your call will likely go 
              unanswered and may be viewed as culturally tone-deaf.
            </p>
          </div>
        </div>
      </section>

      {/* Reverse Direction */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Calling NYC from Paris
        </h2>
        
        <p className="mb-4">
          If you're in Paris calling New York contacts:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Your Time (Paris)</th>
                <th className="text-left p-3 font-medium">NYC Time</th>
                <th className="text-left p-3 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">9:00 AM - 12:00 PM</td>
                <td className="p-3">3:00 AM - 6:00 AM</td>
                <td className="p-3 text-red-600">❌ Far too early in NYC</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">3:00 PM - 6:00 PM</td>
                <td className="p-3 font-medium">9:00 AM - 12:00 PM</td>
                <td className="p-3"><strong className="text-green-600 dark:text-green-400">✅ BEST - Morning NYC</strong></td>
              </tr>
              <tr>
                <td className="p-3">7:00 PM onwards</td>
                <td className="p-3">1:00 PM onwards</td>
                <td className="p-3 text-amber-600">✅ Good, but you're after hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Pro tip:</strong> Many Parisian professionals schedule standing calls with NYC at 4-5 PM their time 
            (10-11 AM NYC). This works well before their evening plans begin.
          </p>
        </div>
      </section>

      {/* Comparison with Other Cities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌐 Paris vs Other Major Cities (NYC Perspective)
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
              <tr className="bg-amber-100 dark:bg-slate-600 font-semibold">
                <td className="p-3 font-medium">Paris</td>
                <td className="p-3 font-medium">+6</td>
                <td className="p-3 font-medium">9 AM - 12 PM (avoid 6-8 AM!)</td>
                <td className="p-3 text-green-600 font-medium">Excellent (3h)</td>
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

      {/* French Business Culture */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🇫🇷 French Business Culture Tips
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Communication Style</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Formal initially — use "Monsieur/Madame"</li>
              <li>✓ Build relationship before business</li>
              <li>✓ Appreciate effort to speak French (even badly!)</li>
              <li>✓ Direct but polite communication</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Lunch Culture</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>12:30-2:00 PM:</strong> Sacred time off</li>
              <li>✓ Not just food — social & mental break</li>
              <li>✓ Many leave office entirely</li>
              <li>✓ Respect this boundary rigorously</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Business Hours</h3>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>9:00 AM - 6:00 PM</strong> (minus lunch)</li>
              <li>✓ August = vacation month (plan ahead!)</li>
              <li>✓ Fridays can be half-days in summer</li>
              <li>✓ Work-life balance highly valued</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Best Practices</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Email before calling (preferred)</li>
              <li>✓ Be punctual — meetings start on time</li>
              <li>✓ Avoid hard-sell tactics</li>
              <li>✓ Quality over speed in relationships</li>
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
            <h3 className={`font-medium mb-2 ${headingColor}`}>What is the best time to call Paris from New York?</h3>
            <p className="text-sm">
              Between 9:00 AM and 12:00 PM EST, reaching Paris during their 3:00 PM - 6:00 PM window. 
              This is post-lunch when professionals are most available and focused. Absolutely avoid 6-8 AM EST 
              (12-2 PM Paris lunch hour).
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Why is lunch hour so important in Paris?</h3>
            <p className="text-sm">
              French business culture views the lunch break (12:30-2:00 PM) as essential for well-being and social connection. 
              It's not just eating — it's a mental reset. Many professionals genuinely disconnect during this time. 
              Calling during lunch can harm your professional relationship.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How does DST affect Paris-NYC calls?</h3>
            <p className="text-sm">
              For 2-3 weeks in March and again in October/November, Europe and North America are "out of sync" 
              on DST changes. During these periods, Paris is only 5 hours ahead instead of the usual 6. 
              Always verify the current time difference before scheduling important calls.
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
              <span className={`font-medium ${headingColor}`}>Paris Business Hours</span>
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
