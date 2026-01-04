'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function SydneyTimeZonesContent({ city }: { city: City }) {
  const now = new Date()
  const sydneyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Sydney Time Zone: AEST/AEDT (UTC+10/+11) Explained</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Australian Eastern Standard Time (AEST, UTC+10) or Daylight Time (AEDT, UTC+11). DST runs first Sunday Oct to first Sunday Apr - opposite to Northern Hemisphere!</p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div><div className="text-sm opacity-90 mb-1">Current Time in Sydney</div><div className="text-3xl font-bold">{sydneyTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div><div className="text-sm opacity-90 mt-1">{sydneyTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div></div>
            <div className="text-right"><div className="text-3xl font-bold">AEDT</div><div className="text-sm opacity-90">UTC+10/+11</div></div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌍 Time Difference from Sydney</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">City</th><th className="px-4 py-3 text-left">AEST (Winter)</th><th className="px-4 py-3 text-left">AEDT (Summer)</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">🇬🇧 London</td><td className="px-4 py-3">Sydney -10 hours</td><td className="px-4 py-3">Sydney -11 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 New York</td><td className="px-4 py-3">Sydney -14 hours</td><td className="px-4 py-3">Sydney -16 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 Los Angeles</td><td className="px-4 py-3">Sydney -17 hours</td><td className="px-4 py-3">Sydney -19 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td><td className="px-4 py-3" colSpan={2}>Sydney -1 hour (year-round)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇸🇬 Singapore</td><td className="px-4 py-3">Sydney -2 hours</td><td className="px-4 py-3">Sydney -3 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇦🇪 Dubai</td><td className="px-4 py-3">Sydney -6 hours</td><td className="px-4 py-3">Sydney -7 hours</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">⏰ DST Changes 2025</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">DST Ends (Fall Back)</h4>
              <p className="text-sm text-blue-700">April 6, 2025 at 3 AM → 2 AM</p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
              <h4 className="font-semibold text-amber-800 mb-2">DST Starts (Spring Forward)</h4>
              <p className="text-sm text-amber-700">October 5, 2025 at 2 AM → 3 AM</p>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 rounded-xl p-4 mt-4">
            <h4 className="font-semibold text-red-800 mb-2">⚠️ Southern Hemisphere DST</h4>
            <p className="text-sm text-red-700">Sydney's DST is OPPOSITE to Northern Hemisphere! When it's summer in Sydney (Dec-Feb), it's winter in London/NYC. This creates maximum time difference confusion in Nov-Mar.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">ASX trading</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span><div><div className="font-medium">Work Remote</div><div className="text-sm text-slate-500">Working Holiday</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
