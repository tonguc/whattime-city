'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function SydneyTimeBusinessContent({ city }: { city: City }) {
  const now = new Date()
  const sydneyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }))
  const hour = sydneyTime.getHours()
  const day = sydneyTime.getDay()
  const isWeekend = day === 0 || day === 6
  const isMarketOpen = !isWeekend && hour >= 10 && hour < 16

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Sydney Business Hours, ASX Trading & Australian Holidays 2025</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Complete guide: ASX trading hours (10 AM - 4 PM AEST/AEDT), Australian public holidays, banking hours, and global market overlap windows.</p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isMarketOpen ? 'bg-gradient-to-r from-green-500 to-teal-500' : 'bg-gradient-to-r from-slate-600 to-slate-700'} text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Australian Securities Exchange (ASX)</div>
              <div className="text-2xl font-bold">{isMarketOpen ? '🟢 Market Open' : '🔴 Market Closed'}</div>
              <div className="text-sm opacity-90 mt-1">{sydneyTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} AEDT</div>
            </div>
            <div className="text-4xl">🇦🇺</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📈 ASX Trading Hours</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Session</th><th className="px-4 py-3 text-left">Time (AEST)</th><th className="px-4 py-3 text-left">UTC</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3">Pre-Open</td><td className="px-4 py-3 font-medium">7:00 AM - 10:00 AM</td><td className="px-4 py-3 text-slate-500">21:00 - 00:00 UTC</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">Normal Trading</td><td className="px-4 py-3 font-bold text-green-700">10:00 AM - 4:00 PM</td><td className="px-4 py-3 text-green-600">00:00 - 06:00 UTC</td></tr>
                <tr><td className="px-4 py-3">Post-Market</td><td className="px-4 py-3 font-medium">4:10 PM - 5:00 PM</td><td className="px-4 py-3 text-slate-500">06:10 - 07:00 UTC</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
            <h4 className="font-semibold text-amber-800 mb-2">⏰ DST Note</h4>
            <p className="text-sm text-amber-700">Sydney observes DST (AEDT, UTC+11) from first Sunday in October to first Sunday in April. Rest of year is AEST (UTC+10).</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎉 Australian Public Holidays 2025</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Holiday</th><th className="px-4 py-3 text-left">Date 2025</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">🎆 New Year's Day</td><td className="px-4 py-3">January 1 (Wed)</td></tr>
                <tr className="bg-yellow-50 dark:bg-yellow-900/20"><td className="px-4 py-3 font-medium text-yellow-700">🇦🇺 Australia Day</td><td className="px-4 py-3 text-yellow-600">January 27 (Mon)</td></tr>
                <tr><td className="px-4 py-3 font-medium">✝️ Good Friday</td><td className="px-4 py-3">April 18 (Fri)</td></tr>
                <tr><td className="px-4 py-3 font-medium">✝️ Easter Saturday</td><td className="px-4 py-3">April 19 (Sat)</td></tr>
                <tr><td className="px-4 py-3 font-medium">✝️ Easter Monday</td><td className="px-4 py-3">April 21 (Mon)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🎖️ ANZAC Day</td><td className="px-4 py-3">April 25 (Fri)</td></tr>
                <tr><td className="px-4 py-3 font-medium">👑 Queen's Birthday (NSW)</td><td className="px-4 py-3">June 9 (Mon)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🎄 Christmas Day</td><td className="px-4 py-3">December 25 (Thu)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🎁 Boxing Day</td><td className="px-4 py-3">December 26 (Fri)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span><div><div className="font-medium">Work Remote Guide</div><div className="text-sm text-slate-500">Working Holiday Visa</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-zones`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌍</span><div><div className="font-medium">Time Zone Guide</div><div className="text-sm text-slate-500">AEST/AEDT explained</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
