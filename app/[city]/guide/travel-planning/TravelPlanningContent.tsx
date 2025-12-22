'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TravelPlanningContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const flightTimes = [
    { from: 'London', flag: '🇬🇧', duration: '7-8 hours', jetlag: 'Moderate', direction: 'Westbound (easier)' },
    { from: 'Paris', flag: '🇫🇷', duration: '8-8.5 hours', jetlag: 'Moderate', direction: 'Westbound' },
    { from: 'Dubai', flag: '🇦🇪', duration: '14-15 hours', jetlag: 'Severe', direction: 'Westbound' },
    { from: 'Tokyo', flag: '🇯🇵', duration: '13-14 hours', jetlag: 'Severe', direction: 'Eastbound (harder)' },
    { from: 'Sydney', flag: '🇦🇺', duration: '20-22 hours', jetlag: 'Extreme', direction: 'Via LA usually' },
    { from: 'Los Angeles', flag: '🇺🇸', duration: '5-5.5 hours', jetlag: 'Minimal', direction: 'Same day' },
    { from: 'Miami', flag: '🇺🇸', duration: '3 hours', jetlag: 'None', direction: 'Same timezone' },
    { from: 'São Paulo', flag: '🇧🇷', duration: '10 hours', jetlag: 'Light', direction: 'Similar times' },
    { from: 'Mexico City', flag: '🇲🇽', duration: '4.5-5 hours', jetlag: 'Minimal', direction: 'Same day' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Flying to New York City
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Flight times, jet lag tips, and getting from the airport to Manhattan
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          From Europe: 7-8 hours. From Asia: 13-15 hours. From West Coast US: 5-6 hours. 
          Best arrival time: <strong>morning or early afternoon</strong> to adjust to local time faster. 
          JFK → Manhattan takes 60-90 minutes by transit.
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          Planning your trip to NYC? This guide covers everything from flight duration to beating 
          jet lag to getting from JFK, Newark, or LaGuardia into Manhattan without getting ripped off.
        </p>
      </section>
      
      {/* Flight Times */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>✈️ Flight Times to NYC</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>From</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Flight Time</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Jet Lag</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Direction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {flightTimes.map((ft, i) => (
                <tr key={ft.from} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="p-3 font-medium">{ft.flag} {ft.from}</td>
                  <td className="p-3">{ft.duration}</td>
                  <td className="p-3">{ft.jetlag}</td>
                  <td className="p-3">{ft.direction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Jet Lag Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>😴 Jet Lag Survival Guide</h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-3 ${headingColor}`}>From Europe (5-6 hour difference)</h3>
            <ul className="text-sm space-y-2">
              <li>• Take an overnight flight — arrive NYC morning, stay awake until 9-10 PM local</li>
              <li>• Jet lag lasts 2-3 days typically</li>
              <li>• Westbound travel is easier (you "gain" time)</li>
              <li>• First night: Go to bed at normal NYC time even if exhausted</li>
            </ul>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-3 ${headingColor}`}>From Asia (12-14 hour difference)</h3>
            <ul className="text-sm space-y-2">
              <li>• This is the hardest adjustment — expect 5-7 days</li>
              <li>• Your body clock will be completely inverted</li>
              <li>• Consider stopping in Europe or West Coast for a day</li>
              <li>• Use melatonin at NYC bedtime for first few nights</li>
              <li>• Get sunlight in the morning, avoid it in evening</li>
            </ul>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-3 ${headingColor}`}>From Australia (14-16 hour difference)</h3>
            <ul className="text-sm space-y-2">
              <li>• The extreme case — plan for a week of adjustment</li>
              <li>• Flying via LA can help break up the journey</li>
              <li>• You might be wide awake at 3 AM for days</li>
              <li>• Schedule light activities for first 2 days</li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg border-l-4 border-green-500 ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>Pro Tips</h3>
          <ul className="text-sm space-y-1">
            <li>• Start adjusting sleep schedule 2-3 days before departure</li>
            <li>• Stay hydrated on the plane (skip alcohol)</li>
            <li>• Set your watch to NYC time when you board</li>
            <li>• Don't nap longer than 20 minutes on arrival day</li>
          </ul>
        </div>
      </section>
      
      {/* NYC Airports */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛬 NYC Airports</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>JFK (Queens)</h3>
            <p className="text-sm mb-2">Main international hub</p>
            <ul className="text-xs space-y-1">
              <li>📍 15 miles from Manhattan</li>
              <li>🚇 AirTrain + Subway: 60-90 min, $10.75</li>
              <li>🚕 Taxi: 45-75 min, $70 flat + tolls</li>
              <li>🚐 Shuttle: $20-25, shared</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Newark (New Jersey)</h3>
            <p className="text-sm mb-2">Often cheaper flights</p>
            <ul className="text-xs space-y-1">
              <li>📍 16 miles from Manhattan</li>
              <li>🚇 AirTrain + NJ Transit: 45-60 min, $16</li>
              <li>🚕 Taxi/Uber: 40-60 min, $60-80</li>
              <li>🚌 Newark Airport Express: 45 min, $18</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>LaGuardia (Queens)</h3>
            <p className="text-sm mb-2">Domestic flights mostly</p>
            <ul className="text-xs space-y-1">
              <li>📍 8 miles from Manhattan</li>
              <li>🚇 Bus + Subway: 60-75 min, $2.90</li>
              <li>🚕 Taxi: 25-45 min, $35-55</li>
              <li>💡 Closest but traffic-dependent</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Best Arrival Time */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>⏰ Best Time to Arrive</h2>
        
        <div className={`p-5 rounded-xl border-2 ${isLight ? 'border-green-200 bg-green-50' : 'border-green-800 bg-green-900/20'}`}>
          <h3 className={`font-semibold mb-2 ${headingColor}`}>Ideal: Morning arrival (8 AM - 12 PM)</h3>
          <ul className="text-sm space-y-2">
            <li>✅ Full day to adjust to timezone</li>
            <li>✅ Hotel might let you check in early (or store bags)</li>
            <li>✅ Sunlight helps reset circadian rhythm</li>
            <li>✅ Easier to stay awake until normal bedtime</li>
          </ul>
        </div>
        
        <div className={`mt-4 p-5 rounded-xl border-2 ${isLight ? 'border-yellow-200 bg-yellow-50' : 'border-yellow-800 bg-yellow-900/20'}`}>
          <h3 className={`font-semibold mb-2 ${headingColor}`}>Okay: Afternoon (12 PM - 5 PM)</h3>
          <ul className="text-sm space-y-2">
            <li>⚠️ Less time before evening</li>
            <li>⚠️ Rush hour traffic from airport</li>
            <li>✅ Still time for dinner and light exploration</li>
          </ul>
        </div>
        
        <div className={`mt-4 p-5 rounded-xl border-2 ${isLight ? 'border-red-200 bg-red-50' : 'border-red-800 bg-red-900/20'}`}>
          <h3 className={`font-semibold mb-2 ${headingColor}`}>Avoid if possible: Late night (after 9 PM)</h3>
          <ul className="text-sm space-y-2">
            <li>❌ Harder to adjust (you'll want to sleep immediately)</li>
            <li>❌ Limited transport options late night</li>
            <li>❌ Wasted first day if you crash</li>
          </ul>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>FAQ</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How long does jet lag last from London to NYC?</h3>
            <p className="text-sm">Usually 2-4 days. Westbound travel (to NYC) is easier than eastbound (returning). Most people feel normal by day 3.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Should I take an overnight or daytime flight to NYC?</h3>
            <p className="text-sm">Overnight (red-eye) flights from Europe are ideal — you arrive in the morning and can power through the day. From Asia, timing is trickier; consider a layover to break up the journey.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the cheapest way from JFK to Manhattan?</h3>
            <p className="text-sm">Subway: Take the AirTrain to Jamaica Station ($8.50), then the E/J/Z train to Manhattan ($2.90). Total: $10.75, takes 60-90 minutes.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Which NYC airport is best for international flights?</h3>
            <p className="text-sm">JFK has the most international connections and best transit to Manhattan. Newark can have cheaper flights but requires going through New Jersey. LaGuardia is mostly domestic.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/tools/jet-lag/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>😴</span><span>Jet Lag Calculator</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🗽</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>NYC Time Difference</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2025. Flight times and transport prices are estimates.</p>
    </div>
  )
}
