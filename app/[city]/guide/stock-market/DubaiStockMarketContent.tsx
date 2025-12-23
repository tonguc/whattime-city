'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiStockMarketContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const dubaiTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = dubaiTime.getHours()
  const dayOfWeek = dubaiTime.getDay()
  const timeStr = dubaiTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  // Friday (5) and Saturday (6) are weekend
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6
  const isOpen = !isWeekend && currentHour >= 10 && currentHour < 14
  
  const marketStatus = isWeekend ? 'Closed (Weekend)' : isOpen ? 'Market Open' : 'Market Closed'
  const statusColor = isWeekend ? 'bg-slate-500' : isOpen ? 'bg-green-500' : 'bg-red-500'
  
  const globalTimes = [
    { city: 'Dubai (DFM)', flag: '🇦🇪', hours: '10:00 AM - 1:45 PM', notes: 'Local time (GST)' },
    { city: 'New York', flag: '🇺🇸', hours: '1:00 AM - 4:45 AM', notes: 'Same day (EST)' },
    { city: 'London', flag: '🇬🇧', hours: '6:00 AM - 9:45 AM', notes: 'Same day (GMT)' },
    { city: 'Mumbai', flag: '🇮🇳', hours: '11:30 AM - 3:15 PM', notes: 'Same day (IST)' },
    { city: 'Singapore', flag: '🇸🇬', hours: '2:00 PM - 5:45 PM', notes: 'Same day (SGT)' },
    { city: 'Tokyo', flag: '🇯🇵', hours: '3:00 PM - 6:45 PM', notes: 'Same day (JST)' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Dubai Stock Exchange Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          DFM & ADX trading times for global investors
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
          <span className="text-sm">DFM ({timeStr}): <strong>{marketStatus}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          The Dubai Financial Market (DFM) trades <strong>Sunday-Thursday, 10:00 AM - 1:45 PM GST</strong>. 
          Note the <strong>Friday-Saturday weekend</strong> — DFM is closed when NYSE/LSE are open on 
          Friday! Abu Dhabi Exchange (ADX) has similar hours.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 Trading Sessions</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border-2 ${isOpen ? 'border-green-400 ring-2 ring-green-200' : 'border-slate-200'} ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>DFM (Dubai Financial Market)</h3>
            <p className="text-2xl font-bold mt-2">10:00 AM - 1:45 PM GST</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>Main index: DFMGI (DFM General Index)</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-slate-200 ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>ADX (Abu Dhabi Securities Exchange)</h3>
            <p className="text-2xl font-bold mt-2">10:00 AM - 2:00 PM GST</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>Main index: ADI (Abu Dhabi Index)</p>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700'}`}>
          <p className="text-sm">
            <strong>⚠️ Important:</strong> UAE markets are closed on Friday-Saturday. This means 
            no overlap with Western markets on Friday afternoons.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 DFM Hours in Your City</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>DFM Trading Hours</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {globalTimes.map((gt, i) => (
                <tr key={gt.city} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="p-3 font-medium">{gt.flag} {gt.city}</td>
                  <td className="p-3">{gt.hours}</td>
                  <td className="p-3">{gt.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔄 DFM vs Major Exchanges</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left ${headingColor}`}>Feature</th>
                <th className={`p-3 text-left ${headingColor}`}>Dubai (DFM)</th>
                <th className={`p-3 text-left ${headingColor}`}>New York (NYSE)</th>
                <th className={`p-3 text-left ${headingColor}`}>London (LSE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-medium">Trading Hours</td>
                <td className="p-3">10 AM - 1:45 PM (3.75 hrs)</td>
                <td className="p-3">9:30 AM - 4 PM (6.5 hrs)</td>
                <td className="p-3">8 AM - 4:30 PM (8.5 hrs)</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Weekend</td>
                <td className="p-3">Fri-Sat</td>
                <td className="p-3">Sat-Sun</td>
                <td className="p-3">Sat-Sun</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Currency</td>
                <td className="p-3">AED (pegged to USD)</td>
                <td className="p-3">USD</td>
                <td className="p-3">GBP</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Time Zone</td>
                <td className="p-3">GST (UTC+4)</td>
                <td className="p-3">EST (UTC-5)</td>
                <td className="p-3">GMT (UTC+0)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Key Trading Insights</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>💵 AED-USD Peg</h3>
            <p className="text-sm">
              The UAE Dirham is pegged to the US Dollar at 3.6725 AED/USD. This eliminates 
              currency risk for USD-based investors and makes UAE markets attractive for 
              dollar-denominated portfolios.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌙 Ramadan Impact</h3>
            <p className="text-sm">
              During Ramadan, DFM trading hours are typically shortened by 1-2 hours. 
              Trading volumes may also decrease. Check DFM announcements for specific 
              Ramadan schedules.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📊 Market Overlap</h3>
            <p className="text-sm">
              DFM overlaps with Asian markets in the afternoon (Singapore, Hong Kong close) 
              and catches the London pre-market. No overlap with US markets.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Dubai Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>UAE Holidays</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
