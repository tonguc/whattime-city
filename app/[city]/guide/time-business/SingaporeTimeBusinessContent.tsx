'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface SingaporeTimeBusinessContentProps {
  city: City
}

export default function SingaporeTimeBusinessContent({ city }: SingaporeTimeBusinessContentProps) {
  const now = new Date()
  const sgTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }))
  const hour = sgTime.getHours()
  const day = sgTime.getDay()
  
  const isWeekend = day === 0 || day === 6
  const isMorningSession = !isWeekend && hour >= 9 && hour < 12
  const isLunchBreak = !isWeekend && hour >= 12 && hour < 13
  const isAfternoonSession = !isWeekend && hour >= 13 && (hour < 17 || (hour === 17 && sgTime.getMinutes() < 16))
  const isMarketOpen = isMorningSession || isAfternoonSession

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Singapore</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>Time & Business</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Singapore Business Hours, SGX Trading Hours & Holidays 2025
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Complete guide to doing business in Singapore: SGX trading hours (9 AM - 5:16 PM with lunch break), 
            public holidays, banking hours, and best times for international calls. Updated for 2025.
          </p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isMarketOpen ? 'bg-gradient-to-r from-green-500 to-emerald-500' : isLunchBreak ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-slate-600 to-slate-700'} text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Singapore Exchange (SGX)</div>
              <div className="text-2xl font-bold">
                {isMarketOpen && '🟢 Market Open'}
                {isLunchBreak && '🟡 Lunch Break (12-1 PM)'}
                {!isMarketOpen && !isLunchBreak && '🔴 Market Closed'}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} SGT
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl">🏛️</div>
              <div className="text-sm opacity-90 mt-1">SGX</div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📈 SGX Trading Hours</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Session</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Time (SGT)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">UTC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3 text-sm">Pre-Open</td><td className="px-4 py-3 text-sm font-medium">8:30 AM - 8:58 AM</td><td className="px-4 py-3 text-sm text-slate-500">0:30 - 0:58 UTC</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">Morning Session</td><td className="px-4 py-3 text-sm font-bold text-green-700">9:00 AM - 12:00 PM</td><td className="px-4 py-3 text-sm text-green-600">1:00 - 4:00 UTC</td></tr>
                <tr><td className="px-4 py-3 text-sm text-amber-600">Lunch Break</td><td className="px-4 py-3 text-sm font-medium text-amber-600">12:00 PM - 1:00 PM</td><td className="px-4 py-3 text-sm text-slate-500">4:00 - 5:00 UTC</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">Afternoon Session</td><td className="px-4 py-3 text-sm font-bold text-green-700">1:00 PM - 5:16 PM</td><td className="px-4 py-3 text-sm text-green-600">5:00 - 9:16 UTC</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Half-Day Trading</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">SGX has half-day trading (9 AM - 12:16 PM) on Chinese New Year Eve, Christmas Eve, and New Year's Eve if they fall on trading days.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎉 Singapore Public Holidays 2025</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Holiday</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Date 2025</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3 text-sm font-medium">🎆 New Year's Day</td><td className="px-4 py-3 text-sm">January 1 (Wed)</td></tr>
                <tr className="bg-red-50 dark:bg-red-900/20"><td className="px-4 py-3 text-sm font-medium text-red-700">🧧 Chinese New Year</td><td className="px-4 py-3 text-sm text-red-600">January 29-30 (Wed-Thu)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">✝️ Good Friday</td><td className="px-4 py-3 text-sm">April 18 (Fri)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">👷 Labour Day</td><td className="px-4 py-3 text-sm">May 1 (Thu)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">🪷 Vesak Day</td><td className="px-4 py-3 text-sm">May 12 (Mon)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">🌙 Hari Raya Puasa</td><td className="px-4 py-3 text-sm">March 31 (Mon)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">🐑 Hari Raya Haji</td><td className="px-4 py-3 text-sm">June 7 (Sat)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">🇸🇬 National Day</td><td className="px-4 py-3 text-sm">August 9 (Sat)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">🪔 Deepavali</td><td className="px-4 py-3 text-sm">October 20 (Mon)</td></tr>
                <tr><td className="px-4 py-3 text-sm font-medium">🎄 Christmas Day</td><td className="px-4 py-3 text-sm">December 25 (Thu)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏦 Banking Hours</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Standard Hours</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Mon-Fri: 9:30 AM - 4:30 PM</li>
                <li>• Saturday: 9:30 AM - 12:30 PM (some)</li>
                <li>• Sunday: Closed</li>
                <li>• ATMs: 24/7</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Major Banks</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• DBS Bank (local leader)</li>
                <li>• OCBC Bank</li>
                <li>• UOB</li>
                <li>• Standard Chartered</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Work Remote Guide</div>
                <div className="text-sm text-slate-500">Tech Pass visa, coworking</div>
              </div>
            </Link>
            <Link href={`/${city.slug}/guide/time-zones`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Time Zone Guide</div>
                <div className="text-sm text-slate-500">SGT (UTC+8), no DST</div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
