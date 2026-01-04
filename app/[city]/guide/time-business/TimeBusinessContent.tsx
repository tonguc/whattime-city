'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem } from '@/components/TableOfContents'

interface Props {
  city: City
}

export default function TimeBusinessContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = cityTime.getHours()
  const currentDay = cityTime.getDay()
  const timeStr = cityTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  // Business status checks
  const isWeekday = currentDay >= 1 && currentDay <= 5
  const isBankHours = currentHour >= 9 && currentHour < 17
  const isOfficeHours = currentHour >= 9 && currentHour < 18
  const isBankOpen = isWeekday && isBankHours
  const isOfficeOpen = isWeekday && isOfficeHours
  
  // Table of Contents items
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Overview', icon: '⚡' },
    { id: 'business-hours', title: 'Business Hours', icon: '💼' },
    { id: 'bank-hours', title: 'Bank Hours', icon: '🏦', level: 'h3' },
    { id: 'office-hours', title: 'Office Hours', icon: '🏢', level: 'h3' },
    { id: 'retail-hours', title: 'Retail & Shopping', icon: '🛒', level: 'h3' },
    { id: 'call-times', title: 'Best Call Times', icon: '📞' },
    { id: 'time-overlap', title: 'Global Time Overlap', icon: '🌍', level: 'h3' },
    { id: 'call-tips', title: 'Pro Tips', icon: '💡', level: 'h3' },
    { id: 'market-hours', title: 'Stock Market Hours', icon: '📈' },
    { id: 'stock-exchanges', title: 'Major Exchanges', icon: '📊', level: 'h3' },
    { id: 'forex-hours', title: 'Forex Trading', icon: '💱', level: 'h3' },
    { id: 'tools', title: 'Useful Tools', icon: '🛠️' },
  ]
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {city.city} Time & Business Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete guide to business hours, best call times, and market trading hours
        </p>
        
        {/* Live Status Bar */}
        <div className={`mt-4 flex flex-wrap gap-3`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
            <span className={`w-2 h-2 rounded-full ${isOfficeOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="text-sm">Offices {isOfficeOpen ? 'Open' : 'Closed'}</span>
          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
            <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="text-sm">Banks {isBankOpen ? 'Open' : 'Closed'}</span>
          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
            <span className="text-sm">🕐 {timeStr} local time</span>
          </div>
        </div>
      </header>
      
      {/* Layout: ToC + Content */}
      <div className="flex gap-8">
        {/* Sticky ToC - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-12">
          
          {/* Overview Section */}
          <section id="overview" className={`p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-24`}>
            <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>
              ⚡ Quick Overview
            </h2>
            <p className="mb-4">
              Most businesses in {city.city} operate <strong>Monday through Friday, 9 AM to 6 PM</strong> local time. 
              Banks typically close earlier (4-5 PM), while retail stores often stay open until 9-10 PM.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}>
                <p className="font-medium">🏢 Offices</p>
                <p className="text-sm opacity-70">Mon-Fri: 9 AM - 6 PM</p>
              </div>
              <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}>
                <p className="font-medium">🏦 Banks</p>
                <p className="text-sm opacity-70">Mon-Fri: 9 AM - 5 PM</p>
              </div>
              <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}>
                <p className="font-medium">🛒 Retail</p>
                <p className="text-sm opacity-70">Daily: 10 AM - 9 PM</p>
              </div>
            </div>
          </section>
          
          {/* Business Hours Section */}
          <section id="business-hours" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              💼 Business Hours in {city.city}
            </h2>
            <p className="mb-6 opacity-80">
              Understanding local business hours is essential for scheduling meetings, making phone calls, 
              or planning visits. Here's a comprehensive breakdown of operating hours across different sectors.
            </p>
            
            {/* Bank Hours */}
            <div id="bank-hours" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🏦 Bank Hours
              </h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">Day</th>
                      <th className="text-left p-3 font-medium">Hours</th>
                      <th className="text-left p-3 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Monday - Friday</td>
                      <td className="p-3 font-medium">9:00 AM - 5:00 PM</td>
                      <td className="p-3 opacity-70">Standard hours</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Saturday</td>
                      <td className="p-3 font-medium">9:00 AM - 1:00 PM</td>
                      <td className="p-3 opacity-70">Select branches only</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Sunday</td>
                      <td className="p-3 font-medium">Closed</td>
                      <td className="p-3 opacity-70">ATMs available 24/7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Office Hours */}
            <div id="office-hours" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🏢 Office Hours
              </h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">Business Type</th>
                      <th className="text-left p-3 font-medium">Typical Hours</th>
                      <th className="text-left p-3 font-medium">Lunch Break</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Corporate Offices</td>
                      <td className="p-3 font-medium">9:00 AM - 6:00 PM</td>
                      <td className="p-3 opacity-70">12:00 - 1:00 PM</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Government Offices</td>
                      <td className="p-3 font-medium">8:30 AM - 4:30 PM</td>
                      <td className="p-3 opacity-70">12:00 - 1:00 PM</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Professional Services</td>
                      <td className="p-3 font-medium">9:00 AM - 5:00 PM</td>
                      <td className="p-3 opacity-70">Varies</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Tech Companies</td>
                      <td className="p-3 font-medium">10:00 AM - 7:00 PM</td>
                      <td className="p-3 opacity-70">Flexible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Retail Hours */}
            <div id="retail-hours" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🛒 Retail & Shopping Hours
              </h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">Store Type</th>
                      <th className="text-left p-3 font-medium">Weekdays</th>
                      <th className="text-left p-3 font-medium">Weekend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Shopping Malls</td>
                      <td className="p-3 font-medium">10 AM - 9 PM</td>
                      <td className="p-3">10 AM - 8 PM</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Supermarkets</td>
                      <td className="p-3 font-medium">7 AM - 10 PM</td>
                      <td className="p-3">8 AM - 9 PM</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Department Stores</td>
                      <td className="p-3 font-medium">10 AM - 8 PM</td>
                      <td className="p-3">11 AM - 7 PM</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Convenience Stores</td>
                      <td className="p-3 font-medium" colSpan={2}>Often 24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Call Times Section */}
          <section id="call-times" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              📞 Best Times to Call {city.city}
            </h2>
            <p className="mb-6 opacity-80">
              When scheduling international calls, timing is everything. Here's when you're most likely 
              to reach people in {city.city} and how to find the best overlap with other time zones.
            </p>
            
            {/* Best Times Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <div className="text-green-500 text-2xl mb-2">✅</div>
                <h4 className={`font-semibold ${headingColor}`}>Best Time</h4>
                <p className="text-lg font-medium">10:00 AM - 12:00 PM</p>
                <p className="text-sm opacity-70 mt-1">People are settled, before lunch rush</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <div className="text-yellow-500 text-2xl mb-2">⚠️</div>
                <h4 className={`font-semibold ${headingColor}`}>Okay Time</h4>
                <p className="text-lg font-medium">2:00 PM - 4:00 PM</p>
                <p className="text-sm opacity-70 mt-1">Post-lunch, before end-of-day rush</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <div className="text-red-500 text-2xl mb-2">❌</div>
                <h4 className={`font-semibold ${headingColor}`}>Avoid</h4>
                <p className="text-lg font-medium">12:00 PM - 2:00 PM</p>
                <p className="text-sm opacity-70 mt-1">Lunch hours, hard to reach people</p>
              </div>
            </div>
            
            {/* Time Overlap */}
            <div id="time-overlap" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🌍 Global Time Overlap with {city.city}
              </h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">City</th>
                      <th className="text-left p-3 font-medium">Best Overlap</th>
                      <th className="text-left p-3 font-medium">Their Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇺🇸 New York</td>
                      <td className="p-3 font-medium">3-4 hours</td>
                      <td className="p-3">9 AM - 12 PM EST</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇬🇧 London</td>
                      <td className="p-3 font-medium">6-7 hours</td>
                      <td className="p-3">9 AM - 4 PM GMT</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇦🇪 Dubai</td>
                      <td className="p-3 font-medium">5-6 hours</td>
                      <td className="p-3">10 AM - 4 PM GST</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇸🇬 Singapore</td>
                      <td className="p-3 font-medium">3-4 hours</td>
                      <td className="p-3">9 AM - 12 PM SGT</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇯🇵 Tokyo</td>
                      <td className="p-3 font-medium">2-3 hours</td>
                      <td className="p-3">9 AM - 11 AM JST</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇦🇺 Sydney</td>
                      <td className="p-3 font-medium">1-2 hours</td>
                      <td className="p-3">7 AM - 9 AM AEDT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Call Tips */}
            <div id="call-tips" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                💡 Pro Tips for International Calls
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>📅 Book in advance</h4>
                  <p className="text-sm opacity-80 mt-1">With limited overlap windows, schedule calls ahead of time</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>🔄 Alternate timing</h4>
                  <p className="text-sm opacity-80 mt-1">Take turns with early/late calls to share the inconvenience</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>⚡ Use async when possible</h4>
                  <p className="text-sm opacity-80 mt-1">Record video messages or use Slack/email for non-urgent matters</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>🌐 Confirm time zones</h4>
                  <p className="text-sm opacity-80 mt-1">Double-check with calendar invites that show both time zones</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Stock Market Hours Section */}
          <section id="market-hours" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              📈 Stock Market Hours
            </h2>
            <p className="mb-6 opacity-80">
              Global markets operate across different time zones, creating a near 24-hour trading cycle. 
              Understanding these hours is crucial for investors and traders.
            </p>
            
            {/* Stock Exchanges */}
            <div id="stock-exchanges" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                📊 Major Stock Exchange Hours
              </h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">Exchange</th>
                      <th className="text-left p-3 font-medium">Local Hours</th>
                      <th className="text-left p-3 font-medium">UTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇺🇸 NYSE / NASDAQ</td>
                      <td className="p-3 font-medium">9:30 AM - 4:00 PM ET</td>
                      <td className="p-3">14:30 - 21:00</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇬🇧 London (LSE)</td>
                      <td className="p-3 font-medium">8:00 AM - 4:30 PM GMT</td>
                      <td className="p-3">08:00 - 16:30</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇯🇵 Tokyo (TSE)</td>
                      <td className="p-3 font-medium">9:00 AM - 3:00 PM JST</td>
                      <td className="p-3">00:00 - 06:00</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇭🇰 Hong Kong (HKEX)</td>
                      <td className="p-3 font-medium">9:30 AM - 4:00 PM HKT</td>
                      <td className="p-3">01:30 - 08:00</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇩🇪 Frankfurt (XETRA)</td>
                      <td className="p-3 font-medium">9:00 AM - 5:30 PM CET</td>
                      <td className="p-3">08:00 - 16:30</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">🇦🇺 Sydney (ASX)</td>
                      <td className="p-3 font-medium">10:00 AM - 4:00 PM AEDT</td>
                      <td className="p-3">23:00 - 05:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Forex Hours */}
            <div id="forex-hours" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                💱 Forex Market Sessions
              </h3>
              <p className="mb-4 opacity-80">
                The forex market operates 24 hours during weekdays, with different sessions offering varying liquidity:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌏 Asian Session</h4>
                  <p className="text-sm font-medium">Tokyo: 00:00 - 09:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">Lower volatility, JPY pairs most active</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌍 European Session</h4>
                  <p className="text-sm font-medium">London: 07:00 - 16:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">Highest volume, EUR/GBP pairs active</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌎 US Session</h4>
                  <p className="text-sm font-medium">New York: 12:00 - 21:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">High volatility, USD pairs active</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>⚡ Peak Overlap</h4>
                  <p className="text-sm font-medium">London/NY: 12:00 - 16:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">Best liquidity for major pairs</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Tools Section */}
          <section id="tools" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              🛠️ Useful Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/time-converter/"
                className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
              >
                <span className="text-2xl mb-2 block">🔄</span>
                <h3 className={`font-medium ${headingColor}`}>Time Converter</h3>
                <p className="text-sm opacity-70">Convert times between {city.city} and other cities</p>
              </Link>
              <Link 
                href="/meeting/"
                className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
              >
                <span className="text-2xl mb-2 block">📅</span>
                <h3 className={`font-medium ${headingColor}`}>Meeting Planner</h3>
                <p className="text-sm opacity-70">Find the best meeting time across time zones</p>
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
