'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface DubaiTimeZonesContentProps {
  city: City
}

export default function DubaiTimeZonesContent({ city }: DubaiTimeZonesContentProps) {
  const now = new Date()
  const dubaiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }))

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
            <span>Time Zones</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Dubai Time Zone: GST (UTC+4) Explained | No Daylight Saving
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Complete guide to Dubai's time zone: Gulf Standard Time (GST/UTC+4), why there's no 
            daylight saving, time differences from major cities, and optimal call windows for 
            global business.
          </p>
        </div>

        {/* Current Time */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Time in Dubai</div>
              <div className="text-3xl font-bold">
                {dubaiTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: true 
                })}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {dubaiTime.toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">UTC+4</div>
              <div className="text-sm opacity-90">Year-round</div>
            </div>
          </div>
        </div>

        {/* GST Explained */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🕐 Understanding Gulf Standard Time (GST)
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Facts</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex justify-between">
                  <span>Time Zone:</span>
                  <span className="font-medium">Gulf Standard Time (GST)</span>
                </li>
                <li className="flex justify-between">
                  <span>UTC Offset:</span>
                  <span className="font-medium">UTC+4:00</span>
                </li>
                <li className="flex justify-between">
                  <span>IANA Zone:</span>
                  <span className="font-medium font-mono">Asia/Dubai</span>
                </li>
                <li className="flex justify-between">
                  <span>Daylight Saving:</span>
                  <span className="font-medium text-green-600">None</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Same Time Zone As</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>🇦🇪 All UAE emirates</li>
                <li>🇴🇲 Oman (Muscat)</li>
                <li>🇬🇪 Georgia (Tbilisi)</li>
                <li>🇲🇺 Mauritius</li>
                <li>🇷🇺 Russia (Samara, Astrakhan)</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✓ No Daylight Saving Time</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              The UAE does not observe daylight saving time. Dubai stays at <strong>UTC+4 year-round</strong>, 
              making scheduling simpler. However, when countries like the US and UK change their clocks, 
              the time difference with Dubai changes.
            </p>
          </div>
        </section>

        {/* Time Differences */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🌍 Time Difference from Dubai
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">City</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Standard Time</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">DST Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇬🇧 London</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +4 hours</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +3 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇫🇷 Paris / 🇩🇪 Berlin</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +3 hours</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +2 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇺🇸 New York</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +9 hours</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +8 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇺🇸 Los Angeles</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +12 hours</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai +11 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇮🇳 Mumbai</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300" colSpan={2}>Dubai -1.5 hours (year-round)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇸🇬 Singapore</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300" colSpan={2}>Dubai -4 hours (year-round)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇯🇵 Tokyo</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300" colSpan={2}>Dubai -5 hours (year-round)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇦🇺 Sydney</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai -6 hours</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai -7 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Business Hours Overlap */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            📞 Best Call Times from Dubai
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Dubai's position between Europe and Asia creates excellent overlap with both regions. 
            US time zones are more challenging due to the large gap.
          </p>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Region</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Best Dubai Time</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Overlap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">🇮🇳 India</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">10:30 AM - 6:30 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Excellent (7+ hours)</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">🇸🇬 Singapore / 🇭🇰 Hong Kong</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">9:00 AM - 2:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Good (5 hours)</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">🇬🇧 UK / 🇪🇺 Europe</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">12:00 PM - 6:00 PM</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Good (5-6 hours)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇯🇵 Japan</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">9:00 AM - 1:00 PM</td>
                    <td className="px-4 py-3 text-sm text-amber-600 dark:text-amber-400">Moderate (4 hours)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇦🇺 Australia (Sydney)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">9:00 AM - 12:00 PM</td>
                    <td className="px-4 py-3 text-sm text-amber-600 dark:text-amber-400">Moderate (3 hours)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇺🇸 US East Coast</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">5:00 PM - 7:00 PM</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">Limited (2 hours)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">🇺🇸 US West Coast</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">8:00 PM - 10:00 PM</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">Difficult (evening)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Strategic Advantage</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Dubai's time zone makes it ideal for businesses bridging Europe and Asia. 
              Morning hours overlap with Asia/Australia, afternoons with Europe/Africa, 
              making it a natural hub for global operations.
            </p>
          </div>
        </section>

        {/* DST Warning */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            ⏰ When Time Differences Change
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Since Dubai doesn't observe DST, the time difference changes when OTHER countries 
            adjust their clocks. Mark these dates for scheduling:
          </p>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Event</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Date 2025</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Effect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">US DST Starts</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">March 9</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">NYC gap shrinks 9→8 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">UK/EU DST Starts</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">March 30</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">London gap shrinks 4→3 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Australia DST Ends</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">April 6</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Sydney gap shrinks 7→6 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Australia DST Starts</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">October 5</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Sydney gap grows 6→7 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">UK/EU DST Ends</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">October 26</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">London gap grows 3→4 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">US DST Ends</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">November 2</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">NYC gap grows 8→9 hours</td>
                  </tr>
                </tbody>
              </table>
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
              href={`/${city.slug}/guide/time-business`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">💼</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Business Hours</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">DFM, banking, Sun-Thu week</div>
              </div>
            </Link>
            <Link 
              href={`/${city.slug}/guide/work-remote`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">💻</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Work Remote</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Digital nomad visa, coworking</div>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
