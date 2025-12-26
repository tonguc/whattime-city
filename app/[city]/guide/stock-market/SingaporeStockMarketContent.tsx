'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeStockMarketContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const sgTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = sgTime.getHours()
  const currentMinute = sgTime.getMinutes()
  const dayOfWeek = sgTime.getDay()
  const timeStr = sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const currentTime = currentHour * 60 + currentMinute
  const preOpen = currentTime >= 8 * 60 + 30 && currentTime < 9 * 60
  const isOpen = currentTime >= 9 * 60 && currentTime < 12 * 60
  const isLunch = currentTime >= 12 * 60 && currentTime < 13 * 60
  const isAfternoon = currentTime >= 13 * 60 && currentTime < 17 * 60
  const isMarketOpen = !isWeekend && (isOpen || isAfternoon)
  
  const getMarketStatus = () => {
    if (isWeekend) return { status: 'Closed', color: 'bg-red-500', detail: 'Weekend - Opens Monday 9 AM' }
    if (preOpen) return { status: 'Pre-Open', color: 'bg-amber-500', detail: 'Pre-opening routine' }
    if (isOpen) return { status: 'Open', color: 'bg-green-500', detail: 'Morning session' }
    if (isLunch) return { status: 'Lunch Break', color: 'bg-amber-500', detail: 'Resumes 1 PM' }
    if (isAfternoon) return { status: 'Open', color: 'bg-green-500', detail: 'Afternoon session' }
    return { status: 'Closed', color: 'bg-red-500', detail: 'Opens 9 AM SGT' }
  }
  
  const { status, color, detail } = getMarketStatus()
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Singapore Stock Exchange Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          SGX trading times, Straits Times Index, and market sessions
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${color}`}></span>
          <span className="text-sm">SGX ({timeStr}): <strong>{status}</strong> - {detail}</span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>SGX Trading Hours: 9:00 AM - 5:00 PM SGT</strong> (UTC+8), Monday-Friday. 
          No lunch break for most securities. Pre-open from 8:30 AM. 
          The <strong>Straits Times Index (STI)</strong> is the main benchmark.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 SGX Trading Sessions</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Session</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>SGT Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>UTC</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Description</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Pre-Open</td>
                <td className="px-4 py-3">8:30 AM - 9:00 AM</td>
                <td className="px-4 py-3">00:30 - 01:00</td>
                <td className="px-4 py-3">Order entry, no execution</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Opening Auction</td>
                <td className="px-4 py-3">9:00 AM</td>
                <td className="px-4 py-3">01:00</td>
                <td className="px-4 py-3">Opening price determined</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Continuous Trading</td>
                <td className="px-4 py-3">9:00 AM - 5:00 PM</td>
                <td className="px-4 py-3">01:00 - 09:00</td>
                <td className="px-4 py-3">Main trading session</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Closing Auction</td>
                <td className="px-4 py-3">5:00 PM - 5:06 PM</td>
                <td className="px-4 py-3">09:00 - 09:06</td>
                <td className="px-4 py-3">Closing price determined</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
          <p className="text-sm">
            <strong>💡 Note:</strong> Unlike some Asian markets, SGX does NOT have a lunch break 
            for equities. Trading is continuous from 9 AM to 5 PM.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 SGX Times in Other Cities</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>SGX Opens</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>SGX Closes</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">🇺🇸 New York</td>
                <td className="px-4 py-3">8:00 PM (prev)</td>
                <td className="px-4 py-3">4:00 AM</td>
                <td className="px-4 py-3">Evening to overnight</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇬🇧 London</td>
                <td className="px-4 py-3">1:00 AM</td>
                <td className="px-4 py-3">9:00 AM</td>
                <td className="px-4 py-3">Overnight, closes at UK open</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td>
                <td className="px-4 py-3">10:00 AM</td>
                <td className="px-4 py-3">6:00 PM</td>
                <td className="px-4 py-3">1 hour behind SGX</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇭🇰 Hong Kong</td>
                <td className="px-4 py-3">9:00 AM</td>
                <td className="px-4 py-3">5:00 PM</td>
                <td className="px-4 py-3">Same timezone, same hours!</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇦🇺 Sydney</td>
                <td className="px-4 py-3">12:00 PM</td>
                <td className="px-4 py-3">8:00 PM</td>
                <td className="px-4 py-3">Afternoon for Australians</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇮🇳 Mumbai</td>
                <td className="px-4 py-3">6:30 AM</td>
                <td className="px-4 py-3">2:30 PM</td>
                <td className="px-4 py-3">Early morning to afternoon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📈 Key SGX Indices</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Straits Times Index (STI)</h3>
            <p className="text-sm mb-2">Singapore's main benchmark index tracking top 30 companies.</p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Companies:</strong> DBS, OCBC, UOB, Singtel, CapitaLand</li>
              <li>• <strong>Sectors:</strong> Banking, REITs, Industrials</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>FTSE ST All-Share</h3>
            <p className="text-sm mb-2">Broader market index covering 98% of market cap.</p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Coverage:</strong> 200+ companies</li>
              <li>• <strong>Includes:</strong> Large, mid, and small caps</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔄 Overlap with Other Markets</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Asian Markets Overlap</h3>
          <div className="text-sm space-y-2">
            <p><strong>9:00 AM - 3:00 PM SGT:</strong> SGX + Tokyo Stock Exchange both open</p>
            <p><strong>9:30 AM - 4:00 PM SGT:</strong> SGX + Hong Kong Stock Exchange both open</p>
            <p><strong>10:00 AM - 3:30 PM SGT:</strong> SGX + Shanghai/Shenzhen both open</p>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Global Market Relay</h3>
          <div className="text-sm space-y-2">
            <p>🇯🇵 Tokyo opens at 9 AM → 🇸🇬 <strong>Singapore 9 AM</strong> → 🇭🇰 Hong Kong 9:30 AM → 🇬🇧 London 8 AM (after SGX closes) → 🇺🇸 NYSE 9:30 AM</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 SGX Market Holidays 2025</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Date</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3">New Year's Day</td>
                <td className="px-4 py-3">January 1</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3">Chinese New Year</td>
                <td className="px-4 py-3">January 29-30</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Good Friday</td>
                <td className="px-4 py-3">April 18</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3">Labour Day</td>
                <td className="px-4 py-3">May 1</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Vesak Day</td>
                <td className="px-4 py-3">May 12</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3">Hari Raya Puasa</td>
                <td className="px-4 py-3">March 31</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Hari Raya Haji</td>
                <td className="px-4 py-3">June 7</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3">National Day</td>
                <td className="px-4 py-3">August 9</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Deepavali</td>
                <td className="px-4 py-3">October 20</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3">Christmas Day</td>
                <td className="px-4 py-3">December 25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does SGX have a lunch break?</h3>
            <p className="text-sm">
              No! Unlike Tokyo and Hong Kong, SGX trades continuously from 9 AM to 5 PM 
              without a lunch break for equities.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the minimum lot size on SGX?</h3>
            <p className="text-sm">
              Singapore uses a board lot of 100 shares. Some counters can be traded in 
              smaller lots through specific schemes.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Can foreigners trade on SGX?</h3>
            <p className="text-sm">
              Yes! SGX is open to international investors. You'll need a trading account 
              with a Singapore broker or an international broker with SGX access.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>Public Holidays</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
