'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeRemoteWorkContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const sgTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Working with Singapore Teams Remotely
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Time zone overlap, meeting times, and collaboration tips for SGT (UTC+8)
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-sm">🕐 Current time in Singapore: <strong>{timeStr}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Singapore (SGT) is <strong>UTC+8</strong> year-round with no daylight saving. 
          Best overlap with <strong>Europe: 2-6 PM SGT</strong> (morning EU). 
          With <strong>US East Coast: 8-10 PM SGT</strong> (morning EST). 
          <strong>Australia: excellent overlap</strong> (1-2 hour difference).
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Zone Overlap Windows</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Their Location</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Their 9 AM</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Best Overlap (SGT)</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Overlap Quality</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">🇬🇧 London</td>
                <td className="px-4 py-3">5:00 PM SGT</td>
                <td className="px-4 py-3">3:00 PM - 6:00 PM</td>
                <td className="px-4 py-3">⭐⭐⭐ Good</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇩🇪 Berlin</td>
                <td className="px-4 py-3">4:00 PM SGT</td>
                <td className="px-4 py-3">2:00 PM - 6:00 PM</td>
                <td className="px-4 py-3">⭐⭐⭐ Good</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇺🇸 New York</td>
                <td className="px-4 py-3">10:00 PM SGT</td>
                <td className="px-4 py-3">8:00 PM - 10:00 PM</td>
                <td className="px-4 py-3">⭐⭐ Challenging</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇺🇸 Los Angeles</td>
                <td className="px-4 py-3">1:00 AM SGT (+1)</td>
                <td className="px-4 py-3">Very limited</td>
                <td className="px-4 py-3">⭐ Difficult</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇦🇺 Sydney</td>
                <td className="px-4 py-3">6:00 AM SGT</td>
                <td className="px-4 py-3">9:00 AM - 6:00 PM</td>
                <td className="px-4 py-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td>
                <td className="px-4 py-3">8:00 AM SGT</td>
                <td className="px-4 py-3">9:00 AM - 6:00 PM</td>
                <td className="px-4 py-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇮🇳 Mumbai</td>
                <td className="px-4 py-3">6:30 AM SGT</td>
                <td className="px-4 py-3">9:00 AM - 6:00 PM</td>
                <td className="px-4 py-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇦🇪 Dubai</td>
                <td className="px-4 py-3">1:00 PM SGT</td>
                <td className="px-4 py-3">1:00 PM - 6:00 PM</td>
                <td className="px-4 py-3">⭐⭐⭐⭐ Great</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 Optimal Meeting Times</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border-2 border-green-300 ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>✅ Best for Europe Teams</h3>
            <p className="text-2xl font-bold mb-2">3:00 PM - 5:00 PM SGT</p>
            <p className="text-sm">= 8:00 AM - 10:00 AM London</p>
            <p className="text-sm">= 9:00 AM - 11:00 AM Berlin</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>⚠️ US East Coast</h3>
            <p className="text-2xl font-bold mb-2">8:00 PM - 10:00 PM SGT</p>
            <p className="text-sm">= 7:00 AM - 9:00 AM New York</p>
            <p className="text-sm">Someone has to flex their hours</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-green-300 ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>✅ Best for APAC Teams</h3>
            <p className="text-2xl font-bold mb-2">10:00 AM - 5:00 PM SGT</p>
            <p className="text-sm">= 11:00 AM - 6:00 PM Tokyo</p>
            <p className="text-sm">= 1:00 PM - 8:00 PM Sydney</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-green-300 ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>✅ Best for India</h3>
            <p className="text-2xl font-bold mb-2">9:30 AM - 6:30 PM SGT</p>
            <p className="text-sm">= 7:00 AM - 4:00 PM Mumbai</p>
            <p className="text-sm">Only 2.5 hour difference!</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💼 Singapore Work Culture</h2>
        
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`font-semibold mb-3 ${headingColor}`}>📋 Work Style</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Punctuality matters</strong> - Be on time for meetings</li>
                <li>• <strong>Direct but polite</strong> - Less indirect than other Asian cultures</li>
                <li>• <strong>Email heavy</strong> - Written confirmations preferred</li>
                <li>• <strong>Hierarchy aware</strong> - Respect seniority in meetings</li>
                <li>• <strong>Efficient</strong> - "Kiasu" culture means being prepared</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-3 ${headingColor}`}>⏰ Working Hours</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Core hours:</strong> 9:00 AM - 6:00 PM</li>
                <li>• <strong>Lunch:</strong> 12:00 PM - 1:00 PM (avoid meetings)</li>
                <li>• <strong>Common overtime:</strong> Many work until 7-8 PM</li>
                <li>• <strong>Weekend work:</strong> Not expected but happens in some industries</li>
                <li>• <strong>Response time:</strong> Usually quick, same business day</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛠️ Async Collaboration Tips</h2>
        
        <div className={`p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>For US/Europe → Singapore</h3>
          <ul className="space-y-2 text-sm">
            <li>• <strong>End-of-day handoffs:</strong> Leave detailed updates before you log off</li>
            <li>• <strong>Loom/video messages:</strong> Record context for complex topics</li>
            <li>• <strong>Shared docs:</strong> Use Google Docs/Notion for async collaboration</li>
            <li>• <strong>Clear deadlines:</strong> Specify timezone when setting due dates</li>
            <li>• <strong>Slack/Teams status:</strong> Indicate your working hours</li>
          </ul>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Singapore's Advantages for Global Teams</h3>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Bridge timezone:</strong> Can connect with both Asia and Europe in one day</li>
            <li>• <strong>English fluent:</strong> Official business language, no translation needed</li>
            <li>• <strong>Reliable infrastructure:</strong> World-class internet, rarely any connectivity issues</li>
            <li>• <strong>No DST:</strong> Time difference stays constant year-round</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 Public Holidays to Note</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm mb-3">Singapore has 11 public holidays. Key ones that may affect work:</p>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Chinese New Year</strong> (Jan/Feb) - 2 days, many take extended leave</li>
            <li>• <strong>Hari Raya Puasa</strong> (varies) - Post-Ramadan celebration</li>
            <li>• <strong>National Day</strong> (Aug 9) - Singapore's independence day</li>
            <li>• <strong>Deepavali</strong> (Oct/Nov) - Hindu festival of lights</li>
            <li>• <strong>Christmas</strong> (Dec 25) - Public holiday</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Singapore use daylight saving time?</h3>
            <p className="text-sm">
              No, Singapore is UTC+8 year-round. This makes scheduling easier - the time 
              difference with other cities only changes when THEY switch for DST.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the best time for a global all-hands?</h3>
            <p className="text-sm">
              For US + Europe + Singapore: Try 8:00 PM SGT = 1:00 PM London = 8:00 AM NYC. 
              It's late for Singapore but workable for important meetings.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How do Singaporeans prefer to communicate?</h3>
            <p className="text-sm">
              Email for formal matters, Slack/Teams for quick questions. WhatsApp is 
              common but usually reserved for closer colleagues. Video calls are standard.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📞</span><span>Best Time to Call</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>Time Difference Calculator</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
