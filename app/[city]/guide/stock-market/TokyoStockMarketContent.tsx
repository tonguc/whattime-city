'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoStockMarketContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const tokyoTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = tokyoTime.getHours()
  const currentMinute = tokyoTime.getMinutes()
  const dayOfWeek = tokyoTime.getDay()
  const timeStr = tokyoTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const isMorningSession = !isWeekend && currentHour >= 9 && (currentHour < 11 || (currentHour === 11 && currentMinute < 30))
  const isLunchBreak = !isWeekend && ((currentHour === 11 && currentMinute >= 30) || currentHour === 12 || (currentHour === 12 && currentMinute < 30))
  const isAfternoonSession = !isWeekend && currentHour >= 12 && currentMinute >= 30 && currentHour < 15
  const isOpen = isMorningSession || isAfternoonSession
  
  const getMarketStatus = () => {
    if (isWeekend) return { status: 'Closed (Weekend)', color: 'bg-slate-500' }
    if (isMorningSession) return { status: 'Morning Session', color: 'bg-green-500' }
    if (isLunchBreak) return { status: 'Lunch Break', color: 'bg-yellow-500' }
    if (isAfternoonSession) return { status: 'Afternoon Session', color: 'bg-green-500' }
    return { status: 'Market Closed', color: 'bg-red-500' }
  }
  
  const marketStatus = getMarketStatus()
  
  const globalTimes = [
    { city: 'Tokyo', flag: '🇯🇵', morning: '9:00 AM - 11:30 AM', afternoon: '12:30 PM - 3:00 PM', notes: 'Local time (JST)' },
    { city: 'New York', flag: '🇺🇸', morning: '7:00 PM - 9:30 PM*', afternoon: '10:30 PM - 1:00 AM', notes: 'Previous day (EST)' },
    { city: 'London', flag: '🇬🇧', morning: '12:00 AM - 2:30 AM', afternoon: '3:30 AM - 6:00 AM', notes: 'Same day (GMT)' },
    { city: 'Singapore', flag: '🇸🇬', morning: '8:00 AM - 10:30 AM', afternoon: '11:30 AM - 2:00 PM', notes: 'Same day (SGT)' },
    { city: 'Sydney', flag: '🇦🇺', morning: '11:00 AM - 1:30 PM', afternoon: '2:30 PM - 5:00 PM', notes: 'Same day (AEDT)' },
    { city: 'Dubai', flag: '🇦🇪', morning: '4:00 AM - 6:30 AM', afternoon: '7:30 AM - 10:00 AM', notes: 'Same day (GST)' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Tokyo Stock Exchange Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          TSE & Nikkei 225 trading times for global investors
        </p>
        
        <div className={`mt-4 flex flex-wrap items-center gap-3`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
            <span className={`w-2 h-2 rounded-full ${marketStatus.color}`}></span>
            <span className="text-sm">TSE ({timeStr}): <strong>{marketStatus.status}</strong></span>
          </div>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          The Tokyo Stock Exchange trades <strong>Monday-Friday, 9:00 AM - 3:00 PM JST</strong> with a 
          <strong> lunch break from 11:30 AM - 12:30 PM</strong>. This split-session format is unique 
          among major world markets. Closed on weekends and{' '}
          <Link href={`/${city.slug}/guide/holidays/`} className={linkColor}>Japanese holidays</Link>.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 Trading Sessions (Tokyo Time)</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl border-2 ${isMorningSession ? 'border-green-400 ring-2 ring-green-200' : 'border-slate-200'} ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Morning Session (前場)</h3>
            <p className="text-2xl font-bold mt-2">9:00 AM - 11:30 AM</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>2.5 hours. Often sets the day's tone based on overnight US markets.</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${isLunchBreak ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-slate-200'} ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Lunch Break (昼休み)</h3>
            <p className="text-2xl font-bold mt-2">11:30 AM - 12:30 PM</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>1 hour. No trading. Unique among major markets.</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${isAfternoonSession ? 'border-green-400 ring-2 ring-green-200' : 'border-slate-200'} ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Afternoon Session (後場)</h3>
            <p className="text-2xl font-bold mt-2">12:30 PM - 3:00 PM</p>
            <p className={`text-sm mt-2 ${mutedColor}`}>2.5 hours. Final 15 minutes often see increased volume.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 TSE Hours in Your City</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Morning Session</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Afternoon Session</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {globalTimes.map((gt, i) => (
                <tr key={gt.city} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="p-3 font-medium">{gt.flag} {gt.city}</td>
                  <td className="p-3">{gt.morning}</td>
                  <td className="p-3">{gt.afternoon}</td>
                  <td className="p-3">{gt.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * For US investors: TSE trades during your evening/night hours. No overlap with NYSE.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2025 TSE Holidays (Closed)</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { date: 'Jan 1-3', name: 'New Year Holiday' },
            { date: 'Jan 13', name: 'Coming of Age Day' },
            { date: 'Feb 11', name: 'National Foundation Day' },
            { date: 'Feb 23', name: "Emperor's Birthday (observed Feb 24)" },
            { date: 'Mar 20', name: 'Vernal Equinox Day' },
            { date: 'Apr 29', name: 'Showa Day' },
            { date: 'May 3-6', name: 'Golden Week' },
            { date: 'Jul 21', name: 'Marine Day' },
            { date: 'Aug 11', name: 'Mountain Day' },
            { date: 'Sep 15', name: 'Respect for the Aged Day' },
            { date: 'Sep 23', name: 'Autumnal Equinox Day' },
            { date: 'Oct 13', name: 'Sports Day' },
            { date: 'Nov 3', name: 'Culture Day' },
            { date: 'Nov 23', name: 'Labor Thanksgiving Day (observed Nov 24)' },
            { date: 'Dec 31', name: 'New Year Eve' },
          ].map(holiday => (
            <div key={holiday.date} className={`p-3 rounded-lg ${cardBg}`}>
              <span className={`font-medium ${headingColor}`}>{holiday.date}</span>
              <span className={` ml-2 ${mutedColor}`}>{holiday.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔄 TSE vs NYSE & LSE</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left ${headingColor}`}>Feature</th>
                <th className={`p-3 text-left ${headingColor}`}>Tokyo (TSE)</th>
                <th className={`p-3 text-left ${headingColor}`}>New York (NYSE)</th>
                <th className={`p-3 text-left ${headingColor}`}>London (LSE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-medium">Trading Hours</td>
                <td className="p-3">9:00 AM - 3:00 PM (5 hrs)</td>
                <td className="p-3">9:30 AM - 4:00 PM (6.5 hrs)</td>
                <td className="p-3">8:00 AM - 4:30 PM (8.5 hrs)</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Lunch Break</td>
                <td className="p-3">Yes (11:30-12:30)</td>
                <td className="p-3">No</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Main Index</td>
                <td className="p-3">Nikkei 225, TOPIX</td>
                <td className="p-3">S&P 500, Dow Jones</td>
                <td className="p-3">FTSE 100</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Currency</td>
                <td className="p-3">JPY (Yen)</td>
                <td className="p-3">USD</td>
                <td className="p-3">GBP</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Time Zone</td>
                <td className="p-3">JST (UTC+9)</td>
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
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌙 Following US Markets</h3>
            <p className="text-sm">
              The TSE morning session often reacts to overnight US market moves. Major S&P 500 gains 
              or losses typically influence Nikkei 225 direction at the open. Check US futures 
              before trading.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🍱 The Lunch Break</h3>
            <p className="text-sm">
              Tokyo's 1-hour lunch break is unique. Some traders use this time to reassess positions 
              based on morning action. Afternoon sessions often see different dynamics than morning.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📊 No Overlap with Western Markets</h3>
            <p className="text-sm">
              TSE closes (3 PM JST) before European markets open and long before US markets. 
              This means no real-time arbitrage opportunities but also less correlation during 
              trading hours.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Why does the TSE have a lunch break?</h3>
            <p className="text-sm">
              The lunch break dates back to when trading was done on a physical trading floor. 
              While other exchanges eliminated it, the TSE maintained the tradition. There's 
              ongoing debate about removing it to increase trading hours.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Can I trade Japanese stocks from the US?</h3>
            <p className="text-sm">
              Yes. Many brokers offer direct TSE access (Interactive Brokers, Fidelity for some stocks). 
              Alternatively, trade Japanese ADRs on US exchanges during NYSE hours, or invest in 
              Japan-focused ETFs like EWJ.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the difference between Nikkei 225 and TOPIX?</h3>
            <p className="text-sm">
              Nikkei 225 is price-weighted (like Dow Jones), consisting of 225 large-cap stocks. 
              TOPIX is market-cap weighted (like S&P 500), covering all stocks on TSE Prime. 
              TOPIX is considered more representative of the overall market.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Tokyo Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>Japanese Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>Time Difference Calculator</span>
          </Link>
          <Link href="/time/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🔄</span><span>Time Zone Converter</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
