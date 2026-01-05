'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface ParisTimeBusinessContentProps {
  city: City
}

export default function ParisTimeBusinessContent({ city }: ParisTimeBusinessContentProps) {
  const now = new Date()
  const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
  const hour = parisTime.getHours()
  const day = parisTime.getDay()
  
  const isWeekend = day === 0 || day === 6
  const isMarketOpen = !isWeekend && hour >= 9 && (hour < 17 || (hour === 17 && parisTime.getMinutes() < 30))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Paris</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>Time & Business</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Paris Business Hours, Euronext Trading & French Holidays 2025
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Complete guide to doing business in Paris: Euronext trading hours (9 AM - 5:30 PM CET), 
            French public holidays, banking hours, and the famous French lunch break.
          </p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isMarketOpen ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-slate-600 to-slate-700'} text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Euronext Paris</div>
              <div className="text-2xl font-bold">{isMarketOpen ? '🟢 Market Open' : '🔴 Market Closed'}</div>
              <div className="text-sm opacity-90 mt-1">{parisTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} CET</div>
            </div>
            <div className="text-4xl">🇫🇷</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📈 Euronext Paris Trading Hours</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">Session</th>
                  <th className="px-4 py-3 text-left font-semibold">Time (CET)</th>
                  <th className="px-4 py-3 text-left font-semibold">UTC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3">Pre-Open</td><td className="px-4 py-3 font-medium">7:15 AM - 9:00 AM</td><td className="px-4 py-3 text-slate-500">6:15 - 8:00 UTC</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">Continuous Trading</td><td className="px-4 py-3 font-bold text-green-700">9:00 AM - 5:30 PM</td><td className="px-4 py-3 text-green-600">8:00 - 16:30 UTC</td></tr>
                <tr><td className="px-4 py-3">Closing Auction</td><td className="px-4 py-3 font-medium">5:30 PM - 5:35 PM</td><td className="px-4 py-3 text-slate-500">16:30 - 16:35 UTC</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 CAC 40</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">The CAC 40 is France's benchmark index, featuring 40 largest French companies by market cap including LVMH, L'Oréal, TotalEnergies, and Sanofi.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎉 French Public Holidays 2025</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">Holiday</th>
                  <th className="px-4 py-3 text-left font-semibold">Date 2025</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3 font-medium">🎆 New Year's Day</td><td className="px-4 py-3">January 1 (Wed)</td></tr>
                <tr><td className="px-4 py-3 font-medium">✝️ Easter Monday</td><td className="px-4 py-3">April 21 (Mon)</td></tr>
                <tr><td className="px-4 py-3 font-medium">👷 Labour Day</td><td className="px-4 py-3">May 1 (Thu)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🎖️ Victory Day (WWII)</td><td className="px-4 py-3">May 8 (Thu)</td></tr>
                <tr><td className="px-4 py-3 font-medium">✝️ Ascension Day</td><td className="px-4 py-3">May 29 (Thu)</td></tr>
                <tr><td className="px-4 py-3 font-medium">✝️ Whit Monday</td><td className="px-4 py-3">June 9 (Mon)</td></tr>
                <tr className="bg-blue-50 dark:bg-blue-900/20"><td className="px-4 py-3 font-medium text-blue-700">🇫🇷 Bastille Day</td><td className="px-4 py-3 text-blue-600">July 14 (Mon)</td></tr>
                <tr><td className="px-4 py-3 font-medium">✝️ Assumption</td><td className="px-4 py-3">August 15 (Fri)</td></tr>
                <tr><td className="px-4 py-3 font-medium">⛪ All Saints' Day</td><td className="px-4 py-3">November 1 (Sat)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🎖️ Armistice Day</td><td className="px-4 py-3">November 11 (Tue)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🎄 Christmas Day</td><td className="px-4 py-3">December 25 (Thu)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏦 Banking & Business Hours</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold mb-2">Banks</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Mon-Fri: 9:00 AM - 5:00 PM</li>
                <li>• Lunch closure: Some close 12-2 PM</li>
                <li>• Saturday: Some open mornings</li>
                <li>• Major: BNP Paribas, Société Générale</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold mb-2">Business Culture</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Long lunch breaks (12-2 PM)</li>
                <li>• August = vacation month</li>
                <li>• "Pont" = bridge day off</li>
                <li>• 35-hour work week</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span>
              <div><div className="font-medium">Work Remote Guide</div><div className="text-sm text-slate-500">French Tech Visa, coworking</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-zones`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌍</span>
              <div><div className="font-medium">Time Zone Guide</div><div className="text-sm text-slate-500">CET/CEST explained</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
