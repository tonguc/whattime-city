'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem, MobileTableOfContents } from '@/components/TableOfContents'

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
  const tableHeaderBg = isLight ? 'bg-slate-100' : 'bg-slate-700'
  
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
      <header className="mb-6">
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
        <div className={`mt-4 flex flex-wrap gap-2 sm:gap-3`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${cardBg} text-sm`}>
            <span className={`w-2 h-2 rounded-full ${isOfficeOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span>Offices {isOfficeOpen ? 'Open' : 'Closed'}</span>
          </div>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${cardBg} text-sm`}>
            <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span>Banks {isBankOpen ? 'Open' : 'Closed'}</span>
          </div>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${cardBg} text-sm`}>
            <span>🕐 {timeStr}</span>
          </div>
        </div>
      </header>
      
      {/* ============================================ */}
      {/* MOBILE TABLE OF CONTENTS - H1'in hemen altı */}
      {/* ============================================ */}
      <MobileTableOfContents items={tocItems} isLight={isLight} />
      
      {/* Layout: ToC + Content */}
      <div className="flex gap-8">
        {/* Sticky ToC - Desktop Only */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-12">
          
          {/* Overview Section */}
          <section id="overview" className={`p-4 sm:p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-48`}>
            <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>
              ⚡ Quick Overview
            </h2>
            <p className="mb-4">
              Most businesses in {city.city} operate <strong>Monday through Friday, 9 AM to 6 PM</strong> local time. 
              Banks typically close earlier (4-5 PM), while retail stores often stay open until 9-10 PM.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
              <div className={`p-2 sm:p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'} text-center`}>
                <p className="font-medium text-sm sm:text-base">🏢</p>
                <p className="text-xs sm:text-sm opacity-70">9 AM - 6 PM</p>
              </div>
              <div className={`p-2 sm:p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'} text-center`}>
                <p className="font-medium text-sm sm:text-base">🏦</p>
                <p className="text-xs sm:text-sm opacity-70">9 AM - 5 PM</p>
              </div>
              <div className={`p-2 sm:p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'} text-center`}>
                <p className="font-medium text-sm sm:text-base">🛒</p>
                <p className="text-xs sm:text-sm opacity-70">10 AM - 9 PM</p>
              </div>
            </div>
          </section>
          
          {/* Business Hours Section */}
          <section id="business-hours" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              💼 Business Hours in {city.city}
            </h2>
            <p className="mb-6 opacity-80">
              Understanding local business hours is essential for scheduling meetings, making phone calls, 
              or planning visits.
            </p>
            
            {/* Bank Hours */}
            <div id="bank-hours" className="mb-8 scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🏦 Bank Hours
              </h3>
              {/* TABLO: Horizontal scroll için wrapper */}
              <div className={`-mx-4 sm:mx-0 overflow-x-auto`}>
                <div className="min-w-[400px] px-4 sm:px-0">
                  <table className={`w-full text-sm rounded-xl border ${tableBorder} overflow-hidden`}>
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className="text-left p-3 font-medium whitespace-nowrap">Day</th>
                        <th className="text-left p-3 font-medium whitespace-nowrap">Hours</th>
                        <th className="text-left p-3 font-medium whitespace-nowrap">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">Mon - Fri</td>
                        <td className="p-3 font-medium whitespace-nowrap">9:00 AM - 5:00 PM</td>
                        <td className="p-3 opacity-70">Standard hours</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">Saturday</td>
                        <td className="p-3 font-medium whitespace-nowrap">9:00 AM - 1:00 PM</td>
                        <td className="p-3 opacity-70">Select branches</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">Sunday</td>
                        <td className="p-3 font-medium whitespace-nowrap">Closed</td>
                        <td className="p-3 opacity-70">ATMs 24/7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div id="office-hours" className="mb-8 scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🏢 Office Hours
              </h3>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <p className="mb-2"><strong>Standard:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
                <p className="text-sm opacity-70">Many offices have flexible hours, with core hours typically 10 AM - 4 PM.</p>
              </div>
            </div>
            
            {/* Retail Hours */}
            <div id="retail-hours" className="scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🛒 Retail & Shopping Hours
              </h3>
              <div className={`-mx-4 sm:mx-0 overflow-x-auto`}>
                <div className="min-w-[400px] px-4 sm:px-0">
                  <table className={`w-full text-sm rounded-xl border ${tableBorder} overflow-hidden`}>
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className="text-left p-3 font-medium">Type</th>
                        <th className="text-left p-3 font-medium">Weekday</th>
                        <th className="text-left p-3 font-medium">Weekend</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3">Shopping Malls</td>
                        <td className="p-3 font-medium">10 AM - 9 PM</td>
                        <td className="p-3 font-medium">10 AM - 10 PM</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3">Supermarkets</td>
                        <td className="p-3 font-medium">8 AM - 10 PM</td>
                        <td className="p-3 font-medium">8 AM - 10 PM</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3">Local Shops</td>
                        <td className="p-3 font-medium">9 AM - 7 PM</td>
                        <td className="p-3 font-medium">10 AM - 6 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call Times Section */}
          <section id="call-times" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              📞 Best Times to Call {city.city}
            </h2>
            <p className="mb-6 opacity-80">
              When scheduling international calls, consider the business hours overlap between your location and {city.city}.
            </p>
            
            {/* Time Overlap */}
            <div id="time-overlap" className="mb-8 scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🌍 Global Time Overlap
              </h3>
              <div className={`-mx-4 sm:mx-0 overflow-x-auto`}>
                <div className="min-w-[450px] px-4 sm:px-0">
                  <table className={`w-full text-sm rounded-xl border ${tableBorder} overflow-hidden`}>
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className="text-left p-3 font-medium">From</th>
                        <th className="text-left p-3 font-medium">Best Overlap</th>
                        <th className="text-left p-3 font-medium">Call Window</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇺🇸 New York</td>
                        <td className="p-3 font-medium whitespace-nowrap">4-5 hours</td>
                        <td className="p-3 whitespace-nowrap">9 AM - 1 PM EST</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇺🇸 Los Angeles</td>
                        <td className="p-3 font-medium whitespace-nowrap">1-2 hours</td>
                        <td className="p-3 whitespace-nowrap">6 AM - 8 AM PST</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇬🇧 London</td>
                        <td className="p-3 font-medium whitespace-nowrap">8-9 hours</td>
                        <td className="p-3 whitespace-nowrap">9 AM - 5 PM GMT</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇯🇵 Tokyo</td>
                        <td className="p-3 font-medium whitespace-nowrap">1-2 hours</td>
                        <td className="p-3 whitespace-nowrap">5 PM - 7 PM JST</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇦🇺 Sydney</td>
                        <td className="p-3 font-medium whitespace-nowrap">1-2 hours</td>
                        <td className="p-3 whitespace-nowrap">7 AM - 9 AM AEDT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className={`text-xs mt-2 ${mutedColor}`}>← Swipe to see more</p>
            </div>
            
            {/* Call Tips */}
            <div id="call-tips" className="scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                💡 Pro Tips for International Calls
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>📅 Book in advance</h4>
                  <p className="text-sm opacity-80 mt-1">With limited overlap windows, schedule calls ahead</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>🔄 Alternate timing</h4>
                  <p className="text-sm opacity-80 mt-1">Take turns with early/late calls</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>⚡ Use async</h4>
                  <p className="text-sm opacity-80 mt-1">Video messages or Slack for non-urgent matters</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium ${headingColor}`}>🌐 Confirm zones</h4>
                  <p className="text-sm opacity-80 mt-1">Double-check with calendar invites</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Stock Market Hours Section */}
          <section id="market-hours" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              📈 Stock Market Hours
            </h2>
            <p className="mb-6 opacity-80">
              Global markets operate across different time zones, creating a near 24-hour trading cycle.
            </p>
            
            {/* Stock Exchanges */}
            <div id="stock-exchanges" className="mb-8 scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                📊 Major Stock Exchange Hours
              </h3>
              <div className={`-mx-4 sm:mx-0 overflow-x-auto`}>
                <div className="min-w-[450px] px-4 sm:px-0">
                  <table className={`w-full text-sm rounded-xl border ${tableBorder} overflow-hidden`}>
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className="text-left p-3 font-medium">Exchange</th>
                        <th className="text-left p-3 font-medium">Local Hours</th>
                        <th className="text-left p-3 font-medium">UTC</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇺🇸 NYSE</td>
                        <td className="p-3 font-medium whitespace-nowrap">9:30 AM - 4:00 PM ET</td>
                        <td className="p-3 whitespace-nowrap">14:30 - 21:00</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇬🇧 LSE</td>
                        <td className="p-3 font-medium whitespace-nowrap">8:00 AM - 4:30 PM GMT</td>
                        <td className="p-3 whitespace-nowrap">08:00 - 16:30</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇯🇵 TSE</td>
                        <td className="p-3 font-medium whitespace-nowrap">9:00 AM - 3:00 PM JST</td>
                        <td className="p-3 whitespace-nowrap">00:00 - 06:00</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇭🇰 HKEX</td>
                        <td className="p-3 font-medium whitespace-nowrap">9:30 AM - 4:00 PM HKT</td>
                        <td className="p-3 whitespace-nowrap">01:30 - 08:00</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3 whitespace-nowrap">🇦🇺 ASX</td>
                        <td className="p-3 font-medium whitespace-nowrap">10:00 AM - 4:00 PM AEDT</td>
                        <td className="p-3 whitespace-nowrap">23:00 - 05:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className={`text-xs mt-2 ${mutedColor}`}>← Swipe to see more</p>
            </div>
            
            {/* Forex Hours */}
            <div id="forex-hours" className="scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                💱 Forex Market Sessions
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌏 Asian Session</h4>
                  <p className="text-sm font-medium">00:00 - 09:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">JPY pairs most active</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌍 European Session</h4>
                  <p className="text-sm font-medium">07:00 - 16:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">EUR/GBP pairs active</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌎 US Session</h4>
                  <p className="text-sm font-medium">12:00 - 21:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">USD pairs active</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>⚡ Peak Overlap</h4>
                  <p className="text-sm font-medium">12:00 - 16:00 UTC</p>
                  <p className="text-xs opacity-70 mt-1">Best liquidity</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Tools Section */}
          <section id="tools" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              🛠️ Useful Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <Link 
                href="/time/"
                className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
              >
                <span className="text-2xl mb-2 block">🔄</span>
                <h3 className={`font-medium ${headingColor}`}>Compare Time</h3>
                <p className="text-sm opacity-70">Convert times between cities</p>
              </Link>
              <Link 
                href="/meeting/"
                className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
              >
                <span className="text-2xl mb-2 block">📅</span>
                <h3 className={`font-medium ${headingColor}`}>Meeting Planner</h3>
                <p className="text-sm opacity-70">Find the best meeting time</p>
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
