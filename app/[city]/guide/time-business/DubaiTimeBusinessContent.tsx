'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface DubaiTimeBusinessContentProps {
  city: City
}

export default function DubaiTimeBusinessContent({ city }: DubaiTimeBusinessContentProps) {
  const now = new Date()
  const dubaiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }))
  const hour = dubaiTime.getHours()
  const day = dubaiTime.getDay() // 0=Sunday, 5=Friday, 6=Saturday
  
  // DFM operates Sunday-Thursday, 10:00-14:45
  const isWeekend = day === 5 || day === 6 // Friday-Saturday weekend
  const isPreMarket = !isWeekend && hour >= 9 && hour < 10
  const isMarketOpen = !isWeekend && hour >= 10 && (hour < 14 || (hour === 14 && dubaiTime.getMinutes() < 45))
  const isMarketClosed = isWeekend || hour >= 15 || hour < 9

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Dubai</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>Time &amp; Business</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Dubai Business Hours, DFM Trading Hours &amp; UAE Holidays 2025
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Complete guide to doing business in Dubai: Dubai Financial Market (DFM) trading hours, 
            UAE public holidays including Islamic holidays, banking hours, and the Sunday-Thursday 
            work week. Updated for 2025.
          </p>
        </div>

        {/* Live Market Status */}
        <div className={`rounded-xl p-6 mb-10 ${
          isMarketOpen 
            ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
            : isPreMarket
              ? 'bg-gradient-to-r from-amber-500 to-orange-500'
              : 'bg-gradient-to-r from-slate-600 to-slate-700'
        } text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Dubai Financial Market (DFM)</div>
              <div className="text-2xl font-bold">
                {isMarketOpen && '🟢 Market Open'}
                {isPreMarket && '🟡 Pre-Opening Session'}
                {isMarketClosed && !isPreMarket && '🔴 Market Closed'}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {dubaiTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })} GST
                {isWeekend && ' • Weekend (Fri-Sat)'}
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl">🏛️</div>
              <div className="text-sm opacity-90 mt-1">DFM</div>
            </div>
          </div>
        </div>

        {/* DFM Trading Hours */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            📈 Dubai Financial Market (DFM) Trading Hours
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            The DFM operates on the UAE's Sunday-Thursday work week, closing for the Friday-Saturday 
            weekend. Unlike Western markets, there is no pre-market or after-hours trading for equities.
          </p>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Session</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Time (GST)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">UTC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Pre-Opening</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">9:30 AM - 10:00 AM</td>
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">5:30 - 6:00 UTC</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">Regular Trading</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-700 dark:text-green-300">10:00 AM - 2:45 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">6:00 - 10:45 UTC</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Trading Days</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100" colSpan={2}>Sunday - Thursday</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Weekend Closure</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400" colSpan={2}>Friday &amp; Saturday</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Important: UAE Work Week</h4>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              The UAE changed its weekend from Friday-Saturday to <strong>Friday-Saturday</strong> in 2022 
              (previously it was Friday-Saturday). However, the government sector now works Monday-Friday 
              with a half-day on Friday. Private sector varies - many businesses still follow Sun-Thu.
            </p>
          </div>
        </section>

        {/* UAE Public Holidays 2025 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎉 UAE Public Holidays 2025
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            The UAE observes both Gregorian calendar holidays (fixed dates) and Islamic holidays 
            (based on lunar sightings, dates may vary by 1-2 days). Both DFM and NASDAQ Dubai 
            close on public holidays.
          </p>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Holiday</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Date 2025</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Days Off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🎆 New Year's Day</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">January 1 (Wed)</td>
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">1 day</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">🌙 Eid Al Fitr *</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Mar 30 - Apr 1 (Sun-Tue)</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">3+ days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">⛰️ Arafat Day *</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">June 5 (Thu)</td>
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">1 day</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">🐑 Eid Al Adha *</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">June 6-8 (Fri-Sun)</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">3+ days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">📅 Islamic New Year *</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">June 26 (Thu)</td>
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">1 day</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🕌 Prophet's Birthday *</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">September 5 (Fri)</td>
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">1 day</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🎖️ Commemoration Day</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">December 1 (Mon)</td>
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">1 day</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">🇦🇪 UAE National Day</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">December 2-3 (Tue-Wed)</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">2 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">* Islamic Holiday Dates</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Islamic holidays are based on the lunar calendar and confirmed by moon sighting committees. 
              Dates may shift by 1-2 days. Ramadan 2025 is expected to begin around February 28, making 
              Eid Al Fitr around March 30.
            </p>
          </div>
        </section>

        {/* Ramadan Business Impact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🌙 Ramadan Business Hours
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            During Ramadan (approximately Feb 28 - Mar 29, 2025), business operations change significantly. 
            Working hours are legally reduced, and the pace of business slows.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">During Ramadan</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Working hours reduced by 2 hours/day</li>
                <li>• Government: typically 9 AM - 2 PM</li>
                <li>• Many meetings postponed</li>
                <li>• Eating/drinking in public restricted</li>
                <li>• Malls open late (after iftar ~7 PM)</li>
                <li>• DFM operates normal hours</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Business Tips</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Schedule meetings before noon</li>
                <li>• Expect slower response times</li>
                <li>• Avoid scheduling trips during Eid</li>
                <li>• Iftar dinners = networking opportunities</li>
                <li>• Dress more conservatively</li>
                <li>• Be patient and respectful</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Banking Hours */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🏦 Banking Hours in Dubai
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Bank</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Sun-Thu</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">ATMs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Emirates NBD</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">8:00 AM - 3:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">24/7</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Mashreq Bank</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">8:00 AM - 3:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">24/7</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Dubai Islamic Bank</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">8:00 AM - 2:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">24/7</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">ADCB</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">8:00 AM - 3:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">24/7</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Mall Branches</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">10:00 AM - 10:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">💳 Payment Culture</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              Dubai is highly card-friendly. Apple Pay, Google Pay, and contactless payments are widely 
              accepted. Cash is rarely needed except for small purchases and taxis. ATMs accept international 
              cards (Visa, Mastercard). Currency: UAE Dirham (AED), pegged to USD at ~3.67 AED = $1.
            </p>
          </div>
        </section>

        {/* Global Market Overlap */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🌍 Global Market Overlap with Dubai
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Dubai's position between Asian and European time zones creates strategic trading windows. 
            The DFM (10 AM - 2:45 PM GST) overlaps with Asian markets in the morning and European 
            markets in the early afternoon.
          </p>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Market</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Local Hours</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Dubai Time (GST)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Overlap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇮🇳 NSE (Mumbai)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">9:15 AM - 3:30 PM</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">7:45 AM - 2:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">4 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇸🇦 Tadawul (Riyadh)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">10:00 AM - 3:00 PM</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">11:00 AM - 4:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">3.75 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇬🇧 LSE (London)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">8:00 AM - 4:30 PM</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">12:00 PM - 8:30 PM</td>
                    <td className="px-4 py-3 text-sm text-amber-600 dark:text-amber-400">2.75 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇩🇪 XETRA (Frankfurt)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">9:00 AM - 5:30 PM</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">12:00 PM - 8:30 PM</td>
                    <td className="px-4 py-3 text-sm text-amber-600 dark:text-amber-400">2.75 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇺🇸 NYSE (New York)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">9:30 AM - 4:00 PM</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">6:30 PM - 1:00 AM</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">No overlap</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Business Culture */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🤝 Dubai Business Culture
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Meeting Etiquette</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Handshakes are common (same-sex)</li>
                <li>• Wait for women to extend hand first</li>
                <li>• Business cards exchanged formally</li>
                <li>• Small talk before business is expected</li>
                <li>• Decisions often require multiple meetings</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Communication Style</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• WhatsApp is widely used for business</li>
                <li>• Email responses may take 24-48 hours</li>
                <li>• Hierarchy is respected</li>
                <li>• "Inshallah" means tentative commitment</li>
                <li>• Relationship-building is crucial</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🔗 Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href={`/${city.slug}/guide/work-remote`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">💻</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Work Remote Guide</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Digital nomad visa, coworking</div>
              </div>
            </Link>
            <Link 
              href={`/${city.slug}/guide/time-zones`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Time Zone Guide</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">GST explained, no DST</div>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
