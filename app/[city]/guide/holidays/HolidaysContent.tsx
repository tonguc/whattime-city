'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function HolidaysContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const holidays2025 = [
    { date: 'Jan 1 (Wed)', name: "New Year's Day", banks: '❌', stores: '⚠️', attractions: '⚠️', notes: 'Most closed or reduced hours' },
    { date: 'Jan 20 (Mon)', name: 'Martin Luther King Jr. Day', banks: '❌', stores: '✅', attractions: '✅', notes: 'Federal holiday. Banks/govt closed.' },
    { date: 'Feb 12 (Wed)', name: "Lincoln's Birthday", banks: '⚠️', stores: '✅', attractions: '✅', notes: 'NY state holiday. Some banks closed.' },
    { date: 'Feb 17 (Mon)', name: "Presidents' Day", banks: '❌', stores: '✅', attractions: '✅', notes: 'Federal holiday. Sales common.' },
    { date: 'Apr 18 (Fri)', name: 'Good Friday', banks: '⚠️', stores: '✅', attractions: '✅', notes: 'NYSE closed. Not a federal holiday.' },
    { date: 'May 26 (Mon)', name: 'Memorial Day', banks: '❌', stores: '✅', attractions: '✅', notes: 'Unofficial start of summer.' },
    { date: 'Jun 19 (Thu)', name: 'Juneteenth', banks: '❌', stores: '✅', attractions: '✅', notes: 'Federal holiday since 2021.' },
    { date: 'Jul 4 (Fri)', name: 'Independence Day', banks: '❌', stores: '⚠️', attractions: '⚠️', notes: 'Fireworks! Many closures.' },
    { date: 'Sep 1 (Mon)', name: 'Labor Day', banks: '❌', stores: '✅', attractions: '✅', notes: 'End of summer. Sales common.' },
    { date: 'Oct 13 (Mon)', name: 'Columbus Day', banks: '❌', stores: '✅', attractions: '✅', notes: 'Federal holiday. Parade on 5th Ave.' },
    { date: 'Nov 11 (Tue)', name: 'Veterans Day', banks: '❌', stores: '✅', attractions: '✅', notes: 'Federal holiday.' },
    { date: 'Nov 27 (Thu)', name: 'Thanksgiving', banks: '❌', stores: '❌', attractions: '❌', notes: 'Almost everything closed.' },
    { date: 'Nov 28 (Fri)', name: 'Black Friday', banks: '⚠️', stores: '✅', attractions: '✅', notes: 'Major shopping day.' },
    { date: 'Dec 25 (Thu)', name: 'Christmas Day', banks: '❌', stores: '❌', attractions: '❌', notes: 'Almost everything closed.' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          New York Public Holidays 2025
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          What's open and closed throughout the year
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          NYC has <strong>11 federal holidays</strong> when banks and government offices close. 
          Most stores and attractions stay open except on <strong>Thanksgiving and Christmas</strong>. 
          The NYSE observes 10 market holidays.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2025 Holiday Calendar</h2>
        
        {/* Legend - moved above calendar */}
        <div className={`mb-4 p-3 rounded-xl flex flex-wrap items-center gap-4 text-sm ${cardBg}`}>
          <span className={`font-medium ${mutedColor}`}>Status:</span>
          <span className="flex items-center gap-1">✅ <span className="text-green-600">Open</span></span>
          <span className="flex items-center gap-1">⚠️ <span className="text-amber-600">Limited hours</span></span>
          <span className="flex items-center gap-1">❌ <span className="text-red-600">Closed</span></span>
        </div>
        
        <div className="space-y-3">
          {holidays2025.map(h => (
            <div key={h.date} className={`p-4 rounded-xl border ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-800/50'}`}>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className={`font-mono text-sm ${mutedColor}`}>{h.date}</span>
                <h3 className={`font-semibold ${headingColor}`}>{h.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3 text-sm mb-2">
                <span>Banks: {h.banks}</span>
                <span>Stores: {h.stores}</span>
                <span>Attractions: {h.attractions}</span>
              </div>
              <p className={`text-sm ${mutedColor}`}>{h.notes}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🦃 Thanksgiving & Christmas</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Thanksgiving (Nov 27)</h3>
            <p className="text-sm mb-2">The one day NYC truly shuts down:</p>
            <ul className="text-sm space-y-1">
              <li>• Macy's Parade (starts 8:30 AM)</li>
              <li>• Almost all stores closed</li>
              <li>• Limited restaurant options</li>
              <li>• Subway runs, but reduced</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Christmas (Dec 25)</h3>
            <p className="text-sm mb-2">Similar closures, but some things open:</p>
            <ul className="text-sm space-y-1">
              <li>• Movie theaters often open</li>
              <li>• Chinese restaurants typically open</li>
              <li>• Hotel restaurants serve guests</li>
              <li>• Some delis/bodegas open</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Transit on Holidays - NEW */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚇 Transit on Holidays</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-4">
            The subway runs 365 days a year, but holiday service is different:
          </p>
          
          <ul className="text-sm space-y-2">
            <li>📅 <strong>Holiday schedule = Sunday schedule:</strong> Trains run less frequently (every 10-15 minutes instead of 3-5).</li>
            <li>🚌 <strong>Buses:</strong> Also on Sunday schedule — check MTA for specific routes.</li>
            <li>🚫 <strong>Express service:</strong> Many express trains run local on holidays.</li>
            <li>⏰ <strong>Wait times:</strong> Expect 2-3x longer waits than weekdays.</li>
          </ul>
          
          <div className={`mt-4 p-3 rounded-lg ${isLight ? 'bg-yellow-50' : 'bg-yellow-900/20'}`}>
            <p className="text-sm">
              ⚠️ <strong>Macy's Thanksgiving Parade:</strong> Multiple subway stations near the parade route 
              are CLOSED or skip stops. Herald Square, 34th St, and nearby stations are chaos until afternoon.
            </p>
          </div>
        </div>
      </section>
      
      {/* Best Shopping Holidays - NEW */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛍️ Best Shopping Holidays</h2>
        
        <p className="mb-4">
          If you're timing your trip for shopping deals, these are the days to target:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border-2 ${isLight ? 'border-green-200 bg-green-50' : 'border-green-800 bg-green-900/20'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🏆 Best Deals</h3>
            <ul className="text-sm space-y-2">
              <li><strong>Black Friday</strong> (Nov 28) — The big one. Chaos but deals.</li>
              <li><strong>Presidents' Day</strong> (Feb) — Winter clearance sales.</li>
              <li><strong>Labor Day</strong> (Sep) — End of summer sales.</li>
              <li><strong>Memorial Day</strong> (May) — Spring sales kick off.</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${isLight ? 'border-amber-200 bg-amber-50' : 'border-amber-800 bg-amber-900/20'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>💡 Pro Tips</h3>
            <ul className="text-sm space-y-2">
              <li>Black Friday starts Thursday evening now</li>
              <li>SoHo is impossible on Black Friday — try Williamsburg</li>
              <li>January = best post-holiday clearance</li>
              <li>Many stores price-match online competitors</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>FAQ</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is today a holiday in New York?</h3>
            <p className="text-sm">Check the calendar above. If it's a federal holiday, expect bank and government closures. Retail and attractions usually stay open except Thanksgiving and Christmas.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are museums open on holidays?</h3>
            <p className="text-sm">Most museums stay open on federal holidays — they're actually busier those days. Closed Thanksgiving, Christmas, and sometimes New Year's Day. Always check specific museum websites.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does the subway run on holidays?</h3>
            <p className="text-sm">Yes, the NYC subway runs 24/7, 365 days a year. Holiday schedules are usually Sunday schedules, meaning less frequent service.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>NYC Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📈</span><span>Stock Market Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🗽</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2025.</p>
    </div>
  )
}
