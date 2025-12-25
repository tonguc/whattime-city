'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonCallTimesContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  const londonTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = londonTime.getHours()
  const timeStr = londonTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  // Theme colors
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-900' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const tableHeaderBg = isLight ? 'bg-slate-100' : 'bg-slate-700'
  const tableBg = isLight ? 'bg-white' : 'bg-slate-800'
  
  // Multiple cities data
  const callTimes = [
    { from: 'New York', flag: '🇺🇸', diff: '-5h', bestBusiness: '2 PM - 5 PM', bestPersonal: '6 PM - 10 PM', yourTime: 'Afternoon', londonIs: 'Morning-Midday' },
    { from: 'Los Angeles', flag: '🇺🇸', diff: '-8h', bestBusiness: '5 PM - 6 PM', bestPersonal: '8 PM - 11 PM', yourTime: 'Late Afternoon', londonIs: 'Morning' },
    { from: 'Dubai', flag: '🇦🇪', diff: '+4h', bestBusiness: '9 AM - 1 PM', bestPersonal: '6 AM - 10 AM', yourTime: 'Morning', londonIs: 'Afternoon-Evening' },
    { from: 'Mumbai', flag: '🇮🇳', diff: '+5.5h', bestBusiness: '9 AM - 12 PM', bestPersonal: '5 AM - 9 AM', yourTime: 'Morning', londonIs: 'Afternoon-Evening' },
    { from: 'Singapore', flag: '🇸🇬', diff: '+8h', bestBusiness: '9 AM - 11 AM', bestPersonal: '6 AM - 8 AM', yourTime: 'Morning', londonIs: 'Evening-Night' },
    { from: 'Tokyo', flag: '🇯🇵', diff: '+9h', bestBusiness: '5 PM - 7 PM', bestPersonal: '6 AM - 8 AM', yourTime: 'Early Evening', londonIs: 'Morning' },
    { from: 'Sydney', flag: '🇦🇺', diff: '+11h', bestBusiness: '7 AM - 9 AM', bestPersonal: '6 AM - 8 AM', yourTime: 'Early Morning', londonIs: 'Evening' },
    { from: 'Paris/Berlin', flag: '🇪🇺', diff: '+1h', bestBusiness: '9 AM - 5 PM', bestPersonal: 'Anytime reasonable', yourTime: 'Flexible', londonIs: 'Same' },
  ]
  
  const isGoodTime = currentHour >= 9 && currentHour < 21
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call London
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Optimal calling times from major cities worldwide
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isGoodTime ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
          <span className="text-sm">
            London: {timeStr} — {isGoodTime ? 'Good time to call' : 'May be inconvenient'}
          </span>
        </div>
      </header>
      
      {/* ========================================
          FEATURED SNIPPET TARGET SECTION (NEW!)
          NYC-specific optimization
          ======================================== */}
      <section id="snippet-target" className={`mb-10 p-6 rounded-xl border shadow-sm ${cardBg} ${tableBorder}`}>
        
        <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call London from New York
        </h2>
        
        <p className={`mb-4 leading-relaxed text-base ${textColor}`}>
          The best time to call London from New York for business is between 
          <strong> 9:00 AM and 12:00 PM EST</strong>. This window aligns with 
          <strong> 2:00 PM to 5:00 PM in London</strong>, ensuring both parties are 
          within standard working hours. For personal calls, you can extend this until 
          5:00 PM EST (10:00 PM London).
        </p>

        {/* DST WARNING */}
        <div className={`mb-6 p-4 rounded-lg border text-sm ${
          isLight 
            ? 'bg-blue-50 border-blue-100 text-slate-700' 
            : 'bg-blue-900/20 border-blue-700 text-slate-300'
        }`}>
          <p>
            <strong>⚠️ Note:</strong> London is typically 5 hours ahead of New York. 
            However, during Daylight Saving Time (DST) transition weeks in March and October, 
            the gap briefly changes to <strong>4 hours</strong> due to different switch-over dates.
          </p>
        </div>

        {/* NYC-SPECIFIC OPTIMAL TIMES TABLE */}
        <div className={`overflow-x-auto rounded-lg border ${tableBorder}`}>
          <table className={`w-full text-left border-collapse ${tableBg}`}>
            <thead className={tableHeaderBg}>
              <tr>
                <th className={`p-4 border-b font-semibold text-sm md:text-base whitespace-nowrap ${headingColor} ${tableBorder}`}>
                  New York (EST)
                </th>
                <th className={`p-4 border-b font-semibold text-sm md:text-base whitespace-nowrap ${headingColor} ${tableBorder}`}>
                  London (GMT/BST)
                </th>
                <th className={`p-4 border-b font-semibold text-sm md:text-base whitespace-nowrap ${headingColor} ${tableBorder}`}>
                  Suitability
                </th>
              </tr>
            </thead>
            <tbody className={`text-sm md:text-base ${textColor}`}>
              <tr>
                <td className={`p-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
                  8:00 AM
                </td>
                <td className={`p-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
                  1:00 PM
                </td>
                <td className={`p-4 border-b font-medium ${
                  isLight 
                    ? 'border-slate-100 text-yellow-600' 
                    : 'border-slate-700 text-yellow-400'
                }`}>
                  ⚠️ Early for NYC
                </td>
              </tr>
              
              {/* GREEN HIGHLIGHT ROW 1 */}
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className={`p-4 border-b font-bold ${headingColor} ${
                  isLight ? 'border-green-100' : 'border-green-800'
                }`}>
                  9:00 AM
                </td>
                <td className={`p-4 border-b font-bold ${headingColor} ${
                  isLight ? 'border-green-100' : 'border-green-800'
                }`}>
                  2:00 PM
                </td>
                <td className={`p-4 border-b font-bold ${
                  isLight 
                    ? 'border-green-100 text-green-700' 
                    : 'border-green-800 text-green-400'
                }`}>
                  ✅ Perfect (Overlap)
                </td>
              </tr>
              
              {/* GREEN HIGHLIGHT ROW 2 */}
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className={`p-4 border-b font-bold ${headingColor} ${
                  isLight ? 'border-green-100' : 'border-green-800'
                }`}>
                  11:00 AM
                </td>
                <td className={`p-4 border-b font-bold ${headingColor} ${
                  isLight ? 'border-green-100' : 'border-green-800'
                }`}>
                  4:00 PM
                </td>
                <td className={`p-4 border-b font-bold ${
                  isLight 
                    ? 'border-green-100 text-green-700' 
                    : 'border-green-800 text-green-400'
                }`}>
                  ✅ Perfect (Overlap)
                </td>
              </tr>
              
              <tr>
                <td className={`p-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
                  2:00 PM
                </td>
                <td className={`p-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
                  7:00 PM
                </td>
                <td className={`p-4 border-b font-medium ${
                  isLight 
                    ? 'border-slate-100 text-yellow-600' 
                    : 'border-slate-700 text-yellow-400'
                }`}>
                  ⚠️ Late for London
                </td>
              </tr>
              
              <tr>
                <td className={`p-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
                  5:00 PM
                </td>
                <td className={`p-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
                  10:00 PM
                </td>
                <td className={`p-4 border-b font-medium ${
                  isLight 
                    ? 'border-slate-100 text-red-600' 
                    : 'border-slate-700 text-red-400'
                }`}>
                  ❌ Avoid (Too Late)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================
          REVERSE DIRECTION SECTION (NEW!)
          ======================================== */}
      <section className="mb-10">
        <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call New York from London
        </h2>
        
        <p className={`leading-relaxed text-base mb-4 ${textColor}`}>
          If you are starting the call from London, your ideal window is restricted to your afternoon.
          New York generally starts work when it is already 2:00 PM in London.
        </p>
        
        <div className={`p-5 rounded-lg border ${cardBg} ${tableBorder}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>
            Quick Reference (London Perspective)
          </h3>
          <ul className={`space-y-2 ${textColor}`}>
            <li className="flex items-center gap-2">
              <span>🌅</span> 
              <span><strong>2 PM - 5 PM:</strong> Best for business (Catches NYC 9 AM - 12 PM)</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🌆</span> 
              <span><strong>6 PM - 9 PM:</strong> Good for personal calls (NYC Afternoon)</span>
            </li>
            <li className="flex items-center gap-2">
              <span>❌</span> 
              <span><strong>Before 2 PM:</strong> Avoid (NYC is asleep / early morning)</span>
            </li>
          </ul>
        </div>
      </section>
      
      {/* ========================================
          MULTIPLE CITIES TABLE (EXISTING)
          ======================================== */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Best Calling Times by City
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={tableHeaderBg}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Calling From</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Time Diff</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Best for Business</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Best for Personal</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {callTimes.map(t => (
                <tr key={t.from} className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                  <td className="px-4 py-3">{t.flag} {t.from}</td>
                  <td className="px-4 py-3 font-medium">{t.diff}</td>
                  <td className="px-4 py-3">
                    {t.bestBusiness} <span className={mutedColor}>(your time)</span>
                  </td>
                  <td className="px-4 py-3">
                    {t.bestPersonal} <span className={mutedColor}>(your time)</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* ========================================
          UK CALL CULTURE (EXISTING)
          ======================================== */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🇬🇧 UK Calling Culture
        </h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>📞 Business Calls</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Punctuality expected</strong> — call at the agreed time</li>
                <li>• Start with brief pleasantries ("How are you?") before business</li>
                <li>• Avoid calling during lunch (12-1 PM) if possible</li>
                <li>• Friday afternoons: many start winding down after 4 PM</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>💬 Tone & Style</h3>
              <ul className="text-sm space-y-2">
                <li>• British understatement is common — "not bad" often means "good"</li>
                <li>• Polite hedging: "Would you mind if..." rather than direct requests</li>
                <li>• Saying "sorry" doesn't always mean apologizing</li>
                <li>• Less small talk than US, more than Germans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* ========================================
          QUICK TIME FINDER WIDGET (EXISTING)
          ======================================== */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ⏱️ Quick Time Finder
        </h2>
        
        <div className={`p-5 rounded-2xl border-2 ${
          isLight ? 'border-amber-200 bg-amber-50' : 'border-amber-700 bg-amber-900/20'
        }`}>
          <p className="mb-4 text-sm">
            Right now in London: <strong className="text-lg">{timeStr}</strong>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { city: 'New York', offset: -5 },
              { city: 'LA', offset: -8 },
              { city: 'Dubai', offset: 4 },
              { city: 'Tokyo', offset: 9 },
            ].map(loc => {
              const localHour = (currentHour + loc.offset + 24) % 24
              const period = localHour >= 12 ? 'PM' : 'AM'
              const displayHour = localHour % 12 || 12
              return (
                <div 
                  key={loc.city} 
                  className={`p-3 rounded-lg text-center ${
                    isLight ? 'bg-white' : 'bg-slate-800'
                  }`}
                >
                  <div className={`text-xs ${mutedColor}`}>{loc.city}</div>
                  <div className={`font-bold ${headingColor}`}>
                    {displayHour}:{londonTime.getMinutes().toString().padStart(2, '0')} {period}
                  </div>
                </div>
              )
            })}
          </div>
          
          <Link 
            href="/tools/meeting-planner/"
            className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
              isLight 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            Open Full Meeting Planner →
          </Link>
        </div>
      </section>
      
      {/* ========================================
          FAQ SECTION (EXISTING)
          ======================================== */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ❓ Frequently Asked Questions
        </h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What's the best time to call London from the US?
            </h3>
            <p className="text-sm">
              Your morning (7-10 AM EST) catches London in the afternoon (12-3 PM) — ideal overlap. 
              US West Coast should aim for 6-9 AM PST to catch London at 2-5 PM.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Is it rude to call on weekends?
            </h3>
            <p className="text-sm">
              For business: yes, unless previously agreed. For personal calls: Saturday is fine, 
              Sunday is more family-oriented but acceptable for close friends. Avoid calling before 10 AM on weekends.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What time do UK offices close?
            </h3>
            <p className="text-sm">
              Most offices close at 5:30 PM, though many professionals work until 6 PM or later. 
              Friday afternoons tend to wind down earlier — aim for morning calls on Fridays.
            </p>
          </div>
        </div>
      </section>
      
      {/* ========================================
          INTERNAL LINKING (EXISTING)
          Enhanced with better styling
          ======================================== */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link 
            href={`/${city.slug}/guide/time-difference/`} 
            className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
              isLight 
                ? 'bg-white hover:bg-slate-50 border border-slate-200' 
                : 'bg-slate-800 hover:bg-slate-700 border border-slate-600'
            }`}
          >
            <span>🌐</span>
            <span>London Time Difference</span>
          </Link>
          <Link 
            href={`/${city.slug}/guide/remote-work/`} 
            className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
              isLight 
                ? 'bg-white hover:bg-slate-50 border border-slate-200' 
                : 'bg-slate-800 hover:bg-slate-700 border border-slate-600'
            }`}
          >
            <span>💻</span>
            <span>Remote Work Guide</span>
          </Link>
          <Link 
            href={`/${city.slug}/guide/business-hours/`} 
            className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
              isLight 
                ? 'bg-white hover:bg-slate-50 border border-slate-200' 
                : 'bg-slate-800 hover:bg-slate-700 border border-slate-600'
            }`}
          >
            <span>💼</span>
            <span>London Business Hours</span>
          </Link>
          <Link 
            href={`/${city.slug}/guide/`} 
            className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
              isLight 
                ? 'bg-white hover:bg-slate-50 border border-slate-200' 
                : 'bg-slate-800 hover:bg-slate-700 border border-slate-600'
            }`}
          >
            <span>📖</span>
            <span>Complete London Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2024.
      </p>
    </div>
  )
}
