'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function StockMarketContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const nycTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = nycTime.getHours()
  const currentMinute = nycTime.getMinutes()
  const dayOfWeek = nycTime.getDay()
  const timeStr = nycTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  // Market status
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const isPreMarket = !isWeekend && currentHour >= 4 && (currentHour < 9 || (currentHour === 9 && currentMinute < 30))
  const isOpen = !isWeekend && ((currentHour === 9 && currentMinute >= 30) || (currentHour >= 10 && currentHour < 16))
  const isAfterHours = !isWeekend && currentHour >= 16 && currentHour < 20
  const isClosed = !isPreMarket && !isOpen && !isAfterHours
  
  const getMarketStatus = () => {
    if (isWeekend) return { status: 'Closed (Weekend)', color: 'bg-slate-500' }
    if (isPreMarket) return { status: 'Pre-Market Trading', color: 'bg-yellow-500' }
    if (isOpen) return { status: 'Market Open', color: 'bg-green-500' }
    if (isAfterHours) return { status: 'After-Hours Trading', color: 'bg-blue-500' }
    return { status: 'Market Closed', color: 'bg-red-500' }
  }
  
  const marketStatus = getMarketStatus()
  
  const globalTimes = [
    { city: 'New York', flag: '🇺🇸', open: '9:30 AM', close: '4:00 PM', preMarket: '4:00 AM', afterHours: '8:00 PM' },
    { city: 'London', flag: '🇬🇧', open: '2:30 PM', close: '9:00 PM', preMarket: '9:00 AM', afterHours: '1:00 AM' },
    { city: 'Paris/Frankfurt', flag: '🇪🇺', open: '3:30 PM', close: '10:00 PM', preMarket: '10:00 AM', afterHours: '2:00 AM' },
    { city: 'Dubai', flag: '🇦🇪', open: '6:30 PM', close: '1:00 AM', preMarket: '1:00 PM', afterHours: '5:00 AM' },
    { city: 'Mumbai', flag: '🇮🇳', open: '8:00 PM', close: '2:30 AM', preMarket: '2:30 PM', afterHours: '6:30 AM' },
    { city: 'Singapore/HK', flag: '🇸🇬', open: '10:30 PM', close: '5:00 AM', preMarket: '5:00 PM', afterHours: '9:00 AM' },
    { city: 'Tokyo', flag: '🇯🇵', open: '11:30 PM', close: '6:00 AM', preMarket: '6:00 PM', afterHours: '10:00 AM' },
    { city: 'Sydney', flag: '🇦🇺', open: '1:30 AM', close: '8:00 AM', preMarket: '8:00 PM', afterHours: '12:00 PM' },
    { city: 'Los Angeles', flag: '🇺🇸', open: '6:30 AM', close: '1:00 PM', preMarket: '1:00 AM', afterHours: '5:00 PM' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          NYSE Trading Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Stock market hours for global investors
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${marketStatus.color}`}></span>
          <span className="text-sm">NYSE ({timeStr}): <strong>{marketStatus.status}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          The NYSE is open <strong>Monday-Friday, 9:30 AM - 4:00 PM Eastern Time</strong>. 
          Pre-market trading starts at 4:00 AM, after-hours continues until 8:00 PM. 
          Closed on weekends and{' '}
          <Link href={`/${city.slug}/guide/holidays/`} className={linkColor}>US market holidays</Link>.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 Trading Sessions (Eastern Time)</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl border-2 ${isPreMarket ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-slate-200'} ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Pre-Market</h3>
            <p className="text-2xl font-bold mt-2">4:00 AM - 9:30 AM</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>Lower volume, wider spreads. React to overnight news.</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${isOpen ? 'border-green-400 ring-2 ring-green-200' : 'border-slate-200'} ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Regular Session</h3>
            <p className="text-2xl font-bold mt-2">9:30 AM - 4:00 PM</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>Peak liquidity. The opening bell rings at 9:30 AM.</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${isAfterHours ? 'border-blue-400 ring-2 ring-blue-200' : 'border-slate-200'} ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>After-Hours</h3>
            <p className="text-2xl font-bold mt-2">4:00 PM - 8:00 PM</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>React to earnings. Lower volume than regular hours.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 NYSE Hours in Your City</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Market Open</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Market Close</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Pre-Market</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {globalTimes.map((gt, i) => (
                <tr key={gt.city} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="p-3 font-medium">{gt.flag} {gt.city}</td>
                  <td className="p-3">{gt.open}</td>
                  <td className="p-3">{gt.close}</td>
                  <td className="p-3">{gt.preMarket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          Times shown in each city's local time. Shifts by 1 hour during DST transitions.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2025 NYSE Holidays (Closed)</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { date: 'Jan 1', name: "New Year's Day" },
            { date: 'Jan 20', name: 'MLK Jr. Day' },
            { date: 'Feb 17', name: "Presidents' Day" },
            { date: 'Apr 18', name: 'Good Friday' },
            { date: 'May 26', name: 'Memorial Day' },
            { date: 'Jun 19', name: 'Juneteenth' },
            { date: 'Jul 4', name: 'Independence Day' },
            { date: 'Sep 1', name: 'Labor Day' },
            { date: 'Nov 27', name: 'Thanksgiving' },
            { date: 'Dec 25', name: 'Christmas' },
          ].map(h => (
            <div key={h.date} className={`p-3 rounded-lg ${cardBg}`}>
              <span className="font-medium">{h.date}</span>
              <span className={`ml-2 ${mutedColor}`}>{h.name}</span>
            </div>
          ))}
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          Early close (1 PM ET) on Jul 3, Nov 28, and Dec 24.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>FAQ</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time does the NYSE open in London?</h3>
            <p className="text-sm">The NYSE opens at 2:30 PM London time (GMT/BST) and closes at 9:00 PM. Pre-market starts at 9:00 AM London time.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Can I trade NYSE from Asia?</h3>
            <p className="text-sm">Yes, but it means late-night trading. From Tokyo, regular hours are 11:30 PM - 6:00 AM. Many Asian investors use pre-market hours instead.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is NASDAQ the same hours as NYSE?</h3>
            <p className="text-sm">Yes, both have regular hours 9:30 AM - 4:00 PM ET. NASDAQ pre-market starts earlier (4 AM) and extended hours end at 8 PM.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>NYC Public Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>NYC Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>Time Difference Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2025. Check exchange websites for official schedules.</p>
    </div>
  )
}
