'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesStockMarketContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const laTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = laTime.getHours()
  const currentMinute = laTime.getMinutes()
  const currentDay = laTime.getDay()
  
  // NYSE trading hours in PST
  const isPreMarket = currentDay >= 1 && currentDay <= 5 && currentHour >= 4 && currentHour < 6.5
  const isMarketOpen = currentDay >= 1 && currentDay <= 5 && 
    ((currentHour === 6 && currentMinute >= 30) || (currentHour > 6 && currentHour < 13))
  const isAfterHours = currentDay >= 1 && currentDay <= 5 && currentHour >= 13 && currentHour < 20
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const greenBg = isLight ? 'bg-green-50' : 'bg-green-900/20'
  const blueBg = isLight ? 'bg-blue-50' : 'bg-blue-900/20'
  
  let marketStatus = 'Closed'
  let statusColor = 'bg-red-500'
  if (isMarketOpen) {
    marketStatus = 'OPEN'
    statusColor = 'bg-green-500'
  } else if (isPreMarket) {
    marketStatus = 'Pre-Market'
    statusColor = 'bg-yellow-500'
  } else if (isAfterHours) {
    marketStatus = 'After-Hours'
    statusColor = 'bg-blue-500'
  }
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Stock Market Hours in Los Angeles
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          NYSE, NASDAQ, and trading hours from the West Coast perspective
        </p>
        
        {/* Live Market Status */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
          <span className="text-sm font-medium">
            US Markets: {marketStatus}
          </span>
        </div>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          The <strong>NYSE and NASDAQ open at 6:30 AM PST</strong> and close at <strong>1:00 PM PST</strong> 
          on weekdays. For West Coast traders, this means early mornings — the opening bell rings before most 
          Californians are at their desk. Pre-market trading starts at 4:00 AM PST, and after-hours extends 
          until 8:00 PM PST.
        </p>
      </section>

      {/* Trading Hours Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📊 Complete Trading Schedule (LA Time)
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Session</th>
                <th className="text-left p-3 font-medium">LA Time (PST/PDT)</th>
                <th className="text-left p-3 font-medium">ET Time</th>
                <th className="text-left p-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">Pre-Market</td>
                <td className="p-3">4:00 AM - 6:30 AM</td>
                <td className="p-3">7:00 AM - 9:30 AM</td>
                <td className="p-3">Limited liquidity, wider spreads</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-bold">Regular Hours</td>
                <td className="p-3 font-bold">6:30 AM - 1:00 PM</td>
                <td className="p-3 font-bold">9:30 AM - 4:00 PM</td>
                <td className="p-3">Peak trading volume & liquidity</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">After-Hours</td>
                <td className="p-3">1:00 PM - 8:00 PM</td>
                <td className="p-3">4:00 PM - 11:00 PM</td>
                <td className="p-3">Extended trading, lower volume</td>
              </tr>
              <tr className={isLight ? 'bg-red-50' : 'bg-red-900/20'}>
                <td className="p-3 font-medium">Closed</td>
                <td className="p-3">8:00 PM - 4:00 AM</td>
                <td className="p-3">11:00 PM - 7:00 AM</td>
                <td className="p-3">No trading</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* West Coast Challenges */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ⏰ West Coast Trading Challenges
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${
            isLight ? 'bg-red-50' : 'bg-red-900/20'
          }`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>❌ The Challenges</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>6:30 AM Opening:</strong> Before most people's commute</li>
              <li><strong>1:00 PM Closing:</strong> Markets close during lunch</li>
              <li><strong>Missing Morning Moves:</strong> Sleep through early volatility</li>
              <li><strong>Earnings Calls:</strong> Often at 2-5 PM ET (11 AM-2 PM PST)</li>
              <li><strong>Economic Data:</strong> Released 5:30 AM PST (8:30 AM ET)</li>
              <li><strong>Breaking News:</strong> Happens before you wake up</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✅ The Advantages</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Afternoon Free:</strong> Markets close at 1 PM</li>
              <li><strong>Less Emotional:</strong> Sleep through opening panic</li>
              <li><strong>Research Time:</strong> Analyze after-close till evening</li>
              <li><strong>Asian Markets:</strong> Trade Tokyo/HK in evening</li>
              <li><strong>Crypto Never Sleeps:</strong> West Coast friendly</li>
              <li><strong>After-Hours:</strong> Full access 1-8 PM PST</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended Schedules */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📅 Recommended Trading Schedules for LA
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌅 Day Trader Schedule</h3>
            <ul className="space-y-2">
              <li><strong>5:30 AM:</strong> Wake up, check overnight news & pre-market</li>
              <li><strong>6:00 AM:</strong> Review watchlist, plan trades</li>
              <li><strong>6:30 AM:</strong> Market open — most active first 90 minutes</li>
              <li><strong>8:00-11:00 AM:</strong> Main trading window</li>
              <li><strong>11:00 AM-1:00 PM:</strong> Reduced activity, close positions</li>
              <li><strong>1:00 PM:</strong> Market close, done for the day</li>
              <li><strong>Afternoon:</strong> Research, analysis, life outside trading</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>📈 Swing Trader Schedule</h3>
            <ul className="space-y-2">
              <li><strong>7:00-8:00 AM:</strong> Check positions, set alerts</li>
              <li><strong>12:00-1:00 PM:</strong> Review before close, adjust if needed</li>
              <li><strong>After 1:00 PM:</strong> Research new opportunities</li>
              <li><strong>Evening:</strong> Earnings calls, company research</li>
              <li><strong>Flexibility:</strong> No need for 6:30 AM wake-up</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💼 Long-Term Investor Schedule</h3>
            <ul className="space-y-2">
              <li><strong>Any time after 6:30 AM:</strong> Place orders when convenient</li>
              <li><strong>Lunch hour trading:</strong> Use 12-1 PM to check in</li>
              <li><strong>After close:</strong> Research and portfolio review</li>
              <li><strong>Weekend:</strong> Deep analysis without market pressure</li>
              <li><strong>No rush:</strong> West Coast time lag is irrelevant</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Times */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🔔 Critical Times to Watch (LA Time)
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Time (PST)</th>
                <th className="text-left p-3 font-medium">Time (ET)</th>
                <th className="text-left p-3 font-medium">Event</th>
                <th className="text-left p-3 font-medium">Importance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className={greenBg}>
                <td className="p-3 font-bold">5:30 AM</td>
                <td className="p-3">8:30 AM</td>
                <td className="p-3">Economic Data Releases</td>
                <td className="p-3">🔥 Critical - Jobs, GDP, CPI</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">6:30 AM</td>
                <td className="p-3">9:30 AM</td>
                <td className="p-3">Market Open</td>
                <td className="p-3">🔥 High volatility first 30 min</td>
              </tr>
              <tr>
                <td className="p-3">7:00-8:00 AM</td>
                <td className="p-3">10:00-11:00 AM</td>
                <td className="p-3">Morning Trading Peak</td>
                <td className="p-3">⚡ Highest volume window</td>
              </tr>
              <tr>
                <td className="p-3">11:00 AM-1:00 PM</td>
                <td className="p-3">2:00-4:00 PM</td>
                <td className="p-3">Afternoon Session</td>
                <td className="p-3">📊 Closing moves, position adjustments</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-bold">1:00 PM</td>
                <td className="p-3">4:00 PM</td>
                <td className="p-3">Market Close</td>
                <td className="p-3">🔥 Final trades, index rebalancing</td>
              </tr>
              <tr>
                <td className="p-3">2:00 PM</td>
                <td className="p-3">5:00 PM</td>
                <td className="p-3">FOMC Announcements</td>
                <td className="p-3">🔥 Fed rate decisions (8x/year)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Trading Platforms */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💻 Recommended Platforms for LA Traders
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Mobile-First (For Early Hours)</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Robinhood:</strong> Simple, mobile-native, 6:30 AM ready</li>
              <li><strong>Webull:</strong> Extended hours (4 AM-8 PM PST)</li>
              <li><strong>TD Ameritrade Mobile:</strong> Full platform on phone</li>
              <li><strong>E*TRADE Mobile:</strong> Quick trades from bed</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Desktop Power Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Interactive Brokers:</strong> Pro features, low fees</li>
              <li><strong>TD Ameritrade thinkorswim:</strong> Advanced charting</li>
              <li><strong>TradeStation:</strong> For serious day traders</li>
              <li><strong>Fidelity Active Trader Pro:</strong> Research heavy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          💡 Pro Tips for West Coast Traders
        </h2>
        <ul className="space-y-2">
          <li>✓ <strong>Set multiple alarms:</strong> 5:45 AM, 6:15 AM, 6:25 AM for market open</li>
          <li>✓ <strong>Automate pre-market research:</strong> Emails/alerts overnight</li>
          <li>✓ <strong>Use limit orders:</strong> Set them night before, execute at open</li>
          <li>✓ <strong>Embrace after-hours:</strong> 1-8 PM PST is your advantage</li>
          <li>✓ <strong>Consider swing trading:</strong> Less stress than day trading at 6:30 AM</li>
          <li>✓ <strong>Weekend analysis:</strong> Research when not fighting time zones</li>
          <li>✓ <strong>Coffee ready:</strong> Brew at 6:20 AM, trade at 6:30 AM ☕</li>
        </ul>
      </section>

      {/* Related Links */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          📚 Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🏢</span>
            <div>
              <span className={`font-medium ${headingColor}`}>LA Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>When businesses operate</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/time-difference/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🌍</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Time Difference</span>
              <p className={`text-xs ${mutedColor}`}>PST vs other zones</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
