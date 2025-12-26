'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonStockMarketContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const londonTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = londonTime.getHours()
  const currentMinute = londonTime.getMinutes()
  const currentDay = londonTime.getDay()
  const timeStr = londonTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  // LSE hours: 8:00 AM - 4:30 PM GMT/BST
  const isWeekday = currentDay >= 1 && currentDay <= 5
  const isPreMarket = isWeekday && currentHour >= 7 && currentHour < 8
  const isMarketOpen = isWeekday && ((currentHour === 8 && currentMinute >= 0) || (currentHour > 8 && currentHour < 16) || (currentHour === 16 && currentMinute <= 30))
  const isAfterHours = isWeekday && ((currentHour === 16 && currentMinute > 30) || (currentHour > 16 && currentHour < 18))
  
  let marketStatus = 'Closed'
  let statusColor = 'bg-red-500'
  if (isMarketOpen) {
    marketStatus = 'Market Open'
    statusColor = 'bg-green-500'
  } else if (isPreMarket) {
    marketStatus = 'Pre-Market Auction'
    statusColor = 'bg-yellow-500'
  } else if (isAfterHours) {
    marketStatus = 'Post-Market'
    statusColor = 'bg-blue-500'
  }
  
  const globalTimes = [
    { city: 'New York', flag: '🇺🇸', open: '3:00 AM', close: '11:30 AM', note: 'EST (winter)' },
    { city: 'Los Angeles', flag: '🇺🇸', open: '12:00 AM', close: '8:30 AM', note: 'PST' },
    { city: 'Tokyo', flag: '🇯🇵', open: '5:00 PM', close: '1:30 AM +1', note: 'JST' },
    { city: 'Hong Kong', flag: '🇭🇰', open: '4:00 PM', close: '12:30 AM +1', note: 'HKT' },
    { city: 'Sydney', flag: '🇦🇺', open: '7:00 PM', close: '3:30 AM +1', note: 'AEDT' },
    { city: 'Dubai', flag: '🇦🇪', open: '12:00 PM', close: '8:30 PM', note: 'GST' },
    { city: 'Mumbai', flag: '🇮🇳', open: '1:30 PM', close: '10:00 PM', note: 'IST' },
    { city: 'Singapore', flag: '🇸🇬', open: '4:00 PM', close: '12:30 AM +1', note: 'SGT' },
  ]
  
  const holidays2025 = [
    { date: 'January 1', day: 'Wednesday', name: "New Year's Day" },
    { date: 'April 18', day: 'Friday', name: 'Good Friday' },
    { date: 'April 21', day: 'Monday', name: 'Easter Monday' },
    { date: 'May 5', day: 'Monday', name: 'Early May Bank Holiday' },
    { date: 'May 26', day: 'Monday', name: 'Spring Bank Holiday' },
    { date: 'August 25', day: 'Monday', name: 'Summer Bank Holiday' },
    { date: 'December 25', day: 'Thursday', name: 'Christmas Day' },
    { date: 'December 26', day: 'Friday', name: 'Boxing Day' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          London Stock Exchange Trading Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          LSE & FTSE trading times for global investors
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
          <span className="text-sm">
            London: {timeStr} — {marketStatus}
          </span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          The London Stock Exchange opens at <strong>8:00 AM</strong> and closes at <strong>4:30 PM GMT/BST</strong>, 
          Monday through Friday. There's a pre-market auction from 7:50-8:00 AM and a closing auction from 4:30-4:35 PM. 
          The LSE is closed on UK bank holidays.
        </p>
      </section>
      
      {/* Main Trading Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📈 LSE Trading Sessions</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Session</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Time (GMT/BST)</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Description</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr className={isLight ? 'bg-yellow-50' : 'bg-yellow-900/20'}>
                <td className="px-4 py-3 font-medium">Opening Auction</td>
                <td className="px-4 py-3">7:50 AM - 8:00 AM</td>
                <td className="px-4 py-3">Price discovery period before market opens</td>
              </tr>
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className="px-4 py-3 font-medium">Continuous Trading</td>
                <td className="px-4 py-3">8:00 AM - 4:30 PM</td>
                <td className="px-4 py-3">Main trading session - 8.5 hours</td>
              </tr>
              <tr className={isLight ? 'bg-blue-50' : 'bg-blue-900/20'}>
                <td className="px-4 py-3 font-medium">Closing Auction</td>
                <td className="px-4 py-3">4:30 PM - 4:35 PM</td>
                <td className="px-4 py-3">Final price determination</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Order Maintenance</td>
                <td className="px-4 py-3">4:35 PM - 4:40 PM</td>
                <td className="px-4 py-3">Order book closing period</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💡 Key Differences from US Markets</h3>
          <ul className="text-sm space-y-1">
            <li>• LSE opens 1.5 hours <strong>before</strong> NYSE (8 AM vs 2:30 PM London time)</li>
            <li>• No "pre-market" trading like US markets — just the 10-minute opening auction</li>
            <li>• LSE closes while NYSE is still in early trading (4:30 PM London = 11:30 AM NYC)</li>
            <li>• Total trading day: 8.5 hours (vs NYSE's 6.5 hours)</li>
          </ul>
        </div>
      </section>
      
      {/* Global Times */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 LSE Hours in Your Time Zone</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Market Opens</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Market Closes</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Note</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {globalTimes.map(t => (
                <tr key={t.city} className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                  <td className="px-4 py-3">{t.flag} {t.city}</td>
                  <td className="px-4 py-3 font-medium">{t.open}</td>
                  <td className="px-4 py-3 font-medium">{t.close}</td>
                  <td className={`px-4 py-3 ${mutedColor}`}>{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Times shift by 1 hour when UK or your country changes clocks for daylight saving.
        </p>
      </section>
      
      {/* LSE vs Other Exchanges */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔄 LSE vs Other Major Exchanges</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Exchange</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Local Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>London Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Overlap with LSE</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr className={isLight ? 'bg-blue-50' : 'bg-blue-900/20'}>
                <td className="px-4 py-3 font-medium">🇬🇧 LSE (London)</td>
                <td className="px-4 py-3">8:00 AM - 4:30 PM</td>
                <td className="px-4 py-3">8:00 AM - 4:30 PM</td>
                <td className="px-4 py-3">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇺🇸 NYSE/NASDAQ</td>
                <td className="px-4 py-3">9:30 AM - 4:00 PM ET</td>
                <td className="px-4 py-3">2:30 PM - 9:00 PM</td>
                <td className="px-4 py-3 text-green-600 font-medium">2 hours (2:30-4:30 PM)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇩🇪 Frankfurt (Xetra)</td>
                <td className="px-4 py-3">9:00 AM - 5:30 PM CET</td>
                <td className="px-4 py-3">8:00 AM - 4:30 PM</td>
                <td className="px-4 py-3 text-green-600 font-medium">8.5 hours (full overlap)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇫🇷 Euronext Paris</td>
                <td className="px-4 py-3">9:00 AM - 5:30 PM CET</td>
                <td className="px-4 py-3">8:00 AM - 4:30 PM</td>
                <td className="px-4 py-3 text-green-600 font-medium">8.5 hours (full overlap)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇯🇵 Tokyo Stock Exchange</td>
                <td className="px-4 py-3">9:00 AM - 3:00 PM JST</td>
                <td className="px-4 py-3">12:00 AM - 6:00 AM</td>
                <td className="px-4 py-3 text-red-500">No overlap</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇭🇰 Hong Kong</td>
                <td className="px-4 py-3">9:30 AM - 4:00 PM HKT</td>
                <td className="px-4 py-3">1:30 AM - 8:00 AM</td>
                <td className="px-4 py-3 text-red-500">No overlap</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>📊 Trading Strategy Implications</h3>
          <p className="text-sm">
            The LSE-NYSE overlap (2:30-4:30 PM London) is the most liquid period for trading dual-listed stocks 
            and currency pairs. European markets trade in near-perfect sync, making cross-border investing seamless. 
            Asia closes before London opens, creating a gap that can lead to overnight price movements.
          </p>
        </div>
      </section>
      
      {/* Market Holidays */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 LSE Holidays (Market Closed)</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Date</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Day</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {holidays2025.map(h => (
                <tr key={h.date} className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                  <td className="px-4 py-3 font-medium">{h.date}</td>
                  <td className="px-4 py-3">{h.day}</td>
                  <td className="px-4 py-3">{h.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>Note:</strong> The LSE also has early closes (12:30 PM) on December 24 and December 31. 
            Always check the official LSE calendar for the most current schedule.
          </p>
        </div>
      </section>
      
      {/* FTSE Indices */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 Key UK Indices</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>FTSE 100</h3>
            <p className="text-sm mb-2">The UK's flagship index — top 100 companies by market cap listed on LSE.</p>
            <ul className="text-sm space-y-1 ${mutedColor}">
              <li>• Includes: Shell, AstraZeneca, HSBC, Unilever, BP</li>
              <li>• Heavily weighted toward financials, energy, healthcare</li>
              <li>• Many multinationals — ~75% of revenue from overseas</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>FTSE 250</h3>
            <p className="text-sm mb-2">Mid-cap index — companies ranked 101-350 by market cap.</p>
            <ul className="text-sm space-y-1 ${mutedColor}">
              <li>• More UK-focused than FTSE 100</li>
              <li>• Better gauge of UK domestic economy</li>
              <li>• Includes: easyJet, Greggs, JD Sports</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time does the London Stock Exchange open in New York time?</h3>
            <p className="text-sm">3:00 AM EST (winter) or 3:00 AM EDT (summer). The LSE closes at 11:30 AM New York time.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Can I trade UK stocks from the US?</h3>
            <p className="text-sm">
              Yes — many brokers offer access to LSE-listed stocks. Some UK companies also trade as ADRs on US exchanges 
              (like BP, GSK, Barclays) during US market hours.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does the LSE have after-hours trading?</h3>
            <p className="text-sm">
              Not like US markets. There's a brief closing auction (4:30-4:35 PM) but no extended after-hours session. 
              Some trading occurs via dark pools and MTFs outside regular hours.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the best time to trade UK stocks?</h3>
            <p className="text-sm">
              The first and last hours of trading typically see highest volume. For international arbitrage, 
              the LSE-NYSE overlap (2:30-4:30 PM London) is ideal.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Guides */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>London Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>UK Bank Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>London Time Difference</span>
          </Link>
          <Link href="/new-york/guide/stock-market/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🇺🇸</span><span>NYSE Trading Hours</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
