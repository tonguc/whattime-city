'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyCallTimesContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Sydney from Anywhere
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Optimal calling windows from major cities worldwide
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Sydney business hours are <strong>9 AM - 5 PM AEST/AEDT</strong>. The best time to call depends on where you're calling from:
        </p>
        <ul className="mt-2 space-y-1">
          <li>• <strong>From London:</strong> Your evening (6 PM - 10 PM)</li>
          <li>• <strong>From New York:</strong> Your evening (6 PM - 11 PM)</li>
          <li>• <strong>From San Francisco:</strong> Your very early evening (3 PM - 8 PM)</li>
          <li>• <strong>From Tokyo:</strong> Your morning (8 AM - 4 PM)</li>
        </ul>
      </section>
      
      <section className="mb-10 space-y-6">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Calling from Major Cities</h2>
        
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🇬🇧 From London (GMT/BST)</h3>
          <p className="mb-3"><strong>Best window:</strong> 6:00 PM - 10:00 PM London time = 4:00 AM - 8:00 AM Sydney time (before business hours)</p>
          <p className="mb-3"><strong>Alternative:</strong> 11:00 PM - 2:00 AM London time = 9:00 AM - 12:00 PM Sydney time (ideal for business)</p>
          <p className="text-sm">Sydney is typically 11 hours ahead of London, but this varies during DST transitions.</p>
        </div>
        
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🇺🇸 From New York (EST/EDT)</h3>
          <p className="mb-3"><strong>Best window:</strong> 6:00 PM - 11:00 PM EST = 10:00 AM - 3:00 PM Sydney time (business hours)</p>
          <p className="mb-3"><strong>Challenge:</strong> 16 hour difference means minimal overlap. Consider early mornings your time (6-8 AM) = end of Sydney's business day.</p>
          <p className="text-sm">Pacific Coast (LA/SF): Add 3 hours to EST, so call 3:00 PM - 8:00 PM Pacific Time.</p>
        </div>
        
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🇯🇵 From Tokyo (JST)</h3>
          <p className="mb-3"><strong>Best window:</strong> 8:00 AM - 4:00 PM Tokyo time = 9:00 AM - 5:00 PM Sydney time (perfect overlap!)</p>
          <p className="text-sm">Only 1-2 hour difference makes Sydney-Tokyo coordination easy. Similar time zones = convenient meetings.</p>
        </div>
        
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🇸🇬 From Singapore (SGT)</h3>
          <p className="mb-3"><strong>Best window:</strong> 6:00 AM - 2:00 PM Singapore time = 9:00 AM - 5:00 PM Sydney time</p>
          <p className="text-sm">3 hour difference. Early mornings in Singapore = business hours in Sydney. Great for APAC coordination.</p>
        </div>
        
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🇦🇪 From Dubai (GST)</h3>
          <p className="mb-3"><strong>Best window:</strong> 2:00 AM - 10:00 AM Dubai time = 9:00 AM - 5:00 PM Sydney time</p>
          <p className="text-sm">7 hour difference. Very early mornings Dubai time = Sydney business hours. Consider scheduling fixed weekly calls.</p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Tips for International Calls to Sydney</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Best Days</h3>
            <p className="text-sm">Tuesday-Thursday are ideal. Mondays can be slow to start, Fridays many leave early for weekend.</p>
          </div>
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Avoid These Times</h3>
            <p className="text-sm">Before 9 AM or after 5 PM Sydney time. Lunch hours (12-1 PM). Public holidays.</p>
          </div>
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Daylight Saving</h3>
            <p className="text-sm">Sydney DST runs Oct-April (opposite Northern Hemisphere). Check actual time difference during transition weeks.</p>
          </div>
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Tools</h3>
            <p className="text-sm">Use our <Link href="/tools/meeting-planner/" className={linkColor}>Meeting Planner</Link> to find optimal times for recurring calls.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>📚 Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Time Difference Calculator</span>
              <p className={`text-xs ${mutedColor}`}>Sydney vs major cities</p>
            </div>
          </Link>
          <Link href="/tools/meeting-planner/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Meeting Planner</span>
              <p className={`text-xs ${mutedColor}`}>Find best meeting times</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
