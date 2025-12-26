'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function LondonRemoteWorkContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const londonTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = londonTime.getHours()
  const timeStr = londonTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const isWorkHours = currentHour >= 9 && currentHour < 18
  const isEarlyMorning = currentHour >= 6 && currentHour < 9
  const isEvening = currentHour >= 18 && currentHour < 22
  
  const timeZoneOverlaps = [
    { location: 'New York', offset: '-5h', londonMorning: '2 AM - 6 AM', londonAfternoon: '6 AM - 1 PM', bestWindow: '2 PM - 5:30 PM London', quality: 'Good' },
    { location: 'Los Angeles', offset: '-8h', londonMorning: '11 PM - 3 AM', londonAfternoon: '3 AM - 10 AM', bestWindow: '5 PM - 6 PM London', quality: 'Limited' },
    { location: 'Dubai', offset: '+4h', londonMorning: '1 PM - 5 PM', londonAfternoon: '5 PM - 12 AM', bestWindow: '9 AM - 1 PM London', quality: 'Good' },
    { location: 'Singapore', offset: '+8h', londonMorning: '5 PM - 9 PM', londonAfternoon: '9 PM - 4 AM', bestWindow: '9 AM - 11 AM London', quality: 'Limited' },
    { location: 'Tokyo', offset: '+9h', londonMorning: '6 PM - 10 PM', londonAfternoon: '10 PM - 5 AM', bestWindow: '8 AM - 10 AM London', quality: 'Difficult' },
    { location: 'Sydney', offset: '+11h', londonMorning: '8 PM - 12 AM', londonAfternoon: '12 AM - 7 AM', bestWindow: '7 AM - 9 AM London', quality: 'Difficult' },
    { location: 'Paris/Berlin', offset: '+1h', londonMorning: '10 AM - 2 PM', londonAfternoon: '2 PM - 7 PM', bestWindow: 'All day', quality: 'Excellent' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Working with London Teams
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Time zone strategies for remote collaboration with UK-based colleagues
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isWorkHours ? 'bg-green-500' : isEarlyMorning || isEvening ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">
            London: {timeStr} — {isWorkHours ? 'Core work hours' : isEarlyMorning ? 'Early morning' : isEvening ? 'Evening' : 'Outside work hours'}
          </span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          London operates on <strong>GMT/BST</strong>, with core business hours from <strong>9 AM to 5:30 PM</strong>. 
          For Americans, your morning is London's afternoon — perfect overlap. For Asia-Pacific, early mornings 
          catch London before they leave. Europe? You're basically in sync.
        </p>
      </section>
      
      {/* Overlap Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Zone Overlap Guide</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Your Location</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Best Overlap Window</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Quality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              {timeZoneOverlaps.map(tz => (
                <tr key={tz.location}>
                  <td className="px-4 py-3 font-medium">{tz.location} <span className={mutedColor}>({tz.offset})</span></td>
                  <td className="px-4 py-3">{tz.bestWindow}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      tz.quality === 'Excellent' ? 'bg-green-100 text-green-700' :
                      tz.quality === 'Good' ? 'bg-blue-100 text-blue-700' :
                      tz.quality === 'Limited' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>{tz.quality}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* UK Work Culture */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🇬🇧 UK Work Culture</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>⏰ Working Hours</h3>
            <ul className="text-sm space-y-1">
              <li>• Standard hours: <strong>9 AM - 5:30 PM</strong> (longer than US 9-5)</li>
              <li>• Lunch: Usually 1 hour, typically 12-1 PM or 1-2 PM</li>
              <li>• Friday: Some offices wind down after 4 PM</li>
              <li>• Overtime: Less expected than in US; work-life balance valued</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📧 Communication Style</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Polite indirectness:</strong> "I wonder if you might..." rather than direct requests</li>
              <li>• <strong>Understatement:</strong> "Not bad" often means "quite good"</li>
              <li>• <strong>Email formality:</strong> More formal than US, especially initially</li>
              <li>• <strong>Response time:</strong> Same-day reply expected for urgent matters</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🎯 Meeting Culture</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Punctuality:</strong> Being on time means being 1-2 minutes early</li>
              <li>• <strong>Small talk:</strong> Brief pleasantries expected before diving in</li>
              <li>• <strong>Tea breaks:</strong> Don't schedule over traditional tea time (3-4 PM)</li>
              <li>• <strong>Decision making:</strong> Often requires consultation, not immediate answers</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Async Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💬 Async Communication Tips</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Write for morning reading</h3>
            <p className="text-sm mt-1">
              If you're in the US, messages sent at your end of day arrive as London starts theirs. 
              Make them comprehensive — include all context so they can act without follow-up questions.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Use scheduled sends</h3>
            <p className="text-sm mt-1">
              Schedule emails to arrive during London working hours. An email at 9 AM London time 
              gets faster responses than one that arrives at 3 AM.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Respect bank holidays</h3>
            <p className="text-sm mt-1">
              The UK has different holidays than the US. Don't expect responses on UK bank holidays, 
              and check the calendar before scheduling important deadlines.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the best meeting time for London-NYC?</h3>
            <p className="text-sm">2-4 PM London / 9-11 AM New York is the sweet spot — both sides are fully awake and in work mode.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Do UK offices close early on Fridays?</h3>
            <p className="text-sm">
              Not officially, but productivity often dips after 4 PM on Fridays. Schedule important meetings earlier in the week.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Guides */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📞</span><span>Best Time to Call London</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>London Time Difference</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>London Business Hours</span>
          </Link>
          <Link href="/tools/meeting-planner/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>Meeting Planner Tool</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
